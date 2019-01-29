<template>
   <div id="totalMain">
       <!--删除弹出框-->
         <div id="DeleDialog">
            <el-dialog
                title='删除提示'
                :visible.sync="dialogVisible">
                <span >是否确定删除此条规则？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisibleCenter">确 定</el-button>
                </span>
            </el-dialog>
        </div>
        <div class="plsec_button" style="padding-bottom:10px">
            <el-button>取 消</el-button>
            <el-button  type="primary" @click="qestrong()">保 存</el-button>
        </div>
        <div id="crSec">
           <el-form ref="creatRulesFir" label-width="80px">
             <el-form-item>
                <el-select v-model="crSec_option"  placeholder="请选择新增类型"class="ruler_long" @change="selectChange()">
                    <el-option v-for="(item,index) in typeArray" :label="item.name" :value="item" :key="item.value"></el-option>
                </el-select>
                <el-select v-model="crSec_afterOption" v-show="fsel" placeholder="请选择新增类型"class="ruler_long">
                    <el-option v-for="(item,index) in fselList" :label="item.name" :value="item" :key="item.value"></el-option>
                </el-select>
                <!--<el-button v-if="fsel==true" type="primary" style="margin-left:10px" @click="addLd(crSec_afterOption.value,crSec_afterOption.ids)">确定新增</el-button>-->
                <el-button v-if="fsel==false" type="primary" style="margin-left:10px" @click="add(crSec_option.value,crSec_option.ids)">确定新增</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!--块逻辑 掩码五元组-->
         <div id="mask" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in ymList">
                <div class="createRules_mainQuire">
                    <div class="createRules_mainQuire_titile">
                        <div style="float:left;margin-top:6px;">
                        <el-form ref="ym" :model="item" label-width="80px">
                            <div style="display:inline-block">
                                    <el-form-item label="*Rule-ID：" class="rule_group">
                                        <el-input  placeholder="请输入Rule-ID" v-model="item.ruleId" class="rules"></el-input>
                                    </el-form-item>
                            </div>
                            <div style="display:inline-block" id="cRules">
                                <div>掩码五元组</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,ymList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,ymList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入SIP" v-model="item.sip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入端口名称" v-model="item.sipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dport" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选理方式"  class="ruler_small" @change="clfsChange(index,ymList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input  :disabled="item.boolean" placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input  :disabled="item.boolean" placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.protecl" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1">
                                                <el-form-item label="输出："  class="rule_group crulte">
                                                    <el-select v-model="item.sc" placeholder="请选择输出"  class="ruler_small" @change="outChange(item)">
                                                        <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item  class="rule_group crulte"  id="cRules" v-if="item.outBoolean==true">
                                                    <el-select v-model="item.scAfter" placeholder="请选择输出"  class="ruler_small">
                                                        <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item  class="rule_group crulte" id="cRules" v-if="item.outBoolean==false">
                                                    <el-input  placeholder="请输入" v-model="item.scAfter" class="ruler_small"></el-input>
                                                </el-form-item>
                                            </div>
                                        </div>
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="Sport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.sport" class="ruler_long"></el-input>
                                            </el-form-item>
                                             <el-form-item label="*输入：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.write" class="ruler_long"></el-input>
                                            </el-form-item>
                                            
                                        </div>
                                    </div>
                                </div> 
                        </el-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--块逻辑 精准五元组-->
        <div id="accurate" style="width:100%;height:100%">
            <div  id="createRules_main" v-for="(item,index) in jzList">
                <div class="createRules_mainQuire">
                    <div class="createRules_mainQuire_titile">
                        <div style="float:left;margin-top:6px;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                            <div style="display:inline-block">
                                    <el-form-item label="*Rule-ID：" class="rule_group">
                                        <el-input  placeholder="请输入端口名称" v-model="item.ruleId" class="rules"></el-input>
                                    </el-form-item>
                            </div>
                            <div style="display:inline-block" id="cRules">
                                <div>精准五元组</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,jzList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,jzList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.sip" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.sipAfter" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="*输入：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.write" class="ruler_long"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dip" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.protecl" class="ruler_long"></el-input>
                                            </el-form-item>
                                           <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small"  @change="clfsChange(index,jzList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean" placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean" placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="Sport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.sport" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport："  class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dport" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <div  v-if="item.clfs==1">
                                            <el-form-item label="输出："  class="rule_group crulte">
                                            <el-select v-model="item.sc" placeholder="请选择输出"  class="ruler_small" @change="outChange(item)">
                                                <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                            </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules" v-if="item.outBoolean==true">
                                                <el-select v-model="item.scAfter" placeholder="请选择输出"  class="ruler_small">
                                                    <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                              <el-form-item  class="rule_group crulte" id="cRules" v-if="item.outBoolean==false">
                                                <el-input  placeholder="请输入" v-model="item.scAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                             </div>
                                        </div>
                                    </div>
                                </div> 
                        </el-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--块逻辑 Mac-->
        <div id="mac" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in macList">
                <div class="createRules_mainQuire">
                    <div class="createRules_mainQuire_titile">
                        <div style="float:left;margin-top:6px;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                            <div style="display:inline-block">
                                    <el-form-item label="*Rule-ID：" class="rule_group">
                                        <el-input  placeholder="请输入端口名称" v-model="item.ruleId" class="rules"></el-input>
                                    </el-form-item>
                            </div>
                            <div style="display:inline-block" id="cRules">
                                <div>MAC</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,macList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,macList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SMAC：" class="rule_group crulte" >
                                                <el-input  placeholder="请输入端口名称" v-model="item.smac" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="DMAC：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dmac" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="*输入：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.write" class="ruler_long"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-8 no-4">
                                             <el-form-item label="处理方式："  class="rule_group crulte">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small"  @change="clfsChange(index,macList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input :disabled="item.boolean" placeholder="请输入" v-model="item.clfsCenter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input :disabled="item.boolean" placeholder="请输入" v-model="item.clfsAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <div v-if="item.clfs==1">
                                            <el-form-item label="输出："  class="rule_group crulte">
                                            <el-select v-model="item.sc" placeholder="请选择输出"  class="ruler_small" @change="outChange(item)">
                                                <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                            </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules" v-if="item.outBoolean==true">
                                                <el-select v-model="item.scAfter" placeholder="请选择输出"  class="ruler_small">
                                                    <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte" id="cRules" v-if="item.outBoolean==false">
                                                <el-input  placeholder="请输入" v-model="item.scAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                             </div>
                                        </div>
                                    </div>
                                </div> 
                        </el-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--块逻辑 VLAN-->
        <div id="vlan" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in vlanList">
                <div class="createRules_mainQuire">
                    <div class="createRules_mainQuire_titile">
                        <div style="float:left;margin-top:6px;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                            <div style="display:inline-block">
                                    <el-form-item label="*Rule-ID：" class="rule_group">
                                        <el-input  placeholder="请输入端口名称" v-model="item.ruleId" class="rules"></el-input>
                                    </el-form-item>
                            </div>
                            <div style="display:inline-block" id="cRules">
                                <div>VLAN</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,vlanList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,vlanList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="*一层：" class="rule_group crulte down" >
                                                <el-input  placeholder="请输入端口名称" v-model="item.firDown" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="*二层：" class="rule_group crulte down">
                                                <el-input  placeholder="请输入端口名称" v-model="item.secDown" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="*输入：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.write" class="ruler_long"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-8 no-4">
                                             <el-form-item label="处理方式："  class="rule_group crulte">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small"  @change="clfsChange(index,vlanList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input :disabled="item.boolean" placeholder="请输入" v-model="item.clfsCenter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input :disabled="item.boolean" placeholder="请输入" v-model="item.clfsAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1">
                                            <el-form-item label="输出："  class="rule_group crulte">
                                                <el-select v-model="item.sc" placeholder="请选择输出"  class="ruler_small" @change="outChange(item)">
                                                    <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules" v-if="item.outBoolean==true">
                                                <el-select v-model="item.scAfter" placeholder="请选择输出"  class="ruler_small">
                                                    <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                              <el-form-item  class="rule_group crulte" id="cRules" v-if="item.outBoolean==false">
                                                <el-input  placeholder="请输入" v-model="item.scAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                        </el-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        
        
   </div>
 
</template>
<style>
    .ruler_small input{
        width: 130px;
        height: 30px;
    }
    .ruler_long input{
        width: 265px;
        height: 30px;
    }
    .no-4{
        padding:10px 0px!important;
    }
</style>

<script>  
    import "../ruleConfig/rulesCreate.css"
    export default {
        name:'ruleCreateOrdinary',
        data(){
            return{
              dialogVisible:false,
              deleteList:[],
              inds:0,
              fsel:false,
              fselList:[],
              crSec_option:{
                  name:"",
                  value:""
              },
              crSec_afterOption:{
                  name:"",
                  value:""
              },
              ymList:[],
              ym:{
                ruleId:"",
                sip:"",
                sipAfter:"",
                dip:"",
                dipAfter:"",
                sport:"",
                dport:"",
                protecl:"",
                sc:"",
                scAfter:"",
                clfs:"",
                write:"",
                boolean:true, //控制处理方式输入框的可写性
                outBoolean:true, //控输出选项
                name:"掩码五元组"
              },
              jzList:[],
              tz_floatList:[],
              tz_fixedList:[],
              tz_bothList:[],
              macList:[],
              vlanList:[],
              imsiList:[],
              urlList:[],
              creatRulesFir:{
                  ruleId : "",
                  ruleOption:""

              },
              event:[
                  {name:"丢弃",value:0},
                  {name:"转发",value:1},
                //   {name:"GRE隧道封装",value:2}
              ],
              outList:[
                {name:'端口',value:0},
                {name:'端口组',value:1}
              ],
              typeArray:[
                  {name:"掩码五元组",value:0,ids:'mask'},
                  {name:"精准五元组",value:1,ids:"accurate"},
                  {name:"MAC",value:4,ids:'mac'},
                  {name:"VLAN",value:5,ids:'vlan'},
              ]
            }
        },
        mounted:function(){
            this.ymList.push(this.ym);
        },
        methods:{
            // 保存
            qestrong:function(){

            },
            // 下拉新增事件
            selectChange:function(){
                if(this.crSec_option.value==2){
                     this.fsel = true;
                     this.fselList = this.typeArray[this.crSec_option.value].data;
                     this.crSec_afterOption = {};  //二级选项置空
                }
            },
            //处理方式下拉事件
            clfsChange:function(index,data,status){
                if(status==0||status==1) data[index].boolean = true;
                // if(status==2) data[index].boolean = false ;
            },
            // 输出下拉事件
            outChange:function(item){
              if(item.sc==0){ 
                   item.scAfter = "";
                   item.outBoolean = false;
              }else{
                  item.scAfter = "";
                   item.outBoolean = true;
              }

            },
            // 新增方法
            addFunction:function(m,n,ids,status){
                m.push(n);
                m.reverse();    //倒叙显示数组
                console.log(n)
                this.setTop(ids,status)
            },
            setTop:function(ids,status){  //自动滚动到新增的类型位置
                if(status=='yes'){
                     var setHeight = document.getElementById("createRules_main").offsetHeight;
                     var setTop = document.getElementById(ids).offsetTop;
                    // Chrome
                    console.log(setHeight)
                    document.body.scrollTop = setTop-setHeight;
                    // Firefox
                    document.documentElement.scrollTop = setTop-setHeight;
                    // Safari
                    window.pageYOffset = setTop-setHeight; 
                }else if(status=='no'){
                    console.log(41)
                     var setHeight = document.getElementById("createRules_main").offsetHeight-30;
                     var setTop = document.getElementById(ids).offsetTop;
                    // Chrome
                    console.log(setHeight)
                    document.body.scrollTop = setTop-setHeight;
                    // Firefox
                    document.documentElement.scrollTop = setTop-setHeight;
                    // Safari
                    window.pageYOffset = setTop-setHeight; 
                }
              
            },
            add:function(e,ids){
                switch(e)
                    {
                    case 0:
                     var letym = {
                        ruleId:"",
                        sip:"",
                        sipAfter:"",
                        dip:"",
                        dipAfter:"",
                        sport:"",
                        dport:"",
                        protecl:"",
                        sc:"",
                        scAfter:"",
                        clfs:"",
                        write:"",
                        boolean:true,
                        outBoolean:true,
                        name:this.crSec_option.name
                    };
                      this.addFunction(this.ymList,letym,ids,'yes');
                    break;
                    case 1:
                      var letjz = {
                            ruleId:"",
                            sip:"",
                            sipAfter:"",
                            dip:"",
                            sport:"",
                            dport:"",
                            protecl:"",
                            sc:"",
                            scAfter:"",
                            clfs:"",
                            write:"",
                            boolean:true,
                            outBoolean:true, //控输出选项
                            name:this.crSec_option.name
                       };
                      this.addFunction(this.jzList,letjz,ids,'yes');
                    break;
                    case 4:
                       var letmac = {
                            ruleId:"",
                            smac:"",
                            dmac:"",
                            sc:"",
                            scAfter:"",
                            clfs:"",
                            clfsCenter:"",
                            clfsAfter:"",
                            write:"",
                            boolean:true,
                            outBoolean:true,
                            name:this.crSec_option.name
                       };
                      this.addFunction(this.macList,letmac,ids,'yes');
                    break;
                    case 5:
                       var letvlan = {
                            ruleId:"",
                            firDown:"",
                            secDown:"",
                            clfs:"",
                            clfsCenter:"",
                            clfsAfter:"",
                            sc:"",
                            scAfter:"",
                            write:"",
                            boolean:true,
                            outBoolean:true,
                            name:this.crSec_option.name
                       };
                      this.addFunction(this.vlanList,letvlan,ids,'yes');
                    break;
                    }
            },
            // 删除
             deleteRule:function(index,data){
                this.dialogVisible = true;
                this.deleteList = data;
                this.inds = index
             },
            // 确定删除
            dialogVisibleCenter:function(){
                this.dialogVisible = false;
                this.deleteList.splice(this.inds,1)
            },
            // 复制并新增
            copyAdd:function(index,data){
                data.push(JSON.parse(JSON.stringify(data[index])));
                console.log(data[index]);
            }

        }
    }
</script>
