<template>
<div>
       <button style="color:#000" v-on:click="CreatCom">创建云选型</button><input type="button" value="删除" id="rems" v-on:click="remsveily">
       <table id="example" class="table table-striped table-bordered" border="1">
             <thead>
                    <tr class="text-center">
                        <td class="col-md-1" ><input type="checkbox" name="checkbox" class="cls"></td>
                        <td class="col-md-1">应用名称</td>
                        <td class="col-md-1">云分析名称</td>
                        <td class="col-md-3">对比供应商</td>
                        <td class="col-md-1">操作</td>
                    </tr>
            </thead>
            <tbody  id="myTable" >
                    <tr width="100%" v-for="re in res">
                        <td><input type="checkbox" name="checkbox" :data-id="re.id"></td>
                        <td>{{re.appname}}</td>
                        <td>{{re.proname}}</td>
                        <td v-if="re.appResults[0]!=null" >
                            <ul>
                                <li v-for="ic in JSON.parse(re.appResults[0].result)"><span>{{ic.serverName}}</span>--<span>{{ic.scope}}</span><span></span></li>
                            </ul>
                        </td>
                        <td v-else></td>
                         <td class="col-md-1"> <a href="javascript:;" v-on:click="idClick(re.id)">查看详情</a></td>
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
    name:"compareList",
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
                this.$this.get("/broker/result/compare/list").then((res)=>{
                    this.res = res.data.data;
                    console.log(this.res)
                
            },(err)=>{
              
            });
           },
        idClick:function(rid){
            this.$router.push({path:'/compareResult',query:{id:rid}});
        },
        CreatCom:function(){
            this.$router.push({path:'/CreateAnalysis',query:{type:'compare'}});
        },
        //删除
        remsveily:function(){
                    var _that = this;
                    if ($("#trs input[type='checkbox']").is(":checked")) {
                        var con = confirm("您确定要删除该云选型下的所有应用吗?");
                        let id = [];
                        let ids = [];

                        //console.log($("#trs input[type='checkbox']").is(':checked'));
                        for (let i = 0; i < $("input[type='checkbox']").length; i++) {
                        if (
                            $("input[type='checkbox']")
                            .eq(i)
                            .is(":checked")
                        ) {
                            id.push(
                            $("input[type='checkbox']")
                                .eq(i)
                                .attr("data-id")
                            );

                            //多选时候出现的问题
                            if (id[0] == undefined) {
                            ids = id.slice(1);
                            // console.log(ids);
                            } else {
                            ids = id;
                            }
                        }
                        }

                        if (con == true) {
                        //console.log($("#trs"));
                        var asf = { ids: ids };
                        _that
                            .$this({
                            method: "delete",
                            url: "/broker/app/applications",
                            data: asf
                            })
                            .then(function(response) {
                            //_that.getData();
                            window.location.reload();

                            //$(":checkbox").attr("checked") != "checked"
                            for (let s = 0; s < $("input[type='checkbox']").length; s++) {
                                if (
                                $("input[type='checkbox']")
                                    .eq(s)
                                    .is(":checked")
                                ) {
                                $("input[type='checkbox']")
                                    .eq(s)
                                    .prop("checked", false);
                                }
                            }
                            })
                            .catch(function(error) {
                            console.log(error);
                            });
                        } else {
                        alert("我们不删除了");
                        }
                    } else {
                        alert("至少选中一个删除");
                        //最好不要用attr 用prop  一样获取属性 返回当前jq对象所匹配的元素的属性值。
                        $(".cls").prop("checked", false);
                    }
    
        }

    }
 }   

</script>
 