<template>
<div class="colligate-list">
    <div style="padding:0 2em;">
        <table class="table-score colligate-tables">
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
                    <td>
                        <a target="_blank" style="color:rgb(51, 122, 183) !important;" :href="item.sid==7?'https://ecs-buy.aliyun.com/':item.sid==8?'https://aws.amazon.com/cn/pricing/?nc2=h_ql_pr&awsm=ql-3':item.sid==9?'https://www.azure.cn/pricing/overview/':item.sid==10?'https://buy.cloud.tencent.com/price/cvm/calculator':item.sid==11?'https://portal.huaweicloud.com/pricing#ecs':item.sid==12?'https://www.qingcloud.com/pricing#/InstancesKVM':item.sid==13?'https://www.vmware.com/cn.html':item.sid==14?'https://www.openstack.org/community':item.sid==15?'http://e.huawei.com/cn/solutions/technical/Cloud-Computing':item.sid==16?'https://www.aliyun.com/solution/dedicatedcloud':item.sid==17?'http://www.h3c.com/cn/Solution/TechnologySolution/CloudComputing/':item.sid==18?'http://www.china-entercom.com/cn/product-services/smartcloud-vone':''"><i class="iconfont icon-jiagechaxun" style="margin-right:5px;"></i>参考链接</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="compare-cate" style="font-weight:normal;">
        <i class="iconfont icon-qitashuju main-color"></i>云供应商标准选型差异
    </div>
    <div style="padding:0 2em;">
        <p class="explain">
            <span><i class="iconfont icon-yuan high-ratio" style="margin-right:3px;"></i>高匹配</span>
            <span><i class="iconfont icon-yuan low-ratio" style="margin-right:3px;"></i>低匹配</span>
        </p>
    </div>
    <div class="clear"></div>
    <div id="boxinnerHtml" ></div>
    <div class="difference-box" :class="isClass==true?'allheight':''" id="difference-box" style="margin-bottom:20px;padding:0 2em;" >
        <table class="comdetails-table">
            <thead>
                <tr>
                    <th class="obliqueline" colspan="3">
                        <span class="clould-profirm">云供应商</span>
                        <span class="clould-details">场景</span>
                    </th>
                    <th v-for="firm in confirm">{{firm.service}}</th>
                </tr>
            </thead>
            <tbody v-for="(item,index) in details">
                <tr class="comdetails-tab-title">
                    <td :colspan="length">{{index}}</td>
                </tr>
                <tr class="comdetails-tab-list" v-for="list in item">
                    <td style="width:10%;"></td>
                    <td class="textleft">{{list.feature}}</td>
                    <td>{{list.servers[0].compareopt}}</td>
                    <td v-for="aa in list.servers"><!--aa.type=1是有 0 是没有 -->
                        <i class="iconfont icon-yuan" :class="aa.type==1?'high-ratio':'low-ratio'"></i>
                    </td>                    
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
export default{
    props:["appId","type","isClass"],
    data(){
        return {
            compareResultList:[],
            time:'',
            details:[],
            confirm:[],
            length:'',
        }
    },
    mounted:function(){
        this.time = new Date(); 
        this.getdata();// 云选型
    },
    methods:{
        getdata:function(){
            // this.$this.get('/broker/app/resource/group/'+this.appId+'').then((response)=>{
            //     if(response.data.data.appServer.length>0||response.data.data.dbServer.length>0||response.data.data.network!=null||response.data.data.storage.length>0||response.data.data.cdns.length>0){
            //         this.reslist = true;
            //     }
            //     this.appServer = response.data.data.appServer;
            //     this.dbServer = response.data.data.dbServer;
            //     this.network = response.data.data.network;
            //     this.storage = response.data.data.storage;
            //     this.cdns = response.data.data.cdns;
            // }).catch((error)=>{})
            let resultObj = {
                appid:this.appId,
                searchAble:true,
                sid:[]
            };   
            this.$this.post('/broker/compare/result?time='+this.time.getTime(),JSON.stringify(resultObj)).then((response)=>{
                this.compareResultList = response.data.data.datas; 
                this.compareDiffer();
            }).catch((error)=>{})
        },
        compareDiffer:function(){
            this.$this.get('/broker/compare/selected/feature/'+this.appId+'?time='+this.time.getTime()).then((response)=>{
                this.details =  response.data.data;
                for(let variable  in this.details){   //variable 为属性名
                    this.confirm = this.details[variable][0].servers;
                }
                this.length = this.confirm.length+3;
            }).catch((error)=>{})
        },
    }
}
</script>