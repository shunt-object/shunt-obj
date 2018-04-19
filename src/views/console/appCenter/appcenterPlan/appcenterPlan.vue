<template>
<div class="appcenterplan">
<div class="appcplan-list">
    <div class="appcplan-item">
        CPU：<el-input class="appcplan-input" type="number" placeholder="请输入CPU" v-model="matchBo.cores"></el-input>
    </div>
    <div class="appcplan-item">
        内存：<el-input class="appcplan-input" type="number" placeholder="请输入内存" v-model="matchBo.ram"></el-input>
    </div>
    <div class="appcplan-item">
        硬盘：<el-input class="appcplan-input" type="number" placeholder="请输入硬盘" v-model="matchBo.disk"></el-input>
    </div>
    <div class="appcplan-btn">
        <button class="appcplan-button" v-on:click="submit()">完成</button>
    </div>    
    <div class="appcplan-result" v-if="matchdata!=undefined&&matchdata!=''">
        <div class="appcplan-result-echarts" style="width:100%;height:300px;">
            <div id="appcplan-result-echarts" style="width:100%;height:100%"></div>
        </div>
        <div class="row appcplan-clould-box">
            <div class="col-md-4 appcplan-clould">云定性：{{matchdata.serviceName}}</div>
            <div class="col-md-4 appcplan-clould">云亲和度：{{matchdata.affinityScope}}</div>
            <div class="col-md-4 appcplan-clould">云收益度：{{matchdata.benefitScope}}</div>
        </div>
        <div class="appcplan-result-desc" v-html="matchdata.serviceDesc"></div>
    </div>
    <div class="" v-if="matchdata==undefined">
        暂无此配置数据，吴老师会马上学习和匹配。如果您需要全方面的定制，请去我们的专业流程云规划。
    </div>
</div>
</div>
</template>
<script>
import echarts from 'echarts'
import '../appcenterPlan/appcenterPlan.css'
export default{
    name:'appcenterPlan',
    data(){
        return {
            echarts:'',
            matchBo:{
                cores:'',//cpu核数
                disk:'',//硬盘容量
                ram:'',//内存容量
            },
            matchdata:'',
            opiniondata:[]
        }
    },
    methods:{
        submit:function(){
            this.$this.post('/broker/match/getConfig',JSON.stringify(this.matchBo)).then((response)=>{
                //console.log(response.data.data);
                this.matchdata = response.data.data;
                this.opiniondata =  [{
                    name:response.data.data.serviceName,
                    value:[response.data.data.benefitScope,response.data.data.affinityScope]
                }] 
                //console.log(this.opiniondata);
                this.$nextTick(function() {
                    this.draw('appcplan-result-echarts')
                })
            }).catch((error)=>{})
        },
        draw:function(id){
            this.charts = echarts.init(document.getElementById(id));
            this.charts.setOption({
                title: {
                    text: '云规划报告',
                    textStyle:{
                        color:'#333333',
                        fontWeight:'normal',
                        fontSize:'15'
                    },
                    left: 'left'
                },
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
                        interval:0
                    },
                    splitLine: {
                        show: false
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
                    name: '云亲和度',
                    type: 'value',
                    scale: true,
                    min:0,
                    max:100,
                    interval:10,
                    axisLabel: {
                        interval:20
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#c2c2c2',
                            width:'2'
                        }
                    },
                    nameTextStyle:{
                        color:'#333'
                    }
                },
                visualMap: {
                    min: 0,
                    max: 100,
                    dimension: 0,
                    right:'5%',
                    //left: '73%',
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
                }]
                //
            })
        },
    }
}
</script>