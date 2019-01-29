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
            <el-button  type="primary">保 存</el-button>
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
                                                <el-input  placeholder="请输入" v-model="item.sip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.dport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.dportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.protecl" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.proteclAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.dip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
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
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="Sport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.sport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
                                            <el-form-item label="Dport："  class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dport" class="ruler_long"></el-input>
                                            </el-form-item>
                                             <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.protecl" class="ruler_long"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dip" class="ruler_long"></el-input>
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
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="Sport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.sport" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
        <!--块逻辑 特征码(固定位置特征码)-->
        <div id="tz_fixed" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in tz_fixedList">
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
                                <div>特征码-固定位置特征码</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,tz_fixedList)">复制并新增</el-button>
                            <el-button @click="deleteRule(inde,tz_fixedList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="特征码：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.tzm" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="处理方式："  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,tz_fixedList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.clfsCenter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.clfsAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-8 no-4">
                                            <el-form-item label="偏移位置：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.position" class="ruler_long"></el-input>
                                            </el-form-item></br>
                                             <div v-if="item.clfs==1||item.clfs==2">
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
        <!--块逻辑 特征码(窗口范围浮动特征码)-->
        <div id="tz_float" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in tz_floatList">
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
                                <div>特征码-窗口范围浮动特征码</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,tz_floatList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,tz_floatList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="特征码：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.tzm" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="起始位置：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.startPosition" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="窗口宽度：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.cliceWidth" class="ruler_long"></el-input>
                                            </el-form-item></br>
                                        </div>  
                                        <div class="col-md-8 no-4">
                                            <el-form-item label="处理方式："  class="rule_group crulte">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,tz_floatList,item.clfs)">
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
        <!--块逻辑 特征码(全包范围浮动特征码)-->
        <div id="tz_both" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in tz_bothList">
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
                                <div>特征码-全包范围浮动特征码</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,tz_bothList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,tz_bothList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="特征码：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.tzm" class="ruler_long"></el-input>
                                            </el-form-item>
                                           <div v-if="item.clfs==1||item.clfs==2">
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
                                        <div class="col-md-8 no-4">
                                             <el-form-item label="处理方式："  class="rule_group crulte">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,tz_bothList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.clfsCenter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.clfsAfter" class="ruler_small"></el-input>
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
        <!--块逻辑 信令协议-->
        <div id="xlHttp" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in xlList">
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
                                <div>信令协议-{{item.childrenName}}</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,xlList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,xlList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-6 no-4">
                                             <el-form-item label="处理方式："  class="rule_group crulte">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,xlList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.clfsCenter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.clfsAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            
                                        </div>
                                        <div class="col-md-4 no-4"> 
                                            <div v-if="item.clfs==1||item.clfs==2">
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
                                            <el-form-item label="*三层：" class="rule_group crulte down" >
                                                <el-input  placeholder="请输入端口名称" v-model="item.thrDown" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="*四层：" class="rule_group crulte down">
                                                <el-input  placeholder="请输入端口名称" v-model="item.fouDown" class="ruler_long"></el-input>
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
         <!--块逻辑 imsi-->
        <div id="imsi" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in imsiList">
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
                                <div>IMSI</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,imsiList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,imsiList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="*IMSI：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.imsi" class="ruler_long"></el-input>
                                            </el-form-item>
                                           <div v-if="item.clfs==1||item.clfs==2">
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
                                        <div class="col-md-8 no-4">
                                             <el-form-item label="处理方式："  class="rule_group crulte">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,imsiList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.clfsCenter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.clfsAfter" class="ruler_small"></el-input>
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
         <!--块逻辑 url-->
        <div id="url" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in urlList">
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
                                <div>URL</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,urlList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,urlList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="*URL：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.url" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
                                        <div class="col-md-8 no-4">
                                             <el-form-item label="处理方式："  class="rule_group crulte">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,urlList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.clfsCenter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.clfsAfter" class="ruler_small"></el-input>
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

        <!--块逻辑 复合规则-精准IP-信令协议-->
        <div id="accurate_xl" style="width:100%;height:100%">
            <div  id="createRules_main" v-for="(item,index) in jz_xlList">
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
                                <div>复合规则-精准IP-信令协议</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,jz_xlList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,jz_xlList)">删除</el-button>
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
                                             <el-form-item label="信令协议："  class="rule_group crulte">
                                                <el-select v-model="item.xlxy" placeholder="请选择处理方式"  class="ruler_long">
                                                    <el-option v-for="(item,index) in typeArray[3].data" :label="item.name" :value="item.name" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,jz_xlList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>            
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dip" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.protecl" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
                                            <el-form-item label="Dport："  class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dport" class="ruler_long"></el-input>
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
        <!--块逻辑 复合规则-精准IP-imsi-->
        <div id="accurate_imsi" style="width:100%;height:100%">
            <div  id="createRules_main" v-for="(item,index) in jz_imsiList">
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
                                <div>复合规则-精准IP-IMSI</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,jz_imsiList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,jz_imsiList)">删除</el-button>
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
                                             <el-form-item label="*IMSI："  class="rule_group crulte">
                                                <el-input  placeholder="请输入IMSI" v-model="item.imsi" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,jz_imsiList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dip" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.protecl" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
                                            <el-form-item label="Dport："  class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dport" class="ruler_long"></el-input>
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
        <!--块逻辑 复合规则-精准IP-url-->
        <div id="accurate_url" style="width:100%;height:100%">
            <div  id="createRules_main" v-for="(item,index) in jz_urlList">
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
                                <div>复合规则-精准IP-URL</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,jz_urlList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,jz_urlList)">删除</el-button>
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
                                             <el-form-item label="*URL："  class="rule_group crulte">
                                                <el-input  placeholder="请输入URL" v-model="item.url" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,jz_urlList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dip" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.protecl" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
                                            <el-form-item label="Dport："  class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dport" class="ruler_long"></el-input>
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
        <!--块逻辑 复合规则-精准IP-固定位置特征码-->
        <div id="accurate_fixed" style="width:100%;height:100%">
            <div  id="createRules_main" v-for="(item,index) in jz_fixedList">
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
                                <div>复合规则-精准IP-固定位置特征码</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,jz_fixedList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,jz_fixedList)">删除</el-button>
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
                                            <el-form-item label="偏移位置：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.position" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="特征码：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.tzm" class="ruler_long"></el-input>
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
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,jz_fixedList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="Sport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.sport" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport："  class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dport" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
        <!--块逻辑 复合规则-精准IP-窗口浮动范围特征码-->
        <div id="accurate_float" style="width:100%;height:100%">
            <div  id="createRules_main" v-for="(item,index) in jz_floatList">
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
                                <div>复合规则-精准IP-窗口浮动范围特征码</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,jz_floatList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,jz_floatList)">删除</el-button>
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
                                            <el-form-item label="Dport："  class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dport" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="特征码：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.tzm" class="ruler_long"></el-input>
                                            </el-form-item>
                                           <div v-if="item.clfs==1||item.clfs==2">
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
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dip" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.protecl" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="起始位置：" class="rule_group crulte">
                                                <el-input  placeholder="请输入起始位置" v-model="item.startPosition" class="ruler_long"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="Sport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.sport" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="窗口宽度：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.cliceWidth" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,jz_floatList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
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
         <!--块逻辑 复合规则-精准IP-全包范围浮动特征码-->
        <div id="accurate_both" style="width:100%;height:100%">
            <div  id="createRules_main" v-for="(item,index) in jz_bothList">
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
                                <div>复合规则-精准IP-全包范围浮动特征码</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,jz_bothList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,jz_bothList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入SIP" v-model="item.sip" class="ruler_long"></el-input>
                                            </el-form-item>
                                             <el-form-item label="特征码：" class="rule_group crulte">
                                                <el-input  placeholder="请输入特征码" v-model="item.tzm" class="ruler_long"></el-input>
                                            </el-form-item>
                                             <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,jz_bothList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入DIP" v-model="item.dip" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入Protecl" v-model="item.protecl" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
                                                <el-input  placeholder="请输入Sport" v-model="item.sport" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport："  class="rule_group crulte">
                                                <el-input  placeholder="请输入Dport" v-model="item.dport" class="ruler_long"></el-input>
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
         <!--块逻辑 复合规则-精准IP-应用层协议-->
        <div id="accurate_yy" style="width:100%;height:100%">
            <div  id="createRules_main" v-for="(item,index) in jz_yyList">
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
                                <div>复合规则-精准IP-应用层协议</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,jz_yyList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,jz_yyList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入SIP" v-model="item.sip" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="应用层协议："  class="rule_group crulte clType">
                                                <el-select v-model="item.yy" placeholder="请选择应用层协议"  class="ruler_long">
                                                    <el-option v-for="(item,index) in yyClist" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                             <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选择处理方式"  class="ruler_small" @change="clfsChange(index,jz_yyList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入DIP" v-model="item.dip" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入Protecl" v-model="item.protecl" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
                                                <el-input  placeholder="请输入Sport" v-model="item.sport" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport："  class="rule_group crulte">
                                                <el-input  placeholder="请输入Dport" v-model="item.dport" class="ruler_long"></el-input>
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
         <!--块逻辑 复合规则-掩码IP-信令协议-->
         <div id="mask_xl" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in ym_xlList">
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
                                <div>复合规则-掩码IP-信令协议</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,ym_xlList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,ym_xlList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.sip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.dport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.dportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选理方式"  class="ruler_small" @change="clfsChange(index,ym_xlList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.protecl" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.proteclAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
                                                <el-input  placeholder="请输入端口名称" v-model="item.sport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <el-form-item label="信令协议："  class="rule_group crulte">
                                                <el-select v-model="item.xlxy" placeholder="请选择处理方式"  class="ruler_long">
                                                    <el-option v-for="(item,index) in typeArray[3].data" :label="item.name" :value="item.name" :key="item.value"></el-option>
                                                </el-select>
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
        <!--块逻辑 复合规则-掩码IP-imsi-->
         <div id="mask_imsi" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in ym_imsiList">
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
                                <div>复合规则-掩码IP-IMSI</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,ym_imsiList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,ym_imsiList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.sip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.dport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.dportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选理方式"  class="ruler_small" @change="clfsChange(index,ym_imsiList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                           <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.protecl" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.proteclAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
                                                <el-input  placeholder="请输入端口名称" v-model="item.sport" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="*IMSI：" class="rule_group crulte">
                                                <el-input  placeholder="请输入IMSI" v-model="item.imsi" class="ruler_long"></el-input>
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
        <!--块逻辑 复合规则-掩码IP-url-->
        <div id="mask_url" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in ym_urlList">
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
                                <div>复合规则-掩码IP-URL</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,ym_urlList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,ym_urlList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.sip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.dport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.dportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选理方式"  class="ruler_small" @change="clfsChange(index,ym_urlList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>                                          
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.protecl" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.proteclAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
                                                <el-input  placeholder="请输入" v-model="item.sport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="*URL：" class="rule_group crulte">
                                                <el-input  placeholder="请输入URL" v-model="item.url" class="ruler_long"></el-input>
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
        <!--块逻辑 复合规则-掩码IP-固定位置特征码-->
        <div id="mask_fixed" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in ym_fixedList">
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
                                <div>复合规则-掩码IP-固定位置特征码</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,ym_fixedList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,ym_fixedList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.sip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入端口名称" v-model="item.sipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.dportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="特征码：" class="rule_group crulte">
                                                <el-input  placeholder="请输入特征码" v-model="item.tzm" class="ruler_long"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.protecl" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.proteclAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选理方式"  class="ruler_small" @change="clfsChange(index,ym_fixedList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="Sport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.sport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="偏移位置：" class="rule_group crulte">
                                                <el-input  placeholder="请输入偏移位置" v-model="item.position" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
         <!--块逻辑 复合规则-掩码IP-窗口浮动范围特征码-->
        <div id="mask_float" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in ym_floatList">
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
                                <div>复合规则-掩码IP-窗口浮动范围特征码</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,ym_floatList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,ym_floatList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.sip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.dport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.dportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="特征码：" class="rule_group crulte">
                                                <el-input  placeholder="请输入特征码" v-model="item.tzm" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.dip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.protecl" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.proteclAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="窗口宽度：" class="rule_group crulte">
                                                <el-input  placeholder="请输入窗口宽度" v-model="item.cliceWidth" class="ruler_long"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="Sport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.sport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="起始位置：" class="rule_group crulte">
                                                <el-input  placeholder="请输入起始位置" v-model="item.startPosition" class="ruler_long"></el-input>
                                            </el-form-item>
                                            <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选理方式"  class="ruler_small" @change="clfsChange(index,ym_floatList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
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
         <!--块逻辑 复合规则-掩码IP-全包范围浮动特征码-->
        <div id="mask_both" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in ym_bothList">
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
                                <div>复合规则-掩码IP-全包范围浮动特征码</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,ym_bothList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,ym_bothList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.sip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.dport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.dportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选理方式"  class="ruler_small" @change="clfsChange(index,ym_bothList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.dip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.protecl" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.proteclAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
                                                <el-input  placeholder="请输入Sport" v-model="item.sport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="特征码：" class="rule_group crulte">
                                                <el-input  placeholder="请输入特征码" v-model="item.tzm" class="ruler_long"></el-input>
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
         <!--块逻辑 复合规则-掩码IP-应用层协议-->
        <div id="mask_yy" style="width:100%;height:100%">
            <div id="createRules_main" v-for="(item,index) in ym_yyList">
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
                                <div>复合规则-掩码IP-应用层协议</div>
                            </div> 
                            </el-form>
                        </div>
                        <div style="float:right;margin-top:12px;">
                            <!--<el-button type="primary">新增</el-button>-->
                            <el-button type="primary" @click="copyAdd(index,ym_yyList)">复制并新增</el-button>
                            <el-button @click="deleteRule(index,ym_yyList)">删除</el-button>
                        </div>
                    </div>
                    <div class="createRules_mainQuire_main">
                        <div style="clear:both;">
                        <el-form ref="creatRulesFir" :model="item" label-width="80px">
                                <div class="row">
                                    <div class="col-md-12" style="padding:0!important">
                                        <div class="col-md-4 no-4"> 
                                            <el-form-item label="SIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.sip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Dport：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.dport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.dportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <el-form-item label="处理方式"  class="rule_group crulte clType">
                                                <el-select v-model="item.clfs" placeholder="请选理方式"  class="ruler_small" @change="clfsChange(index,ym_yyList,item.clfs)">
                                                    <el-option v-for="(item,index) in event" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input  :disabled="item.boolean"  placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte cltypeAfter"  id="cRules">
                                                <el-input :disabled="item.boolean"   placeholder="请输入" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                        </div>  
                                        <div class="col-md-4 no-4">
                                            <el-form-item label="DIP：" class="rule_group crulte">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dip" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入端口名称" v-model="item.dipAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="Protecl：" class="rule_group crulte">
                                                <el-input  placeholder="请输入" v-model="item.protecl" class="ruler_small"></el-input>
                                            </el-form-item>
                                             <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.proteclAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <div v-if="item.clfs==1||item.clfs==2">
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
                                                <el-input  placeholder="请输入Sport" v-model="item.sport" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item  class="rule_group crulte"  id="cRules">
                                                <el-input  placeholder="请输入" v-model="item.sportAfter" class="ruler_small"></el-input>
                                            </el-form-item>
                                            <el-form-item label="应用层协议："  class="rule_group crulte clType">
                                                <el-select v-model="item.yy" placeholder="请选择应用层协议"  class="ruler_long">
                                                    <el-option v-for="(item,index) in yyClist" :label="item.name" :value="item.value" :key="item.value"></el-option>
                                                </el-select>
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
        </div>
   </div>
</template>
<script>  
    import "../ruleConfig/rulesCreate.css"
    export default {
        name:'ruleCreateEnior',
        data(){
            return{
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
                dportAfter:"",
                sportAfter:"",
                proteclAfter:"",
                name:"掩码五元组",  //类型名字
                childrenName:'',  //二级名字
                outBoolean:true, //控输出选项
                boolean:true //控制处理方式输入框的可写性
              },
              jzList:[],
              tz_floatList:[],
              tz_fixedList:[],
              tz_bothList:[],
              macList:[],
              xlList:[],
              vlanList:[],
              imsiList:[],
              urlList:[],
              jz_xlList:[],
              jz_imsiList:[],
              jz_urlList:[],
              jz_floatList:[],
              jz_bothList:[],
              jz_fixedList:[],
              jz_yyList:[],
              ym_xlList:[],
              ym_imsiList:[],
              ym_urlList:[],
              ym_fixedList:[],
              ym_floatList:[],
              ym_bothList:[],
              ym_yyList:[],
              creatRulesFir:{
                  ruleId : "",
                  ruleOption:""
              },
              event:[
                  {name:"丢弃",value:0},
                  {name:"转发",value:1},
                  {name:"GRE隧道封装",value:2}
              ],
              outList:[
                {name:'端口',value:0},
                {name:'端口组',value:1}
              ],
              yyClist:[
                  {name:"HTTP",value:0},
                  {name:"HTTPs",value:1},
                  {name:"FTP",value:2},
                  {name:"POP3",value:3},
                  {name:"SMTP",value:4},
                  {name:"DNS",value:5},
                  {name:"Radius",value:6},
                  {name:"COAP",value:7}
              ],
              typeArray:[
                  {name:"掩码五元组",value:0,ids:'mask'},
                  {name:"精准五元组",value:1,ids:"accurate"},
                  {name:"特征码",value:2,
                    data:[
                        {name:'固定位置特征码',value:200,ids:'tz_fixed'},
                        {name:'窗口范围浮动特征码',value:201,ids:'tz_float'},
                        {name:'全包范围浮动特征码',value:202,ids:'tz_both'}
                    ]
                  },
                  {name:"信令协议",value:3,ids:'xlHttp',
                     data:[
                         {name:"S1AP",value:301,ids:'xlHttp'},
                         {name:"Diameter",value:302,ids:'xlHttp'},
                         {name:"SGS-AP",value:303,ids:'xlHttp'},
                         {name:"SIP",value:304,ids:'xlHttp'},
                         {name:"GTPv0",value:305,ids:'xlHttp'},
                         {name:"GTPv1",value:306,ids:'xlHttp'},
                         {name:"GTPv2",value:307,ids:'xlHttp'},
                         {name:"NGAP",value:308,ids:'xlHttp'},
                         {name:"HTTP2/REST",value:309,ids:'xlHttp'}
                     ]
                  },
                  {name:"MAC",value:4,ids:'mac'},
                  {name:"VLAN",value:5,ids:'vlan'},
                  {name:"IMSI",value:6,ids:'imsi'},
                  {name:"URL",value:7,ids:'url'},
                  {name:"复合规则",value:8,
                    data:[
                        {name:"精准IP",value:0,data:[
                            {name:"信令协议",value:801,ids:"accurate_xl"},
                            {name:"应用层协议",value:802,ids:"accurate_yy"},
                            {name:"IMSI",value:803,ids:"accurate_imsi"},
                            {name:"URL",value:804,ids:"accurate_url"},
                            {name:"固定位置特征码",value:805,ids:"accurate_fixed"},
                            {name:"窗口范围浮动特征码",value:806,ids:"accurate_float"},
                            {name:"全包范围浮动特征码",value:807,ids:"accurate_both"},
                        ]},
                        {name:"掩码IP",value:1,data:[
                            {name:"信令协议",value:810,ids:"mask_xl"},
                            {name:"应用层协议",value:811,ids:"mask_yy"},
                            {name:"IMSI",value:812,ids:"mask_imsi"},
                            {name:"URL",value:813,ids:"mask_url"},
                            {name:"固定位置特征码",value:814,ids:"mask_fixed"},
                            {name:"窗口范围浮动特征码",value:815,ids:"mask_float"},
                            {name:"全包范围浮动特征码",value:816,ids:"mask_both"},
                        ]},
                    ]
                  }
              ]
            }
        },
        mounted:function(){
             this.ymList.push(this.ym);
        },
        methods:{
            btnClick:function(index){
                this.btnIndex = index
            },
            // 一级菜单下拉事件
            selectChange:function(){
                  this.fsel = false;
                     this.felling = false;
                if(this.crSec_option.value==2||this.crSec_option.value==3||this.crSec_option.value==8){
                     this.fsel = true;
                     this.fselList = this.typeArray[this.crSec_option.value].data;
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
                debugger;
                m.push(n);
                m.reverse();    //倒叙显示数组
                console.log(n)
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
                        dportAfter:"",
                        sportAfter:"",
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
                            sip:"",
                            dip:"",
                            sport:"",
                            dport:"",
                            protecl:"",
                            sc:"",
                            scAfter:"",
                            clfs:"",
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
                            smac:"",
                            dmac:"",
                            sc:"",
                            scAfter:"",
                            clfs:"",
                            clfsCenter:"",
                            clfsAfter:"",
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
                            firDown:"",
                            secDown:"",
                            thrDown:"",
                            fouDown:"",
                            clfs:"",
                            clfsCenter:"",
                            clfsAfter:"",
                            sc:"",
                            scAfter:"",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:'',  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                             outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                       };
                      this.addFunction(this.vlanList,letvlan,ids,'yes');
                    break;
                    case 6:
                       var letimsi = {
                            ruleId:"",
                            imsi:"",
                            clfs:"",
                            clfsCenter:"",
                            clfsAfter:"",
                            sc:"",
                            scAfter:"",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:'',  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                             outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                       };
                      this.addFunction(this.imsiList,letimsi,ids,'no');
                    break;
                    case 7:
                       var leturl = {
                            ruleId:"",
                            url:"",
                            clfs:"",
                            clfsCenter:"",
                            clfsAfter:"",
                            sc:"",
                            scAfter:"",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:'',  //二级名字    
                            childLastName:this.crSec_bdOption.name,  //三级名字
                             outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                       };
                      this.addFunction(this.urlList,leturl,ids,'no');
                    break;
                    }
            },
            addLd:function(e,ids){
                if(e>300&&e<310){
                      var letxl = {
                            ruleId:"",
                            sc:"",
                            scAfter:"",
                            clfs:"",
                            clfsCenter:"",
                            clfsAfter:"",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                             outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                       };
                      this.addFunction(this.xlList,letxl,ids,'no');
                }else{
                 switch(e)
                    {
                    case 200:
                     var letTzBefore = {
                         ruleId:"",
                         sc:"",
                         scAfter:"",
                         tzm:"",
                         position:"",
                         clfs:"",
                         clfsCenter:"",
                         clfsAfter:"",
                         name:this.crSec_option.name,  //一级类型名字
                         childrenName:this.crSec_afterOption.name,  //二级名字
                         childLastName:this.crSec_bdOption.name,  //三级名字
                          outBoolean:true, //控制输出选项
                         boolean:true //控制处理方式输入框的可写性
                     } 
                     this.addFunction(this.tz_fixedList,letTzBefore,ids,'yes')
                    break;
                    case 201:
                     var letTz_Center = {
                         ruleId:"",
                         sc:"",
                         scAfter:"",
                         tzm:"",
                         startPosition:"",
                         cliceWidth:"",
                         clfs:"",
                         clfsCenter:"",
                         clfsAfter:"",
                         name:this.crSec_option.name,  //一级类型名字
                         childrenName:this.crSec_afterOption.name,  //二级名字
                         childLastName:this.crSec_bdOption.name,  //三级名字
                          outBoolean:true, //控制输出选项
                         boolean:true //控制处理方式输入框的可写性
                     } 
                     this.addFunction(this.tz_floatList,letTz_Center,ids,'yes')
                    break;
                    case 202:
                      var letTz_After = {
                         ruleId:"",
                         sc:"",
                         scAfter:"",
                         tzm:"",
                         clfs:"",
                         clfsCenter:"",
                         clfsAfter:"",
                         name:this.crSec_option.name,  //一级类型名字
                         childrenName:this.crSec_afterOption.name,  //二级名字
                         childLastName:this.crSec_bdOption.name,  //三级名字
                          outBoolean:true, //控制输出选项
                         boolean:true //控制处理方式输入框的可写性
                     } 
                     this.addFunction(this.tz_bothList,letTz_After,ids,'no')
                    break;
                    }
                }
            },
            addThe:function(e,ids){
                console.log(e,ids)
                switch(e)
                    {
                    case 801:
                     var letjz_xl = {
                            ruleId:"",
                            sip:"",
                            dip:"",
                            sport:"",
                            dport:"",
                            protecl:"",
                            sc:"",
                            scAfter:"",
                            clfs:"",
                            xlxy:"",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                       };
                      this.addFunction(this.jz_xlList,letjz_xl,ids,'yes');
                    break;
                     case 802:
                     var letjz_yy = {
                            ruleId:"",
                            sip:"",
                            dip:"",
                            sport:"",
                            dport:"",
                            protecl:"",
                            sc:"",
                            scAfter:"",
                            clfs:"",
                            yy:"",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                       };
                      this.addFunction(this.jz_yyList,letjz_yy,ids,'yes');
                    break;
                     case 803:
                     var letjz_imsi = {
                            ruleId:"",
                            sip:"",
                            dip:"",
                            sport:"",
                            dport:"",
                            protecl:"",
                            sc:"",
                            scAfter:"",
                            clfs:"",
                            imsi:"",
                             name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                       };
                      this.addFunction(this.jz_imsiList,letjz_imsi,ids,'yes');
                    break;
                    case 804:
                     var letjz_url = {
                            ruleId:"",
                            sip:"",
                            dip:"",
                            sport:"",
                            dport:"",
                            protecl:"",
                            sc:"",
                            scAfter:"",
                            clfs:"",
                            url:"",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                       };
                      this.addFunction(this.jz_urlList,letjz_url,ids,'yes');
                    break
                     case 805:
                     var letjz_fixed = {
                            ruleId:"",
                            sip:"",
                            dip:"",
                            sport:"",
                            dport:"",
                            protecl:"",
                            sc:"",
                            scAfter:"",
                            clfs:"",
                            tzm:"",
                            position:"",
                             name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                       };
                      this.addFunction(this.jz_fixedList,letjz_fixed,ids,'yn');
                    break
                     case 806:
                     var letjz_float = {
                            ruleId:"",
                            sip:"",
                            dip:"",
                            sport:"",
                            dport:"",
                            protecl:"",
                            sc:"",
                            scAfter:"",
                            clfs:"",
                            tzm:"",
                            cliceWidth:"",
                            startPosition:"",
                             name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                       };
                      this.addFunction(this.jz_floatList,letjz_float,ids,'yn');
                    break
                    case 807:
                     var letjz_both = {
                            ruleId:"",
                            sip:"",
                            dip:"",
                            sport:"",
                            dport:"",
                            protecl:"",
                            sc:"",
                            scAfter:"",
                            clfs:"",
                            tzm:"",
                             name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                       };
                      this.addFunction(this.jz_bothList,letjz_both,ids,'yes');
                    break
                     case 810:
                          var letym_xl = {
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
                            xlxy:"",
                            sportAfter:"",
                            dportAfter:"",
                            proteclAfter:"",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                        };
                      this.addFunction(this.ym_xlList,letym_xl,ids,'yes');
                    break
                    case 811:
                          var letym_yy = {
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
                            yy:"",
                            sportAfter:"",
                            dportAfter:"",
                            proteclAfter:"",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                        };
                      this.addFunction(this.ym_yyList,letym_yy,ids,'yes');
                    break
                      case 812:
                          var letym_imsi = {
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
                            imsi:"",
                            sportAfter:"",
                            dportAfter:"",
                            proteclAfter:"",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                        };
                      this.addFunction(this.ym_imsiList,letym_imsi,ids,'yes');
                    break
                      case 813:
                          var letym_url = {
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
                            url:"",
                            sportAfter:"",
                            dportAfter:"",
                            proteclAfter:"",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                        };
                      this.addFunction(this.ym_urlList,letym_url,ids,'yes');
                    break
                      case 814:
                          var letym_fixed = {
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
                            tzm:"",
                            sportAfter:"",
                            dportAfter:"",
                            position:"",
                            proteclAfter:"",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                        };
                      this.addFunction(this.ym_fixedList,letym_fixed,ids,'yn');
                    break
                      case 815:
                          var letym_float = {
                            ruleId:"",
                            sip:"",
                            sipAfter:"",
                            dip:"",
                            dipAfter:"",
                            sport:"",
                            dport:"",
                            sportAfter:"",
                            dportAfter:"",
                            protecl:"",
                            proteclAfter:"",
                            sc:"",
                            scAfter:"",
                            clfs:"",
                            tzm:"",
                            cliceWidth:"",
                            startPosition:"",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                        };
                      this.addFunction(this.ym_floatList,letym_float,ids,'yn');
                    break
                     case 816:
                          var letym_both = {
                            ruleId:"",
                            sip:"",
                            sipAfter:"",
                            dip:"",
                            dipAfter:"",
                            sport:"",
                            dport:"",
                            sportAfter:"",
                            dportAfter:"",
                            proteclAfter:"",
                            protecl:"",
                            sc:"",
                            scAfter:"",
                            clfs:"",
                            tzm:"",
                            name:this.crSec_option.name,  //一级类型名字
                            childrenName:this.crSec_afterOption.name,  //二级名字
                            childLastName:this.crSec_bdOption.name,  //三级名字
                            outBoolean:true, //控制输出选项
                            boolean:true //控制处理方式输入框的可写性
                        };
                      this.addFunction(this.ym_bothList,letym_both,ids,'yes');
                    break
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
                 data.push(JSON.parse(JSON.stringify(data[index])));  //变为新对象，不会上下影响
            }

        }
    }
</script>
