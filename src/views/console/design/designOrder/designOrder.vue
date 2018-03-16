<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback" v-on:click="design()">云设计</p>
    ><p class="comback">购买详情</p>
</div>
<child index="5" start="4" :type="$route.query.type" :id="$route.query.id"></child>
<div class="designOrder-box">
    <div class="designOrder-title"><span>全部商品&nbsp;&nbsp;{{orderlist.length}}</span></div>
    <div class="designOrder-list" v-for="(item,index) in orderlist">
        <div class="designOrder-list-head">
            <p class="designOrder-list-name">
                <input type="checkbox" v-model="item.model" v-on:click="select(index)">{{item.data.rtype=='1'?'应用服务':item.data.rtype=='2'?'数据库服务':''}}
            </p>
            <p class="designOrder-list-del" v-on:click="del(item.data.id)"><i class="iconfont icon-shanchu main-color"></i>删除订单</p>
        </div>
        <table class="designOrder-list-table">
            <thead>
                <tr>
                    <td rowspan="2">云厂商</td>
                    <td rowspan="2">产品名称</td>
                    <td rowspan="2">角色类型</td>
                    <td rowspan="2">配置类型</td>
                    <td rowspan="2">购买方式</td>
                    <td rowspan="2">区域</td>
                    <td colspan="4">购买规格</td>
                    <td rowspan="2">数量</td>
                    <td rowspan="2">购买周期</td>
                    <td rowspan="2">付费类型</td>
                </tr>
                <tr>
                    <td class="designOrder-td-bg">CPU</td>
                    <td class="designOrder-td-bg">处理器主频</td>
                    <td class="designOrder-td-bg">内存</td>
                    <td class="designOrder-td-bg">系统盘</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{item.data.sname}}</td>
                    <td>{{item.data.pname}}</td>
                    <td>{{item.data.rtype=='1'?'应用服务':item.data.rtype=='2'?'数据库服务':'--'}}</td>
                    <td>{{item.data.vmtype=='17'?'高配':item.data.vmtype=='18'?'低配':'--'}}</td>
                    <td>{{item.data.buyType=='1'?'包年包月':item.data.buyType=='2'?'按量付费':'竞价实例'}}</td>
                    <td>{{item.data.region}}</td>
                    <td>{{item.data.cores}}</td>
                    <td><!--{{item.data.ghz}}-->--</td>
                    <td>{{item.data.ram}}</td>
                    <td><!--{{item.data.localDisk}}-->40GB</td>
                    <td>{{item.data.num}}</td>
                    <td>{{item.data.month%12==0?item.data.month/12+'年':item.data.month%12+'个月'}}</td>
                    <td>{{item.data.paymentType=='1'?'预付费':item.data.paymentType=='2'?'后付费':'--'}}</td>
                </tr>
            </tbody>
        </table>
        <div class="designOrder-list-price">
            价格：<span class="designOrder-list-price-color">￥{{item.data.cloudPrice}}</span>
        </div>
    </div>
</div>

    <div class="designOrder-sum-price">
        价格：<span class="designOrder-list-price-color">￥{{Number(sumprice).toFixed(2)}}</span><span class="price-desc">线下咨询购买 您放心的选择</span>
        <button class="designOrder-pay-btn" v-on:click="pay()">支付</button>
    </div>


<!--<div class="designOrder-touch">
    <div class="designOrder-touch-box">
        <p class="designOrder-touch-list">联系我们：400-828-7308</p>
        <p class="designOrder-touch-list">邮箱方式：Help@csb-china.com</p>
    </div>
</div>-->
</div>
</template>
<script>
import '../designOrder/designOrder.css';
import child from '../../../../components/steps/steps.vue'
export default{
    name:'designOrder',
    data(){
        return {
            appId:'',
            param:[],
            orderlist:[],
            sumprice:0,
            //contact:false
        }
    },
    mounted:function(){
        this.appId = this.$route.query.id;
        this.param = this.$route.query.listid;
        this.getdata();
    },
    methods:{
        getdata:function(){
            this.orderlist = [];
            this.sumprice = 0;
            let listid = [];
            if(this.param instanceof Array==true){
                listid = this.param;
            }else{
                listid = [this.param];
            }
            let obj = {"ids":listid};
            this.$http.post('/broker/price/purchasing/list/'+this.appId,JSON.stringify(obj)).then((response)=>{
                //console.log('----',response); 
                for(let i=0;i<response.data.data.length;i++){
                    this.orderlist.push({data:response.data.data[i],model:true});
                    this.sumprice = this.sumprice+response.data.data[i].cloudPrice;
                }
                //this.sumprice = Number(this.sumprice).toFixed(2);
            }).catch((error)=>{
            })
        },
        select:function(index){
            if(this.orderlist[index].model==true){
                this.orderlist[index].model = false;
                this.sumprice = this.sumprice - this.orderlist[index].data.cloudPrice;
            }else{
                this.orderlist[index].model = true;
                this.sumprice = this.sumprice + this.orderlist[index].data.cloudPrice;
            }
        },
        pay:function(){
            this.$router.push({path:'/pay',query:{id:this.appId,type:this.$route.query.type,listid:this.param}});
            //this.contact = true;
        },
        del:function(id){
            let obj = {"ids":[id]};
            let that = this;
            this.$confirm('您确定要删除该订单吗？', '温馨提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                confirmButtonClass:'lay-btn-red',
                cancelButtonClass:'lay-cancel-btn',
                type: 'warning',
                center: false
            }).then(() => {
                that.$this({
                    method: "delete",
                    url: "/broker/price/purchasing/delete",
                    data: obj
                }).then((response)=> {
                    that.getdata();
                    that.$message({
                        message: '您的订单已成功删除。',
                        type: 'success'
                    });
                    //console.log(response)
                }).catch((error)=> {
                });      
            }).catch(() => {});   
        },
        design:function(){
            this.$router.push({path:'/design',query:{id:this.$route.query.id,type:this.$route.query.type}});
        }
    },
    components:{
        child
    }
}
</script>