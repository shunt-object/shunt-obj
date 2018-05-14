<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback">顾问</p>
</div>
<div class="adviser" style="background:#fff;">
    <div class="adviser-title">
        <i class="iconfont icon-jibenxinxi main-color" style="color:#da121a"></i>预约信息
    </div>
    <div class="adviser-select">
        <div class="adviser-sele-list adviser-sele-on">
            <button>已预约顾问</button>
        </div>
        <div class="adviser-sele-list">
            <button>已预约课程</button>
        </div>
    </div>
    <div class="adviser-table">
        <table>
            <thead>
                <tr>
                    <th>已预约顾问</th>
                    <th>预约时间</th>
                    <th>预约是由</th>
                    <th>备注</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in hisclasslist">
                    <td>--</td>
                    <td>预约时间</td>
                    <td>预约是由</td>
                    <td>备注</td>
                    <td><i class="iconfont icon-bianji" style="margin-right:10px;cursor:pointer;"></i><i class="iconfont icon-shanchu" style="cursor:pointer;"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="adviser-title">
        <i class="iconfont icon-jibenxinxi main-color" style="color:#da121a"></i>智识学院
    </div>
    <div class="adviser-cafe row">
        <div class="col-md-4" v-for="item in cafelist">
            <div class="bigcafe-desc-list">
                <img :src="item.userProfessor.headImg" alt="" v-on:click="teamdetail(item.userProfessor.id)">
                <div class="bigcafe-desc-name">{{item.realname}}</div>
                <div class="bigcafe-desc-jobs">{{item.userProfessor.title}}</div>
                <div class="bigcafe-desc-honour">{{item.userProfessor.desc}}</div>
                <button class="bigcafe-desc-btn" v-on:click="yuyue(item)">我要预约</button>   
            </div>
        </div>
    </div>
</div>
<!-- 预约课程弹框 -->
    <el-dialog title="确认预约" :visible.sync="dialogteam" style="text-align:left;" class="teamdia">
        <div class="teamdia-box">
            <div class="teamdia-list">
                <div class="row">
                    <div class="col-md-3 teamdia-key"><span style="color:#da121a;">*</span>预约时间：</div>
                    <div class="col-md-9" style="padding-left:0px !important;">
                        <el-date-picker popper-class="bigcafe-time" v-model="apponitProf.appointTime" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions0" value-format="yyyy-MM-dd HH:mm:ss">
                        </el-date-picker>
                    </div>
                </div>
            </div>
            <div class="teamdia-list">
                <div class="row">
                    <div class="col-md-3 teamdia-key">预约事由：</div>
                    <div class="col-md-9" style="padding-left:0px !important;">
                        <textarea class="teamdia-text" v-model="apponitProf.reason"></textarea>
                    </div>
                </div>
            </div>
            <div class="teamdia-list">
                <div class="row">
                    <div class="col-md-3 teamdia-key">备注：</div>
                    <div class="col-md-9" style="padding-left:0px !important;">
                        <textarea class="teamdia-input" v-model="apponitProf.remark"></textarea>
                    </div>
                </div>
            </div>           
            <div class="">
                <div class="teamdia-notice">
                    <p>温馨提示：</p>
                    1、预约成功我们的专职客服经理会尽快与您联系。<br>
                    2、也可以通过Prof. 吴和400-828-7308直接与我们沟通。<br>
                </div>
            </div>
            <div class="teamdia-btn">
                <button class="teamdia-btn-save" v-on:click="submit()">确定</button>
                <button class="teamdia-btn-cel" v-on:click="cancel()">取消</button>
            </div>   
        </div>         
    </el-dialog>

</div>
</template>
<script>
import '../adviser/adviser.css'
export default {
    name:'adviser',
    data(){
        return {
            cafelist:[],
            apponitProf:{
                appointTime: "",
                apponitUser: "",
                pid: '',
                reason: "",
                remark: ""
            },
            information:'',
            date:'',
            dialogteam:false,
            pickerOptions0:{
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7
                }
            },
            checkedItem:'',
            hisclasslist:[]

        }
    },
    mounted:function(){
        this.information = JSON.parse(sessionStorage.getItem("account"));
        this.date = new Date();
        this.apponitProf.appointTime = this.date.getFullYear()+'-'+(this.date.getMonth()+1)+'-'+this.date.getDate()+' '+this.date.getHours()+':'+this.date.getMinutes()+':'+this.date.getSeconds();
        this.apponitProf.apponitUser = JSON.parse(sessionStorage.getItem("account")).username;
        this.getlist();
        this.getprof();
    },
    methods:{
        getprof:function(){
            let obj = {
                pageReq: {
                    page: 0,
                    size: 10,
                },
                type: "prof"
            };
            this.$this.post('/broker/apponit/getApponit',JSON.stringify(obj)).then((response)=> {
                this.hisclasslist = response.data.data.content;
            }).catch((error)=> {
                console.log(error);
            });
        },
        yuyue:function(item){
            this.checkedItem = item;
            this.dialogteam = true;
        },
        submit:function(){
            this.apponitProf.pid = this.checkedItem.userProfessor.id;
            this.dialogteam = false;
            this.$this.post('/broker/apponit/saveApponitProf',JSON.stringify(this.apponitProf)).then((response)=> {
                //console.log(response);
                this.apponitProf = {
                    appointTime: this.apponitProf.appointTime,
                    apponitUser: this.apponitProf.apponitUser,
                    pid: '',
                    reason: "",
                    remark: ""
                };
            }).catch((error)=> {
                console.log(error);
            });
        },
        cancel:function(){
            this.dialogteam = false;
        },
        getlist:function(){
            this.$this.get('/broker/prof/getList').then((response)=>{
                //console.log('---',response.data);
                this.cafelist = response.data.data;
            }).catch((error)=>{

            })
        },
    }
}
</script>

