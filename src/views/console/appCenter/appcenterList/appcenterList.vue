<template>
<div class="appcenterlist">
    <div class="appcenterlist-list">
        <div class="appcenterlist-item appcenterlist-plan" v-on:click="goPlan()">云规划</div>
        <div class="appcenterlist-item appcenterlist-itemL">预算分析</div>
        <div class="appcenterlist-item appcenterlist-itemR">云选型</div>
        <div class="appcenterlist-item appcenterlist-itemL">价格优选</div>
        <div class="appcenterlist-item appcenterlist-itemR">云设计</div>
    </div>
    <div class="clear"></div>
</div>
</template>
<script>
import '../appcenterList/appcenterList.css';
export default{
    name:'appcenterList',
    methods:{
        goPlan:function(){
            this.$router.push({path:'/appcenterPlan'});
        }
    }
}
</script>