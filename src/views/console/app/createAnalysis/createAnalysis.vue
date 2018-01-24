<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback">创建云分析</p>
</div>
<div class="outbox" style="background:#fff;">
    <child index="1" start="1" id="0" :type="$route.query.type"></child>
    <div class="CreateAnalysis_from_box">
        <div class="new-built">创建云分析信息</div>
        <div class="CreateAnalysis_from">
            <div class="CreateAnalysis_from_list">
                <span class="CreateAnalysis_key">上云分析名称：</span>
                <label class="label">
                    <input type="text" class="CreateAnalysis_input" :class="isanalysis==false?'error':''" v-model="analysisName" placeholder="请输入或选择上云分析名称"><span class="down" v-on:click="function(){analysis_list==false?analysis_list=true:analysis_list=false}"><i></i></span>
                    <ul class="analysis_name" v-show="analysis_list">
                        <li v-for="item in existing" v-on:click="changeExist(item.proname,item.id)">{{item.proname}}</li>
                    </ul>
                </label>   
                <span class="example">例如：ERP系统上云分析</span>             
            </div>
            <div class="CreateAnalysis_from_list">
                <span class="CreateAnalysis_key">工作负载名称：</span>
                <input type="text" class="CreateAnalysis_input" :class="isappName==false?'error':''"  v-model="appName" placeholder="请输入工作负载名称">
                <span class="example">例如：用户管理</span>
            </div>
            <div class="CreateAnalysis_from_list">
                <span class="CreateAnalysis_key">工作负载类型：</span>
                <select class="CreateAnalysis_select" v-model="type" :class="istype==false?'error':''" >
                    <option :value="item.id" v-for="item in typeList">{{item.gname}}</option>
                </select>
            </div>
            <div class="CreateAnalysis_from_list">
                <span class="CreateAnalysis_key">工作负载架构：</span>
                <select class="CreateAnalysis_select" v-model="frame" :class="isframe==false?'error':''" >
                    <option :value="item.id" v-for="item in frameList">{{item.gname}}</option>
                </select>
            </div>
        </div>
        <button class="nextbtn" v-on:click="submit()">下一步</button>
        <div class="clear"></div>
    </div>
        
</div>
</div>
</template>
<script>
import child from '../../../../components/steps/steps.vue'
import '../createAnalysis/createAnalysis.css'
export default{
    name:'createAnalysis',
    data(){
        return {
            typeList:[],
            frameList:[],
            type:'',
            frame:'',
            analysisName:'',
            appName:'',
            existing:'',
            analysis_list:false,
            isanalysis:true,
            istype:true,
            isframe:true,
            isappName:true,
            proId:'',
            queryType:''
        }
    },
    mounted:function(){
        this.queryType = this.$route.query.type;
        //console.log('type',this.queryType);
        this.$this.get('/broker/app/types').then((response)=>{
            this.typeList = response.data.data;
        }).catch((error)=>{
            console.log(error);
        })
        this.$this.get('/broker/app/frames').then((response)=>{
            this.frameList = response.data.data;
        }).catch((error)=>{
            console.log(error);
        })
        //获取所有云分析名称
        this.$this.get('/broker/app/analysis').then((response)=>{
            this.existing = response.data.data;
        }).catch((error)=>{
            console.log(error);
        })
    },
    methods:{
        submit:function(){
            if(this.proId==''){
                this.proId = 0;
            }
            let obj = {
                "analysisName": this.analysisName,
                "appFrame": this.frame,
                "appName": this.appName,
                "appType": this.type,
                "proId":this.proId
            };
            let str = JSON.stringify(obj);
            let that = this;
            console.log(this.frame);
            if(this.analysisName!=''&&this.type!=''&&this.frame!=''&&this.appName!=''){
                this.isanalysis = true;
                this.istype = true;
                this.isframe = true;
                this.isappName = true;
                this.$this.post('/broker/app/analysis',str).then((response)=>{
                    sessionStorage.setItem('appId',response.data.data);
                    this.$router.push({path:'/resourceGroup',query:{type:this.queryType,id:response.data.data}});
                }).catch((error)=>{
                    console.log(error);
                })
            }else{
                this.analysisName == ''?this.isanalysis = false:this.isanalysis = true;
                this.type == ''?this.istype = false:this.istype = true;
                this.frame == ''?this.isframe = false:this.isframe = true;
                this.appName ==''?this.isappName = false:this.isappName = true;  
            }
            //this.$router.push({path:'/resourceGroup'});
        },
        changeExist:function(name,id){//选择已有的云分析
            this.analysis_list = false;
            this.analysisName = name;
            this.proId = id;
        }
    },
    components:{
        child
    }
}
</script>