<template>
    <div style="width:100%;background:#fff;">
        <div style="width:100%;background:#da121a">
            <div class="heder">给CloudBroker²留言</div>
            <div class="heades">感谢您的来访，如果需要我们的帮助，请留言，我们会尽快联系您。</div>
        </div>
        <main class="mes-mains" v-show="sends">
            <div class="mesleft">如何称呼您?<span>*</span></div>
            <input type="text" v-model="userName" placeholder="请输入您的姓名"/>
            <div class="mesleft">您的公司是？<span>*</span></div>
            <input type="text" v-model="userBm"  placeholder="请输入公司名称"/>
            <div class="mesleft">您的邮箱地址？</div>
            <input type="text" v-model="useremail"  placeholder="请输入您的邮箱"/>
            <div class="mesleft">您的联系电话？</div>
            <input type="text" v-model="userphone"  placeholder="请输入您的电话"/>
            <div class="mesleft">您的QQ是？</div>
            <input type="text" v-model="userqq"  placeholder="请输入您的QQ"/>
            <div v-on:click="send" class="send">提交</div>
        </main>
         <main class="mes-mains" v-show="backd">
                <div style="margin-top:5%"><img src="/src/assets/tj.png" alt=""></div>
                <div style="color:#000;margin-bottom:55%">提交成功，我们会尽快联系您</div>
                <div v-on:click="backs" class="send">返回</div>
        </main>
    </div>
</template>
<style>
::-webkit-input-placeholder { /* WebKit browsers */ 
color: #999; 
} 
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
color: #999; 
} 
::-moz-placeholder { /* Mozilla Firefox 19+ */ 
color: #999; 
} 
:-ms-input-placeholder { /* Internet Explorer 10+ */ 
color: #999; 
} 
.send:hover{
    cursor:pointer
}
 .mesleft{
     text-align:left;
     margin:20px 0 15px 0;
     color:#000;
 }
 .mes-mains img{
     width:55%;
     height:55%;
 }
 .heder,.heades{
    color:#fff;
 }
 .heder{
     font-size:18px;
     padding:3% 0 2% 0; 
 }
 .heades{
     font-size:12px;
     padding-bottom:15px;
 }
 
 @media (min-width: 768px) {   /* pc */
    /*.icon-tiam{padding-left:200px}*/
   .mes-mains{
        width:202px;
        margin:0 auto;
    }
    .mes-mains>input{
        border:1px solid #ccc;
        width:202px;
        height:40px;
        padding-left:10px;
    }
}
@media (max-width: 768px) {   /* mobile */
    /*.icon-tiam{padding-left:200px}*/
   .mes-mains{
        width:90%;
        margin:0 auto;
    }
    .mes-mains>input{
        border:1px solid #ccc;
        width:100%;
        height:40px;
        padding-left:10px;
    }
   /* .el-message-box{
        width:254px;
    }*/
}
 .mes-mains span{
     color:#da121a
 }
 
 .send{
     background:#da121a;
     color:#fff;
     height:40px;
     line-height:40px;
     font-size:18px;
     margin-top:20px;
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
                    userqq:"",
                    sends:true,
                    backd:false
                }
            },
            methods:{
               backs:function(){
                    this.sends = true;
                    this.backd = false;
               },
                send:function(){
                    if(this.userName==""||this.userBm==""){
                        //  this.$alert('请补全留言信息，谢谢！', '温馨提示', {
                        //                             confirmButtonText: '我知道了',
                        //                             showClose:false,
                        //                             confirmButtonClass:'lay-btn-red',
                        //                             type: 'warning'
                        //   }); 
                    }else{
                        var leaveMessage ={
                                "company":this.userBm,
                                "email": this.useremail,
                                "phone":this.userphone,
                                "qq":this.userqq,
                                "realname": this.userName
                            }
                        this.$this.post('/broker/leave/msg/saveLeaveMsg',leaveMessage).then((pon)=>{  //获取消息类型
                                        // this.$alert('留言成功', '温馨提示', {
                                        //             confirmButtonText: '我知道了',
                                        //             showClose:false,
                                        //             confirmButtonClass:'lay-btn-red',
                                        //             type: 'warning'
                                        // });  
                                        this.backd = true;
                                        this.sends = false;
                            }).catch((error)=>{
                                console.log("不好意思")
                        })
                    }
                }
         
            }
       }
</script>