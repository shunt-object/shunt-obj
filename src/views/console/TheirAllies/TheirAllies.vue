<template>
<div class="total">
    <div class="total-header">
        <span></span>
        总览
        ><p class="comback">友盟数据</p>
    </div> 
    <!--<div class="title"><div class="swing"><img src="../../../assets/jqqd.jpg" alt=""><p style="font-size:14px;">正在开发中，即将上线，敬请您的期待......</p></div></div>-->
    <div class="row measured-content">
        <div class="col-md-6 measured-desc">
            <div class="measured-desc-box">
                <p class="measured-desc-list">CSB²为您提供用户流量实时统计分析，</p>
                <p class="measured-desc-list">优化产品和推广策略。当前CSB²版本</p>
                <p class="measured-desc-list">使用友盟产品；您看通过点击如下按钮，</p>
                <p class="measured-desc-list">访问友盟提供的数据，谢谢！</p>
                <button class="visit-tingyun" v-on:click="tingyun()"><a href="https://passport.umeng.com/login?redirectURL=http%3A%2F%2Faccount.umeng.com%2F" target="_blank">登录友盟</a></button>
            </div>            
        </div>
        <div class="col-md-6 measured-bg">
            <img src="../../../assets/youmeng.png" alt="">
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
    margin-right:2px;
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
    width:60%;
    /*width:75%;*/
    margin-top:10%;
}

</style>
<script>

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