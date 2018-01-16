<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link to="/consolePage">总览</router-link> > 报表
</div>
<child index="3" start="0" :type="queryType"></child>
<div class="plan-box">
    <div class="compare-start">
        <button class="startbtn" v-on:click="compare()">开始云选型</button>
            <!--<button class="btn btn-default importbtn">导出</button>-->
        <div class="clear"></div>
    </div>
    <div class="result-echarts" id="main"></div>
    <div class="row">
        <div class="col-md-3">
            <p class="appname">
                <span>{{result.proname}}</span>
                <span>{{result.appname}}</span>
            </p>
        </div>
        <div class="col-md-3 clould-result" v-for="item in resultlist">
            <p class="score">
                <span class="score-name">{{item.moduleName}}</span>
                <span class="score-val" v-if="item.moduleName!='云定性'">{{item.result}}</span>
                <span class="score-val" v-else>{{JSON.parse(item.result).sname}}</span>
            </p>
        </div>

        <!--<div class="col-md-6">
            <div class="col-md-6 font-16">{{result.proname}}</div>
            <div class="col-md-6 font-16 clould-name">{{result.appname}}</div>
        </div>
        <div class="col-md-6 row">
            <div class="col-md-4" v-for="item in resultlist">
                <button class="scalebtn" disabled v-if="item.moduleName!='云定性'">{{item.result}}</button>
                <button class="scalebtn" disabled v-else>{{JSON.parse(item.result).sname}}</button>
                <p class="sacleword">{{item.moduleName}}</p>
            </div>
        </div>-->
    </div>
    <div class="clould-desc">
        <div class="clould-title">公有云Iaas</div>
        <p class="clould-desc-main">作为Infrastructure as a Service (IaaS) 在实际应用中的一个例子，The New York Times 使用成百上千台 Amazon EC2虚拟机实例在 36 小时内处理 TB 级的文档数据。如果没有 EC2，The New York Times 处理这些数据将要花费数天或者数月的时间。
        </p>
        <p class="clould-desc-main">IaaS通常分为三两种用法：公有云共的和、私有云的和混合云。AmazonEC2在基础设施云中使用公共服务器池（公有云）。更加私有化的服务会使用企业内部数据中心的一组公用或私有服务器池（私有云）。如果在企业数据中心环境中开发软件，那么这两种类型公有云、私有云、混合云都能使用，而且使用EC2临时扩展资源的成本也很低，如—比方说开发和测试，混合云。结合使用两者可以更快地开发应用程序和服务，缩短开发和测试周期。
        </p>
    </div>

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
            resultlist:[]
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
                if(response.data.data.appResults[i].moduleName=='云定性'||response.data.data.appResults[i].moduleName=='收益度'||response.data.data.appResults[i].moduleName=='亲和度'){
                    this.resultlist.push(response.data.data.appResults[i]);
                }
                if(response.data.data.appResults[i].moduleName=='收益度'){
                    shouyi = response.data.data.appResults[i].result;
                }
                if(response.data.data.appResults[i].moduleName=='亲和度'){
                    qinhe = response.data.data.appResults[i].result;
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
        
        //图表
        // this.$nextTick(function() {
        //     this.drawPie('main')
        // })
    },
    methods:{
        compare:function(){
            this.$router.push({path:'/compareQuestion',query:{id:this.appId}});
        },
        drawPie:function(id){
            this.charts = echarts.init(document.getElementById(id));
            this.charts.setOption({
                //backgroundColor:'#ccc',
                title: {
                    text: this.result.proname+' '+this.result.appname +'云规划报告',
                    textStyle:{
                        color:'#333333',
                        fontWeight:'normal',
                        fontSize:'14px',
                        width:'100%',
                        rich:{
                            align:'center'
                        }
                    }
                },
                tooltip: {
                    trigger: 'item',
                    axisPointer: {
                        show: true,
                        type: 'cross',
                        lineStyle: {
                            type: 'dashed',
                            width: 1
                        },
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
                        color:'#ccc'
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
                        color:'#ccc'
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
                            name: '营业额平均线',
                            itemStyle: {
                                normal: {
                                    color: "#b84a58",
                                }
                            }
                        }, {
                            yAxis: 50,
                            name: '服务能力平均线',
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
                                name: '合适',
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
                                name: '低',
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
                                name: '高',
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
                                name: '一般',
                                itemStyle: {
                                    normal: {
                                        color: '#cee7f2',
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
    },
    components:{
        child
    }
}
</script>