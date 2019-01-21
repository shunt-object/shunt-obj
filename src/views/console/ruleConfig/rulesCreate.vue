<template>
   <div id="totalMain">
        <div class="plsec_button" style="margin-top:0px">
            <el-button>取 消</el-button>
            <el-button  type="primary">保 存</el-button>
        </div>

        <!--块逻辑-->
        <div class="createRules_main">
            <div class="createRules_mainQuire">
                <div class="createRules_mainQuire_titile">
                    <div style="float:left;margin-top:6px;">
                       <el-form ref="creatRulesFir" :model="creatRulesFir" label-width="80px">
                           <div style="display:inline-block">
                                <el-form-item label="*Rule-ID：" class="rule_group">
                                    <el-input  placeholder="请输入端口名称" v-model="creatRulesFir.ruleId" class="rules"></el-input>
                                </el-form-item>
                           </div>
                           <div style="display:inline-block" id="cRules">
                                <el-form-item>
                                    <el-select v-model="creatRulesFir.ruleOption"  placeholder="请选择板卡槽位" class="rules">
                                        <el-option v-for="(item,index) in typeArray" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                    </el-select>
                                </el-form-item>
                           </div> 
                        </el-form>
                    </div>
                    <div style="float:right;margin-top:12px;">
                        <el-button type="primary">新增</el-button>
                        <el-button type="primary">复制并新增</el-button>
                        <el-button>删除</el-button>
                    </div>
                    <div style="clear:both">
                        <div>
                            <el-form ref="creatRulesFir" :model="creatRulesFir" label-width="80px">
                                <div style="display:inline-block">
                                        <el-form-item label="SIP：" class="rule_group crulte">
                                            <el-input  placeholder="请输入端口名称" v-model="creatRulesFir.ruleId" class="rules"></el-input>
                                        </el-form-item>
                                        <el-form-item  class="rule_group crulte"  id="cRules">
                                            <el-input  placeholder="请输入端口名称" v-model="creatRulesFir.ruleId" class="rules"></el-input>
                                        </el-form-item>
                                </div>
                                <div style="display:inline-block">
                                        <el-form-item label="DIP：" class="rule_group crulte">
                                            <el-input  placeholder="请输入端口名称" v-model="creatRulesFir.ruleId" class="rules"></el-input>
                                        </el-form-item>
                                        <el-form-item  class="rule_group crulte"  id="cRules">
                                            <el-input  placeholder="请输入端口名称" v-model="creatRulesFir.ruleId" class="rules"></el-input>
                                        </el-form-item>
                                </div> 
                                <div style="display:inline-block">
                                        <el-form-item label="Sport：" class="rule_group crulte">
                                            <el-input  placeholder="请输入端口名称" v-model="creatRulesFir.ruleId" class="rules"></el-input>
                                        </el-form-item>
                                </div> 
                            </el-form>
                        </div>
                        <div>
                            <el-form ref="creatRulesFir" :model="creatRulesFir" label-width="80px">
                                <div style="display:inline-block">
                                        <el-form-item label="Dport：" class="rule_group crulte">
                                            <el-input  placeholder="请输入端口名称" v-model="creatRulesFir.ruleId" class="rules"></el-input>
                                        </el-form-item>
                                </div>
                                <div style="display:inline-block">
                                        <el-form-item label="Protecl：" class="rule_group crulte">
                                            <el-input  placeholder="请输入端口名称" v-model="creatRulesFir.ruleId" class="rules"></el-input>
                                        </el-form-item>
                                </div>
                                 <div style="display:inline-block">
                                        <el-form-item label="处理方式">
                                            <el-select v-model="creatRulesFir.ruleOption"  placeholder="请选择板卡槽位" class="rules">
                                                <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                            </el-select>
                                        </el-form-item>
                                </div>
                                
                            </el-form>
                        </div>
                    </div>
                </div>
                <div class="createRules_mainQuire_main"></div>
            </div>
        </div>
        </div>

        <!--删除弹出框-->
         <!--<div id="DeleDialog">
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
        </div>-->
        
   </div>
 
</template>
<script>  
    import "../ruleConfig/rulesCreate.css"
    export default {
        name:'ruleConfig',
        data(){
            return{
              creatRulesFir:{
                  ruleId : "",
                  ruleOption:""
              },
              event:[
                  {name:"丢弃",value:"0"},
                  {name:"转发",value:"1"},
                  {name:"GRE隧道封装",vaule:"2"}
              ],
              typeArray:[
                  {name:"掩码五元组",value:0},
                  {name:"精准五元组",value:1},
                  {name:"特征码",value:2,
                    // data:[
                    //     {name:'固定位置特征码',value:200},
                    //     {name:'窗口范围浮动特征码',value:201},
                    //     {name:'全包范围浮动特征码',value:202}
                    // ]
                  },
                  {name:"信令协议",value:3,
                    //  data:[
                    //      {name:"S1AP",value:301},
                    //      {name:"Diameter",value:302},
                    //      {name:"SGS-AP",value:303},
                    //      {name:"SIP",value:304},
                    //      {name:"GTPv0",value:305},
                    //      {name:"GTPv1",value:306},
                    //      {name:"GTPv2",value:307},
                    //      {name:"NGAP",value:308},
                    //      {name:"HTTP2/REST",value:309}

                    //  ]
                  
                  },
                  {name:"MAC",value:4},
                  {name:"VLAN",value:5},
                  {name:"IMSI",value:6},
                  {name:"URL",value:7},
                  {name:"复合规则",value:8,
                    // data:[
                    //     {name:"精准IP",value:"801"},
                    //     {name:"掩码IP",value:"802"},
                    //     // {[
                    //     //     {name:"信令协议",value:8010},
                    //     //     {name:"应用层协议",value:8011},
                    //     //     {name:"IMSI",value:8012},
                    //     //     {name:"URL",value:8013},
                    //     //     {name:"固定位置特征码",value:8014},
                    //     //     {name:"窗口范围浮动特征码",value:8015},
                    //     //     {name:"全包范围浮动特征码",value:8016},
                    //     // ]}
                    // ]
                  }
                  
              ]
            }
        },
        mounted:function(){

        },
        methods:{
        
        }
    }
</script>
