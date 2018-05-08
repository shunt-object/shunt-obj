<template>
    <div class="wechartAbout">
        <!-- 头部 -->
        <div class="wxabout-head">
            <div class="head-left"><img src="../../../assets/wechart/wxlogo.png" alt=""></div>
            <div class="head-right"><i class="iconfont icon-dianhua2" style="margin-right:5px;"></i>400-828-7308</div>
        </div>
        <!--  -->
        <div class="wxabout-banner">
            <img src="../../../assets/wechart/wechartabout.jpg" alt="">
        </div>
        <!--  -->
        <div class="wxabout-puzzled">
            <div class="pizzled-head">
                <p class="pizeeled-head-eng">您是否存在以下困惑</p>
                <p class="pizeeled-head-word">Do you <span>have the following</span> confusion</p>
            </div>
            <div class="pizzled-main">
                <div class="pizzled-main-item">
                    我的工作负载可上云吗？
                    <span>1</span>
                </div>
                <div class="pizzled-main-item">
                    面对众多的云厂商，哪家最适合我呢？
                    <span>2</span>
                </div>
                <div class="pizzled-main-item">
                    如何设计更为适合和专业的云方案呢？
                    <span>3</span>
                </div>
                <div class="pizzled-main-item">
                    有高效购买性价比高的云资源和服务方式吗？
                    <span>4</span>
                </div>
                <div class="pizzled-main-item">
                    可以找到既专业又性价比高的真机实测吗？
                    <span>5</span>
                </div>
                <div class="pizzled-main-item">
                    面对众多的主机报警，如何处理啊？
                    <span>6</span>
                </div>
                <div class="clear"></div>
            </div>
        </div> 
         <!--  -->
        <div class="wxabout-solve">
            <div class="solve-head">
                <p class="solve-head-eng">如何解决以上困惑</p>
                <p class="solve-head-word">How to <span>solve the above</span> problems</p>
            </div>
            <div class="solve-main">
                <div class="solve-item">
                    <span>1</span>
                    通过“云规划最佳实践”，CloudBroker²为您全面分析工作负载，助您规划最适合的云场景。
                </div>
                <div class="solve-item">
                    <span>2</span>
                    根据您的业务需求，通过CloudBroker²提供的上百个指标进行多维度和多场景对比，为您优选最佳的云服务商。
                </div>
                <div class="solve-item">
                    <span>3</span>
                    通过大数据积累，对上云负载采取场景化设计，科学获得该负载的云规格配置和自动生成云拓扑。
                </div>
                <div class="solve-item">
                    <span>4</span>
                    借助CloudBroker²提供的多云价格优选器和第三方云评星标准，为您提供最适合的云资源和服务。
                </div>
                <div class="solve-item">
                    <span>5</span>
                    可以快速洞察企业内外的上云状态吗？CloudBroker²通过对上云应用的精准画像和可视化数据分析服务，为您多维角度进行解析。
                </div>
                <div class="solve-item">
                    <span>6</span>
                    根据云选场景，CloudBroker²实现对目标云厂商的测试可视化，助上云和选云科学性。
                </div>
                <div class="solve-item">
                    <span>7</span>
                    根据CloudBroker²提供的云管理平台，提供报警收敛和深度分析，助您省时和省力。
                </div>
            </div>
        </div>
        <!--  -->
        <div class="wxchart-know">
            <div class="know-head">
                <p class="know-head-eng">了解我们的产品及服务组合</p>
                <p class="know-head-word">learn <span>more about</span> portfolio</p>
            </div>
            <div class="know-main">
                <div class="know-img">
                    <img src="../../../assets/wechart/prictrue.jpg" alt="">
                </div>
            </div>
        </div>
        <!--  -->
        <div class="wxabout-force">
            <div class="force-head">
                <p class="force-head-eng">我们致力于解决 </p>
                <p class="force-head-word">We’re <span>committed to</span> solving it</p>
            </div>
            <div class="force-main">
                <div class="force-item">打造从上云咨询、云迁移和云运维的一站式SaaS服务模式，助您完善上云和管云的最后一公里！</div>
            </div>
        </div>  
        <!--  -->
        <div class="wxabout-mission">
            <div class="mission-head">
                <p class="mission-head-eng">我们的愿景</p>
                <p class="mission-head-word"><span>Our mission</span></p>
            </div>
            <div class="mission-main">
                <div class="mission-item">
                    "服务的创新者，行业的领导者"<br>
                    我们的使命<br>
                    对社会：<br>
                    －建立一个有远大抱负、勇于创新、锐意进取和技术专业的云服务品牌。<br>
                    对云客户： <br>
                    －有能力并且不断强化能力为客户提供更省钱、省力和专业的云服务。 <br>
                    对合作伙伴: <br>
                    －提供海量、准确、标准和有深度的云数据服务。<br>
                </div>
            </div>
        </div>   
        <!--  -->
        <div class="wxabout-choose">
            <div class="choose-head">
                <p class="choose-head-eng">选择您想了解的内容</p>
                <p class="choose-head-word">Choose <span>what you want</span> to know</p>
            </div>
            <div class="choose-main">
                <div class="choose-item">
                    <p class="choose-inputBox" v-for="(item,index) in typelist" v-on:click="getcode(index)">
                        <input type="checkbox" v-model="item.boolean">{{item.data.name}}
                    </p>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="wxabout-code" v-if="wechartUrl!=''">
                <img :src="wechartUrl" alt="">
                <p class="wxabout-code-desc">期待您的加入！</p>
            </div>
        </div>
        <!--  -->
        <div class="wxabout-foot">
            2017-2018 CloudBroker²版权所有
        </div>


    </div>
</template>
<script>
import '../wechartAbout/wechartAbout.css'
export default {
    name:'wechartAbout',
    data(){
        return {
            typelist:[],
            wechartUrl:'',
            uuid:'',
            sceneid:''
        }
    },
    mounted:function(){
        this.uuid = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        this.sceneid = this.uuid+this.uuid+this.uuid;
        this.getType();
    },
    methods:{
        getType:function(){
            this.$this.get('/broker/prop/typedata/function/-1').then((response)=>{
                //console.log('-----',response.data);
                for(let i=0;i<response.data.data.length;i++){
                    this.typelist.push({boolean:false,data:response.data.data[i]});
                }
            }).catch((error)=>{})
        },
        getcode:function(index){
            this.typelist[index].boolean = true;
            let strid='@@',stringid='';
            for(let i=0;i<this.typelist.length;i++){
                if(this.typelist[i].boolean==true){
                    strid+=this.typelist[i].data.id+',';
                }
            }
            stringid = this.sceneid+strid;
            this.$this.get('/broker/auth/wxqcode/'+stringid).then((res)=>{
                //console.log('wechart',res.data);
                this.wechartUrl = res.data.data;
                clearInterval(this.timer);
                this.chekwechart(stringid);
            }).catch((error)=>{})
        },
        chekwechart:function(stringid){
            let that = this;
            this.timer = setInterval(function(){
                that.$this.get('/broker/auth/check/wxscan/'+stringid).then((res)=>{
                    if(res.data.data=='-1'){
                        //console.log('未扫描');
                    }else{
                        clearInterval(that.timer);
                        sessionStorage.setItem("utype",res.data.data.utype);
                        sessionStorage.setItem("account",JSON.stringify(res.data.data));
                        that.$router.push({path:'/consolePage'});
                    }
                }).catch((error)=>{})
            },1000)
        },
    }
}
</script>