<template>
<div class="total">
    <div class="total-header">
        <span></span>
        云实测
    </div> 
    <!--<div class="title"><div class="swing"><img src="../../../assets/jqqd.jpg" alt=""><p style="font-size:14px;">正在开发中，即将上线，敬请您的期待......</p></div></div>-->
    <div class="row measured-content">
        <div class="col-md-6 measured-desc">
            <div class="measured-desc-box">
                <p class="measured-desc-list">我们当前正在于国内领先的端到端实测服务商共同研发云实测功能，请耐心等待。</p>
                <p class="measured-desc-list" style="margin-top:10px !important;">如现阶段您需要云平台测试，请联系我们热线电话：<span style="color:#da121a;font-size:16px;">400-828-7308</span>，我们将竭诚为您服务。</p>
                <!--<button class="visit-tingyun" v-on:click="tingyun()"><a href="http://www.tingyun.com/?userFrom=sem1&source=bd&plan=sem-chn-ty-j&unit=ty&keyword=ty&e_adposition=cl1" target="_blank">立即访问</a></button>-->
            </div>            
        </div>
        <div class="col-md-6 measured-bg">
            <img src="../../../assets/measured/measured-computer.png" alt="">
        </div>
    </div>
</div>
</template>
<style>
.title{
    height:100vh;
    text-align:center;
    font-size:50px;
    width:100%;
    background:#fff;
}
.title div{padding-top:15%;color:#ccc;}
.swing img{
    width: 25%;
    height: 50%;
    display: block;
    margin: 0 auto;
}

.measured-content{
    background:#fff;
    min-height:90vh;
    padding-bottom:5%;
}
.measured-desc-box{
    float:right;
    margin-top:35%;
    margin-right:50px;
    width:58%;
}
.measured-desc-list{
    text-align:left;
    font-size:14px;
    color:#666;
    line-height:22px;
    margin:0 !important;
}
.visit-tingyun{
    background:#da121a;
    color:#fff;
    border:none;
    float:left;
    margin-top:20px;
    font-size: 12px;
    padding: 10px 25px;
}
.visit-tingyun a{
    color:#fff;
}
.visit-tingyun a:hover{
    color:#fff;
}
.measured-bg img{
    float:left;
    width:58%;
    /*width:75%;*/
    margin-top:10%;
}

</style>
<script>
import "../measured/animate.min.css"
    export default{
            name:"measured",
            methods:{
                tingyun:function(){
                    this.$http.get('/broker/action/click/19').then((response)=>{
                        //console.log('----',response);
                    }).catch((error)=>{
                    })
                }
            }


    }



</script>