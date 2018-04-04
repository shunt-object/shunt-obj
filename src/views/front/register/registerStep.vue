<template>
<div class="registerStep">
    <div class="registerStep-list" style="width:40%;margin-left:5%;">
        <div class="registerStep-circle" style="margin-left:15px;" :class="step==1||step>=1?'registerStep-active':''">1</div>
        <div class="registerStep-line" :class="step>=2?'registerStep-active':''"></div>
        <div class="registerStep-name">填写手机号</div>
    </div>
    <div class="registerStep-list" style="width:40%;">
        <div class="registerStep-circle" style="margin-left:20px;" :class="step>=2?'registerStep-active':''">2</div>
        <div class="registerStep-line" :class="step==3?'registerStep-active':''"></div>
        <div class="registerStep-name">&nbsp&nbsp&nbsp选填信息</div>
    </div>
    <div class="registerStep-list" style="width:15%;">
        <div class="registerStep-circle" :class="step==3?'registerStep-active':''">3</div>
        <div class="registerStep-name">注册完成</div>
    </div>
</div>
</template>
<style>
.registerStep{
    margin-top:30px;
}
.registerStep-list{
    float:left; position:relative;
}
.registerStep-circle{
    width:28px; height:28px; border-radius:50%; background:#ccc; margin-left:10px; position:absolute; left:0; top:0; z-index:2; text-align:center; line-height:28px; font-size:14px; color:#fff; font-weight:bold;
}
.registerStep-line{
    width:95%; height:2px; background:#ccc; position:absolute; left:40px; top:14px; z-index:1;
}
.registerStep-name{
    text-align:left; font-size:12px; margin-top:40px; color:#333;
}
.registerStep-active{
    background: #5DB75B;
}
</style>
<script>
export default{
    name:'registerStep',
    props:["step"],
}
</script>