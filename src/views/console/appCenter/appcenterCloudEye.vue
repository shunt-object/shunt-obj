<template>
<div class="total">
    <div class="total-header">
            <span></span>
            <router-link class="zong" to="/appcenterList">应用市场</router-link>
            ><p class="comback">云眼</p>
    </div>
<div class="datadecisions">
    <div class="">
        <div class="col-md-12 col-xs-12 padding10">
            <div class="decision-titles"><div class="col-md-2">  上云趋势统计分析</div>
                <div class="col-xs-7 col-md-2" style="margin:0 auto">
                    <select class="year-select " v-model="year" v-on:change="lineModel()" >
                        <option v-for="item in yearList" :value="item">{{item}}</option>
                    </select>
                </div>
                <div class="col-xs-7 col-md-2" style="margin:0 auto">
                    <select class="up-select" v-model="lineArea" v-on:change="lineModel()" >
                        <option v-for="item in areaList" :value="item.id">{{item.name}}</option>
                    </select>
                </div>
                <div class="col-xs-7 col-md-2" style="margin:0 auto">
                    <select class="up-select" v-model="lineInsdusty" v-on:change="lineModel()">
                        <option v-for="item in industryList" :value="item.id">{{item.name}}</option>
                    </select>
                </div>
            </div>
           
                <div class="line" id="line" style="width:100%;margin:0 auto;"></div>
           
        </div>
       
    </div>
</div>
</div>
</template>
<style>
    
.detadcision-box{
    padding:0 !important;
    min-height:100vh;
}
.detadcision-header{
    padding:0 10px !important;
}



.comm-select{
    position:absolute;
    right:10px;
    top:8px;
    width:80px;
    height:20px;
    background:#e9e9e9;
    border:none;
    line-height:20px;
    border-radius:2px;
    cursor:pointer;
    color:#777;
    font-size:12px;
    padding-left:10px;
}

@media (min-width: 768px) {
    .decision-titles{
        width:100%;
        height:35px;
        background:#F6F6F6;
        text-align:left;
        line-height:35px;
        text-indent:10px;
        position:relative;
    }     
    .line{
        height:400px;
    }
    {
    /*position:absolute;
    right:100px;
    top:8px;*/
    float:right !important;
    margin-top:8px;
    margin-right:10px;
    width:88px;
    height:20px;
    background:#e9e9e9;
    border:none;
    line-height:20px;
    border-radius:2px;
    cursor:pointer;
    color:#777;
    font-size:12px;
    padding-left:10px;
}
.datadecisions{
    overflow-x:hidden;
    background:#F8FAFD;
    padding-top:10px;
}
.datadecision-lists{
    background:#fff;
    box-shadow: 0 2px 2px 0 hsla(0,0%,79%,.4);
    height:400px;
}
.datadecision-list1{
    background:#fff;
    box-shadow: 0 2px 2px 0 hsla(0,0%,79%,.4);
    height:400px;
}
.year-select{
    width:80px;
    height:20px;
    /*position:absolute;
    right:10px;
    top:8px;*/
    float:right !important;
    margin-top:8px;
    background:#e9e9e9;
    border:none;
    line-height:20px;
    border-radius:2px;
    cursor:pointer;
    color:#777;
    font-size:12px;
    padding-left:10px;
    margin-right:10px;
}
}
@media (max-width: 768px) {
    .datadecision-lists{
        height:300px !important;
    }
    .up-select{
        width:80px !important
    }
    .line{
        width:260px !important;
         height:300px !important;margin-top:60px;
    }
    .decision-titles{
        width:100%;
        height:150px;
        background:#F6F6F6;
        text-align:left;
        line-height:35px;
        text-indent:10px;
        position:relative;
    }
    
}

.types-input{
    min-width:110px;
    height:20px;
    position:absolute;
    right:10px;
    top:8px;
    font-size:12px;
    color:#777;
    border-radius:2px;
    background:#e9e9e9;
    line-height:20px;
    cursor:pointer;
}
.types-select{
    position:absolute;
    right:10px;
    top:28px;
    border:1px solid #e9e9e9;
    min-width:110px;
    background:#fff;
    z-index:9999;
    max-height:300px;
    overflow-y:auto;
}
.types-select p{
    line-height:20px;
    width:100%;
    font-size:12px;
    cursor:pointer;
    color:#666;
}
.types-select p:hover{
    background:#1e90ff;
    cursor:pointer;
    color:#fff;
}
.types-checkbox{
    float:left;
    margin:4px 10px !important;
}
.padding10{
    padding:10px;
}
</style>
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
                            // for(let i=0;i<12;i++){
                            //     that.maxY[i]=Math.ceil((value.max-1)/5)*5;
                            // }
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
                    //     { // For shadow
                    //     type: 'bar',
                    //     itemStyle: {
                    //         normal: {color: 'rgba(247,247,247,0.4)'}
                    //     },
                    //     barWidth:'25',
                    //     barGap:'-100%',
                    //     barCategoryGap:'40%',
                    //     data: this.maxY,
                    //     animation: false
                    // },
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
        }
      
    }
}
</script>