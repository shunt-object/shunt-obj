<template>
  <el-menu mode="horizontal">
    <p class="elMenu">创建输出组</p>
    <div class="mainBtn">
      <el-button @click="goOut">取消</el-button>
      <el-button type="primary">保存</el-button>
    </div>
    <p class="elMenu">基本信息<i class="jbxxZt" @click="jbxxFuc"></i></p>
    <el-row class="buttns">
      <el-row class="cssFrom">
        <el-form :label-position="labelPosition" :rules="rules" ref="formInline" :inline="true" :model="formInline" class="demo-ruleForm">
          <el-form-item label="端口组名称:" prop="name">
            <el-input v-model="formInline.groupName"></el-input>
          </el-form-item>
          <el-form-item label="端口组属性">
            <el-select v-model="formInline.portGroupAttr" placeholder="端口组属性">
              <el-option label="负载均衡" value="负载均衡"></el-option>
              <el-option label="复制" value="复制"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="端口组描述：" prop="desc" class="descs">
            <el-input type="textarea" v-model="formInline.desc" class="textarea"></el-input>
          </el-form-item>
        </el-form>
      </el-row>
    </el-row>
    <p class="elMenu">组成员</p>
    <el-row class="zcyShow">
      <div>
        <el-button type="primary" @click="addMan">添加成员</el-button>
        <el-button>批量删除</el-button>
        <span class="yxzdk">已新增n个端口</span>
      </div>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;margin-top: 20px;" @selection-change="handleSelectionChange" :header-cell-style="{background:'#f4f4f4'}">
        <el-table-column v-for="(tableTh, key) in tableTh"
           :key="key"
           :prop="tableTh.prop"
           :label="tableTh.label"
           :type="tableTh.type"
           :width="tableTh.width" align="center" :fixed="key==0?true:key==1?true:key==2?true:false">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="130">
          <template slot-scope="scope">
            <el-button class="tableBtn" @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">详情</el-button>
            <el-button class="tableBtn" @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!-- 添加成员弹框 -->
    <div class="moduls"></div>
    <div class="modulsMain">
      <p class="elMenu">添加成员</p>
      <el-row>
        <el-form :inline="true" :model="formInline" class="demo-form-inline cssFrom">
          <el-form-item label="端口名称">
            <el-input v-model="formInline.portName" placeholder="端口名称" class="inpSize"></el-input>
          </el-form-item>
          <el-form-item label="板卡槽位">
            <el-input v-model="formInline.cardCw" placeholder="板卡槽位" class="inpSize"></el-input>
          </el-form-item>
          <el-form-item label="端口类型">
            <el-select v-model="formInline.region" placeholder="端口类型" class="inpSize">
              <el-option label="100GE" value="shanghai"></el-option>
              <el-option label="40GE" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btnSize">查询</el-button>
            <el-button class="btnSize">清空</el-button>
            <el-button type="primary" class="btnSize" @click="addGjcx">高级查询</el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <el-table ref="multipleTable" :data="tableDataModul" tooltip-effect="dark" style="width: 100%;margin-top: 20px;" @selection-change="handleSelectionChange" :header-cell-style="{background:'#f4f4f4'}">
        <el-table-column v-for="(tableThModul, key) in tableThModul"
           :key="key"
           :prop="tableThModul.prop"
           :label="tableThModul.label"
           :type="tableThModul.type"
           :width="tableThModul.width" align="center" :fixed="key==0?true:key==1?true:key==2?true:false">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button class="tableBtn" @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="bootBtn">
        <el-button class="closeModul" @click="closeModul">取消</el-button>
        <el-button type="primary">确定</el-button>
      </el-row>
    </div>
    <!-- 高级查询弹框 -->
    <div class="highQuery">
      <p class="elMenu">高级查询<span class="closeGjcx"  @click="closeGjcx">X</span></p>
      <div class="gjcxTop">
        <div class="topLeft">
          查询方案
          <span class="addCxfa">+</span>
        </div>
        <div class="topRight">
          <el-input v-model="faer" placeholder="请输入内容" disabled style="width: 400px;"></el-input>
          <el-button style="margin-left: 20px;">保存方案</el-button>
          <el-button type="primary">保存并查询</el-button>
        </div>
      </div>
      <div class="gjcxBottom">
        <div class="bottomLeft">
          <div class="leftMain">
            <p>方案一</p>
            <p class="fapCurren">方案二</p>
            <p>方案三</p>
            <p>方案四</p>
          </div>
        </div>
        <div class="bottomRight">
          <p>端口</p>
          <el-table :data="gjcxData" height="420" border style="width: 100%">
            <el-table-column prop="indexs" label="序号" width="60">
            </el-table-column>
            <el-table-column prop="tjName" label="条件名称" width="130">
            </el-table-column>
            <el-table-column prop="chidrenAttr" label="子属性" width="130">
            </el-table-column>
            <el-table-column prop="gxf" label="关系符" width="130">
              <template slot-scope="scope">
                <el-select v-model="scope.row.gxf" placeholder="请选择" size="mini" v-if="scope.row.canSel">
                  <el-option
                  v-for="item in gxfSele"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="gxf" label="条件值">
              <template slot-scope="scope">
                <el-input v-model="scope.row.tjz" placeholder="请输入内容" size="mini" v-if="scope.row.canInp"></el-input>
                <div class="checkeds" v-if="scope.row.canChecked" style="text-align: left;">
                  <el-checkbox v-model="scope.row.tjzChecked"></el-checkbox>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="gjcxFoot" style="text-align: right;padding:10px 50px">
        <el-button>取消</el-button>
        <el-button type="primary">立即查询</el-button>
      </div>
    </div>
  </el-menu>
</template>

<script>
import api from '@/service'

export default {
  data() {
    return {
      faer: '方案二',
      btnCur: '',
      jbxxShow: true,
      labelPosition: 'right',
      formInline: {
          portName: '',
          cardCw: '',
          region: '',
          portGroupAttr: ''
      },
      tableTh: [
        {
          prop: '',
          label: '',
          type: 'selection',
          width: 55
        },
        {
          prop: 'number',
          label: '序号',
          type: '',
          width: 50
        },
        {
          prop: 'name',
          label: '端口名称',
          type: '',
          width: 120
        },
        {
          prop: 'types',
          label: '类型',
          type: '',
          width: 50
        },
        {
          prop: 'zgsl',
          label: '最高速率',
          type: '',
          width: 220
        },
        {
          prop: 'sl',
          label: '速率',
          type: '',
          width: 220
        },
        {
          prop: 'dlzt',
          label: '端口状态',
          type: '',
          width: 220
        },
        {
          prop: 'dkms',
          label: '端口模式',
          type: '',
          width: 220
        },
        {
          prop: 'zcd',
          label: '帧长度（MTU）',
          type: '',
          width: 220
        },
        {
          prop: 'pvid',
          label: 'PVID',
          type: '',
          width: 220
        },
        {
          prop: 'zjx',
          label: '帧间隙（ipg）',
          type: '',
          width: 220
        },
        {
          prop: 'bckw',
          label: '板卡槽位',
          type: '',
          width: 220
        },
        {
          prop: 'nestvlan',
          label: 'Nestvlan',
          type: '',
          width: 220
        },
        {
          prop: 'glzt',
          label: '管理状态',
          type: '',
          width: 220
        },
        {
          prop: 'ssz',
          label: '所属组',
          type: '',
          width: 220
        },
        {
          prop: 'syfxgz',
          label: '输入方向规则',
          type: '',
          width: 220
        },
        {
          prop: 'scfxgz',
          label: '输出方向规则',
          type: '',
          width: 220
        }
      ],
      tableData: [],
      tableThModul: [
        {
          prop: '',
          label: '',
          type: 'selection',
          width: 55
        },
        {
          prop: 'number',
          label: '序号',
          type: '',
          width: 50
        },
        {
          prop: 'name',
          label: '端口名称',
          type: '',
          width: 120
        },
        {
          prop: 'types',
          label: '槽位',
          type: '',
          width: 50
        },
        {
          prop: 'groupMan',
          label: '板卡型号',
          type: '',
          width: 220
        },
        {
          prop: 'okRule',
          label: '所属组',
          type: '',
          width: 220
        },
        {
          prop: 'maxSd',
          label: '端口状态',
          type: '',
          width: 220
        },
        {
          prop: 'maxSd',
          label: '端口速率',
          type: '',
          width: 220
        },
        {
          prop: 'maxSd',
          label: '端口模式',
          type: '',
          width: 220
        },
        {
          prop: 'maxSd',
          label: '端口类型',
          type: '',
          width: 220
        },
        {
          prop: 'maxSd',
          label: 'PVID',
          type: '',
          width: 220
        },
        {
          prop: 'maxSd',
          label: '三层IP',
          type: '',
          width: 220
        },
        {
          prop: 'maxSd',
          label: '帧长度（MTU）',
          type: '',
          width: 220
        },
        {
          prop: 'maxSd',
          label: '帧间隙（IPG）',
          type: '',
          width: 220
        },
        {
          prop: 'maxSd',
          label: 'nestvlan',
          type: '',
          width: 220
        },
        {
          prop: 'maxSd',
          label: '启用禁止状态',
          type: '',
          width: 220
        }
      ],
      tableDataModul: [
        {
          number: '109',
          name: 'GROUP-1',
          types: '端口',
          groupMan: '端口A、端口B..',
          okRule: '规则A、规则B、规则V、...'
        },
        {
          number: '108',
          name: 'GROUP-2',
          types: '端口',
          groupMan: '端口c、端口d..',
          okRule: '规则c、规则d、规则e、...'
        } 
      ],
      gxfSele: [
        {
          value:0,
          label: "等于"   
        },
        {
          value:1,
          label: "大于"   
        },
        {
          value:2,
          label: "小于"   
        }
      ],
      gjcxData: [
        {
          indexs: '1',
          tjName: '端口名称',
          chidrenAttr: '',
          gxf: 0,
          canSel: true,
          tjz: '',
          canInp: true,
          canChecked: false,
          tjzChecked: false
        },
        {
          indexs: '2',
          tjName: '板卡槽位',
          chidrenAttr: '',
          gxf: 1,
          canSel: true,
          tjz: '',
          canInp: true,
          canChecked: false,
          tjzChecked: false
        },
        {
          indexs: '3',
          tjName: '端口类型',
          chidrenAttr: '标准',
          gxf: 1,
          canSel: false,
          tjz: '',
          canInp: false,
          canChecked: true,
          tjzChecked: true
        },
        {
          indexs: '',
          tjName: '',
          chidrenAttr: 'MPO-25GE',
          gxf: 1,
          canSel: false,
          tjz: '',
          canInp: false,
          canChecked: true,
          tjzChecked: true
        },
        {
          indexs: '',
          tjName: '',
          chidrenAttr: 'MPO-10GE',
          gxf: 1,
          canSel: false,
          tjz: '',
          canInp: false,
          canChecked: true,
          tjzChecked: false
        },
        {
          indexs: '4',
          tjName: '所属组',
          chidrenAttr: '',
          gxf: 0,
          canSel: true,
          tjz: '端口组A',
          canInp: true,
          canChecked: false,
          tjzChecked: false
        },
        {
          indexs: '5',
          tjName: '端口状态',
          chidrenAttr: 'UP',
          gxf: 1,
          canSel: false,
          tjz: '',
          canInp: false,
          canChecked: true,
          tjzChecked: true
        },
        {
          indexs: '',
          tjName: '',
          chidrenAttr: 'DOWN',
          gxf: 1,
          canSel: false,
          tjz: '',
          canInp: false,
          canChecked: true,
          tjzChecked: false
        },
        {
          indexs: '6',
          tjName: '端口模式',
          chidrenAttr: '强制',
          gxf: 1,
          canSel: false,
          tjz: '',
          canInp: false,
          canChecked: true,
          tjzChecked: false
        },
        {
          indexs: '',
          tjName: '',
          chidrenAttr: '自协商',
          gxf: 1,
          canSel: false,
          tjz: '',
          canInp: false,
          canChecked: true,
          tjzChecked: false
        },
        {
          indexs: '7',
          tjName: 'PVID',
          chidrenAttr: '',
          gxf: 1,
          canSel: true,
          tjz: '1-4096',
          canInp: true,
          canChecked: false,
          tjzChecked: false
        },
        {
          indexs: '8',
          tjName: '帧间隙（MTU）',
          chidrenAttr: '',
          gxf: 0,
          canSel: true,
          tjz: '1-9126',
          canInp: true,
          canChecked: false,
          tjzChecked: false
        }
      ],
      rules: {
        name: [
        { required: true, message: ' ', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }  
    }
  },
  mounted () {
    this.getCreatGroupList()
  },
  methods: {
    //获取列表数据
    async getCreatGroupList () {
      try {
        let result = await api.portGroup.getCreatGroupList();
        this.tableData=result[0]
      } catch(e) {
        
      } finally {
        
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 高级查询弹框
    addGjcx() {
      $(".highQuery").show();
    },
    // 关闭高级查询弹框
    closeGjcx() {
      $(".highQuery").hide();
    },
    //添加成员弹框
    addMan() {
      $(".modulsMain,.moduls").show();
    },
    //关闭弹框
    closeModul(){
      $(".modulsMain,.moduls").hide();
    },
    //取消返回
    goOut(){
      this.$router.push({ path: "/portGroup/portGroupIndex" });
    },
    // 基本信息展示隐藏
    jbxxFuc(indexs){
      if(this.jbxxShow){
        this.jbxxShow=false
        $(".buttns").addClass("btnCur")
      }else{
        this.jbxxShow=true
        $(".buttns").removeClass("btnCur")
      }
    }
  }
}
</script>

<style scoped>
  .mainBtn{
    padding: 10px;
  }
  .buttns{
    padding: 0 10px 0;
    transition: .5s;
    height: 149px;
  }
  .btnCur{
    height: 0px;
  }
  .cssFrom{
    padding: 10px;
  }
  .descs{
    display: block;
    margin-top: 10px;
  }
  .textarea{
    width: 400px;
  }
  .tableBtn{
    width: 50px !important;
  }
  .is-active,.is-active:hover{
    color: #fff !important;
    background-color: #409EFF !important;
    border-color: #409EFF !important;
  }
  .elMenu{
    background-color: rgb(242,242,242);
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    margin: 0;
    position: relative;
  }
  .elMenuTwo{
    margin: 0 10px;
    background-color: #F2F2F2;
  }
  .menuItem,.menuItemTwo{
    display: inline-block;
    height: 40px;
    line-height: 40px;
  }
  .menuItemTwo{
    margin-left: -4px;
  }
  /*弹框*/
  .moduls{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
    z-index: 2004;
    display: none;
  }
  .modulsMain,.highQuery{
    width: 1000px;
    height: 600px;
    position: fixed;
    top: 5%;
    left: 50%;
    margin-left: -500px;
    background-color: #fff;
    z-index: 2004;
    display: none;
  }
  .bootBtn{
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  .modulMenu{
    width: 100px;
  }
  .selSize{
    width: 130px;
  }
  .inpSize{
    width: 110px;
  }
  .btnSize{
    width:80px !important;
  }
  .jbxxZt{
    width: 15px;
    height: 15px;
    display: inline-block;
    position: absolute;
    right: 0;
    background-color: black;
    top: 13px;
    cursor: pointer;
  }
  .yxzdk{
    position: absolute;
    right: 50px;
  }
  .zcyShow{
    background-color: #fff;
    padding: 20px 10px 0;
  }
  /*高级查询弹框*/
  .closeGjcx{
    position: absolute;
    right: 10px;
    color: #9B9B9B;
    font-size: 20px;
    cursor: pointer;
  }
  .gjcxTop{
    border-bottom: 1px solid #EFEFF0;
  }
  .topLeft{
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-right: 1px solid #EFEFF0;
    position: relative;
    display: inline-block;
  }
  .addCxfa{
    width: 30px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    border: 1px solid #EFEFF0;
    vertical-align: middle;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
  }
  .topRight{
    padding-left: 20px;
    display: inline-block;
  }
  .gjcxBottom{
    border-bottom: 1px solid #EFEFF0;
  }
  .bottomLeft{
    width: 200px;
    height: 480px;
    padding: 20px;
    text-align: center;
    border-right: 1px solid #EFEFF0;
    display: inline-block;
  }
  .leftMain{
    height: 440px;
    background-color: #F2F2F2;
    padding: 20px 0;
    box-sizing: border-box;
  }
  .leftMain>p{
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 0;
    cursor: pointer;
  }
  .fapCurren{
    background-color: #439FFF;
    color: #fff;
  }
  .bottomRight{
    width: 770px;
    padding: 20px;
    display: inline-block;
    vertical-align: top;
  }
  .bottomRight>p{
    width: 750px;
    background-color: #F2F2F2;
    text-align: left;
    padding-left: 10px;
    color: #344354;
    margin: 0;
  }
  .highQuery{
    height: 625px;
  }
</style>