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
        <el-form :model="form">
            <el-form-item label="配置类型" :label-width="formLabelWidth">
                <el-select v-model="regionter" placeholder="请选择配置类型" @change="peiType">
                    <el-option label="应用服务" value="应用服务"></el-option>
                    <el-option label="数据库服务" value="数据库服务"></el-option>
                    <el-option label="网络服务" value="网络服务"></el-option>
                    <el-option label="存储服务" value="存储服务"></el-option>
                </el-select>
            </el-form-item>
            <div class="yibazi" v-show="yingy">
                <el-form-item label="数量" :label-width="formLabelWidth">
                    <el-input v-model="cores.num" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="(v)Cpu" :label-width="formLabelWidth">
                    <el-input v-model="cores.cores" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="处理器主频(GHZ)" :label-width="formLabelWidth">
                    <el-input v-model="cores.ghz" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="内存(GB)" :label-width="formLabelWidth">
                    <el-input v-model="cores.ram" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="系统盘(GB)" :label-width="formLabelWidth">
                    <el-input v-model="cores.localDisk" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="操作系统" :label-width="formLabelWidth">
                    <el-select v-model="cores.os" placeholder="请选择">
                        <el-option value="Linux">Linux</el-option>
                        <el-option value="Window">Window</el-option>
                        <el-option value="Unix">Unix</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="资源平均利用率" :label-width="formLabelWidth">
                    <el-select v-model="cores.computeMappingFactor" placeholder="请选择">
                        <el-option value="≤30%">≤30%</el-option>
                        <el-option value="30%-60%">30%-60%</el-option>
                        <el-option value="60%-90%">60%-90%</el-option>
                        <el-option value="≥90%">≥90%</el-option>
                    </el-select>
                </el-form-item>
           </div>

           <!--数据库服务-->
           <div class="yibazo" v-show="shuj">
                <el-form-item label="数量" :label-width="formLabelWidth">
                    <el-input v-model="ines.num" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="(v)Cpu" :label-width="formLabelWidth">
                    <el-input v-model="ines.coresq" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="处理器主频(GHZ)" :label-width="formLabelWidth">
                    <el-input v-model="ines.ghzq" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="内存(GB)" :label-width="formLabelWidth">
                    <el-input v-model="ines.ramq" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="本地磁盘(GB)" :label-width="formLabelWidth">
                    <el-input v-model="ines.localDiskq" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="操作系统" :label-width="formLabelWidth">
                    <el-select v-model="ines.osq" placeholder="请选择">
                        <el-option value="Linux">Linux</el-option>
                        <el-option value="Window">Window</el-option>
                        <el-option value="Unix">Unix</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="资源平均利用率" :label-width="formLabelWidth">
                    <el-select v-model="ines.computeMappingFactorq" placeholder="请选择">
                        <el-option value="≤30%">≤30%</el-option>
                        <el-option value="30%-60%">30%-60%</el-option>
                        <el-option value="60%-90%">60%-90%</el-option>
                        <el-option value="≥90%">≥90%</el-option>
                    </el-select>
                </el-form-item>
           </div>
           
           <!--网络-->
           <div class="yibanzp" v-show="wangl">
                <el-form-item label="带宽(Mbps/月)" :label-width="formLabelWidth">
                    <el-input v-model="bandwidth" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="入站(Mbps/月)" :label-width="formLabelWidth">
                    <el-input v-model="inbound" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="出站(Mbps/月)" :label-width="formLabelWidth">
                    <el-input v-model="outbound" auto-complete="off"></el-input>
                </el-form-item>
           </div>

          <!--存储-->
           <div class="yibanzp" v-show="cunc">
                <el-form-item  label="数量" :label-width="formLabelWidth" >
                    <el-input v-model="inus.num" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="" :label-width="formLabelWidth">
                    <el-checkbox v-model="checked" v-on:change="lookw()">共享存储(SAN)(GB)</el-checkbox>
                    <el-checkbox v-model="checkeder" v-on:change="lookq()">网络存储(NAS)(GB)</el-checkbox>
                    <el-checkbox v-model="checkedes" v-on:change="looke()">云存储(GB)</el-checkbox>
                </el-form-item>
                <el-form-item label="共享存储(SAN)(GB)" :label-width="formLabelWidth" v-show="qer">
                    <el-input v-model="inus.sna" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="网络存储(NAS)(GB)" :label-width="formLabelWidth" v-show="wer">
                    <el-input v-model="inus.nsa" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="云存储(GB)" :label-width="formLabelWidth" v-show="ret">
                    <el-select v-model="awsClound" placeholder="请选择厂商">
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
                    <el-input v-model="inus.cloudStorage" auto-complete="off" style="width:40%" placeholder="请输入云存储的大小"></el-input>
                </el-form-item>
           </div>
         </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFor()">确定</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">取消</el-button>
        </div>
  </el-dialog>
  <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
  <div>
        <div class="col-md-6" style="padding:5px 5px 0 0;">
            <div style="border:1px solid #ccc;padding:0px;" class="col-md-12">
                <h2 class="text-left" style="font-size:28px;margin:0;background:#ccc;padding:5px 0 5px 5px;">应用服务<span style="float:right"><i class="iconfont icon-icon-bainji"></i>&nbsp&nbsp<i class="iconfont icon-cuohao"></i></span></h2>
                <div class="col-md-3" style="margin-top:15px;">
                    <img src="../../../../assets/overview/resource-group1.png" alt="">
                    <h4>应用服务</h4>
                    <p><span>{{this.cores.num}}</span>个(相同配置)</p>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li>{{}}</li>
                        <li>vCPU</li>
                        <li>{{}}</li>
                        <li>系统盘(GB)</li>
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li>{{}}</li>
                        <li>处理器主频(GHZ)</li>
                        <li>{{}}</li>
                        <li>操作系统</li>
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li>{{}}</li>
                        <li>内存(GB)</li>
                        <li>{{}}</li>
                        <li>资源平均利用率</li>
                    </ul>
                </div>
            </div>
        </div>
         <div class="col-md-6" style="padding:5px 5px 0 0;">
            <div style="border:1px solid #ccc;padding:0px;" class="col-md-12">
                <h2 class="text-left" style="font-size:28px;margin:0;background:#ccc;padding:5px 0 5px 5px;">应用服务<span style="float:right"><i class="iconfont icon-icon-bainji"></i>&nbsp&nbsp<i class="iconfont icon-cuohao"></i></span></h2>
                <div class="col-md-3" style="margin-top:15px;">
                    <img src="../../../../assets/overview/resource-group2.png" alt="">
                    <h4>数据库服务</h4>
                    <p><span>{{this.ines.num}}</span>个(相同配置)</p>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li>{{}}</li>
                        <li>vCPU</li>
                        <li>{{}}</li>
                        <li>本地磁盘(GB)</li>
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li>{{}}</li>
                        <li>处理器主频(GHZ)</li>
                        <li>{{}}</li>
                        <li>操作系统</li>
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li>{{}}</li>
                        <li>内存(GB)</li>
                        <li>{{}}</li>
                        <li>资源平均利用率</li>
                    </ul>
                </div>
            </div>
        </div>
       <div class="col-md-6" style="padding:5px 5px 0 0;">
            <div style="border:1px solid #ccc;padding:0px;" class="col-md-12">
                <h2 class="text-left" style="font-size:28px;margin:0;background:#ccc;padding:5px 0 5px 5px;">应用服务<span style="float:right"><i class="iconfont icon-icon-bainji"></i>&nbsp&nbsp<i class="iconfont icon-cuohao"></i></span></h2>
                <div class="col-md-3" style="margin-top:15px;">
                    <img src="../../../../assets/overview/resource-group3.png" alt="">
                    <h4>网络服务</h4>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;" >
                    <ul>
                        <li>{{}}</li>
                        <li>带宽(Mbps/月)</li>
                     
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li>{{}}</li>
                        <li>入站(Mbps/月)</li>
                      
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;">
                    <ul>
                        <li>{{}}</li>
                        <li>出站</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6" style="padding:5px 5px 0 0;">
            <div style="border:1px solid #ccc;padding:0px;" class="col-md-12">
                <h2 class="text-left" style="font-size:28px;margin:0;background:#ccc;padding:5px 0 5px 5px;">应用服务<span style="float:right"><i class="iconfont icon-icon-bainji"></i>&nbsp&nbsp<i class="iconfont icon-cuohao"></i></span></h2>
                <div class="col-md-3" style="margin-top:15px;">
                    <img src="../../../../assets/overview/resource-group1.png" alt="">
                    <h4>存储服务</h4>
                    <p><span>{{this.cores.num}}</span>个(相同配置)</p>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;" v-show="this.qer">
                    <ul>
                        <li>{{}}</li>
                        <li>共享存储(SAN)(GB)</li>
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;" v-show="this.wer">
                    <ul>
                        <li>{{}}</li>
                        <li>网络存储(NAS)(GB)</li>
                    </ul>
                </div>
                <div class="col-md-3 Pei" style="margin-top:20px;" v-show="this.ret">
                    <ul>
                        <li>{{}}</li>
                        <li>云存储(GB)</li>
                    </ul>
                </div>
            </div>
        </div>
  </div>
    <!--<div class="resourceCroup-list row clsa" style="margin-bottom:10px !important;animation-duration:1s;animation-delay:0.5s;animation-iteration-count:1;animation-fill-mode:both;" v-for="(jl,index) in cores"  :class="index==j?'bounceInDown':''" >
        <div class="resourceCroup-list-head col-md-2 col-sm-12 col-xs-12">
            <img src="../../../../assets/overview/resource-group1.png" alt="">
            <h4>应用服务</h4>
        </div>
        <div class="col-md-3 text-left Inp col-sm-12 col-xs-12" > <input type="number" min="1" v-model="cores[index].num"><span class="write-num">请填写数量</span></div>
        <ul class="resourceCroup-list-ul col-md-7 text-left ulss col-sm-12">
            <li class=" col-sm-12"><input type="number" v-model="cores[index].cores" min="1">&nbsp&nbsp(v)CPU</li>
            <li class=" col-sm-12"><input type="number" v-model="cores[index].ghz" min="1">&nbsp&nbsp处理器主频(GHZ)</li>
            <li class=" col-sm-12"><input type="number" v-model="cores[index].ram" min="1">&nbsp&nbsp内存(GB)</li>
            <li class=" col-sm-12"><input type="number" v-model="cores[index].localDisk" min="1">&nbsp&nbsp系统盘(GB)</li>
            <li class=" col-sm-12">
                <select name="" id="sele" v-model="cores[index].os">
                    <option value="Linux">Linux</option>
                    <option value="Window">Window</option>
                    <option value="Unix">Unix</option>
                </select>&nbsp&nbsp操作系统
            </li>
                   
            <li class=" col-sm-12">
                <select v-model="cores[index].computeMappingFactor">
                    <option value="≤30%">≤30%</option>
                    <option value="30%-60%">30%-60%</option>
                    <option value="60%-90%">60%-90%</option>
                    <option value="≥90%">≥90%</option>
                </select>&nbsp&nbsp资源平均利用率
            </li>-->
            <!--<li class=" col-sm-12"><input type="number" min="1" v-model="cores[index].monthlyUsage">&nbsp&nbsp每个月用量(天/月)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="cores[index].dailyUsage">&nbsp&nbsp每天用量(小时/天)</li>-->
           <!-- <li class="col-sm-12 creadIng"  ><span v-on:click="creadIng(index)"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp添加应用服务</span><span v-on:click="removeAl(index)"><i class="fa fa-minus" aria-hidden="true"></i>&nbsp删除此应用服务</span></li>
        </ul>
    </div>
    <div class="resourceCroup-list row" style="margin-bottom:10px !important;!important;animation-duration:1s;animation-delay:0.5s;animation-iteration-count:1;animation-fill-mode:both;"  v-for="(ine,index) in ines"  :class="index==s?'bounceInDown':''" >
        <div class="resourceCroup-list-head col-md-2 col-sm-12 col-xs-12">
            <img src="../../../../assets/overview/resource-group2.png" alt="">
            <h4>数据库服务</h4>
        </div>
        <div class="col-md-3 text-left Inp col-sm-12" > <input type="number" min="1" v-model="ines[index].num"><span class="write-num">请填写数量</span></div>
        <ul class="resourceCroup-list-ul col-md-7 ulss text-left col-sm-12">
            <li class=" col-sm-12"><input type="number" min="1" v-model="ines[index].coresq">&nbsp&nbsp(v)CPU</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="ines[index].ghzq">&nbsp&nbsp处理器主频(GHZ)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="ines[index].ramq">&nbsp&nbsp内存(GB)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="ines[index].localDiskq">&nbsp&nbsp本地磁盘(GB)</li>
            <li class=" col-sm-12">
            <select id="selet" v-model="ines[index].osq">
                    <option value="Linux">Linux</option>
                    <option value="Window">Window</option>
                    <option value="Unix">Unix</option>
                </select>&nbsp&nbsp操作系统
            </li>
            <li class="col-sm-12">
                <select v-model="ines[index].computeMappingFactorq">
                    <option value="≤30%">≤30%</option>
                    <option value="30%-60%">30%-60%</option>
                    <option value="60%-90%">60%-90%</option>
                    <option value="≥90%">≥90%</option>
                </select>&nbsp&nbsp资源平均利用率
            </li>
           <!-- <li class=" col-sm-12"><input type="number" min="1" v-model="ines[index].monthlyUsageq">&nbsp&nbsp每个月用量(天/月)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="ines[index].dailyUsageq">&nbsp&nbsp每天用量(小时/天)</li>-->
            <!--<li class="col-sm-12 creadIng" ><span  v-on:click="creadIn(index)"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp添加数据库服务</span><span @click="removeAe(index)"><i class="fa fa-minus" aria-hidden="true"></i>&nbsp删除数据库服务</span></li>
        </ul>
    </div>
    <div class="resourceCroup-list row bounceInDown" style="margin-bottom:10px !important; !important;animation-duration:0.3s;animation-delay:0.5s;animation-iteration-count:1;animation-fill-mode:both;" >  
        <div class=" col-md-2 head col-sm-12 col-xs-12">
            <img src="../../../../assets/overview/resource-group3.png" alt="">
            <h4 style="margin-bottom:50px;">网络</h4>
        </div>
        <div class="col-md-3 text-left Inp col-sm-12" ></div>
        <ul class="resourceCroup-list-ul ulis ulss col-md-7 text-left col-sm-12">
            <li class=" col-sm-12"><input type="number" min="1" v-model="bandwidth ">&nbsp&nbsp带宽(Mbps/月)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="inbound">&nbsp&nbsp入站(Mbps/月)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="outbound">&nbsp&nbsp出站(Mbps/月)</li>
        </ul>
    </div>   

    <div class="resourceCroup-list row" style="margin-bottom:10px !important;animation-duration:0.3s;animation-delay:0.5s;animation-iteration-count:1;animation-fill-mode:both;" v-for="(inu,index) in inus" :class="index==k?'bounceInDown':''"  >
        <div class="resourceCroup-list-head col-md-2 head col-sm-12 col-xs-12">  
            <img src="../../../../assets/overview/resource-group4.png" alt="">
            <h4 style="margin-bottom:50px;">存储</h4>
        </div>
        <div class="col-md-3 text-left Inp"  > <input type="number" min="1" v-model="inus[index].num" style="margin-top:118px !important"><span class="write-num">请填写数量</span></div>
        <ul class="resourceCroup-list-ul col-md-7 ulss ulis text-left  col-sm-12">
            <li class="Mainli"><span class="col-md-3 col-xs-12"><input type="checkbox" style="width:30px;height:15px;" @click="isga(index)">共享存储(SAN)(GB)</span><span class="col-md-3 col-xs-12"><input type="checkbox" style="width:30px;height:15px;" @click="isda(index)">网络存储(NAS)(GB)</span><span class="col-md-3 col-xs-12"><input type="checkbox" style="width:30px;height:15px;" @click="isfa(index)" >云存储(GB)</span></li>
                <li class=" col-sm-12" v-show="inusList[index].isgas" style="margin-top:15px;"><input type="number" min="1" v-model="inus[index].sna" id="Gx">&nbsp&nbsp共享存储(SAN)(GB)</li>
                <li class=" col-sm-12" v-show="inusList[index].isdas"><input type="number" min="1" v-model="inus[index].nsa" id="Ine">&nbsp&nbsp网络存储(NAS)(GB)</li>
                <li class=" col-sm-12" v-show="inusList[index].isfas"><input type="number" min="1" v-model="inus[index].cloudStorage">&nbsp&nbsp云存储(GB)</li>
            <li class="col-sm-12 creadIng"><span v-on:click="creadI(index)"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp添加存储</span><span @click="removeAs(index)"><i class="fa fa-minus" aria-hidden="true"></i>&nbsp删除存储</span></li>
        </ul>
    </div>-->
    <div class="resourcebtn-box" style="margin-top:20px;">
        <button class="jumpBnt" @click="jump()">
            跳过<i class="iconfont icon-jiantou4" style="margin-left:5px;"></i>
        </button>
        <button class="resourcebtn" @click="btn()">                                         
            下一步<i class="iconfont icon-xiayibu" style="margin-left:5px;"></i>
        </button>
    </div>    
    <div class="clear" style="margin-bottom:20px;"></div>
    
</div>
</div>
</template>
<style>
*{
    padding:0
}
.el-input{

}
.Pei ul li{
    line-height:40px;
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
    width:90px; 
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
</style>
<script>
import sds from '../../../../components/steps/steps.vue'
export default {
  name: 'ResourceGroup',
  data () {
    return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        qer:false,
        wer:false,
        ret:false,
        yingy:false,
        shuj:false,
        wangl:false,
        cunc:false,
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
    inusList:[{ isfas:false,
                isdas:false,
                isgas:false
             }],
   
    a:true,
            cores:[{
                    cores:"",
                    ghz:"",
                    ram:"",
                    computeMappingFactor:"",
                    localDisk:"",
                    os:"",
                    monthlyUsage:"",
                    dailyUsage:"",
                    num:"1",
            }],
       
       ines:[{
        num:"1",    
        coresq:"",
        ghzq:"",
        ramq:"",
        computeMappingFactorq:"", 
        localDiskq:"",
        osq:"",
        monthlyUsageq:"",
        dailyUsageq:""
      }],

       bandwidth:"",
       inbound:"",
       outbound:"",
       
     inus:[ 
         { 
          num:"1",
          sna:"",
          nsa:"",
          cloudStorage:""
        }
    ],

       appId:"",
       queryType:''
    }
  },
  mounted:function(){
      this.queryType = this.$route.query.type;
      //this.$layer.msg("注意：以下全为必填项");
      this.appId = this.$route.query.id;
      console.log("="+this.appId) 
   
  },
  methods:{
      lookw:function(){
        if(this.qer==false){
            this.qer=true
        }else{
            this.qer=false
        }
      },
      peiType:function(){
         if(this.regionter=="应用服务"){
             this.yingy = true;
              this.shuj = false;
             this.wangl = false;
             this.cunc = false;
         }else if(this.regionter=="数据库服务"){
             this.shuj = true;
             this.cunc = false;
             this.wangl = false;
             this.yingy = false;
         }else if(this.regionter=="网络服务"){
             this.wangl = true;
              this.shuj = false;
             this.yingy = false;
             this.cunc = false;
         }else if(this.regionter=="存储服务"){
             this.cunc =true;
             this.yingy = false;
             this.shuj = false;
             this.wangl =false;
         }
      },
      dialogFor:function(){
            alert(1)
      },
      lookq:function(){
        if(this.wer==false){
            this.wer=true
        }else{
            this.wer=false
        }
      },
      looke:function(){
        if(this.ret==false){
            this.ret=true
        }else{
            this.ret=false
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
            this.j++;
           console.log(j,index);
          console.log(this.cores);
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
      creadIn:function(index){
         
        this.s++;
         this.ines.push({
            num:"1",    
            coresq:"",
            ghzq:"",
            ramq:"",
            computeMappingFactorq:"", 
            localDiskq:"",
            osq:"",
            monthlyUsageq:"",
            dailyUsageq:""
        });
       
      },
      creadI:function(){
          console.log(this.inusList);
         this.inus.push(
             { 
                num:"1",
                sna:"",
                nsa:"",
                cloudStorage:""
            }
         );
         this.inusList.push({
             isfas:false,
             isdas:false,
             isgas:false
         });
        this.k++;
         
         
      },

    //   -----删除---

    removeAl:function(index){
        if(this.cores.length>1){
            this.cores.splice(index, 1); 
        }else{
             this.$layer.alert("注意：此为最后一个应用服务，不可删除");
        }
    },
    removeAs:function(index){
        if(this.inus.length>1){
            this.inus.splice(index, 1);
        }else{
            this.$layer.alert("注意：此为最后一个存储服务，不可删除");
        }
    },
    removeAe:function(index){
        if(this.ines.length>1){
            this.ines.splice(index, 1); 
        }else{
             this.$layer.alert("注意：此为最后一个数据库服务，不可删除");
        }
    },
    isga:function(index){
        //console.log(this.inusList[index].isgas)
        if(this.inusList[index].isgas==false){
            this.inusList[index].isgas=true;
        }else{
            this.inusList[index].isgas=false;
        };


    },
    isda:function(index){
         if(this.inusList[index].isdas==false){
            this.inusList[index].isdas=true;
        }else{
            this.inusList[index].isdas=false;
        }
    },
    isfa:function(index){
        if(this.inusList[index].isfas==false){
            this.inusList[index].isfas=true;
        }else{
            this.inusList[index].isfas=false;
        }
    },

    btn:function(){
           //console.log(this.os);
            // if(){

            //    this.$layer.alert("注意：您有未填写的项目，请填写完整");
            // }else{
            //this.appId = sessionStorage.getItem("appId"); 

            // let valuely = $("#sele").val();
            // let valueey = $("#selet").val();
            // console.log(this.appId);
            let obj ={
                    "appId": this.appId,
                    "appServer": this.cores,
                    "dbServer": this.ines,
                    "network": {
                        "bandwidth": this.bandwidth,
                        "inbound": this.inbound,
                        "outbound": this.outbound
                    },
                    "storage":this.inus

                   
              };
            console.log(obj)
            this.$this.post('/broker/app/resource/group',obj).then((res)=>{
                    console.log(res+"chengg");
                     //this.$router.push({path:'/login'});/planQuestion
                     if(this.queryType=='compare'){
                        this.$router.push({path:'/compareQuestion',query:{type:this.queryType,id:this.appId}});
                     }else{
                        this.$router.push({path:'/planQuestion',query:{type:this.queryType,id:this.appId}});
                     }
                     
                     },(err)=>{
                         console.log("不好意思")
                     });
               
            
                      
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


