<template>
    <div class="dvsmain">
            <table class="table table-bordered" id="tabelId">
                <thead class="row">
                    <tr>
                        <th class="text-center thtop thtops">用户名</th>
                        <th class="text-center thtop">登录名</th>
                        <th class="text-center thtop">公司信息</th>
                        <th class="text-center thtop">注册地址</th>
                        <th class="text-center thtop">行业信息</th>
                        <th class="text-center thtop">手机号码</th>
                        <th class="text-center thtop">邮件地址</th>
                        <th class="text-center thtop">注册时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="re in responers">
                        <td>{{re.username}}</td>
                        <td>{{re.realname}}</td>
                        <td>{{re.tenant}}</td>
                        <td>{{re.province.province}}/{{re.city.city}}/{{re.area.area}}</td>
                        <td>{{re.industryStr.name}}</td>
                        <td v-if="re.phone==null">未填写</td>
                        <td v-else>{{re.phone}}</td>
                        <td v-if="re.email==null">未填写</td>
                        <td v-else>{{re.email}}</td>
                        <td>{{re.createDt}}</td>
                    </tr>
                
                </tbody>
            </table>
    </div>
</template>
<style>
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
                            "bFilter": true,
                            "bLengthChange": false,
                             'ordering':false,
                            "oLanguage": {
                                "sSearch": "搜索:",
                                "sEmptyTable": "没有相关记录",  
                                "sLengthMenu": "每页显示 _MENU_ 条记录",
                                "sZeroRecords": "抱歉， 没有找到",
                                "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
                                "sInfoEmpty": "没有数据",
                                "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
                                "oPaginate": {
                                    "sFirst": "首页",
                                    "sPrevious": "前一页",
                                    "sNext": "后一页",
                                    "sLast": "尾页"
                                },
                                "sZeroRecords": "没有检索到数据",
                                
                            }
                        });

                    });
  },
         created:function(){
             this.$this.get('/broker/admin/user/list').then((respone)=>{
              this.responers = respone.data.data
                console.log(this.responers);
            }).catch((error)=>{
            })
         }
    }
</script>

