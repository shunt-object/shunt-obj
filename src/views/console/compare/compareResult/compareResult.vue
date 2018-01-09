<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link to="/">总览</router-link> > 云比较
</div>
<div class="plan-box">
    <div class="plan-container">
        <child index="4" start="0"></child>
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
        <!--<table class="table-box table table-striped">
            <thead>
                <tr>
                    <th>数量</th>
                    <th>资源</th>
                    <th>规格</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in resourceGroup">
                    <td>{{item.serverName}}</td>
                    <td>{{item.scope}}</td>
                    <td>2000-3000/月</td>
                </tr>
            </tbody>
        </table>-->
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
            appId:''
        }
    },
    mounted:function(){
        this.appId = this.$route.query.id;
        this.$this.get('/broker/compare/result/'+this.appId+'').then((response)=>{   
            this.compareResultList = JSON.parse(response.data.data.datas);
            this.resourceGroup = response.data.data.res;
        }).catch((error)=>{})
    },
    methods:{

    },
    components:{
        child
    }
}
</script>