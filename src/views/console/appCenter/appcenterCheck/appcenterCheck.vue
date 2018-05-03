<template>
<div class="total">
    <div class="total-header">
        <span></span>
        <router-link class="zong" to="/appcenterList">应用市场</router-link>
        ><p class="comback">云匹配度分析器</p>
    </div>
    <div class="appcenterPrice appcenterCheck">
        <div class="appcheck-list">
            <div class="appcheck-item" v-for="(item,index) in questionlist">
                <div class="appcheck-item-head">{{item.name}}</div>
                <div class="appcheck-item-question" v-for="(it,n) in item.question">
                    <p class="appcheck-question-list"><span>Q</span>{{it.data.content}}</p>
                    <p class="appcheck-question-answer">
                        <span v-for="(box,i) in it.answer"><input type="radio" :name="it.data.code" :checked="box.boolean" v-on:click="checkid(index,n,i)">{{box.list.content}}</span>
                    </p>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
        <div class="button">
            <button class="aoocheck-btn" v-on:click="submit()">提交</button>
        </div>
        <div v-show="isshow" class="appcheck-canvastitle">云收益度和云亲和度分析示意图</div>
        <div v-show="isshow" id="main" style="width:100%;height:500px;"></div>
    </div>
</div>
</template>
<script>
import echarts from 'echarts'
import '../appcenterCheck/appcenterCheck.css';
export default {
    name:'appcenterCheck',
    data(){
        return {
            questionlist:[],
            charts:'',
            isshow:false
        }
    },
    mounted:function(){
        this.getQuestion();
        //this.drawBar();
    },
    methods:{
        getQuestion:function(){
            this.$this.get('/broker/app/tool/plan/simple/questions/32').then((response)=>{
                //console.log('---',response.data);
                for(let i in response.data.data){
                    this.questionlist.push({name:i,question:[]});
                }
                for(let i in response.data.data){
                    for(let k=0;k<this.questionlist.length;k++){
                        if(this.questionlist[k].name==i){
                            for(let n=0;n<response.data.data[i].length;n++){
                                this.questionlist[k].question.push({answer:[{boolean:false,list:response.data.data[i][n].optionSimples[0]},{boolean:false,list:response.data.data[i][n].optionSimples[1]}],data:response.data.data[i][n]});
                            }
                        }
                    }
                }
                //console.log('====',this.questionlist);
            }).catch((error)=>{})
        },
        checkid:function(index,ind,i){
            if(this.questionlist[index].question[ind].answer[i].boolean==false){
                this.questionlist[index].question[ind].answer[i].boolean=true;
                if(i==0){
                    this.questionlist[index].question[ind].answer[1].boolean=false;
                }else{
                    this.questionlist[index].question[ind].answer[0].boolean=false;
                }
            }else{
                this.questionlist[index].question[ind].answer[i].boolean=false;
            }
        },
        submit:function(){
            let arr = [];
            for(let i=0;i<this.questionlist.length;i++){
                for(let j=0;j<this.questionlist[i].question.length;j++){
                    for(let k=0;k<this.questionlist[i].question[j].answer.length;k++){
                        if(this.questionlist[i].question[j].answer[k].boolean==true){
                            arr.push(this.questionlist[i].question[j].answer[k].list.code);
                        }
                    }
                }
            }
            //console.log('arr',arr);
            if(arr.length>0){
                this.isshow = true;
                this.gethttp(arr);
            }else{
                this.$alert('为了提高分析结果的准确性，请分享您的选择！', '温馨提示', {
                    confirmButtonText: '我知道了',
                    customClass:'appCheck-alert',
                    showClose:false,
                    type: 'warning',
                    confirmButtonClass:'lay-btn-red'
                });
            }
            
        },
        gethttp:function(arr){
            let obj = {
                optCodes:arr
            };
            this.$this.post('/broker/app/tool/plan/simple/questions/result',JSON.stringify(obj)).then((response)=>{
                //console.log('---',response.data);
                this.drawBar(response.data.data);
            }).catch((error)=>{})
        },
        drawBar:function(arr){
            // let arr = [{scene: "技术", biz: 3, tech: 4},
            //         {scene: "集成复杂性", biz: 0, tech: -1}];
            let ytitle = [],tech = [],biz = [];
            for(let i=0;i<arr.length;i++){
                ytitle.push(arr[i].scene);
                tech.push(arr[i].tech);
                biz.push(arr[i].biz);
            }
            this.charts = echarts.init(document.getElementById('main'));
            this.charts.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data:['云亲和度', '云收益度'],
                    top:'10px',
                    right:'10px'
                },
                grid: {
                    left: '0',
                    right: '12%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'value',
                        name:'分数',
                        axisLine: {
                        lineStyle: {
                            color: '#c2c2c2'
                            }
                        },
                        nameTextStyle:{
                            color:'#333'
                        }
                    }
                ],
                color:['#F7A72C', '#da121a','#E15F2D','#55D0C5','#6380D3','#8261E0','#F7A72C','#DA121B','#E15E2D'],
                yAxis : [
                    {
                        type : 'category',
                        name:'场景',
                        axisTick : {show: false},
                        data : ytitle,
                        axisLabel:{  
                            interval: 0 ,
                            rotate:40 
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
                    
                ],
                series : [
                    {
                        name:'云收益度',
                        type:'bar',
                        barWidth:'20',
                        // label: {
                        //     normal: {
                        //         show: true,
                        //         position: 'inside'
                        //     }
                        // },
                        data:biz
                    },
                    {
                        name:'云亲和度',
                        type:'bar',
                        barWidth:'20',
                        // label: {
                        //     normal: {
                        //         show: true
                        //     }
                        // },
                        data:tech
                    },
                ]
            });
        },
    }
}
</script>
