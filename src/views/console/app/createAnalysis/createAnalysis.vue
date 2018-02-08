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
        <div class="new-built">创建云分析</div>
        <div class="row createAnalysis-box">
            <div class="col-md-4">
                <div class="createAnalysis-list">
                    <div class="createAnalysis-list-title">
                        <span class="createAnalysis-fang">1</span>
                        请输入上云分析名称：
                    </div>                
                    <div class="create-yun">
                        <span class="create-radio-span">
                            <input type="radio" name="aaa" checked class="create-radio-input" v-on:click="clickI(1)">创建云分析
                        </span>
                        <span class="create-radio-span">
                            <input type="radio"  name="aaa" class="create-radio-input" v-on:click="clickI(2)">选用现有云分析
                        </span>
                    </div>
                    <div class="clear"></div>
                    <div style="margin-top:20px;" >
                        <select v-if="radio2==true" id="select" class="create-select" v-model="changeyun" :class="ischangeyun==false?'error':''">
                            <option :value="item" v-for="item in existing">{{item.proname}}</option>
                        </select>
                        <input v-if="radio1==true" type="text" id="input" class="create-input" :class="isproName==false?'error':''"  v-model="proName" placeholder="请输入上云分析名称">
                    </div>
                </div>
                <div class="clear"></div>
                <div class="createAnalysis-list">
                    <div class="createAnalysis-list-title">
                        <span class="createAnalysis-fang">2</span>
                        请输入工作负载名称：
                    </div>
                    <input type="text" class="create-input" :class="isappName==false?'error':''"  v-model="appName" placeholder="请输入工作负载名称">
                </div>
                <div class="clear"></div>
                <div class="createAnalysis-list">
                    <div class="createAnalysis-list-title">
                        <span class="createAnalysis-fang">3</span>
                        请选择工作负载类型：
                    </div>
                    <select class="create-select" v-model="type" :class="istype==false?'error':''" >
                        <option :value="item.id" v-for="item in typeList">{{item.gname}}</option>
                    </select>
                </div>
                <div class="clear"></div>
                <div class="createAnalysis-list">
                    <div class="createAnalysis-list-title">
                        <span class="createAnalysis-fang">4</span>
                        请选择工作负载架构：
                    </div>
                    <select class="create-select" v-model="frame" :class="isframe==false?'error':''" >
                        <option :value="item.id" v-for="item in frameList">{{item.gname}}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
        </div>
        <button class="nextbtn" v-on:click="submit()"><span class="pl-5">下一步</span><i class="iconfont icon-xiayibu" style="margin-left:5px;"></i></button>
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
            queryType:'',
            changeyun:'',
            isproName:true,
            proName:'',
            ischangeyun:true,
            radio1:true,
            radio2:false
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
            console.log('aaa',response.data.data);
        }).catch((error)=>{
            console.log(error);
        })
    },
    methods:{
        submit:function(){
            let proid,analysisName;
            if(this.changeyun==''){
                //this.proId = 0;
                proid = 0;
                analysisName = this.proName;
            }else{
                proid = this.changeyun.id;
                analysisName = this.changeyun.proname; 
            }
            console.log(this.changeyun);
            let obj = {
                "analysisName": analysisName,
                "appFrame": this.frame,
                "appName": this.appName,
                "appType": this.type,
                "proId":proid
            };
            let that = this;
            let str = JSON.stringify(obj);
            console.log(this.radio1,'----',this.radio2);
            if(this.radio2==true){
                //console.log(this.changeyun.proname);
                this.reg2(str);
            }else if(this.radio1==true){
                this.reg1(str);
            }else{
                this.regall();
            }
            //this.$router.push({path:'/resourceGroup'});
        },
        reg1:function(str){
            if(this.proName!=''&&this.type!=''&&this.frame!=''&&this.appName!=''){
                this.isproName = true;
                this.istype = true;
                this.isframe = true;
                this.isappName = true;
                this.push(str);
            }else{
                this.proName == ''?this.isproName = false:this.isproName = true;
                this.type == ''?this.istype = false:this.istype = true;
                this.frame == ''?this.isframe = false:this.isframe = true;
                this.appName ==''?this.isappName = false:this.isappName = true;  
            }
        },
        reg2:function(str){
            if(this.changeyun!=''&&this.type!=''&&this.frame!=''&&this.appName!=''){
                this.ischangeyun = true;
                this.istype = true;
                this.isframe = true;
                this.isappName = true;
                this.push(str);
            }else{
                this.changeyun == ''?this.ischangeyun = false:this.ischangeyun = true;
                this.type == ''?this.istype = false:this.istype = true;
                this.frame == ''?this.isframe = false:this.isframe = true;
                this.appName ==''?this.isappName = false:this.isappName = true;  
            }
        },
        regall:function(){
            if(this.proName!=''&&this.ischangeyun!=''&&this.type!=''&&this.frame!=''&&this.appName!=''){
                this.ischangeyun = true;
                this.isproName = true;
                this.istype = true;
                this.isframe = true;
                this.isappName = true;
            }else{
                this.changeyun == ''?this.ischangeyun = false:this.ischangeyun = true;
                this.proName == ''?this.isproName = false:this.isproName = true;
                this.type == ''?this.istype = false:this.istype = true;
                this.frame == ''?this.isframe = false:this.isframe = true;
                this.appName ==''?this.isappName = false:this.isappName = true;  
            }
        },
        clickI:function(ind){
            if(ind==1){
                if(this.radio1==false){
                    this.radio1=true;
                    this.radio2=false;
                    this.ischangeyun = true;
                    $("#select").attr("disabled",true);
                     $("#input").attr("disabled",false);
                }else{
                    this.radio1=false;
                    this.radio2=true;
                    this.isproName = true;
                    $("#input").attr("disabled",true);
                    $("#select").attr("disabled",false);
                }
            }else{
                if(this.radio2==false){
                    this.radio2=true;
                    this.radio1=false;
                    this.isproName = true;
                    $("#select").attr("disabled",false);
                    $("#input").attr("disabled",true);
                }else{
                    this.radio2=false;
                    this.radio1=true;
                    this.ischangeyun = true;
                    $("#input").attr("disabled",false);
                    $("#select").attr("disabled",true);
                }
            }
        },
        push:function(str){
            this.$this.post('/broker/app/analysis',str).then((response)=>{
                sessionStorage.setItem('appId',response.data.data);
                this.$router.push({path:'/resourceGroup',query:{type:this.queryType,id:response.data.data}});
            }).catch((error)=>{
                console.log(error);
            })
        },
        changeExist:function(name,id){//选择已有的云分析
            this.analysis_list = false;
            this.analysisName = name;
            this.proId = id;
        },
        changeclould:function(item){
            this.proId = item.id;
            this.analysisName = item.proname;
        }
    },
    components:{
        child
    }
}
</script>