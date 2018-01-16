<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link to="/consolePage">总览</router-link> > 云规划
</div>
       
            <div class="CRe row " >
               <ul>
                   <li>创建云规划</li>
                   <li><input type="text"  id="myInput" v-on:keyup="myFun()" placeholder="搜索云分析、应用名称" ></li>
               </ul>
        
            </div>
            <!-- <div>象限图</div> -->
            <div class="result-echarts" id="main"></div>
            <button style="color:#000" v-on:click="CreatId()">创建云规划</button><input type="text"  id="myInput" v-on:keyup="myFun()" placeholder="搜索" style="margin-top50px;" >
           
          <table id="example" class="table table-striped table-bordered" border="1">
             <thead>
                    <tr style="margin-top:50px; text-align:center">
                        <th class="col-md-1 text-center" ><input type="checkbox"   name="a" id="cls" v-model="checkboxAll" @change="changeSta"></th>
                        <th class="col-md-1 text-center">应用名称</th>
                        <th class="col-md-3 text-center">上云分析名称</th>
                        <th class="col-md-2 text-center">云定性</th>
                        <th class="col-md-3 text-center">云收益度</th>
                        <th class="col-md-1 text-center">云亲和度</th>
                        <th class="col-md-1 text-center">操作</th>
                    </tr>
            </thead>


            <tbody id="myTable" >
                    <tr v-for="sp in sps" class="  ls text-left" id="trs" width="100%">
                        <td ><input type="checkbox" :data-id="sp.id" name='b'></td>
                        <td >{{sp.appname}}</td>
                        <td >{{sp.proname}}</td>
                        <td  v-if="null!=sp.appResults[0]&&null!=sp.appResults[0].result">{{JSON.parse(sp.appResults[0].result).sname}}</td>
                        
                        <td  v-else></td>
                        <td  v-if="null!=sp.appResults[1]">{{sp.appResults[1].result}}</td>
                        <td  v-else></td>
                        <td  v-if="null!=sp.appResults[2]">{{sp.appResults[2].result}}</td>
                        <td  v-else></td>
                        <td ><a href="javascript:;" v-on:click="idClick(sp.id)" class="lookCom">查看报告</a></td>
                    </tr>
            </tbody>

        </table>
        </div>
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
tr th{
    font-size:14px;
    color:#2b2b2b;
}
tr th input{
    width:16px;
    height:16px;
}
tr td{
    font-size:14px;
color:#2b2b2b;
text-align:center;
}
tr td input{
    width:16px;
    height:16px;
}
table{
border:1px solid #e5e5e5;
}
tr td a{
    font-size:14px;
color:#2eabf5;
text-align:center;
}
.CRe div{
    float:left;
}
.CRe{
    width:100%;
    
    background:#ffffff;
box-shadow:0 1px 1px 0 rgba(222,222,222,0.50);

}
.CRe ul li{
    float:left;
    
}
.CRe ul li:nth-child(1){
    background:#da121a;
    width:114px;
    height:30px;
    background:#da121a;
    width:114px;
    height:30px;
    color:#fff;
    text-align:center;
    line-height:30px;
    margin:15px 15px;
    display:inline-block
}
.CRe ul li:nth-child(2){
    float:right;
    margin-top:20px;
    margin-right:38px;
  

}
.CRe ul li input{
      border:2px solid #cccccc;
    width:232px;
    height:28px;
   background:url("../../../../assets/souuo.png") no-repeat right;
   
}


</style>


<script>
// import '../programming/js/jquery.paginate.js';
// import '../programming/js/jquery.yhhDataTable.js';
import sds from '../../../../components/steps/steps.vue'

import "../planList/datatable.css";
import echarts from 'echarts'

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
      charts:'',
      opiniondata:[],
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
          let arr = [],brr = [];
          for(let i=0;i<this.sps.length;i++){
            arr.push({name:this.sps[i].appname,value:[]});
            for(let n=0;n<this.sps[i].appResults.length;n++){
                if(this.sps[i].appResults[n].moduleId=='2'){
                    arr[i].value.push(this.sps[i].appResults[n].result);
                }
                if(this.sps[i].appResults[n].moduleId=='3'){
                    arr[i].value.push(this.sps[i].appResults[n].result);
                }
            }
          }
          //console.log('arr',arr);
          this.opiniondata =  arr;
          this.$nextTick(function() {
                this.drawPie('main')
          });

          //console.log(this.sps);
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
    drawPie:function(id){
        this.charts = echarts.init(document.getElementById(id));
        this.charts.setOption({
            //backgroundColor:'#ccc',
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    show: true,
                    type: 'cross',
                    lineStyle: {
                        type: 'dashed',
                        width: 1
                    },
                }
            },
            xAxis: {
                name: '收益度',
                type: 'value',
                scale: true,
                min:0,
                max:100,
                axisLabel: {
                    interval:20
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#3259B8'
                    }
                }
            },
            yAxis: {
                name: '亲和度',
                type: 'value',
                scale: true,
                min:0,
                max:100,
                axisLabel: {
                    interval:20
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#3259B8'
                    }
                }
            },
            series: [{
                type: 'scatter',
                data: this.opiniondata,
                symbolSize: 20,
                markLine: {
                    lineStyle: {
                        normal: {
                            color: "#626c91",
                            type: 'solid',
                            width: 1,
                        },
                        emphasis: {
                            color: "#d9def7"
                        }
                    },
                    data: [{
                        xAxis: 50,
                        name: '营业额平均线',
                        itemStyle: {
                            normal: {
                                color: "#b84a58",
                            }
                        }
                    }, {
                        yAxis: 50,
                        name: '服务能力平均线',
                        itemStyle: {
                            normal: {
                                color: "#b84a58",
                            }
                        }
                    }]
                },
                markArea: {
                    silent: true,
                    data: [
                        [{
                            name: '合适',
                            itemStyle: {
                                normal: {
                                    color: '#E8FFC4'
                                },
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideTopLeft',
                                    fontStyle: 'normal',
                                    color: "#409EFF",
                                    fontSize: 20,
                                }
                            },
                            coord: [50, 50],
                        }, {
                            coord: [Number.MAX_VALUE, 0],
                        }],
                        [{
                            name: '低',
                            itemStyle: {
                                normal: {
                                    color: '#844200',
                                },
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideTopRight',
                                    fontStyle: 'normal',
                                    color: "#409EFF",
                                    fontSize: 20,
                                }
                            },
                            coord: [0, 0],
                        }, {
                            coord: [50, 50],
                        }],
                        [{
                            name: '高',
                            itemStyle: {
                                normal: {
                                    color: '#9AFF02',
                                },
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideBottomLeft',
                                    fontStyle: 'normal',
                                    color: "#409EFF",
                                    fontSize: 20,
                                }
                            },
                            coord: [50, 50],
                        }, {
                            coord: [Number.MAX_VALUE, Number.MAX_VALUE],
                        }],
                        [{
                            name: '一般',
                            itemStyle: {
                                normal: {
                                    color: '#FFDCB9',
                                },
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideBottomRight',
                                    fontStyle: 'normal',
                                    color: "#409EFF",
                                    fontSize: 20,
                                }
                            },
                            coord: [0, Number.MAX_VALUE],
                        }, {
                            coord: [50, 50],
                        }],
                    ]
                }
            }]
            //
        })
    }

  
  }
};
</script>