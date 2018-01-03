<template>
<div>
    <!--定性问题-->
    <div class="list">
        <p v-if="cloud==''">{{quetionList.content}}</p>
        <p v-if="cloud==''">
            <span v-for="item in quetionList.option">
                <input type="radio" :name="quetionList.code" v-on:click="fn(quetionList.code,item.code)" v-model="checked">{{item.content}}
            </span>
        </p>
        <p v-else>{{cloud}}</p>
    </div>
    <!--定量问题 收益度-->
    <div class="liang">
        <p v-for="(i,index) in qinhe">{{i.content}}
            <span v-for="(item,itemIndex) in i.option" >
                <input type="radio" :name="i.code" v-if="i.qtype==1" v-on:click="qin(index,i.qtype,i.code,item.code)" :checked="i.selectOption==item.code?true:false">
                <input :id="item.code" type="checkbox" :checked="i.selectOption[itemIndex]==item.code?true:false" v-else v-on:click="qin(i.selectOption,i.qtype,i.code,item.code)">
                {{item.content}}
            </span>
        </p>
        <button v-on:click="result(2)">定量结果</button>
    </div>
    <!--定量问题 亲和度-->
    <div class="liang">
        <p v-for="i in shouyi">{{i.content}}
            <span v-for="(item,itemIndex) in i.option">
                <input type="radio" :checked="i.selectOption==item.code?true:false" :name="i.code" v-if="i.qtype==1" v-on:click="qin(i.selectOption,i.qtype,i.code,item.code)">
                <input type="checkbox":checked="i.selectOption[itemIndex]==item.code?true:false" v-else v-on:click="qin(i.selectOption,i.qtype,i.code,item.code)">{{item.content}}
            </span>
        </p>
        <button v-on:click="result(3)">收益结果</button>
    </div>
    <!--表格 -->
        <table id="example">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
            </tr>
        </tbody>
 
    </table>
    <div id="main" style="width: 600px;height: 400px;"></div>
</div>
</template>
<script> 
import echarts from 'echarts'
$(document).ready(function() {
    $('#example').dataTable( {
        "bPaginate":true,
    })
} )
export default{
    name:'plan',
    data(){
        return {
            quetionList:[],
            appId:2,
            qinhe:[],
            serverce:'',
            cloud:'',
            checked:false,
            shouyi:[],
            selectedId:[],
            indexI:0,
            charts:'',
            opiniondata:[{
                name: '王小虎',
                sales: 80,
                services: 70
            }]
        }
    },
    mounted:function(){
       // this.appId = sessionStorage.getItem('appId');
       this.appId = 12;
        //this.appId = sessionStorage.getItem('appId');
        let qcode = -1;
        let optcode = -1;
        console.log('appId',sessionStorage.getItem('appId'));
        this.getdata(this.appId,qcode,optcode);
        //定量问题
        this.getLiang(this.appId,2);
        this.getLiang(this.appId,3);
        //
        this.$this.get('/broker/result/plan/'+this.appId+'').then((response)=>{
            console.log('结果',response);                
        }).catch((error)=>{
            
        }) 
        //图表
        this.$nextTick(function() {
            this.drawPie('main')
        })
        
    },
    methods:{
        fn:function(qcode,optcode){
            this.getdata(this.appId,qcode,optcode);
        },
        getdata:function(appId,qcode,optcode){
            let that = this;
            this.$this.get('/broker/plan/questions/analysis/'+appId+'/'+qcode+'/'+optcode+'').then((response)=>{
                console.log(response);
                if(response.data.code=='1'){
                    that.quetionList = response.data.data;
                    that.checked = false;
                }else if(response.data.code=='2'){//结果
                    that.cloud = response.data.data.sname;
                    that.serverce = response.data.data.id;
                }
                
            }).catch((error)=>{
                //console.log(error);
            })
        },
        getLiang:function(appId,type){//type=2 云受益；type=3 亲和度
            let that = this;
            this.$this.get('/broker/plan/questions/'+appId+'/{type}?type='+type+'').then((response)=>{
                if(type==2){
                    that.qinhe = response.data.data;
                }else{
                    that.shouyi = response.data.data;
                }
                //qtype==1单选qtype==2多选
                //console.log(response);                
            }).catch((error)=>{
                //console.log(error);
            }) 
        },
        qin:function(selectOption,qtype,qcode,optcode){
            //qtype==1单选qtype==2多选
            let boolean ;
            let n = 0;
            let isDouble ;
            if(qtype==1){
                boolean = true;
                isDouble = false;
            }else{
                this.indexI++;
                isDouble = true;
                this.selectedId.push(optcode);
                if(selectOption==null){
                    if(this.indexI==1){
                        boolean = true;
                    }else{
                        for(let i=0;i<this.selectedId.length;i++){
                            if(optcode==this.selectedId[i]){
                                n++;
                            }
                        }
                        n%2==0?boolean=false:boolean=true;
                    }
                }else{
                    for(let a=0;a<selectOption.length;a++){
                        if(optcode==selectOption[a]){
                            boolean = false;
                        }else{
                            for(let i=0;i<this.selectedId.length;i++){
                                if(optcode==this.selectedId[i]){
                                    n++;
                                }
                            }
                            n%2==0?boolean=false:boolean=true;
                        }
                    }
                }
            }
            let obj = {
                    "appid":this.appId,
                    "optcode":optcode,
                    "questionCode":qcode,
                    "select":boolean,
                    "multi":isDouble
            };
            let str = JSON.stringify(obj);
            this.save(str);
        },
        result:function(type){
           this.$this.get('/broker/plan/questions/result/'+this.appId+'/3/{type}?type='+type+'').then((response)=>{
                console.log('result',response);                
            }).catch((error)=>{
                //console.log(error);
            }) 
        },
        save:function(str){
            this.$this.post('/broker/plan/saveUserPlan',str).then((response)=>{
                console.log('plan',response);                
            }).catch((error)=>{
                
            }) 
        },
        drawPie:function(id){
            this.charts = echarts.init(document.getElementById(id));
            this.charts.setOption({
                backgroundColor:'#ccc',
                title: {
                    text: '服务四象限图'
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
                            color: '#3259B8'
                        }
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
                            color: '#3259B8'
                        }
                    }
                },
                visualMap: {
                    min: 0,
                    max: 800,
                    dimension: 0,
                    left: 'right',
                    top: 'top',
                    text: ['高', '低'], // 文本，默认为数值文本
                    calculable: true,
                    itemWidth: 18,
                    itemHeight: 160,
                    textStyle: {
                        color: '#3259B8',
                        height: 56,
                        fontSize: 11,
                        lineHeight: 60,
                    },
                    inRange: {
                        color: ['#7AB7F7', '#b45ef7']
                    },
                    padding: [50, 20],
                    orient: 'horizontal',
                },
                series: [{
                    type: 'scatter',
                    data: this.seriesData(),
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
                                name: '改进',
                                itemStyle: {
                                    normal: {
                                        color: 'red'
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
                                name: '淘汰',
                                itemStyle: {
                                    normal: {
                                        color: 'green',
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
                                name: '保持',
                                itemStyle: {
                                    normal: {
                                        color: 'yellow',
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
                                name: '激励',
                                itemStyle: {
                                    normal: {
                                        color: 'blue',
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
        seriesData:function(){
            this.opiniondata.map(function(item, index, array) {
                return {
                    name: item['name'],
                    value: [item['sales'], item['services']]
                }
            })
        }
    }
}
</script>