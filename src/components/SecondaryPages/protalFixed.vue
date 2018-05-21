<template>
<div class="fixed-box">
    <ul class="fixed-ul">
        <li class=" liHoversBj" v-on:mouseenter="phoneEnter()" v-on:mouseleave="phoneleave()">
            <a href="tel:4008287308" style="color:#fff"><img src="../../assets/homePage-phone.png" class="fixed-icon" alt=""></a>
            <div v-show="phoneBox" class="phone-box liHoversBj"><img src="../../assets/alertPhone.png" alt="" style="width:100%;height:100%"></div>
        </li>
        <li id="xiaowei"  class="liHoversBj phone-li" v-on:click="xiaowei"> <img src="../../assets/homePage-online.png" class="fixed-icon" alt=""></li>
        <li class="liHoversBj phonegf" @click="yijian"><p>意见</br>反馈</p></li>
    </ul>
    <div id="rys" style="z-index:100 !important"></div>

    <img src="../../assets/scroll.png" alt="" class="scrollUp" style="width:47px;height:47px;">
    
</div>
</template>
<style>
/*悬浮框*/
.fixed-box{
 width:55px; position:fixed;right:0;bottom:100px;z-index:10;
}
.fixed-box .scrollUp{
    position:fixed;
    right:12px;
    display:none;
}
.phonegf{
    height:80px !important;
    background:#fff!important;
    margin-top:10px;
    font-size:20px !important;
    color:#000 !important;
    text-align:center
}
.phonegf p{
        position: relative;
    padding: 10px 10px;
    background-color: white;
    font-size: 14px;
    color: #333;
    line-height: 18px;
    text-align: center; 
}
.fixed-ul li{
    background:#da121a; box-shadow:0 2px 4px 0 rgba(0,0,0,0.15); width:40px; height:40px; color:#fff;
    padding-top:1px; line-height:2px; cursor:pointer;
    font-size:10px;
}
.phone-li{
    margin-top:7px; position:relative;
}
.phone-box{
    width:185px; height:60px; position:absolute; right:68px; top:0;
}
.fixed-icon{
    display:block; margin:10px auto; width:18px; height:18px;
}
.scrollUp:hover{
     cursor:pointer;
 } 
</style>

<script>
export default {
    data(){
        return {
            phoneBox:false,
        }
    },
    mounted:function(){
        $(window).scroll(function(){
            if($(this).scrollTop() > 550){
                $('.scrollUp').css("display","block")
            }else{
                $('.scrollUp').fadeOut();
            }
        });
        $(".scrollUp").click(function(){
            $('html ,body').animate({scrollTop: 0}, 300);
        });
    },
    methods:{
        phoneEnter:function(){
            this.phoneBox = true;
        },
        phoneleave:function(){
            this.phoneBox = false;
        },
        yijian:function(){
            this.$router.push({path: '/selfeedback'});
            $('html ,body').animate({scrollTop: 0},0);
        },
        xiaowei:function(){
            // var that = this; 
            // var win = window.open("#/CustomerService");
                var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
            //var win = window.open("#/CustomerService","_blank","height=600,width=500","toolbar=yes, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes");
        },
    }
}
</script>
