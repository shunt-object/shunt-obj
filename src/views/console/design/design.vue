<template>
    <div class="total">
            <div class="total-header">
                <span></span>
                云设计
            </div>
            <sds index="5" start="4" :type="$route.query.type" :id="$route.query.id"></sds>
            <div class="designHeader">
                <div class="designTop">
                    <h2><i class="iconfont icon-xitongpeizhi" style="color:#da121a;font-size:14px"></i>&nbsp&nbsp推荐配置</h2>
                    <div class="designTab">
                        <p>
                            <span v-on:click="yyClick"><a class="designTaba">应用服务</a></span>
                            <span v-on:click="sjClick"><a class="designTaba">数据库服务</a></span>
                            <!--<span v-on:click="wlClick"><a class="designTaba">网络服务</a></span>
                            <span v-on:click="ccClick"><a class="designTaba">存储服务</a></span>
                            <span v-on:click="cdnClick"><a class="designTaba">CDN</a></span>-->
                            <span><button class="designTaba notclick" disabled style="color:#B5B5B5;background:#EDEDED;cursor: not-allowed; ">网络服务</button></span>
                            <span><button class="designTaba notclick" disabled style="color:#B5B5B5;background:#EDEDED;cursor: not-allowed; ">存储服务</button></span>
                            <span><button class="designTaba notclick" disabled style="color:#B5B5B5;background:#EDEDED;cursor: not-allowed; ">CDN</button></span>
                        </p>
                    </div>
                    <div class="designTabj" v-show="digaopei">
                        <p style="width:200px;">
                            <span v-on:click="dipeis" style="float:right;">低配</span>
                            <span v-on:click="gaopeis">高配</span>
                        </p>
                    </div>
                    <div class="designConfig" v-show="yyshow" v-for="(dat,index) in dats">
                        <div style="margin:0 30px 0 30px;" >
                            <table class="table table-bordered">
                                <thead class="row">
                                    <tr>
                                        <th class="text-center col-md-1 trds" style="height:50px;line-height:50px;background:#ebebeb;padding:0px !important;">角色</th><!--border-top:none !important;-->
                                        <th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>
                                        <th class="text-center col-md-6 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">配置信息</th>
                                        <th class="text-center col-md-3 trds" style="border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="height:110px">
                                        <td class="ds" style="line-height:110px">应用服务</td>
                                        <td class="ds" style="line-height:110px">{{dat.num}}</td>
                                        <td>
                                            <ul class="row" >
                                                <li style="margin-top:40px"><span class="col-md-3 ys">{{dat.cpu}}</span><span class="col-md-3 ys">{{dat.ram}}</span><span class="col-md-3 ys">{{dat.localDisk}}</span><span  class="col-md-3 ys">{{dat.osType.name}}</span> 
                                                <li><span class="col-md-3 ds">( v ) CPU</span><span class="col-md-3 ds">内存</br> ( GB )</span><span class="col-md-3 ds">系统盘（GB）</span><span class="col-md-3 ds">操作系统</span></li>
                                            </ul>
                                        </td>
                                        <td class="ds" style="line-height:110px"><span class="HoverSPAN" v-on:click="xiuzheng(dat.id,index,dat.typeLevel,dat.type)"><i class="iconfont icon-bianji"></i>&nbsp修正</span></td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="designConfig" v-show="sjshow" v-for="(dati,index) in datis">
                        <div style="margin:0 30px 0 30px;">
                            <table class="table table-bordered">
                                <thead class="row">
                                    <tr>
                                        <th class="text-center col-md-1 trds" style="height:50px;line-height:50px;background:#ebebeb">角色</th>
                                        <th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>
                                        <th class="text-center col-md-6 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">配置信息</th>
                                        <th class="text-center col-md-3 trds" style="border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="height:110px">
                                        <td class="ds" style="line-height:110px">数据库服务</td>
                                        <td class="ds" style="line-height:110px">{{dati.num}}</td>
                                        <td>
                                            <ul class="row" >
                                                <li style="margin-top:20px"><span class="col-md-6 ys">{{dati.cpu}}</span><span class="col-md-6 ys">{{dati.ram}}</span></li>
                                                <li><span class="col-md-6 ds">( v ) CPU</span><span class="col-md-6 ds">内存</br> ( GB )</span></li>
                                                <li><span class="col-md-6 ys">{{dati.localDisk}}</span><span class="col-md-6 ys">{{dati.osType.name}}</span><!--<span class="col-md-4 ys">{{}}</span>--></li>
                                                <li><span class="col-md-6 ds">本地磁盘（GB）</span><span class="col-md-6 ds">操作系统</span><!--<span class="col-md-4 ds">数据库示例</span>--></li>
                                            </ul>
                                        </td>
                                        <td class="ds" style="line-height:120px"><span class="HoverSPAN" v-on:click="xiuszheng(dati.id,index,dati.typeLevel,dati.type)"><i class="iconfont icon-bianji"></i>&nbsp修正</span></td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="designConfig" v-show="wlshow">
                        <div style="margin:0 30px 0 30px;">
                            <table class="table table-bordered">
                                <thead class="row">
                                    <tr>
                                        <th class="text-center col-md-1 trds" style="height:50px;line-height:50px;background:#ebebeb">角色</th>
                                        <!--<th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>-->
                                        <th class="text-center col-md-6 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">配置信息</th>
                                        <th class="text-center col-md-3 trds" style="border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="height:110px">
                                        <td class="ds" style="line-height:110px">网络服务</td>
                                        <!--<td class="ds" style="line-height:110px">2</td>-->
                                        <td>
                                            <ul class="row" >
                                                <li style="margin-top:40px"><span class="col-md-4 ys">{{this.zong}}</span><span class="col-md-4 ys">{{this.jin}}</span><span class="col-md-4 ys">{{this.chu}}</span></li>
                                                <li><span class="col-md-4 ds">总量（Mbps/月）</span><span class="col-md-4 ds">入站（Mbsp/月）</span><span class="col-md-4 ds">出站（Mbsp/月）</span></li>
                                            </ul>
                                        </td>
                                        <td style="line-height:120px;color:#da121a;font-size:14px"><span><i></i>暂不可以修正</span></td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="designConfig" v-show="ccshow" v-for=" sto in data.storage">
                        <div style="margin:0 30px 0 30px;">
                            <table class="table table-bordered">
                                <thead class="row">
                                    <tr>
                                        <th class="text-center col-md-1 trds" style="height:50px;line-height:50px;background:#ebebeb">角色</th>
                                        <th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>
                                        <th class="text-center col-md-6 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">配置信息</th>
                                        <th class="text-center col-md-3 trds" style="border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="height:110px">
                                        <td class="ds" style="line-height:110px">存储服务</td>
                                        <td class="ds" style="line-height:110px">{{sto.num}}</td>
                                        <td>
                                            <ul class="row" >
                                                <li style="margin-top:40px">
                                                    <span class="col-md-4 ys" v-if="sto.sna==undefined||sto.sna==''">--</span><span class="col-md-4 ys" v-else>{{sto.sna}}</span>
                                                    <span class="col-md-4 ys" v-if="sto.nsa==undefined||sto.nsa==''">--</span><span class="col-md-4 ys" v-else>{{sto.nsa}}</span>
                                                    <span class="col-md-4 ys" v-if="sto.cloudStorage==undefined||sto.cloudStorage==''">--</span><span class="col-md-4 ys" v-else>{{sto.cloudStorage}}</span>
                                                </li>
                                                <li><span class="col-md-4 ds">共享存储（SAN）（GB）</span><span class="col-md-4 ds">网络存储（SAN）（GB）</span><span class="col-md-4 ds">（<span v-if="sto.cse==undefined||sto.cse==''">--</span><span class="ys" v-else>{{sto.cse.name}}</span>）云存储</br>( GB )</span></li>
                                            </ul>
                                        </td>
                                        <td style="line-height:120px;color:#da121a;font-size:14px"><span><i></i>暂不可以修正</span></td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="designConfig" v-show="cdnshow" v-for=" stos in data.cdns">
                        <div style="margin:0 30px 0 30px;">
                            <table class="table table-bordered">
                                <thead class="row">
                                    <tr>
                                        <th class="text-center col-md-1 trds" style="height:50px;line-height:50px;background:#ebebeb">角色</th>
                                        <!--<th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>-->
                                        <th class="text-center col-md-6 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">配置信息</th>
                                        <th class="text-center col-md-3 trds" style="border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="height:110px">
                                        <td class="ds" style="line-height:110px">CDN</td>
                                        <!--<td class="ds" style="line-height:110px">2</td>-->
                                        <td>
                                            <ul class="row" >
                                                <li style="margin-top:40px">
                                                    <span class="col-md-4 ys">{{stos.bandwidth}}</span><span class="col-md-4 ys">{{stos.cse.name}}</span>
                                                    <span class="col-md-4 ys" v-if=""></span><span class="col-md-4 ys">1</span></li>
                                                <li><span class="col-md-4 ds">流量（GB）</span><span class="col-md-4 ds">云厂商</span><span class="col-md-4 ds">购买起止时间</span></li>
                                            </ul>
                                        </td>
                                        <td style="line-height:120px;color:#da121a;font-size:14px"><span><i></i>暂不可以修正</span></td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <designHalf :type="$route.query.type" :id="$route.query.id"></designHalf>
            
    <el-dialog title="修改云设计服务器" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="角色" :label-width="formLabelWidth">
                <el-select v-model="regionter" placeholder="请选择角色">
                    <el-option label="应用服务" value="server"></el-option>
                    <el-option label="数据库服务" value="db"></el-option>
                </el-select>
            </el-form-item>

         <div class="yibazi" v-if="regionter=='server'" >
            <el-form :model="coresShj" :rules="rules" ref="coresShj" >
                <el-form-item label="数量"  :label-width="formLabelWidth" prop="num">
                    <el-input auto-complete="off" v-model="coresShj.num" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item label="（v）CPU" :label-width="formLabelWidth" prop="cpu">
                    <el-input  auto-complete="off" v-model="coresShj.cpu" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item label="内存（GB）" :label-width="formLabelWidth" prop="ram">
                    <el-input  auto-complete="off" v-model="coresShj.ram" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item label="系统盘（GB）" :label-width="formLabelWidth" prop="localDisk">
                    <el-input  auto-complete="off" v-model="coresShj.localDisk" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item label="操作系统" :label-width="formLabelWidth" prop="osType">
                    <el-select placeholder="请选择"  v-model="coresShj.osType" >
                        <el-option :value="rs" v-for="rs in rs"  :key="JSON.stringify(rs)" :label="rs.name"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
          </div>
          <div class="yibazi" v-if="regionter=='db'" >
                <el-form :model="inesShj" :rules="rules" ref="inesShj" >
                    <el-form-item label="数量"  :label-width="formLabelWidth" prop="num">
                        <el-input auto-complete="off" v-model="inesShj.num" type="number" min="1"></el-input>
                    </el-form-item>
                    <el-form-item label="（v）CPU" :label-width="formLabelWidth" prop="cpu">
                        <el-input  auto-complete="off" v-model="inesShj.cpu" type="number" min="1"></el-input>
                    </el-form-item>
                    <el-form-item label="内存（GB）" :label-width="formLabelWidth" prop="ram">
                        <el-input  auto-complete="off" v-model="inesShj.ram" type="number" min="1"></el-input>
                    </el-form-item>
                    <el-form-item label="本地磁盘（GB）" :label-width="formLabelWidth" prop="localDisk">
                        <el-input  auto-complete="off" v-model="inesShj.localDisk" type="number" min="1"></el-input>
                    </el-form-item>
                    <el-form-item label="操作系统" :label-width="formLabelWidth" prop="osType">
                        <el-select placeholder="请选择"  v-model="inesShj.osType" >
                            <el-option :value="rs" v-for="rs in rs"  :key="JSON.stringify(rs)" :label="rs.name"></el-option>
                        </el-select>
                    </el-form-item>
                 </el-form>  
          </div>
         </el-form>   
         <div slot="footer" class="dialog-footer">
            <el-button v-on:click="dialogFor()" class="enterDing ResourceGroup-lay-btn ResourceGroup-lay-yes">确定</el-button> 
            <el-button type="primary" @click="quxiao" class="ResourceGroup-lay-btn ResourceGroup-lay-del">取消</el-button>   
        </div>
   </el-dialog>
    </div>
</template>
<style>
.table>thead>tr>th{
    border-bottom-width:0px;
}
.table{
    border-top:none;
}
.table>thead:first-child>tr:first-child>th{
    border-top:1px solid #ddd !important;
}
    .HoverSPAN:hover{
        cursor:pointer
    }
    .designHeader{
        /*min-height:90vh;
        padding-bottom:5%;*/
        padding-bottom:20px;
        margin-top:20px;
    }
    .designTop{
        width:100%;
        background:#fff;
        height:100%;
    }
    .designTop h2{
        text-align:left;
        /*margin:0px 0 40px 18px;*/
        font-size:14px;
        /*padding-top:20px;*/
        padding:18px 13px;
        color:#6e6e6e;
        margin-bottom:0px;
    }
    .designTab p{
        height:40px;
        border-bottom:1px solid #ccc;
        margin-left:30px;
        margin-right:30px;
    }
    .designTab p span:hover{
        cursor:pointer
    }
    .designTabj p span:hover{
         cursor:pointer
    }
     .designTab a,.designTab .notclick{
        display:inline-block;
      
        
        border-radius:1px;
        background:#f7f7f7;
        width:110px;
        height:29px;
        text-align:center;
        line-height:29px;
        font-size:14px;
        color:#b9b5b5;
        
        
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
  .designTabjBj{
      background:#f7a72c;
      border-radius:1px;
      color:#fff !important;
      border:1px solid #f7a72c  !important;
  }
  .buttonHovers:hover{
    color:#da121a;
}
@media (min-width: 768px) {
    /*.icon-tiam{padding-left:200px}*/
    .regionheight{
        height:195px;
    }
    .spanIcon{
        text-align:right;
    }
}
@media (max-width: 768px) {
    .icon-tiam{padding-left:30px}
    .regionheight{
        height:auto;
    }
    .spanIcon{
        text-align:center;
    }
    .el-input__inner{
        width:50px !important;
    }
}
.operation{
    padding:10px 0 32px 0;
    background:#FFF;
    width:100%;
}
.operation p{
    font-size:14px;
    color:#999;
    float:right;
    margin-right:20px;
    
}
.operation p button{
    background:#fff;
}
*{
    padding:0
}
.ResourceGroup-lay-btn{
    padding: 9px 15px !important;
}
.ResourceGroup-lay-del{
    background: #fff !important;
    border: 1px solid #dcdfe6 !important;
    color: #606266 !important;
}
.ResourceGroup-lay-del:hover{
    background:#F5F7FA !important;
}
.ResourceGroup-lay-yes:hover{
    background:#EF131D !important;
}
.el-dialog{
    width:40%;
    text-align:left;
    border-radius:4px;
}
.buttonTmport:hover{
    cursor:pointer;
}
.el-dialog__header{
    background:none ;
    border-radius:4px 4px 0 0;
   
}

.el-message-box__close{
    color:#fff !important;
}
.el-dialog__close{
    color:#fff !important;
}
.el-dialog__title{
    color:#fff;
}
.bounceInDown{
    position:relative
}
.liGe{
    margin-bottom:30px;
}
.el-select-dropdown__item.selected{
    color:#606266;
}

.el-message-box{
    border:none;
}
.el-message-box__content{
    padding:30px 15px;
}

.iconfont{
    /*margin-right:10px;*/
}
.cuncul{
    margin-top:50px;
}
.el-form-item{
    width:500px;
    margin:0 auto 20px auto;
}
.el-input{
    width:auto !important;
}
.enterDing{
    background:#da121a !important;
    color:#fff !important;
    border:none;
}
.suan{
    background:#ccc !important;
    color:#fff !important;
    border-color:#ccc !important;
}
.el-form-item__label{
    width:190px !important;
   font-weight:200;
    color:#333333;
}
.el-input__inner{
    color:#666666 !important;
}
.el-form-item__content{
    margin:0 !important;
}
.el-checkbox__label{
    padding-left:5px !important;
}
.el-check{
    margin-left:8px !important;
}
@media (max-width: 768px) {
    .el-form-item__label{
        width:70px !important;
        text-align:left !important;
    }
    .resourceGroup input{
        width:50px !important;
    }
    .el-form-item__content{
        margin-left:0px !important;
    }
}

.pds:hover{
    cursor:pointer;
    /*color:#000;*/
    color:#f7a72c !important;
}
.el-input{

}
.Pei ul li{
    margin-top:12px;
    height:10px;
    font-size:12px;
    color: #555;
};
.Pei{
    margin-top:20px;
};
.creadIng span{
    cursor:pointer;
    padding-right:20px;
}
.write-num{
    color:#999; font-size:12px; margin-left:10px;
}
.reourceContent{
    width:100%; height:100%;background:#f8fafd; padding:12px 25px; border-top:1px solid #e9e9e9;
}
.row{
    width:100%;
    margin: 0 0 10px 0!important;
}
.resourceGroup img{
    width:60px; 
}
/*.nex{
    color:#000;
}*/
a:hover{
    color:#000;
}
.notice-title{
    margin:0px !important;
}
.resource{
    background:#da121a; border-radius:2px;  width:100%; height:30px; font-size:14px; color:#ffffff;text-align:center; line-height:30px; margin-bottom:12px;
}
.resourceCroup-list{
    margin-bottom:10px !important; background:#ffffff; 
}
.resourceCroup-list input{
    padding:0 10px;
}
.resourceCroup-list h4{
    font-size:16px; color:#333333;      
}  
.ulss li{
    margin-bottom:10px; font-size:14px; color:#333333;
}
.ulis{
    margin-top:30px;
}

.clickli{
    width:100%;
    height:25px;
    line-height:25px;
}
.clickli:hover{
    width:100%;
    
    background:#ccc;
}
.ulss li:nth-child(1){
    margin-top:30px;
}
.resourceGroup input,select{
    width:236px; height:30px;
}
.Inp input{
    width:60px; height:27px; padding:0; margin-top:150px; padding:0 10px;
}
.resourceCroup-list-head{
    margin-top:100px; padding-left:60px;
}
.head{
    margin-top:66px; padding-left:60px;
}
.resourcebtn{
    float:right; margin:10px 0; background:#da121a; border-radius:2px; width:94px;  height:35px; border:none; font-size:14px; color:#f0f0f0;
}
.resourcebtn:hover{
    background:#EF131D;
}
.jumpBnt{
    float:right; margin:10px; background:#f7a72c; border-radius:2px; width:94px;  height:35px; /*border:1px solid #ccc;*/ font-size:14px; color:#fff;
}
.jumpBnt:hover{
    background:#FFB730;
}
.Mainli span{
    margin-right:5px;
}
.el-form-item__error{
    left:220px !important;
}
.iconfont:hover{
    cursor:pointer;
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color: #f7a72c !important;
    border-color: #f7a72c !important;
}
.el-checkbox__input.is-checked+.el-checkbox__label{
    color:#f7a72c !important;
}
.el-checkbox__inner:hover{
    border-color: #f7a72c !important;
}
.el-input--suffix .el-input__inner{
    padding-right:15px !important
}
.el-input__inner{
    height:30px !important;
    
}

</style>
<script>
   
import sds from '../../../components/steps/steps'
import designHalf from '../design/designHalf/designHalf'
      export default{
            name:"design",
            data(){
                return {
                     rules: {
                         cpu: [{ required: true, message: '请输入(v)CPU', trigger: 'blur' }],
                         ram:[{required: true, message: '请输入内存大小', trigger: 'blur'}],
                         localDisk:[{required: true, message: '请输入磁盘大小', trigger: 'blur'}],
                         osType:[{required: true, message: '请选择操作系统', trigger: 'change'}],
                          num:[{required: true, message: '请输入数量', trigger: 'blur'}]
                     },
                      coresShj:{
                            cpu:"",   //vcpu
                            ram:"",     //内存
                            localDisk:"",  //系统盘（GB）
                            osType:"",        //操作系统
                            num:""     //数量
                        },
                        inesShj:{
                            cpu:"",   //vcpu
                            ram:"",     //内存
                            localDisk:"",  //系统盘（GB）
                            osType:"",        //操作系统
                            num:""     //数量
                        },    
                        
                    formLabelWidth: '120px',
                     dialogTableVisible: false,
                    dialogFormVisible: false,
                    yyshow:true,
                    sjshow:false,
                    wlshow:false,
                    ccshow:false,
                    cdnshow:false,
                    dipei:false,
                    gaopei:false,
                    xiuzhengZt:false,
                    appId:"",
                    ids:"",
                    digaopei:true,
                    index:0,
                    dats:[],
                    datis:[],
                    data:[],
                    zong:"",
                    jin:"",
                    chu:"",
                    form: {
                        name: '',
                        region: '',
                        date1: '',
                        date2: '',
                        delivery: false,
                        type: [],
                        resource: '',
                        desc: ''
                    },
                    rs:[],
                    regionter:"",
                    types:"",
                    typesey:""
                }
            },
            methods:{
               yyClick:function(){
                   this.sjshow=false;
                   this.wlshow=false;
                   this.cdnshow=false;
                   this.ccshow=false;
                   this.digaopei=true;
                   this.index = 1;
                 $(".designTabj p").find("span").removeClass("designTabjBj");
                 $(".designTabj p").find("span").last().addClass("designTabjBj");
                 this.gaopeis();
               },
               sjClick:function(){
                   this.yyshow=false;
                   this.wlshow=false;
                   this.cdnshow=false; 
                   this.ccshow=false;
                   this.digaopei=true;
                   this.index = 2;
                   $(".designTabj p").find("span").removeClass("designTabjBj");
                   $(".designTabj p").find("span").last().addClass("designTabjBj");
                   this.gaopeis();
                   
               },
               wlClick:function(){
                   
                    if(this.data.network==null){
                        this.wlshow=false
                    }else if(this.data.network!==null){
                        this.wlshow=true;
                    }
                    this.sjshow=false;
                   this.yyshow=false;
                   this.cdnshow=false;
                   this.ccshow=false;
                   this.digaopei=false;
                     
               },
               ccClick:function(){
                    this.ccshow=true;
                    this.sjshow=false;
                   this.wlshow=false;
                   this.cdnshow=false;
                   this.yyshow=false;
                   this.digaopei=false;
               },
               cdnClick:function(){
                    this.cdnshow=true;
                     this.sjshow=false;
                   this.wlshow=false;
                   this.yyshow=false;
                   this.ccshow=false;
                   this.digaopei=false;
               },
               xiuzheng:function(id,index,levelType,type){
                    this.dialogFormVisible = true;
                    this.Ajaxxi();
                    this.regionter='server';
                    this.types = type;
                    this.ids = id;
                    if(levelType==17){  //17高配
                         this.coresShj = this.dats[index];
                         this.typesey = 17;
                    }else if(levelType==18){
                        this.coresShj = this.dats[index];
                         this.typesey = 18;
                    }
                   
               },
               xiuszheng:function(id,index,levelType,type){
                    this.dialogFormVisible = true;
                    this.Ajaxxi();
                    this.regionter='db';
                    this.types = type;
                    this.ids = id;
                    if(levelType==17){
                         this.inesShj = this.datis[index];
                         this.typesey = 17;  
                    }else if(levelType==18){
                        this.inesShj = this.datis[index];
                         this.typesey = 18;
                    }
               },
               dialogFor:function(){  //点击确定时
                   if(this.types == 1  ){   //=1 是应用服务
                     this.$refs['coresShj'].validate((valid) => {
                          if (valid) {
                                 if(this.typesey == 18){ //18代表低配
                                    let obj = {
                                        "appid": this.appId,
                                        "cpu":this.coresShj.cpu ,
                                        "id": this.ids,
                                        "localDisk":this.coresShj.localDisk,
                                        "num": Number(this.coresShj.num),
                                        "osType":this.coresShj.osType,
                                        "ram": this.coresShj.ram,
                                        "type":this.types,
                                        "typeLevel": this.typesey
                                    }

                                    this.$this.post("broker/design/update/vm",obj).then((spones)=>{
                                            this.index = 1;
                                            this.dipeis();
                                            this.dialogFormVisible = false;
                                    },(err)=>{
                                            console.log("不好意思")
                                    })
                                    
                                    }else if(this.typesey == 17){
                                        let obj = {
                                                "appid": this.appId,
                                                "cpu":this.coresShj.cpu ,
                                                "id": this.ids,
                                                "localDisk":this.coresShj.localDisk,
                                                "num": Number(this.coresShj.num),
                                                "osType":this.coresShj.osType,
                                                "ram": this.coresShj.ram,
                                                "type":this.types,
                                                "typeLevel": this.typesey
                                            }

                                            this.$this.post("broker/design/update/vm",obj).then((spones)=>{
                                                    this.index = 1;
                                                    this.gaopeis();
                                                    this.dialogFormVisible = false;
                                            },(err)=>{
                                                    console.log("不好意思")
                                            })
                                    }
                          }else {
                            console.log('error 出现问题!!');
                            return false;
                         }
                     })
                   }else if(this.types == 2){
                      this.$refs['inesShj'].validate((valid) => {
                           if (valid) {
                                if(this.typesey == 18){
                            let objs = {
                                "appid": this.appId,
                                "cpu":this.inesShj.cpu ,
                                "id": this.ids,
                                "localDisk":this.inesShj.localDisk,
                                "num": Number(this.inesShj.num),
                                "osType":this.inesShj.osType,
                                "ram": this.inesShj.ram,
                                "type":this.types,
                                "typeLevel": this.typesey
                            }
                             this.$this.post("broker/design/update/vm",objs).then((spones)=>{
                                    this.index = 2;
                                    this.dipeis();
                                    this.dialogFormVisible = false;
                            },(err)=>{
                                    console.log("不好意思")
                            })
                        }else if(this.typesey == 17){
                            let objs = {
                                "appid": this.appId,
                                "cpu":this.inesShj.cpu ,
                                "id": this.ids,
                                "localDisk":this.inesShj.localDisk,
                                "num": Number(this.inesShj.num),
                                "osType":this.inesShj.osType,
                                "ram": this.inesShj.ram,
                                "type":this.types,
                                "typeLevel": this.typesey
                            }
                             this.$this.post("broker/design/update/vm",objs).then((spones)=>{
                                    this.index = 2;
                                    this.gaopeis();
                                    this.dialogFormVisible = false;
                            },(err)=>{
                                    console.log("不好意思")
                            })
                        }
                           }else {
                            console.log('error 出现问题!!');
                            return false;
                           }
                      }) 
                        
                   }
               },
               quxiao:function(){   //点击取消时
                   this.dialogFormVisible = false;
               },
               Ajaxxi:function(){
                    this.$this.get("broker/prop/typedata/os/-1").then((rs)=>{
                            this.rs=rs.data.data;
                    },(err)=>{
                            console.log("不好意思")
                    })
               },
               dipeis:function(){
                   
                    this.gaopei = false;
                    this.dipei = true;
                    
                    if(this.index == 1){
                          this.$this.get('/broker/design/list/'+this.appId+'/1/18').then((ris)=>{
                                  this.dats = ris.data.data;
                                  console.log(this.dats)
                                  this.yyshow=true;
                          },(err)=>{
                              console.log("不好意思")    
                          });  
                   }else if(this.index == 2){
                       this.$this.get('/broker/design/list/'+this.appId+'/2/18').then((ros)=>{
                                  this.datis = ros.data.data;
                                  this.sjshow=true;
                                  console.log(this.datis)
                          },(err)=>{
                              console.log("不好意思")    
                          });  
                          
                   }
               },
             
               gaopeis:function(){
                   this.gaopei = true;
                   this.dipei = false;
                   if(this.index == 1){  //index =1 是应用服务  =2是数据库服务
                       this.$this.get('/broker/design/list/'+this.appId+'/1/17').then((ris)=>{
                              this.dats = ris.data.data;
                              this.yyshow=true;
                              console.log(this.dats)
                    },(err)=>{
                              console.log("不好意思")    
                      });  
                   }else if(this.index == 2){
                       this.$this.get('/broker/design/list/'+this.appId+'/2/17').then((ros)=>{
                                  this.datis = ros.data.data;
                                  this.sjshow=true;
                                  console.log(this.datis)
                       },(err)=>{
                              console.log("不好意思")    
                       });  
                          
                   }
               }
            },
            mounted:function(){
                this.appId = this.$route.query.id;
                 $(".designTab p").find("span").first().addClass("designSpanbg");
                 $(".designTab p").find("span").find("a").first().addClass("designbg");
                 $(".designTabj p").find("span").last().addClass("designTabjBj");
                this.index = 1;  //1是应用服务
                this.gaopeis();
                 $(document).ready(function(){ 
                    $(".designTab p").find("span").click(function(){
                        $(".designTab p").find("span").removeClass("designSpanbg")
                        $(this).addClass("designSpanbg")
                        $(".designTab p span").find("a").removeClass("designbg");
                        $(this).find("a").addClass("designbg");
                    })
                    $(".designTabj p").find("span").click(function(){
                        $(".designTabj p").find("span").removeClass("designTabjBj")
                        $(this).addClass("designTabjBj")
                    })
                }); 
                 this.$this.get('broker/app/resource/group/'+this.appId).then((rvs)=>{
                                  this.data = rvs.data.data;
                                  if(this.data.network!==null){
                                      this.jin = this.data.network.inbound;
                                      this.chu =  this.data.network.outbound; 
                                      this.zong=this.jin+this.chu;
                                  }
                                  console.log(this.data)
                                  if(this.data.storage == []){
                                      return false;
                                  }
                  },(err)=>{
                              console.log("不好意思")    
                  });
                  
            },
            components:{
                sds,
                designHalf
            }


    }
</script>