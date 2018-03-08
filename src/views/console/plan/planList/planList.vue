<template>
<div class="total">
<div class="total-header">
    <span></span>
    云规划
</div>       
<div class="CRe row planList" >
    <div class="palnList-search">
        <button class="creatPalnBtn" v-on:click="CreatId()"><i class="iconfont icon-wangpanxinjianwenjianjia-copy" style="margin-right:5px;"></i>创建云规划</button>
        <div class="PlansearchBox">
            <input type="text"  id="myInput" v-on:keyup="myFun()" placeholder="搜索">
            <button class="PlansearchBtn"><i class="fa fa-search"></i></button>
        </div>
    </div>
    <!-- <div>象限图</div> -->
    <div class="legend-box">
        <div class="legend">    
            <div class="legend-list">
                <span class="legend-block legend-high"></span>
                高
            </div> 
            <div class="legend-list">
                <span class="legend-block legend-heshi"></span>
                合适
            </div>
            <div class="legend-list">
                <span class="legend-block legend-yib"></span>
                一般
            </div>            
            <div class="legend-list">
                <span class="legend-block legend-di"></span>
                低
            </div>
        </div>
        <div class="result-echarts" id="main"></div>
    </div>
    <!-- 有数据 -->
    <table id="example" class="table table-striped table-bordered planlist-table" border="1">
        <thead>
            <tr style="margin-top:50px; text-align:center" id="tryes">
                <th class="col-md-1 text-center" ><input type="checkbox"   name="a" id="cls" v-model="checkboxAll" @change="changeSta"></th>
                <th class="col-md-1 text-center">应用名称</th>
                <th class="col-md-3 text-center">上云分析名称</th>
                <th class="col-md-2 text-center">云定性</th>
                <th class="col-md-2 text-center">云收益度</th>
                <th class="col-md-1 text-center">云亲和度</th>
                <th class="col-md-2 text-center">操作</th>
            </tr>
        </thead>
        <tbody id="myTable" v-if="sps.length>0" >
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
                <td style="text-align:center"><a href="javascript:;" v-on:click="idClick(sp.id)" class="lookCom"><i class="iconfont icon-chakan" style="margin-right:5px;"></i>查看报告</a></td>
            </tr>
        </tbody>    
    </table>
    <!-- 空白 -->
    <div class="planList-nodata" v-if="sps.length<1">
        <img src="../../../../assets/compare-nodata.png" alt="">
        <br>
        暂无数据
    </div>
</div>
</div>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
}
@media (max-width:768){
    .result-echarts{
        width:20% 
    }
}
@media (min-width:768){
    .result-echarts{
        width:100% 
    }
}

/*暂无数据*/
.planList-nodata{
    background:#ffffff; width:100%; height:500px; font-size:14px; color:#555; margin:10px 0;line-height:30px; text-align:center;
}
.planList-nodata img{
    margin-top:200px;
}
.planList{
    min-height:500px; background:#fff; padding:0 15px;
}
.palnList-search{
    background:#ffffff; box-shadow:0 1px 1px 0 rgba(222,222,222,0.50); width:100%; height:57px;border-bottom:1px solid #e5e5e5;
}
.creatPalnBtn{
    background:#da121a; width:114px; height:30px; font-size:14px; color:#ffffff; text-align:center;
line-height:30px; float:left; margin-top:13px;
}
.creatPalnBtn:hover{
    background:#EF131D;
}
.PlansearchBox{
    float:right; padding-top:13px;
}
#myInput{
    border:1px solid #cccccc; width:192px; height:30px; padding:0 10px;
}
.PlansearchBtn{
   background:#da121a; width:42px; height:30px; color:#fff; float:right;
}
.planlist-table{

}
.planlist-table>thead>tr>th{
    height:54px; background:#ebebeb; text-align:center; font-size:14px; color:#555; border-right:1px solid #e5e5e5 !important; vertical-align: middle;
}
.planlist-table>tbody>tr>td{
    font-size:14px;
    color:#2b2b2b;
    border-right:1px solid #e5e5e5;
    background:#fff;
}
.planlist-table>tbody>tr:nth-child(2n)>td{
    background:#f7f7f7;
}
.planlist-table tr th input,.planlist-table tr td input{
    width:16px; height:16px; 
}
.planlist-table tr td{
    font-size:14px; color:#2b2b2b; text-align:center;
}
.CRe ul li{
    float:left; 
}
.CRe ul li:nth-child(1){
    background:#da121a; width:114px; height:30px; color:#fff; text-align:center; line-height:30px; margin:15px 15px; display:inline-block
}
.CRe ul li:nth-child(2){
    float:right; margin-top:20px; margin-right:38px;
}
.CRe ul li input{
    border:2px solid #cccccc; width:232px; height:28px; background:url("../../../../assets/souuo.png") no-repeat right;  
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
  updated:function(){
      $.noConflict();
           $(document).ready(function(){
               $("#example").dataTable().fnDestroy();
                $('#example').DataTable({
                    "bFilter": true,
                    "bLengthChange": false,
                     
                    
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
                        "sProcessing": "<img src='./loading.gif' />"
                    }
                });

            });
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
            this.$router.push({path:'/planResult',query:{id:sid,type:'plan'}});
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
                name: '云收益度',
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
                        color: '#c2c2c2'
                    }
                },
                nameTextStyle:{
                    color:'#333'
                }
            },
            yAxis: {
                name: '云亲和度',
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
                        color: '#c2c2c2'
                    }
                },
                nameTextStyle:{
                    color:'#333'
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
                        name: '',
                        itemStyle: {
                            normal: {
                                color: "#b84a58",
                            }
                        }
                    }, {
                        yAxis: 50,
                        name: '',
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
                            name: '',//合适
                            itemStyle: {
                                normal: {
                                    color: '#e7faff'
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
                            name: '',//低
                            itemStyle: {
                                normal: {
                                    color: '#efefef',
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
                            name: '',//高
                            itemStyle: {
                                normal: {
                                    color: '#ffe9ea',
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
                            name: '',//一般
                            itemStyle: {
                                normal: {
                                    color: '#fff1e2',
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