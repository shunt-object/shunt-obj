<template>
<div class="designHalf-price">
    <div class="designHalf-price-title">价格优选</div>
    <div class="designHalf-price-tab">
        <button class="designHalf-tab-btn">多云厂商对比</button>
        <button class="designHalf-tab-btn">指定云厂商</button>
        <div class="clear"></div>
    </div>
    <div class="designHalf-price-list row">
        <div class="designHalf-price-list-title col-md-1">云厂商</div>
        <div class="designHalf-price-list-select col-md-11">
            <select class="clould-company">
                <option value="">aaaaa</option><option value="">aaaaa</option>
                <option value="">aaaaa</option>
            </select>
        </div>
    </div>
    <div class="designHalf-price-list row">
        <div class="designHalf-price-list-title col-md-1">区域</div>
        <div class="designHalf-price-list-select col-md-11 row">
            <div class="col-md-2"><div class="designHalf-select-box">华北1</div></div>
            <div class="col-md-2"><div class="designHalf-select-box">华北1</div></div>
            <div class="col-md-2"><div class="designHalf-select-box">华北1</div></div>
            <div class="col-md-2"><div class="designHalf-select-box">华北1</div></div>
            <div class="col-md-2"><div class="designHalf-select-box">华北1</div></div>
            <div class="col-md-2"><div class="designHalf-select-box">华北1</div></div>
        </div>
    </div>
    <div class="designHalf-price-list row">
        <div class="designHalf-price-list-title col-md-1">购买方式</div>
        <div class="designHalf-price-list-select col-md-11 row">
            <div class="col-md-2"><div class="designHalf-select-buytype">包年包月</div></div>
            <div class="col-md-2"><div class="designHalf-select-buytype">按量付费</div></div>
            <div class="col-md-2"><div class="designHalf-select-buytype">竞价实例</div></div>
        </div>
    </div>
    <div class="designHalf-price-list row">
        <div class="designHalf-price-list-title col-md-1">购买类型</div>
        <div class="designHalf-price-list-select col-md-11 row">
            <div class="col-md-2"><div class="designHalf-select-buytype">预付费</div></div>
            <div class="col-md-2"><div class="designHalf-select-buytype">后付费</div></div>
        </div>
    </div>
    <div class="designHalf-price-list row">
        <div class="designHalf-price-list-title col-md-1">购买周期</div>
        <div class="designHalf-price-list-select col-md-11 row">
            <div class="designHalf-price-buytime col-md-11">
                <span class="designHalf-buytime-list">1个月</span>
                <span class="designHalf-buytime-list border-left-no">2个月</span>
                <span class="designHalf-buytime-list border-left-no">3个月</span>
                <span class="designHalf-buytime-list border-left-no">半年</span>
                <span class="designHalf-buytime-list border-left-no">1年</span>
                <span class="designHalf-buytime-list border-left-no">2年</span>
                <span class="designHalf-buytime-list border-left-no">3年</span>
                <span class="designHalf-buytime-list border-left-no">4年</span>
                <span class="designHalf-buytime-list border-left-no">5年</span>
            </div>
            <div class="col-md-1">
                <select class="designHalf-buttime-select">
                    <option value="">111111</option>
                </select>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import '../designHalf/designHalf.css';
export default{
    name:'designHalf'
}
</script>