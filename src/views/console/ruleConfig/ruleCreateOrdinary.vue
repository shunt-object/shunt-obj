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
            <el-button  type="primary" @click="save()">保 存</el-button>
        </div>
        <div id="crSec">
           <el-form ref="creatRulesFir" label-width="80px">
             <el-form-item>
                <el-select v-model="crSec_option"  placeholder="请选择新增类型"class="ruler_long" @change="selectChange()">
                    <el-option v-for="(item,index) in typeArray" :label="item.name" :value="item" :key="item.value"></el-option>
                </el-select>
                <el-select v-model="crSec_afterOption" v-show="fsel" placeholder="请选择新增类型"class="ruler_long" @change="secChange">
                    <el-option v-for="(item,index) in fselList" :label="item.name" :value="item" :key="item.value"></el-option>
                </el-select>
                <el-select v-model="crSec_bdOption" v-show="felling" placeholder="请选择新增类型"class="ruler_long">
                    <el-option v-for="(item,index) in fellingList" :label="item.name" :value="item" :key="item.value"></el-option>
                </el-select>
                <el-button v-if="fsel==true&&felling==false" type="primary" style="margin-left:10px" @click="addLd(crSec_afterOption.value,crSec_afterOption.ids)">确定新增</el-button>
                <el-button v-if="fsel==false" type="primary" style="margin-left:10px" @click="add(crSec_option.value,crSec_option.ids)">确定新增</el-button>
                <el-button v-if="fsel==true&&felling==true" type="primary" style="margin-left:10px" @click="addThe(crSec_bdOption.value,crSec_bdOption.ids)">确定新增</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!--块逻辑 掩码五元组-->
         <div id="mask" style="width:100%">
            <div id="createRules_main" v-for="(item,index) in ymList">
                <div class="createRules_mainQuire">
                    <div class="createRules_mainQuire_titile">
                        <div style="float:left;margin-top:6px;">
                        <el-form ref="ym" :model="item" label-width="80px">
                            <div style="display:inline-block">
                                    <el-form-item label="Rule-ID：" class="rule_group">
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
                            <el-button type="primary" @click="copyAdd(index,ymList,item.listName)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,item.listName,ymList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入源IP" v-model="item.srcIpv4" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入源IP掩码" v-model="item.srcIpv4Msk" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入目的端口" v-model="item.dstPort" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入协议号" v-model="item.protocol" class="ruler_long"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入目的ip" v-model="item.dstIpv4" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入目的ip掩码" v-model="item.dstIpv4Msk" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选理方式"  class="ruler_small" @change="clfsChange(index,ymList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfterNext" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="Sport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入源端口" v-model="item.srcPort" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
                                            <el-form-item label="输出："  class="rule_group crulte">
                                            <el-select v-model="item.sc" class="ruler_small">
                                                <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                            </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte" id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.outGroup" class="ruler_small" @blur="scBlur(item)"></el-input>
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
        <!--块逻辑 精准五元组-->
        <div id="accurate" style="width:100%">
            <div  id="createRules_main" v-for="(item,index) in jzList">
                <div class="createRules_mainQuire">
                    <div class="createRules_mainQuire_titile">
                        <div style="float:left;margin-top:6px;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                            <div style="display:inline-block">
                                    <el-form-item label="Rule-ID：" class="rule_group">
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
                            <el-button type="primary" @click="copyAdd(index,jzList,item.listName)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,item.listName,jzList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入源IP" v-model="item.srcIpv4" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport："  class="rule_group crulte">
                                                <el-input  placeholder="请输入目的端口" v-model="item.dstPort" class="ruler_long"></el-input>
                                            </el-form-item>
                                             <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入协议号" v-model="item.protocol" class="ruler_long"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入目的IP" v-model="item.dstIpv4" class="ruler_long"></el-input>
                                            </el-form-item>
                                           
                                            <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,jzList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfterNext" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="Sport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入源端口" v-model="item.srcPort" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
                                            <el-form-item label="输出："  class="rule_group crulte">
                                                <el-select v-model="item.sc" placeholder="请选择输出"  class="ruler_small" @change="outChange(item)">
                                                    <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <!--<el-form-item  class="rule_group crulte"  id="cRules" v-if="item.outBoolean==true">
                                                <el-select v-model="item.scAfter" placeholder="请选择输出"  class="ruler_small">
                                                    <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>-->
                                              <el-form-item  class="rule_group crulte" id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.outGroup" class="ruler_small" @blur="scBlur(item)"></el-input>
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
        <div id="mac" style="width:100%">
            <div id="createRules_main" v-for="(item,index) in macList">
                <div class="createRules_mainQuire">
                    <div class="createRules_mainQuire_titile">
                        <div style="float:left;margin-top:6px;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                            <div style="display:inline-block">
                                    <el-form-item label="Rule-ID：" class="rule_group">
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
                            <el-button type="primary" @click="copyAdd(index,macList,item.listName)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,item.listName,macList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SMAC：" class="rule_group crulte" >
                                                <el-input  placeholder="请输入端口名称" v-model="item.srcMac" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="DMAC：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dstMac" class="ruler_long"></el-input>
                                            </el-form-item>
                                            
                                        </div>  
                                        <div class="col-md-8 no-4">
                                             <el-form-item label="处理方式："  class="rule_group crulte">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,macList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.clfsCenter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.clfsAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
                                            <el-form-item label="输出："  class="rule_group crulte">
                                                <el-select v-model="item.sc" placeholder="请选择输出"  class="ruler_small" @change="outChange(item)">
                                                    <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <!--<el-form-item  class="rule_group crulte"  id="cRules" v-if="item.outBoolean==true">
                                                <el-select v-model="item.scAfter" placeholder="请选择输出"  class="ruler_small">
                                                    <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>-->
                                              <el-form-item  class="rule_group crulte" id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.outGroup" class="ruler_small"  @blur="scBlur(item)"></el-input>
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
        <div id="vlan" style="width:100%">
            <div id="createRules_main" v-for="(item,index) in vlanList">
                <div class="createRules_mainQuire">
                    <div class="createRules_mainQuire_titile">
                        <div style="float:left;margin-top:6px;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                            <div style="display:inline-block">
                                    <el-form-item label="Rule-ID：" class="rule_group">
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
                            <el-button type="primary" @click="copyAdd(index,vlanList,item.listName)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,item.listName,vlanList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="*一层：" class="rule_group crulte down" >
                                                <el-input  placeholder="请输入端口名称" v-model="item.vlan1" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="*二层：" class="rule_group crulte down">
                                                <el-input  placeholder="请输入端口名称" v-model="item.vlan2" class="ruler_long"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-8 no-4">
                                             <el-form-item label="处理方式："  class="rule_group crulte">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,vlanList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.clfsCenter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.clfsAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
                                            <el-form-item label="输出："  class="rule_group crulte">
                                                <el-select v-model="item.sc" placeholder="请选择输出"  class="ruler_small" @change="outChange(item)">
                                                    <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <!--<el-form-item  class="rule_group crulte"  id="cRules" v-if="item.outBoolean==true">
                                                <el-select v-model="item.scAfter" placeholder="请选择输出"  class="ruler_small">
                                                    <el-option v-for="(item,index) in outList" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>-->
                                              <el-form-item  class="rule_group crulte" id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.outGroup" class="ruler_small"  @blur="scBlur(item)"></el-input>
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
<script>  
    import "../ruleConfig/rulesCreate.css"
    export default {
        name:'ruleCreateOrdinary',
        data(){
            return{
              username:"",
              dialogVisible:false,
              deleteList:[],
              inds:0,
              fsel:false,
              felling:false,
              fselList:[],
              fellingList:[],
              crSec_option:{
                  name:"",
                  value:""
              },
              crSec_afterOption:{
                  name:"",
                  value:""
              },
              crSec_bdOption:{
                name:"",
                value:""
              },
              ymList:[],
              ym:{
                    ruleId:"",
                    srcIpv4:"",
                    dstIpv4:"",
                    srcPort:"",
                    dstPort:"",
                    srcIpv4Msk:"",
                    dstIpv4Msk:"",
                    srcPortMsk:"",
                    dstPortMsk:"",
                    protocol:"",
                    protocolMsk:"",
                    outGroup:"",
                    action : "NONE",
                    sc:1,
                    dipAfter:"",
                    dipAfterNext:"",
                    listName:"maskIpv4",
                    name:"",  //一级类型名字
                    childrenName:'',  //二级名字
                    childLastName:"",  //三级名字
                    outBoolean:true, //控制输出选项
                    boolean:true //控制处理方式输入框的可写性
            },
              jzList:[],
              macList:[],
              vlanList:[],
              creatRulesFir:{
                  ruleId : "",
                  ruleOption:""
              },
              jsonList:{},
              objsmane:"",
              event:[
                  {name:"丢弃",value:0},
                  {name:"转发",value:1},
                  {name:"GRE隧道封装",value:2}
              ],
              outList:[
                // {name:'端口',value:0},
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
             this.username = JSON.parse(sessionStorage.getItem("nxgx")).userName;  //获取用户名; 
             this.ymList.push(this.ym);
              console.log(this.username)
             this.jsonList.maskIpv4 = this.ymList;
        },
        methods:{
            //当输出组0时, action为NONE, 当输出组不为0时, action为FORWARD
            scBlur:function(data){
                if(data.outGroup==0||data.outGroup==""){
                    data.action = "NONE";
                }else{
                    data.action = "FORWARD"
                }
                console.log(data)
            },
            btnClick:function(index){
                this.btnIndex = index
            },
            // 一级菜单下拉事件
            selectChange:function(){
                     this.fsel = false;
                     this.felling = false;
                if(this.crSec_option.value==2||this.crSec_option.value==3||this.crSec_option.value==8){
                     this.fsel = true;
                     this.fselList = this.typeArray[this.crSec_option.value].data;   //前面加了一个应用层协议，所以index+1
                     console.log(this.crSec_option.value)
                     this.crSec_afterOption = {};  //二级选项置空
                }else{
                    this.fsel = false;
                    this.felling = false;
                }
            },
            // 二级菜单下拉事件
            secChange:function(){
                if(this.crSec_option.value==8){
                    this.felling = true;
                    this.fellingList = this.fselList[this.crSec_afterOption.value].data;
                    this.crSec_bdOption = {};
                }
            },
             //处理方式下拉事件
            clfsChange:function(index,data,status){
                if(status==0||status==1) data[index].boolean = true;
                if(status==2) data[index].boolean = false ;
            },
            // 输出下拉事件
            // outChange:function(item){
            //   if(item.sc==0){ 
            //        item.scAfter = "";
            //        item.outBoolean = true;
            //   }else{
            //       item.scAfter = "";
            //        item.outBoolean = false;
            //   }
            // },
            // 新增方法
            addFunction:function(m,n,ids,status){
                /*页面展示 */
                m.push(n);
                m.reverse();    //倒叙显示数组
                
                /*存为数据，为后台提供*/
                var objName = n.listName;
                this.jsonList[objName] = m;
                console.log(this.jsonList)
                this.crSec_afterOption = {};
                this.crSec_bdOption = {};
                this.crSec_option = {};
                this.fsel = false;
                this.felling = false;
                this.setTop(ids,status)
            },
            setTop:function(ids,status){  //自动滚动到新增的类型位置
                if(status=='yes'){
                     var setHeight = document.getElementById("createRules_main").offsetHeight;
                     var setTop = document.getElementById(ids).offsetTop;
                    // Chrome
                    document.body.scrollTop = setTop-setHeight;
                    // Firefox
                    document.documentElement.scrollTop = setTop-setHeight;
                    // Safari
                    window.pageYOffset = setTop-setHeight; 
                }else if(status=='no'){
                     var setHeight = document.getElementById("createRules_main").offsetHeight-30;
                     var setTop = document.getElementById(ids).offsetTop;
                    // Chrome
                    document.body.scrollTop = setTop-setHeight;
                    // Firefox
                    document.documentElement.scrollTop = setTop-setHeight;
                    // Safari
                    window.pageYOffset = setTop-setHeight; 
                }else if(status=='yn'){
                     var setHeight = document.getElementById("createRules_main").offsetHeight+30;
                     var setTop = document.getElementById(ids).offsetTop;
                    // Chrome
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
                        srcIpv4:"",
                        dstIpv4:"",
                        srcPort:"",
                        dstPort:"",
                        srcIpv4Msk:"",
                        dstIpv4Msk:"",
                        srcPortMsk:"",
                        dstPortMsk:"",
                        protocol:"",
                        protocolMsk:"",
                        outGroup:"",
                        action : "NONE",
                        sc:1,
                        dipAfter:"",
                        dipAfterNext:"",
                        listName:"maskIpv4",
                        name:this.crSec_option.name,  //一级类型名字
                        childrenName:'',  //二级名字
                        childLastName:this.crSec_bdOption.name,  //三级名字
                         outBoolean:true, //控制输出选项
                        boolean:true //控制处理方式输入框的可写性
                    };
                      this.addFunction(this.ymList,letym,ids,'yes');
                    break;
                    case 1:
                      var letjz = {
                            ruleId:"",
                            srcIpv4:"",
                            dstIpv4:"",
                            srcPort:"", 
                            dstPort:"",
                            protocol:"",
                            outGroup:"",
                            action:"NONE",
                            sc:1,
                            dipAfter:"",
                            dipAfterNext:"",
                            listName:"matchFiveTupleV4",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:'',  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                       };
                      this.addFunction(this.jzList,letjz,ids,'yes');
                    break;
                    case 4:
                       var letmac = {
                            ruleId:"",
                            srcMac:"",
                            dstMac:"",
                            sc:1,
                            outGroup:"",
                            dipAfter:"",
                            dipAfterNext:"",
                            action:"NONE",
                            listName:"matchSrcDstMac",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:'',  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                       };
                      this.addFunction(this.macList,letmac,ids,'yes');
                    break;
                    case 5:
                       var letvlan = {
                            ruleId:"",
                            vlan1:"",
                            vlan2:"",
                            vlan3:"",
                            vlan4:"",
                            sc:1,
                            outGroup:"",
                            dipAfter:"",
                            dipAfterNext:"",
                            action:"NONE",
                            listName:"matchVlan",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:'',  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                       };
                      this.addFunction(this.vlanList,letvlan,ids,'yes');
                    break;
                    }
            },
            // 删除
            deleteRule:function(index,listName,data){
                console.log(data)
                this.dialogVisible = true;
                this.deleteList = data;
                this.objsmane = listName;
                this.inds = index;
            },
            // 确定删除
            dialogVisibleCenter:function(){
                this.dialogVisible = false;
                this.deleteList.splice(this.inds,1);
                console.log(this.deleteList)
                this.jsonList[this.objsmane] = this.deleteList;
               console.log(this.jsonList)
            },
            // 复制并新增
            copyAdd:function(index,data,name){
                 data.push(JSON.parse(JSON.stringify(data[index])));  //变为新对象，不会上下影响
                 this.jsonList[name] = data; 
                 console.log(this.jsonList)
            },

            //保存
            save:function(){
                var obj = {
                    "op":"add",
                    "user":JSON.parse(sessionStorage.getItem("nxgx")).userName,
                    "body":this.jsonList
                };
                console.log(obj)
                this.$this.post('api/generalRule',JSON.stringify(obj)).then((response)=>{
                         alert("成功")                    
                }).catch((error)=>{})
            }
        }
    }
</script>
