<template>
<div class="total">
<div class="total-header">
    <span></span>
    <p class="comback">加盟顾问数据</p>
</div>
    <div class="total notification-box">
        <div>
           <div style="width:100%;min-height:82vh;background:#fff;" :class="isopens==false?'paddingtop':''">
                <div class="notification-main" v-show="isopens">
                    <div class="kongkong"></div>
                    <div class="notification-mainTable">
                        <table border="1" class="notificationTable containers" borderColor="#e5e5e5">
                            <thead class="notificationTableth" >
                                <th class="text-center col-md-2" >姓名</th>
                                <th class="text-center col-md-2">联系电话</th>
                                <th class="text-center col-md-4">公司名称</th>
                                <th class="text-center col-md-2">行业类型</th>
                                <th class="text-center col-md-2">创建时间</th>
                            </thead>
                            <tbody class="notification-mainTabletr" id="tyus">
                                <tr v-for="dat in dats" id="tryes">
                                    <td class="text-center col-md-2">{{dat.name}}</td>
                                    <td class="text-center col-md-2">{{dat.tel}}</td>
                                    <td class="text-center col-md-4">{{dat.company}}</td>
                                    <td class="text-center col-md-2">{{dat.industryId}}</td>
                                    <td class="text-center col-md-2">{{dat.createTime}}</td>
                                </tr>
                            </tbody>
                    </table>
                </div>
                <div class="kongbottom"></div>
                <!--<div class="block" style="text-align:right">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage1"
                        :page-size="sizePage"
                        layout="total, prev, pager, next"
                        :total="Number(this.totalPages)">
                    </el-pagination>
                </div>-->
            </div>

            <div class="notification-undata" v-show="isopen">
                <img src="../../../assets/compare-nodata.png" alt="">
                <br>
                暂无数据
            </div>
        </div>
    </div>

    </div>
</div>
</template>
<style>
 @media(min-width:768px){ /* pc */
        .pb{
            padding-right:47px;
        }
        .tos{
           margin-top:20px;margin-bottom:20px;margin-left:44px;
        }
        .tus{
            margin-top:20px;margin-bottom:20px
        }
        .shanrems{
            background:#ffffff;
            border:1px solid #ebebeb;
            width:90px;
            height:30px;
            display:inline-block
        }
        .remes{
            width:88px !important
        }
        #myInputs{
            border:1px solid #cccccc; width:192px; height:30px; padding:0 10px;
        }
   }
   @media(max-width:768px){ /* mobile */
        .pb{
            padding-right:28%;
            margin-bottom:10px;
        }
        .tos{
           margin-top:20px;margin-bottom:5px;
        }
        .tus{
            margin-top:5px;margin-bottom:20px
        }
        .shanrems{
            background:#ffffff;
            border:1px solid #ebebeb;
            width:100%;
            height:30px;
            display:inline-block
        }
        .remes{
            width:100% !important
        }
        #myInputs{
            border:1px solid #cccccc; width:126px; height:30px; padding:0 10px;
        }
   }
    .notification-header{
        background:#ffffff;
        height:47px;
        width:100%;

        padding-left:40px;
    }
    .unread{
        color:#f7a72c;
    }
    .unread:hover{
        cursor:pointer
    }
    .PlansearchBoxs{

    }
    .shanrems,.shandu,.shanyidu{
        text-align:center;
        margin-right:9px;
        font-size:12px;
        color:#555555;
        line-height:30px;
    }
    .shanrems,.shandu,.shanyidu:hover{
        cursor:pointer
    }

    .shandu{
        background:#ffffff;
        border:1px solid #ebebeb;
        width:84px;
        height:30px;
        display:inline-block
    }
    .shanyidu{
        background:#ffffff;
        border:1px solid #ebebeb;
        width:91px;
        height:30px;
        display:inline-block
    }
    .hangyeselect{
        font-size:12px;
        color:#555555;
    }
    .hangyeselect span{
        display:inline-block;
        text-align:center;
        line-height:30px;

        width:88px;
        height:30px;
    }
    .hangyeselect p{
        display:inline-block;
    }
   /*.hangyeselect span:hover{
       color:#fff;
       cursor:pointer;
       background:#f7a72c
   }*/
   .containers{
       width:93%;
       margin:0 auto;
   }
   .notification-main{
         background:#ffffff; width:100%; font-size:14px;
   }

   .notification-undata{
        /*background:#ffffff; width:100%; height:100vh; font-size:14px; color:#555; margin:10px 0;line-height:30px; text-align:center;*/
        background:#ffffff;
        width:100%;
        height:300px;
        font-size:12px;
        color:#999;
        margin-bottom:20px;
        line-height:24px;
        text-align:center;
        border:1px solid #ebebeb;
   }
   .notification-undata img{
       /*margin-top:20%;*/
       margin-top:100px;
        margin-bottom:20px;
   }
   .notificationTable{
      margin-top:30px !important;
   }
   .notificationTable th{
       height:47px;
       background:#f3f3f3;
       color:#2b2b2b;
   }

   .kongkong{
       height:30px;
   }
   .notification-mainTabletr tr{
       height:70px;
   }
   .notification-mainTable thead th{
       font-size:12px;
   }
   .notification-mainTable tbody td{
       font-size:12px;
   }
   .kongbottom{
       height:1px;
       width:93%;
       margin:0 auto;
       background: #979797;
       margin-top:10%
   }
   .block{
       margin-right:2%;
       margin-top:20px;
       padding-bottom:10%
   }
   .el-pager li:hover{
       color:#da121a !important
   }
   .el-pager li.active{
       color:#da121a !important
   }
   .spanleft span:hover{
       background:rgb(247, 167, 44);
       color:#fff;
   }
   .weidu{
       color:#304153
   }
   .yidu{
       color:#ccc;
   }
#myInputs:focus{
    border:1px solid #409EFF;
}

.PlansearchBtns{
   background:#da121a; width:42px; height:30px; color:#fff;
}
.PlansearchBtn:hover{
    background:#EF131D;
}
.sp1,.sps2{
    background:#ffffff;
        border:1px solid #ebebeb;

}
.sps2:hover{
    cursor:pointer;
  background:#f7a72c;
  color:#fff;
}
.notification-box .selected{
    background:#f7a72c;
    border-color:#f7a72c;
    color:#fff;
}
.sp1{
    background:#f7a72c;
    color:#fff;
}
.actives{
    background:#f7a72c;
    border-color:#f7a72c;
    color:#fff;
}
.ac{
    color:red
}
.paddingtop{
    padding:50px 20px;
}
</style>
<script>/*
        function myFuun(){
            var $sea=$('#myInputs').val();
            var ase = $sea.toUpperCase();
            var aes = $sea.toLocaleLowerCase();
            //先隐藏全部，再把符合筛选条件的值显示
            console.log($sea);
                $('#tyus tr').hide().filter(':contains('+$sea+')').show();
                $('#tyus tr').filter(':contains('+ase+')').show();
                $('#tyus tr').filter(':contains('+aes+')').show();
        };
        function twiner(e){


                             $(".sp1").css({
                                    "background":"#ffffff",
                                    "border-color":"#ebebeb",
                                    "color":"#2b2b2b"
                                })
                                $(".sps2").removeClass("actives");
                                var spa = $(".sps2")[e];

                               $(".psed").find(spa).addClass("actives");
                                //$(this).addClass("actives");

        };
        function one(){
                $(".sp1").css({
                        "background":"#f7a72c",
                        "border-color":"#f7a72c",
                        "color":"#fff"
                })
                $(".sps2").removeClass("actives");
        }*/

       export default {
         name: "notification",
         data() {
           return {
             dats: [],
             currentPage1: 1,
             totalPages: "",
             lei: [],
             isopen: false,
             isopens: true,
             checkboxAll: false,
             weidushow: true,
             sizePage: 6,
             acp: 0,
             acs: 0

           }
         },
         methods: {


           huoqu: function () {
             var a = {"type":1,"status":1,
               "pageReq": {
                 "page": 0,
                 "size": 100
                }};
             this.$this.post('/broker/admin/leave/list',a).then((response) => {  //获取所有的信息内容

               this.dats = response.data.data.content;

             }).catch((error) => {
             });
           },

         },

         mounted: function () {
             this.huoqu();
           },



       }
</script>
