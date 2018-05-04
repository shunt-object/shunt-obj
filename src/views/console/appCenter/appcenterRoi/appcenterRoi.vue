<template>
<div class="total">
    <div class="total-header">
        <span></span>
        <router-link class="zong" to="/appcenterList">应用市场</router-link>
        ><p class="comback">预算收益分析助手</p>
    </div>
    <div class="appcenterRoi appcenterPrice" style="padding-bottom:100px;">
        <div class="appcplan-list"> 
            <el-form :model="matchBo" :rules="rules" ref="matchBo" label-width="80px">
                <el-form-item label="CPU" prop="cores" class="appcplan-from-item">
                    <el-input class="appcplan-input" type="number" min="1" placeholder="请输入CPU" v-model="matchBo.cores" v-on:blur="onblur('cores')"></el-input>
                </el-form-item>
                <el-form-item label="内存" prop="ram" class="appcplan-from-item">
                    <el-input class="appcplan-input" type="number" min="1" placeholder="请输入内存" v-model="matchBo.ram" v-on:blur="onblur('ram')"></el-input>
                </el-form-item>
                <el-form-item label="云厂商" prop="sid" class="appcenter-from-select">
                    <el-select v-model="matchBo.sid" placeholder="请选择云厂商">
                        <el-option v-for="item in clouldcompany" :label="item.name" :value="item.id" :key="JSON.stringify(item.id)"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="预算" prop="" class="appcenter-from-select">
                    <div class="appcenterRoi-budget">
                        <div class="budget-item" v-for="(year,index) in years">
                            {{year.name}}<br>
                            <input placeholder="请输入预算" type="number" v-model="year.value" min="1" v-on:blur="numberblur(index)">
                        </div>
                        <div class="clear"></div>
                    </div>
                </el-form-item>
                <el-form-item class="appcplan-btn">
                    <el-button type="button" class="appcplan-button" v-on:click="submit('matchBo')">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div v-if="length>0" class="appcheck-canvastitle">预算收益分析图</div>
        <div v-if="length>0">
            <div id="main" style="width:100%;height:500px;"></div>
        </div>
    </div>
</div>
</template>
<script>
import '../appcenterRoi/appcenterRoi.css'
import echarts from 'echarts'
export default {
    name:'appcenterRoi',
    data(){
        return {
            charts:'',
            matchBo:{
                budgetParams: [
                    // {
                    //     budget: '',
                    //     months: ''
                    // }
                ],
                cores: '',
                ram: '',
                sid: ''
            },
            rules:{
                ram: [
                    { required: true, message: '请输入内存容量', trigger: 'blur,change' },
                ],
                cores: [
                    { required: true, message: '请输入CPU核数', trigger: 'blur,change' },
                ],
                sid:[
                    { required: true, message: '请选择云厂商', trigger: 'blur,change' },
                ],
            },
            clouldcompany:[],
            years:[
                {name:'6个月',months:'6',value:''},
                {name:'1年',months:'12',value:''},
                {name:'2年',months:'24',value:''},
                {name:'3年',months:'36',value:''},
                {name:'4年',months:'48',value:''},
                {name:'5年',months:'60',value:''}
            ],
            length:0
        }
    },
    mounted:function(){
        //this.draw();
        this.getCloudlist();
    },
    methods:{
        numberblur:function(index){
            if(this.years[index].value<0){
                this.years[index].value = 1;
            }else{
                this.years[index].value = this.years[index].value;
            }
        },
        onblur:function(dom){
            if(dom=='cores'){
                this.matchBo.cores<0?this.matchBo.cores=1:this.matchBo.cores=this.matchBo.cores;
            }else if(dom=='ram'){
                this.matchBo.ram<0?this.matchBo.ram=1:this.matchBo.ram=this.matchBo.ram;
            }
        },
        getCloudlist:function(){
            this.$this.get('/broker/price/suppliers/list').then((res)=>{
               // console.log(res.data.data);
                for(let i=0;i<res.data.data.length;i++){                    
                    for(let n in res.data.data[i]){
                        this.clouldcompany.push({id:n,name:res.data.data[i][n]})
                    }
                }
            }).catch((error)=>{})
        },
        submit:function(value){
            this.$refs[value].validate((valid) => {
                if (valid) {
                    this.matchBo.budgetParams = [];
                    let n = 0;
                    for(let i=0;i<this.years.length;i++){
                        if(this.years[i].value!=''){
                            this.matchBo.budgetParams.push({budget:this.years[i].value,months:this.years[i].months});
                            n++;
                        }
                    }
                    //console.log(this.matchBo);
                    this.$this.post('/broker/app/math/roi',JSON.stringify(this.matchBo)).then((response)=>{
                        //console.log('---',response.data);
                        this.length = response.data.data.length;
                        let linedata = [],bardata = [];
                        for(let j=0;j<response.data.data.length;j++){
                            bardata.push([response.data.data[j].months/6==1?'6个月':response.data.data[j].months/6==2?'1年':response.data.data[j].months/6==4?'2年':response.data.data[j].months/6==6?'3年':response.data.data[j].months/6==8?'4年':response.data.data[j].months/6==10?'5年':'',response.data.data[j].price]);
                            if(n>0){
                                linedata.push([response.data.data[j].months/6==1?'6个月':response.data.data[j].months/6==2?'1年':response.data.data[j].months/6==4?'2年':response.data.data[j].months/6==6?'3年':response.data.data[j].months/6==8?'4年':response.data.data[j].months/6==10?'5年':'',response.data.data[j].roi]);
                            }
                        }
                        this.$nextTick(function() {
                            this.draw(linedata,bardata);
                        })
                        
                    }).catch((error)=>{})
                } else {
                    return false;
                }
            });
        },
        draw:function(linedata,bardata){
            //console.log(bardata);
            //var data = [['6个月',15], ['1年',50], ['2年',100], ['3年',150], ['4年',180]];
            this.charts= echarts.init(document.getElementById('main'));
            this.charts.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                grid: {
                    top: '12%',
                    left: '10%',
                    right: '13%',
                },
                xAxis: [
                    {
                        type : 'category',
                        data:['6个月','1年','2年','3年','4年'],
                        name:'时间',
                        axisLine: {
                            lineStyle: {
                                color: '#c2c2c2'
                            }
                        },
                        nameTextStyle:{
                            color:'#666'
                        }
                    }
                ],
                legend:{
                    data:['价格','预算'],
                    right:'11%',
                    top:'10px'
                },
                color:['#F7A72C', '#da121a','#E15F2D','#55D0C5','#6380D3','#8261E0','#F7A72C','#DA121B','#E15E2D'],
                yAxis: [
                    {
                        type : 'value',
                        name : '价格',
                        axisLabel: {
                            formatter: '{value}'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#c2c2c2'
                            }
                        },
                        nameTextStyle:{
                            color:'#666'
                        }
                    },
                    {
                        type:'value',
                        name:'预算',
                        axisLabel: {
                            formatter: '{value}%'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#c2c2c2'
                            }
                        },
                        nameTextStyle:{
                            color:'#666'
                        }
                    }
                ],
                dataZoom: [
                    {
                        type: 'inside',
                        start: 0,
                        end: 50,
                    },{
                        start: 0,
                        end: 50,
                    }
                ],
                series : [
                    {
                        name: '价格',
                        type: 'bar',
                        barWidth : 20,//柱图宽度
                        barMaxWidth:30,//最大宽度
                        data: bardata

                    },
                    {
                        name: '预算',
                        type: 'line',
                        yAxisIndex: 1,
                        data: linedata
                    }
                ]
            });
        },
    }
}
</script>

