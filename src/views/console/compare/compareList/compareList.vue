<template>
<div class="total">
<!-- 公共的样式 -->
<div class="total-header">
    <span></span>
    <p class="zong">云选型</p>
</div>
    <div class="compareList">
        <div class="compareList-search">
            <button class="creatCompareBtn" v-on:click="CreatCom"><i class="iconfont icon-wangpanxinjianwenjianjia-copy" style="margin-right:5px;"></i>创建云选型</button><!--<input type="button" value="删除" id="rems" v-on:click="remsveily">-->
            <div class="searchBox">
                <input type="text"  id="myInput" v-on:keyup="myFun()" placeholder="搜索" >
                <button class="searchBtn"><i class="fa fa-search"></i></button>
            </div>
        </div>
        
        <!--有数据-->
       <table id="example" class="table table-striped table-bordered compareList-table" border="1">
             <thead>
                <tr class="text-center">
                    <!--<th class="col-md-1" ><input type="checkbox" name="checkbox" class="cls"></th>-->
                    <th class="col-md-1">应用名称</th>
                    <th class="col-md-1">云分析名称</th>
                    <th class="col-md-3">对比供应商</th>
                    <th class="col-md-1">操作</th>
                </tr>
            </thead>
            <tbody  id="myTable" v-if="res.length>0" >
                <tr width="100%" v-for="re in res">
                    <!--<td><input type="checkbox" name="checkbox" :data-id="re.id"></td>-->
                    <td>{{re.appname}}</td>
                    <td>{{re.proname}}</td>
                    <td v-if="re.appResults[0]!=null" >
                        <ul>
                            <li class="row" v-for="ic in JSON.parse(re.appResults[0].result)">
                                <span class="col-md-4 spana"></span>
                                <span class="firm-name col-md-4 spana">{{ic.serverName}}</span>
                                <span class="firm-score col-md-4 spana">{{ic.scope}}分</span>
                                <!--<span></span>-->
                            </li>
                        </ul>
                    </td>
                    <td v-else></td>
                        <td class="col-md-1"> <a href="javascript:;" v-on:click="idClick(re.id)" style="color:#337ab7 !important;"><i class="iconfont icon-chakan" style="margin-right:5px;"></i>查看报告</a></td>
                </tr>
            </tbody>
        </table>
        <!-- 空白 -->
        <div class="compareList-nodata" v-if="res.length<1">
            <img src="../../../../assets/compare-nodata.png" alt="">
            <br>
            暂无数据
        </div>
    </div>
</div>
</template>
<style>
.spana{
    line-height:50px;
}
.compareList{
    min-height:500px; background:#fff; padding:0 15px;
}
.compareList-search{
    background:#ffffff; box-shadow:0 1px 1px 0 rgba(222,222,222,0.50); width:100%; height:57px;border-bottom:1px solid #e5e5e5;
}
.creatCompareBtn{
    background:#da121a; width:114px; height:30px; font-size:14px; color:#ffffff; text-align:center;
line-height:30px; float:left; margin-top:13px;
}
.creatCompareBtn:hover{
    background:#EF131D;
}
.searchBox{
    float:right; padding-top:13px;
}
#myInput{
    border:1px solid #cccccc; width:192px; height:30px; padding:0 10px;
}
.searchBtn{
   background:#da121a; width:42px; height:30px; color:#fff; float:right;
}
.compareList-table{
    margin-top:20px;
}
.compareList-table td{
    height:60px;
}
.table>tbody>tr>td, .table>thead>tr>td, .table>thead>tr>th{
    vertical-align:middle !important;
}
.table>tbody>tr>td{
    line-height:30px; background:#fff; color:#2b2b2b;
}
.table>thead>tr>th{
    background:#f3f3f3; color:#555; height:50px; text-align:center;
}
.table>tbody>tr:nth-child(2n)>td{
    background:rgb(247, 247, 247);
}
.firm-name{
    min-width:100px; text-align:left;
}
.firm-score{
    text-align:left; text-indent:-40px;
}
/*暂无数据*/
.compareList-nodata{
    background:#ffffff; width:100%; height:100vh; font-size:14px; color:#555; margin:10px 0;line-height:30px; text-align:center;
}
.compareList-nodata img{
    margin-top:20%;
}
*{
    margin:0px;
    padding:0px;
}
</style>
<script>
  function myFunn(){
    var $sea=$('#myInput').val();
      var ase = $sea.toUpperCase();
    //先隐藏全部，再把符合筛选条件的值显示
    //console.log($sea);
         $('table tbody tr').hide().filter(':contains('+$sea+')').show();
         $('table tbody tr').filter(':contains('+ase+')').show();
        
    }  
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
                    //console.log('-----',this.res)
                
            },(err)=>{
              
            });
           },
        idClick:function(rid){
            this.$router.push({path:'/compareResult',query:{id:rid,type:'compare'}});
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
    
        },
         myFun: function() {
            myFunn();
        },

    }
 }   

</script>
 