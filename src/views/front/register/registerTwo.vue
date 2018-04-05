<template>
<div class="registerCommon">
    <div class="reg-header">
        <router-link to="/"><img class="reg-logo" src="../../../assets/login-logo.png" alt=""></router-link>
    </div>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 registerCommon-from">
            <div class="registerCommon-title">欢迎注册CloudBroker²</div>
            <registerStep step="2"></registerStep>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <el-form :model="registerFrom" class="register-ruleForm">
                        <el-form-item label="用户姓名" label-width="80px" class="register-ruleForm-item">
                            <el-input v-model="registerFrom.realname" placeholder="请输入用户姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="公司名称" label-width="80px" class="register-ruleForm-item">
                            <el-input v-model="registerFrom.tenant" placeholder="请输入公司名称"></el-input>
                        </el-form-item>                        
                        <el-form-item label="所属行业" label-width="80px" class="register-ruleForm-item">
                            <el-select class="register-ruleForm-select" v-model="registerFrom.industry" placeholder="请选择所属行业">
                                <el-option class="register-option" v-for="item in industryList" :label="item.name" :value="item.id" :key="JSON.stringify(item.id)"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属区域" label-width="80px" class="register-ruleForm-item">
                            <el-select class="selectThree" v-on:change="changeProvince(registerFrom.province)" v-model="registerFrom.province" placeholder="省">
                                <el-option class="register-option" v-for="item in provinceList" :label="item.province" :value="item.provinceid" :key="JSON.stringify(item.provinceid)"></el-option>
                            </el-select>
                            <el-select class="selectThree" v-on:change="changeCity(registerFrom.city)" v-model="registerFrom.city" placeholder="市">
                                <el-option class="register-option" v-for="item in cityList" :label="item.city" :value="item.cityid" :key="JSON.stringify(item.cityid)"></el-option>
                            </el-select>
                            <el-select class="selectThree" v-model="registerFrom.area" placeholder="区">
                                <el-option class="register-option" v-for="item in areaList" :label="item.area" :value="item.areaid" :key="JSON.stringify(item.areaid)"></el-option>
                            </el-select>
                        </el-form-item>
                        <div class="registerCommon-agree">
                            <input type="checkbox" style="width:14px !important;" v-model="registerFrom.agree">同意并遵守<router-link target="_blank" to="/agreenment" style="width:150px !important">《CloudBroker²服务协议》</router-link>
                        </div>
                        <div class="registerCommon-btn-box">
                            <button type="button" class="registerCommon-btn" v-on:click="submitForm()">下一步</button>
                        </div>                        
                    </el-form>
                    <div class="registerCommon-notice">
                        已有CloudBroker²账号？
                        <a class="registerCommon-login" href="javascript:;" v-on:click="gologin()">请登录</a>
                        <!--<router-link class="registerCommon-login" to="/login">请登录</router-link>-->
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
            
        </div>
        <div class="col-md-3"></div>
    </div>
    <div class="registerCommon-footer">
        <p class="registerCommon-footer-list">版权所有 © 2018 江苏京玉信息技术有限公司&nbsp&nbsp&nbsp&nbsp&nbsp<a style="color:#969696" href="http://www.miitbeian.gov.cn/" target="_blank">苏ICP备18002559号-2</a>&nbsp&nbspTEL：400-828-7308</p>
    </div>
</div>
</template>
<script>
import '../register/registerReturn.css'
import registerStep from '../register/registerStep.vue'
export default{
    name:'registerTwo',
    data(){
        return {
            registerFrom:{
                tenant:'',
                realname:'',
                industry:'',
                province:'',
                city:'',
                area:'',
                agree:true
            },
            industryList:[],
            provinceList:[],
            cityList:[],
            areaList:[]
        }
    },
    mounted:function(){
        this.getIndustry();
        this.getProvince();
    },
    methods:{
        gologin:function(){
            this.$router.push({path:'/login'});
        },
        getIndustry:function(){
            this.$this.get('/broker/prop/industry/').then((response)=>{
                this.registerFrom.industry = response.data.data[0].id;
                this.industryList = response.data.data;
            }).catch((error)=>{
            })
        },
        getProvince:function(){
            this.$this.get('/broker/prop/provinces/').then((response)=>{
                this.registerFrom.province = response.data.data[0].provinceid;
                this.provinceList = response.data.data;
                this.getCity(response.data.data[0].provinceid);
            }).catch((error)=>{
            })
        },
        changeProvince:function(provinceid){
            console.info(provinceid);
            this.city = '';
            this.area = '';
            this.getCity(provinceid);
        },
        getCity:function(provinceid){
            this.$this.get('/broker/prop/citys/'+provinceid).then((response)=>{
                this.cityList = response.data.data;
                this.registerFrom.city = response.data.data[0].cityid;
                this.getArea(response.data.data[0].cityid);
            }).catch((error)=>{
            })
        },
        changeCity:function(cityid){
            this.area = '';
            this.getArea(cityid);
        },
        getArea:function(cityid){
            this.$this.get('/broker/prop/areas/'+cityid).then((response)=>{
                this.registerFrom.area = response.data.data[0].areaid;
                this.areaList = response.data.data;
                //console.log('city',response);
            }).catch((error)=>{
            })
        },
        submitForm:function() {
            //console.log(this.registerFrom.industry);
            if(this.registerFrom.agree==true){
                let obj = {
                    id:this.$route.query.userid,
                    realname:this.registerFrom.realname,
                    tenant:this.registerFrom.tenant,
                    provinceid:this.registerFrom.province,
                    cityid:this.registerFrom.city,
                    areaid:this.registerFrom.area,
                    industry:this.registerFrom.industry
                };
                let string = JSON.stringify(obj);
                this.$this.post('/broker/user/update',string).then((response)=>{
                    //console.log('-----',response.data.data);
                    if(response.data.code==1){
                        this.$router.push({path:'/registerThree'});
                    }
                }).catch((error)=>{

                })
            }else{
                this.$layer.msg('请阅读服务协议');
            }
            
        },
    },
    components:{
        registerStep
    }
}
</script>