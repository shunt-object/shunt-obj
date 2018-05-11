<template>
<div class="total">
<div class="total-header">
    <span></span>
    <p class="zong">云设计</p>
</div>
<sds index="5" start="4" :type="$route.query.type" :id="$route.query.id"></sds>
<!-- 拓扑图 -->
<div class="designTop designContent">
    <h2><i class="iconfont icon-erji-wangluotuopu main-color" style="color:#da121a;font-size:14px"></i>拓扑图</h2>
    <div class="graph-lenged">
        <div class="graphlegenged-box" v-if="isgraph==false">
            <div class="graphLenged" v-if="isgraph==false">
                <div class="graphLenged-head">图例说明</div>
                <div class="graphLenged-list"><img src="../../../assets/report/appline.png" alt="">公网与前端应用交互</div>
                <div class="clear"></div>
                <div class="graphLenged-list"><img src="../../../assets/report/dianline.png" alt="">公网与数据库交互</div>
                <div class="clear"></div>
                <div class="graphLenged-list"><img src="../../../assets/report/dbline.png" alt="">前端应用与数据库交互</div>
            </div>
        </div>
        <div id="mynetwork" :class="isgraph==true?'':'graph'"></div>   
        <div class="graph-notice" style="padding-left: 2em;" v-if="isgraph==true">当前没有工作负载相关信息，请您首先在第二步<span style="color:#da121a;cursor:pointer;" v-on:click="goGroup()">“资源组”</span>中进行配置。</div>
    </div>
</div>
<div class="designHeader">
    <div class="designTop">
        <h2><i class="iconfont icon-xitongpeizhi main-color" style="color:#da121a;font-size:14px"></i>推荐配置</h2>
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
        <div class="designTabj row" v-show="digaopei">
            <p style="width:300px;margin-left:15px;" class="col-md-12">
                <span v-on:click="dipeis" class="col-md-4 peiSpan">低配</span>
                <span v-on:click="gaopeis" class="col-md-4 peiSpan"  style="margin-left:20px;">高配</span>
            </p>
        </div>
        <div class="design-notice col-md-12" v-if="yyshow==true&&dats.length>0&&isclick!=1&&isclick!=2&&isclick!=3 || sjshow==true&&datis.length>0&&isclick!=1&&isclick!=2&&isclick!=3">*在您进行价格优选前，请首先优选对象。</div>
        <div class="designConfig" v-if="yyshow==true&&dats.length>0">
            <div style="margin:0 30px 0 30px;" >
                <table class="table table-bordered">
                    <thead class="row">
                        <tr>
                            <th class="text-center col-md-2 trds" style="height:50px;line-height:50px;background:#ebebeb;padding:0px !important;" v-if="isclick!=1&&isclick!=2&&isclick!=3"><input type="checkbox" v-model="appserall" v-on:click="appWhole()">价格优选</th>
                            <th class="text-center col-md-1 trds" style="height:50px;line-height:50px;background:#ebebeb;padding:0px !important;">角色</th><!--border-top:none !important;-->
                            <th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>
                            <th class="text-center col-md-4 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">云配置（推荐）</th>
                            <th class="text-center col-md-3 trds" style="border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="height:110px" v-for="(dat,index) in dats">
                            <td class="ds" style="line-height:110px" v-if="isclick!=1&&isclick!=2&&isclick!=3">
                                <input type="checkbox" v-model="dat.boolean" v-on:click="clickCheck(index)">
                            </td>
                            <td class="ds" style="line-height:110px">应用服务</td>
                            <td class="ds" style="line-height:110px">{{dat.data.num}}</td>
                            <td>
                                <ul class="row" >
                                    <li style="margin-top:40px"><span class="col-md-3 ys">{{Math.round(dat.data.cpu)}}</span><span class="col-md-3 ys">{{Math.round(dat.data.ram)}}</span><span class="col-md-3 ys">{{dat.data.localDisk}}</span><span  class="col-md-3 ys">{{dat.data.osType.name}}</span> 
                                    <li><span class="col-md-3 ds">( v ) CPU</span><span class="col-md-3 ds">内存</br> ( GB )</span><span class="col-md-3 ds">系统盘（GB）</span><span class="col-md-3 ds">操作系统</span></li>
                                </ul>
                            </td>
                            <td class="ds" style="line-height:110px"><span class="HoverSPAN" v-on:click="xiuzheng(dat.data.id,index,dat.data.typeLevel,dat.data.type)"><i class="iconfont icon-bianji font12"></i>&nbsp修正</span></td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
        <div class="designConfig" v-if="sjshow==true&&datis.length>0">
            <div style="margin:0 30px 0 30px;">
                <table class="table table-bordered">
                    <thead class="row">
                        <tr>
                            <th class="text-center col-md-2 trds" style="height:50px;line-height:50px;background:#ebebeb" v-if="isclick!=1&&isclick!=2&&isclick!=3">
                                <input type="checkbox" v-model="dbserall" v-on:click="dbWhole()">价格优选
                            </th>
                            <th class="text-center col-md-1 trds" style="height:50px;line-height:50px;background:#ebebeb">角色</th>
                            <th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>
                            <th class="text-center col-md-4 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">云配置（推荐）</th>
                            <th class="text-center col-md-3 trds" style="border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="height:110px" v-for="(dati,index) in datis">
                            <td class="ds" style="line-height:110px" v-if="isclick!=1&&isclick!=2&&isclick!=3">
                                <input type="checkbox" v-model="dati.boolean" v-on:click="checkDB(index)">
                            </td>
                            <td class="ds" style="line-height:110px">数据库服务</td>
                            <td class="ds" style="line-height:110px">{{dati.data.num}}</td>
                            <td>
                                <ul class="row" >
                                    <li style="margin-top:20px"><span class="col-md-6 ys">{{Math.round(dati.data.cpu)}}</span><span class="col-md-6 ys">{{Math.round(dati.data.ram)}}</span></li>
                                    <li><span class="col-md-6 ds">( v ) CPU</span><span class="col-md-6 ds">内存</br> ( GB )</span></li>
                                    <li><span class="col-md-6 ys">{{dati.data.localDisk}}</span><span class="col-md-6 ys">{{dati.data.osType.name}}</span><!--<span class="col-md-4 ys">{{}}</span>--></li>
                                    <li><span class="col-md-6 ds">本地磁盘（GB）</span><span class="col-md-6 ds">操作系统</span><!--<span class="col-md-4 ds">数据库示例</span>--></li>
                                </ul>
                            </td>
                            <td class="ds" style="line-height:120px"><span class="HoverSPAN" v-on:click="xiuszheng(dati.data.id,index,dati.data.typeLevel,dati.data.type)"><i class="iconfont icon-bianji font12"></i>&nbsp修正</span></td>
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
                            <th class="text-center col-md-2 trds" style="height:50px;line-height:50px;background:#ebebeb">角色</th>
                            <!--<th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>-->
                            <th class="text-center col-md-4 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">云配置（推荐）</th>
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
        <div class="designConfig" v-show="ccshow">
            <div style="margin:0 30px 0 30px;">
                <table class="table table-bordered">
                    <thead class="row">
                        <tr>
                            <th class="text-center col-md-2 trds" style="height:50px;line-height:50px;background:#ebebeb" v-if="isclick!=1&&isclick!=2&&isclick!=3"><input type="checkbox">价格优选</th>
                            <th class="text-center col-md-1 trds" style="height:50px;line-height:50px;background:#ebebeb">角色</th>
                            <th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>
                            <th class="text-center col-md-4 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">云配置（推荐）</th>
                            <th class="text-center col-md-3 trds" style="border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="height:110px" v-for=" sto in data.storage">
                            <td class="ds" style="line-height:110px" v-if="isclick!=1&&isclick!=2&&isclick!=3"><input type="checkbox"></td>
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
        <div class="designConfig" v-show="cdnshow">
            <div style="margin:0 30px 0 30px;">
                <table class="table table-bordered">
                    <thead class="row">
                        <tr>
                            <th class="text-center col-md-2 trds" style="height:50px;line-height:50px;background:#ebebeb" v-if="isclick!=1&&isclick!=2&&isclick!=3"><input type="checkbox">价格优选</th>
                            <th class="text-center col-md-1 trds" style="height:50px;line-height:50px;background:#ebebeb">角色</th>
                            <!--<th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>-->
                            <th class="text-center col-md-4 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">云配置（推荐）</th>
                            <th class="text-center col-md-3 trds" style="border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="height:110px" v-for=" stos in data.cdns">
                            <td class="ds" style="line-height:110px" v-if="isclick!=1&&isclick!=2&&isclick!=3"><input type="checkbox"></td>
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
<div class="design-nodata" v-show="noSj">
        <img src="../../../assets/compare-nodata.png" alt="">
        <br>
        暂无数据
</div>
<!-- v-show="haveSj" -->
<designHalf :type="$route.query.type" :id="$route.query.id" :appG="checkIdappG" :appD="checkIdappD" :dbD="checkIddbD" :dbG="checkIddbG" :isclick="isclick"></designHalf>
<el-dialog title="修改云设计服务器" :visible.sync="dialogFormVisible">
    <el-form :model="form">
        <!-- <el-form-item label="角色" :label-width="formLabelWidth">
            <el-select v-model="regionter" placeholder="请选择角色">
                <el-option label="应用服务" value="server"></el-option>
                <el-option label="数据库服务" value="db"></el-option>
            </el-select>
        </el-form-item>>-->
        <div class="yibazi" v-if="regionter=='server'" >
            <el-form :model="coresShj" :rules="rules" ref="coresShj" >
                <el-form-item class="design-from-item" label="数量"  :label-width="formLabelWidth" prop="num">
                    <el-input auto-complete="off" v-model="coresShj.num" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item class="design-from-item" label="（v）CPU" :label-width="formLabelWidth" prop="cpu">
                    <el-input  auto-complete="off" v-model="coresShj.cpu" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item class="design-from-item" label="内存（GB）" :label-width="formLabelWidth" prop="ram">
                    <el-input  auto-complete="off" v-model="coresShj.ram" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item class="design-from-item" label="系统盘（GB）" :label-width="formLabelWidth" prop="localDisk">
                    <el-input  auto-complete="off" v-model="coresShj.localDisk" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item class="design-from-item" label="操作系统" :label-width="formLabelWidth" prop="osType">
                    <el-select placeholder="请选择"  v-model="coresShj.osType" >
                        <el-option :value="rs" v-for="rs in rs"  :key="JSON.stringify(rs)" :label="rs.name"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
        <div class="yibazi" v-if="regionter=='db'" >
            <el-form :model="inesShj" :rules="rules" ref="inesShj" >
                <el-form-item class="design-from-item" label="数量"  :label-width="formLabelWidth" prop="num">
                    <el-input auto-complete="off" v-model="inesShj.num" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item class="design-from-item" label="（v）CPU" :label-width="formLabelWidth" prop="cpu">
                    <el-input  auto-complete="off" v-model="inesShj.cpu" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item class="design-from-item" label="内存（GB）" :label-width="formLabelWidth" prop="ram">
                    <el-input  auto-complete="off" v-model="inesShj.ram" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item class="design-from-item" label="本地磁盘（GB）" :label-width="formLabelWidth" prop="localDisk">
                    <el-input  auto-complete="off" v-model="inesShj.localDisk" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item class="design-from-item" label="操作系统" :label-width="formLabelWidth" prop="osType">
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
#mynetwork .vis-network{
    outline:none !important;
}
.planList-nodata{
    background:#ffffff; width:100%; height:500px; font-size:14px; color:#555;line-height:30px; text-align:center;
}
.planList-nodata img{
    margin-top:200px;
}
.design-notice{
    text-align:left;
    font-size:12px;
    color:#da121a;
    text-indent:12px;
    margin-bottom:10px;
}
.table>thead>tr>th{
    border-bottom-width:0px !important; font-size:12px;
}
.table>tbody>tr>td{
    font-size:12px;
}
.table{
    border-top:none !important;
}
.table>thead:first-child>tr:first-child>th{
    border-top:1px solid #ddd !important;
}
    .HoverSPAN:hover{
        cursor:pointer;
        color:#666;
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
.designTabj p span{ font-size:12px; color:#c0c0c0; padding:5px 20px; border:1px solid  #c0c0c0; }
.designTabj{ margin-bottom:60px; }
.ys{ color:#da121a; font-size:12px; }
.ds{ font-size:12px; color:#969696; }
.trds{ font-size:14px; color:#777777; }
.designTabjBj{ background:#f7a72c !important; border-radius:1px; color:#fff !important; border:1px solid #f7a72c  !important; }
.buttonHovers:hover{ color:#da121a; }
@media (min-width: 768px) {   /* pc */
    /*.icon-tiam{padding-left:200px}*/
    .regionheight{
        height:195px;
    }
    .spanIcon{
        text-align:right;
    }
     .designTab p{
        height:40px;
        border-bottom:1px solid #ccc;
        margin-left:30px;
        margin-right:30px;
    }
}
@media (max-width: 768px) {  /* 手机 */
    .icon-tiam{padding-left:30px}
    .regionheight{
        height:auto;
    }
    .spanIcon{
        text-align:center;
    }
    .design-from-item .el-input__inner{
        width:50px !important;
    }
     .designTab p{
        height:40px;
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
    width:50%;
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
 .design-from-item{
    width:500px;
    margin:0 auto 20px auto;
    font-size:12px !important;
 }
.design-from-item .el-input{
    width:auto !important;
}
.design-from-item .el-input__inner{
    height:30px !important; 
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
   font-weight:200;
    color:#333333;
}
.el-input__inner{
    color:#666666 !important;
}
.el-form-item__content{
    /*margin:0 !important;*/
}
.el-checkbox__label{
    padding-left:5px !important;
}
.el-check{
    margin-left:8px !important;
}
@media (max-width: 768px) {
    .el-form-item__label{
        text-align:left !important;
    }
    .design-from-item .el-form-item__label{
        font-weight:200;
        color:#333333;
        font-size:12px !important;
    }
    .designContent input{
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
.designContent img{
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
.designContent input,select{
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
.design-from-item .el-form-item__error{
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
 .designTabjBj:hover{
      background:#FFB730 !important;
  }
  .peiSpan:hover{
    background:#F5F7FA;
  }

</style>
<script>
import sds from '../../../components/steps/steps'
import designHalf from '../design/designHalf/designHalf'
import jsPDF from 'jspdf/dist/jspdf.debug.js'
import vis from "vis/dist/vis.min.js"
import network from '../../../../src/assets/report/publicnetwork.png'
import appnetwork from '../../../../src/assets/report/appnetwork.png'
import dbnetwork from '../../../../src/assets/report/dbnetwork.png'
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
                        
            formLabelWidth: '190px',
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
            typesey:"",
            appseverboo:[],
            checkIdappG:[],
            checkIdappD:[],
            checkIddbG:[],
            checkIddbD:[],
            appserall:false,
            dbserall:false,
            haveSj:false,
            noSj:false,
            graphnodes:[
                {id: 1, label: '公网', shape: 'image', image:network,color:{border:'#da121a'}},
            ],
            graphedges:[],
            container:'',
            graphdata:{},
            graphoptions:{},
            appfrom:[],
            isgraph:false,
            appsave:{
                appgao:[],
                appdi:[]
            },
            dbsave:{
                dbgao:[],
                dbdi:[]
            },
            isclick:''
        }
    },
    mounted:function(){
        let self = this;
        if($(window).width()<=768){
            self.formLabelWidth= '70px';
        }else{
                self.formLabelWidth= '190px';
        }
        $(window).resize(function() {
            if($(window).width()<=768){
                self.formLabelWidth= '70px';
            }else{
                self.formLabelWidth= '190px';
            }
        });
        this.appId = this.$route.query.id;
        $(".designTab p").find("span").first().addClass("designSpanbg");
        $(".designTab p").find("span").find("a").first().addClass("designbg");
        $(".designTabj p").find("span").last().addClass("designTabjBj");
        this.graphoptions = {
            nodes:{
                borderWidthSelected: 1,//节点被选中时边框的宽度，单位为px
                color:{
                    border:'#da121a',
                    background:'#fff',
                },
                font: {
                    color: '#333',
                    size:12,
                    face:'Microsoft YaHei'
                },
                //image:'aa.jpg'
            },
            interaction:{
                zoomView:false,
                hover: false,//鼠标移过后加粗该节点和连接线
                dragNodes:true,//是否能拖动节点
                dragView:false,//是否能拖动画布
                selectConnectedEdges:false,//选择节点后是否显示连接线
                hoverConnectedEdges:false,//鼠标滑动节点后是否显示连接线
                selectable:true,//是否可以点击选择
                multiselect:false,//按 ctrl 多选
                navigationButtons:false,//是否显示控制按钮
            },
            edges: {
                shadow:false,//连接线阴影配置
                smooth: false,
                arrows: {
                    to: {enabled: true, scaleFactor: 1, type: 'arrow'},
                    from: {enabled: true, scaleFactor: 1, type: 'arrow'},
                }
            },
            layout:{
                randomSeed:1,//配置每次生成的节点位置都一样，参数为数字1、2等
                hierarchical: {
                    direction: 'UD',//UD:上下 DU:下上 LR:左右 RL:右左
                    sortMethod: 'directed' 
                }, //层级结构显示}
            },
            physics:{
                enabled:false
            }
        };
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
            //console.log(this.data)
            if(this.data.storage == []){
                return false;
            }
        },(err)=>{
            console.log("不好意思")    
        });

        this.topology();   
        this.servied();   
    },
    methods:{
        servied:function(){
            console.log(111);
            this.$this.get('/broker/result/plan/'+this.appId+'').then((response)=>{
                //console.log('结果',response);
                for(let i=0;i<response.data.data.appResults.length;i++){
                    if(response.data.data.appResults[i].moduleId==1){
                        this.isclick = JSON.parse(response.data.data.appResults[i].result).id;
                    }
                }        
            }).catch((error)=>{
            }) 
        },
        goGroup:function(){
            this.$router.push({path:'/resourceGroup',query:{id:this.appId,type:this.$route.query.type}});
        },
        topology:function(){
            this.$this.get('/broker/design/topology/'+this.appId+'/17').then((response)=>{
                let index = this.graphnodes.length+1;
                if(response.data.data.app.length==0 && response.data.data.db.length==0){
                    this.isgraph = true
                }
                for(let i=0;i<response.data.data.app.length;i++){
                    this.graphnodes.push({id:index+i,label:'应用服务'+(i+1),shape:'image',image:appnetwork,color:{border:'#f7a72c'}});
                    this.appfrom.push(index+i);
                    this.graphedges.push({from: 1, to:index+i,label: ''});
                }
                index = this.graphnodes.length+1;
                for(let i=0;i<response.data.data.db.length;i++){
                    this.graphnodes.push({id:index+i,label:'数据库服务'+(i+1),shape:'image',image:dbnetwork,group:3});
                    if(response.data.data.app.length==0){                            
                        this.graphedges.push({from:1,to:index+i,dashes:true, label: ''});
                    }else{
                        for(let n=0;n<this.appfrom.length;n++){
                            this.graphedges.push({from:this.appfrom[n],to:index+i,label: ''});
                        }  
                    }                                              
                }
                if(response.data.data.app.length>0||response.data.data.db.length>0){
                    var nodes = new vis.DataSet(this.graphnodes);
                    // 创建关系数组
                    var edges = new vis.DataSet(this.graphedges);
                    //   // 创建一个网络
                    this.container = document.getElementById('mynetwork');
                    //   // vis数据
                    this.graphdata = {
                        nodes: nodes,
                        edges: edges
                    };
                    var network = new vis.Network(this.container, this.graphdata, this.graphoptions);
                }
                
            }).catch((error)=>{})
        },
        appWhole:function(){
            if(this.dipei==true){
                if(this.appserall==false){
                    this.checkIdappD = [];
                    this.commonall(this.checkIdappD,this.dats,true);
                }else{
                    this.checkIdappD = [];
                    this.commonall(this.checkIdappD,this.dats,false);
                }                        
            }else{
                if(this.appserall==false){
                    this.checkIdappG = [];
                    this.commonall(this.checkIdappG,this.dats,true);
                }else{
                    this.checkIdappG = [];
                    this.commonall(this.checkIdappG,this.dats,false);
                }     
            }
            //console.log(this.checkIdappG,'----',this.checkIdappD);
        },
        clickCheck:function(index){
            if(this.dipei==true){
                if(this.dats[index].boolean==false){
                    this.checkIdappD.push(this.dats[index].data.id);
                }else{
                    for(let i=0;i<this.checkIdappD.length;i++){
                        if(this.checkIdappD[i]==this.dats[index].data.id){
                            this.checkIdappD.splice(i,1);
                        }
                    }
                }
                this.appsave.appdi = this.dats;
            }else{
                if(this.dats[index].boolean==false){
                    this.checkIdappG.push(this.dats[index].data.id);
                }else{
                    for(let i=0;i<this.checkIdappG.length;i++){
                        if(this.checkIdappG[i]==this.dats[index].data.id){
                            this.checkIdappG.splice(i,1);
                        }
                    }
                }
                this.appsave.appgao = this.dats;
            }
        },
        checkDB:function(index){
            if(this.dipei==true){
                if(this.datis[index].boolean==false){
                    this.checkIddbD.push(this.datis[index].data.id);
                }else{
                    for(let i=0;i<this.checkIddbD.length;i++){
                        if(this.checkIddbD[i]==this.datis[index].data.id){
                            this.checkIddbD.splice(i,1);
                        }
                    }
                }
                this.dbsave.dbdi = this.datis;
            }else{
                if(this.datis[index].boolean==false){
                    this.checkIddbG.push(this.datis[index].data.id);
                }else{
                    for(let i=0;i<this.checkIddbG.length;i++){
                        if(this.checkIddbG[i]==this.datis[index].data.id){
                            this.checkIddbG.splice(i,1);
                        }
                    }
                }
                this.dbsave.dbgao = this.datis;
            }
        },
        dbWhole:function(){
            if(this.dipei==true){
                if(this.dbserall==false){
                    this.checkIddbD = [];
                    this.commonall(this.checkIddbD,this.datis,true);
                }else{
                    this.checkIddbD = [];
                    this.commonall(this.checkIddbD,this.datis,false);
                }                        
            }else{
                if(this.dbserall==false){
                    this.checkIddbG = [];
                    this.commonall(this.checkIddbG,this.datis,true);
                }else{
                    this.checkIddbG = [];
                    this.commonall(this.checkIddbG,this.datis,false);
                }     
            }
            //console.log(this.checkIddbG,'-----',this.checkIddbD);
        },
        commonall:function(arr,list,boolean){
            for(let i=0;i<list.length;i++){
                list[i].boolean = boolean;
                if(boolean==true){
                    arr.push(list[i].data.id);
                }                        
            }
        },
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
                    this.coresShj = this.dats[index].data;
                    this.typesey = 17;
            }else if(levelType==18){
                this.coresShj = this.dats[index].data;
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
                    this.inesShj = this.datis[index].data;
                    this.typesey = 17;  
            }else if(levelType==18){
                this.inesShj = this.datis[index].data;
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
                            };                            
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
                                };
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
                    };                    
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
                };
                this.$this.post("broker/design/update/vm",objs).then((spones)=>{
                this.index = 2;
                this.gaopeis();
                this.dialogFormVisible = false;
            },(err)=>{
                    //console.log("不好意思")
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
            this.appserall = false;
            this.dbserall = false;
            this.gaopei = false;
            this.dipei = true;
            
            if(this.index == 1){
                this.dats = [];
                    this.$this.get('/broker/design/list/'+this.appId+'/1/18').then((ris)=>{
                            //this.dats = ris.data.data;
                        if(this.appsave.appdi.length>0){
                            this.dats = this.appsave.appdi;
                        }else{
                            for(let i=0;i<ris.data.data.length;i++){
                                this.dats.push({data:ris.data.data[i],boolean:false});
                            }
                            this.appsave.appdi = this.dats;
                        }
                        
                            //console.log(this.dats)
                            this.yyshow=true;
                            if(this.dats.length>0){
                                this.haveSj = true;
                                this.noSj = false;
                            }else{
                                this.noSj = true;
                                this.haveSj = false
                            }
                    },(err)=>{});  
            }else if(this.index == 2){
                this.datis = [];
                this.$this.get('/broker/design/list/'+this.appId+'/2/18').then((ros)=>{
                            //this.datis = ros.data.data;
                            if(this.dbsave.dbdi.length>0){
                                this.datis = this.dbsave.dbdi;
                            }else{
                                for(let i=0;i<ros.data.data.length;i++){
                                    this.datis.push({data:ros.data.data[i],boolean:false});
                                }
                                this.dbsave.dbdi = this.datis;
                            }
                            
                            this.sjshow=true;
                            if(this.datis.length>0){
                                this.haveSj = true;
                                this.noSj = false;
                            }else{
                                this.noSj = true;
                                this.haveSj = false
                            }
                            //console.log(this.datis)
                    },(err)=>{
                        console.log("不好意思")    
                    });  
                    
            }
        },
             
        gaopeis:function(){
            this.appserall = false;
            this.dbserall = false;
            this.gaopei = true;
            this.dipei = false;
            if(this.index == 1){  //index =1 是应用服务  =2是数据库服务
                this.dats = [];
                this.$this.get('/broker/design/list/'+this.appId+'/1/17').then((ris)=>{
                    //this.dats = ris.data.data;
                    if(this.appsave.appgao.length>0){
                        this.dats = this.appsave.appgao;
                    }else{
                        for(let i=0;i<ris.data.data.length;i++){
                            this.dats.push({data:ris.data.data[i],boolean:false});
                        }
                        this.appsave.appgao = this.dats;
                    }
                    
                    this.yyshow=true;
                    if(this.dats.length>0){
                        this.haveSj = true;
                        this.noSj = false;
                    }else{
                        this.noSj = true;
                        this.haveSj = false
                    }
                    //console.log(this.dats)
            },(err)=>{});  
            }else if(this.index == 2){
                this.datis = [];
                this.$this.get('/broker/design/list/'+this.appId+'/2/17').then((ros)=>{
                    //this.datis = ros.data.data;
                    if(this.dbsave.dbgao.length>0){
                        this.datis = this.dbsave.dbgao;
                    }else{
                        for(let i=0;i<ros.data.data.length;i++){
                            this.datis.push({data:ros.data.data[i],boolean:false});
                        }
                        this.dbsave.dbgao = this.datis;
                    }
                    
                    this.sjshow=true;
                    if(this.datis.length>0){
                                this.haveSj = true;
                                this.noSj = false;
                            }else{
                                this.noSj = true;
                                this.haveSj = false
                            }
                    //console.log(this.datis)
                },(err)=>{
                        console.log("不好意思")    
                });  
                    
            }
        }
    },
    components:{
        sds,
        designHalf,
        network,
        appnetwork,
        dbnetwork
    }
}
</script>