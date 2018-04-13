<template>
<div class="designHalf-price">
    <div class="designHalf-select">
        <div class="designHalf-price-title">
            <span style="color:#da121a;"><i class="iconfont icon-jiagechaxun main-color"></i></span>价格优选
        </div>
        <div class="designHalf-price-tab row">
            <div class="col-md-1"></div>    
            <div class="col-md-11 designHalf-price-box">
                <button class="designHalf-tab-btn" v-on:click="selectClould(0)" :class="style.appointelect!=true?'designHalf-active1':'designHalf-default'" >多云优选</button>
                <button class="designHalf-tab-btn" v-on:click="selectClould(1)" :class="style.appointelect==true?'designHalf-active1':'designHalf-default'" >单云优选</button>
                
                <div class="clear"></div>
            </div>    
        </div>
        <div class="designHalf-price-list row" v-show="appointCloud">
            <div class="designHalf-price-list-title col-md-1">
                <span style="color:#ccc;margin-right:3px;"><i class="iconfont icon-yunduan"></i></span>云厂商
            </div>
            <div class="designHalf-price-list-select col-md-11">
                <select class="clould-company" v-model="selectcompany" v-on:change="selectS()">
                    <option v-for="item in clouldcompany" :value="item.id">{{item.name}}</option>
                </select>
            </div>
        </div>
        <div class="designHalf-price-list row">
            <div class="row">
                <div class="designHalf-price-list-title col-md-1" style="line-height:30px;">
                    <span style="color:#ccc;margin-right:3px;"><i class="iconfont icon-ditu"></i></span>区域
                </div>
                <div class="designHalf-price-list-select col-md-11" style="padding-left:15px !important;">
                    <button class="designHalf-select-buytype" v-for="(item,regionIndex) in region" :class="item.boolean==false?'designHalf-default':'designHalf-active1'" v-on:click="selectRegion(regionIndex)">{{item.data.region}}</button>
                </div>
            </div>
            <div class="row">
                <div class="designHalf-price-list-title col-md-1"></div>
                <div class="designHalf-price-list-select col-md-11" style="padding-left:15px !important;">
                    <button class="designHalf-select-box" v-for="(item,regionIndex) in regiontwo" :class="item.boolean==false?'designHalf-default':'designHalf-active'" v-on:click="selectRegiontwo(regionIndex)">{{item.data.region}}</button>
                </div>
            </div>
            <div class="row">
                <div class="designHalf-price-list-title col-md-1"></div>
                <div class="designHalf-price-list-select col-md-11" style="padding-left:15px !important;">
                    <button class="designHalf-select-box" v-for="(item,regionIndex) in regionthree" :class="item.boolean==false?'designHalf-default':'designHalf-active'" v-on:click="selectRegionthree(regionIndex)">{{item.data.region}}</button>
                </div>
            </div>
        </div>
        <div class="designHalf-price-list row">
            <div class="designHalf-price-list-title col-md-1" style="line-height:30px;">
                <span style="color:#ccc;margin-right:3px;"><i class="iconfont icon-jifei"></i></span>购买方式
            </div>
            <div class="designHalf-price-list-select col-md-11" style="padding-left:15px !important;">
                <button class="designHalf-select-buytype" v-for="(item,index) in buytype" :class="item.boolean==false?'designHalf-default':'designHalf-active1'" v-on:click="buy(index)">{{item.data.name}}</button>
            </div>
        </div>
        <div class="designHalf-price-list row">
            <div class="designHalf-price-list-title col-md-1" style="line-height:30px;">
                <span style="color:#ccc;margin-right:3px;"><i class="iconfont icon-fukuanfangshisel"></i></span>付费类型
            </div>
            <div class="designHalf-price-list-select col-md-11" style="padding-left:15px !important;">
                <button class="designHalf-select-buytype" v-for="(item,index) in paytype" :class="item.boolean==false?'designHalf-default':'designHalf-active1'" v-on:click="payment(index)">{{item.data.name}}</button>
            </div>
        </div>
        <div class="designHalf-price-list row">
            <div class="designHalf-price-list-title col-md-1" style="line-height:30px;">
                <span style="color:#ccc;margin-right:3px;"><i class="iconfont icon-14"></i></span>购买周期
            </div>
            <div class="designHalf-price-list-select col-md-11">
                <div class="designHalf-price-buytime col-md-7" ><!--style="margin-left:0.7%;"-->
                    <button class="designHalf-buytime-list border-left-no" :class="item.boolean==false?'designHalf-default':'designHalf-active1'" v-for="(item,index) in monthlist" v-on:click="monthcycle(index)">{{item.data.name}}</button>
                </div>
                <div class="col-md-1">
                    <select class="designHalf-buttime-select" v-model="month" v-on:change="morecycle()">
                        <option :value="item.month" v-for="item in moremonth">{{item.name}}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="designHalf-price-list row">
            <div class="designHalf-price-list-title col-md-1"></div>
            <div class="designHalf-price-list-select col-md-11">
                <button class="designHalf-look-price" v-on:click="lookPrice()"><i class="iconfont icon-wuliaojiage" style="margin-right:3px;"></i>查看价格</button>
                <!--<span class="go-datadcision">价格对比图可到数据分析中查看</span>-->
            </div>
        </div>
    </div>
    <div class="row" v-show="islookecharts">
        <div class="col-md-6">
            <div id="designHalf-app" style="width:100%;height:300px;"></div>
        </div>
        <div class="col-md-6">
            <div id="designHalf-db" style="width:100%;height:300px;"></div>
        </div>
    </div>
    <div class="designHalf-table" v-show="islook">
        <!-- 应用服务 -->
        <table class="designHalf-table-appServer designHalf-table-public" v-if="priceClould.length>0">
            <thead>
                <tr>
                    <td class="designHalf-w-5" rowspan="2"><input type="checkbox" v-model="allselect" v-on:click="whole()"><br>全选</td>
                    <td class="designHalf-w-5" rowspan="2">云厂商</td>
                    <td class="designHalf-w-7" rowspan="2">产品名称</td>
                    <td class="designHalf-w-6" rowspan="2">角色类型</td>
                    <td class="designHalf-w-6" rowspan="2">配置类型</td>                    
                    <td class="designHalf-w-7" rowspan="2">区域</td>
                    <td class="designHalf-w-20" align="center" valign="middle" colspan="4">购买规格</td>
                    <td class="designHalf-w-5" rowspan="2">数量</td>
                    <td class="designHalf-w-6" rowspan="2">购买周期</td>
                    <td class="designHalf-w-5" style="cursor:pointer;" rowspan="2" v-on:click="sortPrice()">费用参考<i class="iconfont icon-paixu"></i></td>
                    <td class="designHalf-w-6" rowspan="2">京玉折扣价</td>
                    <td class="designHalf-w-16" align="center" valign="middle" colspan="2">评星</td>
                    <td class="designHalf-w-10" rowspan="2">意向购买</td>
                </tr>
                <tr>
                    <td class="designHalf-public-bg designHalf-w-5">CPU</td>
                    <td class="designHalf-public-bg designHalf-w-5">处理器主频</td>
                    <td class="designHalf-public-bg designHalf-w-5">内存</td>
                    <td class="designHalf-public-bg designHalf-w-5">系统盘</td>
                    <td class="designHalf-public-bg designHalf-w-8">选型评星</td>
                    <td class="designHalf-public-bg designHalf-w-8">价格评星</td>
                </tr>                
            </thead>
            <tbody>
                <tr v-for="(item,index) in priceClould">
                    <td style="line-height:0px;"><input type="checkbox" v-model="item.model" v-on:click="radio(index)"></td>
                    <td>{{item.data.sname}}</td>
                    <td>{{item.data.pname}}</td>
                    <td>{{item.data.rtype=='1'?'应用服务':item.data.rtype=='2'?'数据库服务':'--'}}</td>
                    <td>{{item.data.vmtype=='17'?'高配':item.data.vmtype=='18'?'低配':'--'}}</td>
                    <td>{{item.data.region}}</td>
                    <td>{{item.data.cores}}</td>
                    <td><!--{{item.data.ghz}}-->--</td>
                    <td>{{item.data.ram}}</td>
                    <td><!--{{item.data.localDisk}}-->40GB</td>
                    <td>{{item.data.num}}</td>
                    <td>{{item.data.month%12==0?item.data.month/12+'年':item.data.month%12+'个月'}}</td>
                    <td>￥{{item.data.cloudPrice==0?'原厂在线暂不支持':item.data.cloudPrice}}</td>
                    <td>￥{{item.data.csbPrice==0?'线下联系':item.data.csbPrice}}</td>
                    <td><i v-for="(i,index) in 5" class="iconfont icon-xingxing" :class="item.data.serverStar>index?'startd-active':'startd'"></i></td>
                    <td><i v-for="(i,index) in 5" class="iconfont icon-xingxing" :class="item.data.priceStar>index?'startd-active':'startd'"></i></td>
                    <td>
                        <!--<button class="designHalf-buy-btn" v-on:click="gobuy(item.data.id)">
                            <i class="iconfont icon-gouwuche" style="margin-right:3px;"></i>加入购物车
                        </button>-->
                        <span style="color:#f7a72c;" v-on:click="gobuy(item.data.id)"><i class="iconfont icon-gouwuche1" style="margin-right:3px;font-size:20px !important;"></i></span>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 空白 -->
        <div class="design-nodata" v-if="priceClould.length<1">
            <img src="../../../../assets/compare-nodata.png" alt="">
            <br>
            <p>
            当前暂无云厂商匹配数据，请您联系&nbsp;&nbsp;<span style="color:#da121a;">Prof. 吴</span>
            </p>
            <p>
            或拨打我们热线：<span style="color:#da121a;">400-828-7308</span> 获取支持。
            </p>
        </div>
        <!-- 数据库服务 -->
        <!--<table class="designHalf-table-appServer designHalf-table-public">
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
        </table>-->
        <!-- 网络存储 -->
        <!--<table class="designHalf-table-network designHalf-table-public">
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
        </table>-->
        <!-- 存储 -->
        <!--<table class="designHalf-table-network designHalf-table-public">
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
        </table>-->
        <!-- CDN -->
        <!--<table class="designHalf-table-network designHalf-table-public">
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
        </table>-->
        <div class="designHalf-balance row" v-if="priceClould.length>1">
            <div class="col-md-6 balance-left">已选择<span>{{num}}</span>件商品</div>
            <div class="col-md-6 balance-right">
                总价：<span>￥{{Number(sumprice).toFixed(2)}}</span><button class="go-balance" v-on:click="balance()">去结算</button>
            </div>
        </div>
    </div>
    <div class="designHalf-box">
        <button class="designHalfbtn" v-on:click="designnext()">
            <span class="pl-10">下一步</span><i class="iconfont icon-xiayibu" style="margin-left:5px;"></i>
        </button>
        <button class="designHalfprev" v-on:click="designprev()">
            <i class="iconfont icon-shangyibu1" style="margin-right:5px;"></i><span class="pr-5">上一步</span>
        </button>
        <div class="clear"></div>
    </div>
    
</div>
</template>
<script>
import echarts from 'echarts'
import '../designHalf/designHalf.css';
export default{
    name:'designHalf',
    props:["type","id","appG","appD","dbG","dbD"],
    data(){
        return {
            charts:'',
            appointCloud:false,//是否显示云厂商下拉框
            style:{
                appointelect:false
            },
            region:[],
            regiontwo:[],
            regionthree:[],
            buytype:[
                {data:{id:1,name:'包年包月'},boolean:true},
                {data:{id:2,name:'按量付费'},boolean:false},
                {data:{id:3,name:'竞价实例'},boolean:false}
            ],
            paytype:[
                {data:{id:1,name:'预付费'},boolean:true},
                {data:{id:2,name:'后付费'},boolean:false}
            ],
            monthlist:[
                {data:{name:'1个月',month:1},boolean:false},
                {data:{name:'2个月',month:2},boolean:false},
                {data:{name:'3个月',month:3},boolean:false},
                {data:{name:'半年',month:6},boolean:false},
                {data:{name:'1年',month:12},boolean:true},
                {data:{name:'2年',month:24},boolean:false},
                {data:{name:'3年',month:36},boolean:false},
                {data:{name:'4年',month:48},boolean:false},
                {data:{name:'5年',month:60},boolean:false}
            ],
            moremonth:[
                {name:'更多',month:-1},
                {name:'4个月',month:4},
                {name:'5个月',month:5},
                {name:'7个月',month:7},
                {name:'8个月',month:8},
                {name:'9个月',month:9},
                {name:'10个月',month:10},
                {name:'11个月',month:11}
            ],
            clouldcompany:[
                // {id:'11',name:'华为云'},
            ],
            selectcompany:'11',
            month:-1,
            lookobj:{
                appid:'',
                buyType:'1',
                month:'12',
                paymentType:'1',
                regions:[],
                designIds:[],
                serverId:'-1'
            },
            priceClould:[],
            allselect:false,
            appId:'',
            islook:false,
            sumprice:0,
            num:0,
            appEcharts:[],
            dbEcharts:[],
            appX:[],
            dbX:[],
            islookecharts:false,
            issort:'0'
        }
    },
    mounted:function(){
        this.appId = this.id;
        this.lookobj.appid = this.id;
        this.getRegion(-1);
        this.getCloudlist();//云厂商列表
       // console.log('-----',this.appG,this.appD,this.dbG,this.dbD);
    },
    methods:{
        getCloudlist:function(){
            this.$this.get('/broker/price/suppliers/list').then((res)=>{
               // console.log(res.data.data);
                for(let i=0;i<res.data.data.length;i++){                    
                    for(let n in res.data.data[i]){
                        this.clouldcompany.push({id:n,name:res.data.data[i][n]})
                    }
                }
                console.log(this.clouldcompany);
            }).catch((error)=>{})
        },
        sortPrice:function(){
            let list = [],arr=[];
            for(let i=0;i<this.priceClould.length;i++){
                list.push(this.priceClould[i]);
            }
            this.priceClould = [];
            if(this.issort=='1'){
                this.issort = '0';//从小到大
                for(let i=0; i<list.length; i++){ 
                    for(let j=0; j<list.length; j++){ 
                        if(list[i].data.cloudPrice < list[j].data.cloudPrice){ //从小到大
                            arr = list[j]; 
                            list[j] = list[i]; 
                            list[i] = arr; 
                        } 
                    } 
                }
                this.priceClould = list;
            }else if(this.issort=='0'){//从大到小
                this.issort = '1';
                for(let i=0; i<list.length; i++){ 
                    for(let j=0; j<list.length; j++){ 
                        if(list[i].data.cloudPrice > list[j].data.cloudPrice){ //从大到小
                            arr = list[j]; 
                            list[j] = list[i]; 
                            list[i] = arr; 
                        } 
                    } 
                }
                this.priceClould = list;           
            }
            this.dbX = [];
            this.appX = [];
            this.appEcharts = [];
            this.dbEcharts = [];
            let appInd = 0,dbInd = 0;
            for(let i=0;i<this.priceClould.length;i++){
                if(this.priceClould[i].data.rtype==1){//应用服务
                    appInd++;
                    if(appInd<11){
                        this.appX.push(this.priceClould[i].data.sname+'/'+this.priceClould[i].data.pname);
                        this.appEcharts.push(this.priceClould[i].data.cloudPrice);  
                    }                                              
                }else if(this.priceClould[i].data.rtype==2){//数据库服务
                    dbInd++;
                    if(dbInd<11){
                        this.dbX.push(this.priceClould[i].data.sname+'/'+this.priceClould[i].data.pname);
                        this.dbEcharts.push(this.priceClould[i].data.cloudPrice);
                    }
                    
                }
            }
            this.canversBar('designHalf-app',this.appX,this.appEcharts,'云厂商应用规格');
            this.canversBar('designHalf-db',this.dbX,this.dbEcharts,'云厂商数据库规格');
        },
        selectClould:function(id){//0=多云厂商  1=指定云厂商
            if(id==0){
                this.style.appointelect = false;
                this.appointCloud = false;
                this.lookobj.serverId = '-1';
            }else{
                this.style.appointelect = true;
                this.appointCloud = true;
                this.lookobj.serverId = this.selectcompany;
            }
        },
        selectS:function(){
            this.lookobj.serverId = this.selectcompany;
        },
        getRegion:function(id){
            this.$http.get('/broker/price/region/'+id).then((response)=>{
                //console.log('----',response.data.data);
                if(id==-1){
                    for(let i=0;i<response.data.data.length;i++){
                        this.region.push({data:response.data.data[i],boolean:false});
                    }
                    this.region[0].boolean = true;
                    this.getRegion(this.region[0].data.id);
                }else{
                    this.regiontwo = [];
                    for(let i=0;i<response.data.data.length;i++){
                        this.regiontwo.push({data:response.data.data[i],boolean:false});
                    }
                    this.regiontwo[0].boolean = true;
                    this.lookobj.regions.push(this.regiontwo[0].data.code);
                    this.getRegionT(this.regiontwo[0].data.id);
                }                
            }).catch((error)=>{
            })
        },
        getRegionT:function(id){
            this.regionthree = [];
            this.$http.get('/broker/price/region/'+id).then((response)=>{
                //console.log('----',response.data.data);
                for(let i=0;i<response.data.data.length;i++){
                    this.regionthree.push({data:response.data.data[i],boolean:false});
                }         
            }).catch((error)=>{
            })
        },
        selectRegion:function(regionIndex){
            for(let i=0;i<this.region.length;i++){
                this.region[i].boolean = false;
            }
            this.region[regionIndex].boolean = true;
            this.getRegion(this.region[regionIndex].data.id);
            this.regiontwo = [];
            this.regionthree = [];
        },
        selectRegiontwo:function(regionIndex){
            this.lookobj.regions = [];
            let arr = [];
            for(let i=0;i<this.regiontwo.length;i++){
                this.regiontwo[i].boolean = false;
            }
            this.regiontwo[regionIndex].boolean = true;
            this.lookobj.regions.push(this.regiontwo[regionIndex].data.code);
            this.getRegionT(this.regiontwo[regionIndex].data.id);
            //this.lookobj.regions = arr;
        },
        selectRegionthree:function(regionIndex){
            this.lookobj.regions = [];
            for(let i=0;i<this.regionthree.length;i++){
                this.regionthree[i].boolean = false;
            }
            this.regionthree[regionIndex].boolean = true;
            this.lookobj.regions.push(this.regionthree[regionIndex].data.code);
        },
        buy:function(index){
            for(let i=0;i<this.buytype.length;i++){
                this.buytype[i].boolean = false;
            }
            this.buytype[index].boolean = true;
            this.lookobj.buyType = this.buytype[index].data.id;
        },
        payment:function(index){
            for(let i=0;i<this.paytype.length;i++){
                this.paytype[i].boolean = false;
            }
            this.paytype[index].boolean = true;
            this.lookobj.paymentType = this.paytype[index].data.id;
        },
        monthcycle:function(index){
            for(let i=0;i<this.monthlist.length;i++){
                this.monthlist[i].boolean = false;
            }
            this.monthlist[index].boolean = true;
            this.lookobj.month = this.monthlist[index].data.month;
        },
        morecycle:function(){
           for(let i=0;i<this.monthlist.length;i++){
                this.monthlist[i].boolean = false;
            }
            if(this.month!=-1){
                this.lookobj.month = this.month;
            }            
        },
        lookPrice:function(){
            let arr = this.appG.concat(this.appD).concat(this.dbG).concat(this.dbD);
            this.lookobj.designIds = arr;
            this.priceClould = [];
            this.appX = [];
            this.appEcharts = [];
            this.dbX = [];
            this.dbEcharts = [];
            this.islookecharts = true; 
            this.$http.post('/broker/price/cloud/list',JSON.stringify(this.lookobj)).then((response)=>{
                // console.log('----',response);   
                let appInd=0,dbInd=0;
                for(let i=0;i<response.data.data.length;i++){
                    this.priceClould.push({data:response.data.data[i],model:false});
                    if(response.data.data[i].rtype==1){//应用服务
                        appInd++;
                        if(appInd<11){
                            this.appX.push(response.data.data[i].sname+'/'+response.data.data[i].pname);
                            this.appEcharts.push(response.data.data[i].cloudPrice);  
                        }                                              
                    }else if(response.data.data[i].rtype==2){//数据库服务
                        dbInd++;
                        if(dbInd<11){
                            this.dbX.push(response.data.data[i].sname+'/'+response.data.data[i].pname);
                            this.dbEcharts.push(response.data.data[i].cloudPrice);
                        }
                        
                    }
                } 
                this.islook = true;
                this.canversBar('designHalf-app',this.appX,this.appEcharts,'云厂商应用规格');
                this.canversBar('designHalf-db',this.dbX,this.dbEcharts,'云厂商数据库规格');
                if(this.priceClould.length==0){
                    this.islookecharts = false; 
                }      
            }).catch((error)=>{
            })
        },
        radio:function(index){
            let n = 0;
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            for(let i=0;i<this.priceClould.length;i++){
                if(this.priceClould[i].model==true){
                    n++;
                    //this.sumprice = this.sumprice+this.priceClould[i].data.cloudPrice;
                }
            }
            if(n>0){
                this.allselect = false;
            }
            if(userAgent.indexOf("Opera") > -1||userAgent.indexOf("Firefox") > -1||userAgent.indexOf("Safari") > -1||userAgent.indexOf("Chrome") > -1){
                if(userAgent.indexOf("Edge") > -1){
                    if(this.priceClould[index].model==true){
                        this.num++;
                    }else{
                        this.num--;
                    }
                    this.sumprice = 0;
                    for(let i=0;i<this.priceClould.length;i++){
                        if(this.priceClould[i].model==true){
                            this.sumprice =this.sumprice + this.priceClould[i].data.cloudPrice;
                        }                        
                    }
                }else{
                    if(this.priceClould[index].model==false){
                        this.num++;
                        //this.sumprice = Number(this.sumprice).toFixed(2);
                        this.sumprice = this.sumprice+this.priceClould[index].data.cloudPrice;
                    }else{
                        this.num--;
                        this.sumprice = this.sumprice-this.priceClould[index].data.cloudPrice;
                    }
                }
                
            }else{
                if(this.priceClould[index].model==true){
                    this.num++;
                    //this.sumprice = Number(this.sumprice).toFixed(2);
                    this.sumprice = this.sumprice+this.priceClould[index].data.cloudPrice;
                }else{
                    this.num--;
                    this.sumprice = this.sumprice-this.priceClould[index].data.cloudPrice;
                }
            }
        },
        whole:function(){
            //this.sumprice = 0;
            console.log('aaaa',this.allselect);
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            if(userAgent.indexOf("Opera") > -1||userAgent.indexOf("Firefox") > -1||userAgent.indexOf("Safari") > -1||userAgent.indexOf("Chrome") > -1){
                if(userAgent.indexOf("Edge") > -1){
                    if(this.allselect==true){
                        this.sumprice = 0;
                        for(let i=0;i<this.priceClould.length;i++){
                            this.priceClould[i].model = true;
                            this.sumprice =this.sumprice+this.priceClould[i].data.cloudPrice;
                        }
                        this.num = this.priceClould.length;
                    }else{
                        for(let i=0;i<this.priceClould.length;i++){
                            this.priceClould[i].model = false;
                            this.sumprice =this.sumprice-this.priceClould[i].data.cloudPrice;
                        }
                        this.num = 0;
                    }

                }else{
                    if(this.allselect==false){
                        this.sumprice = 0;
                        for(let i=0;i<this.priceClould.length;i++){
                            this.priceClould[i].model = true;
                            this.sumprice =this.sumprice+this.priceClould[i].data.cloudPrice;
                        }
                        this.num = this.priceClould.length;
                    }else{
                        for(let i=0;i<this.priceClould.length;i++){
                            this.priceClould[i].model = false;
                            this.sumprice =this.sumprice-this.priceClould[i].data.cloudPrice;
                        }
                        this.num = 0;
                    }
                }
                

            }else if(userAgent.indexOf("Chrome") > -1&&userAgent.indexOf("Edge") > -1){
                if(this.allselect==true){
                    this.sumprice = 0;
                    for(let i=0;i<this.priceClould.length;i++){
                        this.priceClould[i].model = true;
                        this.sumprice =this.sumprice+this.priceClould[i].data.cloudPrice;
                    }
                    this.num = this.priceClould.length;
                }else{
                    for(let i=0;i<this.priceClould.length;i++){
                        this.priceClould[i].model = false;
                        this.sumprice =this.sumprice-this.priceClould[i].data.cloudPrice;
                    }
                    this.num = 0;
                }

            }
            
            
        },
        gobuy:function(id){
            let arr = [id];
            this.$router.push({path:'/designOrder',query:{id:this.appId,listid:arr,type:this.type}});
        },
        balance:function(){
            let arr = [];
            for(let i=0;i<this.priceClould.length;i++){
                if(this.priceClould[i].model==true){
                    arr.push(this.priceClould[i].data.id);
                }
            }
            if(arr.length<1){
                this.$alert('您当前还未添加任何商品，请添加', '温馨提示', {
                    confirmButtonText: '我知道了',
                    showClose:false,
                    type: 'warning',
                    confirmButtonClass:'lay-btn-red'
                });
            }else{
                this.$router.push({path:'/designOrder',query:{id:this.appId,listid:arr,type:this.type}});
            }
            
        },
        designnext:function(){
            this.$router.push({path:'/colligateReport',query:{id:this.appId,type:this.type}});
        },
        designprev:function(){
            this.$router.push({path:'/compareResult',query:{id:this.appId,listid:arr,type:this.type}});
        },
        canversBar:function(dom,xdata,datalist,text){
            let that = this;
            this.charts = echarts.init(document.getElementById(dom));
            this.charts.setOption({              
                tooltip:{
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    },
                },
                legend: {
                    data: [text],
                    x:'77%',
                    //right:'10px',
                    y:'10px'
                },
                xAxis: [{
                    name:'云厂商',
                    type:'category',
                    data: xdata,
                    axisPointer:{
                        type:'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#c2c2c2'
                        }
                    },
                    nameTextStyle:{
                        color:'#333'
                    },
                    nameLocation:'end',
                    axisLabel: {  
                        interval:0,  
                        rotate:30  
                    } 
                }],
                yAxis: [{
                    type:'value',
                    name:'价格',
                    axisLabel: {
                        formatter: '{value}'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#c2c2c2'
                        }
                    },
                    nameTextStyle:{
                        color:'#333'
                    },
                }],
                series: [
                    {
                        name:text,
                        type:'bar',
                        data:datalist,
                        itemStyle:{
                            normal:{
                                color:'#f7a72c'
                            }
                        },
                        barWidth : 15,//柱图宽度
                    }
                ]
            })
        }
    }
}
</script>