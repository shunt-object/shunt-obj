<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><router-link class="zong" to="/designer"> 云设计</router-link>
    ><p class="comback">购物详情</p>
</div>
<div class="designOrder-box" style="padding-top:30px;">
    <div class="designOrder-echarts-box">
        <div class="designOrder-echarts-title row">
            <div class="col-md-6">意向订单云厂商占比分析</div>
            <div class="col-md-6">
                <select class="designOrder-echarts-select" v-model="year">
                    <option v-for="item in yearList" :value="item">{{item}}</option>
                </select>
                <select class="designOrder-echarts-select" v-model="area" v-on:change="orderChange()">
                    <option v-for="item in areaList" :value="item.id">{{item.name}}</option>
                </select>
                <select class="designOrder-echarts-select" v-model="industry" v-on:change="orderChange()">
                    <option v-for="item in industryList" :value="item.id">{{item.name}}</option>
                </select>
            </div>
        </div>
        <div class="designOrder-echarts row">
            <div class="col-md-6">
                <div class="designOrder-pie" id="designOrder-pie" style="width:100%;height:360px;"></div>
            </div>
            <div class="col-md-6">
                <div class="designOrder-bar" id="designOrder-bar" style="width:100%;height:360px;"></div>
            </div>
        </div>
    </div>
    <div class="designOrder-title"><span>全部商品&nbsp;&nbsp;{{orderlist.length}}</span></div>
    <div class="designOrder-list" v-for="(item,index) in orderlist">
        <div class="designOrder-list-head">
            <p class="designOrder-list-name">
                <input type="checkbox" v-model="item.model" v-on:click="select(index)">{{item.data.rtype=='1'?'应用服务':item.data.rtype=='2'?'数据库服务':''}}
            </p>
            <p class="designOrder-list-del" v-on:click="del(item.data.id)"><i class="iconfont icon-shanchu main-color"></i>删除订单</p>
        </div>
        <table class="designOrder-list-table">
            <thead>
                <tr>
                    <td rowspan="2">云厂商</td>
                    <td rowspan="2">产品名称</td>
                    <td rowspan="2">角色类型</td>
                    <td rowspan="2">配置类型</td>
                    <td rowspan="2">购买方式</td>
                    <td rowspan="2">区域</td>
                    <td colspan="4">购买规格</td>
                    <td rowspan="2">数量</td>
                    <td rowspan="2">购买周期</td>
                    <td rowspan="2">付费类型</td>
                </tr>
                <tr>
                    <td class="designOrder-td-bg">CPU</td>
                    <td class="designOrder-td-bg">处理器主频</td>
                    <td class="designOrder-td-bg">内存</td>
                    <td class="designOrder-td-bg">系统盘</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{item.data.sname}}</td>
                    <td>{{item.data.pname}}</td>
                    <td>{{item.data.rtype=='1'?'应用服务':item.data.rtype=='2'?'数据库服务':'--'}}</td>
                    <td>{{item.data.vmtype=='17'?'高配':item.data.vmtype=='18'?'低配':'--'}}</td>
                    <td>{{item.data.buyType=='1'?'包年包月':item.data.buyType=='2'?'按量付费':'竞价实例'}}</td>
                    <td>{{item.data.region}}</td>
                    <td>{{item.data.cores}}</td>
                    <td><!--{{item.data.ghz}}-->--</td>
                    <td>{{item.data.ram}}</td>
                    <td><!--{{item.data.localDisk}}-->40GB</td>
                    <td>{{item.data.num}}</td>
                    <td>{{item.data.month%12==0?item.data.month/12+'年':item.data.month%12+'个月'}}</td>
                    <td>{{item.data.paymentType=='1'?'预付费':item.data.paymentType=='2'?'后付费':'--'}}</td>
                </tr>
            </tbody>
        </table>
        <div class="designOrder-list-price">
            价格：<span class="designOrder-list-price-color">￥{{item.data.cloudPrice}}</span>
        </div>
    </div>
</div>
<div class="designOrder-fixed">
    <div class="designOrder-sum-price">
        价格：<span class="designOrder-list-price-color">￥{{Number(sumprice).toFixed(2)}}</span><span class="price-desc">线下咨询购买 您放心的选择</span>
        <button class="designOrder-pay-btn" v-on:click="pay()">支付</button>
    </div>
</div>
</div>
</template>
<script>
import '../orderlist/orderlist.css';
import echarts from 'echarts'
export default{
    name:'orderlist',
    data(){
        return {
            charts:'',
            appId:'',
            param:[],
            orderlist:[],
            sumprice:0,
            areaList:[{id:'1',name:'所在区域'},{id:'2',name:'全部区域'}],
            industryList:[{id:'1',name:'所在行业'},{id:'2',name:'全部行业'}],
            yearList:['2018'],
            year:'2018',
            area:'1',
            industry:'1',
            obj:{},
            pielist:[],
            pielegened:[],
            piereslist:[],
            barlist:[],
            barlegened:[]
            //contact:false
        }
    },
    mounted:function(){
        this.appId = this.$route.query.id;
        this.param = this.$route.query.listid;
        this.getdata();
        this.information = JSON.parse(sessionStorage.getItem("account"));
        this.obj = {
            "areaid": this.information.areaid,
            "industry":this.information.industry,
            "provinceid":this.information.provinceid,
            "cityid":this.information.cityid,
            "year": this.year
        };
        this.getPiedata(this.obj);
    },
    methods:{
        orderChange:function(){
            //1所选  2全部
            let sheng = '-1',shi = '-1',qu = '-1';
            if(this.industry=='2'){
                this.obj.industry = '-1';
            }else{
                this.obj.industry = this.information.industry;
            }
            if(this.area=='2'){
                this.obj.provinceid = sheng;
                this.obj.cityid = shi;
                this.obj.areaid = qu;
            }else{
                this.obj.provinceid = this.information.provinceid;
                this.obj.cityid = this.information.cityid;
                this.obj.areaid = this.information.areaid;
            }
            this.getPiedata(this.obj);
        },
        getBardata:function(obj,name,color){
            this.$this.post('/broker/user/analysis/app/purchasin/get/rightAnalysis',JSON.stringify(obj)).then((response)=>{
                //console.log('aaa',response.data.data);
                this.barlegened = [];
                this.barlist = [];
                for(let i=0;i<response.data.data.length;i++){
                    this.barlegened.push(response.data.data[i].name);
                    this.barlist.push([response.data.data[i].name,response.data.data[i].rightNum]);
                }
                //console.log('aaaaa',this.barlist);
               this.$nextTick(function() {
                    this.canvasBar('designOrder-bar',this.barlist,this.barlegened,name,color)
                })
            }).catch((error)=>{})
        },
        getPiedata:function(obj){
            this.pielist = [];
            this.pielegened = [];
            this.piereslist = [];
            this.$this.post('/broker/user/analysis/app/purchasin/get/analysis',JSON.stringify(obj)).then((response)=>{
                //console.log('aaa',response.data.data);
                // this.piereslist = response.data.data;
                for(let i=0;i<response.data.data.length;i++){
                    if(response.data.data[i].num!=0){
                        this.piereslist.push(response.data.data[i]);
                        this.pielegened.push(response.data.data[i].name);
                        this.pielist.push({value:response.data.data[i].num, name:response.data.data[i].name});
                    }
                    
                }
                this.$nextTick(function() {
                    this.canvasPie('designOrder-pie',this.pielist,this.pielegened)
                })
                if(response.data.data.length>0){
                    let str = {
                        "areaid": this.obj.areaid,
                        "industry":this.obj.industry,
                        "provinceid":this.obj.provinceid,
                        "cityid":this.obj.cityid,
                        "sid":this.piereslist[0].sid,
                        "year": this.obj.year
                    };
                    this.getBardata(str,this.piereslist[0].name,'#F7A72C');
                }
                
            }).catch((error)=>{})
        },
        getdata:function(){
            this.orderlist = [];
            this.sumprice = 0;
            let obj = {"ids":this.param};
            this.$http.get('/broker/price/purchasing/list').then((response)=>{
                //console.log('----',response); 
                for(let i=0;i<response.data.data.length;i++){
                    this.orderlist.push({data:response.data.data[i],model:true});
                    this.sumprice = this.sumprice+response.data.data[i].cloudPrice;
                }
                //this.sumprice = Number(this.sumprice).toFixed(2);
            }).catch((error)=>{
            })
        },
        select:function(index){
            //console.log('aaa',this.orderlist[index].model);
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            if(userAgent.indexOf("Opera") > -1||userAgent.indexOf("Firefox") > -1||userAgent.indexOf("Safari") > -1||userAgent.indexOf("Chrome") > -1){
                if(userAgent.indexOf("Edge") > -1){
                    if(this.orderlist[index].model==false){
                        this.orderlist[index].model = false;
                    }else{
                        this.orderlist[index].model = true;                    
                    }
                    this.sumprice = 0;
                    for(let i=0;i<this.orderlist.length;i++){
                        if(this.orderlist[i].model==true){
                            this.sumprice =this.sumprice + this.orderlist[i].data.cloudPrice;
                        }                        
                    }

                }else{
                    if(this.orderlist[index].model==true){
                        this.orderlist[index].model = false;
                        this.sumprice = this.sumprice - this.orderlist[index].data.cloudPrice;
                    }else{
                        this.orderlist[index].model = true;
                        this.sumprice = this.sumprice + this.orderlist[index].data.cloudPrice;
                    }
                }
                
            }else{
                if(this.orderlist[index].model==false){
                    this.orderlist[index].model = false;
                }else{
                    this.orderlist[index].model = true;                    
                }
                this.sumprice = 0;
                for(let i=0;i<this.orderlist.length;i++){
                    if(this.orderlist[i].model==true){
                        this.sumprice =this.sumprice + this.orderlist[i].data.cloudPrice;
                    }                        
                }
            }
            
        },
        pay:function(){
            this.$router.push({path:'/pay',query:{id:this.appId,type:this.$route.query.type,enter:'1'}});
            //this.contact = true;
        },
        del:function(id){
            let obj = {"ids":[id]};
            let that = this;
            this.$confirm('您确定要删除该订单吗？', '温馨提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                confirmButtonClass:'lay-btn-red',
                cancelButtonClass:'lay-cancel-btn',
                type: 'warning',
                center: false
            }).then(() => {
                that.$this({
                    method: "delete",
                    url: "/broker/price/purchasing/delete",
                    data: obj
                }).then((response)=> {
                    that.getdata();
                    that.$message({
                        message: '您的订单已成功删除。',
                        type: 'success'
                    });
                    //console.log(response)
                }).catch((error)=> {
                });      
            }).catch(() => {});   
        },
        canvasBar:function(dom,series,legend,name,color){
            //console.log(series);
            this.echarts = echarts.init(document.getElementById(dom));
            this.echarts.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    right:'10px',
                    top:'10px',
                    data: name
                },
                grid: {
                    left: '3%',
                    right: '25%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis:  {
                    name:'数量',
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#c2c2c2'
                        }
                    },
                    nameTextStyle:{
                        color:'#333'
                    }
                },
                xAxis: {
                    name:name+'订单意向实例',
                    type: 'category',
                    data: legend,
                    axisLabel:{
                        color:'#999',
                        interval:0,  
                        rotate:15                    
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#c2c2c2'
                        }
                    },
                    nameTextStyle:{
                        color:'#333'
                    }
                },
                color:[color],
                series: [{
                        name: name,
                        type: 'bar',
                        barWidth : 25,//柱图宽度
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight'
                            }
                        },
                        data: series
                    }]
            },{notMerge: true});
        },
        canvasPie:function(dom,data,legend){
            let mychart = echarts.init(document.getElementById(dom));
            mychart.setOption({
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    right:'10px',
                    y : '10px',
                    data:legend
                },
                toolbox: {
                    show : false,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                color:['#F7A72C', '#da121a','#E15F2D','#55D0C5','#6380D3','#8261E0','#F7A72C','#DA121B','#E15E2D'],
                calculable : true,
                series : [
                    {
                        name:'占比来源',
                        type:'pie',
                        radius : [30, 110],
                        center : ['50%', '50%'],
                        roseType : 'area',
                        data:data
                    }
                ]
            });
            let that = this,str = {};
            mychart.on('click', function (params) {
                console.log('params',params);
                for(let i=0;i<that.piereslist.length;i++){
                    if(params.data.name==that.piereslist[i].name){
                        str = {
                            "areaid": that.obj.areaid,
                            "industry":that.obj.industry,
                            "provinceid":that.obj.provinceid,
                            "cityid":that.obj.cityid,
                            "sid":that.piereslist[i].sid,
                            "year": that.obj.year
                        };
                    }
                }
                that.getBardata(str,params.data.name,params.color);
            });
            
        },
    }
}
</script>