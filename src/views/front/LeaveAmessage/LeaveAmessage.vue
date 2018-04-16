<template>
    <div style="width:100%;background:#000">
        <main class="mes-mains">
            <div class="mesleft">您的姓名</div>
            <input type="text" v-model="userName"/>
            <div class="mesleft">您的公司名字</div>
            <input type="text" v-model="userBm"/>
            <div class="mesleft">您的邮箱</div>
            <input type="text" v-model="useremail"/>
            <div class="mesleft">您的联系电话</div>
            <input type="text" v-model="userphone"/>
            <div class="mesleft">您的QQ</div>
            <input type="text" v-model="userqq"/>
            <div v-on:click="send">发送</div>
        </main>
    </div>
</template>
<style>
 .mesleft{
     text-align:left;
 }
 .mes-mains{
     width:202px;
     margin:0 auto;
 }
</style>
<script>
    
       export default{
            name:"leame",
            data(){
                return {
                    userName:"",
                    userBm:"",
                    useremail:"",
                    userphone:"",
                    userqq:""
                }
            },
            methods:{
                send:function(){
                   var leaveMessage ={
                        "company":this.userBm,
                        "email": this.useremail,
                        "phone":this.userphone,
                        "qq":this.userqq,
                        "realname": this.userName
                    }
                 this.$this.post('/broker/leave/msg/saveLeaveMsg',leaveMessage).then((pon)=>{  //获取消息类型
                                 this.$alert('留言成功', '温馨提示', {
                                            confirmButtonText: '我知道了',
                                            showClose:false,
                                            confirmButtonClass:'lay-btn-red',
                                            type: 'warning'
                                 });  
                    }).catch((error)=>{
                        console.log("不好意思")
                 })
            }
         
            }
       }
</script>