<template>
<div class="total detadcision-box">
<div class="total-header detadcision-header">
    <span></span>
    预算分析
</div>
<div class="roi-content">
    <div class="roi-main">
        <div class="roi-header row">
            <div class="col-md-6 roi-header-left">预算收益统计分析</div>
            <div class="col-md-6 roi-header-right">工作负载名称：
                <select class="roiapp-select" v-model="appidModel" v-on:change="appchange()">
                    <option v-for="item in appmsg" :value="item.id" >{{item.appname}}</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10 roi-echats-box">
                <div class="roi-echarts" id="roi-echarts" style="width:100%;height:100%;"></div>
            </div>
            <div class="col-md-1"></div>      
        </div>
        <div class="roi-table-box">
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
                        <td style="cursor:pointer;" v-on:click="sortPrice()">费用参考<i class="iconfont icon-paixu"></i></td><!-- v-if="issort!=0" :class="issort=='1'?'icon-sanjiao':'icon-xiaosanjiaoup'"-->
                        <td>京玉折扣价</td>
                    </tr>                
                </thead>
                <tbody>
                    <tr v-for="(item,index) in pricelistOne">
                        <td :rowspan="pricelist.length+1">
                            <p :class="budgetprice==''?'Invest-table-color':''" style="cursor:pointer;" v-if="isbudget==false" v-on:click="budget()">{{budgetprice==''?'请输入您的预算':budgetprice}}<span style="color:#666;margin-left:3px;"><i class="iconfont icon-bianji"></i></span></p>
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
    </div>
</div>
</div>
</template>
<script>
import '../roiDecision/roiDecision.css';
import echarts from 'echarts';
export default{
    name:'roiDecision',
    data(){
        return {
            appmsg:[],//应用列表
            appidModel:'',//默认应用id
            pricelistOne:[],
            pricelist:[],
            budgetprice:'',
            isbudget:false,
            priceRate:'',
            allInvest:false,
            issort:'0',
        }
    },
    mounted:function(){
        $(document).keyup(function (evnet) {
            if (evnet.keyCode == '13') {
                return false;
            }
        });
        this.getAppMsg();//获取应用
    },
    methods:{
        sortPrice:function(){
            let list = [],arr=[];
            list[0] = this.pricelistOne[0];
            for(let i=0;i<this.pricelist.length;i++){
                list.push(this.pricelist[i]);
            }
            this.pricelistOne = [];
            this.pricelist = [];
            if(this.issort=='0'){
                this.issort = '1';//从小到大
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
            }else{
                if(this.issort == '1'){
                    this.issort = '2';//从大到小
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
                }else{
                    this.issort = '1';//从小到大
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
            
            this.getroi();//预算率
            if(this.budgetprice!=''){
                price = this.budgetprice;
            }
            this.$nextTick(function() {
                this.canvasROI('roi-echarts',pname,series,price);
            })
        },
        appchange:function(){
            this.budgetprice = '';
            this.getPrice(this.appidModel);
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
            let pname = [];
            let series = [];
            if(this.budgetprice!=''){
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
                //console.log('aaaa',series);
                this.$nextTick(function() {
                    this.canvasROI('roi-echarts',pname,series,this.budgetprice);
                })
                this.getroi();
            }
            
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
                appid:[this.appidModel],
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
            //console.log('aaaa',series);
            if(this.budgetprice!=''){
                this.getroi();
                price = this.budgetprice;
            }
            if(a>0){
                this.allInvest = false;
            }
            this.$nextTick(function() {
                this.canvasROI('roi-echarts',pname,series,price);
            })
            //this.budgetYes();
        },
        getAppMsg:function(){//应用
            this.$this.get('/broker/app/getAppMsg').then((response)=>{//应用
                //console.log('bbbbbbb',response);  
                this.appmsg = response.data.data; 
                this.appidModel =  response.data.data[0].id; 
                this.getPrice(response.data.data[0].id);         
            }).catch((error)=>{});
        },
        getPrice:function(appId){
            //alert(111);
            let obj = {"ids":[]};
            this.pricelistOne = [];
            this.pricelist = [];
            this.$this.post('/broker/price/purchasing/list/'+appId,JSON.stringify(obj)).then((response)=>{
                //console.log('----',response); 
                let pname = [],series = [];
                if(response.data.data.length>0){
                    this.pricelistOne.push({boolean:true,data:response.data.data[0]});
                    for(let i=1;i<response.data.data.length;i++){
                        this.pricelist.push({boolean:false,data:response.data.data[i]});
                    }
                    pname.push(this.pricelistOne[0].data.pname);
                    series.push(this.pricelistOne[0].data.cloudPrice);
                    // for(let i=0;i<response.data.data.length;i++){
                    //     pname.push(response.data.data[i].pname);
                    //     series.push(response.data.data[i].cloudPrice);
                    // }
                }
                this.$nextTick(function() {
                    this.canvasROI('roi-echarts',pname,series,0);
                })
            }).catch((error)=>{
            })
        },
        canvasROI:function(dom,x,series,centerline){
            // let sortarr = series;
            // let max = sortarr[0];
            // if(series.length>0){                
            //     sortarr.push(this.budgetprice);                
            //     for(let i=1;i<sortarr.length;i++){ 
            //         if(max<sortarr[i]){
            //             max=sortarr[i];
            //         }
            //     }
            // }
            this.charts = echarts.init(document.getElementById(dom));
            this.charts.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter:'{b0}: {c0}'
                },
                legend: {
                    data: ['价格'],
                    top:'10',
                    right:'10'
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
                    //data:series,
                    //max:max,
                    axisLine: {
                        lineStyle: {
                            color: '#c2c2c2'
                        }
                    },
                    nameTextStyle:{
                        color:'#333'
                    }
                },
                color:['#da121a'],
                series: [
                    {
                    name:'价格',
                    data: series,
                    barWidth : 25,//柱图宽度
                    type: 'bar',
                    markLine: {
                        lineStyle: {
                            normal: {
                                color: "#f7a72c",
                                type: 'solid',
                                width: 2,
                            },
                            emphasis: {
                                color: "#f7a72c"
                            }
                        },
                        data: [ {
                            yAxis: centerline,
                            name: '预算',
                        }]
                    }
                }]
            },{notMerge: true});
        },
    }
}
</script>