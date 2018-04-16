<template>
<div style="  position:relative;">
    <div class="total-header" style="margin-left:20px;">
        <span></span>
        用户数据
    </div>  
        <!--<input type="button" value="导出" style="width:50px;height:30px;left:30px;top:50px;color:#333" v-on:click="daochu">-->
    <div class="dvsmain" style="position:relative">
        <input  type="button" class="btnDAo" value="导出" v-on:click="fiaer"/>

        <el-dialog 
            title="数据导出"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <div style="margin:0 auto;text-align:center;">
                <div style="margin-bottom:10px"><input type="radio" name="w" value="0">&nbsp&nbsp今日用户</div>
                <div><input type="radio" name="w" value="1">&nbsp&nbsp全部用户</div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="qucenters" class="enterDing">确定</el-button>
                <el-button type="primary" @click="dialogVisible = false" class="clseys">取消</el-button>
            </span>
        </el-dialog>

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
                        <th class="text-center thtop" prop="jue">用户角色</th>
                        <th class="text-center thtop" prop="lei">注册类型</th>
                        <th class="text-center thtop" prop="createDt">注册时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="re in responers" class="ttodyTr">
                        <td>{{re.username}}</td>
                        <td>{{re.realname}}</td>
                        <td>{{re.tenant}}</td>


                        <td >
                            <ul class="el-kuser">
                                <li v-if="re.province==null">--/</li>
                                <li v-else  >{{re.province.province}}/</li>
                                <li v-if="re.city==null" >--/</li>
                                <li v-else >{{re.city.city}}/</li>
                                <li v-if="re.area==null" >--</li>
                                <li v-else >{{re.area.area}}</li>
                            </ul>
                        </td>
                        <!--<td v-if="re.province==null&&re.city!==null&&">--/{{re.city.city}}/{{re.area.area}}</td>
                        <td v-else-if="re.city==null">{{re.province.province}}/--/{{re.area.area}}</td>
                        <td v-else-if="re.area==null">{{re.province.province}}/{{re.city.city}}/--</td>
                        <td v-else>{{re.province.province}}/{{re.city.city}}/{{re.area.area}}</td>-->
                        <td v-if="re.industryStr==null">未填写</td>
                        <td v-else>{{re.industryStr.name}}</td>
                        <td v-if="re.phone==null">未填写</td>
                        <td v-else-if="re.phone==''">未填写</td>
                        <td v-else>{{re.phone}}</td>
                        <td v-if="re.email==null">未填写</td>
                        <td v-else>{{re.email}}</td>
                        <td v-if="re.utype==1">个人</td>
                        <td v-if="re.utype==2">企业</td>
                        <td v-if="re.utype==3">运营商</td>
                        <td v-if="re.utype==4">政府</td>
                        <td v-if="re.utype==5">运营</td>
                        <td v-if="re.utype==6">代理商</td>
                        <td v-if="re.utype==7">独立顾问</td>
                        <td v-if="re.registerType==null">无</td>
                        <td v-if="re.registerType==1">手机注册</td>
                        <td v-if="re.registerType==2">微信注册</td>
                        <td v-if="re.registerType==3">关注微信号注册</td>
                        <td v-if="re.registerType==4">运营注册</td>
                        <td>{{re.createDt}}</td>
                    </tr>
                
                </tbody>
            </table>
           
            </div>
    </div>
 </div>   
</template>
<style>
.el-button:active {
    color: #fff !important;
    border-color: #fff !important;
    outline: 0;
}
.clseys{
    color:#ccc !important;
    background:#fff !important;
    border-color:#ccc !important;
}
.el-dialog{
    text-align:left;
   
}
.clsey{
    background:#fff;
    border-color:#ccc;
    color:#ccc;
}
.clsey:hover{
      background:#fff;
    border-color:#ccc;
    color:#ccc;
}
.enterDing:hover{
      color:#fff !important;
}
.enterDing{
    background: #da121a !important;
     color:#fff !important;
}
.btnDAo{
    width:50px;
    height:30px;
    position:absolute;
    right:250px;
    top:12px;
    z-index:99;
}
    .btnDao:hover{
        cursor:pointer
    }
    .el-kuser li{
        display:inline-block
    }
    .el-kuser{
        margin:0 !important;
        padding-left:0 !important
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
                responers:[],
                dialogVisible:false
            }
         },
     updated:function(){
        
                
                   
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
                       
                    
  },
         created:function(){
            this.ap();
         },
         methods:{
             ap:function(){
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
             fiaer:function(){
                this.dialogVisible = true;
             },
             qucenters:function(){
                var val=$('input:radio[name="w"]:checked')
                var vals = val.val();
                var rad = document.getElementsByName("w");
                if(vals==0){
                      this.dialogVisible = false;
                      for(var i=0;i<rad.length;i++){   //为了点击确定之后清楚选中 
                          rad[i].checked = false;
                      }
                      window.location.href="/broker/template/exportByExcel/today";
                }else if(vals==1){
                     window.location.href="/broker/template/exportByExcel/all";
                     for(var i=0;i<rad.length;i++){
                          rad[i].checked = false;
                      }
                     this.dialogVisible = false;
                }
             }
//              daochu:function(){
//                     require.ensure([], () => {
//         　　　　　　　　const { export_json_to_excel } = require('../../../vendor/vendor/Export2Excel.js');
//         　　　　　　　　const tHeader = ['用户名', '登录名', '公司信息', '注册地址','行业信息','手机号码','邮箱地址','注册时间']; //对应表格输出的title
//         　　　　　　　　const filterVal = ['username', 'realname','tenant','addr','industryStr.name','phone','email','createDt']; // 对应表格输出的数据
//         　　　　　　　　const list = this.responers;
//         　　　　　　　　const data = this.formatJson(filterVal, list);
//         　　　　　　　　export_json_to_excel(tHeader, data, '列表excel'); //对应下载文件的名字
//         　　　　　　})
//              },
//              formatJson:function(filterVal, jsonData) {
// 　　　　　　      return jsonData.map(v => filterVal.map(j => v[j]))
// 　　　　       },
             
         }
    }
</script>

