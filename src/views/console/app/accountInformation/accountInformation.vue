<template>
<div class="total">
<!-- 公共的样式 -->
<div class="total-header">
    <span></span>
    账号信息
</div>
<div class="accountInfor-box">
    <div class="accountInfor-title">基本资料</div>
    <div class="accountInfor-list">
        <span class="accountInfor-list-key">
            <span class="account-icon"><i class="iconfont icon-yonghu-tianchong"></i></span>用户账号：
        </span>
        <span class="accountInfor-list-val">{{information.username}}</span>
    </div>
    <div class="accountInfor-list">
        <span class="accountInfor-list-key">
            <span class="account-icon"><i class="iconfont icon-yonghu"></i></span>用户姓名：
        </span>
        <span class="accountInfor-list-val" v-if="edit==false">{{information.realname}}</span>
        <input class="input-updata" type="text" v-model="information.realname" v-if="edit==true">
        <button class="edit-btn" v-on:click="updata('user')" v-if="edit==false">
            <span class="account-icon-edit"><i class="iconfont icon-bianji"></i></span>编辑
        </button>
        <button class="account-save-btn" v-if="edit==true" v-on:click="saveuser()">
            <i class="iconfont icon-duihao2"></i>保存
        </button>
        <button class="account-cel-btn" v-if="edit==true" v-on:click="updata('user')">
            <i class="iconfont icon-shanchuguanbicha2"></i>取消
        </button>
    </div>
    <div class="accountInfor-list">
        <span class="accountInfor-list-key">
            <span class="account-icon"><i class="iconfont icon-qiyeguanli"></i></span>企业名称：
        </span>
        <span class="accountInfor-list-val" v-if="company==false">{{information.tenant}}</span>
        <input class="input-updata" type="text" v-model="information.tenant" v-if="company==true">
        <button class="edit-btn" v-on:click="updata('company')" v-if="company==false">
            <span class="account-icon-edit"><i class="iconfont icon-bianji"></i></span>编辑
        </button>
        <button class="account-save-btn" v-if="company==true" v-on:click="savecompany()">
            <i class="iconfont icon-duihao2"></i>保存
        </button>
        <button class="account-cel-btn" v-if="company==true" v-on:click="updata('company')">
            <i class="iconfont icon-shanchuguanbicha2"></i>取消
        </button>
    </div>
    <div class="accountInfor-list">
        <span class="accountInfor-list-key">
            <span class="account-icon"><i class="iconfont icon-qiyeleixing"></i></span>用户类型：
        </span>
        <span class="accountInfor-list-val-type" v-if="information.utype==null">个人</span>
        <span class="accountInfor-list-val-type" v-if="information.utype==2">企业</span>
        <span class="accountInfor-list-val-type" v-if="information.utype==3">运营商</span>
        <span class="accountInfor-list-val-type" v-if="information.utype==4">政府</span>
    </div>
    <div class="accountInfor-list">
        <span class="accountInfor-list-key">
            <span class="account-icon"><i class="iconfont icon-xingye"></i></span>所属行业：
        </span>
        <span class="accountInfor-list-val" v-if="industry!=null&&isIndustry!=true">{{industry.name}}</span>
        <button class="edit-btn" v-on:click="industryEdit()" v-if="industry!=null&&isIndustry!=true">
            <span class="account-icon-edit"><i class="iconfont icon-bianji"></i></span>编辑
        </button>
        <span class="accountInfor-list-val" v-if="industry==null&&isIndustry!=true" style="cursor:pointer;" v-on:click="industryEdit()">请选择所属的行业</span>
        <select v-model='industry' v-if="isIndustry==true" class="regionClass">
            <option v-for="item in industryList" :value="item">{{item.name}}</option>
        </select>
        <button class="account-save-btn" v-if="isIndustry==true" v-on:click="industrySave()">
            <i class="iconfont icon-duihao2"></i>保存
        </button>
        <button class="account-cel-btn" v-if="isIndustry==true" v-on:click="industryDel()">
            <i class="iconfont icon-shanchuguanbicha2"></i>取消
        </button>
    </div>
    <div class="accountInfor-list">
        <span class="accountInfor-list-key">
            <span class="account-icon"><i class="iconfont icon-nationaarea"></i></span>地区：
        </span>
        <span class="accountInfor-list-val"v-if="province!=null&&region!=true">
            {{province.province}}&nbsp;<span v-if="city!=null">{{city.city}}</span>&nbsp;<span v-if="area!=null">{{area.area}}</span>
        </span>
        <button class="edit-btn" v-if="province!=null&&region!=true" v-on:click="regionEdit()">
            <span class="account-icon-edit"><i class="iconfont icon-bianji"></i></span>编辑
        </button>
        <span  v-if="province==null&&region!=true" style="cursor:pointer;" v-on:click="regionEdit()">请选择地区</span>
        <select v-if="region==true" v-model="province" v-on:change="changeProvince(province)" class="regionClass">
            <option v-for="item in provinceList" :value="item">{{item.province}}</option>
        </select>
        <select v-if="region==true" v-model="city" v-on:change="changeCity(city)" class="regionClass">
            <option v-for="item in cityList" :value="item">{{item.city}}</option>
        </select>
        <select v-if="region==true" v-model="area" class="regionClass">
            <option v-for="item in areaList" :value="item">{{item.area}}</option>
        </select>
        <button class="account-save-btn" v-if="region==true" v-on:click="regionSave()">
            <i class="iconfont icon-duihao2"></i>保存
        </button>
        <button class="account-cel-btn" v-if="region==true" v-on:click="regionDel()">
            <i class="iconfont icon-shanchuguanbicha2"></i>取消
        </button>
    </div>
</div>
</div>
</template>
<script>
import '../accountInformation/accountInformation.css'
export default{
    name:'accountInformation',
    data(){
        return {
            information:'',
            edit:false,
            company:false,
            industry:'',
            isIndustry:false,
            industryList:'',
            province:'',
            city:'',
            area:'',
            region:false,
            provinceList:[],
            areaList:[],
            cityList:[]
        }
    },
    mounted:function(){
        this.information = JSON.parse(sessionStorage.getItem("account"));
        this.industry = JSON.parse(sessionStorage.getItem("account")).industryStr;
        this.province = JSON.parse(sessionStorage.getItem("account")).province;
        this.city = JSON.parse(sessionStorage.getItem("account")).city;
        this.area = JSON.parse(sessionStorage.getItem("account")).area;
        console.log(this.industry);
    },
    methods:{
        updata:function(dom){
            if(dom=='user'){
                this.information.realname = JSON.parse(sessionStorage.getItem("account")).realname;
                this.edit==true?this.edit=false:this.edit=true;
            }else{
                this.information.tenant = JSON.parse(sessionStorage.getItem("account")).tenant;
                this.company==true?this.company=false:this.company=true;
            }
        },
        saveuser:function(){
            this.edit==true?this.edit=false:this.edit=true;
            let obj = {
                id:this.information.id,
                realname:this.information.realname,
                tenant:this.information.tenant
            };
            this.gethttp(obj);
        },
        savecompany:function(){
            this.company==true?this.company=false:this.company=true;
            //this.setOption(this.information.id,this.information.realname,this.information.tenant);
            this.setOption(this.information.id,this.information.realname,this.information.tenant,this.information.provinceid,this.information.cityid,this.information.areaid,this.information.industry);
        },
        setOption:function(id,realname,tenant,provinceid,cityid,areaid,industry){
            console.log(1111);
            //id,realname,tenant,provinceid,cityid,areaid,industry
            let obj = {
                id:id,
                realname:realname,
                tenant:tenant,
                provinceid:provinceid,
                cityid:cityid,
                areaid:areaid,
                industry:industry
            };
            this.gethttp(obj);
        },
        gethttp:function(str){
            let string = JSON.stringify(str);
            this.$this.post('/broker/user/update',string).then((response)=>{
                console.log('-----',response.data.data);
                sessionStorage.setItem("account",JSON.stringify(response.data.data));
            }).catch((error)=>{

            })
        },
        getIndustry:function(){
            this.$this.get('/broker/prop/industry/').then((response)=>{
                this.industryList = response.data.data;
                //console.log('province',response);
            }).catch((error)=>{
            })
        },
        industryEdit:function(){
            this.isIndustry = true;
            this.getIndustry();
        },
        industryDel:function(){
            this.isIndustry = false;
        },
        industrySave:function(){
            this.isIndustry = false;
            this.setOption(this.information.id,this.information.realname,this.information.tenant,this.information.provinceid,this.information.cityid,this.information.areaid,this.industry.id);
        },
        regionEdit:function(){
            this.region = true;
            this.getProvince();
            if(this.city!=null){
                this.getCity(this.province.provinceid);
            }
            if(this.area!=null){
                this.getArea(this.city.cityid);
            }
        },
        getProvince:function(){
            this.$this.get('/broker/prop/provinces/').then((response)=>{
                this.provinceList = response.data.data;
                //console.log('province',response);
            }).catch((error)=>{
            })
        },
        getCity:function(provinceid){
            this.$this.get('/broker/prop/citys/'+provinceid).then((response)=>{
                this.cityList = response.data.data;
                //console.log('city',response);
            }).catch((error)=>{
            })
        },
        getArea:function(cityid){
            this.$this.get('/broker/prop/areas/'+cityid).then((response)=>{
                this.areaList = response.data.data;
                //console.log('city',response);
            }).catch((error)=>{
            })
        },
        changeProvince:function(provinceid){
            this.city = '';
            this.area = '';
            this.getCity(provinceid.provinceid);
        },
        changeCity:function(city){
            this.area = '';
            this.getArea(city.cityid);
        },
        regionDel:function(){
            this.region = false;
        },
        regionSave:function(){
            this.region = false;
            this.setOption(this.information.id,this.information.realname,this.information.tenant,this.province.provinceid,this.city.cityid,this.area.areaid,this.information.industry);
        }
    }
}
</script>