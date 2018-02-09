<template>
<div class="total">
<div class="total-header">
    <span></span>
    数据决策
</div>
<img src="../../../../assets/juece.jpg" alt="" style="width:100%;">
<!--<div class="datadecision">
    <div class="radar" id="radar" style="width:500px;height:500px;background:#ffffff;"></div>
    <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-6"></div>
    </div>
</div>-->
</div>
</template>
<script>
import echarts from 'echarts'
import '../dataDcision/dataDcision.css'
export default{
    name:'dataDcision',
    data(){
        return {
            charts:''
        }
    },
    mounted:function(){
        // let groupid;
        // this.$this.get('/broker/user/analysis/types/'+groupid).then((response)=>{

        // }).catch((error)=>{

        // })
        // this.$this.get('/broker/compare/parent/types').then((response)=>{
            
        // }).catch((error)=>{

        // })
        // this.$this.get('/broker/user/analysis/adviceServer/2').then((response)=>{
            
        // }).catch((error)=>{

        // })
        // this.$nextTick(function() {
        //     this.drawPie('radar')
        // })
    },
    methods:{
        drawPie:function(dom){
            this.charts = echarts.init(document.getElementById(dom));
            this.charts.setOption({
                title : {
                    text: '预算 vs 开销（Budget vs spending）',
                    subtext: '纯属虚构'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    orient : 'vertical',
                    x : 'right',
                    y : 'bottom',
                    data:['预算分配','实际开销']
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
                polar : [
                {
                    indicator : [
                        { text: '销售', max: 6000},
                        { text: '管理', max: 16000},
                        { text: '信息技术', max: 30000},
                        { text: '客服', max: 38000},
                        { text: '研发', max: 52000},
                        { text: '市场', max: 25000}
                        ]
                    }
                ],
                calculable : true,
                series : [
                    {
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        data : [
                            {
                                value : [4300, 10000, 28000, 35000, 50000, 19000],
                                name : '预算分配'
                            },
                            {
                                value : [5000, 14000, 28000, 31000, 42000, 21000],
                                name : '实际开销'
                            }
                        ]
                    }
                ]
            })
        }
    }
}
</script>