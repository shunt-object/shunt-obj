<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback">综合报告</p>
</div>
    <child index="6" start="5" :type="$route.query.type" :id="$route.query.id"></child>
    <div class="colligate-heade">
        综合报告<button class="exportBtn" v-on:click="getPdf()"><img src="../../../../assets/report/export.png" style="width:16px;margin-right:5px;" alt="">导出</button>
    </div>
    <div class="colligateReport" id="titBody" style="background:#fff;padding:20px;">
        <!-- 基本信息 -->
        <div class="colligate-title">
            <img src="../../../../assets/report/report-information.png" alt="">
            基本信息
        </div>
        <div class="colligate-list">
            <table class="information-table">
                <thead>
                    <tr>
                        <th>企业名称</th>
                        <th>分析人</th>
                        <th>云分析名称</th>
                        <th>应用信息</th>
                        <th>工作负载类型</th>
                        <th>工作负载架构</th>
                        <th>分析时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{information.realname}}</td>
                        <td>{{information.tenant}}</td>
                        <td>{{information.proname}}</td>
                        <td>{{information.appname}}</td>
                        <td>{{information.protypeStr}}</td>
                        <td>{{information.frametypeStr}}</td>
                        <td>{{information.createDt}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 云规划报告 -->
        <div class="colligate-title">
            <img src="../../../../assets/report/report-plan.png" alt="">
            云规划报告详情
        </div>
        <div class="colligate-list">
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
                        <span class="score-name" v-if="item.moduleId!=1">云{{item.moduleName}}</span>
                        <span class="score-name" v-else>{{item.moduleName}}</span>
                        <span class="score-val" v-if="item.moduleId!=1">{{item.result}}</span>
                        <span class="score-val" v-else>{{JSON.parse(item.result).sname}}</span>
                    </p>
                </div>
            </div>
            <div class="clould-desc" v-html="desc"></div>
        </div> 
        <!-- 云选型 -->
        <div class="colligate-title">
            <img src="../../../../assets/report/report-compare.png" alt="">
            云选型报告详情
        </div>
        <div class="colligate-list">
            <table class="table-score colligate-tables">
                <thead>
                    <tr>
                        <th>云供应商</th>
                        <th>分数</th>
                        <th>区域价格范围</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in compareResultList">
                        <td>{{item.serverName}}</td>
                        <td>{{item.scope}}</td>
                        <td>
                            <a target="_blank" style="color:rgb(51, 122, 183) !important;" :href="item.sid==7?'https://ecs-buy.aliyun.com/':item.sid==8?'https://aws.amazon.com/cn/pricing/?nc2=h_ql_pr&awsm=ql-3':item.sid==9?'https://www.azure.cn/pricing/overview/':item.sid==10?'https://buy.cloud.tencent.com/price/cvm/calculator':item.sid==11?'https://portal.huaweicloud.com/pricing#ecs':item.sid==12?'https://www.qingcloud.com/pricing#/InstancesKVM':''"><i class="iconfont icon-jiagechaxun" style="margin-right:5px;"></i>查看价格</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="table-score resourGroup-table colligate-tables" v-if="reslist==true">
                <thead>
                    <tr>
                        <th>数量</th>
                        <th>资源</th>
                        <th>规格</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in appServer">
                        <td>{{item.num}}</td>
                        <td>应用服务</td>
                        <td>
                            <p><span class="labelRed">{{item.cores}}</span>vCPU</p>
                            <p><span class="labelRed">{{item.ghz}}</span>处理器主频（Ghz）</p>
                            <p><span class="labelRed">{{item.ram}}</span>内存(GB)</p>
                            <p><span class="labelRed">{{item.localDisk}}</span>系统盘(GB)</p>
                            <p><span class="labelRed">{{item.os}}</span>操作系统</p>
                            <p><span class="labelRed">{{item.computeMappingFactor}}</span>资源平均利用率</p>
                            <p><span class="labelRed">{{item.monthlyUsage}}</span>每个月用量（天/月）</p>
                            <p><span class="labelRed">{{item.dailyUsage}}</span>每天用量（小时/天）</p>
                        </td>
                    </tr>
                    <tr v-for="db in dbServer">
                        <td>{{db.num}}</td>
                        <td>数据库服务</td>
                        <td>
                            <p><span class="labelRed">{{db.cores}}</span>vCPU</p>
                            <p><span class="labelRed">{{db.ghz}}</span>处理器主频（Ghz）</p>
                            <p><span class="labelRed">{{db.ram}}</span>内存(GB)</p>
                            <p><span class="labelRed">{{db.localDisk}}</span>系统盘(GB)</p>
                            <p><span class="labelRed">{{db.os}}</span>操作系统</p>
                            <p><span class="labelRed">{{db.computeMappingFactor}}</span>资源平均利用率</p>
                            <p><span class="labelRed">{{db.monthlyUsage}}</span>每个月用量（天/月）</p>
                            <p><span class="labelRed">{{db.dailyUsage}}</span>每天用量（小时/天）</p>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>网络存储</td>
                        <td>
                            <p><span class="labelRed">{{network.bandwidth}}</span>带宽（GB/月）</p>
                            <p><span class="labelRed">{{network.inbound}}</span>入站（GB/月）</p>
                            <p><span class="labelRed">{{network.outbound}}</span>出站（GB/月）</p>
                        </td>
                    </tr>
                    <tr v-for="stro in storage">
                        <td>{{stro.num}}</td>
                        <td>存储</td>
                        <td>
                            <p><span class="labelRed">{{stro.sna}}</span>共享存储(SAN)(GB)</p>
                            <p><span class="labelRed">{{stro.nsa}}</span>网络存储(NAS)(GB)</p>
                            <p><span class="labelRed">{{stro.cloudStorage}}</span>云存储(GB)</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 上云分析建议  -->
        <div class="colligate-title">
           <img src="../../../../assets/report/report-advise.png" alt="">
            上云分析建议
        </div>
          <!--<img src="../../../../assets/compare-nodata.png" alt="">
            <br>
            暂无建议-->
        <div class="advise-box">
            <textarea class="colligate-advise" v-model="advise" :class="advise==''?'advise-bg':''">
            </textarea>
            <span class="not-advise" v-if="advise==''">暂无建议</span>
        </div>
    </div>
</div>
</template>
<script>
import child from '../../../../components/steps/steps.vue'
import '../colligateReport/colligateReport.css'
import echarts from 'echarts'
import '../../../../components/pdf/html2canvas.js'
import jsPDF from 'jspdf/dist/jspdf.debug.js'

export default{
    name:'colligateReport',
    data(){
        return {
            charts:'',
            opiniondata:[],
            appId:'',
            result:{},
            queryType:'',
            resultlist:[],
            desc:'',
            compareResultList:[],
            appServer:[],
            dbServer:[],
            network:[],
            storage:[],
            information:{},
            advise:'',
            reslist:false,
            isclick:''
        }
    },
    mounted:function(){
        this.queryType = this.$route.query.type;
        this.appId = this.$route.query.id;
        this.information.realname = JSON.parse(sessionStorage.getItem("account")).realname;
        this.information.tenant = JSON.parse(sessionStorage.getItem("account")).tenant;
        //云规划
        this.$this.get('/broker/result/plan/'+this.appId+'').then((response)=>{
            //console.log('结果',response);
            let qinhe,shouyi;   
            this.result =  response.data.data; 
            this.information.proname = response.data.data.proname;
            this.information.appname = response.data.data.appname;
            this.information.protypeStr = response.data.data.protypeStr;
            this.information.frametypeStr = response.data.data.frametypeStr;
            this.information.createDt = response.data.data.createDt;
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
                    this.isclick = JSON.parse(response.data.data.appResults[i].result).id;
                }
            }
            //  if( this.isclick==1 && this.isclick==2 ){
            //     this.$layer.msg(" 因在云规划后不属于公有云服务类型，所以后台将助您直接进入综合报告。");
            //  }
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
        // 云选型
        this.getdata();
    },
    methods:{
        goBack:function(link){
            if(link=='comparelist'){
                this.$router.push({path:'/compareList'});
            }else if(link=='comparequestion'){
                this.$router.push({path:'/compareQuestion',query:{id:this.appId,type:this.queryType}});
            }
        },
        drawPie:function(id){
            console.log(this.opiniondata);
            this.charts = echarts.init(document.getElementById(id));
            this.charts.setOption({
                //backgroundColor:'#ccc',
                title: {
                    text: '',
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
        getdata:function(){
            this.$this.get('/broker/compare/result/'+this.appId+'').then((response)=>{
                this.compareResultList = response.data.data.datas;
                if(response.data.data.res!=null){
                    this.reslist = true;
                }
                this.appServer = JSON.parse(response.data.data.res.appServer);
                this.dbServer = JSON.parse(response.data.data.res.dbServer);
                this.network = JSON.parse(response.data.data.res.network);
                this.storage = JSON.parse(response.data.data.res.storage);
                //console.log('----',this.appServer); 
            }).catch((error)=>{})
        },
        getPdf:function(){
            let date = new Date();
            let time = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
            var pdf = new jsPDF('p', 'pt','a4');
            pdf.internal.scaleFactor = 1;
            var options = {
                pagesplit: true
            };
            pdf.addHTML($("#titBody"), options, function() {
                //console.log(pdf);
                pdf.save('综合报告'+time+'.pdf');
            });
        }
    },
    components:{
        child
    }
}
</script>