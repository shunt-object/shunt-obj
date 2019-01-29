<template>
  <el-row class="buttns">
    <el-button type="primary" @click="goCreatInp">创建输入组</el-button>
    <el-button>批量删除</el-button>
    <el-row>
      <el-form :inline="true" :model="formInline" class="demo-form-inline cssFrom">
        <el-form-item label="端口组名称:" label-width="90px">
          <el-input v-model="formInline.groupName" placeholder="端口组名称" class="inpSize"></el-input>
        </el-form-item>
        <el-form-item label="组成员:">
          <el-input v-model="formInline.groupMan" placeholder="组成员" class="inpSize"></el-input>
        </el-form-item>
        <el-form-item label="规则:">
          <el-input v-model="formInline.groupRule" placeholder="规则" class="inpSize"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btnSize">查询</el-button>
          <el-button class="btnSize">清空</el-button>
          <el-button type="primary" class="btnSize">高级查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange":header-cell-style="{background:'#f4f4f4'}">
      <el-table-column v-for="(tableTh, key) in tableTh"
         :key="key"
         :prop="tableTh.prop"
         :label="tableTh.label"
         :type="tableTh.type"
         :width="tableTh.width" align="center">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button class="tableBtn" @click.native.prevent="editPort(scope.$index,scope.row,1)" type="text" size="small">编辑</el-button>
          <el-button class="tableBtn" @click.native.prevent="editPort(scope.$index,scope.row,2)" type="text" size="small">详情</el-button>
          <el-button class="tableBtn" @click.native.prevent="deletePort(scope.$index,scope.row)" type="text" size="small">移除</el-button>
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
import api from '@/service'
import AppPage from '@/components/app-page'

export default {
  data() {
    return {
      formInline: {
        groupName: '',
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
      tableData: [],
      currentPage: 3,
      pageSizes: [100, 200, 300, 400],
      pageSize: 100,
      total: 400
    };
  },
  created () {
    this.getPortGroupList()
  },
  methods: {
    //获取列表数据
    async getPortGroupList () {
      try {
        let result = await api.portGroup.getPortGroupList();
        this.tableData=result[0]
      } catch(e) {
        
      } finally {
        
      }
    },
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
    },
    //移除端口
    deletePort(indexs,row){
      this.$confirm('已选中'+row.name+'输入组, 是否确定移除?', '移除提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //调接口
        this.$message({
          type: 'success',
          message: '移除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消移除'
        });          
      });
    },
    //跳转创建输入组页面
    goCreatInp() {
      this.$router.push({ path: "/portGroup/creatInput" });
    },
    //跳转编辑页面
    editPort(indexs,row,num){
      console.log(indexs,row)
      if(num==1){
        // 去编辑页面
        this.$router.push({ path: "/portGroup/editInputGroup",query: row })
      }else{
        // 去详情页面
        this.$router.push({ path: "/portGroup/detailInputGroup",query: row })
      }
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
.inpSize{
  width: 110px;
}
.btnSize{
  width:80px !important;
}
</style>