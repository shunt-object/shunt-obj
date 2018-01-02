<template>
        <div>
            <div>象限图</div>
            <input type="button" value="创建云分析"><input type="button" value="删除" v-on:click="rems()"><input type="button" value="导出"><input type="text" value="搜索">
           
          <table id="example">
             <thead>
                    <tr class="row col-md-12" style="margin-top:50px; text-align:center">
                        <th class="col-md-1"><input type="checkbox" name="checkbox" v-on:click="Qqno"></th>
                        <th class="col-md-1">应用名称</th>
                        <th class="col-md-1">云分析名称</th>
                        <th class="col-md-1">定性</th>
                        <th class="col-md-1">云收益度</th>
                        <th class="col-md-1">云亲和度</th>
                        <th class="col-md-1">操作</th>
                    </tr>
            </thead>
            <tbody>
                    <tr v-for="sp in sps" class="row col-md-12 ls text-left" id="trs">
                        <td  class="col-md-1"><input type="checkbox" name="checkbox"></td>
                        <td class="col-md-1">{{sp.appname}}</td>
                        <td class="col-md-1">{{sp.proname}}</td>
                        <td class="col-md-1" v-for="sol in sp.appResults" v-if="sol.moduleName!=='受益度'&&sol.moduleName!=='亲和度'&&sol.result!==null&&sol.moduleName!=='比较标准'&&sol.moduleName!=='资源配置'" >{{JSON.parse(sol.result).sname}}</td>       
                        <td class="col-md-1" v-for="sol in sp.appResults" v-if="sol.moduleName!=='云定性'&&sol.moduleName!=='比较标准'&&sol.result!==null&&sol.moduleName!=='资源配置'" >{{sol.result}}</td>
                        <td class="col-md-1" v-for="sol in sp.appResults" v-if="sol.result==null&&sol.moduleName!=='比较标准'&&sol.moduleName!=='资源配置'">未完成</td>
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
     
                
                $(document).ready(function(){
                    $('#example').dataTable({
                         "bPaginate": true,
                          "bAutoWidth": false,
                          "pageLength": 1,
                    });
                });
            
         

 
    export default{
        name:"guihua",
        data(){
            return{
                dat:[],
                ssd:false,
                sps:[]
            }
        },
        mounted:function(){
            this.$http.get("/broker/result/plan/list").then((sps)=>{
                    this.sps = eval("(" + sps.bodyText +")").data;
                    console.log(this.sps)
            },(err)=>{
                alert(1)
            });
            this.$http.get('/broker/result/analysis').then((res)=>{
                    //     console.log(eval("(" + res.bodyText +")").data);

                        this.dat = eval("(" + res.bodyText +")").data;   //所有数据
                      
                        
                     },(err)=>{
                         console.log("不好意思")
                      })
                    
                       
                     
        },
        methods:{
           
            rems:function(){
                 var _that = this;
                if($("input[type='checkbox']").is(':checked')){
                     var con=confirm("确定要删除吗?"); 
                     if(con==true){
                        alert("haode");
                        $("#trs :checked").each(function(){
                            console.log($("#trs"));
                            if(this.checked){
                                  var asf ={"ids":[1]}; 

                                        _that.$this({
                                            method: 'delete',
                                            url: '/broker/app/analysis',
                                            data:
                                                asf
                                            
                                        }).then(function (response) {
                                            alert(response.data);
                                        })
                                            .catch(function (error) {
                                                alert(error);
                                            });
                                $("#trs").remove()
                            }   
                        })
                     }else{
                         alert("我们不删除了")
                     }
                }else{
                    alert("至少选中一个删除")
                }
               
               
                // var con;
                //     con=confirm("确定要删除吗?"); //在页面上弹出对话框
                //     if(con==true){
                //         var ac = $("input");
                //         console.log(ac.length);
                     
                //         } else {
                //                 alert("不喜欢!");
                //          }
             },
            Qqno:function(){
                 if (this.ssd) {  
                    $("input[type='checkbox']").each(function() {  
                        this.checked = false;  
                    });  
                    this.ssd = false;  
            } else {  
                    $("input[type='checkbox']").each(function() {  
                        this.checked = true;  
                    });  
                    this.ssd = true;  
            }
            }
        }
    }
</script>