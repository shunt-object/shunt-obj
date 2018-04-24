<template>
<div class="total">
    <div class="total-header">
        <span></span>
        <p class="zong">应用市场</p>
    </div>
    <div class="appcenterlist">
        <div class="appcenterlist-list">
            <div class="appcenterlist-item" v-on:click="goPlan()">
                <div class="appcenterlist-item-img appcenterlist-item-img1">
                    <img src="../../../../assets/appcenter/appcen-plan.png" alt="">
                </div>
                收益度和亲和度
            </div>
            <div class="appcenterlist-item" v-on:click="goPrice()">
                <div class="appcenterlist-item-img appcenterlist-item-img1">
                    <img src="../../../../assets/appcenter/appcen-price.png" alt="">
                </div>
                价格计算器
            </div>
            <!--  v-on:click="goRoi()" -->
            <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img2">
                    <img src="../../../../assets/appcenter/appcen-roi.png" alt="" style="width: 70px;">
                </div>
                预算收益分析
            </div>
            <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img2">
                    <img src="../../../../assets/appcenter/appcen-compare.png" alt="">
                </div>
                云选型
            </div>
            <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img2">
                    <img src="../../../../assets/appcenter/appcen-design.png" alt="">
                </div>
                云设计
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
    }
}
</script>