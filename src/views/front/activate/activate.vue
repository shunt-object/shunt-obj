<template>
<div class="activate">
    <div class="activate-header">
        <router-link to="/"><img class="activate-logo" src="../../../assets/login-logo.png" alt=""></router-link>
    </div>
    <div class="clear"></div>
    <div class="activate-main">
        <img src="../../../assets/front/activate-success.png" class="activate-img" alt="">
        <div class="activate-title">成功：账号已激活</div>
        <!--<div class="activate-title">失败：账号未激活成功</div>-->
        <div class="activate-desc">感谢您注册ClouldBroker²我们将为您提供最专业的服务！<!--<span class="again">请重新发送邮箱</span>--></div>
        <router-link to="/"><button class="successBtn">立即登录</button></router-link>
    </div>
    <div class="activate-footer">
        <p class="activate-foot-list">© CopyRight 2018江苏京玉信息技术有限公司 版权所有TEL:400-612-218</p>
        <p class="activate-foot-list">京ICP证120829号 京ICP备12032080号-2 京网文（2014）0901-201号</p>
        <p class="activate-foot-list">京公网安备 11010802020326号</p>
    </div>
</div>
</template>
<script>
import '../activate/activate.css'
export default{
    name:'activate'
}
</script>