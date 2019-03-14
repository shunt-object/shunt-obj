<template>
   <div id="totalMain">
       <!--删除弹出框-->
         <!--<div id="DeleDialog">
            <el-dialog
                title='删除提示'
                :visible.sync="dialogVisible">
                <span >是否确定删除此条规则？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisibleCenter">确 定</el-button>
                </span>
            </el-dialog>
        </div>-->
        <div class="plsec_button" style="padding-bottom:10px">
            <el-button  type="primary" @click="editor()" v-show="edindex">编 辑</el-button>
            <el-button v-show="lindex" @click="qClick()">取 消</el-button>
            <el-button  type="primary" v-show="lindex" @click="qestrong()">保 存</el-button>
        </div>
        <div id="crSec">
            <div id="glo_table">
                <table border="1">
                    <tr>
                        <td class="glo_td">Netflow</td>
                        <td> 
                            <el-radio v-model="checkbox.checked1" :disabled="edindex" class="chleft" label="1">是</el-radio>
                            <el-radio v-model="checkbox.checked1" :disabled="edindex" label="2" >否</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td class="glo_td">报文去重</td>
                        <td> 
                            <el-radio v-model="checkbox.checked3" :disabled="edindex"  class="chleft" label="1">是</el-radio>
                            <el-radio v-model="checkbox.checked3" :disabled="edindex"  label="2">否</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td class="glo_td">剥离报文头</td>
                        <td> 
                            <div class="glo_float">
                                <el-radio v-model="checkbox.checked5" :disabled="edindex"  class="chleft" label="1">是</el-radio>
                                <el-radio v-model="checkbox.checked5" :disabled="edindex"  label="2">否</el-radio>
                            </div>
                            <div class="glo_float" style="margin-left:10%" v-if="checkbox.checked5=='1'">
                                <div style="display:inline-block">
                                    <div style="display:inline-block;line-height:40px;margin-left:50px"></div>
                                        <el-select v-model="selectEn" placeholder="请选择" style="display:inline-block"  id="selecInp" :disabled="edindex" >
                                            <el-option
                                            v-for="item in options3"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                            :disabled="item.disabled">
                                            </el-option>
                                        </el-select>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="glo_td">报文修改</td>
                        <td> 
                            <el-radio v-model="checkbox.checked7" :disabled="edindex"  class="chleft" label="1">是</el-radio>
                            <el-radio v-model="checkbox.checked7" :disabled="edindex"  label="2">否</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td class="glo_td">报文头输出</td>
                        <td>
                            <div class="glo_float">
                                <el-radio v-model="checkbox.checked9" :disabled="edindex"  class="chleft" label="1">是</el-radio>
                                <el-radio v-model="checkbox.checked9" :disabled="edindex"  label="2">否</el-radio>
                            </div>
                            <div class="glo_float" style="margin-left:10%" v-if="checkbox.checked9=='1'">
                                <div style="display:inline-block">
                                        <div style="display:inline-block;line-height:40px">输出：</div>
                                        <el-select v-model="bwt" placeholder="请选择" style="display:inline-block"  id="selecInp" :disabled="edindex" >
                                            <el-option
                                            v-for="item in options1"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                            :disabled="item.disabled">
                                            </el-option>
                                        </el-select>
                                </div>
                                <div style="display:inline-block"><el-input :disabled="edindex" v-model="input" placeholder="请输入" style="display:inline-block"  class="glo_floatInput"></el-input></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="glo_td">内外层IP规则</td>
                        <td>
                            <el-select v-model="ipRule" placeholder="请选择" style="margin-left:20px;height:40px;" :disabled="edindex" >
                                <el-option
                                v-for="item in options2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                                </el-option>
                            </el-select>
                        </td>
                    </tr>
                    <tr>
                        <td class="glo_td">窗口范围浮动起始位置</td>
                        <td>
                            <el-input v-model="inputFloatPosi" placeholder="请输入窗口范围浮动起始位置" class="glo_floatInput" :disabled="edindex" ></el-input>
                        </td>
                    </tr>
                    <tr>
                        <td class="glo_td">窗口范围浮动窗口宽度</td>
                        <td>
                            <el-input v-model="inputFloatWidth" type="number" placeholder="请输入窗口范围浮动窗口宽度" class="glo_floatInput" :disabled="edindex" ></el-input>
                        </td>
                    </tr>
                 </table>
            </div>
        </div>
        </div>

        
        
   </div>
 
</template>
<style>
    .glo_floatInput .el-input,.glo_floatInput .el-input__inner{
        width:200px!important;
        margin-left: 20px;
    }
    #selecInp  .el-input, .glo_floatInput .el-input__inner{
         width:200px!important;
    }
    .glo_float{
        display: inline-block;
    }
    .chleft{
        margin-left: 20px;
    }
    .glo_td{
        width:13%;
        padding-left:10px;
        height: 50px;
    }
    #glo_table{
        padding: 20px;
        color:#555555
    }
    #glo_table table{
        border: 1px solid #555555;
        width: 100%;
    }
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
        name:'ruleCreateGlobal',
        data(){
            return{
                edindex:true,
                lindex:false,
                inputFloatPosi:"",
                inputFloatWidth:"",
                ipRule:"",
                bwt:"",
                input:"",
                selectEn:"",
                options2:[
                    {label:"外层IP匹配",value:"OUTER",disabled:false},
                    {label:"内层IP匹配",value:"INNER",disabled:false}
                ],
                options3:[
                    {label:"ip",value:"ip",disabled:false},
                    {label:"vlan",value:"vlan",disabled:false},
                    {label:"mpls",value:"mpls",disabled:false},
                    {label:"all",value:"all",disabled:false}
                ],
                options1:[
                    {label:"端口",value:0,disabled:false},
                    {label:"端口组",value:1,disabled:false}
                ],
                checkbox:{
                    checked1:"1",
                    checked3:"1",
                    checked5:"1",
                    checked7:"1",
                    checked9:"1",
                },
                list:[]
                
            }
        },
        mounted:function(){
            //  this.$this.get('/api/ruleMiscConfig').then((response)=>{
            //     this.list = response.data.body[0];
            //     this.inputFloatPosi = this.list.keywordOffsetStart;
            //     this.inputFloatWidth = this.list.keywordOffsetEnd-this.list.keywordOffsetStart;
            //     this.ipRule = this.list.ipTunnelMatchType;
            //  }).catch((error)=>{})
        },
        methods:{
          qestrong:function(){
            this.edindex = true;
            this.lindex = false;
            if(this.ipRule==""){
                this.simAjax("NONE");
            }else{
                this.simAjax(this.ipRule);
            }
          },
          simAjax:function(ip){
              console.log(this.checkbox.checked1)
            var obj = {
                'op':'set',
                'body':[
                    {
                        'ip-in-ip':{
                            'match':ip,
                            // 'outgroup':"2222"
                        }
                    },
                    {
                        'keyword-offset':{
                            'start':this.inputFloatPosi,
                            'end':String(Number(this.inputFloatPosi)+Number(this.inputFloatWidth))
                        }
                    },
                    {
                        'net-flow':{
                            'status':this.checkbox.checked1=='1'?'enable':'disable',
                            // 'outgroup':#(enable:0-255)
                        }
                    },
                    {
                        'function-switch':{
                            "function":"de-duplication",
                            'action':this.checkbox.checked3=='1'?'on':'off'
                        }
                    },
                    {
                        'packet-header-remove':{
                            'status':this.checkbox.checked5=='1'?'enable':'disable',
                            'mode':this.selectEn
                        }
                    },
                    {
                        'packet-info-mark':{
                            'status':this.checkbox.checked7=='1'?'enable':'disable',
                        }
                    },
                    {
                        'packet-header-output':{
                            // 'ratio':#1-1000,
                            'status':this.checkbox.checked9=='1'?'enable':'disable',
                            'outgroup':this.input
                        }
                    },
                ]
            };
              this.$this.post('/api/ruleMiscConfig',JSON.stringify(obj)).then((response)=>{
             }).catch((error)=>{})
          },
          qClick:function(){
            this.edindex = true;
            this.lindex = false;
          },
          editor:function(){
            this.edindex = false;
            this.lindex = true;
          }

        }
    }
</script>
