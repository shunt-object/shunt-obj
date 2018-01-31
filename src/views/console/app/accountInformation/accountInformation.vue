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
        <span class="accountInfor-list-val">{{information.realname}}</span>
    </div>
    <div class="accountInfor-list">
        <span class="accountInfor-list-key">企业名称：</span>
        <span class="accountInfor-list-val">{{information.tenant}}</span>
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
            information:''
        }
    },
    mounted:function(){
        this.information = JSON.parse(sessionStorage.getItem("account"));
        //this.$this.post('',)
    },
    methods:{

    }
}
</script>