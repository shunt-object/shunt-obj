<template>
<div class="total">
<div class="total-header not-print">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback">综合报告</p>
</div>
    <child index="7" start="6" :type="$route.query.type" :id="$route.query.id"></child>
    <div class="tites" id="pdf-wrap" style="background: #f8fafd;padding: 17px 23px;">
        <div class="from-headers" style="background:#fff;padding:20px;">
            <div class="from-head" style="color:#fff;">
                <div class="from-head-left" style="float:left;padding-left:2%"><img src="../../../../assets/logoers.png" alt=""><br>您的专属服务顾问</div>
                <div class="from-head-right" style="float:right;padding-right:2%">{{information.proname}} 上云分析综合报告</div>
            </div>
            <div class="colligate-heade">
                <button class="pointersd buttHover" @click="pointers()"><i class="iconfont icon-dayinji1" style="margin-right: 2px !important;"></i>打印</button>
                <button class="exportBtn buttHover" v-on:click="getPdf()"><i class="iconfont icon-icon-" style="margin-right:3px"></i>导出</button>
            </div>
            <div class="colligateReport" id="titBody">
                <!-- 基本信息 -->
                <div class="colligate-title">
                    <i class="iconfont icon-jibenxinxi main-color" style="color:#da121a"></i>基本信息
                </div>
                <div class="colligate-list" style="padding:0 2em;">
                    <table class="information-table">
                        <thead>
                            <tr>
                                <th>企业名称</th>
                                <th>分析人</th>
                                <th>云分析名称</th>
                                <th>负载名称</th>
                                <th>工作负载类型</th>
                                <th>工作负载架构</th>
                                <th>创建时间</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{information.tenant}}</td>
                                <td>{{information.realname}}</td>
                                <td>{{information.proname}}</td>
                                <td>{{information.appname}}</td>
                                <td>{{information.protypeStr}}</td>
                                <td>{{information.frametypeStr}}</td>
                                <td>{{information.createDt}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!--拓扑图-->
                <div class="colligate-title">
                    <i class="iconfont icon-erji-wangluotuopu main-color" style="color:#da121a"></i>拓扑图
                </div>
                <topologyModules :type="$route.query.type" :appId="$route.query.id"></topologyModules>               
                <!-- 云规划报告 -->
                <div class="colligate-title">
                    <i class="iconfont icon-zengshoushuju main-color" style="color:#da121a"></i>云规划报告详情
                </div>
                <div class="colligate-list" style="padding:0 2em;">
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
                                    <span class="score-name" v-if="item.moduleId!=1">{{item.moduleName}}</span>
                                    <span class="score-name" v-else>{{item.moduleName}}</span>
                                    <span class="score-val" v-if="item.moduleId!=1">{{item.result}}</span>
                                    <span class="score-val" v-else>{{JSON.parse(item.result).sname==undefined?'--':JSON.parse(item.result).sname}}</span>
                                </p>
                            </div>
                        </div>
                        <div class="clould-desc" v-html="desc"></div>
                    </div> 
                    <!-- 云选型 -->
                    <div class="colligate-title">
                        <i class="iconfont icon-bengchefenleijiageguanli" style="color:#da121a"></i>&nbsp云选型报告详情
                    </div>
                    <compareModules :type="$route.query.type" :appId="$route.query.id" :isClass="isClass"></compareModules>
                    <!-- 云设计 -->
                    <div class="colligate-title">
                        <i class="iconfont icon-peizhiguanli" style="color:#da121a"></i>&nbsp云设计配置信息详情
                    </div>
                    <designModules :type="$route.query.type" :appId="$route.query.id"></designModules>
                    <!-- 上云分析建议  -->
                    <div class="colligate-title">
                        <i class="iconfont icon-pingjiabaogao main-color"></i>上云分析建议
                    </div>
                    <!--投资回报率--> 
                    <roiModules :type="$route.query.type" :appId="$route.query.id" :isclick="isclick"></roiModules>
                    <!--场景占比分析 多云优选意向订单场景分析图-->
                    <sceneModules :type="$route.query.type" :appId="$route.query.id"></sceneModules>
                    <!--建议-->
                    <div class="system-advise">
                        <p class="advise-title"><i class="iconfont icon-sheji1 main-color"></i>上云分析CloudBroker²评估建议</p>
                        <p class="advise-content" v-if="Issystem==false">{{system}}
                            <span style="cursor:pointer;margin-left:20px;" v-on:click="systemEdit()"><i class="iconfont icon-bianji"></i><span style="color:#555;">编辑</span></span><!--#2eabf5-->
                        </p>
                        <div class="advise-system-input" v-show="Issystem">
                            <textarea class="advise-system-text" v-model="system">{{system}}</textarea>
                        </div>
                        <div class="system-btn" v-show="Issystem">
                            <button class="system-no" v-on:click="systemSave('no')"><i class="iconfont icon-shanchuguanbicha2"></i>取消</button>
                            <button class="system-yes" v-on:click="systemSave('yes')"><i class="iconfont icon-duihao2"></i>保存</button>                    
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="self-advise">
                        <p class="advise-title"><i class="iconfont icon-jianyi main-color"></i>上云分析自我评估建议</p>
                        <div style="padding:0 2em;">
                            <textarea class="colligate-advise" placeholder="请输入上云分析自我评估建议" v-model="advise">
                            </textarea>
                        </div>                
                    </div>
                    <!-- 页尾 -->
                    <div class="pagefooter">
                        <div class="page-bigline"></div>
                        <div class="page-smallline"></div>
                        <div class="page-left">
                            <img src="../../../../assets/login-logo.png" alt="">
                            <p class="page-p">联系电话：400-828-7308</p>
                            <p class="page-p">邮箱地址：Help@csb-china.com</p>
                            <p class="page-p">官网地址：www.csb-china.com</p>
                        </div>
                        <div class="page-right">
                            <img style="width:80px;height:80px;" src="../../../../assets/report/weixin.jpg" alt="">
                            <p class="page-p">您的专属服务顾问</p>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- -->
            </div>
        </div>  
    </div> 
    <!-- 弹框 -->  
    <feedback :feedback="feeddialog"  @my-event="getMyEvent"></feedback>
</div>
</template>

<object id="factory" style="display:none" viewastext classid="clsid:1663ed61-23eb-11d2-b92f-008048fdd814" codebase="ScriptX.cab#Version=5,60,0,360"></object>

<script>
import child from '../../../../components/steps/steps.vue'
import '../colligateReport/colligateReport.css'
import echarts from 'echarts'
import html2Canvas from '../../../../components/pdf/html2canvas.js'
import jsPDF from 'jspdf/dist/jspdf.debug.js'
import topologyModules from '../colligateReport/topologyModules.vue'
import compareModules from '../colligateReport/compareModules.vue'
import designModules from '../colligateReport/designModules.vue'
import roiModules from '../colligateReport/roiModules.vue'
import sceneModules from '../colligateReport/sceneModules.vue'
import feedback from '../../consolePage/feedback.vue'
export default{
    name:'colligateReport',
    data(){
        return {
            inds:0,
            charts:'',
            opiniondata:[],
            appId:'',
            result:{},
            queryType:'',
            resultlist:[],
            desc:'',
            information:{},
            advise:'',
            reslist:false,
            isclick:'',
            system:'',
            Issystem:false,
            systemold:'',
            isClass:false,
            feeddialog:{
                boolean:false
            },
            point:false,
            pdfs:false,
        }
    },
    mounted:function(){
        this.queryType = this.$route.query.type;
        this.appId = this.$route.query.id;
        this.information.realname = JSON.parse(sessionStorage.getItem("account")).realname;
        this.information.tenant = JSON.parse(sessionStorage.getItem("account")).tenant;
        this.getplan();//云规划        
        document.onkeyup = function(evnet){
            if (evnet.keyCode == '13') {               
                return false;
            }
        }
    },
    methods:{ 
        getMyEvent:function(msg){
            if(msg==false){
                let that = this;
                setTimeout(function(){
                    if(that.point==true){
                        that.getpoint();
                    }else if(that.pdfs==true){
                        that.pdf();
                    }
                },500)
            }
        },
        getplan:function(){
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
                        this.system = JSON.parse(response.data.data.appResults[i].result).advice;
                        this.systemold = JSON.parse(response.data.data.appResults[i].result).advice;
                        this.desc = JSON.parse(response.data.data.appResults[i].result).description;
                        this.isclick = JSON.parse(response.data.data.appResults[i].result).id;
                    }
                }
                this.opiniondata =  [{
                    name:response.data.data.appname,
                    value:[shouyi,qinhe]
                }] 
                this.$nextTick(function() {
                    this.drawPie('main')
                })       
            }).catch((error)=>{
            }) 
        },
        goBack:function(link){
            if(link=='comparelist'){
                this.$router.push({path:'/compareList'});
            }else if(link=='comparequestion'){
                this.$router.push({path:'/compareQuestion',query:{id:this.appId,type:this.queryType}});
            }
        },
        systemEdit:function(){
            this.Issystem = true;
        },
        systemSave:function(dom){
            this.Issystem = false;
            if(dom=='no'){
                this.system = this.systemold;
            }
        },
        drawPie:function(id){
            this.charts = echarts.init(document.getElementById(id));
            this.charts.setOption({
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
                    name: '云亲和度',
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
                                       // color: "#409EFF",
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
                                       // color: "#409EFF",
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
                                        //color: "#409EFF",
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
                                        color: "#fff",
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
       getPdf:function(){
            this.feeddialog.boolean = true;
            this.point = false; 
            this.pdfs = true;
       },
       pdf:function(){
            let date = new Date();
            let time = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
            var pdf = new jsPDF('p', 'pt','a4');
            pdf.internal.scaleFactor = 1.8;//可以调整缩放比例
            var options = {
                pagesplit: true
            };
            $('#pdf-wrap').css({"background":"#fff","border-width":"0px"});
            let that = this;
            this.isClass = true;
            pdf.addHTML($("#pdf-wrap"), options, function() {
                pdf.save('综合报告'+time+'.pdf');
                that.isClass = false;
            });
       },
      pointers:function(){
            this.feeddialog.boolean = true;
            this.point = true; 
            this.pdfs = false; 
     },
        getpoint:function(){
            var a =$("#difference-box").html();
            $("#boxinnerHtml").html(a);
            $("#difference-box").addClass("pala");
            window.print();   //打印当前窗口
            $("#boxinnerHtml").html("");
            $("#difference-box").removeClass("pala");    
        },
    },
    components:{
        child,
        topologyModules,
        compareModules,
        designModules,
        roiModules,
        sceneModules,
        feedback
    }
}
</script>