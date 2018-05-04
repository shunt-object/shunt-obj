<template>
<div class="total">
    <div class="total-header">
        <span></span>
        <router-link class="zong" to="/appcenterList">应用市场</router-link>
        ><p class="comback">云代理查询助手</p>
    </div>
    <div class="appcenterProxy appcenterPrice">
        <div class="appcplan-list"> 
            <el-form :model="matchBo" :rules="rules" ref="matchBo" label-width="80px">
                <el-form-item label="云厂商" prop="serverId" class="appcenter-from-select">
                    <el-select v-model="matchBo.serverId" placeholder="请选择云厂商">
                        <el-option v-for="item in clouldcompany" :label="item.name" :value="item.id" :key="JSON.stringify(item.id)"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="区域" prop="region" class="appcenter-from-select">
                    <el-select v-model="matchBo.region" placeholder="请选择区域">
                        <el-option v-for="item in region" :label="item.region" :value="item.code" :key="JSON.stringify(item.code)"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="appcplan-btn">
                    <el-button type="button" class="appcplan-button" v-on:click="submit('matchBo')">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="appcenterPrice-table" v-if="proxylist.length>0">
            <table>
                <thead>
                    <tr>
                        <th>联系人</th>
                        <th>联系人电话</th>
                        <th>联系人地址</th>
                        <th>代理商级别</th>
                        <th>评星</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in proxylist">
                        <td>{{item.name}}</td>
                        <td>{{item.tel}}</td>
                        <td>{{item.address}}</td>
                        <td>{{item.serverLevel}}</td>
                        <td><i v-for="(i,index) in 5" class="iconfont icon-xingxing" :class="item.star>index?'staractive':'starnone'"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="nodata" v-if="proxyshow==true">
            <img src="../../../../assets/compare-nodata.png" alt="">
            <br>
            暂无此信息，具体请联系Prof. 吴。
        </div>
    </div>
</div>
</template>
<script>
import '../appcenterProxy/appcenterProxy.css';
export default {
    name:'appcenterProxy',
    data(){
        return {
            matchBo:{
                region: '',
                serverId: ''
            },
            rules:{
                serverId:[
                    { required: true, message: '请选择云厂商', trigger: 'blur,change' },
                ],
                region:[
                    { required: true, message: '请选择区域', trigger: 'blur,change' },
                ],
            },
            clouldcompany:[],
            region:[],
            proxylist:[],
            proxyshow:false
        }
    },
    mounted:function(){
        this.getCloudlist();
        this.getRegion(-1);
    },
    methods:{
        getCloudlist:function(){
            this.$this.get('/broker/price/suppliers/list').then((res)=>{
               // console.log(res.data.data);
                for(let i=0;i<res.data.data.length;i++){                    
                    for(let n in res.data.data[i]){
                        this.clouldcompany.push({id:n,name:res.data.data[i][n]})
                    }
                }
            }).catch((error)=>{})
        },
        getRegion:function(id){
            this.$http.get('/broker/price/region/'+id).then((response)=>{
                //console.log('----',response.data.data);
                if(id==-1){
                    this.getRegion(response.data.data[0].id);
                }else{
                    this.region = response.data.data;
                }                
            }).catch((error)=>{
            })
        },
        submit:function(value){
            this.$refs[value].validate((valid) => {
                if (valid) {
                    this.$this.post('/broker/app/tool/bp/search',JSON.stringify(this.matchBo)).then((response)=>{
                        //console.log('---',response.data);
                        this.proxylist = response.data.data;
                        if(response.data.data.length<1){
                            this.proxyshow = true;
                        }
                    }).catch((error)=>{})
                } else {
                    return false;
                }
            });
        },
    }
}
</script>
