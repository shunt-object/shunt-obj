<template>
   <div id="totalMain">
        <div id="totalTitle">
            <div class="ruleButton" :class="btnIndex==index?'ruleButtonActive':''" v-for="(button,index) in buttonName" @click="btnClick(index)">{{button.name}}</div>
        </div>
        <div id="totalCenter"></div>
        <div>
            <el-form ref="formSeach" :model="formSeach" label-width="80px">
                <div class="inputDivs">
                    <el-form-item label="规则ID">
                        <el-select v-model="formSeach.ruleId" placeholder="请选择规则ID" class="ruls">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="inputDivs typeNm">
                    <el-form-item label="类型">
                        <el-select v-model="formSeach.type" placeholder="请选择类型" class="ruls">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="inputDivs">
                     <el-form-item label="处理方式">
                        <el-select v-model="formSeach.handling" placeholder="请选择处理方式" class="ruls">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="inputDivs">
                    <el-form-item label="输入方向端口组" class="rule_group">
                        <el-input v-model="formSeach.portGroup" placeholder="请输入输入方向端口组" class="ruls"></el-input>
                    </el-form-item>
                </div>
                <div class="inputDiver">
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('formSeach')">查询</el-button>
                        <span style="text-decoration:underline;margin-left:30px;cursor:pointer" @click="clear()">清空</span>
                    </el-form-item>
                </div>
            </el-form>
        </div>
        <div id="tableMain">
            <el-table :data="tabList" ref="multipleTable" border style="width: 100%;text-align:center" :highlight-current-row="true" :header-cell-style="{background:'#f4f4f4'}" @selection-change="handleSelectionChange">
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
                <el-table-column
                fixed="left"
                prop="priority"
                label="规则优先级"
                width="150">
                </el-table-column>
                 <el-table-column
                prop="ruleId"
                label="规则ID"
                fixed="left"
                width="120">
                </el-table-column>
                <el-table-column
                prop="type"
                label="类型"
                width="130">
                 <template slot-scope="scope">
                    {{scope.type==1?"真的":'假的'}}
                </template>
                </el-table-column>
                <el-table-column
                prop="typeNum"
                label="类型值"
                width="500">
                </el-table-column>
                <el-table-column
                prop="writeIn"
                label="输入组"
                width="300">
                </el-table-column>
                <el-table-column
                prop="group"
                label="处理方式"
                width="120">
                </el-table-column>
                 <el-table-column
                prop="writeOut"
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
                :current-page.sync="currentPage" :page-sizes="[5,10,15,20]" :page-size="5"
                background
                layout="sizes,total, prev, pager, next"
                :total="10">
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
               currentPage:1,
               dialogVisible:false,
               pageIndex:5,
               deteleShow:0,
               multipleTable:[],
               buttonName:[
                   {name:"创建规则"},
                   {name:"批量绑定组"},
                   {name:"批量删除"}
               ],
               btnIndex:10,
               formSeach:{
                   ruleId:"",
                   type:"",
                   handling:"",
                   portGroup:""
               },
               tabList:[
                    {id:1,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:2,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:3,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:4,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:5,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:1,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:2,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:3,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:4,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:5,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:1,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:2,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:3,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:4,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
                    {id:5,priority:"n+++优先级-n",ruleId:1,type:"l",typeNum:"spamnj--dnnd:ddsjkdf=fff-m,dddddddd-ddd",writeIn:'dffffjshdffffjshdffffjshf',writeOut:'hhjshfgj',group:'转发'},
               ]
            }
        },
        mounted:function(){

        },
        methods:{
            // 弹窗关闭之前
            handleClose:function(){
                console.log(1)
                this.dialogVisible = false;
            },

            // 分页相关
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },

            /**表格操作 */
            // 表格多选
            handleSelectionChange:function(val){
                this.multipleTable = val;
                console.log(val)
            },
            // 表格单行删除
            deleteOnlyClick:function(row){
                console.log(row)
                this.deteleShow = 0;
                this.dialogVisible = true;
            },
            // 表格删除确定
            dialogVisibleCenter:function(){
                if(deteleShow==0){  //单行删除

                }else{ //批量删除

                }
            },
             
            btnClick:function(index){
                this.btnIndex = index;
               switch(index){
                    case 0:  //创建规则
                        this.$router.push({path:'/consolePage/ruleConfig/rulesCreate'})
                    break;
                    case 1:
                        alert(2)
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
                //             console.log()
                //         }else{
                //             console.log('error submit!!');
                //             return false;
                //         }
                //  })
            },
            clear:function(){
                this.formSeach = {};          
            }
        },
    }
</script>
