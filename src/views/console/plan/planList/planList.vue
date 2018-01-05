<template>
        <div>
            <div>象限图</div>
            <router-link to="/CreateAnalysis"><button style="color:#000">创建云规划</button></router-link><input type="button" value="删除" v-on:click="rems()" id="rems"><input type="button" value="导出"><input type="text"  id="myInput" v-on:keyup="myFun()" placeholder="搜索" >
           
          <table id="example" class="table table-striped table-bordered" border="1">
             <thead>
                    <tr style="margin-top:50px; text-align:center">
                        <th class="col-md-1"><input type="checkbox" name="checkbox" v-on:click="Qqno" class="cls"></th>
                        <th class="col-md-1">应用名称</th>
                        <th class="col-md-1">云分析名称</th>
                        <th class="col-md-1">定性</th>
                        <th class="col-md-1">云收益度</th>
                        <th class="col-md-1">云亲和度</th>
                        <th class="col-md-1">操作</th>
                    </tr>
            </thead>
            <tbody id="myTable" >
                    <tr v-for="sp in sps" class="  ls text-left" id="trs" width="100%">
                        <td class="col-md-1"><input type="checkbox" :data-id="sp.id" name='checkname'></td>
                        <td class="col-md-1">{{sp.appname}}</td>
                        <td class="col-md-1">{{sp.proname}}</td>
                        <td class="col-md-1" v-for="sol in sp.appResults" v-if="sol.moduleName!=='受益度'&&sol.moduleName!=='亲和度'&&sol.result!==null&&sol.moduleName!=='比较标准'&&sol.moduleName!=='资源配置'" >{{JSON.parse(sol.result).sname}}</td>       
                        <td class="col-md-1" v-for="sol in sp.appResults" v-if="sol.moduleName!=='云定性'&&sol.moduleName!=='比较标准'&&sol.result!==null&&sol.moduleName!=='资源配置'" >{{sol.result}}</td>
                        <td class="col-md-1" v-for="sol in sp.appResults" v-if="sol.result==null&&sol.moduleName!=='资源配置'">未完成</td>
                        <td class="col-md-1"><input type="button" value="操作" style="padding:1px 20px "></td>
                    </tr>
            </tbody>
        </table>
        
            
        </div>
</template>

<style>

    *{
        margin:0px;
        padding:0px;
    }
    .ls{
        margin-top:20px;
    }
    td{
        line-height:20px;
    }
</style>


<script>
// import '../programming/js/jquery.paginate.js';
// import '../programming/js/jquery.yhhDataTable.js';
   import "../planList/datatable.css";
      
       var counter = 0;
        if (window.history && window.history.pushState) {
            $(window).on('popstate', function () {
                window.history.replaceState("","",'#/');//在这改变地址 这里使用生产环境localhost
                window.history.forward(1);

            // 此处为监听到浏览器后退按钮的后续事件  例：刷新前一个页面；或者刷新当前页面等
                 window.location.reload();
            //   window.location.href = 'http://localhost:8081/#';  或者在这改变地址  这里适用上线以后加http地址
            });
        }
        //兼容IE
        window.history.pushState("","",'#/'); 
        window.history.forward(1);

    // ----------------------------------手写搜索 
    //   function myFunn(){ 
    //     var $sea=$('#myInput').val();
    //     //先隐藏全部，再把符合筛选条件的值显示
    //     console.log($sea);
    //         $('table tbody tr').hide().filter(':contains('+$sea+')').show();
    //     }

    export default{
        name:"planList",
        data(){
            return{
                dat:[],
                ssd:false,
                sps:[]
            }
        }, 
        created:function(){
            
             this.getData();    
          },
           
        updated:function(){
           
                
           
            $('#example').dataTable().fnDestroy();
            $('#example').dataTable({
                         "bPaginate": true,
                          "bAutoWidth": false,
                          "bScrollCollapse" : true,
                          "bAutoWidth" : true, //是否自适应宽度    
                          "pageLength":5,
                          "bDeferRender":false,
                          "lengthChange": false,
                          "searching": true,//搜索  
                          "ordering": true,//排序 
                          "language": {  
                                "sInfoEmpty": "没有数据",  
                                "sZeroRecords": "没有查找到满足条件的数据",  
                                "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",  
                                "sLengthMenu": "每页显示 _MENU_ 条记录",  
                                "sInfoFiltered": "(从 _MAX_ 条数据中检索)",  
                                "sSearch" : "搜索", 
                                "oPaginate": {  
                                    "sFirst": "首页",  
                                    "sPrevious": "前一页",  
                                    "sNext": "后一页",  
                                    "sLast": "尾页"  
                                }  
                        },  
             });
            
        },
        methods:{
           myFun:function(){
               myFunn();    
           },
           getData:function(){                       //获取数据
                this.$http.get("/broker/result/plan/list").then((sps)=>{
                    this.sps = eval("(" + sps.bodyText +")").data;
                    console.log(this.sps)
            },(err)=>{
              
            });
           },

           rems:function(){
                 var _that = this;

                if($("#trs input[type='checkbox']").is(':checked')){
                     var con=confirm("您确定要删除该云分析下的所有应用吗?"); 
                     let id = [];
                     let ids = [];

                     //console.log($("#trs input[type='checkbox']").is(':checked'));
                     for(let i=0;i<$("input[type='checkbox']").length;i++){
                         if($("input[type='checkbox']").eq(i).is(':checked')){
                            id.push($("input[type='checkbox']").eq(i).attr("data-id"))
                            
                            //多选时候出现的问题
                            if(id[0]==undefined){
                                ids=id.slice(1);
                               // console.log(ids);
                            }else{
                                ids=id
                            }
                         }
                     }
                     
                     if(con==true){
                        //console.log($("#trs"));
                        var asf ={"ids":ids}; 
                        _that.$this({
                             method: 'delete',
                             url: '/broker/app/applications',
                             data: asf }).then(function (response) {
                             //_that.getData();
                             window.location.reload()
                               
                            //$(":checkbox").attr("checked") != "checked"
                              for(let s=0;s<$("input[type='checkbox']").length;s++){
                                  if($("input[type='checkbox']").eq(s).is(":checked")){
                                       $("input[type='checkbox']").eq(s).prop("checked",false)
                                  }
                              }
                            })
                            .catch(function (error) {
                                console.log(error);
                             });
                     }else{
                         alert("我们不删除了")
                     }
                }else{
                    alert("至少选中一个删除");
                    //最好不要用attr 用prop  一样获取属性 返回当前jq对象所匹配的元素的属性值。
                    $(".cls").prop("checked",false) 

                }
             },
            
            Qqno:function(){  //全选
                  if ($(":checkbox").attr("checked") != "checked") {
                       $(":checkbox").attr("checked",true);
            }
            else {
                $(":checkbox").attr("checked",false);
            }
                    
            }
        }
    }
</script>