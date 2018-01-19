<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback" v-on:click="goBack('palnlist')">云规划</p>
    ><p class="comback" v-on:click="goBack('planquestion')">选择标准</p>
    ><p class="comback">云规划报表</p>
</div>
<child index="3" start="3" :type="$route.query.type" :id="$route.query.id"></child>
<div class="plan-box">
    <div class="compare-start">
        <button class="startbtn" v-on:click="compare()">开始云选型</button>
            <!--<button class="btn btn-default importbtn">导出</button>-->
        <div class="clear"></div>
    </div>
    <div class="result-echarts" id="main"></div>
    <div class="echarts-desc">工作负载分布图</div>
    <div class="row">
        <div class="col-md-3">
            <p class="appname">
                <span>{{result.proname}}</span>
                <span>{{result.appname}}</span>
            </p>
        </div>
        <div class="col-md-3 clould-result" v-for="item in resultlist">
            <p class="score" :class="item.moduleId==1?'score-qualitative':item.moduleId==2?'score-profit':'score-affinity'">
                <span class="score-name">{{item.moduleName}}</span>
                <span class="score-val" v-if="item.moduleId!=1">{{item.result}}</span>
                <span class="score-val" v-else>{{JSON.parse(item.result).sname}}</span>
            </p>
        </div>
    </div>
    <div class="clould-desc" v-html="desc"></div>

</div>
</div>
</template>
<script>
import child from '../../../../components/steps/steps.vue'
import '../planResult/planResult.css'
import echarts from 'echarts'
export default{
    name:'planResult',
    data(){
        return {
            charts:'',
            opiniondata:[],
            appId:'',
            result:{},
            queryType:'',
            resultlist:[],
            desc:''
        }
    },
    mounted:function(){
        this.queryType = this.$route.query.type;
        //this.appId = sessionStorage.getItem('appId');
        this.appId = this.$route.query.id;
        console.log(this.appId);
        //结果
        this.$this.get('/broker/result/plan/'+this.appId+'').then((response)=>{
            //console.log('结果',response);
            let qinhe,shouyi;   
            this.result =  response.data.data; 
            for(let i=0;i<response.data.data.appResults.length;i++){
                if(response.data.data.appResults[i].moduleId==1||response.data.data.appResults[i].moduleId==2||response.data.data.appResults[i].moduleId==3){
                    this.resultlist.push(response.data.data.appResults[i]);
                }
                if(response.data.data.appResults[i].moduleId==2){
                    shouyi = response.data.data.appResults[i].result;
                }
                if(response.data.data.appResults[i].moduleId==3){
                    qinhe = response.data.data.appResults[i].result;
                }
                if(response.data.data.appResults[i].moduleId==1){
                    this.desc = JSON.parse(response.data.data.appResults[i].result).description;
                }
            }
            this.opiniondata =  [{
                name:response.data.data.appname,
                value:[shouyi,qinhe]
            }] 
            this.$nextTick(function() {
                this.drawPie('main')
            })
            console.log(this.opiniondata);         
        }).catch((error)=>{
        }) 
    },
    methods:{
        compare:function(){
            this.$router.push({path:'/compareQuestion',query:{id:this.appId}});
        },
        drawPie:function(id){
            console.log(this.opiniondata);
            this.charts = echarts.init(document.getElementById(id));
            this.charts.setOption({
                //backgroundColor:'#ccc',
                title: {
                    text: this.result.proname+' '+this.result.appname +'云规划报告',
                    textStyle:{
                        color:'#333333',
                        fontWeight:'bold',
                        fontSize:'15'
                    },
                    left: 'center'
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
                    }
                },
                xAxis: {
                    name: '收益度',
                    type: 'value',
                    scale: true,
                    min:0,
                    max:100,
                    axisLabel: {
                        interval:20
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
                    name: '亲和度',
                    type: 'value',
                    scale: true,
                    min:0,
                    max:100,
                    axisLabel: {
                        interval:20
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
                series: [{
                    type: 'scatter',
                    data: this.opiniondata,
                    symbolSize: 20,
                    markLine: {
                        lineStyle: {
                            normal: {
                                color: "#626c91",
                                type: 'solid',
                                width: 1,
                            },
                            emphasis: {
                                color: "#d9def7"
                            }
                        },
                        data: [{
                            xAxis: 50,
                            name: '',
                            itemStyle: {
                                normal: {
                                    color: "#b84a58",
                                }
                            }
                        }, {
                            yAxis: 50,
                            name: '',
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
                                        color: '#e7faff'
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
                                        color: '#efefef',
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
                                        color: '#ffe9ea',
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
                                        color: '#fff1e2',
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
        },
        goBack:function(link){
            if(link=='planlist'){
                this.$router.push({path:'/planList'});
            }else if(link=='planquestion'){
                this.$router.push({path:'/planQuestion',query:{id:this.appId,name:'1'}});
            }
        }
    },
    components:{
        child
    }
}
</script>