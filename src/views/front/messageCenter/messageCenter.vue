<template>
    <div class="total notification-box">
        <div>
            <div class="row notification-header">
                <div class="col-md-6 text-left col-xs-12" style=" line-height:47px;">消息列表</div>
                <div class="col-md-6 PlansearchBoxs text-right col-xs-12 pb">
                    <div style="padding-top:10px">
                        <input type="text" id="myInputs" v-on:keyup="myFun()" placeholder="搜索"><button class="PlansearchBtns" v-on:click="myFun()"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
            <div class="row notification-xuze">
                <div class="col-md-1 text-right spanleft tos" ><span class="shanrems" v-on:click="creatAdd()" style="background:#da121a;color:#fff !important;"><i class="iconfont icon-wangpanxinjianwenjianjia-copy" style="font-size:12px;padding-right:6px"></i>添加信息</span></div>
                <div class="col-md-2 text-left spanleft tus" ><span class="shanrems remes" v-on:click="removes()" ><i class="iconfont icon-shanchu"></i>删除</span></div>
                <!--<div class="col-md-8 text-right hangyeselect" style="margin-top:20px;margin-bottom:20px" >
                     <span class="sp1" v-on:click="zongs">全部</span><p v-for="(le,index) in lei" class="psed"><span  class="sps2" v-on:click="typedata(index,le.id)" :id="le.id" >{{le.name}}</span></p>
                </div>-->
            </div>
           <div style="width:100%;min-height:82vh;background:#fff;" :class="isopens==false?'paddingtop':''">
                <div class="notification-main" v-show="isopens">
                    <div class="kongkong"></div>
                    <div class="notification-mainTable">
                        <table border="1" class="notificationTable containers" borderColor="#e5e5e5">
                            <thead class="notificationTableth" >
                                <th class="text-center col-md-1" ><input type="checkbox" v-model="checkboxAll" @change="changeSta" id="tre" /></th>
                                <th class="text-center col-md-1">发布人</th>
                                <th class="text-center col-md-6">消息内容</th>
                                <th class="text-center col-md-2">发生时间</th>
                                <th class="text-center col-md-2">消息类型</th>
                            </thead>
                            <tbody class="notification-mainTabletr" id="tyus">
                                <tr v-for="dat in dats" id="tryes">
                                    <td class="text-center col-md-1"><input type="checkbox" :data="dat.contentUserId" :ids="dat.id" :statu="dat.status"/></td>
                                    <td class="text-center col-md-1">{{dat.userName}}</td>
                                    <td class="text-center col-md-6"><i :class="dat.status==1?'iconfont icon-yiduxiaoxi':'iconfont icon-zhanneixiaoxi'"></i><span :class="dat.status==1?'yidu':'weidu'">{{dat.content}}</span></td>
                                    <td class="text-center col-md-2">{{dat.modifyDt}}</td>
                                    <td class="text-center col-md-2">{{dat.typeName}}</td>
                                </tr>
                            </tbody>
                    </table>
                </div>
                <div class="kongbottom"></div>
                <!--<div class="block" style="text-align:right">
                    <el-pagination class="notification-page"
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
   .notification-page .el-pager li:hover{
       color:#da121a !important
   }
   .notification-page .el-pager li.active{
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
<script>
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
        }
    //     $(document).ready(function(){  
    
    //         $(".sp1").click(function(){
    //                $(this).toggleClass('selected')
    //         });
        
    //         $(".sp2").click(function(){
    //                 $(this).css({"background":"#f7a72c","borderColor":"#f7a72c","color":"#fff"})
    //                 $(this).siblings().css("background","red");
    //         })
    // //  }
    //     })
       export default{
            name:"notification",
            data(){
                return {
                    dats:[],
                    currentPage1: 1,
                    totalPages:"",
                    lei:[],
                    isopen:false,
                    isopens:true,
                    checkboxAll:false,
                    weidushow:true,
                    sizePage:6,
                    acp:0,
                    acs:0

                }
            },
            updated:function(){
                //this.handleCurrentChange(1)
            },
            methods:{
                 zongs:function(){
                    this.huoqu();
                    one()
                   // 
                  // $(".notification-main").css("display","block")
                    // /this.isopen = false;
                    this.weidushow = true;
                },
                myFun:function(){
                    myFuun()
                },
                handleSizeChange:function(val){
                    // alert(val)
                },
                // handleCurrentChange:function(val){
                //        var a = {
                //             "pageReq": {
                //                         "order": null,
                //                         "page": val-1,
                //                         "size": this.sizePage,
                //                         "sort": null
                //                     }
                //         }
                //          this.$this.get('/broker/content/get/content',a).then((response)=>{
                //                 this.dats = response.data.data;   
                //                 console.log(this.dats);
                //                 $("#tryes input[type='checkbox']").prop("checked",false);
                //                 this.checkboxAll = false;               
                //             }).catch((error)=>{
                //         })

                   

                // },
                creatAdd:function(){
                     this.$router.push({path:'/messAdd'});
        
                },
                typedata:function(index,id){
                    var that = this;
                    this.weidushow = false;
                     twiner(index)
                    // $(".sp1").css({
                    //     "background":"#ffffff",
                    //     "border-color":"#ebebeb",
                    //     "color":"#2b2b2b"
                    // })
                    
                    // $(".psed")[index].addClass("actives"); 
                  
                     var obj ={
                                "id": 0,
                                "pageReq": {
                                    "order": null,
                                    "page": 0,
                                    "size": this.sizePage,
                                    "sort": null
                                },
                                "type": id
                                }
                        
                     this.$this.get('/broker/conten/get/content',obj).then((pons)=>{  //获取分类的消息
                                this.dats = pons.data.data.content;
                               
                                if(this.dats.length==0){
                                    this.isopen=true;
                                    this.isopens = false
                                }else if(this.dats.length!=0){
                                    this.isopen=false;
                                    this.isopens = true
                                }
                                console.log(this.dats.length)  
                                     
                        }).catch((error)=>{
                    })
                },
               
               huoqu:function(){
                    var a = {
                            "pageReq": {
                                        "order": null,
                                        "page": 0,
                                        "size": this.sizePage,
                                        "sort": null
                                    }
                            }
                    this.$this.get('/broker/content/get/content',a).then((response)=>{  //获取所有的信息内容 
                                 this.dats = response.data.data; 
                                 var aop = [];  
                                 
                                  this.totalPages = response.data.data.totalElements;
                                  console.log(this.dats)
                                // if(this.totalPages ==0){
                                //     this.isopens= false;
                                //     this.isopen = true;
                                // }else{  
                                //     this.isopens=true;
                                //     this.isopen = false;
                                // }
                               if(this.dats.length==0){
                                    this.isopens= false;
                                    this.isopen = true;
                               }else{
                                     this.isopens=true;
                                     this.isopen = false;
                               }
                                //this.titleWeidu(this.totalPages);
                        }).catch((error)=>{
                    });
               },
           
               changeSta:function(item){
                    if(this.checkboxAll){
                         $("#tryes input[type='checkbox']").prop("checked",true)
                    }else{
                        $("#tryes input[type='checkbox']").prop("checked",false)
                    }
               },
               removes:function(){
                   var that = this;
                   if($("#tryes input[type='checkbox']").is(":checked")){
                      
                       var contentUserId;
                       var ids;
                       var obj=[];
                       var obb=[];
                         for (let v = 0; v < $("input[type='checkbox']").length; v++) {
                                if ($("input[type='checkbox']").eq(v).is(":checked")){
                                    ids = $("input[type='checkbox']").eq(v).attr("ids")
                                    //contentUserId = $("input[type='checkbox']").eq(v).attr("data");
                                          obj.push(ids);
                                    
                                }
                        }
                         this.$confirm('您确定要删除该消息吗？', '温馨提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                confirmButtonClass:'lay-btn-red',
                                cancelButtonClass:'lay-cancel-btn',
                                type: 'warning',
                                center: false
                          }).then(() => {
                                     
                                      if (obj[0] == undefined) {
                                        obb = obj.slice(1);
                                      } else {
                                        obb = obj;
                                      }
                                      //console.log(obj)
                                      
                                      var obs = {
                                          "ids":obb
                                      }
                                    console.log(obs)
                                     that.$this({
                                            method: "delete",
                                            url: "/broker/content/delete/content",
                                            data: obs
                                        }).then(function(response) {
                                            that.huoqu();
                                             that.checkboxAll =false;
                                              $("#tryes input[type='checkbox']").prop("checked",false);
                                        }).catch(function(error) {
                                            console.log(error);
                                        });
            //                          this.$this.post("broker/content/user/option",obs).then((rus)=>{
            //                               this.huoqu();
            //                               $("#tryes input[type='checkbox']").prop("checked",false);
            //                              this.checkboxAll = false
            //                         },(err)=>{
            //                             console.log("不好意思")
            //                         })
                             }).catch(() => {
                          
                            }); 
                   }else{
                       return false;
                   }
               }
            
            },
             
        
            
            mounted:function(){
                    this.huoqu();
                    //this.handleCurrentChange();
                    this.$this.get('/broker/prop/typedata/msg-type/-1').then((pon)=>{  //获取消息类型
                                this.lei = pon.data.data
                        }).catch((error)=>{
                    })
            },
            // updated:function(){
             
            // }

       }
</script>