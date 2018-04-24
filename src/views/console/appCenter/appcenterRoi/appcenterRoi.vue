<template>
<div class="total">
    <div class="total-header">
        <span></span>
        <router-link class="zong" to="/appcenterList">应用市场</router-link>
        ><p class="comback">预算分析</p>
    </div>
    <div class="appcenterRoi appcenterPrice" style="padding-bottom:100px;">
        <div class="appcplan-list"> 
            <el-form :model="matchBo" :rules="rules" ref="matchBo" label-width="80px">
                <el-form-item label="CPU" prop="cores" class="appcplan-from-item">
                    <el-input class="appcplan-input" type="number" placeholder="请输入CPU" v-model="matchBo.cores"></el-input>
                </el-form-item>
                <el-form-item label="内存" prop="ram" class="appcplan-from-item">
                    <el-input class="appcplan-input" type="number" placeholder="请输入内存" v-model="matchBo.ram"></el-input>
                </el-form-item>
                <el-form-item class="appcplan-btn">
                    <el-button type="button" class="appcplan-button" v-on:click="submit('matchBo')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div id="main" style="width:500px;height:500px;"></div>
    </div>
</div>
</template>
<script>
import echarts from 'echarts'
export default {
    name:'appcenterRoi',
    data(){
        return {
            charts:'',
            matchBo:{
                cores:'',
                ram:'',
            },
            rules:{
                ram: [
                    { required: true, message: '请输入内存容量', trigger: 'blur,change' },
                ],
                cores: [
                    { required: true, message: '请输入CPU核数', trigger: 'blur,change' },
                ],
            },
            clouldcompany:[],
        }
    },
    mounted:function(){
        var symbolSize = 20;
        this.draw();
        this.getCloudlist();
    },
    methods:{
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
        draw:function(){
            var data = [['6个月',15], ['1年',50], ['2年',100], ['3年',150], ['4年',180]];
            var data2 = [['6个月',10], ['1年',100], ['2年',200], ['3年',120], ['4年',80]];
            this.charts= echarts.init(document.getElementById('main'));

            this.charts.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            show: true
                        }
                    }
                },
                grid: {
                    top: '12%',
                    left: '10%',
                    right: '10%',
                },
                xAxis: [
                    {
                        type : 'category',
                        data:['6个月','1年','2年','3年','4年'],
                        name:'时间',
                    }
                ],
                yAxis: [
                    {
                        type : 'value',
                        name : '价格',
                    },
                    {
                        type:'value',
                        name:'roi'
                    }
                ],
                dataZoom: [
                    {
                        show: true,
                        start: 0,
                        end: 50,
                        zoomLock:false
                    }
                ],
                series : [
                    {
                        name: 'Budget 2011',
                        type: 'bar',
                        data: data
                    },
                    {
                        name: 'roi',
                        type: 'line',
                        data: data2
                    }
                ]
            });
        },
    }
}
</script>

