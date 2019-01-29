<template>
  <el-menu mode="horizontal">
    <p class="elMenu">{{number}}输出组<span class="goOut" @click="goOut">返回</span></p>
    <div class="mainBtn">
      <el-button type="primary">编辑</el-button>
    </div>
    <p class="elMenu">基本信息<i class="jbxxZt" @click="jbxxFuc"></i></p>
    <el-row class="buttns">
      <el-row class="cssFrom">
        <el-form :rules="rules" ref="formInline" :inline="true" :model="formInline" class="demo-ruleForm">
          <el-form-item label="端口组名称:" prop="name">
            <el-input v-model="formInline.groupName":disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="端口组属性:" prop="name">
            <el-input v-model="formInline.portGroupAttr":disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="端口组描述：" prop="desc" class="descs">
            <el-input type="textarea" v-model="formInline.desc" class="textarea":disabled="true"></el-input>
          </el-form-item>
        </el-form>
      </el-row>
    </el-row>
    <p class="elMenuP">
      <span :class="flagGroup==true?'elMenuSpan elMenuSpanCur':'elMenuSpan'" @click="groupAndRule(1)">组成员</span>
      <span :class="flagRule==true?'elMenuSpan elMenuSpanCur':'elMenuSpan'" @click="groupAndRule(2)">所绑规则</span>
    </p>
    <!-- 组成员 -->
    <el-row v-show="flagGroup" style="background-color: #fff;padding: 20px 10px 0;">
      <div>
        <el-button type="primary" @click="addMan">添加成员</el-button>
        <el-button>批量删除</el-button>
        <span class="yxzdk">已新增n个端口</span>
      </div>
      <p class="zucyDk">
        <span>端口</span>
        <span>端口组</span>
      </p>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;margin-top: 20px;" @selection-change="handleSelectionChange" :header-cell-style="{background:'#f4f4f4'}">
        <el-table-column v-for="(tableTh, key) in tableTh"
           :key="key"
           :prop="tableTh.prop"
           :label="tableTh.label"
           :type="tableTh.type"
           :width="tableTh.width" align="center" :fixed="key==0?true:key==1?true:false">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="130">
          <template slot-scope="scope">
            <el-button class="tableBtn" @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">详情</el-button>
            <el-button class="tableBtn" @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!-- 所绑规则 -->
    <el-row v-show="flagRule" style="padding: 0 10px;">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;margin-top: 20px;" @selection-change="handleSelectionChange" :header-cell-style="{background:'#f4f4f4'}">
        <el-table-column v-for="(tableTh, key) in tableTh"
           :key="key"
           :prop="tableTh.prop"
           :label="tableTh.label"
           :type="tableTh.type"
           :width="tableTh.width" align="center" :fixed="key==0?true:key==1?true:false">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button class="tableBtn" @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">编辑</el-button>
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
            <el-button type="primary" class="btnSize">高级查询</el-button>
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
  </el-menu>
</template>

<script>
import api from '@/service'

export default {
  data() {
    return {
      jbxxShow: true,
      number: null,
      flagGroup: true,
      flagRule: false,
      formInline: {
          portName: '',
          cardCw: '',
          region: '',
          portGroupAttr: ''
      },
      tableTh: [
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
    //数据回显
    this.formInline.groupName=this.$route.query.name
    this.number=this.$route.query.number
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
    // 组成员和所绑规则切换
    groupAndRule(indexNum){
      if(indexNum==1){
        this.flagGroup=true;
        this.flagRule=false;
      }else{
        this.flagGroup=false;
        this.flagRule=true;
      }
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
    position: relative
  }
  .elMenu,.elMenuP{
    background-color: rgb(242,242,242);
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    margin: 0;
  }
  .elMenuP{
    padding-left: 0px;
    z-index: 3;
    position: relative;
  }
  .elMenuSpan{
    width: 80px;
    height: 40px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    line-height: 40px;
  }
  .elMenuSpanCur{
    background-color: rgb(67,159,255);
    color: #fff;
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
  .modulsMain{
    width: 1000px;
    height: 600px;
    position: fixed;
    top: 10%;
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
  .yxzdk,.goOut{
    position: absolute;
    right: 50px;
  }
  .goOut{
    cursor: pointer;
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
  .btnCur{
    height: 0px;
  }
  .zucyDk{
    background-color: rgb(242,242,242);
    height: 30px;
    line-height: 30px;
    margin: 10px 0;
  }
  .zucyDk>span{
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    color: #439FFF;
  }
</style>