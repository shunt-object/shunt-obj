<template>
<div>
    <div class="colligateBuy" v-if="isclick!=2 && isclick!=3">
        <p class="advise-title"><i class="iconfont icon-equipments main-color"></i>多云优选意向订单场景分析图</p>
        <div style="padding:0 2em;">
            <div class="colligateBuy-echarts">
                <div class="colligateBuy-type" id="colligateBuy-type" style="width:100%;height:100%;"></div>
            </div>
        </div>                        
    </div>
</div>
</template>
<script>
import echarts from 'echarts'
export default{
    props:["appId","type","isclick"],
    data(){
        return {
            dbScaleservies:[],
            dbScaleName:[],
            dbScaleType:[],
            charts:'',
        }
    },
    mounted:function(){
        this.gettype();
    },
    methods:{
        gettype:function(){
            this.$this.get('/broker/prop/typedata/esc-csb/-1').then((response)=>{
                //console.log('----',response);
                for(let i=0;i<response.data.data.length;i++){
                    this.dbScaleType.push(response.data.data[i].name);
                }
                this.dbScale(this.dbScaleType);
            }).catch((error)=>{
            })
        },
        dbScale:function(dbScaleType){
            let str = {"appids":[this.appId]};
            let app = [],db = [];
            for(let n=0;n<dbScaleType.length;n++){
                app.push([dbScaleType[n],0]);
                db.push([dbScaleType[n],0]);
            }
            this.$this.post('/broker/price/purchasin/scene',JSON.stringify(str)).then((response)=>{
                for(let i=0;i<response.data.data.length;i++){
                    if(response.data.data[i].vmType=='应用服务'){
                        for(let j=0;j<app.length;j++){
                            if(response.data.data[i].sceneType==app[j][0]){
                                app[j][1] = response.data.data[i].num;
                            }
                        }
                    }else{
                        for(let k=0;k<db.length;k++){
                            if(response.data.data[i].sceneType==db[k][0]){
                                db[k][1] = response.data.data[i].num;
                            }
                        }
                    }
                    this.dbScaleName.push(response.data.data[i].vmType);
                }  
                this.$nextTick(function() {
                    this.dbScaleCanvas('colligateBuy-type',dbScaleType,app,db);
                })
            }).catch((error)=>{})
        }, 
        dbScaleCanvas:function(dom,dbScaleType,app,db){
            this.charts = echarts.init(document.getElementById(dom));
            this.charts.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: this.dbScaleName,
                    top:'10',
                    right:'10'
                },
                color:['#F7A72C', '#da121a','#E15F2D','#55D0C5','#6380D3','#8261E0','#F7A72C','#DA121B','#E15E2D'],
                grid: {
                    left: '2%',
                    right: '8%',
                    bottom: '2%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'category',
                    name:'类型',
                    data: dbScaleType,
                    axisLabel:{
                        interval:0,  
                        rotate:30                    
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
                    type: 'value',
                    name:'数量',
                    axisLine: {
                        lineStyle: {
                            color: '#c2c2c2'
                        }
                    },
                    nameTextStyle:{
                        color:'#333'
                    }
                },
                //series: dbScaleservies
                series:[
                    {
                        name: '应用服务',
                        type: 'bar',
                        stack: '总量',
                        barWidth : 25,//柱图宽度
                        data: app
                    },
                    {
                        name: '数据库服务',
                        type: 'bar',
                        stack: '总量',
                        barWidth : 25,//柱图宽度
                        data: db
                    }
                ]
            })
        },     
    }
}
</script>