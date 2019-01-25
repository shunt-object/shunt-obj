<template>
  <el-menu mode="horizontal">
    <el-menu-item index="1" class="elMenu">创建输入组</el-menu-item>
    <el-row class="buttns">
      <el-button @click="goOut">取消</el-button>
      <el-button type="primary">保存</el-button>
      <el-row class="cssFrom">
        <el-form :rules="rules" ref="formInline" :inline="true" :model="formInline" class="demo-ruleForm">
          <el-form-item label="端口组名称:" prop="name">
            <el-input v-model="formInline.groupName"></el-input>
          </el-form-item>
          <el-form-item label="端口组描述：" prop="desc" class="descs">
            <el-input type="textarea" v-model="formInline.desc" class="textarea"></el-input>
          </el-form-item>
        </el-form>
      </el-row>
    </el-row>
    <el-menu mode="horizontal" class="elMenuTwo">
      <el-menu-item index="2" class="menuItem">组成员</el-menu-item>
      <el-menu-item index="3"  class="menuItemTwo">已绑规则</el-menu-item>
    </el-menu>
    <el-row style="margin-top: 20px;padding: 0 10px;">
      <el-button type="primary" @click="addMan">添加成员</el-button>
      <el-button>批量删除</el-button>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;margin-top: 20px;" @selection-change="handleSelectionChange">
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
      <el-menu-item index="1" class="elMenu modulMenu">添加成员</el-menu-item>
      <el-row>
        <el-form :inline="true" :model="formInline" class="demo-form-inline cssFrom">
          <el-form-item label="端口名称">
            <el-input v-model="formInline.portName" placeholder="端口名称"></el-input>
          </el-form-item>
          <el-form-item label="端口类型">
            <el-select v-model="formInline.region" placeholder="端口类型">
              <el-option label="100GE" value="shanghai"></el-option>
              <el-option label="40GE" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="速率">
            <el-select v-model="formInline.region" placeholder="速率">
              <el-option label="100GE" value="shanghai"></el-option>
              <el-option label="40GE" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="端口状态">
            <el-select v-model="formInline.region" placeholder="端口状态">
              <el-option label="UP" value="shanghai"></el-option>
              <el-option label="DOWN" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="管理状态">
            <el-select v-model="formInline.region" placeholder="管理状态">
              <el-option label="启用" value="shanghai"></el-option>
              <el-option label="停用" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button>清空</el-button>
            <el-button type="primary">高级查询</el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <el-table ref="multipleTable" :data="tableDataModul" tooltip-effect="dark" style="width: 100%;margin-top: 20px;" @selection-change="handleSelectionChange">
        <el-table-column v-for="(tableThModul, key) in tableThModul"
           :key="key"
           :prop="tableThModul.prop"
           :label="tableThModul.label"
           :type="tableThModul.type"
           :width="tableThModul.width" align="center" :fixed="key==0?true:key==1?true:key==2?true:false">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button class="tableBtn" @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">编辑</el-button>
            <el-button class="tableBtn" @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">详情</el-button>
            <el-button class="tableBtn" @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">移除</el-button>
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
      formInline: {
          groupName: '',
          desc: '',
          portName: '',
          groupMan: '',
          groupRule: ''
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
        { required: true, message: '请输入活动名称', trigger: 'blur' },
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
      this.$router.push({ path: "/consolePage/portGroup" });
    }
  }
}
</script>

<style scoped>
.buttns{
  margin-top: 60px;
  border-top: 10px solid rgb(242,242,242);
  padding: 10px;
}
.cssFrom{
  margin-top: 10px;
  border-top: 2px solid rgb(242,242,242);
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
  /*height: 40px;
  line-height: 40px;*/
  border-bottom:0;
  color: #fff !important;
  background-color: #409EFF !important;
  border-color: #409EFF !important;
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
</style>