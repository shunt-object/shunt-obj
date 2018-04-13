<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    <i style="font-style:normal;" v-if="$route.query.enter!=1">></i><p class="comback" v-if="$route.query.enter!=1" v-on:click="design()">云设计</p>
    <i style="font-style:normal;" v-if="$route.query.enter!=1">></i><p class="comback" v-if="$route.query.enter!=1">购买详情</p>
    <i style="font-style:normal;">></i><p class="comback">支付详情</p>
</div>
<child v-if="$route.query.enter!=1" index="5" start="4" :type="$route.query.type" :id="$route.query.id"></child>
<div class="pay-box">
    <div class="paytype">
        <div class="paytype-box" :class="selectpay==true?'active-pay':'default-pay'"><button class="paytype-btn" v-on:click="paytab()">线下支付</button></div>
        <div class="paytype-box" :class="selectpay!=true?'active-pay':'default-pay'"><button class="paytype-btn" v-on:click="paytab()">线上支付</button></div>
        <div class="clear"></div>
    </div>
    <div class="underpay" v-show="selectpay">
        <div class="underpay-title"><i class="iconfont icon-dianhua2" style="margin-right:5px;"></i>联系电话：</div>
        <div class="underpay-list">
            <p class="underpay-list-type">400-828-7308<span class="underpay-small">（服务热线）</span></p>
            <p class="underpay-list-type">186-1010-3844<span class="underpay-small">（毛东晖）</span></p>
        </div>
        <div class="underpay-title"><i class="iconfont icon-youxiang1" style="margin-right:5px;"></i>联系邮箱：</div>
        <div class="underpay-list">
            <p class="underpay-list-type">Help@csb-china.com</p>
        </div>
        <div class="underpay-title"><i class="iconfont icon-kefu" style="margin-right:5px;"></i>联系客服：</div>
        <div class="underpay-list" style="padding-bottom: 0px !important;">
            <p class="underpay-list-type" style="line-height:40px;text-indent:10px;cursor:pointer;">
                <span class="underpay-kficon" v-on:click="sevice()"><i class="iconfont icon-custom-service"></i></span>
                <span style="cursor:pointer;" v-on:click="sevice()">Prof. 吴</span>
                <div class="clear"></div>
            </p>
        </div>
    </div>
    <div class="onpay" v-if="selectpay!=true">
        当前线上支付方式正与云厂商共同研发中，敬请您的期待.....
    </div>
</div>
<div class="designHalf-box" v-if="$route.query.enter!=1">
    <button class="designHalfbtn" v-on:click="next()">
        <span class="pl-10">下一步</span><i class="iconfont icon-xiayibu" style="margin-left:5px;"></i>
    </button>
    <button class="designHalfprev" v-on:click="prev()">
        <i class="iconfont icon-shangyibu1" style="margin-right:5px;"></i><span class="pr-5">上一步</span>
    </button>
    <div class="clear"></div>
</div>
</div>
</template>
<script>
import '../pay/pay.css';
import child from '../../../components/steps/steps.vue'
export default{
    name:'pay',
    data(){
        return {
            selectpay:true
        }
    },
    methods:{
        paytab:function(){
            if(this.selectpay==true){
                this.selectpay=false
            }else{
                this.selectpay=true;
            }
        },
        sevice:function(){
            // var that = this;  
             var win = window.open("#/CustomerService");                  
            // var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
            // var win = window.open("#/CustomerService","_blank","height=600,width=500","toolbar=yes, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes");
        },
        prev:function(){
            let arr = [this.$route.query.listid];
            this.$router.push({path:'/designOrder',query:{id:this.$route.query.id,type:this.$route.query.type,listid:this.$route.query.listid}});
        },
        next:function(){
            this.$router.push({path:'/colligateReport',query:{id:this.$route.query.id,type:this.$route.query.type}});
        },
        design:function(){
            this.$router.push({path:'/design',query:{id:this.$route.query.id,type:this.$route.query.type}});
        }
    },
    components:{
        child
    }
}
</script>