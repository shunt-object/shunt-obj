<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link to="/consolePage">总览</router-link> > 云比较
</div>
<child index="4" start="0" :type="queryType"></child>
<div class="compare-line"></div>
<div class="compare-container">
    <div class="compare-title">对比供应商</div>
    <table class="table-score">
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
                <td>2000-3000/月</td>
            </tr>
        </tbody>
    </table>
    <table class="table-score resourGroup-table">
        <thead>
            <tr>
                <th>数量</th>
                <th>资源</th>
                <th>规格</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{appServer.num}}</td>
                <td>应用程序</td>
                <td>
                    <p>{{appServer.cores}}Vcpu</p>
                    <p>{{appServer.ghz}}处理器主频（Ghz）</p>
                    <p>{{appServer.ram}}内存(GB)</p>
                    <p>{{appServer.localDisk}}系统盘(GB)</p>
                    <p>{{appServer.os}}操作系统</p>
                    <p>{{appServer.computeMappingFactor}}计算机映射因子</p>
                    <p>{{appServer.monthlyUsage}}每个月用量（天/月）</p>
                    <p>{{appServer.dailyUsage}}每天用量（小时/天）</p>
                </td>
            </tr>
            <tr>
                <td>{{dbServer.num}}</td>
                <td>数据库服务</td>
                <td>
                    <p>{{dbServer.cores}}Vcpu</p>
                    <p>{{dbServer.ghz}}处理器主频（Ghz）</p>
                    <p>{{dbServer.ram}}内存(GB)</p>
                    <p>{{dbServer.localDisk}}系统盘(GB)</p>
                    <p>{{dbServer.os}}操作系统</p>
                    <p>{{dbServer.computeMappingFactor}}计算机映射因子</p>
                    <p>{{dbServer.monthlyUsage}}每个月用量（天/月）</p>
                    <p>{{dbServer.dailyUsage}}每天用量（小时/天）</p>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>网络存储</td>
                <td>
                    <p>{{network.bandwidth}}带宽（GB/月）</p>
                    <p>{{network.inbound}}入站（GB/月）</p>
                    <p>{{network.outbound}}出站（GB/月）</p>
                </td>
            </tr>
            <tr>
                <td>{{storage.num}}</td>
                <td>存储</td>
                <td>
                    <p>{{storage.sna}}共享存储(SAN)(GB)</p>
                    <p>{{storage.nsa}}网络存储(NAS)(GB)</p>
                    <p>{{storage.cloudStorage}}云存储(GB)</p>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="compareResult-btn">
        <button class="compare-btn compare-nextBtn">下一步</button>
        <button class="compare-btn compare-prevBtn" v-on:click="prev()">上一步</button>        
    </div>
    <div class="clear"></div>
</div>
</div>
</template>
<script>
import child from '../../../../components/steps/steps.vue'
import '../compareResult/compareResult.css'
export default{
    name:'compareResult',
    data(){
        return {
            compareResultList:[],
            resourceGroup:[],
            appId:'',
            queryType:'',
            appServer:[],
            dbServer:[],
            network:[],
            storage:[]
        }
    },
    mounted:function(){
        this.queryType = this.$route.query.type;
        this.appId = this.$route.query.id;
        this.getdata();
    },
    methods:{
        getdata:function(){
            this.$this.get('/broker/compare/result/'+this.appId+'').then((response)=>{
                this.compareResultList = response.data.data.datas;
                this.appServer = JSON.parse(response.data.data.res.appServer);
                this.dbServer = JSON.parse(response.data.data.res.dbServer);
                this.network = JSON.parse(response.data.data.res.network);
                this.storage = JSON.parse(response.data.data.res.storage);
                //console.log(this.appServer); 
            }).catch((error)=>{})
        },
        prev:function(){
            this.$router.push({path:'/compareQuestion',query:{id:this.appId}});
        }
    },
    components:{
        child
    }
}
</script>