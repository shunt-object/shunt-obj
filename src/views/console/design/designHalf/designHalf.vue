<template>
<div class="designHalf-price">
    <div class="designHalf-select">
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
                <div class="col-md-2"><button class="designHalf-select-box">华北1</button></div>
                <div class="col-md-2"><button class="designHalf-select-box">华北1</button></div>
                <div class="col-md-2"><button class="designHalf-select-box">华北1</button></div>
                <div class="col-md-2"><button class="designHalf-select-box">华北1</button></div>
                <div class="col-md-2"><button class="designHalf-select-box">华北1</button></div>
                <div class="col-md-2"><button class="designHalf-select-box">华北1</button></div>
            </div>
        </div>
        <div class="designHalf-price-list row">
            <div class="designHalf-price-list-title col-md-1">购买方式</div>
            <div class="designHalf-price-list-select col-md-11 row">
                <div class="col-md-2"><button class="designHalf-select-buytype">包年包月</button></div>
                <div class="col-md-2"><button class="designHalf-select-buytype">按量付费</button></div>
                <div class="col-md-2"><button class="designHalf-select-buytype">竞价实例</button></div>
            </div>
        </div>
        <div class="designHalf-price-list row">
            <div class="designHalf-price-list-title col-md-1">购买类型</div>
            <div class="designHalf-price-list-select col-md-11 row">
                <div class="col-md-2"><button class="designHalf-select-buytype">预付费</button></div>
                <div class="col-md-2"><button class="designHalf-select-buytype">后付费</button></div>
            </div>
        </div>
        <div class="designHalf-price-list row">
            <div class="designHalf-price-list-title col-md-1">购买周期</div>
            <div class="designHalf-price-list-select col-md-11 row">
                <div class="designHalf-price-buytime col-md-11">
                    <button class="designHalf-buytime-list">1个月</button>
                    <button class="designHalf-buytime-list border-left-no">2个月</button>
                    <button class="designHalf-buytime-list border-left-no">3个月</button>
                    <button class="designHalf-buytime-list border-left-no">半年</button>
                    <button class="designHalf-buytime-list border-left-no">1年</button>
                    <button class="designHalf-buytime-list border-left-no">2年</button>
                    <button class="designHalf-buytime-list border-left-no">3年</button>
                    <button class="designHalf-buytime-list border-left-no">4年</button>
                    <button class="designHalf-buytime-list border-left-no">5年</button>
                </div>
                <div class="col-md-1">
                    <select class="designHalf-buttime-select">
                        <option value="">111111</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="designHalf-price-list row">
            <div class="designHalf-price-list-title col-md-1"></div>
            <div class="designHalf-price-list-select col-md-11">
                <button class="designHalf-look-price">查看价格</button>
                <span class="go-datadcision">价格对比图可到<router-link style="color:#da121a;"to="/dataDcision">数据分析</router-link>中查看</span>
            </div>
        </div>
    </div>
    <div class="designHalf-table">
        <!-- 应用服务 -->
        <table class="designHalf-table-appServer designHalf-table-public">
            <thead>
                <tr>
                    <td rowspan="2"><span class="cm-checkbox"><label></label><input type="checkbox"></span><br>全选</td>
                    <td rowspan="2">云厂商</td>
                    <td rowspan="2">产品名称</td>
                    <td rowspan="2">角色类型</td>
                    <td rowspan="2">购买方式</td>
                    <td rowspan="2">区域</td>
                    <td align="center" valign="middle" colspan="6">购买规格</td>
                    <td rowspan="2">数量</td>
                    <td rowspan="2">费用参考</td>
                    <td rowspan="2">意向购买</td>
                </tr>
                <tr>
                    <td class="designHalf-public-bg">CPU</td>
                    <td class="designHalf-public-bg">处理器主频</td>
                    <td class="designHalf-public-bg">内存</td>
                    <td class="designHalf-public-bg">系统盘</td>
                    <td class="designHalf-public-bg">操作系统</td>
                    <td class="designHalf-public-bg">资源平均利用率</td>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td style="line-height:0px;"><span class="cm-checkbox"><label></label><input type="checkbox"></span></td>
                    <td>云厂商</td>
                    <td>产品名称</td>
                    <td>角色类型</td>
                    <td>购买方式</td>
                    <td>区域</td>
                    <td>aaaaaaaaaaaaaaaaaaaaaaaaa</td>
                    <td>bbbbb</td>
                    <td>cccccc</td>
                    <td>fffff</td>
                    <td>cccccc</td>
                    <td>fffff</td>
                    <td>数量</td>
                    <td>费用参考</td>
                    <td>意向购买</td>
                </tr>
            </tbody>
        </table>
        <!-- 数据库服务 -->
        <table class="designHalf-table-dbServer designHalf-table-public">
            <thead>
                <tr>
                    <td rowspan="2"><span class="cm-checkbox"><label></label><input type="checkbox"></span><br>全选</td>
                    <td rowspan="2">云厂商</td>
                    <td rowspan="2">产品名称</td>
                    <td rowspan="2">角色类型</td>
                    <td rowspan="2">购买方式</td>
                    <td rowspan="2">区域</td>
                    <td align="center" valign="middle" colspan="6">购买规格</td>
                    <td rowspan="2">数量</td>
                    <td rowspan="2">费用参考</td>
                    <td rowspan="2">意向购买</td>
                </tr>
                <tr>
                    <td class="designHalf-public-bg">CPU</td>
                    <td class="designHalf-public-bg">处理器主频</td>
                    <td class="designHalf-public-bg">内存</td>
                    <td class="designHalf-public-bg">系统盘</td>
                    <td class="designHalf-public-bg">操作系统</td>
                    <td class="designHalf-public-bg">资源平均利用率</td>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td style="line-height:0px;"><span class="cm-checkbox"><label></label><input type="checkbox"></span></td>
                    <td>云厂商</td>
                    <td>产品名称</td>
                    <td>角色类型</td>
                    <td>购买方式</td>
                    <td>区域</td>
                    <td>aaaaaaaaaaaaaaaaaaaaaaaaa</td>
                    <td>bbbbb</td>
                    <td>cccccc</td>
                    <td>fffff</td>
                    <td>cccccc</td>
                    <td>fffff</td>
                    <td>数量</td>
                    <td>费用参考</td>
                    <td>意向购买</td>
                </tr>
            </tbody>
        </table>
        <!-- 网络存储 -->
        <table class="designHalf-table-network designHalf-table-public">
            <thead>
                <tr>
                    <td rowspan="2"><span class="cm-checkbox"><label></label><input type="checkbox"></span><br>全选</td>
                    <td rowspan="2">云厂商</td>
                    <td rowspan="2">产品名称</td>
                    <td rowspan="2">角色类型</td>
                    <td rowspan="2">购买方式</td>
                    <td rowspan="2">区域</td>
                    <td align="center" valign="middle" colspan="3">购买规格</td>
                    <td rowspan="2">数量</td>
                    <td rowspan="2">费用参考</td>
                    <td rowspan="2">意向购买</td>
                </tr>
                <tr>
                    <td class="designHalf-public-bg">总量</td>
                    <td class="designHalf-public-bg">入站</td>
                    <td class="designHalf-public-bg">出站</td>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td style="line-height:0px;"><span class="cm-checkbox"><label></label><input type="checkbox"></span></td>
                    <td>云厂商</td>
                    <td>产品名称</td>
                    <td>角色类型</td>
                    <td>购买方式</td>
                    <td>区域</td>
                    <td>fffff</td>
                    <td>cccccc</td>
                    <td>fffff</td>
                    <td>数量</td>
                    <td>费用参考</td>
                    <td>意向购买</td>
                </tr>
            </tbody>
        </table>
        <!-- 存储 -->
        <table class="designHalf-table-storage designHalf-table-public">
            <thead>
                <tr>
                    <td rowspan="2"><span class="cm-checkbox"><label></label><input type="checkbox"></span><br>全选</td>
                    <td rowspan="2">云厂商</td>
                    <td rowspan="2">产品名称</td>
                    <td rowspan="2">角色类型</td>
                    <td rowspan="2">购买方式</td>
                    <td rowspan="2">区域</td>
                    <td align="center" valign="middle" colspan="3">购买规格</td>
                    <td rowspan="2">数量</td>
                    <td rowspan="2">费用参考</td>
                    <td rowspan="2">意向购买</td>
                </tr>
                <tr>
                    <td class="designHalf-public-bg">共享存储</td>
                    <td class="designHalf-public-bg">网络存储</td>
                    <td class="designHalf-public-bg">云存储</td>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td style="line-height:0px;"><span class="cm-checkbox"><label></label><input type="checkbox"></span></td>
                    <td>云厂商</td>
                    <td>产品名称</td>
                    <td>角色类型</td>
                    <td>购买方式</td>
                    <td>区域</td>
                    <td>fffff</td>
                    <td>cccccc</td>
                    <td>fffff</td>
                    <td>数量</td>
                    <td>费用参考</td>
                    <td>意向购买</td>
                </tr>
            </tbody>
        </table>
        <!-- CDN -->
        <table class="designHalf-table-CDN designHalf-table-public">
            <thead>
                <tr>
                    <td rowspan="2"><span class="cm-checkbox"><label></label><input type="checkbox"></span><br>全选</td>
                    <td rowspan="2">云厂商</td>
                    <td rowspan="2">产品名称</td>
                    <td rowspan="2">角色类型</td>
                    <td rowspan="2">购买方式</td>
                    <td rowspan="2">区域</td>
                    <td align="center" valign="middle" colspan="3">购买规格</td>
                    <td rowspan="2">数量</td>
                    <td rowspan="2">费用参考</td>
                    <td rowspan="2">意向购买</td>
                </tr>
                <tr>
                    <td class="designHalf-public-bg">流量</td>
                    <td class="designHalf-public-bg">云厂商</td>
                    <td class="designHalf-public-bg">购买岂止时间</td>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td style="line-height:0px;"><span class="cm-checkbox"><label></label><input type="checkbox"></span></td>
                    <td>云厂商</td>
                    <td>产品名称</td>
                    <td>角色类型</td>
                    <td>购买方式</td>
                    <td>区域</td>
                    <td>fffff</td>
                    <td>cccccc</td>
                    <td>fffff</td>
                    <td>数量</td>
                    <td>费用参考</td>
                    <td>意向购买</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
import '../designHalf/designHalf.css';
export default{
    name:'designHalf'
}
</script>