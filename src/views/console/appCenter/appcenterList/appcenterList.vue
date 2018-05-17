<template>
<div class="total">
    <div class="total-header">
        <span></span>
        <p class="zong">应用市场</p>
    </div>
    <div class="appcenterlist">
        <div class="appcenterlist-list">
            <!-- <div class="appcenterlist-item" v-on:click="goPlan()">
                <div class="appcenterlist-item-img appcenterlist-item-img1">
                    <img src="../../../../assets/appcenter/appcen-plan.png" alt="">
                </div>
                收益度和亲和度
            </div> -->
            <div class="appcenterlist-item" v-on:click="goPrice(lis.id)" v-for="(lis,index) in yylist">
                <div class="appcenterlist-item-img appcenterlist-item-img1">
                    <img :src="lis.picture_url" alt="">
                </div>
                {{lis.app_name}}
            </div>
            <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img1" v-on:click="goCheck()">
                    <div style="line-height:120px;" class="jsn">
                        <i class="iconfont icon-tianjia-yin"></i>&nbsp继续添加
                    </div>
                </div>
                
            </div>
            <!--<div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img1" v-on:click="goRoi()">
                    <img src="../../../../assets/appcenter/wechartshouyi.png" alt="">
                </div>
                多云预算差异分析助手
            </div>
            <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img1" v-on:click="goProxy()">
                    <img src="../../../../assets/appcenter/weichartdaili.png" alt="">
                </div>
                云代理查询助手
            </div>
            <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img1" v-on:click="goCheck()">
                    <img src="../../../../assets/appcenter/wechartjianyan.png" alt="">
                </div>
                云匹配度分析器
            </div>
            <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img2" v-on:click="goSeacher">
                    <img src="../../../../assets/homepage/osa.png" alt="">
                </div>
                云实例快搜器
            </div>
            <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img2" v-on:click="goEye">
                    <img src="../../../../assets/appcenter/wechartseye2.png" alt="">
                </div>
                云眼查
            </div>
            <div class="appcenterlist-item">
                <div class="appcenterlist-item-img appcenterlist-item-img2" v-on:click="gomoney">
                    <img src="../../../../assets/appcenter/wechartseye3.png" alt="">
                </div>
                多云价格优选分析助手
            </div>-->
            <div class="clear"></div>
        </div>
        
    </div>
</div>
</template>
<script>
import '../appcenterList/appcenterList.css';
export default{
    name:'appcenterList',
    data(){
        return  {
            yylist:[]
        }
    },
    methods:{
        goPlan:function(){
            this.$router.push({path:'/appcenterPlan'});
        },
        goCheck:function(){
            this.$router.push({path:'/cloudmarket'});
        },
        goPrice:function(e){
          
            switch (e)
            {
            case 1:
            this.$router.push({path:'/appcenterPrice'});
            break;
            case 2:
            this.$router.push({path:'/appcenterRoi'});
            break;
            case 3:
            this.$router.push({path:'/appcenterProxy'});
            break;
            case 4:
            this.$router.push({path:'/appcenterCheck'});
            break;
            case 5:
            this.$router.push({path:'/appcenterSearch'});
            break;
            case 6:
            this.$router.push({path:'/appcenterCloudEye'});
            break;
            case 7:
            this.$router.push({path:"/appcenterOptimization"})
            break;
            }
           
        },
       
        getList:function(){
            this.$this.get('/broker/market/user/app/list').then((res)=>{
                this.yylist = res.data;
            }).catch((error)=>{})
        }
    },
    mounted:function(){
            this.getList();
    }
}
</script>