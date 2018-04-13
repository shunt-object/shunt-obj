<template>
    <div class="total notification-box">
        <div>
            <div class="row notification-header">
                    <div class="col-md-6 text-left col-xs-12" style=" line-height:47px;"><span class="msdg">通知中心</span><span style="color::#333333;font-size:14px;">（共<span>{{totalPages}}</span>封，其中<span>{{acp}}</span>封未读<span class="unread" v-on:click="weidulooks" v-show="weidushow">&nbsp仅查看未读消息</span>）</span></div>
                    <div class="col-md-6 PlansearchBoxs text-right col-xs-12" style="padding-right:47px;">
                        <div style="padding-top:10px">
                            <input type="text" id="myInputs" v-on:keyup="myFun()" placeholder="搜索"><button class="PlansearchBtns" v-on:click="myFun()"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
            </div>
            <div class="row notification-xuze">
                <div class="col-md-4 text-left spanleft sls"><span class="shanrem" v-on:click="removes()">删除</span><span class="shandu" v-on:click="yiduCreat">标记为已读</span><span class="shanyidu" v-on:click="yiduAll">已读所有消息</span></div>
                <div class="col-md-8 text-left hangyeselect" style="margin-top:20px;margin-bottom:20px" >
                     <span class="sp1" v-on:click="zongs">全部</span><p v-for="(le,index) in lei" class="psed"><span  class="sps2" v-on:click="typedata(index,le.id)" :id="le.id" >{{le.name}}</span></p>
                </div>
            </div>
           
           <div style="width:100%;min-height:82vh;background:#fff;" :class="isopens==false?'paddingtop':''">
            <div class="notification-main" v-show="isopens">
                <div class="kongkong"></div>
                <div class="notification-mainTable">
                    <table border="1" class="notificationTable containers" borderColor="#e5e5e5">
                         <thead class="notificationTableth" >
                            <th class="text-center col-md-1"><input type="checkbox" v-model="checkboxAll" @change="changeSta" id="tre" /></th>
                            <th class="text-center col-md-7">消息内容</th>
                            <th class="text-center col-md-2">发生时间</th>
                            <th class="text-center col-md-2">消息类型</th>
                         </thead>
                         <tbody class="notification-mainTabletr" id="tyus">
                            <tr v-for="dat in dats" id="tryes">
                                <td class="text-center col-md-1"><input type="checkbox" :data="dat.contentUserId" :ids="dat.id" :statu="dat.status"/></td>
                                <td class="text-center col-md-7"><i :class="dat.status==1?'iconfont icon-yiduxiaoxi':'iconfont icon-zhanneixiaoxi'"></i><span :class="dat.status==1?'yidu':'weidu'">{{dat.content}}</span></td>
                                <td class="text-center col-md-2">{{dat.update_time}}</td>
                                <td class="text-center col-md-2">{{dat.typeName}}</td>
                            </tr>
                         </tbody>
                    </table>
                </div>
                <div class="kongbottom"></div>
                <div class="block" style="text-align:right">
                    <el-pagination 
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage1"
                        :page-size="sizePage"
                        layout="total, prev, pager, next"
                        :total="Number(this.totalPages)">
                    </el-pagination>
                </div>
            </div>
             
            <div class="notification-undata" v-show="isopen">
                <img src="../../../assets/compare-nodata.png" alt="">
                <br>
                <span class="spla">暂无数据</span>
            </div>
        </div>
    </div>
    
    </div>
</template>
<style>
    @media(min-width:768px){  /* pc */
        .sls{
            padding-left:47px;margin-top:20px;margin-bottom:20px
        }
        #myInputs{
            border:1px solid #cccccc; width:192px; height:30px; padding:0 10px;
        }
        .notification-header{
            background:#ffffff;
            height:47px;
            width:100%;
            padding-left:40px;
        }
        .msdg{
            display:inline-block;
        }
    }
    @media(max-width:768px){  /* mobile */
        .sls{
            margin-top:20px;margin-bottom:20px
        }
        #myInputs{
            border:1px solid #cccccc; width:126px; height:30px; padding:0 10px;
        }
        .notification-header{
            background:#ffffff;
            height:47px;
            width:100%;
            padding-left:0px;
        }
        .msdg{
            display:none;
        }
    }

  
    .unread{
        color:#f7a72c;
    }
    .unread:hover{
        cursor:pointer
    }
    .PlansearchBoxs{
   
    }
    .shanrem,.shandu,.shanyidu{
        text-align:center;
        margin-right:9px;
        font-size:12px;
        color:#555555;
        line-height:30px;
    }
    .shanrem,.shandu,.shanyidu:hover{
        cursor:pointer
    }
    .shanrem{
        background:#ffffff;
        border:1px solid #ebebeb;
        width:60px;
        height:30px;
        display:inline-block
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
        /*background:#ffffff; width:100%; height:100%; font-size:14px; color:#555; margin:10px 0;line-height:30px; text-align:center; padding-bottom:16%;*/
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
       height:50px;
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
       background:#F5F7FA;
       color:#000;
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
  background:#F5F7FA;
  border-color:#F5F7FA;
  color:#000;
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

                        
                             $(".sps2").css({
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
          
            // updated:function(){
            //     this.handleCurrentChange(1)
            // },
            methods:{
                myFun:function(){
                    myFuun()
                },
                handleSizeChange:function(val){
                    alert(val)
                },
                handleCurrentChange:function(val){
                       var a = {
                            "pageReq": {
                                        "order": null,
                                        "page": val-1,
                                        "size": this.sizePage,
                                        "sort": null
                                    }
                        }
                         this.$this.post('/broker/content/user/get/content',a).then((response)=>{
                                this.dats = response.data.data.content;   
                                $("#tryes input[type='checkbox']").prop("checked",false);
                                this.checkboxAll = false;               
                            }).catch((error)=>{
                        })

                   

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
                        
                     this.$this.post('/broker/content/user/get/content',obj).then((pons)=>{  //获取分类的消息
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
                zongs:function(){
                    this.huoqu();
                    one()
                   // 
                  // $(".notification-main").css("display","block")
                    // /this.isopen = false;
                    this.weidushow = true;
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
                            console.log(a)
                    this.$this.post('/broker/content/user/get/content',a).then((response)=>{  //获取所有的信息内容 
                                 this.dats = response.data.data.content;  
                                 console.log(this.dats)    
                                  this.totalPages = response.data.data.totalElements;
                                   this.weidulook();
                                if(this.totalPages ==0){
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
               titleWeidu:function(e){
                    var a = {
                            "pageReq": {
                                        "order": null,
                                        "page": 0,
                                        "size": e,
                                        "sort": null
                                    }
                            }
                    this.$this.post('/broker/content/user/get/content',a).then((response)=>{  //获取所有的信息内容 
                                this.dats = response.data.data.content;      
                                for(let k = 0;k<e;k++){
                                    if(this.dats[k].status==null){
                                       this.acp.push(this.dats[k])
                                    }
                                }
                                console.log(this.acp)
                                
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
                   if($("#tryes input[type='checkbox']").is(":checked")){
                      
                       var contentUserId;
                       var ids;
                       var obj=[];
                       var obb=[];
                         for (let v = 0; v < $("input[type='checkbox']").length; v++) {
                                if ($("input[type='checkbox']").eq(v).is(":checked")){
                                    ids = $("input[type='checkbox']").eq(v).attr("ids")
                                    contentUserId = $("input[type='checkbox']").eq(v).attr("data");
                                        var objs ={
                                                    "contentId": ids,
                                                    "id":contentUserId ,
                                                    "status": 2,
                                                  }
                                          obj.push(objs);
                                }
                        }
                         this.$confirm('您确定要删除该应用吗？', '温馨提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                confirmButtonClass:'lay-btn-red',
                                cancelButtonClass:'lay-cancel-btn',
                                type: 'warning',
                                center: false
                          }).then(() => {
                                     
                                      if (obj[0].contentId == undefined) {
                                        obb = obj.slice(1);
                                      } else {
                                        obb = obj;
                                      }
                                      console.log(obj)
                                      
                                      var obs = {
                                          "list":obb
                                      }
                                    console.log(obs)
                                     this.$this.post("broker/content/user/option",obs).then((rus)=>{
                                          this.huoqu();
                                          $("#tryes input[type='checkbox']").prop("checked",false);
                                         this.checkboxAll = false
                                    },(err)=>{
                                        console.log("不好意思")
                                    })
                             }).catch(() => {
                          
                            }); 
                   }else{
                       return false;
                   }
               },
               weidulook:function(){
                   var c = {
                                "pageReq": {
                                    "page": 0,
                                    "size": this.totalPages,
                                },
                                "status": 0,
                          };
                    this.$this.post('/broker/content/user/get/content',c).then((pons)=>{  
                            var totalElements =  pons.data.data.totalElements;
                            if(totalElements<1){
                                this.isopen = true;
                                this.isopens = false;
                                this.acp = 0;
                                
                            }else if(totalElements>0){
                                 var as = pons.data.data.content;
                                 this.acp = as.length;
                            }
                          console.log(as)
                    })
              },
              weidulooks:function(){
                    var c = {
                                "pageReq": {
                                    "page": 0,
                                    "size": this.sizePage,
                                },
                                "status": 0,
                          };
                    this.$this.post('/broker/content/user/get/content',c).then((pons)=>{  
                            var totalElements =  pons.data.data.totalElements;
                            if(totalElements<1){
                                this.isopen = true;
                                this.isopens = false;
                                  this.currentPage1=1;
                            }else if(totalElements>0){
                                 this.dats = pons.data.data.content;
                            }
                    })
              },
              titleCreated:function(){
                    var c = {
                                "pageReq": {
                                    "page": 0,
                                    "size": this.sizePage,
                                },
                                "status": null,
                          };
                    this.$this.post('/broker/content/user/get/content',c).then((pons)=>{  
                            var totalElements =  pons.data.data.totalElements;
                            if(totalElements==1){
                                this.isopen = true;
                                this.isopens = false;
                                this.acp = 0;
                            }else if(totalElements==0){
                                 this.acp =  pons.data.data.content.length
                            }else if(totalElements==2){
                                 this.isopen = true;
                                this.isopens = false;
                                this.acp = 0;
                            }
                          
                    })
              },
              yiduCreat:function(){
                   if($("#tryes input[type='checkbox']").is(":checked")){
                        var contentUserId;
                        var ids;
                        var status;
                        var objer=[];
                        for (let w = 0; w < $("input[type='checkbox']").length; w++) {
                            if ($("input[type='checkbox']").eq(w).is(":checked")){
                                    ids = $("input[type='checkbox']").eq(w).attr("ids");
                                    contentUserId = $("input[type='checkbox']").eq(w).attr("data");
                                    status = $("input[type='checkbox']").eq(w).attr("statu");
                                    // if(status==undefined){
                                    //     status=null;
                                    // }
                                    var obj = {
                                                "contentId":ids ,
                                                "id": contentUserId,
                                                "pageReq": {
                                                    "page": 0,
                                                    "size": this.sizePage,
                                                },
                                                "status": 1,
                                              };
                                    objer.push(obj);
                                    console.log(objer)
                                    var obb = [];
                                    if (objer[0].contentId == undefined) {
                                        obb = objer.slice(1);
                                      } else {
                                        obb = objer;
                                      }
                                    var objy = {
                                        "list":obb
                                    }
                       }

                   };
                      this.$this.post("broker/content/user/option",objy).then((rus)=>{
                                        this.zongs();
                                        // this.handleCurrentChange(1);
                                       this.weidulook()
                                        this.currentPage1 =1;
                                        $("#tryes input[type='checkbox']").prop("checked",false);
                                        this.checkboxAll = false
                                },(err)=>{
                                    console.log("不好意思")
                    })  
              }
             },
             yiduAll:function(){
                   one()
                   var c = {
                                "pageReq": {
                                    "page": 0,
                                    "size": this.sizePage,
                                },
                                "status": 1,
                          };
                    this.$this.post('/broker/content/user/get/content',c).then((pons)=>{  
                              this.dats = pons.data.data.content;      
                              this.totalPages = pons.data.data.totalElements;
                               $(".notification-main").css("display","block")
                    })
                    console.log(c)
             }
            },
            mounted:function(){
                    this.huoqu();
                    this.$this.get('/broker/prop/typedata/msg-type/-1').then((pon)=>{  //获取消息类型
                                this.lei = pon.data.data
                        }).catch((error)=>{
                    })
            },
            // updated:function(){
             
            // }

       }
</script>