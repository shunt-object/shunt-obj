<template>
    <div class="total Lists">
        <div class="total-header">
            <span></span>
            总览
        </div>
        <div class="vis-main">
                 <el-form class="row" style="padding-top:20px;">
                       <div class="col-md-2"> 
                            <el-form-item  class="resourceGroup-from-item">
                                <el-date-picker v-model="startDate"  type="date" placeholder="选择开始时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" :picker-options="pickerOptions0" > </el-date-picker>
                                <div class="el-form-item__error" v-show="false">起始时间不能为空</div>
                            </el-form-item>
                       </div>
                       <div class="col-md-2">
                            <el-form-item >
                                <el-date-picker v-model="expireDate"  type="date"  placeholder="选择结束时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd"  :picker-options="pickerOptions1"> </el-date-picker>
                                <div class="el-form-item__error" v-show="false">结束时间不能为空</div>
                            </el-form-item>
                        </div>
                        <div class="col-md-2"><input type="text" placeholder="请输入手机号" v-model="phones" style="height:40px;border:1px solid #dcdfe6;border-radius: 4px;text-indent:4px;color:#606266"></div>
                        <div class="col-md-1 shuai" v-on:click="sxu">筛选</div>
                 </el-form>
              <table id="examples" class="table table-striped table-bordered planlist-table" border="1">
                    <thead>
                        <tr style="margin-top:50px; text-align:center" id="tryeer">
                            <th class="col-md-1 text-center">用户姓名</th>
                            <th class="col-md-2 text-center">手机号</th>
                            <th class="col-md-2 text-center">应用名称</th>
                            <th class="col-md-2 text-center">模块</th>
                            <th class="col-md-1 text-center">状态</th>
                            <th class="col-md-3 text-center">时间</th>
                        </tr>
                    </thead>
                    <tbody id="myTables" >
                        <tr  class="  ls text-left" id="trs" width="100%" v-for="ine in ine">
                            <td v-if="ine.realname==''">未填写</td>
                            <td v-else>{{ine.realname}}</td>
                            <td v-if="ine.phone==null">未填写</td>
                            <td v-else>{{ine.phone}}</td>
                            <td >{{ine.appname}}</td>
                            <td >{{ine.name}}</td>
                            <td v-if="ine.task_status==2">已完成</td>
                            <td v-else-if="ine.task_status==1">已做未完成</td>
                            <td v-else-if="ine.task_status==0">未完成</td>
                            <td >{{ine.update_time}}</td>
                        </tr>
                    </tbody>    
            </table>  
            <div class="block" style="text-align:right">
                    <el-pagination 
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage1"
                        :page-size="6"
                        layout="total, prev, pager, next"
                        :total="Number(this.potal)">
                    </el-pagination>
                </div>
            </div>                  
        </div>
    </div>
</template>
<style>

::-webkit-input-placeholder { /* WebKit browsers */ 
color: #c1c5cd; 
} 
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
color: #c1c5cd; 
} 
::-moz-placeholder { /* Mozilla Firefox 19+ */ 
color:#c1c5cd; 
} 
:-ms-input-placeholder { /* Internet Explorer 10+ */ 
color: #c1c5cd; 
} 
.shuai{
    height:40px;
    width:50px;
    color:#fff;
    border-radius:4px;
    line-height:40px;
    background:#ccc;
}
.shuai:hover{
    cursor:pointer;
}
.el-input__inner:focus {
    border-color: #ccc !important;
    outline: 0;
}
    .vis-main{
        width:100%;
        height:100vh;
        background:#fff;
    }
    .vis-main tr{
        height:40px !important;
    }
    .vis-main th{
        height:40px !important;
    }
    .vis-main tr{
        line-height:40px !important;
    }
    .vis-main  th{
        line-height:40px !important;
    }
    .el-pager li.active {
        color: #da121a !important;
    }
    .el-pager li:hover {
        color: #da121a !important;
    }
    .el-pagination button:hover {
        color: #da121a !important;
    }
</style>
<script>
export default {
     name:"vis",
    data (){
        let that = this;
        return {
            currentPage1: 1,
             totalPages:"",
             sizePage:6,
             formLabelWidth: '190px',
             startDate:"",
             expireDate:"",
             ine:[],
             pages:0,
             potal:"",
             phones:"",
           pickerOptions0: {
                disabledDate(time) {
                    return time.getTime() > Date.now() - 8.64e6 //使大于今天的都日期都不能选择
                }
            },
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() >Date.now() - 8.64e6 ||
                        time.getTime() < new Date(that.startDate).getTime();
                }
            }
        }
    },
    methods:{
                handleSizeChange:function(val){
                    
                },
                handleCurrentChange:function(val){
                    this.pages = val-1;
                     this.diao();
                    // var obj = {
                    //         "endTime": -1,
                    //         "pageReq": {
                    //             "page": 0,
                    //             "size": 6,
                    //         },
                    //         "startTime": -1
                    //     };
                    // this.$this.get('/broker/result/result/list').then((pon)=>{  //获取消息类型
                    //             this.lei = pon.data.data
                    //     }).catch((error)=>{
                    // })

                },
                diao:function(){
                     var obj = {
                                "endTime": -1,
                                "pageReq": {
                                    "order": "",
                                    "page": this.pages,
                                    "size": 6,
                                    "sort": ""
                                },
                                "phone":this.phones,
                                "startTime": -1
                            }
                    this.$this.post('/broker/result/result/list',obj).then((pon)=>{  //获取消息类型
                                this.ine = pon.data.content;
                                console.log(pon)
                                this.potal = pon.data.totalElements;
                        }).catch((error)=>{
                    })
                },
                sxu:function(){
                //   if(this.startDate==""){
                      
                //   }
                    if(this.startDate==""&&this.phones==""&&this.expireDate==""){
                        return false;
                    }else if(this.startDate!=""&&this.expireDate!=""&&this.phones==""){
                            var startTime = Date.parse(new Date(this.startDate))/1000;
                            var endTime = Date.parse(new Date(this.expireDate))/1000;
                            var obj = {
                                "endTime": endTime,
                                "pageReq": {
                                    "order": "",
                                    "page": this.pages,
                                    "size": 6,
                                    "sort": ""
                                },
                                "phone":this.phones,
                                "startTime": startTime
                            }
                    this.$this.post('/broker/result/result/list',obj).then((pon)=>{  //获取消息类型
                                this.ine = pon.data.content;
                                this.potal = pon.data.totalElements;
                        }).catch((error)=>{
                    })
                   }else if(this.startDate==""&&this.expireDate==""&&this.phones!=""){
                        let phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17([0-9]))|(18[0-9]))\d{8}$/;
                        if(phoneReg.test(this.phones)==true){
                            this.diao();
                        }
                   }else if(this.startDate!=""&&this.expireDate!=""&&this.phones!=""){
                       let phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17([0-9]))|(18[0-9]))\d{8}$/;
                        if(phoneReg.test(this.phones)==true){
                             var startTime = Date.parse(new Date(this.startDate))/1000;
                            var endTime = Date.parse(new Date(this.expireDate))/1000;
                             var obj = {
                                "endTime": endTime,
                                "pageReq": {
                                    "order": "",
                                    "page": this.pages,
                                    "size": 6,
                                    "sort": ""
                                },
                                "phone":this.phones,
                                "startTime": startTime
                            }
                            this.$this.post('/broker/result/result/list',obj).then((pon)=>{  //获取消息类型
                                        this.ine = pon.data.content;
                                        this.potal = pon.data.totalElements;
                                }).catch((error)=>{
                            })
                        }
                      
                   }
                }
    },
    mounted:function(){
                   this.diao();
    }
}
</script>