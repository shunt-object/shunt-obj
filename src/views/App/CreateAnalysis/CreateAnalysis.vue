<template>
    <div class="CreateAnalysis">
        <div class="CreateAnalysis_from">
            <div class="CreateAnalysis_from_list">
                <span class="CreateAnalysis_key">云分析名称</span>
                <input type="text" class="CreateAnalysis_input" v-model="analysisName">
            </div>
            <div class="CreateAnalysis_from_list">
                <span class="CreateAnalysis_key">应用名称</span>
                <input type="text" class="CreateAnalysis_input" v-model="appName">
            </div>
            <div class="CreateAnalysis_from_list">
                <span class="CreateAnalysis_key">分类</span>
                <select class="CreateAnalysis_select" v-model="type">
                    <option :value="item.id" v-for="item in typeList">{{item.gname}}</option>
                </select>
            </div>
            <div class="CreateAnalysis_from_list">
                <span class="CreateAnalysis_key">架构</span>
                <select class="CreateAnalysis_select" v-model="frame">
                    <option :value="item.id" v-for="item in frameList">{{item.gname}}</option>
                </select>
            </div>
            <button v-on:click="submit()">下一步</button>
        </div>
        
    </div>
</template>
<script>
import '../CreateAnalysis/CreateAnalysis.css'
export default{
    name:'CreateAnalysis',
    data(){
        return {
            typeList:[],
            frameList:[],
            type:'',
            frame:'',
            analysisName:'',
            appName:''
        }
    },
    mounted:function(){
        this.$http.get('/broker/app/frames').then(function(data){
            //console.log(data);
            this.frameList = data.body.data;
        },function(){});
        this.$http.get('/broker/app/types').then(function(data){
            //console.log(data);
            this.typeList = data.body.data;
        },function(){});
    },
    methods:{
        submit:function(){
            let obj = {
                "analysisName": this.analysisName,
                "appFrame": this.frame,
                "appName": this.appName,
                "appType": this.type
            };
            let str = JSON.stringify(obj);
            console.log(this.frame);
            if(this.analysisName!=''&&this.type!=''&&this.frame!=''&&this.appName!=''){
                this.$http.post('/broker/app/analysis',str).then(function(data){
                    console.log(data);
                },function(){

                })
                console.log(1111);
            }else{
                console.log(2222);
            }
        }
    }
}
</script>