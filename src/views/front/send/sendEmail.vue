<template>
<div class="sendEmail">
    <div class="sendEmail-header">
        <router-link to="/"><img class="sendEmail-logo" src="../../../assets/login-logo.png" alt=""></router-link>
    </div>
    <div class="sendEmil-main row">
        <div class="col-md-3"></div>
        <div class="col-md-6 sendEmil-box">
            <div class="sendEmail-title">激活您的ClouldBroker²账号</div>
            <div class="sendEmail-num">激活邮件已发送至您的注册邮箱：请查看邮件并激活您的账号</div>
            <button class="sendEmail-btn" v-show="btn"><a :href="url"  target="_blank" style="color:#fff;">前往邮箱</a></button>
            <div class="sendEmail-line"></div>
            <div class="sendEmsil-not row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <p class="sendEmail-list">没有收到邮件？</p>
                    <p class="sendEmail-list">1、请检查您的邮件垃圾箱，激活邮件有可能被误认为是广告</p>
                    <p class="sendEmail-list">2、若仍未找到激活邮件，请尝试<span class="sendEmail-again" v-oon:click="sends()">重新发送</span></p>
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>
        <div class="col-md-3"></div>
    </div>
    <div class="gologin">已有账号？<router-link to="/login">立即登录</router-link></div>
    <div class="sendEmail-foot">
        <p class="sendEmail-foot-list">© CopyRight 2018江苏京玉信息技术有限公司 版权所有TEL:400-612-218</p>
        <p class="sendEmail-foot-list">京ICP证120829号 京ICP备12032080号-2 京网文（2014）0901-201号</p>
        <p class="sendEmail-foot-list">京公网安备 11010802020326号</p>
    </div>
</div>
</template>
<style>
.sendEmail{
    font-family:'Microsoft YaHei'; width:100vm;  height:100vh; background:#fdfdfd;overflow-x:hidden; box-sizing:border-box; position:relative;
}
.sendEmail-header{
    border-bottom:1px solid #e5e5e5; border-top:1px solid #e5e5e5; width:100%;  height:80px; margin-top:20px; padding-left:50px;
}
.sendEmail-logo{
    float:left; width: 144px; height: 19px; margin-top:30px;
}
.sendEmil-box{
    padding:20px 30px; background:#fff; margin-top:50px; border:1px solid #e5e5e5;
}
.sendEmail-title{
    width:100%; height:50px; line-height:50px; font-size:18px; color:#333;
}
.sendEmail-num{
    width:100%; text-align:center; line-height:30px; font-size:12px; color:#666;
}
.sendEmail-btn{
    width:190px; height:30px; background:#da121a; color:#fff; line-height:30px; text-align:center;
    margin-top:20px;
}
.sendEmail-line{
    width:100%; height:1px; background:#f1f1f1; margin-top:30px; margin-bottom:50px;
}
.sendEmsil-not{
    padding-bottom:10px;
}
.sendEmail-list{
    font-size:12px; color:#666; text-align:left;
}
.sendEmail-again{
    color:#337ab7; cursor:pointer;
}
.gologin{
    font-size:12px; width:100%; text-align:center; margin-top:20px;
}
.sendEmail-foot{
    position:absolute; left:0; bottom:10px; width:100%; text-align:center;
} 
.sendEmail-foot-list{
    font-size:12px;  color:#555; line-height:10px;
}
</style>
<script>
export default{
    name:'sendEmail',
    data(){
        return {
            email:'',
            btn:false,
            url:'',
            username:''
        }
    },
    mounted:function(){
        let hash={  
            'qq.com': 'http://mail.qq.com',  
            'gmail.com': 'http://mail.google.com',  
            'sina.com': 'http://mail.sina.com.cn',  
            '163.com': 'http://mail.163.com',  
            '126.com': 'http://mail.126.com',  
            'yeah.net': 'http://www.yeah.net/',  
            'sohu.com': 'http://mail.sohu.com/',  
            'tom.com': 'http://mail.tom.com/',  
            'sogou.com': 'http://mail.sogou.com/',  
            '139.com': 'http://mail.10086.cn/',  
            'hotmail.com': 'http://www.hotmail.com',  
            'live.com': 'http://login.live.com/',  
            'live.cn': 'http://login.live.cn/',  
            'live.com.cn': 'http://login.live.com.cn',  
            '189.com': 'http://webmail16.189.cn/webmail/',  
            'yahoo.com.cn': 'http://mail.cn.yahoo.com/',  
            'yahoo.cn': 'http://mail.cn.yahoo.com/',  
            'eyou.com': 'http://www.eyou.com/',  
            '21cn.com': 'http://mail.21cn.com/',  
            '188.com': 'http://www.188.com/',  
            'foxmail.coom': 'http://www.foxmail.com'  
        };  
        this.email = this.$route.query.email;
        this.username = this.$route.query.username;
        // let str = this.email.split('@')[1];
        // if(hash[str]==undefined){
        //     this.btn = false;
        // }else{
        //     this.btn = true;
        //     this.url = hash[str];
        // }
    },
    methods:{
        sends:function(){
            this.$this.get('/broker/mail/send/validCode/'+this.$route.query.username+'').then((response)=>{
            }).catch((error)=>{
            })
        }
    }
}
</script>