<template>
<div class="total detadcision-box">
<div class="total-header detadcision-header">
    <span></span>
    数据洞察
</div>
<div class="datadecision">
    <div class="row">
        <div class="col-md-7 padding10">
            <div class="decision-title">上云趋势统计分析
                <select class="year-select" v-model="year" v-on:change="lineModel()" >
                    <option v-for="item in yearList" :value="item">{{item}}</option>
                </select>
                <select class="up-select" v-model="lineArea" v-on:change="lineModel()" >
                    <option v-for="item in areaList" :value="item.id">{{item.name}}</option>
                </select>
                <select class="up-select" v-model="lineInsdusty" v-on:change="lineModel()">
                    <option v-for="item in industryList" :value="item.id">{{item.name}}</option>
                </select>
            </div>
            <div class="datadecision-list">
                <div class="line" id="line" style="width:100%;height:100%;"></div>
            </div>
        </div>
        <div class="col-md-5 padding10">
            <div class="decision-title">云厂商倾向性占比分析
                <select class="up-select" v-model="pieYear" v-on:change="pieModel()">
                    <option  v-for="item in yearList" :value="item">{{item}}</option>
                </select>
                <select class="up-select" v-model="pieArea" v-on:change="pieModel()">
                    <option v-for="item in areaList" :value="item.id">{{item.name}}</option>
                </select>
                <select class="up-select" v-model="pieInsdusty" v-on:change="pieModel()">
                    <option v-for="item in industryList" :value="item.id">{{item.name}}</option>
                </select>
            </div>
            <div class="datadecision-list">
                <div class="pie" id="pie" style="width:100%;height:100%;"></div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
import echarts from 'echarts'
export default{
    name:'susDecision',
    data(){
        return {
            charts:'',
            pieList:[],
            pielegend:[],
            piedata:[],
            information:'',
            pieYear:'2018',
            yearList:['2017','2018'],
            year:'2018',
            linetab:'1',
            linearr:[],
            linearr_b:[],
            maxY:[],
            areaList:[{id:'1',name:'所在区域'},{id:'2',name:'全部区域'}],
            industryList:[{id:'1',name:'所在行业'},{id:'2',name:'全部行业'}],
            lineArea:'1',
            lineInsdusty:'1',
            pieArea:'1',
            pieInsdusty:'1'
        }
    },
    mounted:function(){
        this.information = JSON.parse(sessionStorage.getItem("account"));
        let obj = {
            "areaid": this.information.areaid,
            "industry":this.information.industry,
            "provinceid":this.information.provinceid,
            "cityid":this.information.cityid,
            "year": this.year
        };
        this.getLine(obj);
        this.getPie(obj);
        var that = this;
    },
    methods:{
        lineModel:function(){//1=所选  2=全部
            let sheng = this.information.provinceid,shi = this.information.cityid,
            qu = this.information.areaid,insdusty = this.information.industry;
            if(this.lineArea==2){
                sheng = '-1';shi = '-1'; qu = '-1';
            }else{
                sheng = this.information.provinceid;shi = this.information.cityid;
                qu = this.information.areaid;
            }
            if(this.lineInsdusty==2){
                insdusty = '-1';
            }else{
                insdusty = this.information.industry;
            }
            let obj = {
                    "provinceid":sheng,
                    "cityid":shi,
                    "areaid":qu,
                    "industry":insdusty,
                    "year": this.year
                };
            this.getLine(obj);
        },
        getLine:function(obj){
            let str = JSON.stringify(obj);
            let arr = [];
            // 折线图
            this.$this.post('/broker/user/analysis/putCloud/',str).then((reponse)=>{
                this.linearr = [];
                this.linearr_b = [];
                if(reponse.data.data.length>1){
                    for(let i=0;i<reponse.data.data.length;i++){//reponse.data.data[i].months
                        this.linearr.push([reponse.data.data[i].months,reponse.data.data[i].num]);
                        this.linearr_b.push([reponse.data.data[i].months,reponse.data.data[i].num+1]);
                        this.$nextTick(function() {
                            this.canversLine('line')
                        })
                    }
                }else{
                    this.$nextTick(function() {
                        this.canversLine('line')
                    })
                }
                
            }).catch((error)=>{

            })
        },
        pieModel:function(){
            let sheng = this.information.provinceid,shi = this.information.cityid,
            qu = this.information.areaid,insdusty = this.information.industry;
            if(this.pieArea==2){
                sheng = '-1';shi = '-1'; qu = '-1';
            }else{
                sheng = this.information.provinceid;shi = this.information.cityid;
                qu = this.information.areaid;
            }
            if(this.pieInsdusty==2){
                insdusty = '-1';
            }else{
                insdusty = this.information.industry;
            }
            let obj = {
                "provinceid":sheng,
                "cityid":shi,
                "areaid":qu,
                "industry":insdusty,
                "year": this.pieYear
            };
            this.getPie(obj);
        },
        getPie:function(obj){
            let str = JSON.stringify(obj);
            // 饼图 1==区域 2==行业
            this.$this.post('/broker/user/analysis/adviceServer',str).then((response)=>{
                this.pielegend = [];
                this.piedata = [];
                this.pieList = response.data.data;
                for(let i=0;i<response.data.data.length;i++){
                    this.pielegend.push(response.data.data[i].serverName);
                    this.piedata.push({value:response.data.data[i].num, name:response.data.data[i].serverName});
                } 
                this.$nextTick(function() {
                    this.canversPie('pie')
                })
            }).catch((error)=>{
            })
        },
        canversLine:function(dom){
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
                        formatter: '上云总数: {c1}'
                    },
                    legend: {
                        data: ['上云趋势','上云总数'],
                        x:'79%',
                        //right:'10px',
                        y:'10px'
                    },
                    xAxis: [{
                        name:'月份',
                        type:'category',
                        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
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
                        nameLocation:'end'
                    }],
                    yAxis: [{
                        type:'value',
                        name:'数量',
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
                    },{
                        type:'value',
                        name:'',
                        axisLabel: {
                            formatter: '{value}'
                        },
                        max: function(value) {
                            for(let i=0;i<12;i++){
                                that.maxY[i]=Math.ceil((value.max-1)/5)*5;
                            }
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
                        { // For shadow
                        type: 'bar',
                        itemStyle: {
                            normal: {color: 'rgba(247,247,247,0.4)'}
                        },
                        barWidth:'25',
                        barGap:'-100%',
                        barCategoryGap:'40%',
                        data: this.maxY,
                        animation: false
                    },
                    {
                        name:'上云总数',
                        type:'bar',
                        data:this.linearr,
                        itemStyle:{
                            normal:{
                                color:'#f7a72c'
                            }
                        },
                        barWidth : 25,//柱图宽度
                    },
                    {
                        name:'上云趋势',
                        type:'line',
                        yAxisIndex: 1,
                        data:this.linearr_b,
                        lineStyle:{
                            normal:{
                                color:'#da121a'
                            }
                        }
                    }
                    ]

            })
        },
        canversPie:function(dom){
            this.charts = echarts.init(document.getElementById(dom));
            this.charts.setOption({
                 title : {
                    text: '',
                    subtext: '',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                color:['#F7A72C', '#da121a','#E15F2D','#55D0C5','#6380D3','#8261E0','#F7A72C','#DA121B','#E15E2D'],
                legend: {
                    orient : 'vertical',
                    x : '79%',
                    y:'10px',
                    data:this.pielegend
                },
                calculable : true,
                series : [
                    {
                        name:'占比来源',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:this.piedata,
                        itemStyle:{
                            normal:{
                                borderColor:'none',
                                borderWidth:'0'
                            }
                        },
                        center:['50%','50%']
                    }
                ]
            })
        },
    }
}
</script>