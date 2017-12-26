<template>
    <div>
         <ul class="uls">
             <li class="sps row">
                 <span class="col-md-1"><input type="checkbox"></span>
                 <span class="col-md-1">云分析</span>
                 <span class="col-md-2">应用名称</span>
                 <span class="col-md-4">云规划进度</span>
                 <span class="col-md-4">云选型进度</span>
             </li>
             <li class="">
                 <ul>
                      <li class="row sps">
                        <span class="col-md-1"><input type="checkbox"></span>
                        <span class="col-md-1">000</span>
                        <span class="col-md-2"></span>
                        <span class="col-md-4"></span>
                        <span class="col-md-4"></span>
                      </li>
                      <li class="row spx">
                        <span class="col-md-1 bn">1</span>
                        <span class="col-md-1 bn">0</span>
                        <span class="col-md-2 bn">Apple</span>
                        <span class="col-md-8 text-left" >
                            <p>
                                <a href="#">云定性</a>
                                <a href="#">云亲和度</a>
                                <a href="#">云收益度</a>
                                <a href="#">标准</a>
                            </p>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="60"
                                    aria-valuemin="0" aria-valuemax="100" style="width: 40%;">
                                    <span class="sr-only">40% 完成</span>
                                </div>
                            </div><span class="spc">40%</span>
                        </span>
                     </li>
                 </ul> 
             </li>
         </ul>
    </div>
    
    
</template>
<style>
.sps{
   height:50px;
   background:#ccc;
   border:1px solid #000;
   line-height:49px;
   
}
.spx{ 
   height:200px;
   background:red;
   
}
.spx .bn{
    line-height:200px
}
.spx span p{margin-top:80px;}

.progress{
    width:59%;
    margin:20px 0 0 0;
    height:12px;
    border-radius:10px;
    display:inline-block;
    margin:5px 0 0 0;
} 
.spc{
    margin-left:5px;
    color:#ccc;
}
.progress-bar{
    background-color:#ccc;
    border-radius:10px;
}
*{margin:0;padding:0}
ul li{
    list-style:none
}
.row a{
    display:inline-block;
    padding:5px 40px;
    margin:0 10px 0 0;
    background:#ccc;
    border-radius:20px;
    border:1px solid #ccc;
}

</style>
<script>
    export default {
        name:"bothMany",
        data (){
            return {
                
            }
        }
    }
</script>