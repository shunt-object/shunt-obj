<template>
<div style="  position:relative;">
    <div class="total-header" style="margin-left:20px;">
        <span></span>
        用户数据
    </div>  
        <!--<input type="button" value="导出" style="width:50px;height:30px;left:30px;top:50px;color:#333" v-on:click="daochu">-->
    <div class="dvsmain">
        
        <div class="zhengtab">
            <table class="table table-bordered" id="tabelId">
                <thead class="row">
                    <tr class="treated">
                        <th class="text-center thtop thtops" prop="username">用户名</th>
                        <th class="text-center thtop" prop="realname">登录名</th>
                        <th class="text-center thtop" prop="tenant">公司信息</th>
                        <th class="text-center thtop" prop="addr">注册地址</th>
                        <th class="text-center thtop" prop="industryStr.name">行业信息</th>
                        <th class="text-center thtop" prop="phone">手机号码</th>
                        <th class="text-center thtop" prop="email">邮件地址</th>
                        <th class="text-center thtop" prop="createDt">注册时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="re in responers" class="ttodyTr">
                        <td>{{re.username}}</td>
                        <td>{{re.realname}}</td>
                        <td>{{re.tenant}}</td>
                        <td v-if="re.province==null">--/{{re.city.city}}/{{re.area.area}}</td>
                        <td v-else-if="re.city==null">{{re.province.province}}/--/{{re.area.area}}</td>
                        <td v-else-if="re.area==null">{{re.province.province}}/{{re.city.city}}/--</td>
                        <td v-else>{{re.province.province}}/{{re.city.city}}/{{re.area.area}}</td>
                        <td v-if="re.industryStr==null">未填写</td>
                        <td v-else>{{re.industryStr.name}}</td>
                        <td v-if="re.phone==null">未填写</td>
                        <td v-else-if="re.phone==''">未填写</td>
                        <td v-else>{{re.phone}}</td>
                        <td v-if="re.email==null">未填写</td>
                        <td v-else>{{re.email}}</td>
                        <td>{{re.createDt}}</td>
                    </tr>
                
                </tbody>
            </table>
           
            </div>
    </div>
 </div>   
</template>
<style>
    .btnDao:hover{
        cursor:pointer
    }
    .dvsmain{
        background:#fff;
        margin: 0 15px 0 15px;
      
    }
    .zhengtab{
         margin: 0 15px 0 15px;
       
    }
    .treated th{
            background: #ebebeb;
            color: #555;
            height: 40px;
            line-height:40px !important;
            text-align: center;
    }
    .ttodyTr td{
        background: #fff;
        color: #2b2b2b;
    }
    .dvsmain{
            min-height: 90vh;
            padding-bottom: 5%;
    }
    .thtop{
        border-top:1px solid #ddd !important;
            background: #ebebeb;
            color: #555;
            border-bottom:1px solid #ddd !important
    }
    .thtops{
        border-top-width: 1px !important;
    }
</style>

<script>
// import "../yunzc/yunDao/jquery.dataTables.min.js";
// import "../yunzc/yunDao/jquery.dataTables.min.css";
// import "../yunzc/yunDao/buttons.dataTables.min.css";
// import "../yunzc/yunDao/buttons.html5.min.js";
// import "../yunzc/yunDao/dataTables.buttons.min.js";

import "../plan/planList/datatable.css";

    export default{
         data () {
            return {
                responers:[]
            }
         },
     updated:function(){
        
                $(document).ready(function(){
                        $.noConflict();
                    $("#tabelId").dataTable().fnDestroy();
                        $('#tabelId').DataTable({
                             dom: "<'toolbar'>Bfrtip",  
                            "buttons": [  
                                         {  
                                            extend: 'excelHtml5',  
                                            text: "导出",  
                                            className: "btn-sm",    
                                            // 'exportOptions': {  
                                            //     'modifier': {  
                                            //         'page': 'current'  
                                            //     }  
                                            // }  
                                          }  
                                        ], 
                             "bFilter": true,
                             "bLengthChange": false,
                             'ordering':true,
                            language: {  
                                    "sProcessing": "处理中...",  
                                    "sLengthMenu": "显示 _MENU_ 项结果",  
                                    "sZeroRecords": "没有匹配结果",  
                                    "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",  
                                    "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",  
                                    "sInfoFiltered": "(由 _MAX_ 项结果过滤)",  
                                    "sInfoPostFix": "",  
                                    "sSearch": "搜索:",  
                                    "sUrl": "",  
                                    "sEmptyTable": "表中数据为空",  
                                    "sLoadingRecords": "载入中...",  
                                    "sInfoThousands": ",",  
                                    "oPaginate": {  
                                        "sFirst": "首页",  
                                        "sPrevious": "上页",  
                                        "sNext": "下页",  
                                        "sLast": "末页"  
                                    },  
                                    "oAria": {  
                                        "sSortAscending": ": 以升序排列此列",  
                                        "sSortDescending": ": 以降序排列此列"  
                                    }  
                            },  
                        });
                       
                    });
  },
         created:function(){
             this.$this.get('/broker/admin/user/list').then((respone)=>{
              this.responers = respone.data.data;
              console.log(this.responers)
            //    for(var i=0;i<this.responers.length;i++){
            //         for(var j=0;j<this.responers[i].industryStr.length;j++){
            //             console.log(this.responers[i].industryStr[j].name)
            //         }
            //    }
            }).catch((error)=>{
            })
         },
         methods:{
             daochu:function(){
                    require.ensure([], () => {
        　　　　　　　　const { export_json_to_excel } = require('../../../vendor/vendor/Export2Excel.js');
        　　　　　　　　const tHeader = ['用户名', '登录名', '公司信息', '注册地址','行业信息','手机号码','邮箱地址','注册时间']; //对应表格输出的title
        　　　　　　　　const filterVal = ['username', 'realname','tenant','addr','industryStr.name','phone','email','createDt']; // 对应表格输出的数据
        　　　　　　　　const list = this.responers;
        　　　　　　　　const data = this.formatJson(filterVal, list);
        　　　　　　　　export_json_to_excel(tHeader, data, '列表excel'); //对应下载文件的名字
        　　　　　　})
             },
             formatJson:function(filterVal, jsonData) {
　　　　　　      return jsonData.map(v => filterVal.map(j => v[j]))
　　　　       },
             
         }
    }
</script>

