<template>
   <div id="totalMain">
        <div id="totalTitle">
            <div class="ruleButton" :class="btnIndex==index?'ruleButtonActive':''" v-for="(button,index) in buttonName" @click="btnClick(index)">{{button.name}}</div>
        </div>
        <div id="totalCenter"></div>
        <div>
            <el-form ref="formSeacher" :model="formSeacher" label-width="80px">
                <div class="inputDivs">
                    <el-form-item label="端口名称" class="rule_group">
                        <el-input v-model="formSeacher.portName" placeholder="请输入端口名称" class="rules"></el-input>
                    </el-form-item>
                </div>
                <div class="inputDivs">
                    <el-form-item label="板卡槽位">
                        <el-select v-model="formSeacher.cardSlot" placeholder="请选择板卡槽位" class="rules">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="inputDivs">
                    <el-form-item label="端口类型">
                        <el-select v-model="formSeacher.portType" placeholder="请选择端口类型" class="rules">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="inputDivs">
                     <el-form-item label="所属组">
                        <el-select v-model="formSeacher.subordinate" placeholder="请选择所属组" class="rules">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="inputDivs">
                     <el-form-item label="端口状态">
                        <el-select v-model="formSeacher.portStatus" placeholder="请选择端口状态" class="rules">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                
                <div class="inputDiver">
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('formSeacher')">查询</el-button>
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
                prop="portName"
                label="端口名称"
                width="150">
                </el-table-column>
                 <el-table-column
                prop="cardSlot"
                label="板卡槽位"
                width="120">
                </el-table-column>
                <el-table-column
                prop="cardSlotNum"
                label="板卡型号"
                width="200">
                </el-table-column>
                <el-table-column
                prop="portStatus"
                label="端口状态"
                width="120">
                </el-table-column>
                <el-table-column
                prop="subordinate"
                label="所属组"
                width="120">
                </el-table-column>
                <el-table-column
                prop="portType"
                label="端口类型"
                width="120">
                </el-table-column>
                <el-table-column
                prop="dksl"
                label="端口速率"
                width="120">
                </el-table-column>
                <el-table-column
                prop="pvid"
                label="PVID"
                width="120">
                </el-table-column>
                <el-table-column
                prop="dkms"
                label="端口模式"
                width="120">
                </el-table-column>
                <el-table-column
                prop="mtu"
                label="帧长度（MTU）"
                width="140">
                </el-table-column>
                <el-table-column
                prop="ipg"
                label="帧间隙（IPG）"
                width="140">
                </el-table-column>
                <el-table-column
                prop="nestvlan"
                label="nestvlan"
                width="120">
                </el-table-column>
                <el-table-column
                prop="ipg"
                label="启用禁止状态"
                width="120">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">启用</el-button>
                    <el-button @click="handleClick(scope.row)" type="text" size="small">禁用</el-button>
                </template>
                </el-table-column>
                   <el-table-column
                prop="ms"
                label="描述"
                width="300">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="450">
                <template slot-scope="scope">
                    <span class="span" @click="handleClick(scope.row)">配置</span>
                    <span class="span" @click="handleClick(scope.row)">加入输入组</span>
                    <span class="span" @click="handleClick(scope.row)">加入输出组</span>
                    <span class="span" @click="jyClick(scope.row)">禁用</span>
                    <span class="span" @click="handleClick(scope.row)">详情</span>
                    <!--<el-button @click="deleteOnlyClick(scope.row)" type="text" size="small" class="colorRed">删除</el-button>-->
                </template>
                </el-table-column>
            </el-table>
            <div class="block" style="text-align:right;margin-top:30px;">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page.sync="currentPage" :page-sizes="[5,10,15,20]" :page-size="5"
                background
                layout="sizes,total, prev, pager, next"
                :total="10">
                </el-pagination>
            </div>
        </div>

        <!--弹出框-->
        <div id="diolog">
            <el-dialog
                :title="btnIndex==1?'批量加入输入组':btnIndex==2?'批量加入输出组':''"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
                <div>
                    <div id="tableMains">
                        <el-table id="tables" :data="tabList" ref="multipleTable" border style="width: 100%;text-align:center" :highlight-current-row="true" :header-cell-style="{background:'#f4f4f4'}" @selection-change="handleSelectionChange">
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
                            prop="portName"
                            label="端口组名称"
                            width="150">
                            </el-table-column>
                            <el-table-column
                            prop="cardSlot"
                            label="类型"
                            width="100">
                            </el-table-column>
                            <el-table-column
                            prop="cardSlotNum"
                            label="组成员"
                            width="220">
                            </el-table-column>
                            <el-table-column
                            prop="portStatus"
                            label="输入方向规则"
                            width="300">
                            </el-table-column>
                            <el-table-column
                            prop="ms"
                            label="输出方向规则"
                            width="300">
                            </el-table-column>
                            <el-table-column
                            fixed="right"
                            label="操作"
                            width="100">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
                                <!--<el-button @click="deleteOnlyClick(scope.row)" type="text" size="small" class="colorRed">删除</el-button>-->
                            </template>
                        </el-table-column>
                     </el-table>
                    </div>
                </div>
                <span slot="footer" class="dialog-footer" id="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </div>
        <!--删除、提示框短的-->
        <div id="DeleDialog">
            <el-dialog
                title="禁用提示"
                :visible.sync="swleVisible"
                :before-close="handleClose">
                <span>是否确定禁用该窗口？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="swleVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisibleCenter">确 定</el-button>
                </span>
            </el-dialog>
        </div>
         <!--提示框长的用于批量提示-->
        <div id="DeleLong">
            <div id="DeleDialog">
                <el-dialog
                    title="禁用提示"
                    :visible.sync="longVisible"
                    :before-close="handleClose">
                    <span v-if="moneyJy==0">本次批量启用已选择30条，其中有5条已启用</br>是否确定禁用？</span>
                    <span v-if="moneyJy==1"><span>禁用成功：30条</span></br><span>禁用失败：0条</span></span>
                    <span slot="footer" class="dialog-footer">
                        <el-button v-if="moneyJy==0" @click="longVisible = false">取 消</el-button>
                        <el-button v-if="moneyJy==0" type="primary" @click="dialogLonfCenter">确 定</el-button>
                        <el-button v-if="moneyJy==1" type="primary" @click="dialogLongCenter">确 定</el-button>
                    </span>
                </el-dialog>
            </div>
        </div>
        <div id="DeleLong">
            <div id="DeleDialog">
                <el-dialog
                    title="启用提示"
                    :visible.sync="longqVisible"
                    :before-close="handleClose">
                    <span v-if="moneyQy==0">本次批量启用已选择30条，其中有5条已启用</br>是否确定禁用？</span>
                    <span v-if="moneyQy==1"><span>启用成功：30条</span></br><span>启用失败：0条</span></span>
                    <span slot="footer" class="dialog-footer">
                        <el-button v-if="moneyQy==0" @click="longVisible = false">取 消</el-button>
                        <el-button v-if="moneyQy==0" type="primary" @click="dialogLonfQCenter">确 定</el-button>
                        <el-button v-if="moneyQy==1" type="primary" @click="dialogLongQCenter">确 定</el-button>
                    </span>
                </el-dialog>
            </div>
        </div>
   </div>
 
</template>
<script>
 import '../port/port.css'
    export default {
        name:'ruleConfig',
        data(){
            return{
               currentPage:1,
               dialogVisible:false,
               swleVisible:false,
               longVisible:false,
               longqVisible:false,
               jqShow:true,
               jyIndex:10,
               moneyJy:10,
               moneyQy:10,
               multipleTable:[],
               buttonName:[
                   {name:"批量配置"},
                   {name:"批量加入输入组"},
                   {name:"批量加入输出组"},
                   {name:"批量启用"},
                   {name:"批量禁用"}
               ],
               btnIndex:10,
               formSeacher:{
                   portName:"",
                   cardSlot:"",
                   portType:"",
                   portStatus:"",
                   subordinate:""
               },
               tabList:[
                    {id:1,portName:"n+++优先级-n",cardSlot:1,cardSlotNum:"T9600-40XS8CQ-N",portStatus:"DOWN",subordinate:'GROUP-1',portType:'MPO-25GE',dksl:'25GE',pvid:'3121',dkms:'强制',mtu:'3211',ipg:'128',nestvlan:'禁止',ms:'这是一个项目一个项目一个项目一个项目一个项目一个项目'},
                     {id:2,portName:"n+++优先级-n",cardSlot:1,cardSlotNum:"T9600-40XS8CQ-N",portStatus:"DOWN",subordinate:'GROUP-1',portType:'MPO-25GE',dksl:'25GE',pvid:'3121',dkms:'强制',mtu:'3211',ipg:'128',nestvlan:'禁止',ms:'这是一个项目一个项目一个项目一个项目一个项目一个项目'},
                      {id:3,portName:"n+++优先级-n",cardSlot:1,cardSlotNum:"T9600-40XS8CQ-N",portStatus:"DOWN",subordinate:'GROUP-1',portType:'MPO-25GE',dksl:'25GE',pvid:'3121',dkms:'强制',mtu:'3211',ipg:'128',nestvlan:'禁止',ms:'这是一个项目一个项目一个项目一个项目一个项目一个项目'},
                       {id:4,portName:"n+++优先级-n",cardSlot:1,cardSlotNum:"T9600-40XS8CQ-N",portStatus:"DOWN",subordinate:'GROUP-1',portType:'MPO-25GE',dksl:'25GE',pvid:'3121',dkms:'强制',mtu:'3211',ipg:'128',nestvlan:'禁止',ms:'这是一个项目一个项目一个项目一个项目一个项目一个项目'},
                        {id:5,portName:"n+++优先级-n",cardSlot:1,cardSlotNum:"T9600-40XS8CQ-N",portStatus:"DOWN",subordinate:'GROUP-1',portType:'MPO-25GE',dksl:'25GE',pvid:'3121',dkms:'强制',mtu:'3211',ipg:'128',nestvlan:'禁止',ms:'这是一个项目一个项目一个项目一个项目一个项目一个项目'},
                         {id:6,portName:"n+++优先级-n",cardSlot:1,cardSlotNum:"T9600-40XS8CQ-N",portStatus:"DOWN",subordinate:'GROUP-1',portType:'MPO-25GE',dksl:'25GE',pvid:'3121',dkms:'强制',mtu:'3211',ipg:'128',nestvlan:'禁止',ms:'这是一个项目一个项目一个项目一个项目一个项目一个项目'},
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
            //单禁用
            jyClick:function(row){
                this.swleVisible = true;
            },
            btnClick:function(index){
                this.btnIndex = index;
               switch(index){
                    case 0:  //批量配置
                        this.$router.push({path:'/consolePage/port/portInto'})
                    break;
                    case 1:    //批量加入输入组
                       this.dialogVisible = true;
                    break;
                    case 2:   //批量加入输出组
                       this.dialogVisible = true;
                    break;
                    case 3:   //批量启用
                       this.moneyQy = 0;
                       this.longqVisible = true;
                    break;
                    case 4:   //批量禁用
                        this.moneyJy = 0;
                        this.longVisible = true;
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
                this.formSeacher = {};          
            },
            dialogVisibleCenter:function(){

            },
            dialogLonfCenter:function(){
                this.moneyJy = 1;
            },
            dialogLonfQCenter:function(){
                this.moneyQy = 1;
            },
            dialogLongCenter:function(){
                this.longVisible = false
            },
            dialogLongQCenter:function(){
                this.longqVisible = false
            }


        },
    }
</script>
