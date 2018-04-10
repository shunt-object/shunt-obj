<template>
    <div class="total Lists">
        <div class="total-header">
            <span></span>
            总览
        </div>
        <div class="vis-main">
              <table id="examples" class="table table-striped table-bordered planlist-table" border="1">
                    <thead>
                        <tr style="margin-top:50px; text-align:center" id="tryeer">
                            <th class="col-md-1 text-center">用户姓名</th>
                            <th class="col-md-3 text-center">应用名称</th>
                            <th class="col-md-2 text-center">云定性</th>
                            <th class="col-md-2 text-center">云收益度</th>
                            <th class="col-md-1 text-center">云亲和度</th>
                            <th class="col-md-2 text-center">操作</th>
                        </tr>
                    </thead>
                    <tbody id="myTable" >
                        <tr  class="  ls text-left" id="trs" width="100%">
                            <td >{{}}</td>
                            <td >{{}}</td>
                            <td >{{}}</td>
                            <td >{{}}</td>
                            <td >{{}}</td>
                            <td >{{}}</td>
                        </tr>
                    </tbody>    
            </table>  
            <div class="block" style="text-align:right">
                    <el-pagination 
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage1"
                        :page-size="sizePage"
                        layout="total, prev, pager, next"
                        :total="Number(this.totalPages)">
                    </el-pagination>
                </div>
            </div>                  
        </div>
    </div>
</template>
<style>
    .vis-main{
        width:100%;
        height:100vh;
        background:#fff;
    }
    .vis-main tr{
        height:40px !important;
    }
    .vis-main tr{
        line-height:40px;
    }
    .vis-main th{
        line-height:40px !important;
    }
</style>
<script>
export default {
     name:"vis",
    data (){
        return {
            currentPage1: 1,
             totalPages:"",
             sizePage:6
        }
    },
    methods:{
         handleSizeChange:function(val){
                    alert(val)
                },
                handleCurrentChange:function(val){
                      
                   alert(val)

                },
    }
}
</script>