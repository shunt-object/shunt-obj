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
    <div class="operation">
        <p><button @click="DownloadTheTemplate" class="buttonHovers" style="margin-top:0px"><i class="iconfont icon-iconset0339" style="margin-right:2px;font-size: 18px !important;"></i>下载模板</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button  style="position:relative" class="buttonTmport buttonHovers"><i class="iconfont icon-batch-import"  style="margin-right:3px;font-size: 18px !important;"></i>批量导入<input type="file" style=" opacity: 0; position: absolute;top: 0;left: 0;" id="fileinput"  @change="getFile($event)"></button></p>
    </div>
    <el-dialog title="工作负载配置信息" :visible.sync="dialogFormVisible">
        
        <el-form :model="form"><p style="color:red;" v-show="alertTitle">注意：网络资源只能配置一个，再次配置为修改。</p>
            <el-form-item label="配置类型" :label-width="formLabelWidth">
                <el-select v-model="regionter" placeholder="请选择配置类型" @change="alertTitler()">
                    <el-option label="应用服务" value="server"></el-option>
                    <el-option label="数据库服务" value="db"></el-option>
                    <el-option label="网络服务" value="net"></el-option>
                    <el-option label="存储服务" value="storage"></el-option>
                    <el-option label="CDN" value="cdn"></el-option>
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
                <el-form-item label="操作系统" :label-width="formLabelWidth" prop="osType">
                    <el-select v-model="coresShj.osType" placeholder="请选择">
                        <el-option :value="rs" v-for="rs in rs"  :key="JSON.stringify(rs)" :label="rs.name"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="资源平均利用率" :label-width="formLabelWidth" prop="cmf">
                    <el-select v-model="coresShj.cmf" placeholder="请选择">
                        <el-option :value="rufs" v-for="rufs in rufs" :key="JSON.stringify(rufs)" :label="rufs.name"></el-option>
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
                <el-form-item label="操作系统" :label-width="formLabelWidth" prop="osType">
                    <el-select v-model="inesShj.osType" placeholder="请选择">
                        <el-option :value="rs" v-for="rs in rs"  :key="JSON.stringify(rs.name)" :label="rs.name"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="资源平均利用率" :label-width="formLabelWidth" prop="cmf">
                    <el-select v-model="inesShj.cmf" placeholder="请选择">
                        <el-option :value="rufs" :label="rufs.name" :key="JSON.stringify(rufs.name)" v-for="rufs in rufs"></el-option>
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
                <el-form-item label="云存储（GB）" :label-width="formLabelWidth" v-if="this.checkedes==true" prop="cse">
                    <el-select v-model="inusShj.cse" placeholder="请选择厂商">
                        <el-option :value="ros" v-for="ros in ros"  :key="ros.name" :label="ros.name"></el-option>
                    </el-select>
                    <el-input v-model="inusShj.cloudStorage" auto-complete="off" style="width:40%"  type="number" min="1"></el-input>
                </el-form-item>
             </el-form>
           </div>
           <!--CND-->
            <div class="yibanzp" v-if="regionter=='cdn'">
              <el-form :model="cdnList" :rules="rules" ref="cdnList">
               <!-- <el-form-item  label="购买开始时间" :label-width="formLabelWidth" >
                    <el-date-picker
                            v-model="cdnList.sdate"
                            type="datetimerange"
                            :picker-options="pickerOptions2"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            align="right">
                    </el-date-picker>
                 </el-form-item>-->
                <el-form-item label="云厂商" :label-width="formLabelWidth" prop="cse">
                    <el-select v-model="cdnList.cse" placeholder="请选择厂商">
                        <el-option :value="ros" v-for="ros in ros"  :key="ros.name" :label="ros.name"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="流量（GB）" :label-width="formLabelWidth" prop="bandwidth">
                    <el-input v-model="cdnList.bandwidth" auto-complete="off" type="number" min="1"></el-input>
                </el-form-item>
                <el-form-item  label="购买开始时间" :label-width="formLabelWidth" >
                        <el-date-picker v-model="cdnList.startDate"  type="date" placeholder="选择购买开始时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd" :picker-options="pickerOptions0" > </el-date-picker>
                </el-form-item>
                <el-form-item  label="购买结束时间" :label-width="formLabelWidth">
                        <el-date-picker v-model="cdnList.expireDate"  type="date"  placeholder="选择购买结束时间" format="yyyy-MM-dd" value-format="yyyy-MM-dd"  :picker-options="pickerOptions1"> </el-date-picker>
                </el-form-item>
             </el-form>
           </div>

         </el-form>
         <!--添加时触发的按钮-->
        <div slot="footer" class="dialog-footer">
            <el-button v-on:click="dialogFor()" class="enterDing ResourceGroup-lay-btn">确定</el-button> 
            <el-button type="primary" @click="quxiao" class="ResourceGroup-lay-btn ResourceGroup-lay-del">取消</el-button>   
        </div>
        <!--编辑是触发的按钮-->
       <!-- <div slot="footer" class="dialog-footer" v-show="orCreadCenter">
            <el-button @click="dialogFormVis()" class="enterDing ResourceGroup-lay-btn">确定</el-button>
            <el-button type="primary" @click="dialogFormVisible = false" class="ResourceGroup-lay-btn ResourceGroup-lay-del">取消</el-button>        
        </div>-->
  </el-dialog>
 
  <div id="main">
        <div class="col-md-6 animated bounceInDown" style="padding:10px 20px 5px 0;animation-duration:1s;animation-delay:0.2s;animation-iteration-count:1;animation-fill-mode:both;"   v-for="(jl,index) in cores" >
            <div style="border:1px solid #ccc;padding:0px;background: #fff;height:195px" class="col-md-12">
                <h2 class="text-left" style="font-size:14px;margin:0;background:#f4f4f4;padding:10px 0 10px 10px;">应用服务<span style="float:right"><i class="iconfont icon-icon-bainji" @click="yybian(index,jl.id)"></i>&nbsp&nbsp<i class="iconfont icon-cuohao" @click="removeAl(jl.id,index)"></i></span></h2>
                <div class="col-md-3" style="margin-top:20px;">
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
                        <li v-if="jl.osType==undefined||jl.osType==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{jl.osType.name}}</li>
                        <li>操作系统</li>
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li v-if="jl.ram==undefined||jl.ram==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{jl.ram}}</li>
                        <li class="liGe">内存（GB）</li>
                        <li v-if="jl.cmf==undefined||jl.cmf==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{jl.cmf.name}}</li>
                        <li>资源平均利用率</li>
                    </ul>
                </div>
            </div>
        </div>
         <div class="col-md-6 animated bounceInDown" style="padding:10px 20px 5px 0;animation-duration:1s;animation-delay:0.2s;animation-iteration-count:1;animation-fill-mode:both;" v-for="(ins,index) in ines">
            <div style="border:1px solid #ccc;padding:0px;background: #fff;height:195px" class="col-md-12">
                <h2 class="text-left" style="font-size:14px;margin:0;background:#f4f4f4;padding:10px 0 10px 10px;">数据库服务<span style="float:right"><i class="iconfont icon-icon-bainji" @click="sjbian(index,ins.id)"></i>&nbsp&nbsp<i class="iconfont icon-cuohao" @click="removeAs(ins.id,index)"></i></span></h2>
                <div class="col-md-3" style="margin-top:20px;">
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
                        <li v-if="ins.osType==undefined||ins.osType==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{ins.osType.name}}</li>
                        <li>操作系统</li>
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li v-if="ins.ram==undefined||ins.ram==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{ins.ram}}</li>
                        <li class="liGe">内存（GB）</li>
                        <li v-if="ins.cmf==undefined||ins.cmf==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{ins.cmf.name}}</li>
                        <li>资源平均利用率</li>
                    </ul>
                </div>
            </div>
        </div>
       <div class="col-md-6 animated bounceInDown" style="padding:10px 20px 5px 0;animation-duration:1s;animation-delay:0.2s;animation-iteration-count:1;animation-fill-mode:both;" v-show="this.wangl">
            <div style="border:1px solid #ccc;padding:0px;background: #fff;height:195px" class="col-md-12">
                <h2 class="text-left" style="font-size:14px;margin:0;background:#f4f4f4;padding:10px 0 10px 10px;">网络服务<span style="float:right"><i class="iconfont icon-icon-bainji" @click="wlbian()"></i>&nbsp&nbsp<i class="iconfont icon-cuohao" @click="removeAe()"></i></span></h2>
                <div class="col-md-3" style="margin-top:35px;">
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
                        <li>出站（Mbps/月）</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6 animated bounceInDown" style="padding:10px 20px 5px 0;animation-duration:1s;animation-delay:0.2s;animation-iteration-count:1;animation-fill-mode:both;"  v-for="(inu,index) in inus">
            <div style="border:1px solid #ccc;padding:0px;background: #fff;height:195px" class="col-md-12">
                <h2 class="text-left" style="font-size:14px;margin:0;background:#f4f4f4;padding:10px 0 10px 10px;">存储服务<span style="float:right"><i class="iconfont icon-icon-bainji" @click="cuncbian(index,inu.id)"></i>&nbsp&nbsp<i class="iconfont icon-cuohao" @click="removeAw(inu.id,index)"></i></span></h2>
                <div class="col-md-3" style="margin-top:20px;">
                    <img src="../../../../assets/overview/resource-group4.png" alt="">
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
                        <li v-if="inu.cse==undefined||inu.cse==''"><span  style="color: #797979">（--）</span>云存储（GB）</li>
                        <li v-else>（<span style="color: #da121a">{{inu.cse.name}}</span>）云存储（GB）</li>
                    </ul>
                </div>
            </div>
        </div>
         <div class="col-md-6 animated bounceInDown" style="padding:10px 20px 5px 0;animation-duration:1s;animation-delay:0.2s;animation-iteration-count:1;animation-fill-mode:both;"  v-for="(cdn,index) in cdn">
            <div style="border:1px solid #ccc;padding:0px;background: #fff;height:195px" class="col-md-12">
                <h2 class="text-left" style="font-size:14px;margin:0;background:#f4f4f4;padding:10px 0 10px 10px;">CDN<span style="float:right"><i class="iconfont icon-icon-bainji" @click="cdnbian(index,cdn.id)"></i>&nbsp&nbsp<i class="iconfont icon-cuohao" @click="removeAj(cdn.id,index)"></i></span></h2>
                <div class="col-md-3" style="margin-top:35px;">
                    <img src="../../../../assets/overview/resource-group5.png" alt="">
                    <h4 style="font-size:12px;">CDN</h4>
                </div>
                <div class="col-md-2 Pei" style="margin-top:10px;" >
                    <ul class="cuncul">
                        <li v-if="cdn.bandwidth==undefined||cdn.bandwidth==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{cdn.bandwidth}}</li>  
                        <li>流量（GB）</li>
                    </ul>
                </div>
                <div class="col-md-2 Pei" style="margin-top:10px;">
                    <ul class="cuncul">
                        <li v-if="cdn.cse==undefined||cdn.cse==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{cdn.cse.name}}</li>
                        <li>云厂商</li>
                    </ul>
                </div>
                <div class="col-md-4 Pei" style="margin-top:10px;">
                    <ul class="cuncul">
                        <li v-if="cdn.startDate==undefined||cdn.startDate==''"  style="color: #797979">--</li>
                        <li v-else  style="color: #da121a">{{cdn.startDate}}/{{cdn.expireDate}}</li>
                        <li>购买起止时间</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6 text-center" style="padding:10px 20px 5px 0;" v-show="creads">
                <p class="col-md-12 text-center CreatPj" style="border:1px solid #ccc;line-height:194px;background:#fff;color:#555;text-align:center;"><!--<img src="../../../../assets/additi.svg" style="width:5%;margin-right:10px;" alt="">-->
                    <span @click="dialogFormVisibler" class="pds user-hover">
                        <span style="float:left;width:40%;text-align:right;"><i class="iconfont icon-tianjia-yin icon-tiam" style="font-size:22px !important;line-height:194px;"></i></span>
                        <span style="width:60%;float:left;text-align:left;">添加工作负载配置信息</span>
                        <div style="clear:both;"></div>
                    </span>
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
.buttonHovers:hover{
    color:#da121a;
}
@media (min-width: 768px) {
    /*.icon-tiam{padding-left:200px}*/
}
@media (max-width: 768px) {
    .icon-tiam{padding-left:30px}
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
</style>
<script>
   

import sds from '../../../../components/steps/steps.vue'
export default {
  name: 'ResourceGroup',
  data () {
      let that = this;
    return {
          
          inusShjs:{
              type:[]
          },
          rules: {
              
            expireDate:[{ type: 'date', required: true, message: '请输入购买结束时间', trigger: 'change' }],
            startDate:[{ type: 'date', required: true, message: '请输入购买开始时间', trigger: 'change' }],
            cses:[{required: true, message: '请选择云厂商', trigger: 'blur'}],
            cores: [{ required: true, message: '请输入(v)CPU', trigger: 'blur' }],
            ram:[{required: true, message: '请输入内存大小', trigger: 'blur'}],
            ghz:[{required: true, message: '请输入处理器主频大小', trigger: 'blur'}],
            localDisk:[{required: true, message: '请输入磁盘大小', trigger: 'blur'}],
            osType:[{required: true, message: '请选择操作系统', trigger: 'change'}],
            cmf:[{required: true, message: '请选择资源平均利用率', trigger: 'change'}],
            nodeNum:[{required: true, message: '请输入节点数量的个数', trigger: 'blur'}],
            coresq: [{ required: true, message: '请输入(v)CPU', trigger: 'blur' }],
            ramq:[{required: true, message: '请输入内存大小', trigger: 'blur'}],
            ghzq:[{required: true, message: '请输入处理器主频大小', trigger: 'blur'}],
            bandswidth:[{required: true, message: '请输入带宽', trigger: 'blur'}],
            osq:[{required: true, message: '请选择操作系统', trigger: 'change'}],
            computeMappingFactorq:[{required: true, message: '请选择资源平均利用率', trigger: 'change'}],
            localDiskq:[{required: true, message: '请输入本地磁盘大小', trigger: 'blur'}],
            bandwidth:[{required: true, message: '请输入带宽', trigger: 'blur'}],
            inbound:[{required: true, message: '请输入入站大小', trigger: 'blur'}],
            outbound:[{required: true, message: '请输入出站大小', trigger: 'blur'}],
            cse:[{required: true, message: '请选择云厂商', trigger: 'blur'}],
            sna:[{required: true, message: '请输入共享存储大小', trigger: 'blur'}],
            nsa:[{required: true, message: '请输入网络大小', trigger: 'blur'}],
             cpus: [{ required: true, message: '请输入(v)CPU', trigger: 'blur' }],
            ncs:[{required: true, message: '请输入内存大小', trigger: 'blur'}],
            ghzs:[{required: true, message: '请输入处理器主频大小', trigger: 'blur'}],
            wins:[{required: true, message: '请选择操作系统', trigger: 'change'}],
            ziyuans:[{required: true, message: '请选择资源平均利用率', trigger: 'change'}],
            //type: [ { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' } ]
           
         
         },
         value3:"",

        rsers:[],
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
        cdns:false,
        cunc:false,
        yingyo:true,
        shuju:true,
        wanglu:true,
        cunch:true,
        creads:true,
        asd:false,
        afd:false,
        agd:false,
        file:"",
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
                    num:"1",
          },     
       ids:null,
       ider:null,
       ideu:null,
       idey:null,
       ines:[],
       inesShj:{
            num:"1",    
            cores:"",
            ghz:"",
            ram:"",
            computeMappingFactor:"", 
            localDisk:"",
            os:""
        
            
      },
        netRule:{
            bandwidth:"",
            inbound:"",
            outbound:""
        },
    resu:null,
     inus:[],
     inusShj: { 
          num:"1",
          sna:"",
          nsa:"",
          cloudStorage:"",
          serverName:""
        },
    cdn:[],
    cdnList:{
         bandwidth:"",
        startDate:"",
        expireDate:"",
         cse:"",

    },
     expireDate:"",
    startDate:"",
       appId:"",
       queryType:'',
       rs:[],
       ros:[],
       rufs:[],
       result:[],
       
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7 ||
                time.getTime() < new Date(that.cdnList.startDate).getTime();
          }
        }
            
    }
  },
  mounted:function(){
      this.showers();
       $(document).ready(function(){
                $(".CreatPj").hover(function(){
                    $(this).css("background","#f7f7f7")
                },function(){
                   $(this).css("background","#fff")
                })

            //  $(" #fileinput").change(function () {
            //         var file = this.files[0];
            //         console.log(file)
            // });
    });         
  },
  methods:{
      DownloadTheTemplate:function(){
          
          window.location.href='broker/app/resource/group/tempalte/download/'+this.appId;
            
      },
      getFile:function($event){
            this.file = event.target.files[0];
            console.log(this.file);
             event.preventDefault();
             let formData = new FormData();
             formData.append('file', this.file);
             let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }   
            }
            this.$this.post("broker/app/resource/group/import/"+this.appId,formData,config).then((rs)=>{
                    console.log(rs)       
                  this.showers();
                            
           },(err)=>{
                 console.log("不好意思")
           })

      },
      quxiao:function(){
        this.dialogFormVisible = false;
         this.asd = false;
         this.afd = false;
         this.agd = false;
         this.checked = false;
         this.checkeder = false;
         this.checkedes = false;
      },
      showers:function(){
            this.queryType = this.$route.query.type;
            //this.$layer.msg("注意：以下全为必填项");
            this.appId = this.$route.query.id;
            this.$this.get('broker/app/resource/group/'+this.appId).then((res)=>{
                            
                    this.result =  res.data.data; 
                 console.log(this.result)
                    //console.log(this.result.appServer.id)
                      if(this.result.network !== null){
                            this.resu = this.result.network.id
                        }  

                    
                    if(this.result.msg=="数据无"){
                        return ;
                    }else{
                     //this.$router.push({path:'/login'});/planQuestion
                        // if(this.result.network !== null){
                        //     this.resu = this.result.network.id
                        // }
                        if(this.result.network==null){
                            this.wangl =false;
                        }else if(this.result.network!=null){
                            this.netRule=this.result.network;
                            this.wangl=true;
                        }
                        this.cores=this.result.appServer==undefined?this.cores=[]:this.cores=this.result.appServer;
                        this.ines = this.result.dbServer==undefined?this.ines=[]:this.ines=this.result.dbServer;
                        this.inus = this.result.storage==undefined?this.inus=[]:this.inus=this.result.storage;
                        this.cdn = this.result.cdns==undefined?this.cdn=[]:this.cdn=this.result.cdns;
                       
                     }
                     },(err)=>{
                         console.log("不好意思")
                     });

                    this.$this.get("broker/prop/typedata/os/-1").then((rs)=>{
                            this.rs=rs.data.data;
                            for(var k = 0;k<this.rs.length;k++){
                               this.rsers.push (this.rs[k])
                            }
                           console.log(this.rsers)
                            
                    },(err)=>{
                        console.log("不好意思")
                    })
                    this.$this.get("broker/prop/typedata/cmf/-1").then((rus)=>{
                          this.rufs = rus.data.data;
                    },(err)=>{
                        console.log("不好意思")
                    })
                    this.$this.get("broker/prop/typedata/cse/-1").then((ros)=>{
                            this.ros = ros.data.data;
                    },(err)=>{
                        console.log("不好意思")
                    })
                    
      },
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
       this.ids=null;
       this.ider=null;
       this.ideu = null;
        this.orCreadCenter = false;
         this.regionter = "";
         this.coresShj = {};
         this.inesShj={};
         this.inusShj = {};  
         this.cdnList = {};
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
            if(this.regionter=='server'){
                 this.$refs['coresShj'].validate((valid) => {
                    if (valid) {
                     
                        if(this.coresShj.num==undefined){
                            this.cores.push(
                                {
                                        cores:this.coresShj.cores,
                                        ghz:this.coresShj.ghz,
                                        ram:this.coresShj.ram,
                                        cmf:this.coresShj.cmf,
                                        localDisk:this.coresShj.localDisk,
                                        osType:this.coresShj.osType,
                                        appid: Number(this.appId),
                                        num:"1",
                                        id:this.ids
                                }
                            )
                        }else{
                              this.cores.push(
                                   {
                                    cores:this.coresShj.cores,
                                    ghz:this.coresShj.ghz,
                                    ram:this.coresShj.ram,
                                    cmf:this.coresShj.cmf,
                                    localDisk:this.coresShj.localDisk,
                                    osType:this.coresShj.osType,
                                    appid: Number(this.appId),
                                    num:this.coresShj.num,
                                    id:this.ids
                                   }
                                )
                            }
                            let obj=this.cores;
                            for(let i = 0 ;i<this.cores.length;i++){
                                var objs = this.cores[this.cores.length-1]
                            }
                            this.$this.post('/broker/app/resource/group/server/1',objs).then((res)=>{
                                 this.showers();
                            },(err)=>{
                                console.log("不好意思")
                            });     
                    } else {
                        console.log('error 出现问题!!');
                        return false;
                        
                    }
                                this.j++;
                                this.col = 1;
                                this.coresShj = {};
                                this.regionter = "";
                                this.dialogFormVisible =false;
                });
              }else if(this.regionter=="db"){
                 var that  = this;  
                 this.$refs['inesShj'].validate((valid) => {
                            if (valid) {
                               if(this.inesShj.num==undefined){
                                    this.ines.push(
                                        {
                                            num:"1",    
                                            cores:this.inesShj.cores,
                                            ghz:this.inesShj.ghz,
                                            ram:this.inesShj.ram,
                                            cmf:this.inesShj.cmf, 
                                            localDisk:this.inesShj.localDisk,
                                            osType:this.inesShj.osType,
                                           appid: Number(this.appId),
                                           id:this.ider
                                        }
                                    )
                                }else{
                                    this.ines.push(
                                        {
                                            num:this.inesShj.num,    
                                            cores:this.inesShj.cores,
                                            ghz:this.inesShj.ghz,
                                            ram:this.inesShj.ram,
                                            cmf:this.inesShj.cmf, 
                                            localDisk:this.inesShj.localDisk,
                                            osType:this.inesShj.osType,
                                            appid: Number(this.appId),
                                            id:this.ider
                                        }
                                    )
                                };
                                    let obs=this.ines;
                                    for(let i = 0 ;i<this.ines.length;i++){
                                        var objs = this.ines[this.ines.length-1]
                                    }
                                    this.$this.post('/broker/app/resource/group/server/2',objs).then((res)=>{
                                        this.showers();
                                    },(err)=>{
                                        console.log("不好意思")
                                    });  
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
                                    let objers = {
                                        appid: Number(this.appId),
                                        bandwidth:this.netRule.bandwidth,
                                        inbound:Number(this.netRule.inbound),
                                        outbound:Number(this.netRule.outbound),
                                        id:this.resu
                                    }
                                   this.$this.post('/broker/app/resource/group/net',objers).then((res)=>{
                                         this.showers();
                                    },(err)=>{
                                        console.log("不好意思")
                                    });   
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
                                            cse:this.inusShj.cse,
                                            appid: Number(this.appId),
                                            id:this.ideu
                                        }
                                    );
                                }else{
                                        this.inus.push(
                                            { 
                                                num:this.inusShj.num,
                                                sna:this.inusShj.sna,
                                                nsa:this.inusShj.nsa,
                                                cloudStorage:this.inusShj.cloudStorage,
                                                cse:this.inusShj.cse,
                                                appid: Number(this.appId),
                                                id:this.ideu
                                            }
                                        )
                                    }
                                    for(let i = 0 ;i<this.inus.length;i++){
                                        var objs = this.inus[this.inus.length-1]
                                    }
                                    console.log(objs)
                                    this.$this.post('/broker/app/resource/group/storage',objs).then((res)=>{
                                        this.showers();
                                    },(err)=>{
                                        console.log("不好意思")
                                    });   
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
                    
                          
                  
                    }else if(this.regionter=="cdn"){
                        this.$refs["cdnList"].validate((valid) => {
                            if (valid) {
                                    this.cdn.push(
                                        { 
                                            bandwidth:this.cdnList.bandwidth,
                                            startDate:this.cdnList.startDate,
                                            expireDate:this.cdnList.expireDate,
                                            cse:this.cdnList.cse,
                                            appid: Number(this.appId),
                                            id:this.idey
                                        }
                                    );
                                    for(let i = 0 ;i<this.cdn.length;i++){
                                        var objs = this.cdn[this.cdn.length-1]
                                    }
                                    console.log(this.cdnList.startDate)
                                   this.$this.post('/broker/app/resource/group/cdn',objs).then((res)=>{
                                        this.showers();
                                        this.dialogFormVisible =false;
                                        this.regionter="";
                                        this.cdnList = {};
                                    },(err)=>{
                                        console.log("不好意思")
                                    }); 


                                    
                                    // console.log(objs)
                                    // this.$this.post('/broker/app/resource/group/storage',objs).then((res)=>{
                                    //     this.showers();
                                    // },(err)=>{
                                    //     console.log("不好意思")
                                    // });   
                                    //     this.v++;
                                    //     this.col = 4;
                                    
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
    yybian:function(e,d){
        this.ids = d ;
         this.dialogFormVisible =true;
        this.regionter = "server";
        this.coresShj = this.cores[e];
    },
    sjbian:function(e,d){
        this.dialogFormVisible = true;
        this.ider = d ;
        this.inesShj = this.ines[e]
        this.regionter = "db";
    },
    wlbian:function(){
         this.regionter = "net";
         this.dialogFormVisible = true;
         
    },
    cuncbian:function(e,d){
        this.regionter = "storage";
        this.ideu = d;
         this.dialogFormVisible = true;
           this.alertTitle = false; 
        this.inusShj = this.inus[e];
    
        if(this.inusShj.sna!=null){
            this.checked= true;
            this.asd= true
        }
        if(this.inusShj.nsa!=null){
            this.checkeder= true;
            this.afd= true
        }
        if(this.inusShj.cloudStorage!=null){
            this.checkedes= true;
            this.agd= true
        }
        // if(this.asd=true){
        //     this.checked = true;
        // }
        // if(this.afd=true){
        //     this.checkeder = true;
        // }
        // if(this.agd=true){
        //     this.checkedes = true
        // }
          console.log(this.checked)
          console.log(this.asd)
          console.log(this.agd)
     
    },
    cdnbian:function(e,d){
         this.regionter = "cdn";
         this.idey = d;
         this.dialogFormVisible = true;
        
         this.cdnList = this.cdn[e];
         console.log(this.cdnList)
         console.log(this.cdnList.bandswidth)

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
           
      
 

    //   -----删除---

    removeAl:function(e,d){
        var that = this;
        this.$confirm('删除后，如需恢复需要重新添。确认删除？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          confirmButtonClass:'lay-btn-red',
          cancelButtonClass:'lay-cancel-btn',
          type: 'warning'
        }).then(() => {
           
            let id = e;
            console.log(d);
            console.log(this.cores)
            this.$this.delete('/broker/app/resource/group/'+this.appId+'/1/'+id).then((res)=>{
                      that.cores.splice(d,1);                
            },(err)=>{
                 console.log("不好意思")
            });   

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
    removeAs:function(e,d){
        var that = this;
       this.$confirm('删除后，如需恢复需要重新添。确认删除？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          confirmButtonClass:'lay-btn-red',
          cancelButtonClass:'lay-cancel-btn',
          type: 'warning'
        }).then(() => {
            let id = e;
            this.$this.delete('/broker/app/resource/group/'+this.appId+'/2/'+id).then((res)=>{
                      that.ines.splice(d,1);                
            },(err)=>{
                 console.log("不好意思")
            });  
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
    removeAe:function(){
        this.$confirm('删除后，如需恢复需要重新添。确认删除？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          confirmButtonClass:'lay-btn-red',
          cancelButtonClass:'lay-cancel-btn',
          type: 'warning'
        }).then(() => {
            let id = this.resu;
            this.$this.delete('/broker/app/resource/group/'+this.appId+'/3/'+id).then((res)=>{
                    this.wangl = false;
                    this.netRule.bandwidth="";
                    this.netRule.inbound="";
                    this.netRule.outbound="";               
            },(err)=>{
                 console.log("不好意思")
            });  
          
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
    removeAw:function(e,d){
        var that = this;
        this.$confirm('删除后，如需恢复需要重新添。确认删除？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          confirmButtonClass:'lay-btn-red',
          cancelButtonClass:'lay-cancel-btn',
          type: 'warning'
        }).then(() => {
            let id = e;
            this.$this.delete('/broker/app/resource/group/'+this.appId+'/4/'+id).then((res)=>{
                         that.inus.splice(d, 1);       
            },(err)=>{
                 console.log("不好意思")
            });  
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
    removeAj:function(e,d){
        var that = this;
        this.$confirm('删除后，如需恢复需要重新添。确认删除？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          confirmButtonClass:'lay-btn-red',
          cancelButtonClass:'lay-cancel-btn',
          type: 'warning'
        }).then(() => {
            let id = e;
            this.$this.delete('/broker/app/resource/group/'+this.appId+'/5/'+id).then((res)=>{
                         that.cdn.splice(d, 1);       
            },(err)=>{
                 console.log("不好意思")
            });  
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
    btn:function(){
                let obj ={
                    "appId": this.appId,
                    "appServer": this.cores,
                    "dbServer": this.ines,
                    "network": this.netRule,
                    "storage":this.inus,               
                    "cdns":this.cdn
                 };              
                 if(obj.network.inbound==""&&obj.network.outbound==""&&obj.network.bandwidth==""&&obj.appServer.length==0&&obj.dbServer.length==0&&obj.storage.length==0&&obj.cdns.length==0){
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


