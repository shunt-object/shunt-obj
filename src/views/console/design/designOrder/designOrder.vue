<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback">云设计</p>
    ><p class="comback">购买详情</p>
</div>
<child index="5" start="4" :type="$route.query.type" :id="$route.query.id"></child>
<div class="designOrder-box">
    <div class="designOrder-title"><span>全部商品</span></div>
    <div class="designOrder-list">
        <div class="designOrder-list-head">
            <p class="designOrder-list-name">
                <input type="checkbox">应用服务
            </p>
            <p class="designOrder-list-del">删除订单</p>
        </div>
        <table class="designOrder-list-table">
            <thead>
                <tr>
                    <td>云厂商</td>
                    <td>产品名称</td>
                    <td>角色类型</td>
                    <td>购买方式</td>
                    <td>区域</td>
                    <td>购买规格</td>
                    <td>数量</td>
                    <td>购买周期</td>
                    <td>付费类型</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>云厂商</td>
                    <td>产品名称</td>
                    <td>角色类型</td>
                    <td>购买方式</td>
                    <td>区域</td>
                    <td>购买规格</td>
                    <td>数量</td>
                    <td>购买周期</td>
                    <td>付费类型</td>
                </tr>
            </tbody>
        </table>
        <div class="designOrder-list-price">
            价格：<span class="designOrder-list-price-color">￥3100</span>
        </div>
    </div>
</div>
<div class="designOrder-sum-price">
    价格：<span class="designOrder-list-price-color">￥3100</span><span class="price-desc">线下咨询购买 您放心的选择</span>
    <button class="designOrder-pay-btn">线下支付</button>
</div>
<div class="designOrder-touch">
    <div class="designOrder-touch-box">
        <p class="designOrder-touch-list">联系我们：400-828-7308</p>
        <p class="designOrder-touch-list">邮箱方式：Help@csb-china.com</p>
    </div>
</div>
</div>
</template>
<script>
import '../designOrder/designOrder.css';
import child from '../../../../components/steps/steps.vue'
export default{
    name:'designOrder',
    components:{
        child
    }
}
</script>