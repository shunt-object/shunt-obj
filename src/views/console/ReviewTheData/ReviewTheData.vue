<template>
        <div class="total">
        <div class="total-header">
                <span></span>
                总览
                ><p class="comback">点评数据</p>
            </div>
            <div class="designHeader">
                <div class="designTop">
                    <table class="table table-bordered" id="tabelId">
                        <thead>
                                <th class="text-center yops">用户账号</th>
                                <th class="text-center yops">用户姓名</th>
                                <th class="text-center yops">反馈类型</th>
                                <th class="text-center yops">问题描述</th>
                                <th class="text-center yops">反馈时间</th>
                        </thead>
                        <tbody>
                            <tr v-for="re in respones">
                                <td>{{re.userSimple.username}}</td>
                                <td>{{re.userSimple.realname}}</td>
                                <td>{{re.type.name}}</td>
                                <td>{{re.content}}</td>
                                <td>{{re.createDt}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</template>
<style>
    .designHeader{
        /*min-height:90vh;
        padding-bottom:5%;*/
        padding-bottom:20px;
        margin-top:20px;
    }
    .yops{
        height:50px;
        border-right:1px solid #ddd
    }
       .designTop{
        width:100%;
        
        background:#fff;
        height:100%;
    }
</style>
<script>
import "../ReviewTheData/datatable.css";
       export default{
            data(){
                return {
                    respones:[]
                }
            },
//             updated:function(){
                
//                 $(document).ready(function(){
//                         $.noConflict();
//                     $("#tabelId").dataTable().fnDestroy();
//                         $('#tabelId').DataTable({
//                             "bFilter": true,
//                             "bLengthChange": false,
//                              'ordering':false,
//                             "oLanguage": {
//                                 "sSearch": "搜索:",
//                                 "sEmptyTable": "没有相关记录",  
//                                 "sLengthMenu": "每页显示 _MENU_ 条记录",
//                                 "sZeroRecords": "抱歉， 没有找到",
//                                 "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
//                                 "sInfoEmpty": "没有数据",
//                                 "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
//                                 "oPaginate": {
//                                     "sFirst": "首页",
//                                     "sPrevious": "前一页",
//                                     "sNext": "后一页",
//                                     "sLast": "尾页"
//                                 },
//                                 "sZeroRecords": "没有检索到数据",
                                
//                             }
//                         });

//                     });
//   },
            created:function(){
                    let obj = {
                            "pageReq": {
                                "page": 0,
                                "size": 99999999
                            }
                    }
                    this.$http.post('/broker/feedback/page/list',obj).then((response)=>{
                      // this.respones = eval("(" + response.body +")");
                       this.respones = response.body.data.content;
                    }).catch((error)=>{
                    })
                }
            


    }
</script>