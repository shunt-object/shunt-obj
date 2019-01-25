<template>
  <el-row class="buttns">
    <el-button type="primary">创建输入组</el-button>
    <el-button>批量删除</el-button>
    <el-row>
      <el-form :inline="true" :model="formInline" class="demo-form-inline cssFrom">
        <el-form-item label="端口组名称">
          <el-input v-model="formInline.groupName" placeholder="端口组名称"></el-input>
        </el-form-item>
        <el-form-item label="端口组属性">
          <el-select v-model="groupAttr" placeholder="端口组属性">
            <el-option
            v-for="item in formInline.groupAttr"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="组成员">
          <el-input v-model="formInline.groupMan" placeholder="组成员"></el-input>
        </el-form-item>
        <el-form-item label="规则">
          <el-input v-model="formInline.groupRule" placeholder="规则"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button>清空</el-button>
          <el-button type="primary" @click="onSubmit">高级查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column v-for="(tableTh, key) in tableTh"
         :key="key"
         :prop="tableTh.prop"
         :label="tableTh.label"
         :type="tableTh.type"
         :width="tableTh.width" align="center">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button class="tableBtn" @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">编辑</el-button>
          <el-button class="tableBtn" @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">详情</el-button>
          <el-button class="tableBtn" @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <AppPage 
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
      :current-page={currentPage}
      :page-sizes={pageSizes}
      :page-size={pageSize}
      layout="total, prev, pager, next, sizes"
      :total={total} class="pageCss"
    ></AppPage>
  </el-row>
</template>

<script>
import AppPage from '@/components/app-page'

export default {
  data() {
    return {
      formInline: {
          groupName: '',
          groupAttr: [
            {
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }
          ],
          groupMan: '',
          groupRule: ''
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
            label: '名称',
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
            prop: 'groupMan',
            label: '组成员',
            type: '',
            width: ''
          },
          {
            prop: 'okRule',
            label: '已绑规则',
            type: '',
            width: ''
          }
        ],
        tableData: [
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
        groupAttr: '',
        currentPage: 3,
        pageSizes: [100, 200, 300, 400],
        pageSize: 100,
        total: 400
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  components: {
    AppPage
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
.tableBtn{
  width: 50px !important;
}
.pageCss{
  float: right;
  margin-top: 30px;
}
</style>