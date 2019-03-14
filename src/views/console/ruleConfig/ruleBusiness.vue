<template>
   <div id="totalMain">
        <div id="totalTitle">
            <div class="ruleButton" :class="btnIndex==index?'ruleButtonActive':''" v-for="(button,index) in buttonName" @click="btnClick(index)">{{button.name}}</div>
        </div>
        <div id="totalCenter"></div>
        <div>
            <el-form ref="formSeach" :model="formSeach" :rules="rules" label-width="80px">
                <div class="inputDivs">
                    <el-form-item label="规则ID" prop="ruleId">
                        <el-select v-model="formSeach.ruleId" placeholder="请选择规则ID" class="ruls" >
                            <el-option :label="item.name" :value="item.value" :key="item.value" v-for="(item,index) in searchId_List"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="inputDivs typeNm">
                    <el-form-item label="类型" prop="type">
                        <el-select v-model="formSeach.type" placeholder="请选择类型" class="ruls">
                            <el-option :label="item.name" :value="item.value" :key="item.value"  v-for="item in searchType_List"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <!--<div class="inputDivs">
                     <el-form-item label="处理方式" prop="handling">
                        <el-select v-model="formSeach.handling" placeholder="请选择处理方式" class="ruls">
                            <el-option :label="item.name" :value="item.value" :key="item.value" v-for="item in searchAction_List"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="inputDivs">
                    <el-form-item label="输入方向端口组" class="rule_group" prop="portGroup">
                        <el-input v-model="formSeach.portGroup" placeholder="请输入方向端口组" class="ruls"></el-input>
                    </el-form-item>
                </div>-->
                <div class="inputDiver">
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('formSeach')">查询</el-button>
                        <span style="text-decoration:underline;margin-left:30px;cursor:pointer" @click="clear()">清空</span>
                    </el-form-item>
                </div>
            </el-form>
        </div>
        <div id="tableMain">
            <el-table :data="tablistPage" @selection-change="handleSelectionChange" ref="multipleTable" border style="width: 100%;text-align:center" :highlight-current-row="true" :header-cell-style="{background:'#f4f4f4'}">
                 <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                fixed="left"
                type="index"
                label="序号"
                width="80">
                </el-table-column>
                <!--<el-table-column
                fixed="left"
                prop="priority"
                label="规则优先级"
                width="150">
                </el-table-column>-->
                 <el-table-column
                prop="ruleId"
                label="规则ID"
                fixed="left"
                width="120">
                </el-table-column>
                <el-table-column
                label="类型"
                width="130">
                 <template slot-scope="scope">
                    {{
                        scope.row.listName=='matchVlan'?"精准Vlan规则":scope.row.listName=='matchFiveTupleV4'?'精准五元组':scope.row.listName=='maskIpv4'?'掩码五元组':scope.row.listName=='appProto'?'应用层协议':scope.row.listName=='imsi'?'IMSI':scope.row.listName=='keywordFloat'?'窗口浮动范围特征码':scope.row.listName=='keywordMaxLen'?'全包范围浮动特征码':scope.row.listName=='keywordSingle'?'固定位置特征码':scope.row.listName=='signalling'?'信令协议':scope.row.listName=='url'?'URL':""
                    }}
                </template>
                </el-table-column>
                <!--<el-table-column
                prop="typeNum"
                label="类型值"
                width="500">
                </el-table-column>-->
                <!--<el-table-column
                prop="writeIn"
                label="输入组"
                width="300">
                </el-table-column>-->
                <el-table-column
                label="处理方式"
                width="120">
                 <template slot-scope="scope">
                    {{scope.row.action=='NONE'?'丢弃':scope.row.action=='FORWARD'?'转发':''}}
                </template>
                </el-table-column>
                 <el-table-column
                prop="outGroup"
                label="输出组"
                width="160">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="450">
                <template slot-scope="scope">
                    <span class="span" @click="handleClick(scope.row)" >置顶</span>
                    <span class="span" @click="handleClick(scope.row)" >置底</span>
                    <span class="span" @click="handleClick(scope.row)" >插入</span>
                    <span class="span" @click="handleClick(scope.row)" >绑定组</span>
                    <span class="span" @click="handleClick(scope.row)" >编辑</span>
                    <span class="span" @click="handleClick(scope.row)" >详情</span>
                    <span class="span" @click="deleteOnlyClick(scope.row)"  id="colorReder">删除</span>
                </template>
                </el-table-column>
            </el-table>
            <div class="block" style="text-align:right;margin-top:30px;padding-bottom:30px;">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page.sync="currentPage" :page-sizes="[1,2,3,4]" :page-size="pageSize"
                background
                layout="sizes,total, prev, pager, next"
                :total="total">
                </el-pagination>
            </div>
        </div>

        <!--删除弹出框-->
         <div id="DeleDialog">
            <el-dialog
                :title="deteleShow==0?'删除提示':'批量删除'"
                :visible.sync="dialogVisible"
                :before-close="handleClose">
                <span v-if="deteleShow==1">您已选中{{multipleTable.length}}条规则，是否立即删除？</span>
                <span v-if="deteleShow==0">是否确定删除规则{{}}</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisibleCenter">确 定</el-button>
                </span>
            </el-dialog>
        </div>
        
   </div>
 
</template>
<script>
 import '../ruleConfig/ruleConfig.css'
    export default {
        name:'ruleConfig',
        data(){
            return{
               pageSize:1,
               username:"",
               currentPage:1,
               dialogVisible:false,
               pageIndex:5,
               deteleShow:0,
               total:0,
               onlyTable:"",
               multipleTable:[],
               buttonName:[
                   {name:"创建规则"},
                   {name:"批量绑定组"},
                   {name:"批量删除"}
               ],
               tabLists:[],
               tablistPage:[],
               searchId_List:[],
               searchType_List:[],
               searchAction_List:[],
               btnIndex:10,
               formSeach:{
                   ruleId:"",
                   type:"",
                   handling:"",
                   portGroup:""
               },
               rules: {
                    ruleId: [
                        { required: true, message: '请选择ruleId', trigger: 'change' }
                    ],
                    type: [
                        { required: true, message: '请选择类型', trigger: 'change' }
                    ],
                    handling: [
                        { required: true, message: '请选择处理方式', trigger: 'change' }
                    ],
                    portGroup: [
                        { required: true, message: '请输入方向端口组', trigger: 'blur' }
                    ],
                },
               tabList:[
                    {id:1,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:2,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:3,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:4,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:5,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                   
               ]
            }
        },
        mounted:function(){
            this.username = JSON.parse(sessionStorage.getItem("nxgx")).userName;  //根据uid判断用户名
            this.quanju();

        },
        methods:{
            quanju:function(){
                var obj = {
                "op": "get",
                "user" : this.username, 
                "tableName": [
                    "matchSrcMac",  "matchDstMac", "matchSrcDstMac", "maskMac", 
                    "matchVlan",  "maskVlan", "matchSipV4", "matchDipV4",
                    "matchDipSportV4", "matchSipDportV4", "matchProtoSipV4", "matchProtoDipV4", 
                    "matchFiveTupleV4", "matchOtherV4", "maskIpv4", "matchProtoSportV4",  
                    "matchProtoDportV4", "matchSipV6", "matchDipV6", "matchDipSportV6", 
                    "matchSipDportV6", "matchProtoSipV6", "matchProtoDipV6", "matchFiveTupleV6", 
                    "matchOtherV6", "maskIpv6",   "tcpFlag",  "keywordSingle", 
                    "keywordFloat", "keywordMaxLen","url", "imsi", 
                    "appProto", "signalling"
                    ],
                "ruleId":"all"
                };
                this.listAjax(obj)
            },
            listAjax:function(data){
                this.tabLists = [];this.tablistPage = [];this.searchType_List=[];this.searchId_List=[];
                var arraym = [];var attym = [];
                this.$this.post('api/npuRule',JSON.stringify(data)).then((response)=>{
                    for(var i in response.data.body){
                            for(var k in response.data.body[i].body){
                                response.data.body[i].body[k].listName = i;
                                this.tabLists.push(response.data.body[i].body[k]);
                                this.tablistPage = this.tabLists.slice(0,this.pageSize);
                                this.searchId_List.push({"name":response.data.body[i].body[k].ruleId,"value":response.data.body[i].body[k].ruleId});

                                // key会重复，需要排重
                                if(arraym.indexOf(response.data.body[i].body[k].listName)==-1){
                                    arraym.push(response.data.body[i].body[k].listName);
                                    this.searchType_List.push({"name":response.data.body[i].body[k].listName,"value":response.data.body[i].body[k].listName});
                                }
                             
                               
                                // console.log(this.searchId_List)
                                this.total = this.tabLists.length;   
                            }
                        }  
                }).catch((error)=>{})
            },
            // 弹窗关闭之前
            handleClose:function(){
                this.dialogVisible = false;
            },

            // 分页相关
            handleSizeChange(val) {
                this.pageSize = val;
                this.tablistPage = this.tabLists.slice(0,val)
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
               this.tablistPage = this.tabLists.slice(this.pageSize*(val-1),this.pageSize*(val-1)+this.pageSize);
            },

            /**表格操作 */
            // 表格多选
            handleSelectionChange:function(val){
                 this.multipleTable = [];
                if(val.length==0){
                    return false;
                }else{ 
                    for(var t = 0;t<val.length;t++){
                        this.multipleTable.push(val[t].ruleId);
                    }
                }
                
                console.log(val)
            },
            delAjax:function(data){
                 var obj = {
                            "op": "del",
                            "user" : this.username, 
                            "body": data
                        };
                this.$this.post('api/npuRule',JSON.stringify(obj)).then((response)=>{
                    this.$layer.msg("删除成功！");
                     this.dialogVisible = false;
                     this.quanju();
                }).catch((error)=>{})
            },
            // 表格单行删除
            deleteOnlyClick:function(row){
                console.log(row)
                this.deteleShow = 0;
                this.onlyTable = row.ruleId;
                this.dialogVisible = true;
            },
            // 表格删除确定
            dialogVisibleCenter:function(){
                if(this.deteleShow==0){  //单行删除
                    var onlyDel = [];
                    onlyDel.push(this.onlyTable);
                    this.delAjax(onlyDel);
                }else{ //批量删除
                   this.delAjax(this.multipleTable)
                }
            },
             
            btnClick:function(index){
                this.btnIndex = index;
               switch(index){
                    case 0:  //创建规则
                        this.$router.push({path:'/consolePage/ruleConfig/rulesCreate'})
                    break;
                    case 1:
                        
                    break;
                    case 2:   //表格批量删除
                        if(this.multipleTable.length==0){
                             this.$layer.msg("注意：请先选择一条至多条规则进行批量删除！");
                        }else{
                            this.deteleShow = 1;
                            this.dialogVisible = true;
                            console.log(this.multipleTable)
                        }
                        
                    break;
                }
            },
            onSubmit:function(formName){  //查询条件是否可以为空，如果可以的话是查全部吗
                //  this.$refs[formName].validate((valid) => {
                //         if(valid){
                    if(this.formSeach.type==""&&this.formSeach.ruleId==""){
                         var obj = {
                            "op": "get",
                            "user" : this.username, 
                            "tableName": "all",
                            "ruleId":"all"
                         };
                         this.listAjax(obj);
                    }else if(this.formSeach.type==""&&this.formSeach.ruleId!=""){
                         var obj = {
                            "op": "get",
                            "user" : this.username, 
                            "tableName": "all",
                            "ruleId":this.formSeach.ruleId
                         };
                         this.listAjax(obj);
                    }else if(this.formSeach.type!=""&&this.formSeach.ruleId==""){
                        var array = [];
                         array.push(this.formSeach.type);
                         var obj = {
                            "op": "get",
                            "user" : this.username, 
                            "tableName": array,
                            "ruleId":"all"
                         };
                         this.listAjax(obj);
                    }else if(this.formSeach.type!=""&&this.formSeach.ruleId!=""){
                        var array = [];
                         array.push(this.formSeach.type);
                         var obj = {
                            "op": "get",
                            "user" : this.username, 
                            "tableName": array,
                            "ruleId":this.formSeach.ruleId
                         };
                         this.listAjax(obj);
                    }
                               
                        // }else{
                        //     console.log('error submit!!');
                        //     return false;
                        // }
                //  })
            },
            clear:function(){
                this.formSeach = {};          
            }
        },
    }
</script>
