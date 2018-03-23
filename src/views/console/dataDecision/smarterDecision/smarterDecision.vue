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