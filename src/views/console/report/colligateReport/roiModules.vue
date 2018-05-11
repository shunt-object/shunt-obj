<template>
<div>
    <div class="colligateInvest" v-if="isclick!=2 && isclick!=3">
        <p class="advise-title"><i class="iconfont icon-touzizuhe main-color" style="font-size:20px !important;"></i>预算收益统计分析</p>
        <div class="colligate-list" style="padding:0 2em;" v-show="lengthnum">
            <div class="colligateBuy-echarts">
                <div class="Invest-echarts" id="Invest-echarts" style="width:100%;height:100%;"></div>
            </div>
            <table class="Invest-table" id="Invest-table" v-if="pricelistOne.length>0">
                <thead>
                    <tr>                   
                        <td rowspan="2">您的预算</td>
                        <td align="center" valign="middle" colspan="7">优选后消费</td>
                        <td rowspan="2">预算收益率</td>
                    </tr>
                    <tr class="Invest-table-headtwo">
                        <td><input type="checkbox" class="invest-checbox" v-model="allInvest" v-on:click="allClick()">产品名称</td>
                        <td>云厂商</td>                                        
                        <td>规格</td>
                        <td>数量</td>
                        <td>时间</td>
                        <td style="cursor:pointer;" v-on:click="sortPrice()">费用参考<i class="iconfont icon-paixu"></i></td>
                        <td>京玉折扣价</td>
                    </tr>                
                </thead>
                <tbody>
                    <tr v-for="(item,index) in pricelistOne">
                        <td :rowspan="pricelist.length+1">
                            <p :class="budgetprice==''?'Invest-table-color':''" style="cursor:pointer;" v-if="isbudget==false" v-on:click="budget()">{{budgetprice==''?'请输入您的预算':budgetprice}}<span style="color:#666;margin-left:3px;"><i class="iconfont icon-bianji font12"></i></span></p>
                            <p class="inputbudget" v-if="isbudget==true"><input type="number" v-model="budgetprice" v-on:blur="budgetYes()"></p>元
                        </td>
                        <td><input type="checkbox" class="invest-checbox" v-model="item.boolean" v-on:click="investInput('pricelistOne',index)">{{item.data.pname}}</td>
                        <td>{{item.data.sname}}</td>
                        <td>
                            <div class="invest-size">
                                <span class="Invest-table-color">{{item.data.cores}}</span><br>（v）CPU
                            </div>
                            <div class="invest-size">
                                <span class="Invest-table-color">{{item.data.ram}}</span><br>内存（GB）
                            </div>
                        </td>
                        <td>{{item.data.num}}</td>
                        <td>{{item.data.month%12==0?item.data.month/12+'年':item.data.month%12+'个月'}}</td>
                        <td>{{item.data.cloudPrice==0?'原厂在线暂不支持':'￥'+item.data.cloudPrice}}</td>
                        <td>{{item.data.csbPrice==0?'线下联系':'￥'+item.data.csbPrice}}</td>
                        <td :rowspan="pricelist.length+1"><p class="Invest-table-color">{{priceRate}}<span v-if="priceRate!=''">%</span></p></td>
                    </tr>
                    <tr v-for="(item,index) in pricelist" v-if="pricelist.length>0">
                        <td><input type="checkbox" class="invest-checbox" v-model="item.boolean" v-on:click="investInput('pricelist',index)">{{item.data.pname}}</td>
                        <td>{{item.data.sname}}</td>
                        <td>
                            <div class="invest-size">
                                <span class="Invest-table-color">{{item.data.cores}}</span><br>（v）CPU
                            </div>
                            <div class="invest-size">
                                <span class="Invest-table-color">{{item.data.ram}}</span><br>内存（GB）
                            </div>
                        </td>
                        <td>{{item.data.num}}</td>
                        <td>{{item.data.month%12==0?item.data.month/12+'年':item.data.month%12+'个月'}}</td>
                        <td>{{item.data.cloudPrice==0?'原厂在线暂不支持':'￥'+item.data.cloudPrice}}</td>
                        <td>{{item.data.csbPrice==0?'线下联系':'￥'+item.data.csbPrice}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="nodata" v-if="lengthnum==false">
            <img src="../../../../assets/compare-nodata.png" alt="">
            <br>        
            因多云价格优选未做或没有把优选实例加入到购物车，所以暂无数据。
        </div>
    </div>
</div>
</template>
<script>
import echarts from 'echarts'
export default{
    props:["appId","type","isclick"],
    data(){
        return {
            pricelist:[],
            pricelistOne:[],
            issort:'0',//排序
            allInvest:false,
            budgetprice:'',//预算
            priceRate:'',//收益率
            isbudget:false,//是否输入预算
            charts:'',
            lengthnum:false
        }
    },
    mounted:function(){
        this.getPrice();
    },
    methods:{
        getPrice:function(){
            let obj = {"ids":[]};
            this.$this.post('/broker/price/purchasing/list/'+this.appId,JSON.stringify(obj)).then((response)=>{
                //console.log('----',response); 
                if(response.data.data.length>0){
                    this.lengthnum = true;
                    this.pricelistOne.push({boolean:true,data:response.data.data[0]});
                    this.$nextTick(function() {
                        this.canvasInvest('Invest-echarts',[response.data.data[0].pname],[response.data.data[0].cloudPrice],0);
                    })
                    for(let i=1;i<response.data.data.length;i++){
                        this.pricelist.push({boolean:false,data:response.data.data[i]});
                    }
                }else{
                    this.lengthnum = false;
                }
            }).catch((error)=>{
            })
        },
        sortPrice:function(){
            let list = [],arr=[];
            list[0] = this.pricelistOne[0];
            for(let i=0;i<this.pricelist.length;i++){
                list.push(this.pricelist[i]);
            }
            this.pricelistOne = [];
            this.pricelist = [];
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
                this.pricelistOne.push(list[0]);
                for(let k=1;k<list.length;k++){
                    this.pricelist.push(list[k]);
                }
            }else if(this.issort == '0'){
                this.issort = '1';//从大到小
                for(let i=0; i<list.length; i++){ 
                    for(let j=0; j<list.length; j++){ 
                        if(list[i].data.cloudPrice > list[j].data.cloudPrice){ //从大到小
                            arr = list[j]; 
                            list[j] = list[i]; 
                            list[i] = arr; 
                        } 
                    } 
                }
                this.pricelistOne.push(list[0]);
                for(let k=1;k<list.length;k++){
                    this.pricelist.push(list[k]);
                }                    
            }
        },
        allClick:function(){
            let pname = [];
            let series = [];
            let price = 0;
            if(this.allInvest==false){//选中
                for(let i=0;i<this.pricelist.length;i++){
                    this.pricelist[i].boolean = true;
                }
                this.pricelistOne[0].boolean = true;
                if(this.pricelistOne[0].boolean==true){
                    pname.push(this.pricelistOne[0].data.pname);
                    series.push(this.pricelistOne[0].data.cloudPrice);
                }
                for(let i=0;i<this.pricelist.length;i++){
                    if(this.pricelist[i].boolean==true){
                        pname.push(this.pricelist[i].data.pname);
                        series.push(this.pricelist[i].data.cloudPrice);
                    }
                }
            }else{
                for(let i=0;i<this.pricelist.length;i++){
                    this.pricelist[i].boolean = false;
                }
                this.pricelistOne[0].boolean = false;
                pname = [];
                series = [];
            }
            this.getroi();//获取收益率
            if(this.budgetprice!=''){
                price = this.budgetprice;
            }
            this.$nextTick(function() {
                this.canvasInvest('Invest-echarts',pname,series,price);
            })
        },
        budget:function(){//预算
            let arr = 0;
            if(this.pricelistOne[0].boolean==true){
                arr++;
            }
            for(let i=0;i<this.pricelist.length;i++){
                if(this.pricelist[i].boolean==true){
                    arr++;
                }
            }
            if(arr>0){
                this.isbudget==false?this.isbudget=true:this.isbudget=false;
            }else{
                this.$alert('请您至少选中一个实例，计算投资回报率。', '温馨提示', {
                    confirmButtonText: '我知道了',
                    showClose:false,
                    type: 'warning',
                    confirmButtonClass:'lay-btn-red'
                });
            }
        },
        budgetYes:function(){
            this.isbudget = false;
            if(this.budgetprice!=''){
                this.blurClick();
                this.getroi();
            } 
        },
        blurClick:function(){
            let pname = [];
            let series = [];
            for(let i=0;i<this.pricelist.length;i++){
                if(this.pricelist[i].boolean==true){
                    pname.push(this.pricelist[i].data.pname);
                    series.push(this.pricelist[i].data.cloudPrice);
                }
            }
            if(this.pricelistOne[0].boolean==true){
                pname.push(this.pricelistOne[0].data.pname);
                series.push(this.pricelistOne[0].data.cloudPrice);
            }
            // if(series.length==1){
            //     pname.push('');
            //     series.push(0);
            // }
            this.$nextTick(function() {
                this.canvasInvest('Invest-echarts',pname,series,this.budgetprice);
            })
        },
        getroi:function(){
            let arr = [];
            for(let i=0;i<this.pricelist.length;i++){
                if(this.pricelist[i].boolean==true){
                    arr.push(this.pricelist[i].data.id);
                }
            }
            if(this.pricelistOne[0].boolean==true){
                arr.push(this.pricelistOne[0].data.id);
            }
            let obj = {
                appid:[this.appId],
                budget:this.budgetprice,
                purchaseIds:arr
            };
            this.$this.post('/broker/price/roi',JSON.stringify(obj)).then((response)=>{
                if(response.data.code==1){
                    this.priceRate = response.data.data.roi;
                }
            }).catch((error)=>{})
        },
        investInput:function(arrname,index){
            let pname = [];
            let series = [];
            let price = 0;
            let a = 0;
            if(arrname=='pricelistOne'){
                this.pricelistOne[index].boolean==false?this.pricelistOne[index].boolean=true:this.pricelistOne[index].boolean=false;
            }else{
                this.pricelist[index].boolean==false?this.pricelist[index].boolean=true:this.pricelist[index].boolean=false;
            }
            if(this.pricelistOne[0].boolean==true){
                pname.push(this.pricelistOne[0].data.pname);
                series.push(this.pricelistOne[0].data.cloudPrice);
            }else{
                a++;
            }
            for(let i=0;i<this.pricelist.length;i++){
                if(this.pricelist[i].boolean==true){
                    pname.push(this.pricelist[i].data.pname);
                    series.push(this.pricelist[i].data.cloudPrice);
                }else{
                    a++;
                }
            }
            if(a>0){
                this.allInvest = false;
            }
            if(this.budgetprice!=''){
                price = this.budgetprice;
                this.getroi();//获取收益率
            }
            if(series.length==1){
                pname.push('');
                series.push(0);
            }
            this.$nextTick(function() {
                this.canvasInvest('Invest-echarts',pname,series,price);
            })
            //this.budgetYes();
            //console.log('-----',this.pricelistOne);
        },
        canvasInvest:function(dom,x,series,centerline){
            if(series.length>0){
                let sortarr = series;
                sortarr.push(this.budgetprice);
                var max = sortarr[0];
                for(var i=1;i<sortarr.length;i++){ 
                    if(max<sortarr[i]){
                        max=sortarr[i];
                    }
                }
            }
            let list = [];
            for(let j=0;j<series.length;j++){
                if(series[j]!=centerline){
                    list.push(series[j]);
                }
            }
            
            this.charts = echarts.init(document.getElementById(dom));
            this.charts.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter:'{b0}: {c0}'
                },
                grid: {
                    left: '2%',
                    right: '8%',
                    bottom: '2%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: x,
                    name:'实例',
                    axisLabel:{
                        color:'#333',
                        interval:0,  
                        rotate:20                    
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
                yAxis: {
                    name:'价格',
                    type: 'value',
                    max:max,
                    axisLine: {
                        lineStyle: {
                            color: '#c2c2c2'
                        }
                    },
                    nameTextStyle:{
                        color:'#333'
                    }
                },
                legend: {
                    data: ['价格'],
                    top:'10',
                    right:'10'
                },
                color:['#da121a'],
                series: [
                    {
                    name:'价格',
                    data: list,
                    barWidth : 25,//柱图宽度
                    type: 'bar',
                    markLine: {
                        lineStyle: {
                            normal: {
                                color: "#f7a72c",
                                type: 'solid',
                                width: 2,
                            }
                        },
                        data: [ {
                            yAxis: centerline,
                            name: '预算'
                        }]
                    }
                }]
            });
                       
        },
    }
}
</script>