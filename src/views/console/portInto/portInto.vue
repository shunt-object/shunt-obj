<template>
   <div id="totalMain">
        <div id="totalTitle">
            <div class="plsec" >
                <div><span class="plsec_fir">批量配置</span><span class="plsec_sec">已选择3个端口（端口1-1-1，端口1-1-11，端口1-1-20）</span></div>
                <div class="plsec_back" @click="backPort()">返回</div>
            </div>
        </div>
        <div class="plsec_button">
            <el-button  @click="backPort()">取 消</el-button>
            <el-button  type="primary" @click="save()">保 存</el-button>
        </div>
        <div class="plsec_title">
            <div class="plsec_titleFir">基本配置</div>
            <div class="plsec_titleSec"><i :class="foldIndex==true?'icon-icon-triangle-up':'icon-icon-triangle-down'" class="iconfont" @click="foldMenu()"></i></div>
        </div>
        <div class="row" style="margin-bottom:20px;" v-show="foldIndex">
            <div class="col-md-12 plsec_secher">
                <el-form ref="portInto" :model="portInto" label-width="80px">
                    <div class="col-md-4">
                        <el-form-item label="端口名称：" class="rule_group">
                            <el-input v-model="portInto.name" placeholder="请输入端口名称" class=""></el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-4">
                        <el-form-item label="板卡槽位：" class="rule_group">
                            <el-input v-model="portInto.ban" placeholder="请输入板卡槽位" class=""></el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-4">
                        <el-form-item label="端口类型：">
                            <el-select v-model="portInto.type" placeholder="请选择端口类型" class="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
             <div class="col-md-12 plsec_secher">
                <el-form ref="portInto" :model="portInto" label-width="80px">
                    <div class="col-md-4">
                        <el-form-item label="端口状态：" class="rule_group">
                            <el-input v-model="portInto.status" placeholder="请输入端口状态" class=""></el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-4">
                        <el-form-item label="端口模式：">
                            <el-select v-model="portInto.ms" placeholder="请选择端口模式" class="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="col-md-4">
                        <el-form-item label="PVID：" class="rule_group">
                            <el-input v-model="portInto.pvid" placeholder="请输入PVID" class=""></el-input>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
            <div class="col-md-12 plsec_secher">
                <el-form ref="portInto" :model="portInto" label-width="80px">
                    <div class="col-md-4" id="soLongName">
                        <el-form-item label="（帧间隙）MTU：" class="rule_group">
                            <el-input v-model="portInto.mtu" placeholder="请输入（帧间隙）MTU" class=""></el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-4" id="soLongName">
                        <el-form-item label="（帧长度）ipg：">
                            <el-select v-model="portInto.ipg" placeholder="请选择（帧长度）ipg" class="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                     <div class="col-md-4">
                        <el-form-item label="nestvlan：">
                            <el-select v-model="portInto.nestvlan" placeholder="请选择nestvlan" class="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
            <div class="col-md-12 plsec_secher">
                <el-form ref="portInto" :model="portInto" label-width="80px">
                    <div class="col-md-4" id="soLongName">
                        <el-form-item label="端口速率：">
                            <el-select v-model="portInto.sl" placeholder="请选择端口速率" class="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="col-md-4">
                        <el-form-item label="启用端口：">
                            <el-radio-group v-model="portInto.if">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </div>
                    <div class="col-md-4" id="soLongName">
                    </div>
                </el-form>
            </div>
        </div>
        <div class="plsec_title">
            <div class="plsec_titleFir">所属端口组</div>
            <div class="plsec_titleSec"><i :class="groupIndex==true?'icon-icon-triangle-up':'icon-icon-triangle-down'" class="iconfont" @click="foldgroup()"></i></div>
        </div>
        <div class="groupIs" v-show="groupIndex">
            <div class="groupIs_main">
                <div v-for="(item,index) in acList" :class="acStyle==index?'acStyle':''" @click="ifAcStyle(index)">{{item.name}}</div>
            </div>
            <div class="inSr" v-show="!acStyle">加入输入组</div>
            <div class="inSr" v-show="acStyle">加入输出组</div>
             <div id="tableMains">
                <el-table :data="tabList" border style="width: 100%;text-align:center" :highlight-current-row="true" :header-cell-style="{background:'#f4f4f4'}" @selection-change="handleSelectionChange">
                    <el-table-column
                    type="index"
                    label="序号"
                    fixed="left"
                    width="80">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="端口组名称"
                    width="150">
                    </el-table-column>
                    <el-table-column
                    prop="type"
                    label="端口组类型"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="people"
                    label="组成员"
                    width="400">
                    </el-table-column>
                    <el-table-column
                    prop="write"
                    label="绑定的输入规则"
                    width="300">
                    </el-table-column>
                    <el-table-column
                    prop="out"
                    label="绑定的输出规则"
                    width="300">
                    </el-table-column>
                    <el-table-column
                    fixed="right"
                    label="操作"
                    width="200">
                    <template slot-scope="scope">
                        <span class="span" @click="lookContent(scope.row)" >详情</span>
                        <span class="span" @click="deleteOnlyClick(scope.row)"  id="colorReder">删除</span>
                    </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>

    
      
        
   </div>
 
</template>
<script>
 import '../portInto/portInto.css'
    export default {
        name:'ruleConfig',
        data(){
            return{
              foldIndex:true,
              groupIndex:true,
              activeName: 'first',
              acList:[
                {name:'输入组'},
                {name:'输出组'}
              ],
              acStyle:0,
              portInto:{
                  name:"",
                  ban:"",
                  type:"",
                  status:"",
                  ms:"",
                  pvid:"",
                  mtu:"",
                  ipg:"",
                  nestvlan:"",
                  sl:"",
                  if:""
              },
              tabList:[
                  {name:'wyd',type:"输出组",people:"端口1-1-2，端口1-1-6~~端口1-1-17",write:"xxxxxx",out:"xxxxxx"},
                  {name:'wyd',type:"输出组",people:"端口1-1-2，端口1-1-6~~端口1-1-17",write:"xxxxxx",out:"xxxxxx"},
                  {name:'wyd',type:"输出组",people:"端口1-1-2，端口1-1-6~~端口1-1-17",write:"xxxxxx",out:"xxxxxx"},
                  {name:'wyd',type:"输出组",people:"端口1-1-2，端口1-1-6~~端口1-1-17",write:"xxxxxx",out:"xxxxxx"},
                  {name:'wyd',type:"输出组",people:"端口1-1-2，端口1-1-6~~端口1-1-17",write:"xxxxxx",out:"xxxxxx"},
                  {name:'wyd',type:"输出组",people:"端口1-1-2，端口1-1-6~~端口1-1-17",write:"xxxxxx",out:"xxxxxx"},
                  {name:'wyd',type:"输出组",people:"端口1-1-2，端口1-1-6~~端口1-1-17",write:"xxxxxx",out:"xxxxxx"},
                  {name:'wyd',type:"输出组",people:"端口1-1-2，端口1-1-6~~端口1-1-17",write:"xxxxxx",out:"xxxxxx"},
                  {name:'wyd',type:"输出组",people:"端口1-1-2，端口1-1-6~~端口1-1-17",write:"xxxxxx",out:"xxxxxx"},
                  {name:'wyd',type:"输出组",people:"端口1-1-2，端口1-1-6~~端口1-1-17",write:"xxxxxx",out:"xxxxxx"},
                  {name:'wyd',type:"输出组",people:"端口1-1-2，端口1-1-6~~端口1-1-17",write:"xxxxxx",out:"xxxxxx"},
              ]
            }
        },
        mounted:function(){

        },
        methods:{
          backPort:function(){
              this.$router.push({path:"/consolePage/port"})
          },
          foldMenu:function(){
            if(this.foldIndex==0){
                this.foldIndex = 1
            }else{
                this.foldIndex = 0
            }
          },
          foldgroup:function(){
            if(this.groupIndex==0){
                this.groupIndex = 1
            }else{
                this.groupIndex = 0
            }
          },
          deleteOnlyClick:function(){

          },
          lookContent:function(){

          },
          handleSelectionChange:function(){

          },
          ifAcStyle:function(index){
              this.acStyle = index
          },
          save:function(){
              this.$layer.msg("保存成功");
          }

          
             
         
            
            
        },
    }
</script>
