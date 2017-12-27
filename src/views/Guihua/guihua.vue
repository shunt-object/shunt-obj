<template>
        <div>
            <div>象限图</div>
            <input type="button" value="创建云分析"><input type="button" value="删除"><input type="button" value="导出"><input type="text" value="搜索">
            <div class="container">
                    <ul>
                        <li style="margin-top:50px" class="row">
                            <span class="col-md-1"><input type="checkbox"></span>
                            <span class="col-md-1">应用名称</span>
                            <span class="col-md-2">云分析名称</span>
                            <span class="col-md-2">定性</span>
                            <span class="col-md-3">云收益度</span>
                            <span class="col-md-1">云亲和度</span>
                            <span class="col-md-2">操作</span>
                        </li>
                        <li style="margin-top:20px" class="row" v-for="dat in dat">
                            <span class="col-md-1"><input type="checkbox"></span>
                            <span class="col-md-1">{{dat.proname}}</span>
                            <span class="col-md-9" v-for="vs in dat.projectApps">
                                <span class="col-md-2">{{vs.appname}}</span>
                            
                                <span v-for="fd in vs.appResults" class="col-md-4" v-if="fd.moduleName!=='受益度'&&fd.moduleName!=='亲和度'&&fd.result!==null">{{JSON.parse(fd.result).sname}}</span>
                                <span  v-else-if="fd.result==null" style="width:25%;display:inline-block">未完成</span>
                                <span  v-else class="col-md-3">{{fd.result}}</span>
                            </span>
                        </li>
                    </ul>
            
            </div>
        </div>
</template>
<style>
    ul li{
        list-style:none
    }
</style>
<script>
    export default{
        name:"guihua",
        data(){
            return{
                dat:[]
            }
        },
        mounted:function(){
            this.$http.get('/broker/result/analysis').then((res)=>{
                        console.log(eval("(" + res.bodyText +")").data);

                        this.dat = eval("(" + res.bodyText +")").data;   //所有数据
                      
                        
                     },(err)=>{
                         console.log("不好意思")
                      })
        }
    }
</script>