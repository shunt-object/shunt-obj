<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback" v-on:click="goBack('comparelist')">云选型</p>
    ><p class="comback" v-on:click="goBack('comparequestion')">选择标准</p>
    ><p class="comback">比较报告</p>
</div>
<child index="4" start="3" :type="$route.query.type" :id="$route.query.id"></child>
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
                <td>--</td>
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
                    <p><span class="labelRed">{{appServer.cores}}</span>Vcpu</p>
                    <p><span class="labelRed">{{appServer.ghz}}</span>处理器主频（Ghz）</p>
                    <p><span class="labelRed">{{appServer.ram}}</span>内存(GB)</p>
                    <p><span class="labelRed">{{appServer.localDisk}}</span>系统盘(GB)</p>
                    <p><span class="labelRed">{{appServer.os}}</span>操作系统</p>
                    <p><span class="labelRed">{{appServer.computeMappingFactor}}</span>计算机映射因子</p>
                    <p><span class="labelRed">{{appServer.monthlyUsage}}</span>每个月用量（天/月）</p>
                    <p><span class="labelRed">{{appServer.dailyUsage}}</span>每天用量（小时/天）</p>
                </td>
            </tr>
            <tr>
                <td>{{dbServer.num}}</td>
                <td>数据库服务</td>
                <td>
                    <p><span class="labelRed">{{dbServer.cores}}</span>Vcpu</p>
                    <p><span class="labelRed">{{dbServer.ghz}}</span>处理器主频（Ghz）</p>
                    <p><span class="labelRed">{{dbServer.ram}}</span>内存(GB)</p>
                    <p><span class="labelRed">{{dbServer.localDisk}}</span>系统盘(GB)</p>
                    <p><span class="labelRed">{{dbServer.os}}</span>操作系统</p>
                    <p><span class="labelRed">{{dbServer.computeMappingFactor}}</span>计算机映射因子</p>
                    <p><span class="labelRed">{{dbServer.monthlyUsage}}</span>每个月用量（天/月）</p>
                    <p><span class="labelRed">{{dbServer.dailyUsage}}</span>每天用量（小时/天）</p>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>网络存储</td>
                <td>
                    <p><span class="labelRed">{{network.bandwidth}}</span>带宽（GB/月）</p>
                    <p><span class="labelRed">{{network.inbound}}</span>入站（GB/月）</p>
                    <p><span class="labelRed">{{network.outbound}}</span>出站（GB/月）</p>
                </td>
            </tr>
            <tr>
                <td>{{storage.num}}</td>
                <td>存储</td>
                <td>
                    <p><span class="labelRed">{{storage.sna}}</span>共享存储(SAN)(GB)</p>
                    <p><span class="labelRed">{{storage.nsa}}</span>网络存储(NAS)(GB)</p>
                    <p><span class="labelRed">{{storage.cloudStorage}}</span>云存储(GB)</p>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="compareResult-btn" style="margin-top:20px;">
        <button class="compare-btn compare-nextBtn" v-on:click="nextgo()">下一步</button>
        <button class="compare-prevBtn" v-on:click="prev()">上一步</button>        
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
        this.$this.get('/broker/compare/selected/feature/'+this.appId+'').then((response)=>{
               
        }).catch((error)=>{})
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
            this.$router.push({path:'/compareQuestion',query:{id:this.appId,type:this.queryType}});
        },
        goBack:function(link){
            if(link=='comparelist'){
                this.$router.push({path:'/compareList'});
            }else if(link=='comparequestion'){
                this.$router.push({path:'/compareQuestion',query:{id:this.appId,type:this.queryType}});
            }
        },
        nextgo:function(){
            this.$router.push({path:'/colligateReport',query:{id:this.appId,type:this.queryType}});
        }
    },
    components:{
        child
    }
}
</script>