<template>
	<el-pagination background
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="currentPage"
	      :page-sizes="pageSizes"
	      :page-size="pageSize"
	      layout="total, prev, pager, next, sizes"
	      :total="total" class="pageCss">
	</el-pagination>
</template>

<script>
export default {
	name: 'app-page',
  data() {
  	return {
  		pageSizes: [100,200,300,400],
  		pageSize: 100,
  		currentPage: 4,
  		total: 400
  	}
  },
  methods: {
    // 分页数据
    handleCurrentChange (page) {
      // 页码改变触发父组件的请求当页数据方法
      this.$emit('handleCurrentChange', page)
    },
    // 分页数据
    handleSizeChange (page) {
      // 每页展示数量改变触发父组件的请求当页数据方法
      this.$emit('handleSizeChange', page)
    }
  }
}
</script>