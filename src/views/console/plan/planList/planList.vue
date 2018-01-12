<template>
        <div>
            <!-- <div>象限图</div> -->
            <button style="color:#000" v-on:click="CreatId()">创建云规划</button><input type="text"  id="myInput" v-on:keyup="myFun()" placeholder="搜索" >
           
          <table id="example" class="table table-striped table-bordered" border="1">
             <thead>
                    <tr style="margin-top:50px; text-align:center">
                        <th class="col-md-1"><input type="checkbox"   name="a" id="cls" v-model="checkboxAll" @change="changeSta"></th>
                        <th class="col-md-1">应用名称</th>
                        <th class="col-md-1">云分析名称</th>
                        <th class="col-md-1">定性</th>
                        <th class="col-md-1">云收益度</th>
                        <th class="col-md-1">云亲和度</th>
                        <th class="col-md-1">操作</th>
                    </tr>
            </thead>


            <tbody id="myTable" >
                    <tr v-for="sp in sps" class="  ls text-left" id="trs" width="100%">
                        <td class="col-md-1"><input type="checkbox" :data-id="sp.id" name='b'  v-on:click="al"></td>
                        <td class="col-md-1">{{sp.appname}}</td>
                        <td class="col-md-1">{{sp.proname}}</td>
                        <td class="col-md-1" v-if="null!=sp.appResults[0]&&null!=sp.appResults[0].result">{{JSON.parse(sp.appResults[0].result).sname}}</td>
                        
                        <td class="col-md-1" v-else></td>
                        <td class="col-md-1" v-if="null!=sp.appResults[1]">{{sp.appResults[1].result}}</td>
                        <td class="col-md-1" v-else></td>
                        <td class="col-md-1" v-if="null!=sp.appResults[2]">{{sp.appResults[2].result}}</td>
                        <td class="col-md-1" v-else></td>
                        <td><a href="javascript:;" v-on:click="idClick(sp.id)" class="lookCom">查看报告</a></td>
                    </tr>
            </tbody>

        </table>
        </div>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.ls {
  margin-top: 20px;
}
td {
  line-height: 20px;
}
.lookCom{
  color:#337ab7;
}
</style>


<script>
// import '../programming/js/jquery.paginate.js';
// import '../programming/js/jquery.yhhDataTable.js';
import "../planList/datatable.css";

// var counter = 0;
// if (window.history && window.history.pushState) {
//   $(window).on("popstate", function() {
//     window.history.replaceState("", "", "#/"); //在这改变地址 这里使用生产环境localhost
//     window.history.forward(1);

//     // 此处为监听到浏览器后退按钮的后续事件  例：刷新前一个页面；或者刷新当前页面等
//     window.location.reload();
//     //   window.location.href = 'http://localhost:8081/#';  或者在这改变地址  这里适用上线以后加http地址
//   });
// }
// //兼容IE
// window.history.pushState("", "", "#/");
// window.history.forward(1);

//----------------------------------手写搜索
  function myFunn(){
    var $sea=$('#myInput').val();
    //先隐藏全部，再把符合筛选条件的值显示
    console.log($sea);
        $('table tbody tr').hide().filter(':contains('+$sea+')').show();
    }
// $(document).ready(function(){ 
//   $("#cls").change(function() {
//       全选
//       if ($(":checkbox").attr("checked") != "checked") {
//         $(":checkbox").each(function() {  
//             $(this).attr("checked", true); 
//         })
//       } else {
//             $(":checkbox").each(function() {  
//              $(":checkbox").removeAttr("checked");
//         })
     
     
//       // }
      
//     })
// })

export default {
  name: "planList",
  data() {
    return {
      dat: [],
      ssd: false,
      sps: [],
    
      checkboxAll:false    //为false时 checkbox没有选中 为true时 checkbox默认选中
    };
  },



  created: function() {
    this.getData();
  },
  methods: {
    myFun: function() {
      myFunn();
    },
    changeSta:function(item){
        if(this.checkboxAll){
           $("#trs input[type='checkbox']").prop("checked",true)
        }else{
            $("#trs input[type='checkbox']").prop("checked",false)
        }
    },
    // al:function(){
    //   this.checkboxModel=""
    // },
    idClick:function(sid){
            this.$router.push({path:'/planResult',query:{id:sid}});
    },
    CreatId:function(){
        this.$router.push({path:'/CreateAnalysis',query:{type:'plan'}});
    },
    getData: function() {
      //获取数据
     
      this.$http.get("/broker/result/plan/list").then(
        sps => {
          this.sps = eval("(" + sps.bodyText + ")").data;
          console.log(this.sps);
        },
        err => {}
      );
    },

    rems: function() {
      var _that = this;

      if ($("#trs input[type='checkbox']").is(":checked")) {
        var con = confirm("您确定要删除该云分析下的所有应用吗?");
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
             // _that.getData();
             window.location.reload();

              $(":checkbox").attr("checked") != "checked"
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

  
  }
};
</script>