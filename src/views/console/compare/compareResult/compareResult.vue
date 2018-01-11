<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link to="/consolePage">总览</router-link> > 云比较
</div>
<div class="plan-box">
    <div class="plan-container">
        <child index="4" start="0" :type="queryType"></child>
        <h4>对比供应商</h4>
        <table class="table-box table table-striped">
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
        <div class="row resourceCroup-head">
            <div class="col-md-4">数量</div>
            <div class="col-md-4">资源</div>
            <div class="col-md-4" style="text-align:left;">规格</div>
        </div>
        <div class="resourceCroup-list row">
            <div class="resourceCroup-list-head col-md-4">
                <span class="padding-65">{{appServer.num}}</span>
            </div>
            <div class="resourceCroup-list-head col-md-4">
                <span class="padding-65">应用程序</span>
            </div>
            <ul class="resourceCroup-list-ul col-md-4">
                <li>{{appServer.cores}}Vcpu</li>
                <li>{{appServer.ghz}}处理器主频（Ghz）</li>
                <li>{{appServer.ram}}内存(GB)</li>
                <li>{{appServer.localDisk}}系统盘(GB)</li>
                <li>{{appServer.os}}操作系统</li>
                <li>{{appServer.computeMappingFactor}}计算机映射因子</li>
                <li>{{appServer.monthlyUsage}}每个月用量（天/月）</li>
                <li>{{appServer.dailyUsage}}每天用量（小时/天）</li>
            </ul>
        </div>
        <div class="resourceCroup-list row">
            <div class="resourceCroup-list-head col-md-4">
                <span class="padding-65">{{dbServer.num}}</span>
            </div>
            <div class="resourceCroup-list-head col-md-4">
                <span class="padding-65">数据库服务</span>
            </div>
            <ul class="resourceCroup-list-ul col-md-4">
                <li>{{dbServer.cores}}Vcpu</li>
                <li>{{dbServer.ghz}}处理器主频（Ghz）</li>
                <li>{{dbServer.ram}}内存(GB)</li>
                <li>{{dbServer.localDisk}}系统盘(GB)</li>
                <li>{{dbServer.os}}操作系统</li>
                <li>{{dbServer.computeMappingFactor}}计算机映射因子</li>
                <li>{{dbServer.monthlyUsage}}每个月用量（天/月）</li>
                <li>{{dbServer.dailyUsage}}每天用量（小时/天）</li>
            </ul>
        </div>
        <div class="resourceCroup-list row">  
            <div class="resourceCroup-list-head col-md-4">  
                <span class="padding-25"></span>
            </div>
            <div class="resourceCroup-list-head col-md-4">
                <span class="padding-25">网络存储</span>
            </div>
            <ul class="resourceCroup-list-ul col-md-4">
                <li>{{network.bandwidth}}带宽（GB/月）</li>
                <li>{{network.inbound}}入站（GB/月）</li>
                <li>{{network.outbound}}出站（GB/月）</li>
            </ul>
        </div>
        <div class="resourceCroup-list row">
            <div class="resourceCroup-list-head col-md-4">  
                <span class="padding-25">{{storage.num}}</span>
            </div>
            <div class="resourceCroup-list-head col-md-4">
                <span class="padding-25">存储</span>
            </div>
            <ul class="resourceCroup-list-ul col-md-4">
                <li>{{storage.sna}}共享存储(SAN)(GB)</li>
                <li>{{storage.nsa}}网络存储(NAS)(GB)</li>
                <li>{{storage.cloudStorage}}云存储(GB)</li>
            </ul>
        </div>
    </div>
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
        this.$this.get('/broker/compare/result/'+this.appId+'').then((response)=>{
              
            this.compareResultList = JSON.parse(response.data.data.datas);
            this.appServer = JSON.parse(response.data.data.res.appServer);
            this.dbServer = JSON.parse(response.data.data.res.dbServer);
            this.network = JSON.parse(response.data.data.res.network);
            this.storage = JSON.parse(response.data.data.res.storage);
            console.log(this.appServer); 
        }).catch((error)=>{})
    },
    methods:{

    },
    components:{
        child
    }
}
</script>