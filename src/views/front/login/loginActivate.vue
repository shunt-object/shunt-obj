<template>
<div class="loginActivate">
    <img src="../../../assets/front/activate-fail.png" class="loginActivate-img" alt="">
    <div class="loginActivate-title">账号未激活</div>
    <div class="loginActivate-list">您的用户还未激活，请去您的邮箱点击链接激活，如果您没有收到有邮件请点击<span class="again" v-on:click="sendagain()">重新发送</span>验证邮件</div>
</div>
</template>
<style>
.loginActivate{
    font-family:'微软雅黑'; position:relative;
}
.loginActivate-img{
   width:78px; height:78px; position:absolute; left:50%; margin-left:-39px; top:20px;
}
.loginActivate-title{
    font-size:18px; text-align:center; line-height:40px; color:#333; width:100%; padding-top:100px;
}
.loginActivate-list{
    font-size:14px; line-height:1.5; padding:0 30px; margin-top:30px;
}
</style>
<script>
export default{
    name:'loginActivate',
    props:["username","email"],
    data(){
        return {
        }
    },
    mounted:function(){
        //console.log(this.username,this.email);
        //console.log(this.username);
    },
    methods:{
        sendagain:function(){
            this.$this.get('/broker/mail/send/validCode/'+this.username).then((response)=>{
                console.log('------',response);
                //this.$router.push({path:'/'});
                this.$router.push({path:'/sendEmail',query:{email:this.email,username:this.username}});
                //this.$router.push({path:'/activate',query:{email:this.email,username:this.username}});
            }).catch((error)=>{
            })
        }
    }
}
</script>