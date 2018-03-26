<template>
<div class="total detadcision-box">
<div class="total-header detadcision-header">
    <span></span>
    智慧分析
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
            <div class="decision-title">多云优选意向订单统计分析图
                <select class="types-input" style="float:right;margin-right:10px;border:none;width:110px !important;" v-model="analysisModel" v-on:change="designScene()">
                    <option v-for="item in analysisList" :value="item.id" style="background:#fff;">{{item.proname}}</option>
                </select>
            </div>
            <div class="datadecision-list" style="padding-right:20px;">
                <div class="desingn-scenc" id="desingn-scenc" style="width:100%;height:100%;"></div>
            </div>
        </div>
        <div class="col-md-5 padding10">
        </div>
    </div>
</div>
</div>
</template>
<script>
import echarts from 'echarts'
import '../smarterDecision/smarterDecision.css'
export default{
    name:'smarterDecision',
    data(){
        return {
            charts:'',
            types:[],
            information:'',
            radardata:[],
            radarlegend:[],
            radarmax:[],
            opiniondata:[],
            istypeslist:false,
            radarTitle:'',
            analysisList:[],
            analysisModel:'',
            desType:[],
            series:[],
            desingLegend:[],
            muing:[],
            dataPush:[]
        }
    },
    mounted:function(){
        this.information = JSON.parse(sessionStorage.getItem("account"));
        if(this.information.tenant.length>3){
            this.radarTitle = this.information.tenant.slice(0,3)+'...'
        }else{
            this.radarTitle = this.information.tenant;
        }
        this.getWork();
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
        this.gethttp();
        //this.getDesignType();
    },
    methods:{
        gethttp:function(){
            this.$this.get('/broker/app/analysis').then((response)=>{//云分析
                //console.log('aaaaa',response);
                for(let i=0;i<response.data.data.length;i++){
                    this.analysisList.push(response.data.data[i]);
                }
                this.analysisModel = response.data.data[0].id;
                this.getDesignType();
            }).catch((error)=>{})
            this.$this.get('/broker/app/getAppMsg').then((response)=>{//应用
                console.log('bbbbbbb',response);
            }).catch((error)=>{})
            let obj = {ids:['592']};
            this.$this.post('/broker/user/analysis/app/compare/group',JSON.stringify(obj)).then((response)=>{

            }).catch((error)=>{})
        },
        designScene:function(){
            this.muing = [];
            this.getDesignHttp(this.desType,this.analysisModel);
            //this.getDesignType();
        },
        getDesignHttp:function(designType,analysisModel){
            //console.log(this.analysisModel);
            let str = {ids:[analysisModel]};
            this.series = [];
            this.desingLegend = [];
            this.$this.post('/broker/user/analysis/app/purchasin/scene',JSON.stringify(str)).then((response)=>{
                //console.log('aaaaaa',response.data.data);
                for(let i in response.data.data){
                    this.desingLegend.push(i);
                    this.series[i].push({
                        name: i,
                        type: 'bar',
                        stack: '总量',
                        data: this.dataPush
                    });
                    for(let r = 0;r<response.data.data[i].length;r++){
                        console.log(response.data.data[i][r])
                    }
                }
               
                for(let g=0;g<this.series.length;g++){
                    for(let m=0;m<designType.length;m++){
                        this.series[g].data.push([0,designType[m]]);
                    }    
                }
                for(let k=0;k<this.series.length;k++){
                         this.muing.push(this.series[k].name)
                        for(let j in response.data.data){
                            for(let n=0;n<response.data.data[j].length;n++){
                                if(this.series[k].name==response.data.data[j][n].appname){
                                    
                                    for(let y=0;y<this.series[k].data.length;y++){
                                        if(this.series[k].data[y][1]==response.data.data[j][n].sceneType){
                                            this.series[k].data[y][0] = response.data.data[j][n].num;
                                           
                                        }
                                    }
                                }
                            }
                        }
                    
                }
                console.log(this.muing);
                this.$nextTick(function() {
                    this.canvarDesign('desingn-scenc',this.desingLegend,this.series,designType,this.muing);
                })
                //console.log('hhhhhh',series);
                
            }).catch((error)=>{})
        },
        getDesignType:function(){
            this.$this.get('/broker/prop/typedata/esc-csb/-1').then((response)=>{
                //console.log('----',response);
                let designType = [];
                for(let i=0;i<response.data.data.length;i++){
                    designType.push(response.data.data[i].name);
                    this.desType.push(response.data.data[i].name);
                }
                this.getDesignHttp(designType,this.analysisModel);
            }).catch((error)=>{
            })
        },
        canvarDesign:function(dom,lenged,series,designType,muing){
            this.charts = echarts.init(document.getElementById(dom));
            this.charts.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: lenged,
                    top:'10',
                    right:'10'
                },
                color:['#F7A72C', '#da121a','#E15F2D','#55D0C5','#6380D3','#8261E0','#F7A72C','#DA121B','#E15E2D'],
                grid: {
                    left: '2%',
                    right: '8%',
                    bottom: '2%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'value',
                    name:'数量',
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    axisLabel:{
                        color:'#333'                   
                    },
                    nameTextStyle:{
                        color:'#333'
                    },
                },
                yAxis: {
                    type: 'category',
                    name:'类型',
                    data: muing,
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    axisLabel:{
                        color:'#333'                   
                    },
                    nameTextStyle:{
                        color:'#333'
                    },
                },
                series: this.series
                // series:[
                //     {
                //         name: '应用服务',
                //         type: 'bar',
                //         stack: '总量',
                //         data: app
                //     }
                // ]
            },{notMerge: true})
        },
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
        radarData:function(groupid){// 雷达图
            this.$this.get('/broker/user/analysis/types/'+groupid).then((response)=>{
                for(let i=0;i<response.data.data.list.length;i++){
                    this.radardata.push(response.data.data.list[i].num);
                    this.radarmax.push({text:response.data.data.list[i].gname, max:response.data.data.max});
                }
                this.$nextTick(function() {
                    this.drawPie('radar')
                })
            }).catch((error)=>{

            })
        },
        getWork:function(){
            // 工作负载分布图
            this.$http.get("/broker/result/plan/list").then(
            sps => {
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
        drawPie:function(dom){//雷达图
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
        drawWork:function(id){//象限图
            this.charts = echarts.init(document.getElementById(id));
            this.charts.setOption({
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
                    interval:10,
                    axisLabel: {
                        interval:20,
                    },
                    splitLine: {
                        show: false,
                        interval:0,
                        lineStyle: {
                            color: 'yellow',
                            type: 'solid',
                            width: '1'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
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
                    interval:10,
                    axisLabel: {
                        //formatter: '{value}'
                    },
                    splitLine: {
                        show: false,
                        interval:'20',
                        lineStyle: {
                            color: 'red',
                            type: 'solid',
                            width: '1.5'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999',
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
                    left: '73%',
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
                    symbolSize: 13,
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