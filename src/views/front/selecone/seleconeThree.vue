<template>
    <div>
         <div class="fixed-box">
            <ul class="fixed-ul">
                <li id="xiaowei" v-on:click="xiaowei()"> <img src="../../../assets/homePage-online.png" class="fixed-icon" alt="">在线客服</li>
                <li class="phone-li" v-on:mouseenter="phoneEnter()" v-on:mouseleave="phoneleave()">
                    <img src="../../../assets/homePage-phone.png" class="fixed-icon" alt="">电话咨询
                    <div v-show="phoneBox" class="phone-box"><img src="../../../assets/homePage-hover-phone.png" alt=""></div>
                </li>
            
            </ul>
            <img src="../../../assets/scroll.png" alt="" class="scrollUp">
        </div>
        <Sec></Sec>
        <Seb></Seb>
        <div style="background:#ededed;width:100%;height:auto;">
                <div class="seleconeMain-footer row">
                    <div class="container text-left" style="width:60%;padding-left:cd30px;">
                            <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/qian.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">5天无理由退款</span></div>
                            <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/24fuwu.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">7×24小时顾问支持</span></div>
                            <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/1fuwu.png" alt="" style="width:18%;margin-right:10px;margin-left:20px;"><span style="font-size:14px;color:#333333">1V1专家服务</span></div>
                            <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/90fuwu.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">90秒极速响应</span></div>
                    </div>
                </div>
            </div>
        <Sex></Sex>
        
    </div>


</template>
<style>
    .scrollUp:hover{
        cursor:pointer;
    }  
</style>
<script>
    import Sec from "../../../components/SecondaryPages/SecondaryPages.vue"
    import Sex from "../../../components/SecondaryPages/SecondaryFooter.vue"
    import Seb from "../../console/measured/measured.vue"
    export default{
        components:{
            Sec,
            Sex,
            Seb
        },
        data(){
            return{
                 phoneBox:false
            }
        },
        methods:{
            xiaowei:function(){
                var that = this; 
                var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
            },
            phoneEnter:function(){
                this.phoneBox = true;
            },
            phoneleave:function(){
                    this.phoneBox = false;
            }
        },
        mounted:function(){
              $(document).ready(function(){ 
                     $(window).scroll(function(){
                    // console.log($(this).scrollTop());
        
                    //当window的scrolltop距离大于1时，go to 
                        if($(this).scrollTop() > 550){
                            $('.scrollUp').css("display","block")
                            }else{
                                    $('.scrollUp').fadeOut();
                                }
                    });
            
                    $(".scrollUp").click(function(){
                        $('html ,body').animate({scrollTop: 0}, 300);
                        return false;
                    });


              })
        }
    }
</script>
