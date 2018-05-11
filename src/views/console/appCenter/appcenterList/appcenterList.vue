<template>
<div class="total">
    <div class="total-header">
        <span></span>
        <p class="zong">应用市场</p>
    </div>
    <div class="appcenterlist">
        <div class="appcenterlist-list">
            <!-- <div class="appcenterlist-item" v-on:click="goPlan()">
                <div class="appcenterlist-item-img appcenterlist-item-img1">
                    <img src="../../../../assets/appcenter/appcen-plan.png" alt="">
                </div>
                收益度和亲和度
            </div> -->
            <div class="appcenterlist-item" v-on:click="goPrice()">
                <div class="appcenterlist-item-img appcenterlist-item-img1">
                    <img src="../../../../assets/appcenter/wechartprice.png" alt="">
                </div>
                云价格计算器
            </div>
            <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img1" v-on:click="goRoi()">
                    <img src="../../../../assets/appcenter/wechartshouyi.png" alt="">
                </div>
                多云预算差异分析助手
            </div>
            <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img1" v-on:click="goProxy()">
                    <img src="../../../../assets/appcenter/weichartdaili.png" alt="">
                </div>
                云代理查询助手
            </div>
            <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img1" v-on:click="goCheck()">
                    <img src="../../../../assets/appcenter/wechartjianyan.png" alt="">
                </div>
                云匹配度分析器
            </div>
            <!-- <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img2">
                    <img src="../../../../assets/appcenter/appcen-compare.png" alt="">
                </div>
                云选型
            </div> -->
            <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img2" v-on:click="goSeacher">
                    <img src="../../../../assets/homepage/osa.png" alt="">
                </div>
                云实例快搜器
            </div>
            <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img2" v-on:click="goEye">
                    <img src="../../../../assets/appcenter/wechartseye2.png" alt="">
                </div>
                云眼查
            </div>
            <div class="clear"></div>
        </div>
        
    </div>
</div>
</template>
<script>
import '../appcenterList/appcenterList.css';
export default{
    name:'appcenterList',
    methods:{
        goPlan:function(){
            this.$router.push({path:'/appcenterPlan'});
        },
        goPrice:function(){
            this.$router.push({path:'/appcenterPrice'});
        },
        goRoi:function(){
            this.$router.push({path:'/appcenterRoi'});
        },
        goProxy:function(){
            this.$router.push({path:'/appcenterProxy'});
        },
        goCheck:function(){
            this.$router.push({path:'/appcenterCheck'});
        },
        goSeacher:function(){
            this.$router.push({path:'/appcenterSearch'});
        },
        goEye:function(){
             this.$router.push({path:'/appcenterCloudEye'});
        }
    }
}
</script>