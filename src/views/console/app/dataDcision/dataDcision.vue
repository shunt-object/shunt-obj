<template>
<div class="total detadcision-box">
<div class="total-header detadcision-header">
    <span></span>
    数据分析
</div>
<!--<img src="../../../../assets/juece.jpg" alt="" style="width:100%;">-->
<div class="datadecision">
    <div class="row">
        <div class="col-md-7 padding10">
            <div class="decision-title">工作负载分布统计分析</div>
            <div class="datadecision-list" style="padding-right:20px;">
                <div class="work" id="work" style="width:100%;height:100%;"></div>
            </div>
        </div>
        <div class="col-md-5 padding10">
            <div class="decision-title">云选型倾向性统计分析
                <div class="types-input" v-on:click="Istypes()" id="types-input">场景选择<i class="iconfont icon-sanjiao" style="float:right;margin-right:10px;"></i></div>
                <div class="types-select" id="types-select" v-show="istypeslist">
                    <p v-for="(item,index) in types" v-on:click="typesClick(index)"><input type="checkbox" v-model="item.boolean" class="types-checkbox">{{item.data.gname}}</p>
                </div>
            </div>
            <div class="datadecision-list">
                <div class="radar" id="radar" style="width:100%;height:100%;"></div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-7 padding10">
            <div class="decision-title">上云趋势统计分析
                <select class="year-select" v-model="year" v-on:change="lineModel()">
                    <option v-for="item in yearList" :value="item">{{item}}</option>
                </select>
                <select class="up-select" v-model="linetab" v-on:change="lineModel()">
                    <option v-for="item in tradeTab" :value="item.id">{{item.name}}</option>
                </select>
            </div>
            <div class="datadecision-list">
                <div class="line" id="line" style="width:100%;height:100%;"></div>
            </div>
        </div>
        <div class="col-md-5 padding10">
            <div class="decision-title">云厂商倾向性占比分析
                <select class="comm-select" v-model="pietab" v-on:change="pieModel()">
                    <option v-for="item in tradeTab" :value="item.id">{{item.name}}</option>
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
import '../dataDcision/dataDcision.css'
export default{
    name:'dataDcision',
    data(){
        return {
            charts:'',
            types:[],
            pieList:[],
            pielegend:[],
            piedata:[],
            information:'',
            radardata:[],
            radarlegend:[],
            radarmax:[],
            opiniondata:[],
            tradeTab:[
                {id:'1',name:'所在区域'},
                {id:'2',name:'所在行业'}
            ],
            pietab:'1',
            yearList:['2018'],
            year:'2018',
            linetab:'1',
            istypeslist:false,
            linearr:[],
            linearr_b:[],
            radarTitle:''
        }
    },
    mounted:function(){
        this.information = JSON.parse(sessionStorage.getItem("account"));
        if(this.information.tenant.length>3){
            this.radarTitle = this.information.tenant.slice(0,3)+'...'
        }else{
            this.radarTitle = this.information.tenant;
        }
        this.getPie(this.pietab);
        this.getWork();
        let obj = {
                "areaid": this.information.areaid,
                "year": this.year
        };
        this.getLine(obj);
        this.getTypes();  
        var that = this;
        $(document).click(function () {
            if(that.istypeslist == true){
                that.istypeslist = false;
            }
        });
        $("#types-input").click(function(event){
            event.stopPropagation();
        });    
        $("#types-select").click(function(event){
            event.stopPropagation();
        });   
    },
    methods:{
        Istypes:function(){
            if(this.istypeslist==false){
                this.istypeslist = true;
            }else{
                this.istypeslist = false;
            }            
        },
        typesClick:function(id){
            let arr = [];
            if(this.types[id].boolean==false){
                this.types[id].boolean=true;
                for(let i=0;i<this.types.length;i++){
                    if(this.types[i].boolean==true){
                        arr.push(this.types[i].data.id);
                    }
                }
                this.radardata = [];
                this.radarmax = [];
                this.radarData(arr.join(','));
            }else{
                this.types[id].boolean=false;
                for(let i=0;i<this.types.length;i++){
                    if(this.types[i].boolean==true){
                        arr.push(this.types[i].data.id);
                    }
                }
                this.radardata = [];
                this.radarmax = [];
                this.radarData(arr.join(','));
            }
            //console.log('----',arr.join(','));
        },
        getTypes:function(){
            this.$this.get('/broker/compare/parent/types').then((response)=>{
                //this.types = response.data.data;
                for(let i=0;i<response.data.data.length;i++){
                    this.types.push({boolean:false,data:response.data.data[i]});
                }
                this.types[0].boolean = true;
                this.radarData(this.types[0].data.id);
            }).catch((error)=>{
            }) 
        },
        radarData:function(groupid){
             // 雷达图
            //this.radardata.push({value :[],name :'aaa'});
            this.$this.get('/broker/user/analysis/types/'+groupid).then((response)=>{
                for(let i=0;i<response.data.data.list.length;i++){
                    this.radardata.push(response.data.data.list[i].num);
                    this.radarmax.push({text:response.data.data.list[i].gname, max:response.data.data.max});
                    //this.radardata.push({value :response.data.data.list[i].num ,name :response.data.data.list[i].gname});
                    //this.radarlegend.push(response.data.data.list[i].gname);
                }
                this.$nextTick(function() {
                    this.drawPie('radar')
                })
            }).catch((error)=>{

            })
        },
        pieModel:function(){
            this.pielegend = [];
            this.piedata = [];
            this.getPie(this.pietab);
        },
        lineModel:function(){
            this.lineX = [];
            this.lineData = [];
            if(this.linetab=='2'){
                let obj = {
                    "industry": this.information.industry,
                    "year": this.year
                };
                this.getLine(obj);
            }else{
                let obj = {
                    "areaid": this.information.areaid,
                    "year": this.year
                };
                this.getLine(obj);
            } 
        },
        getLine:function(obj){
            let str = JSON.stringify(obj);
            let arr = [];
            // 折线图
            this.$this.post('/broker/user/analysis/putCloud/',str).then((reponse)=>{
                for(let i=0;i<reponse.data.data.length;i++){//reponse.data.data[i].months
                    this.linearr.push([reponse.data.data[i].months,reponse.data.data[i].num]);
                    this.linearr_b.push([reponse.data.data[i].months,reponse.data.data[i].num+1]);
                    this.$nextTick(function() {
                        this.canversLine('line')
                    })
                }
                //console.log(this.lineX,this.lineData);
            }).catch((error)=>{

            })
        },
        getPie:function(pie){
            // 饼图 1==区域 2==行业
            this.$this.get('/broker/user/analysis/adviceServer/'+pie).then((response)=>{
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
        getWork:function(){
            // 工作负载分布图
            this.$http.get("/broker/result/plan/list").then(
            sps => {
                //console.log(sps);
            let arr = [],brr = [];
            for(let i=0;i<sps.body.data.length;i++){
                arr.push({name:sps.body.data[i].appname,value:[]});
                for(let n=0;n<sps.body.data[i].appResults.length;n++){
                    if(sps.body.data[i].appResults[n].moduleId=='2'){
                        arr[i].value.push(sps.body.data[i].appResults[n].result);
                    }
                    if(sps.body.data[i].appResults[n].moduleId=='3'){
                        arr[i].value.push(sps.body.data[i].appResults[n].result);
                    }
                }
            }
            this.opiniondata =  arr;
            this.$nextTick(function() {
                    this.drawWork('work')
            });
            },
            err => {}
        );
        },
        canversLine:function(dom){
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
                        formatter: '{a}: {c0}'
                    },
                    legend: {
                        data: ['上云趋势','上云总数'],
                        x:'79%',
                        y:'10px'
                    },
                    xAxis: [{
                        name:'  月份',
                        type:'category',
                        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                        axisPointer:{
                            type:'shadow'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#bebebe'
                            }
                        },
                        nameTextStyle:{
                            color:'#999'
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
                                color: '#bebebe'
                            }
                        },
                        nameTextStyle:{
                            color:'#999'
                        },
                    },{
                        type:'value',
                        name:'',
                        axisLabel: {
                            formatter: '{value}'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#ccc'
                            }
                        },
                        nameTextStyle:{
                            color:'#999'
                        },
                    }],
                    series: [{
                        name:'上云总数',
                        type:'bar',
                        data:this.linearr,
                        itemStyle:{
                            normal:{
                                color:'#f7a72c'
                            }
                        },
                        barWidth : 25,//柱图宽度
                    },{
                        name:'上云趋势',
                        type:'line',
                        yAxisIndex: 1,
                        data:this.linearr_b,
                        lineStyle:{
                            normal:{
                                color:'#da121a'
                            }
                        }
                    }]

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
                color:['#da121a', '#F7A72C','#E15F2D'],
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
        drawPie:function(dom){
            this.charts = echarts.init(document.getElementById(dom));
            this.charts.setOption({
                title : {
                    text: '',
                },
                tooltip : {
                    //trigger: 'axis'
                },
                legend: {
                    orient : 'vertical',
                    x : '79%',
                    y:'10px',
                    data:[this.radarTitle]
                },
                toolbox: {
                    show : false,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                color:['#da121a'],
                polar : [
                    {
                        indicator : this.radarmax,
                        // splitArea : {
                        //     show : true,   
                        //     areaStyle : {
                        //         color: ["#fff",'#FEEFD7']  // 图表背景网格的颜色
                        //     }
                        // },
                        // splitLine : {
                        //     show : true,
                        //     lineStyle : {
                        //         width : 1,
                        //         color : '#ccc' // 图表背景网格线的颜色
                        //     }
                        // }
                    }
                ],
                calculable : true,
                series : [
                    {
                        name: '',
                        type: 'radar',
                        data : [
                            {
                                value :this.radardata,
                                name :this.radarTitle
                            }
                        ]
                    }
                ]
            })
        },
        drawWork:function(id){
           // console.log(this.opiniondata);
            this.charts = echarts.init(document.getElementById(id));
            this.charts.setOption({
                //backgroundColor:'#ccc',
                // title: {
                //     text: '',
                //     textStyle:{
                //         color:'#333333',
                //         fontWeight:'bold',
                //         fontSize:'15'
                //     },
                //     left: 'center'
                // },
                tooltip: {
                    trigger: 'item',
                    axisPointer: {
                        show: true,
                        type: 'cross',
                        lineStyle: {
                            type: 'dashed',
                            width: 1
                        }                        
                    },
                    formatter: function(obj) {
                        if (obj.componentType == "series") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                                obj.name +
                                '</div>' +
                                '<span>' +
                                '云亲和度' +
                                '</span>' +
                                ' : ' + obj.data.value[0]  +
                                '<br/>' +
                                '<span>' +
                                '云收益度' +
                                '</span>' +
                                ' : ' + obj.data.value[1] 
                        }
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'bottom',
                        formatter: function(params) {
                            return params.name
                        }
                    },
                    emphasis: {
                        show: true,
                        position: 'bottom',
                    }
                },
                xAxis: {
                    name: '云收益度',
                    type: 'value',
                    scale: true,
                    min:0,
                    max:100,
                    interval:20,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#bebebe'
                        }
                    },
                    nameTextStyle:{
                        color:'#999'
                    }
                },
                yAxis: {
                    name: '云亲和度',
                    type: 'value',
                    scale: true,
                    min:0,
                    max:100,
                    interval:20,
                    axisLabel: {
                        //formatter: '{value}'
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#bebebe',
                            type: 'solid',
                            width: '1.5'
                        }
                    },
                    nameTextStyle:{
                        color:'#999'
                    }
                },
                visualMap: {
                    min: 0,
                    max: 100,
                    dimension: 0,
                    left: 'right',
                    top: '10',
                    text: ['高', '低'], // 文本，默认为数值文本
                    calculable: false,
                    itemWidth: 10,
                    itemHeight: 90,
                    textStyle: {
                        color: '#666',
                        height: 56,
                        fontSize: 11,
                        lineHeight: 60,
                    },
                    inRange: {
                        color: ['yellow', '#da121a']
                    },
                    //padding: [50, 20],
                    orient: 'horizontal',
                },
                series: [{
                    type: 'scatter',
                    data: this.opiniondata,
                    symbolSize: 20,
                    markLine: {
                        lineStyle: {
                            normal: {
                                color: "#f7a72c",
                                type: 'solid',
                                width: 1,
                            },
                            emphasis: {
                                color: "#d9def7"
                            }
                        },
                        data: [{
                            xAxis: 50,
                            name: '平均线',
                            itemStyle: {
                                normal: {
                                    color: "#b84a58",
                                }
                            }
                        }, {
                            yAxis: 50,
                            name: '平均线',
                            itemStyle: {
                                normal: {
                                    color: "#b84a58",
                                }
                            }
                        }]
                    },
                    markArea: {
                        silent: true,
                        data: [
                            [{
                                name: '',//合适
                                itemStyle: {
                                    normal: {
                                        color: '#fff'
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideTopLeft',
                                        fontStyle: 'normal',
                                        color: "#409EFF",
                                        fontSize: 20,
                                    }
                                },
                                coord: [50, 50],
                            }, {
                                coord: [Number.MAX_VALUE, 0],
                            }],
                            [{
                                name: '',//低
                                itemStyle: {
                                    normal: {
                                        color: '#fff',
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideTopRight',
                                        fontStyle: 'normal',
                                        color: "#409EFF",
                                        fontSize: 20,
                                    }
                                },
                                coord: [0, 0],
                            }, {
                                coord: [50, 50],
                            }],
                            [{
                                name: '',//高
                                itemStyle: {
                                    normal: {
                                        color: '#fff',
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideBottomLeft',
                                        fontStyle: 'normal',
                                        color: "#409EFF",
                                        fontSize: 20,
                                    }
                                },
                                coord: [50, 50],
                            }, {
                                coord: [Number.MAX_VALUE, Number.MAX_VALUE],
                            }],
                            [{
                                name: '',//一般
                                itemStyle: {
                                    normal: {
                                        color: '#fff',
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideBottomRight',
                                        fontStyle: 'normal',
                                        color: "#409EFF",
                                        fontSize: 20,
                                    }
                                },
                                coord: [0, Number.MAX_VALUE],
                            }, {
                                coord: [50, 50],
                            }],
                        ]
                    }
                }]
                //
            })
        }
    }
}
</script>