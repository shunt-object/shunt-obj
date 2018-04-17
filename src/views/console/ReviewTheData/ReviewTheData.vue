<template>
<div class="total">
<div class="total-header">
    <span></span>
    总览
    ><p class="comback">意见反馈</p>
</div>
<div class="row reviewthe-echarts">
    <div class="col-md-7">
        <div class="reviewthe-tu-title">意见反馈采集统计</div>
        <div class="reviewthe-tu-list">
            <div class="reviewthe-bar" id="reviewthe-bar" style="width:100%;height:100%;"></div>
        </div>
    </div>
    <div class="col-md-5">
        <div class="reviewthe-tu-title">意见反馈占比分析</div>
        <div class="reviewthe-tu-title">意见反馈类型占比分析</div>
        <div class="reviewthe-tu-list">
            <div class="reviewthe-pie" id="reviewthe-pie" style="width:100%;height:100%;"></div>
        </div>
    </div>
</div>
<div class="reviewthe-box">
    <table class="reviewthe-table" id="tabelId">
        <thead>
            <tr>
                <td>用户账号</td>
                <td>用户姓名</td>
                <td>反馈类型</td>
                <td>问题描述</td>
                <td>反馈时间</td>
            </tr>                
        </thead>
        <tbody>
            <tr v-for="re in respones">
                <td>{{re.userSimple.username}}</td>
                <td>{{re.userSimple.realname}}</td>
                <td>{{re.type.name}}</td>
                <td>{{re.content}}</td>
                <td>{{re.createDt}}</td>
            </tr>
        </tbody>
    </table>
</div>
</div>
</template>
<style>
.reviewthe-echarts{
    padding:20px 5px; background:#fff; 
}
.reviewthe-tu-title{
    width:100%; height:35px; background:#F6F6F6; text-align:left; line-height:35px; text-indent:10px;
}
.reviewthe-tu-list{
    background:#fff; box-shadow: 0 2px 2px 0 hsla(0,0%,79%,.4); height:300px;
}
.reviewthe-box{
    padding:20px; background:#fff; width:100%; margin:20px 0;
}
.reviewthe-table{
    width:100%;
}
.reviewthe-table thead tr td{
    background: #f3f3f3; border: 1px solid #e5e5e5; padding: 10px 0; color: #555; font-weight: 700;
}
.reviewthe-table tbody tr td{
    font-size: 12px; color: #2b2b2b; border: 1px solid #e5e5e5; padding: 15px 0; line-height: 20px;
}
.reviewthe-table tbody tr:nth-child(2n){
    background: rgb(247, 247, 247);
}
</style>
<script>
import "../ReviewTheData/datatable.css";
import echarts from 'echarts'
export default{
    data(){
        return {
            charts:'',
            respones:[],
            barlist:[],
            pielegend:[],
            piedata:[]
        }
    },
    created:function(){
        let obj = {
            "pageReq": {
                "page": 0,
                "size": 99999999
            }
        };
        this.$http.post('/broker/feedback/page/list',obj).then((response)=>{
            // this.respones = eval("(" + response.body +")");
            this.respones = response.body.data.content;
        }).catch((error)=>{
        })
        this.getBar();
        this.getPie();
    },
    methods:{
        getBar:function(){
            this.$this.get('/broker/feedback/analysis/month/total').then((response)=>{
                //console.log(response);
                for(let i=0;i<response.data.data.length;i++){
                    this.barlist.push([response.data.data[i].months,response.data.data[i].totalnum]);
                }  
                this.$nextTick(function() {
                    this.canversBar('reviewthe-bar')
                }) 
            }).catch((error)=>{
            })
        },
        getPie:function(){
            this.$this.get('/broker/feedback/analysis/type/total').then((response)=>{
                //console.log(response);
                for(let i=0;i<response.data.data.length;i++){
                    this.pielegend.push(response.data.data[i].name);
                    this.piedata.push({value:response.data.data[i].totalnum, name:response.data.data[i].name});
                }
                this.$nextTick(function() {
                    this.canversPie('reviewthe-pie')
                })
            }).catch((error)=>{
            })
        },
        canversBar:function(dom){
            let that = this;
            this.charts = echarts.init(document.getElementById(dom));
            this.charts.setOption({              
                tooltip:{
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    },
                    //formatter: '采集数据: {c1}'
                },
                legend: {
                    data: ['采集数据'],
                    x:'77%',
                    //right:'10px',
                    y:'10px'
                },
                xAxis: [{
                    name:'月份',
                    type:'category',
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisPointer:{
                        type:'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    nameTextStyle:{
                        color:'#999'
                    },
                    nameLocation:'end'
                }],
                yAxis: [{
                    type:'value',
                    name:'数量',
                    axisLabel: {
                        formatter: '{value}'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    nameTextStyle:{
                        color:'#999'
                    },
                }],
                series: [
                    {
                        name:'采集数据',
                        type:'bar',
                        data:this.barlist,
                        itemStyle:{
                            normal:{
                                color:'#f7a72c'
                            }
                        },
                        barWidth : 25,//柱图宽度
                    }
                ]
            })
        },
        canversPie:function(dom){
            this.charts = echarts.init(document.getElementById(dom));
            this.charts.setOption({
                 title : {
                    text: '',
                    subtext: '',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                color:['#F7A72C', '#da121a','#E15F2D','#55D0C5','#6380D3','#8261E0','#F7A72C','#DA121B','#E15E2D'],
                legend: {
                    orient : 'vertical',
                    x : '79%',
                    y:'10px',
                    data:this.pielegend
                },
                calculable : true,
                series : [
                    {
                        name:'占比来源',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:this.piedata,
                        itemStyle:{
                            normal:{
                                borderColor:'none',
                                borderWidth:'0'
                            }
                        },
                        center:['50%','50%']
                    }
                ]
            })
        },
    }
}
</script>