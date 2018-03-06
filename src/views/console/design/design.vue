<template>
    <div class="total">
            <div class="total-header">
                <span></span>
                云设计
            </div>
            <div class="designHeader">
                <div class="designTop">
                    <h2><i></i>推荐配置</h2>
                    <div class="designTab">
                        <p><span><a class="designTaba">应用服务</a></span><span><a class="designTaba">数据库服务</a></span><span><a class="designTaba">网络服务</a></span><span><a class="designTaba">存储服务</a></span><span><a class="designTaba">CDN</a></span></p>
                    </div>
                    <div class="designTabj"><p><span>低配</span><span>高配</span></p></div>
                    <div class="designConfig">
                        <div style="margin:0 30px 0 30px;">
                            <table class="table table-bordered">
                                <thead class="row">
                                    <tr>
                                        <th class="text-center col-md-1 trds" >角色</th>
                                        <th class="text-center col-md-2 trds" style="padding:0px !important;">数量</th>
                                        <th class="text-center col-md-6 trds" style="padding:0px !important;">配置信息</th>
                                        <th class="text-center col-md-3 trds">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="ds">应用服务</td>
                                        <td class="ds">2</td>
                                        <td>
                                            <ul class="row">
                                                <li><span class="col-md-4 ys">1</span><span class="col-md-4 ys">1</span><span class="col-md-4 ys">1</span></li>
                                                <li><span class="col-md-4 ds">( v ) CPU</span><span class="col-md-4 ds">处理器主频</br>（GHZ）</span><span class="col-md-4 ds">内存</br> ( GB )</span></li>
                                                <li><span class="col-md-4 ys">1</span><span class="col-md-4 ys">1</span><span class="col-md-4 ys">1</span></li>
                                                <li><span class="col-md-4 ds">系统盘（GB）</span><span class="col-md-4 ds">操作系统</span><span class="col-md-4 ds">资源平均利用率</span></li>
                                            </ul>
                                        </td>
                                        <td class="ds"><span><i></i>修正</span></td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<style>
    .designHeader{
        min-height:90vh;
        padding-bottom:5%;
    }
    .designTop{
        width:100%;
        background:#fff;
        height:auto;
    }
    .designTop h2{
        text-align:left;
        margin:0px 0 40px 40px;
        font-size:14px;
        padding-top:20px;
        color:#6e6e6e;
    }
    .designTab p{
        height:40px;
        border-bottom:1px solid #ccc;
        margin-left:30px;
        margin-right:30px;
    }
     .designTab a{
        display:inline-block;
      
        
        border-radius:1px;
        background:#f7f7f7;
        padding:5px 20px;
        font-size:14px;
        color:#b9b5b5;
        text-align:left;
        
        margin-bottom:10px;
    }
    .designbg{
        background:#da121a !important;
        border-radius:1px !important;
        color:#fff !important;
    }
    .designSpanbg{
        border-bottom:1px solid #da121a;
    }
    .designTab span{
        
        margin-right:30px;
         display:inline-block;
         float:left;
    }
   .designConfig{
       width:100%;
       height:198px; 
   }
   .designdesignConfiguration{
        margin-left:30px;
        margin-right:30px;
   }
   .designConfigLi span{
       height:50px;
       background:#ebebeb;
       line-height:50px;
   }
   .designConfigLis .spansli{
      height:150px;
      line-height:150px;

   }
   .designConfigLis .spanslis{
      height:150px;
   }
  .designTabj p span{
      float:left;
      margin-left:30px;
      font-size:12px;
      color:#c0c0c0;
      padding:5px 20px;
      border:1px solid  #c0c0c0;
  }
  .designTabj{
      margin-bottom:50px;
  }
  .ys{
      color:#da121a;
      font-size:12px;
  }
  .ds{
      font-size:12px;
        color:#969696;
  }
  .trds{
      font-size:14px;
      color:#777777;
  }
</style>
<script>
    $(document).ready(function(){ 
        $(".designTab p").find("span").click(function(){
                $(".designTab p").find("span").removeClass("designSpanbg")
                $(this).addClass("designSpanbg")
                $(".designTab p span").find("a").removeClass("designbg");
                $(this).find("a").addClass("designbg");
        })
    }); 
import sds from '../../../components/steps/steps'
      export default{
            name:"design",
            methods:{
               
            }


    }
</script>