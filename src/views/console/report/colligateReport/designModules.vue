<template>
<div style="padding:0 2em;">
    <table class="colligate-design" v-if="designdata.appServer.length>0">
        <thead>
            <tr>
                <td style="width:15%;">角色</td>
                <td style="width:15%;">类型</td>
                <td style="width:23.3%;">规格</td>
                <td style="width:23.3%;">当前配置</td>
                <td style="width:23.3%;">云配置（推荐）</td>
            </tr>              
        </thead>
        <tbody v-for="item in designdata.appServer">
            <tr>
                <td rowspan="5">应用服务</td>
                <td rowspan="5">{{item.typeLevel==18?'低配':'高配'}}</td>
                <td>（v）CPU</td>
                <td>{{item.resServer==null?'--':item.resServer.cores}}</td>
                <td>{{item.cpu}}</td>
            </tr>
            <tr>
                <td>处理器主频（GHZ）</td>
                <td>{{item.resServer==null?'--':item.resServer.ghz}}</td>
                <td>{{item.ghz==undefined?'--':''}}</td>
            </tr>
            <tr>
                <td>内存（GB）</td>
                <td>{{item.resServer==null?'--':item.resServer.ram}}</td>
                <td>{{item.ram}}</td>
            </tr>
            <tr>
                <td>系统盘</td>
                <td>{{item.resServer==null?'--':item.resServer.localDisk}}</td>
                <td>{{item.localDisk}}</td>
            </tr>                            
            <tr>
                <td>操作系统</td>
                <td>{{item.resServer==null?'--':item.resServer.osType.name}}</td>
                <td>{{item.osType.name}}</td>
            </tr>
        </tbody>
    </table>
    <table class="colligate-design" v-if="designdata.dbServer.length>0">
        <thead>
            <tr>
                <td style="width:15%;">角色</td>
                <td style="width:15%;">类型</td>
                <td style="width:23.3%;">规格</td>
                <td style="width:23.3%;">当前配置</td>
                <td style="width:23.3%;">云配置（推荐）</td>
            </tr>              
        </thead>
        <tbody v-for="item in designdata.dbServer">
            <tr>
                <td rowspan="5">数据库服务</td>
                <td rowspan="5">{{item.typeLevel==18?'低配':'高配'}}</td>
                <td>（v）CPU</td>
                <td>{{item.resServer==null?'--':item.resServer.cores}}</td>
                <td>{{item.cpu}}</td>
            </tr>
            <tr>
                <td>处理器主频（GHZ）</td>
                <td>{{item.resServer==null?'--':item.resServer.ghz}}</td>
                <td>{{item.ghz==undefined?'--':''}}</td>
            </tr>
            <tr>
                <td>内存（GB）</td>
                <td>{{item.resServer==null?'--':item.resServer.ram}}</td>
                <td>{{item.ram}}</td>
            </tr>
            <tr>
                <td>系统盘</td>
                <td>{{item.resServer==null?'--':item.resServer.localDisk}}</td>
                <td>{{item.localDisk}}</td>
            </tr>                            
            <tr>
                <td>操作系统</td>
                <td>{{item.resServer==null?'--':item.resServer.osType.name}}</td>
                <td>{{item.osType.name}}</td>
            </tr>
        </tbody>
    </table>
    <table class="colligate-design" v-if="designdata.cdns.length>0">
        <thead>
            <tr>
                <td style="width:15%;">角色</td>
                <td style="width:15%;">类型</td>
                <td style="width:23.3%;">规格</td>
                <td style="width:23.3%;">当前配置</td>
                <td style="width:23.3%;">云配置（推荐）</td>
            </tr>              
        </thead>
        <tbody v-for="item in designdata.cdns">
            <tr>
                <td rowspan="6">CDN</td>
                <td rowspan="6">--</td>
                <td>带宽</td>
                <td>{{item.bandwidth==null?'--':item.bandwidth}}</td>
                <td>--</td>
            </tr>
            <tr>
                <td>云厂商</td>
                <td>{{item.cse==null?'--':item.cse.name}}</td>
                <td>--</td>
            </tr>
        </tbody>
    </table>
    <table class="colligate-design" v-if="designdata.network!=null">
        <thead>
            <tr>
                <td style="width:15%;">角色</td>
                <td style="width:15%;">类型</td>
                <td style="width:23.3%;">规格</td>
                <td style="width:23.3%;">当前配置</td>
                <td style="width:23.3%;">云配置（推荐）</td>
            </tr>              
        </thead>
        <tbody>
            <tr>
                <td rowspan="6">网络存储</td>
                <td rowspan="6">--</td>
                <td>入站（Mbps/月）</td>
                <td>{{designdata.network.inbound==null?'--':designdata.network.inbound}}</td>
                <td>--</td>
            </tr>
            <tr>
                <td>出站（Mbps/月）</td>
                <td>{{designdata.network.outbound==null?'--':designdata.network.outbound}}</td>
                <td>--</td>
            </tr>
        </tbody>
    </table>
    <table class="colligate-design" v-if="designdata.storage.length>0">
        <thead>
            <tr>
                <td style="width:15%;">角色</td>
                <td style="width:15%;">类型</td>
                <td style="width:23.3%;">规格</td>
                <td style="width:23.3%;">当前配置</td>
                <td style="width:23.3%;">云配置（推荐）</td>
            </tr>              
        </thead>
        <tbody v-for="item in designdata.storage">
            <tr>
                <td rowspan="6">存储存储</td>
                <td rowspan="6">--</td>
                <td>共享存储（SAN）（GB）</td>
                <td>{{item.sna==null?'--':item.sna}}</td>
                <td>--</td>
            </tr>
            <tr>
                <td>网络存储（NAS）（GB）</td>
                <td>{{item.nsa==null?'--':item.nsa}}</td>
                <td>--</td>
            </tr>
            <tr>
                <td>云存储（GB）</td>
                <td>{{item.cloudStorage==null?'--':item.cloudStorage}}</td>
                <td>--</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
export default{
    props:["appId","type"],
    data(){
        return {
            designdata:{
                appServer:[],
                dbServer:[],
                cdns:[],
                network:[],
                storage:[]
            },
        }
    },
    mounted:function(){
        this.getdesign();
    },
    methods:{
        getdesign:function(){
            this.$this.get('/broker/design/list/'+this.appId).then((response)=>{
                //console.log('aaaa',response.data.data);
                this.designdata.appServer = response.data.data.designAppServer;
                this.designdata.dbServer = response.data.data.designAppdb;
                this.designdata.network = response.data.data.network;
                this.designdata.storage = response.data.data.storage;
                this.designdata.cdns = response.data.data.cdns;
            }).catch((error)=>{

            })
        },
    }
}
</script>