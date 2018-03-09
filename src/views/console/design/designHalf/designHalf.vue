<template>
<div class="designHalf-price">
    <div class="designHalf-select">
        <div class="designHalf-price-title">价格优选</div>
        <div class="designHalf-price-tab">
            <button class="designHalf-tab-btn designHalf-default">多云厂商对比</button>
            <button class="designHalf-tab-btn designHalf-default">指定云厂商</button>
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
                <div class="col-md-2"><button class="designHalf-select-box designHalf-default">华北1</button></div>
                <div class="col-md-2"><button class="designHalf-select-box designHalf-default">华北1</button></div>
                <div class="col-md-2"><button class="designHalf-select-box designHalf-default">华北1</button></div>
                <div class="col-md-2"><button class="designHalf-select-box designHalf-default">华北1</button></div>
                <div class="col-md-2"><button class="designHalf-select-box designHalf-default">华北1</button></div>
                <div class="col-md-2"><button class="designHalf-select-box designHalf-default">华北1</button></div>
            </div>
        </div>
        <div class="designHalf-price-list row">
            <div class="designHalf-price-list-title col-md-1">购买方式</div>
            <div class="designHalf-price-list-select col-md-11 row">
                <div class="col-md-2"><button class="designHalf-select-buytype designHalf-default">包年包月</button></div>
                <div class="col-md-2"><button class="designHalf-select-buytype designHalf-default">按量付费</button></div>
                <div class="col-md-2"><button class="designHalf-select-buytype designHalf-default">竞价实例</button></div>
            </div>
        </div>
        <div class="designHalf-price-list row">
            <div class="designHalf-price-list-title col-md-1">购买类型</div>
            <div class="designHalf-price-list-select col-md-11 row">
                <div class="col-md-2"><button class="designHalf-select-buytype designHalf-default">预付费</button></div>
                <div class="col-md-2"><button class="designHalf-select-buytype designHalf-default">后付费</button></div>
            </div>
        </div>
        <div class="designHalf-price-list row">
            <div class="designHalf-price-list-title col-md-1">购买周期</div>
            <div class="designHalf-price-list-select col-md-11 row">
                <div class="designHalf-price-buytime col-md-11">
                    <button class="designHalf-buytime-list designHalf-default">1个月</button>
                    <button class="designHalf-buytime-list border-left-no designHalf-default">2个月</button>
                    <button class="designHalf-buytime-list border-left-no designHalf-default">3个月</button>
                    <button class="designHalf-buytime-list border-left-no designHalf-default">半年</button>
                    <button class="designHalf-buytime-list border-left-no designHalf-default">1年</button>
                    <button class="designHalf-buytime-list border-left-no designHalf-default">2年</button>
                    <button class="designHalf-buytime-list border-left-no designHalf-default">3年</button>
                    <button class="designHalf-buytime-list border-left-no designHalf-default">4年</button>
                    <button class="designHalf-buytime-list border-left-no designHalf-default">5年</button>
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
        <table class="designHalf-table-appServer designHalf-table-public" id="example">
            <thead>
                <tr>
                    <td class="designHalf-w-5" rowspan="2"><input type="checkbox"><br>全选</td>
                    <td class="designHalf-w-8" rowspan="2">云厂商</td>
                    <td class="designHalf-w-8" rowspan="2">产品名称</td>
                    <td class="designHalf-w-8" rowspan="2">角色类型</td>
                    <td class="designHalf-w-8" rowspan="2">购买方式</td>
                    <td class="designHalf-w-8" rowspan="2">区域</td>
                    <td class="designHalf-w-31" align="center" valign="middle" colspan="6">购买规格</td>
                    <td class="designHalf-w-8" rowspan="2">数量</td>
                    <td class="designHalf-w-8" rowspan="2">费用参考</td>
                    <td class="designHalf-w-8" rowspan="2">意向购买</td>
                </tr>
                <tr>
                    <td class="designHalf-public-bg designHalf-w-5">CPU</td>
                    <td class="designHalf-public-bg designHalf-w-5">处理器主频</td>
                    <td class="designHalf-public-bg designHalf-w-5">内存</td>
                    <td class="designHalf-public-bg designHalf-w-5">系统盘</td>
                    <td class="designHalf-public-bg designHalf-w-5">操作系统</td>
                    <td class="designHalf-public-bg designHalf-w-5">资源平均利用率</td>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td class="designHalf-w-5" style="line-height:0px;"><input type="checkbox"></td>
                    <td class="designHalf-w-8">云厂商</td>
                    <td class="designHalf-w-8">产品名称</td>
                    <td class="designHalf-w-8">角色类型</td>
                    <td class="designHalf-w-8">购买方式</td>
                    <td class="designHalf-w-8">区域</td>
                    <td class="designHalf-w-5">购买方式购买方式购买方式</td>
                    <td class="designHalf-w-5">bbbbb</td>
                    <td class="designHalf-w-5">cccccc</td>
                    <td class="designHalf-w-5">fffff</td>
                    <td class="designHalf-w-5">cccccc</td>
                    <td class="designHalf-w-5">fffff</td>
                    <td class="designHalf-w-8">数量</td>
                    <td class="designHalf-w-8">费用参考</td>
                    <td class="designHalf-w-8">
                        <button class="designHalf-buy-btn">购买</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 数据库服务 -->
        <table class="designHalf-table-appServer designHalf-table-public">
            <thead>
                <tr>
                    <td class="designHalf-w-5" rowspan="2"><input type="checkbox"><br>全选</td>
                    <td class="designHalf-w-8" rowspan="2">云厂商</td>
                    <td class="designHalf-w-8" rowspan="2">产品名称</td>
                    <td class="designHalf-w-8" rowspan="2">角色类型</td>
                    <td class="designHalf-w-8" rowspan="2">购买方式</td>
                    <td class="designHalf-w-8" rowspan="2">区域</td>
                    <td class="designHalf-w-31" align="center" valign="middle" colspan="6">购买规格</td>
                    <td class="designHalf-w-8" rowspan="2">数量</td>
                    <td class="designHalf-w-8" rowspan="2">费用参考</td>
                    <td class="designHalf-w-8" rowspan="2">意向购买</td>
                </tr>
                <tr>
                    <td class="designHalf-public-bg designHalf-w-5">CPU</td>
                    <td class="designHalf-public-bg designHalf-w-5">处理器主频</td>
                    <td class="designHalf-public-bg designHalf-w-5">内存</td>
                    <td class="designHalf-public-bg designHalf-w-5">系统盘</td>
                    <td class="designHalf-public-bg designHalf-w-5">操作系统</td>
                    <td class="designHalf-public-bg designHalf-w-5">资源平均利用率</td>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td class="designHalf-w-5" style="line-height:0px;"><input type="checkbox"></td>
                    <td class="designHalf-w-8">云厂商</td>
                    <td class="designHalf-w-8">产品名称</td>
                    <td class="designHalf-w-8">角色类型</td>
                    <td class="designHalf-w-8">购买方式</td>
                    <td class="designHalf-w-8">区域</td>
                    <td class="designHalf-w-5">购买方式购买方式购买方式</td>
                    <td class="designHalf-w-5">bbbbb</td>
                    <td class="designHalf-w-5">cccccc</td>
                    <td class="designHalf-w-5">fffff</td>
                    <td class="designHalf-w-5">cccccc</td>
                    <td class="designHalf-w-5">fffff</td>
                    <td class="designHalf-w-8">数量</td>
                    <td class="designHalf-w-8">费用参考</td>
                    <td class="designHalf-w-8">
                        <button class="designHalf-buy-btn">购买</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 网络存储 -->
        <table class="designHalf-table-network designHalf-table-public">
            <thead>
                <tr>
                    <td class="designHalf-w-5" rowspan="2"><input type="checkbox"><br>全选</td>
                    <td class="designHalf-w-8" rowspan="2">云厂商</td>
                    <td class="designHalf-w-8" rowspan="2">产品名称</td>
                    <td class="designHalf-w-8" rowspan="2">角色类型</td>
                    <td class="designHalf-w-8" rowspan="2">购买方式</td>
                    <td class="designHalf-w-8" rowspan="2">区域</td>
                    <td class="designHalf-w-31" align="center" valign="middle" colspan="3">购买规格</td>
                    <td class="designHalf-w-8" rowspan="2">数量</td>
                    <td class="designHalf-w-8" rowspan="2">费用参考</td>
                    <td class="designHalf-w-8" rowspan="2">意向购买</td>
                </tr>
                <tr>
                    <td class="designHalf-public-bg designHalf-w-10">总量</td>
                    <td class="designHalf-public-bg designHalf-w-10">入站</td>
                    <td class="designHalf-public-bg designHalf-w-10">出站</td>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td class="designHalf-w-5" style="line-height:0px;"><input type="checkbox"></td>
                    <td class="designHalf-w-8">云厂商</td>
                    <td class="designHalf-w-8">产品名称</td>
                    <td class="designHalf-w-8">角色类型</td>
                    <td class="designHalf-w-8">购买方式</td>
                    <td class="designHalf-w-8">区域</td>
                    <td class="designHalf-w-10">d角色类型角色类型角色类型角色类型角色类型</td>
                    <td class="designHalf-w-10">cccccc</td>
                    <td class="designHalf-w-10">fffff</td>
                    <td class="designHalf-w-8">数量</td>
                    <td class="designHalf-w-8">费用参考</td>
                    <td class="designHalf-w-8">
                        <button class="designHalf-buy-btn">购买</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 存储 -->
        <table class="designHalf-table-network designHalf-table-public">
            <thead>
                <tr>
                    <td class="designHalf-w-5" rowspan="2"><input type="checkbox"><br>全选</td>
                    <td class="designHalf-w-8" rowspan="2">云厂商</td>
                    <td class="designHalf-w-8" rowspan="2">产品名称</td>
                    <td class="designHalf-w-8" rowspan="2">角色类型</td>
                    <td class="designHalf-w-8" rowspan="2">购买方式</td>
                    <td class="designHalf-w-8" rowspan="2">区域</td>
                    <td class="designHalf-w-31" align="center" valign="middle" colspan="3">购买规格</td>
                    <td class="designHalf-w-8" rowspan="2">数量</td>
                    <td class="designHalf-w-8" rowspan="2">费用参考</td>
                    <td class="designHalf-w-8" rowspan="2">意向购买</td>
                </tr>
                <tr>
                    <td class="designHalf-public-bg designHalf-w-10">共享存储</td>
                    <td class="designHalf-public-bg designHalf-w-10">网络存储</td>
                    <td class="designHalf-public-bg designHalf-w-10">云存储</td>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td class="designHalf-w-5" style="line-height:0px;"><input type="checkbox"></td>
                    <td class="designHalf-w-8">云厂商</td>
                    <td class="designHalf-w-8">产品名称</td>
                    <td class="designHalf-w-8">角色类型</td>
                    <td class="designHalf-w-8">购买方式</td>
                    <td class="designHalf-w-8">区域</td>
                    <td class="designHalf-w-10">d角色类型角色类型角色类型角色类型角色类型</td>
                    <td class="designHalf-w-10">cccccc</td>
                    <td class="designHalf-w-10">fffff</td>
                    <td class="designHalf-w-8">数量</td>
                    <td class="designHalf-w-8">费用参考</td>
                    <td class="designHalf-w-8">
                        <button class="designHalf-buy-btn">购买</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- CDN -->
        <table class="designHalf-table-network designHalf-table-public">
            <thead>
                <tr>
                    <td class="designHalf-w-5" rowspan="2"><input type="checkbox"><br>全选</td>
                    <td class="designHalf-w-8" rowspan="2">云厂商</td>
                    <td class="designHalf-w-8" rowspan="2">产品名称</td>
                    <td class="designHalf-w-8" rowspan="2">角色类型</td>
                    <td class="designHalf-w-8" rowspan="2">购买方式</td>
                    <td class="designHalf-w-8" rowspan="2">区域</td>
                    <td class="designHalf-w-31" align="center" valign="middle" colspan="3">购买规格</td>
                    <td class="designHalf-w-8" rowspan="2">数量</td>
                    <td class="designHalf-w-8" rowspan="2">费用参考</td>
                    <td class="designHalf-w-8" rowspan="2">意向购买</td>
                </tr>
                <tr>
                    <td class="designHalf-public-bg designHalf-w-10">流量</td>
                    <td class="designHalf-public-bg designHalf-w-10">云厂商</td>
                    <td class="designHalf-public-bg designHalf-w-10">购买起止时间</td>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td class="designHalf-w-5" style="line-height:0px;"><input type="checkbox"></td>
                    <td class="designHalf-w-8">云厂商</td>
                    <td class="designHalf-w-8">产品名称</td>
                    <td class="designHalf-w-8">角色类型</td>
                    <td class="designHalf-w-8">购买方式</td>
                    <td class="designHalf-w-8">区域</td>
                    <td class="designHalf-w-10">d角色类型角色类型角色类型角色类型角色类型</td>
                    <td class="designHalf-w-10">cccccc</td>
                    <td class="designHalf-w-10">fffff</td>
                    <td class="designHalf-w-8">数量</td>
                    <td class="designHalf-w-8">费用参考</td>
                    <td class="designHalf-w-8">
                        <button class="designHalf-buy-btn">购买</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
import '../designHalf/designHalf.css';
export default{
    name:'designHalf',
    mounted:function(){
        this.$http.get('/broker/price/region/-1').then((response)=>{
            console.log('----',response);
        }).catch((error)=>{
        })
    }
}
</script>