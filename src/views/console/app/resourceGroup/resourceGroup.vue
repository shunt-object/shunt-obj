<template>
<div class="total resourceGroup">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback">资源组配置</p>
</div>
<sds index="2" start="2" :type="$route.query.type" :id="$route.query.id"></sds>
<div class="reourceContent">        
    <div class="resource">输入工作负载配置信息</div> 
    <el-dialog title="工作负载配置信息" :visible.sync="dialogFormVisible">
        
        <el-form :model="form"><p style="color:red;" v-show="alertTitle">注意：网络资源只能配置一个，再次配置为修改。</p>
            <el-form-item label="配置类型" :label-width="formLabelWidth">
                <el-select v-model="regionter" placeholder="请选择配置类型" @change="alertTitler()">
                    <el-option label="应用服务" value="server"></el-option>
                    <el-option label="数据库服务" value="db"></el-option>
                    <el-option label="网络服务" value="net"></el-option>
                    <el-option label="存储服务" value="storage"></el-option>
                </el-select>
            </el-form-item>

            <!--应用服务-->
            <div class="yibazi" v-if="regionter=='server'" >
              <el-form :model="coresShj" :rules="rules" ref="coresShj" >
                <el-form-item label="数量" :label-width="formLabelWidth">
                    <el-input v-model="coresShj.num" auto-complete="off" type="number" placeholder="1" min="1" ></el-input>
                </el-form-item>
                <el-form-item label="（v）CPU" :label-width="formLabelWidth" prop="cores">
                    <el-input v-model="coresShj.cores" auto-complete="off" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item label="处理器主频（GHZ）" :label-width="formLabelWidth" prop="ghz">
                    <el-input v-model="coresShj.ghz" auto-complete="off" type="number" min="1" max="5"></el-input>
                </el-form-item>
                <el-form-item label="内存（GB）" :label-width="formLabelWidth" prop="ram">
                    <el-input v-model="coresShj.ram" auto-complete="off" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item label="系统盘（GB）" :label-width="formLabelWidth" prop="localDisk">
                    <el-input v-model="coresShj.localDisk" auto-complete="off" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item label="操作系统" :label-width="formLabelWidth" prop="os">
                    <el-select v-model="coresShj.os" placeholder="请选择">
                        <el-option value="Linux">Linux</el-option>
                        <el-option value="Window">Window</el-option>
                        <el-option value="Unix">Unix</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="资源平均利用率" :label-width="formLabelWidth" prop="computeMappingFactor">
                    <el-select v-model="coresShj.computeMappingFactor" placeholder="请选择">
                        <el-option value="≤30%">≤30%</el-option>
                        <el-option value="30%-60%">30%-60%</el-option>
                        <el-option value="60%-90%">60%-90%</el-option>
                        <el-option value="≥90%">≥90%</el-option>
                    </el-select>
                </el-form-item>
              </el-form>
           </div>

           <!--数据库服务-->
           <div class="yibazo" v-if="regionter=='db'">
              <el-form :model="inesShj" :rules="rules" ref="inesShj" >
                <el-form-item label="数量" :label-width="formLabelWidth">
                    <el-input v-model="inesShj.num" auto-complete="" type="text" placeholder="1"></el-input>
                </el-form-item>
                <el-form-item label="（v）CPU" :label-width="formLabelWidth" prop="cores">
                    <el-input v-model="inesShj.cores" auto-complete="off" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item label="处理器主频（GHZ）" :label-width="formLabelWidth" prop="ghz">
                    <el-input v-model="inesShj.ghz" auto-complete="off" type="number" min="1" max="5"></el-input>
                </el-form-item>
                <el-form-item label="内存（GB）" :label-width="formLabelWidth" prop="ram">
                    <el-input v-model="inesShj.ram" auto-complete="off" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item label="本地磁盘（GB）" :label-width="formLabelWidth" prop="localDisk">
                    <el-input v-model="inesShj.localDisk" auto-complete="off" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item label="操作系统" :label-width="formLabelWidth" prop="os">
                    <el-select v-model="inesShj.os" placeholder="请选择">
                        <el-option value="Linux">Linux</el-option>
                        <el-option value="Window">Window</el-option>
                        <el-option value="Unix">Unix</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="资源平均利用率" :label-width="formLabelWidth" prop="computeMappingFactor">
                    <el-select v-model="inesShj.computeMappingFactor" placeholder="请选择">
                        <el-option value="≤30%">≤30%</el-option>
                        <el-option value="30%-60%">30%-60%</el-option>
                        <el-option value="60%-90%">60%-90%</el-option>
                        <el-option value="≥90%">≥90%</el-option>
                    </el-select>
                </el-form-item>
                </el-form>
           </div>
           
           <!--网络-->
           <div class="yibanzp" v-if="regionter=='net'">
              <el-form :model="netRule" :rules="rules" ref="netRule">
                <el-form-item label="入站（Mbps/月）" :label-width="formLabelWidth" prop="inbound">
                    <el-input v-model="netRule.inbound" auto-complete="off" type="number" min="1" @keyup.native="shows"></el-input>
                </el-form-item>
                <el-form-item label="出站（Mbps/月）" :label-width="formLabelWidth" prop="outbound">
                    <el-input v-model="netRule.outbound" auto-complete="off" type="number" min="1" @keyup.native="shows"></el-input>
                </el-form-item>
                <el-form-item label="总量（Mbps/月）" :label-width="formLabelWidth">
                    <span style="margin-left:10px">{{netRule.bandwidth}}</span>
                </el-form-item>
             </el-form>
           </div>

          <!--存储-->
           <div class="yibanzp" v-if="this.regionter=='storage'">
             <el-form :model="inusShj" :rules="rules" ref="inusShj">
                <el-form-item  label="数量" :label-width="formLabelWidth" >
                    <el-input v-model="inusShj.num" auto-complete="off" type="number"  placeholder="1" min="1"></el-input>
                </el-form-item>
                <el-form-item label="" :label-width="formLabelWidth">
                    <el-checkbox class="el-check"  v-on:change="lookw()" id="chec" v-model="asd">共享存储（SAN）（GB）</el-checkbox>
                    <el-checkbox class="el-check"  v-on:change="lookq()" v-model="afd">网络存储（NAS）（GB）</el-checkbox>
                    <el-checkbox class="el-check"  v-on:change="looke()" v-model="agd">云存储（GB）</el-checkbox>
                </el-form-item>
                <el-form-item label="共享存储（SAN）（GB）" :label-width="formLabelWidth" v-if="this.checked==true" prop="sna">
                    <el-input v-model="inusShj.sna" auto-complete="off" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item label="网络存储（NAS）（GB）" :label-width="formLabelWidth" v-if="this.checkeder==true" prop="nsa">
                    <el-input v-model="inusShj.nsa" auto-complete="off" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item label="云存储（GB）" :label-width="formLabelWidth" v-if="this.checkedes==true" prop="cloudStorage">
                    <el-select v-model="inusShj.serverName" placeholder="请选择厂商">
                        <el-option value="AWS">AWS</el-option>
                        <el-option value="Azure">Azure</el-option>
                        <el-option value="阿里云">阿里云</el-option>
                        <el-option value="腾讯云">腾讯云</el-option>
                        <el-option value="金山云">金山云</el-option>
                        <el-option value="电信云">电信云</el-option>
                        <el-option value="UCloud">UCloud</el-option>
                        <el-option value="华为云">华为云</el-option>
                        <el-option value="沃云">沃云</el-option>
                        <el-option value="其它">其它</el-option>
                    </el-select>
                    <el-input v-model="inusShj.cloudStorage" auto-complete="off" style="width:40%"  type="number" min="1"></el-input>
                </el-form-item>
             </el-form>
           </div>
         </el-form>
         <!--添加时触发的按钮-->
        <div slot="footer" class="dialog-footer" v-show="CreadCenter">
            <el-button @click="dialogFor()" class="enterDing ResourceGroup-lay-btn">确定</el-button> 
            <el-button type="primary" @click="dialogFormVisible = false" class="ResourceGroup-lay-btn ResourceGroup-lay-del">取消</el-button>   
        </div>
        <!--编辑是触发的按钮-->
        <div slot="footer" class="dialog-footer" v-show="orCreadCenter">
            <el-button @click="dialogFormVis()" class="enterDing ResourceGroup-lay-btn">确定</el-button>
            <el-button type="primary" @click="dialogFormVisible = false" class="ResourceGroup-lay-btn ResourceGroup-lay-del">取消</el-button>        
        </div>
  </el-dialog>
 
  <div id="main">
        <div class="col-md-6 animated bounceInDown" style="padding:10px 20px 5px 0;animation-duration:1s;animation-delay:0.2s;animation-iteration-count:1;animation-fill-mode:both;"   v-for="(jl,index) in cores" >
            <div style="border:1px solid #ccc;padding:0px;background: #fff;" class="col-md-12">
                <h2 class="text-left" style="font-size:14px;margin:0;background:#f4f4f4;padding:10px 0 10px 10px;">应用服务<span style="float:right"><i class="iconfont icon-icon-bainji" @click="yybian(index)"></i>&nbsp&nbsp<i class="iconfont icon-cuohao" @click="removeAl(index)"></i></span></h2>
                <div class="col-md-3" style="margin-top:15px;margin-bottom:19px;">
                    <img src="../../../../assets/overview/resource-group1.png" alt="">
                    <h4 style="font-size:12px;">应用服务</h4>
                    <p><span  style="color: #da121a">{{jl.num}}</span><span style="color:#666;font-size:12px;margin-left:3px;">个（同配置）</span></p>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                      
                        <li v-if="jl.cores==undefined||jl.cores==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{jl.cores}}</li>
                        <li class="liGe">（v）CPU</li>
                        <li v-if="jl.localDisk==undefined||jl.localDisk==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{jl.localDisk}}</li>
                        <li>系统盘（GB）</li>
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li v-if="jl.ghz==undefined||jl.ghz==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{jl.ghz}}</li>
                        <li class="liGe">处理器主频（GHZ）</li>
                        <li v-if="jl.os==undefined||jl.os==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{jl.os}}</li>
                        <li>操作系统</li>
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li v-if="jl.ram==undefined||jl.ram==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{jl.ram}}</li>
                        <li class="liGe">内存（GB）</li>
                        <li v-if="jl.computeMappingFactor==undefined||jl.computeMappingFactor==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{jl.computeMappingFactor}}</li>
                        <li>资源平均利用率</li>
                    </ul>
                </div>
            </div>
        </div>
         <div class="col-md-6 animated bounceInDown" style="padding:10px 20px 5px 0;animation-duration:1s;animation-delay:0.2s;animation-iteration-count:1;animation-fill-mode:both;" v-for="(ins,index) in ines">
            <div style="border:1px solid #ccc;padding:0px;background: #fff;" class="col-md-12">
                <h2 class="text-left" style="font-size:14px;margin:0;background:#f4f4f4;padding:10px 0 10px 10px;">数据库服务<span style="float:right"><i class="iconfont icon-icon-bainji" @click="sjbian(index)"></i>&nbsp&nbsp<i class="iconfont icon-cuohao" @click="removeAs(index)"></i></span></h2>
                <div class="col-md-3" style="margin-top:15px;margin-bottom:19px;">
                    <img src="../../../../assets/overview/resource-group2.png" alt="">
                    <h4 style="font-size:12px;">数据库服务</h4>
                    <p><span  style="color: #da121a">{{ins.num}}</span><span style="color:#666;font-size:12px;margin-left:3px;">个（同配置）</span></p>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li v-if="ins.cores==undefined||ins.cores==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{ins.cores}}</li>
                        <li class="liGe">（v）CPU</li>
                        <li v-if="ins.localDisk==undefined||ins.localDisk==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{ins.localDisk}}</li>
                        <li>本地磁盘（GB）</li>
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li v-if="ins.ghz==undefined||ins.ghz==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{ins.ghz}}</li>
                        <li class="liGe">处理器主频（GHZ）</li>
                        <li v-if="ins.os==undefined||ins.os==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{ins.os}}</li>
                        <li>操作系统</li>
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li v-if="ins.ram==undefined||ins.ram==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{ins.ram}}</li>
                        <li class="liGe">内存（GB）</li>
                        <li v-if="ins.computeMappingFactor==undefined||ins.computeMappingFactor==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{ins.computeMappingFactor}}</li>
                        <li>资源平均利用率</li>
                    </ul>
                </div>
            </div>
        </div>
       <div class="col-md-6 animated bounceInDown" style="padding:10px 20px 5px 0;animation-duration:1s;animation-delay:0.2s;animation-iteration-count:1;animation-fill-mode:both;" v-show="this.wangl">
            <div style="border:1px solid #ccc;padding:0px;background: #fff;" class="col-md-12">
                <h2 class="text-left" style="font-size:14px;margin:0;background:#f4f4f4;padding:10px 0 10px 10px;">网络服务<span style="float:right"><i class="iconfont icon-icon-bainji" @click="wlbian"></i>&nbsp&nbsp<i class="iconfont icon-cuohao" @click="removeAe()"></i></span></h2>
                <div class="col-md-3" style="margin-top:15px;margin-bottom:49px;">
                    <img src="../../../../assets/overview/resource-group3.png" alt="">
                    <h4 style="font-size:12px;">网络服务</h4>
                </div>
                <div class="col-md-3 Pei" style="margin-top:10px;" >
                    <ul class="cuncul">
                        <li v-if="this.netRule.bandwidth==undefined||this.netRule.bandwidth==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{this.netRule.bandwidth}}</li>  
                        <li>总量（Mbps/月）</li>
                     
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:10px;">
                    <ul class="cuncul">
                        <li v-if="this.netRule.inbound==undefined||this.netRule.inbound==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{this.netRule.inbound}}</li>
                        <li>入站（Mbps/月）</li>
                      
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:10px;">
                    <ul class="cuncul">
                        <li v-if="this.netRule.outbound==undefined||this.netRule.outbound==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{this.netRule.outbound}}</li>
                        <li>出站</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6 animated bounceInDown" style="padding:10px 20px 5px 0;animation-duration:1s;animation-delay:0.2s;animation-iteration-count:1;animation-fill-mode:both;"  v-for="(inu,index) in inus">
            <div style="border:1px solid #ccc;padding:0px;background: #fff;" class="col-md-12">
                <h2 class="text-left" style="font-size:14px;margin:0;background:#f4f4f4;padding:10px 0 10px 10px;">存储服务<span style="float:right"><i class="iconfont icon-icon-bainji" @click="cuncbian(index)"></i>&nbsp&nbsp<i class="iconfont icon-cuohao" @click="removeAw(index)"></i></span></h2>
                <div class="col-md-3" style="margin-top:15px;margin-bottom:19px;">
                    <img src="../../../../assets/overview/resource-group1.png" alt="">
                    <h4 style="font-size:12px;">存储服务</h4>
                    <p><span  style="color: #da121a">{{inu.num}}</span><span style="color:#666;font-size:12px;margin-left:3px;">个（同配置）</span></p>
                </div>
                <div class="col-md-3 Pei" style="margin-top:10px;" >
                    <ul class="cuncul">
                        <li v-if="inu.sna==undefined||inu.sna==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{inu.sna}}</li>
                        <li>共享存储（SAN）（GB）</li>
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:10px;" >
                    <ul class="cuncul">
                        <li v-if="inu.nsa==undefined||inu.nsa==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{inu.nsa}}</li>
                        <li>网络存储（NAS）（GB）</li>
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:10px;" >
                    <ul class="cuncul">
                        <li v-if="inu.cloudStorage==undefined||inu.cloudStorage==''" style="color: #797979">--</li>
                        <li v-else style="color: #da121a">{{inu.cloudStorage}}</li>
                        <li v-if="inu.serverName==undefined||inu.serverName==''"><span  style="color: #797979">（--）</span>云存储（GB）</li>
                        <li v-else>（<span style="color: #da121a">{{inu.serverName}}</span>）云存储（GB）</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6" style="padding:10px 20px 5px 0;" v-show="creads">
                <p  class="col-md-12 text-center" style="border:1px solid #ccc;line-height:200px;background:#fff;color:#555;text-align:left;"><!--<img src="../../../../assets/additi.svg" style="width:5%;margin-right:10px;" alt="">-->
                    <i class="iconfont icon-tianjia-yin icon-tiam" style="font-size:22px !important;float:left;line-height:200px;"></i>
                    <span  @click="dialogFormVisibler" class="pds">添加工作负载配置信息</span>
                </p>
        </div>
  </div>
    <div class="resourcebtn-box col-md-12 nextButton" style="margin-top:220px;" >
        <button class="jumpBnt" @click="jump()">
            <span class="pl-10">跳过</span><i class="iconfont icon-jiantou4" style="margin-left:5px;"></i>
        </button>
        <button class="resourcebtn" @click="btn()">                                         
            <span class="pl-10">下一步</span><i class="iconfont icon-xiayibu" style="margin-left:5px;"></i>
        </button>
    </div>    
    <div class="clear" style="margin-bottom:20px;"></div>
    
</div>
</div>
</template>
<style>

@media (min-width: 768px) {
    .icon-tiam{padding-left:200px}
}
@media (max-width: 768px) {
    .icon-tiam{padding-left:30px}
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
.el-dialog{
    width:40%;
    text-align:left;
    border-radius:4px;
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
    margin-right:10px;
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
    color:#000;
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
.jumpBnt{
    float:right; margin:10px; background:#f7a72c; border-radius:2px; width:94px;  height:35px; /*border:1px solid #ccc;*/ font-size:14px; color:#fff;
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
</style>
<script>
import sds from '../../../../components/steps/steps.vue'
export default {
  name: 'ResourceGroup',
  data () {
    return {
         
          inusShjs:{
              type:[]
          },
          rules: {
            cores: [{ required: true, message: '请输入(v)CPU', trigger: 'blur' }],
            ram:[{required: true, message: '请输入内存大小', trigger: 'blur'}],
            ghz:[{required: true, message: '请输入处理器主频大小', trigger: 'blur'}],
            localDisk:[{required: true, message: '请输入磁盘大小', trigger: 'blur'}],
            os:[{required: true, message: '请选择操作系统', trigger: 'change'}],
            computeMappingFactor:[{required: true, message: '请选择资源平均利用率', trigger: 'change'}],
            
            coresq: [{ required: true, message: '请输入(v)CPU', trigger: 'blur' }],
            ramq:[{required: true, message: '请输入内存大小', trigger: 'blur'}],
            ghzq:[{required: true, message: '请输入处理器主频大小', trigger: 'blur'}],
           
            osq:[{required: true, message: '请选择操作系统', trigger: 'change'}],
            computeMappingFactorq:[{required: true, message: '请选择资源平均利用率', trigger: 'change'}],
            localDiskq:[{required: true, message: '请输入本地磁盘大小', trigger: 'blur'}],
            bandwidth:[{required: true, message: '请输入带宽', trigger: 'blur'}],
            inbound:[{required: true, message: '请输入入站大小', trigger: 'blur'}],
            outbound:[{required: true, message: '请输入出站大小', trigger: 'blur'}],
            cloudStorage:[{required: true, message: '请输入云厂商和云存储大小', trigger: 'blur'}],
            sna:[{required: true, message: '请输入共享存储大小', trigger: 'blur'}],
            nsa:[{required: true, message: '请输入网络大小', trigger: 'blur'}],
             cpus: [{ required: true, message: '请输入(v)CPU', trigger: 'blur' }],
            ncs:[{required: true, message: '请输入内存大小', trigger: 'blur'}],
            ghzs:[{required: true, message: '请输入处理器主频大小', trigger: 'blur'}],
            wins:[{required: true, message: '请选择操作系统', trigger: 'change'}],
            ziyuans:[{required: true, message: '请选择资源平均利用率', trigger: 'change'}],
            //type: [ { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' } ]
           
         
         },
        CreadCenter:false,
        orCreadCenter:false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        alertTitle:false,
        qer:false,
        wer:false,
        ret:false,
        yingy:false,
        shuj:false,
        wangl:false,
        cunc:false,
        yingyo:true,
        shuju:true,
        wanglu:true,
        cunch:true,
        creads:true,
        asd:false,
        afd:false,
        agd:false,
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
         formLabelWidth: '120px',
         regionter:"",
          checked: false,
          checkeder: false,
          checkedes: false,
          awsClound:"",

    //    appId:"",
    // isfas:false,
    // isdas:false,
    // isgas:false,
    valus:"",
    k:0,
    j:0,
    s:0,
    v:0,
    col:0,
    inusList:[{ isfas:false,
                isdas:false,
                isgas:false
             }],
   
    a:true,
            cores:[],
          coresShj:{
                    cores:"",
                    ghz:"",
                    ram:"",
                    computeMappingFactor:"",
                    localDisk:"",
                    os:"",
                    monthlyUsage:"",
                    dailyUsage:"",
                    num:"1",
          },     
       
       ines:[],
       inesShj:{
            num:"1",    
            cores:"",
            ghz:"",
            ram:"",
            computeMappingFactor:"", 
            localDisk:"",
            os:"",
            monthlyUsage:"",
            dailyUsage:"",
            
      },
        netRule:{
            bandwidth:"",
            inbound:"",
            outbound:""
        },
    
     inus:[],
     inusShj: { 
          num:"1",
          sna:"",
          nsa:"",
          cloudStorage:"",
          serverName:""
        },

       appId:"",
       queryType:''
    }
  },
  mounted:function(){
      this.queryType = this.$route.query.type;
      //this.$layer.msg("注意：以下全为必填项");
      this.appId = this.$route.query.id;
      console.log("="+this.appId) 
      this.$this.get('broker/app/resource/group/'+this.appId).then((res)=>{
                    
                    this.result =  res.data.data; 
                    console.log( this.result);
                     //this.$router.push({path:'/login'});/planQuestion
                     
                     if(this.result.network.bandwidth==null&&this.result.network.inbound==null&&this.result.network.outbound==null){
                        this.wangl =false;
                     }else if(this.result.network.bandwidth!=null&&this.result.network.inbound!=null&&this.result.network.outbound!=null){
                         this.netRule=this.result.network;
                         this.wangl=true;
                     }
                    
                     
                    
                     this.cores=this.result.appServer;
                     this.ines = this.result.dbServer;
                     this.inus = this.result.storage;
                     console.log(this.result.dbServer);
                     },(err)=>{
                         console.log("不好意思")
                     });
  
                    
  },
  methods:{
      lookw:function(){
        if(this.checked==false){
            this.checked=true
        }else{
             this.checked=false
        }
      },
      shows:function(){
          
          this.netRule.bandwidth=Number(this.netRule.inbound)+Number(this.netRule.outbound);
      },
     dialogFormVisibler:function(){
           this.alertTitle = false; 
        this.dialogFormVisible = true;
        this.CreadCenter = true;
        this.orCreadCenter = false;
         this.regionter = "";
         this.coresShj = {};
         this.inesShj={};
         this.inusShj = {};  
         this.asd = false;
         this.afd = false;
         this.agd = false;
         this.checked = false;
         this.checkeder = false;
         this.checkedes = false;
     },
     alertTitler:function(){
        if(this.regionter=='net'){
            if(this.netRule.bandwidth!=''||this.netRule.inbound!=''||this.netRule.outbound!=''){
                this.alertTitle = true;
            }
        }else if(this.regionter!='net'){
            this.alertTitle = false; 
        }
        //  this.$refs[this.regionter+'Rule'].resetFields();
         
     },
      dialogFor:function(){
        console.log(this.regionter);
        //console.log(formNames)
        console.log(this.coresShj.num);
            if(this.regionter=='server'){
                 this.$refs['coresShj'].validate((valid) => {
                    if (valid) {
                        if(this.coresShj.num==undefined){
                            this.cores.push(
                                {
                                        cores:this.coresShj.cores,
                                        ghz:this.coresShj.ghz,
                                        ram:this.coresShj.ram,
                                        computeMappingFactor:this.coresShj.computeMappingFactor,
                                        localDisk:this.coresShj.localDisk,
                                        os:this.coresShj.os,
                                        monthlyUsage:this.coresShj.monthlyUsage,
                                        dailyUsage:this.coresShj.dailyUsage,
                                        num:"1"
                                }
                            )
                        }else{
                              this.cores.push(
                                   {
                                    cores:this.coresShj.cores,
                                    ghz:this.coresShj.ghz,
                                    ram:this.coresShj.ram,
                                    computeMappingFactor:this.coresShj.computeMappingFactor,
                                    localDisk:this.coresShj.localDisk,
                                    os:this.coresShj.os,
                                    monthlyUsage:this.coresShj.monthlyUsage,
                                    dailyUsage:this.coresShj.dailyUsage,
                                    num:this.coresShj.num
                                   }
                                )
                            }       
                    } else {
                        console.log('error 出现问题!!');
                        return false;
                        
                    }
                            console.log(this.cores)
                                this.j++;
                                this.col = 1;
                                this.coresShj = {};
                                this.regionter = "";
                                this.dialogFormVisible =false;
                });
              }else if(this.regionter=="db"){
                 this.$refs['inesShj'].validate((valid) => {
                            if (valid) {
                               if(this.inesShj.num==undefined){
                                    this.ines.push(
                                        {
                                            num:"1",    
                                            cores:this.inesShj.cores,
                                            ghz:this.inesShj.ghz,
                                            ram:this.inesShj.ram,
                                            computeMappingFactor:this.inesShj.computeMappingFactor, 
                                            localDisk:this.inesShj.localDisk,
                                            os:this.inesShj.os,
                                            monthlyUsage:this.inesShj.monthlyUsage,
                                            dailyUsage:this.inesShj.dailyUsage
                                        }
                                    )
                                }else{
                                    this.ines.push(
                                        {
                                            num:this.inesShj.num,    
                                            cores:this.inesShj.cores,
                                            ghz:this.inesShj.ghz,
                                            ram:this.inesShj.ram,
                                            computeMappingFactor:this.inesShj.computeMappingFactor, 
                                            localDisk:this.inesShj.localDisk,
                                            os:this.inesShj.os,
                                            monthlyUsage:this.inesShj.monthlyUsage,
                                            dailyUsage:this.inesShj.dailyUsage
                                        }
                                    )
                                };
                            } else {
                                console.log('error 出现问题!!');
                                return false;
                            }
                            this.k++;
                            this.col = 2; 
                            //console.log(this.ines);
                            this.inesShj={};
                            this.regionter="";
                            this.dialogFormVisible =false;
                        });
                        
                    }else if(this.regionter=="net"){
                          this.$refs["netRule"].validate((valid) => {
                            if (valid) {
                                 this.wangl = true;
                                 this.netRule.bandwidth=Number(this.netRule.inbound)+Number(this.netRule.outbound);
                                  this.dialogFormVisible =false;
                                    this.regionter="";
                                    this.col = 3;
                            } else {
                                console.log('error submit!!');
                                return false;
                            }
                         });
                  }else if(this.regionter=="storage"){
                        this.$refs["inusShj"].validate((valid) => {
                            if (valid) {
                               if(this.inusShj.num==undefined){
                                        this.inus.push(
                                        { 
                                            num:"1",
                                            sna:this.inusShj.sna,
                                            nsa:this.inusShj.nsa,
                                            cloudStorage:this.inusShj.cloudStorage,
                                            serverName:this.inusShj.serverName
                                        }
                                    );
                                }else{
                                        this.inus.push(
                                            { 
                                                num:this.inusShj.num,
                                                sna:this.inusShj.sna,
                                                nsa:this.inusShj.nsa,
                                                cloudStorage:this.inusShj.cloudStorage,
                                            serverName:this.inusShj.serverName
                                            }
                                        )
                                    }
                                        this.v++;
                                        this.col = 4;
                                        this.dialogFormVisible =false;
                                        this.regionter="";
                                        this.inusShj = {};
                             } else {
                                    console.log('error submit!!');
                                    return false;
                             }
                        });
                    
                          
                  
                    }
                 this.alertTitle = false; 
    },
    //修改的验证
    dialogFormVis:function(){
        if(this.regionter=='server'){
                 this.$refs['coresShj'].validate((valid) => {
                    if (valid) {
                              this.dialogFormVisible =false; 
                    } else {
                        console.log('error 出现问题!!');
                        return false;
                        
                    }
                 });
              }else if(this.regionter=="db"){
                 this.$refs['inesShj'].validate((valid) => {
                            if (valid) {
                               this.dialogFormVisible =false;
                            } else {
                                console.log('error 出现问题!!');
                                return false;
                            }
                           
                        });
                    }else if(this.regionter=="net"){
                          this.$refs["netRule"].validate((valid) => {
                            if (valid) {
                                 this.wangl = true;
                                  this.dialogFormVisible =false;
                                  
                            } else {
                                console.log('error submit!!');
                                return false;
                            }
                         });
                  }else if(this.regionter=="storage"){
                        this.$refs["inusShj"].validate((valid) => {
                            if (valid) {
                                        this.dialogFormVisible =false;
                             } else {
                                    console.log('error submit!!');
                                    return false;
                             }
                        });
                    
                          
                  
                    }
                 this.alertTitle = false; 
    
    },
    yybian:function(e){
         this.dialogFormVisible =true;
         this.CreadCenter = false;
        this.orCreadCenter = true;
       this.regionter = "server";
       console.log(e)
        this.coresShj = this.cores[e];

          // console.log(    this.coresShj);
    },
    sjbian:function(e){
        this.dialogFormVisible = true;
        this.CreadCenter = false;
        this.orCreadCenter = true;
        this.inesShj = this.ines[e]
        this.regionter = "db";
    },
    wlbian:function(){
        this.CreadCenter = false;
        this.orCreadCenter = true;
         this.regionter = "net";
         this.dialogFormVisible = true;
         
    },
    cuncbian:function(e){
        this.regionter = "storage";
         this.dialogFormVisible = true;
           this.alertTitle = false; 
         this.CreadCenter = false;
        this.orCreadCenter = true;
        this.inusShj = this.inus[e];
        if(this.inusShj.sna!=undefined){
           this.asd = true;
        }else if(this.inusShj.nsa!=undefined){
            this.afd = true;
        }else if(this.inusShj.cloudStorage!=undefined){
            this.agd = true;
        }
       
   
    },
      lookq:function(){
        if(this.checkeder==false){
            this.checkeder=true
        }else{
            this.checkeder=false
        }
      },
      looke:function(){
        if(this.checkedes==false){
            this.checkedes=true
        }else{
            this.checkedes=false
        }
      },
      creadIng:function(e){
          this.cores.push(
              {
                    cores:"",
                    ghz:"",
                    ram:"",
                    computeMappingFactor:"",
                    localDisk:"",
                    os:"",
                    monthlyUsage:"",
                    dailyUsage:"",
                    num:"1"
            }
          )
        //     this.j++;
        //    console.log(j,index);
        //   console.log(this.cores);
            // this.lias.push(
            //     {
            //         cores:cores[index].cores,
            //         ghz:cores[index].ghz,
            //         ram:cores[index].ram,
            //         computeMappingFactor:cores[index].computeMappingFactor,
            //         localDisk:tcores[index]his.localDisk,
            //         os:cores[index].os,
            //         monthlyUsage:cores[index].monthlyUsage,
            //         dailyUsage:cores[index].dailyUsage,
            //         num:cores[index].num
            //     }
            // )
           
      },
 

    //   -----删除---

    removeAl:function(index){
        
           // this.cores.splice(index, 1); 
         
        this.$confirm('删除后，如需恢复需要重新添。确认删除？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          confirmButtonClass:'lay-btn-red',
          cancelButtonClass:'lay-cancel-btn',
          type: 'warning'
        }).then(() => {
            this.cores.splice(index, 1); 
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

            
    },
    removeAs:function(index){
       this.$confirm('删除后，如需恢复需要重新添。确认删除？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          confirmButtonClass:'lay-btn-red',
          cancelButtonClass:'lay-cancel-btn',
          type: 'warning'
        }).then(() => {
            this.ines.splice(index, 1); 
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
           
      
    },
    removeAe:function(index){
        this.$confirm('删除后，如需恢复需要重新添。确认删除？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          confirmButtonClass:'lay-btn-red',
          cancelButtonClass:'lay-cancel-btn',
          type: 'warning'
        }).then(() => {
           this.wangl = false;
           this.netRule.bandwidth="";
           this.netRule.inbound="";
           this.netRule.outbound="";
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
    },
    removeAw:function(index){
        this.$confirm('删除后，如需恢复需要重新添。确认删除？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          confirmButtonClass:'lay-btn-red',
          cancelButtonClass:'lay-cancel-btn',
          type: 'warning'
        }).then(() => {
          this.inus.splice(index, 1); 
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    // isga:function(index){
    //     //console.log(this.inusList[index].isgas)
    //     if(this.inusList[index].isgas==false){
    //         this.inusList[index].isgas=true;
    //     }else{
    //         this.inusList[index].isgas=false;
    //     };


    // },
    // isda:function(index){
    //      if(this.inusList[index].isdas==false){
    //         this.inusList[index].isdas=true;
    //     }else{
    //         this.inusList[index].isdas=false;
    //     }
    // },
    // isfa:function(index){
    //     if(this.inusList[index].isfas==false){
    //         this.inusList[index].isfas=true;
    //     }else{
    //         this.inusList[index].isfas=false;
    //     }
    // },

    btn:function(){
           //console.log(this.os);
            // if(){

            //    this.$layer.alert("注意：您有未填写的项目，请填写完整");
            // }else{
            //this.appId = sessionStorage.getItem("appId"); 

            // let valuely = $("#sele").val();
            // let valueey = $("#selet").val();
            // console.log(this.appId);
           // if(){

           // }else{
            
                let obj ={
                    "appId": this.appId,
                    "appServer": this.cores,
                    "dbServer": this.ines,
                    "network": this.netRule,
                    "storage":this.inus

                   
                 };
                 if(obj.network.inbound==""&&obj.network.outbound==""&&obj.network.bandwidth==""&&obj.appServer.length==0&&obj.dbServer.length==0&&obj.storage.length==0){
                          this.$alert('您还没有添加任何资源配置，请添加配置后点击“下一步”，更详细的配置，分析结果将更加准确；如您不想填写，请你点击“跳过”。', '温馨提示', {
                            confirmButtonText: '确定',
                            confirmButtonClass:'lay-btn-red',
                            type: 'warning',
                            callback: action => {
                               
                            }
                        });
                }else{
                    console.log(obj)
                    this.$this.post('/broker/app/resource/group',obj).then((res)=>{
                        console.log(res);
                        //this.$router.push({path:'/login'});/planQuestion
                        if(this.queryType=='compare'){
                            this.$router.push({path:'/compareQuestion',query:{type:this.queryType,id:this.appId}});
                        }else{
                            this.$router.push({path:'/planQuestion',query:{type:this.queryType,id:this.appId}});
                        }
                        
                        },(err)=>{
                            console.log("不好意思")
                        });
               
                }
       // }              
      },
      jump:function(){
        this.$router.push({path:'/planQuestion',query:{type:this.queryType,id:this.appId}});
         console.log(this.cores)
      },
    //   lis:function(){
    //       if(this.isfa==false){
    //           $("ol").css("background","#f4f4f4");
    //           $(".lis").css("border","1px solid #ccc");
    //           this.isfa = true;
    //           this.isda = true;
    //       }else{
    //            $("ol").css("background","none");
    //           $(".lis").css("border","none");
    //           this.isfa = false;
    //           this.isda = false;
    //       }
          
    //   },
    //   selectlis:function(){
        
    //       if(this.a){
    //         var valies = $(".liSec").html();
    //         //console.log(valis);
    //          this.valus += valies; 
             
    //           $(".liFir").html( this.valus);
                
    //           this.a=!this.a;
    //         }
           
    //   },
    //   selectlie:function(){
      
    //         var valies = $(".liThe").html();
           
    //         this.valus += valies; 

    //         $(".liFir").html( this.valus);
           
        
    //   }

  },
    components:{
        sds
    }
}
  </script>


