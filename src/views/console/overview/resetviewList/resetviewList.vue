<template>
<div>
       <button style="color:#000">创建云规划</button><input type="button" value="删除" id="rems"><input type="button" value="导出报告">
       <table id="example" class="table table-striped table-bordered" border="1">
             <thead>
                    <tr style="margin-top:50px;" class="text-center">
                        <th class="col-md-1" ><input type="checkbox" name="checkbox" class="cls"></th>
                        <th class="col-md-1">应用名称</th>
                        <th class="col-md-1">云分析名称</th>
                        <th class="col-md-3">对比供应商</th>
                        <th class="col-md-1">操作</th>
                    </tr>
            </thead>
            <tbody  id="myTable" >
                    <tr width="100%" v-for="re in res">
                        <td><input type="checkbox" name="checkbox"></td>
                        <td>{{re.appname}}</td>
                        <td>{{re.proname}}</td>
                        <td v-if="re.appResults[0]!=null" >
                            <ul>
                                <li v-for="ic in JSON.parse(re.appResults[0].result)"><span>{{ic.serverName}}</span><span></span><span></span></li>
                            </ul>
                        </td>
                        <td v-else></td>
                         <td class="col-md-1"> <a href="#">查看详情</a></td>
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
     td{
         height:60px;
     }
</style>
<script>
 export default{
    name:"resetviewList",
    data(){
        return{
            res:[],
        
        }
    },
    created:function(){
          this.getData();    
    },
    methods:{
         getData:function(){                       //获取数据
                this.$http.get("/broker/result/compare/list").then((res)=>{
                    this.res = eval("(" + res.bodyText +")").data;
                    console.log(this.res)
                
            },(err)=>{
              
            });
           },

    }
 }   

</script>
 