<template>
<div class="total">
<!-- 公共的样式 -->
<div class="total-header">
    <span></span>
    账号信息
</div>
<div class="accountInfor-box">
    <div class="accountInfor-title">基本资料</div>
    <div class="accountInfor-list">
        <span class="accountInfor-list-key">用户账号：</span>
        <span class="accountInfor-list-val">{{information.username}}</span>
    </div>
    <div class="accountInfor-list">
        <span class="accountInfor-list-key">用户姓名：</span>
        <span class="accountInfor-list-val" v-if="edit==false">{{information.realname}}</span>
        <input class="input-updata" type="text" v-model="information.realname" v-if="edit==true">
        <button class="edit-btn" v-on:click="updata('user')" v-if="edit==false">编辑</button>
        <button class="edit-btn" v-if="edit==true" v-on:click="saveuser()">保存</button>
        <button class="edit-btn" v-if="edit==true" v-on:click="updata('user')">取消</button>
    </div>
    <div class="accountInfor-list">
        <span class="accountInfor-list-key">企业名称：</span>
        <span class="accountInfor-list-val" v-if="company==false">{{information.tenant}}</span>
        <input class="input-updata" type="text" v-model="information.tenant" v-if="company==true">
        <button class="edit-btn" v-on:click="updata('company')" v-if="company==false">编辑</button>
        <button class="edit-btn" v-if="company==true" v-on:click="savecompany()">保存</button>
        <button class="edit-btn" v-if="company==true" v-on:click="updata('company')">取消</button>
    </div>
    <div class="accountInfor-list">
        <span class="accountInfor-list-key">用户类型：</span>
        <span class="accountInfor-list-val" v-if="information.utype==null">个人</span>
        <span class="accountInfor-list-val" v-if="information.utype==2">企业</span>
        <span class="accountInfor-list-val" v-if="information.utype==3">运营商</span>
        <span class="accountInfor-list-val" v-if="information.utype==4">政府</span>
    </div>
</div>
</div>
</template>
<script>
import '../accountInformation/accountInformation.css'
export default{
    name:'accountInformation',
    data(){
        return {
            information:'',
            edit:false,
            company:false
        }
    },
    mounted:function(){
        this.information = JSON.parse(sessionStorage.getItem("account"));
        console.log(this.information);
    },
    methods:{
        updata:function(dom){
            if(dom=='user'){
                this.information.realname = JSON.parse(sessionStorage.getItem("account")).realname;
                this.edit==true?this.edit=false:this.edit=true;
            }else{
                this.information.tenant = JSON.parse(sessionStorage.getItem("account")).tenant;
                this.company==true?this.company=false:this.company=true;
            }
        },
        saveuser:function(){
            this.edit==true?this.edit=false:this.edit=true;
            let obj = {
                id:this.information.id,
                realname:this.information.realname,
                tenant:this.information.tenant
            };
            this.gethttp(obj);
        },
        savecompany:function(){
            this.company==true?this.company=false:this.company=true;
            let obj = {
                id:this.information.id,
                realname:this.information.realname,
                tenant:this.information.tenant
            };
            this.gethttp(obj);
        },
        gethttp:function(str){
            let string = JSON.stringify(str);
            this.$this.post('/broker/user/update',string).then((response)=>{
                console.log('-----',response.data.data);
                sessionStorage.setItem("account",JSON.stringify(response.data.data));
            }).catch((error)=>{

            })
        }
    }
}
</script>