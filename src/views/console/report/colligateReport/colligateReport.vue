<template>
<div class="total">
<div class="total-header not-print">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback">综合报告</p>
</div>
    <child index="7" start="6" :type="$route.query.type" :id="$route.query.id"></child>
    <div class="tites" id="pdf-wrap" style="background: #f8fafd;padding: 17px 23px;">
        <div class="from-headers">
            <div class="from-head" style="color:#fff;">
                <div class="from-head-left" style="float:left;padding-left:2%"><img src="../../../../assets/logoers.png" alt=""><br>您的专属服务顾问</div>
                <div class="from-head-right" style="float:right;padding-right:2%">{{information.proname}} 上云分析综合报告</div>
            </div>
            
            <div class="colligate-heade">
                <button class="pointersd buttHover" @click="pointers()"><i class="iconfont icon-dayinji1" style="margin-right: 2px !important;"></i>打印</button>
                <button class="exportBtn buttHover" v-on:click="getPdf()"><!--<img src="../../../../assets/report/export.png" style="width:16px;margin-right:5px;" alt=""><--><i class="iconfont icon-icon-" style="margin-right:3px"></i>导出</button>
                
            </div>
            <div class="colligateReport" id="titBody" style="background:#fff;padding:20px;">
                <!-- 基本信息 -->
                <div class="colligate-title">
                   <!--<img src="../../../../assets/report/report-information.png" alt="">-->
                    <i class="iconfont icon-jibenxinxi main-color" style="color:#da121a"></i>基本信息
                </div>

                <div class="colligate-list">
                    <table class="information-table">
                        <thead>
                            <tr>
                                <th>企业名称</th>
                                <th>分析人</th>
                                <th>云分析名称</th>
                                <th>负载名称</th>
                                <th>工作负载类型</th>
                                <th>工作负载架构</th>
                                <th>创建时间</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{information.tenant}}</td>
                                <td>{{information.realname}}</td>
                                <td>{{information.proname}}</td>
                                <td>{{information.appname}}</td>
                                <td>{{information.protypeStr}}</td>
                                <td>{{information.frametypeStr}}</td>
                                <td>{{information.createDt}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!--拓扑图-->
                <div class="colligate-title">
                    <i class="iconfont icon-erji-wangluotuopu main-color" style="color:#da121a"></i>拓扑图
                </div>
                <div id="mynetwork" class="graph"></div>
                <!-- 云规划报告 -->
                <div class="colligate-title">
                    <!-- <img src="../../../../assets/report/report-plan.png" alt=""> -->
                    <i class="iconfont icon-zengshoushuju main-color" style="color:#da121a"></i>云规划报告详情
                </div>
                <div class="colligate-list">
                    <div class="legend-box">
                        <div class="legend">    
                            <div class="legend-list">
                                <span class="legend-block legend-high"></span>
                                高
                            </div> 
                            <div class="legend-list">
                                <span class="legend-block legend-heshi"></span>
                                合适
                            </div>
                            <div class="legend-list">
                                <span class="legend-block legend-yib"></span>
                                一般
                            </div>
                            <div class="legend-list">
                                <span class="legend-block legend-di"></span>
                                低
                            </div>
                        </div>
                        <div class="result-echarts" id="main"></div>
                    </div>
                    <div class="echarts-desc">工作负载分布图</div>
                        <div class="row">
                            <div class="col-md-3">
                                <p class="appname">
                                    <span>{{result.proname}}</span>
                                    <span>{{result.appname}}</span>
                                </p>
                            </div>
                            <div class="col-md-3 clould-result" v-for="item in resultlist">
                                <p class="score" :class="item.moduleId==1?'score-qualitative':item.moduleId==2?'score-profit':'score-affinity'">
                                    <span class="score-name" v-if="item.moduleId!=1">{{item.moduleName}}</span>
                                    <span class="score-name" v-else>{{item.moduleName}}</span>
                                    <span class="score-val" v-if="item.moduleId!=1">{{item.result}}</span>
                                    <span class="score-val" v-else>{{JSON.parse(item.result).sname}}</span>
                                </p>
                            </div>
                        </div>
                        <div class="clould-desc" v-html="desc"></div>
                    </div> 
                    <!-- 云选型 -->
                    <div class="colligate-title">
                        <i class="iconfont icon-bengchefenleijiageguanli" style="color:#da121a"></i>&nbsp云选型报告详情
                    </div>
                    <div class="colligate-list">
                        <table class="table-score colligate-tables">
                            <thead>
                                <tr>
                                    <th>云供应商</th>
                                    <th>分数</th>
                                    <th>区域价格范围</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in compareResultList">
                                    <td>{{item.serverName}}</td>
                                    <td>{{item.scope}}</td>
                                    <td>
                                        <a target="_blank" style="color:rgb(51, 122, 183) !important;" :href="item.sid==7?'https://ecs-buy.aliyun.com/':item.sid==8?'https://aws.amazon.com/cn/pricing/?nc2=h_ql_pr&awsm=ql-3':item.sid==9?'https://www.azure.cn/pricing/overview/':item.sid==10?'https://buy.cloud.tencent.com/price/cvm/calculator':item.sid==11?'https://portal.huaweicloud.com/pricing#ecs':item.sid==12?'https://www.qingcloud.com/pricing#/InstancesKVM':''"><i class="iconfont icon-jiagechaxun" style="margin-right:5px;"></i>查看价格</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <!--<table class="table-score resourGroup-table colligate-tables" v-if="reslist==true">
                            <thead v-if="appServer.length>0||dbServer.length>0||network!=null||storage.length>0||cdns.length>0">
                                <tr>
                                    <th>数量</th>
                                    <th>资源</th>
                                    <th>规格</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in appServer">
                                    <td>{{item.num}}</td>
                                    <td>应用服务</td>
                                    <td>
                                        <p><span class="labelRed">{{item.cores}}</span>vCPU</p>
                                        <p><span class="labelRed">{{item.ghz}}</span>处理器主频（GHZ）</p>
                                        <p><span class="labelRed">{{item.ram}}</span>内存（GB）</p>
                                        <p><span class="labelRed">{{item.localDisk}}</span>系统盘（GB）</p>
                                        <p><span class="labelRed">{{item.os}}</span>操作系统</p>
                                        <p><span class="labelRed">{{item.computeMappingFactor}}</span>资源平均利用率</p>
                                    </td>
                                </tr>
                                <tr v-for="db in dbServer">
                                    <td>{{db.num}}</td>
                                    <td>数据库服务</td>
                                    <td>
                                        <p><span class="labelRed">{{db.cores}}</span>vCPU</p>
                                        <p><span class="labelRed">{{db.ghz}}</span>处理器主频（GHZ）</p>
                                        <p><span class="labelRed">{{db.ram}}</span>内存（GB）</p>
                                        <p><span class="labelRed">{{db.localDisk}}</span>系统盘（GB）</p>
                                        <p><span class="labelRed">{{db.os}}</span>操作系统</p>
                                        <p><span class="labelRed">{{db.computeMappingFactor}}</span>资源平均利用率</p>
                                    </td>
                                </tr>
                                <tr v-if="network!=null">
                                    <td></td>
                                    <td>网络存储</td>
                                    <td>
                                        <p><span class="labelRed">{{network.bandwidth}}</span>带宽（GB/月）</p>
                                        <p><span class="labelRed">{{network.inbound}}</span>入站（GB/月）</p>
                                        <p><span class="labelRed">{{network.outbound}}</span>出站（GB/月）</p>
                                    </td>
                                </tr>
                                <tr v-for="stro in storage">
                                    <td>{{stro.num}}</td>
                                    <td>存储</td>
                                    <td>
                                        <p><span class="labelRed">{{stro.sna}}</span>共享存储（SAN）（GB）</p>
                                        <p><span class="labelRed">{{stro.nsa}}</span>网络存储（NAS）（GB）</p>
                                        <p><span class="labelRed">{{stro.cloudStorage}}</span>云存储（GB）</p>
                                    </td>
                                </tr>
                                <tr v-for="cdn in cdns">
                                    <td></td>
                                    <td>CDN</td>
                                    <td>
                                        <p><span class="labelRed">{{cdn.cse.name}}</span>云厂商</p>
                                        <p><span class="labelRed">{{cdn.bandwidth}}</span>带宽</p>
                                        <p><span class="labelRed">{{cdn.startDate}}</span>购买开始时间</p>
                                        <p><span class="labelRed">{{cdn.expireDate}}</span>购买结束时间</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>-->
                        <div class="compare-cate" style="font-weight:normal;"><i class="iconfont icon-qitashuju main-color"></i>云供应商标准选型差异</div>
                        <div>
                            <p class="explain">
                                <span><i class="iconfont icon-yuan high-ratio" style="margin-right:3px;"></i>高匹配</span>
                                <span><i class="iconfont icon-yuan low-ratio" style="margin-right:3px;"></i>低匹配</span>
                            </p>
                        </div>
                        <div class="clear"></div>
                        <div id="boxinnerHtml" ></div>
                        <div class="difference-box" :class="isClass==true?'allheight':''" id="difference-box" style="margin-bottom:20px;" >
                            <table class="comdetails-table">
                                <thead>
                                    <tr>
                                        <th class="obliqueline" colspan="3">
                                            <span class="clould-profirm">云供应商</span>
                                            <span class="clould-details">场景</span>
                                        </th>
                                        <th v-for="firm in confirm">{{firm.service}}</th>
                                    </tr>
                                </thead>
                                <tbody v-for="(item,index) in details">
                                    <tr class="comdetails-tab-title">
                                        <td :colspan="length">{{index}}</td>
                                    </tr>
                                    <tr class="comdetails-tab-list" v-for="list in item">
                                        <td style="width:10%;"></td>
                                        <td class="textleft">{{list.feature}}</td>
                                        <td>{{list.servers[0].compareopt}}</td>
                                        <td v-for="aa in list.servers">
                                            <i class="iconfont icon-yuan" :class="aa.type==1?'high-ratio':'low-ratio'"></i>
                                            <!--<img v-if="aa.type==1" src="../../../../assets/compare/compare-right.png" alt="">
                                            <img v-else src="../../../../assets/compare/compare-cha.png" alt="">-->
                                        </td>
                                        <!--aa.type=1是有 0 是没有 -->
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- 云设计 -->
                    <div class="colligate-title">
                        <i class="iconfont icon-peizhiguanli" style="color:#da121a"></i>&nbsp云设计配置信息详情
                    </div>
                    <table class="colligate-design" v-if="designdata.appServer.length>0">
                        <thead>
                            <tr>
                                <td style="width:15%;">角色</td>
                                <td style="width:15%;">类型</td>
                                <td style="width:23.3%;">规格</td>
                                <td style="width:23.3%;">当前配置</td>
                                <td style="width:23.3%;">云配置（推荐）</td>
                            </tr>              
                        </thead>
                        <tbody v-for="item in designdata.appServer">
                            <tr>
                                <td rowspan="5">应用服务</td>
                                <td rowspan="5">{{item.typeLevel==18?'低配':'高配'}}</td>
                                <td>（v）CPU</td>
                                <td>{{item.resServer==null?'--':item.resServer.cores}}</td>
                                <td>{{item.cpu}}</td>
                            </tr>
                            <tr>
                                <td>处理器主频（GHZ）</td>
                                <td>{{item.resServer==null?'--':item.resServer.ghz}}</td>
                                <td>{{item.ghz==undefined?'--':''}}</td>
                            </tr>
                            <tr>
                                <td>内存（GB）</td>
                                <td>{{item.resServer==null?'--':item.resServer.ram}}</td>
                                <td>{{item.ram}}</td>
                            </tr>
                            <tr>
                                <td>系统盘</td>
                                <td>{{item.resServer==null?'--':item.resServer.localDisk}}</td>
                                <td>{{item.localDisk}}</td>
                            </tr>                            
                            <tr>
                                <td>操作系统</td>
                                <td>{{item.resServer==null?'--':item.resServer.osType.name}}</td>
                                <td>{{item.osType.name}}</td>
                            </tr>
                            <!--<tr>
                                <td>资源平均利用率</td>
                                <td>cccc</td>
                                <td></td>
                            </tr>-->
                        </tbody>
                    </table>
                    <table class="colligate-design" v-if="designdata.dbServer.length>0">
                        <thead>
                            <tr>
                                <td style="width:15%;">角色</td>
                                <td style="width:15%;">类型</td>
                                <td style="width:23.3%;">规格</td>
                                <td style="width:23.3%;">当前配置</td>
                                <td style="width:23.3%;">云配置（推荐）</td>
                            </tr>              
                        </thead>
                        <tbody v-for="item in designdata.dbServer">
                            <tr>
                                <td rowspan="5">数据库服务</td>
                                <td rowspan="5">{{item.typeLevel==18?'低配':'高配'}}</td>
                                <td>（v）CPU</td>
                                <td>{{item.resServer==null?'--':item.resServer.cores}}</td>
                                <td>{{item.cpu}}</td>
                            </tr>
                            <tr>
                                <td>处理器主频（GHZ）</td>
                                <td>{{item.resServer==null?'--':item.resServer.ghz}}</td>
                                <td>{{item.ghz==undefined?'--':''}}</td>
                            </tr>
                            <tr>
                                <td>内存（GB）</td>
                                <td>{{item.resServer==null?'--':item.resServer.ram}}</td>
                                <td>{{item.ram}}</td>
                            </tr>
                            <tr>
                                <td>系统盘</td>
                                <td>{{item.resServer==null?'--':item.resServer.localDisk}}</td>
                                <td>{{item.localDisk}}</td>
                            </tr>                            
                            <tr>
                                <td>操作系统</td>
                                <td>{{item.resServer==null?'--':item.resServer.osType.name}}</td>
                                <td>{{item.osType.name}}</td>
                            </tr>
                            <!--<tr>
                                <td>资源平均利用率</td>
                                <td>cccc</td>
                                <td></td>
                            </tr>-->
                        </tbody>
                    </table>
                    <table class="colligate-design" v-if="designdata.cdns.length>0">
                        <thead>
                            <tr>
                                <td style="width:15%;">角色</td>
                                <td style="width:15%;">类型</td>
                                <td style="width:23.3%;">规格</td>
                                <td style="width:23.3%;">当前配置</td>
                                <td style="width:23.3%;">云配置（推荐）</td>
                            </tr>              
                        </thead>
                        <tbody v-for="item in designdata.cdns">
                            <tr>
                                <td rowspan="6">CDN</td>
                                <td rowspan="6">--</td>
                                <td>带宽</td>
                                <td>{{item.bandwidth==null?'--':item.bandwidth}}</td>
                                <td>--</td>
                            </tr>
                            <tr>
                                <td>云厂商</td>
                                <td>{{item.cse==null?'--':item.cse.name}}</td>
                                <td>--</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="colligate-design" v-if="designdata.network!=null">
                        <thead>
                            <tr>
                                <td style="width:15%;">角色</td>
                                <td style="width:15%;">类型</td>
                                <td style="width:23.3%;">规格</td>
                                <td style="width:23.3%;">当前配置</td>
                                <td style="width:23.3%;">云配置（推荐）</td>
                            </tr>              
                        </thead>
                        <tbody>
                            <tr>
                                <td rowspan="6">网络存储</td>
                                <td rowspan="6">--</td>
                                <td>入站（Mbps/月）</td>
                                <td>{{designdata.network.inbound==null?'--':designdata.network.inbound}}</td>
                                <td>--</td>
                            </tr>
                            <tr>
                                <td>出站（Mbps/月）</td>
                                <td>{{designdata.network.outbound==null?'--':designdata.network.outbound}}</td>
                                <td>--</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="colligate-design" v-if="designdata.storage.length>0">
                        <thead>
                            <tr>
                                <td style="width:15%;">角色</td>
                                <td style="width:15%;">类型</td>
                                <td style="width:23.3%;">规格</td>
                                <td style="width:23.3%;">当前配置</td>
                                <td style="width:23.3%;">云配置（推荐）</td>
                            </tr>              
                        </thead>
                        <tbody v-for="item in designdata.storage">
                            <tr>
                                <td rowspan="6">存储存储</td>
                                <td rowspan="6">--</td>
                                <td>共享存储（SAN）（GB）</td>
                                <td>{{item.sna==null?'--':item.sna}}</td>
                                <td>--</td>
                            </tr>
                            <tr>
                                <td>网络存储（NAS）（GB）</td>
                                <td>{{item.nsa==null?'--':item.nsa}}</td>
                                <td>--</td>
                            </tr>
                            <tr>
                                <td>云存储（GB）</td>
                                <td>{{item.cloudStorage==null?'--':item.cloudStorage}}</td>
                                <td>--</td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- 上云分析建议  -->
                    <div class="colligate-title">
                        <i class="iconfont icon-pingjiabaogao main-color"></i>上云分析建议
                    </div>
                    <!--投资回报率-->
                    <div class="colligateInvest">
                        <p class="advise-title"><i class="iconfont icon-touzizuhe main-color" style="font-size:20px !important;"></i>投资回报率</p>
                        <div class="colligate-list" style="padding-left:2em;">
                            <table class="Invest-table">
                                <thead>
                                    <tr>                   
                                        <td rowspan="2">您的预算</td>
                                        <td align="center" valign="middle" colspan="4">花销</td>
                                        <td rowspan="2">投资回报率</td>
                                    </tr>
                                    <tr class="Invest-table-headtwo">
                                        <td>云厂商</td>
                                        <td>规格</td>
                                        <td>费用参考</td>
                                        <td>京玉折扣价</td>
                                    </tr>                
                                </thead>
                                <tbody>
                                    <tr>
                                        <td :rowspan="pricelist.length+1">
                                            <p :class="budgetprice==''?'Invest-table-color':''" style="cursor:pointer;" v-if="isbudget==false" v-on:click="budget()">{{budgetprice==''?'请输入您的预算':budgetprice}}<span style="color:#666;margin-left:3px;"><i class="iconfont icon-bianji"></i></span></p>
                                            <p class="inputbudget" v-if="isbudget==true"><input type="number" v-model="budgetprice" v-on:blur="budgetYes()"></p>元
                                        </td>
                                        <td>{{pricelistOne.sname}}</td>
                                        <td>
                                            <div class="invest-size">
                                                <span class="Invest-table-color">{{pricelistOne.cores}}</span><br>（v）CPU
                                            </div>
                                            <div class="invest-size">
                                                <span class="Invest-table-color">{{pricelistOne.ram}}</span><br>内存（GB）
                                            </div>
                                        </td>
                                        <td>{{pricelistOne.cloudPrice==0?'原厂在线暂不支持':'￥'+pricelistOne.cloudPrice}}</td>
                                        <td>{{pricelistOne.csbPrice==0?'线下联系':'￥'+pricelistOne.csbPrice}}</td>
                                        <td :rowspan="pricelist.length+1"><p class="Invest-table-color">{{priceRate}}<span v-if="priceRate!=''">%</span></p></td>
                                    </tr>
                                    <tr v-for="item in pricelist">
                                        <td>{{item.sname}}</td>
                                        <td>
                                            <div class="invest-size">
                                                <span class="Invest-table-color">{{item.cores}}</span><br>（v）CPU
                                            </div>
                                            <div class="invest-size">
                                                <span class="Invest-table-color">{{item.ram}}</span><br>内存（GB）
                                            </div>
                                        </td>
                                        <td>{{item.cloudPrice==0?'原厂在线暂不支持':'￥'+item.cloudPrice}}</td>
                                        <td>{{item.csbPrice==0?'线下联系':'￥'+item.csbPrice}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--场景占比分析-->
                    <div class="colligateBuy">
                        <p class="advise-title"><i class="iconfont icon-equipments main-color"></i>意向场景占比分析</p>
                        <div style="padding-left:2em;">
                            <div class="colligateBuy-echarts">
                                <div class="colligateBuy-type" id="colligateBuy-type" style="width:100%;height:780px;"></div>
                            </div>
                        </div>                        
                    </div>
                    <!--<div class="advise-box">-->
                    <div class="system-advise">
                        <p class="advise-title"><i class="iconfont icon-gongnengjianyi main-color"></i>上云分析CloudBroker²评估建议</p>
                        <p class="advise-content" v-if="Issystem==false">{{system}}
                            <span style="cursor:pointer;margin-left:20px;" v-on:click="systemEdit()"><i class="iconfont icon-bianji"></i><span style="color:#2eabf5;">编辑</span></span>
                        </p>
                        <div class="advise-system-input" v-show="Issystem">
                            <textarea class="advise-system-text" v-model="system">{{system}}</textarea>
                        </div>
                        <div class="system-btn" v-show="Issystem">
                            <button class="system-no" v-on:click="systemSave('no')"><i class="iconfont icon-shanchuguanbicha2"></i>取消</button>
                            <button class="system-yes" v-on:click="systemSave('yes')"><i class="iconfont icon-duihao2"></i>保存</button>                    
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="self-advise">
                        <p class="advise-title"><i class="iconfont icon-jianyi main-color"></i>上云分析自我评估建议</p>
                        <div style="padding-left:2em;">
                            <textarea class="colligate-advise" placeholder="请输入上云分析自我评估建议" v-model="advise">
                            </textarea>
                            <!--:class="advise==''?'advise-bg':''"<span class="not-advise" v-if="advise==''">暂无评估</span>-->
                        </div>                
                    </div>

                    <!--</div>-->

                    <div class="pagefooter">
                        <div class="page-bigline"></div>
                        <div class="page-smallline"></div>
                        <div class="page-left">
                            <img src="../../../../assets/login-logo.png" alt="">
                            <p class="page-p">联系电话：400-828-7308</p>
                            <p class="page-p">邮箱地址：Help@csb-china.com</p>
                            <p class="page-p">官网地址：www.csb-china.com</p>
                        </div>
                        <div class="page-right">
                            <img style="width:80px;height:80px;" src="../../../../assets/report/weixin.jpg" alt="">
                            <p class="page-p">您的专属服务顾问</p>
                        </div>
                        <div class="clear"></div>
                    </div>

                </div>

            </div>
            
        </div>
     
         
</div>
</template>

<object id="factory" style="display:none" viewastext classid="clsid:1663ed61-23eb-11d2-b92f-008048fdd814" codebase="ScriptX.cab#Version=5,60,0,360"></object>

<script>
import child from '../../../../components/steps/steps.vue'
import '../colligateReport/colligateReport.css'
import echarts from 'echarts'
import html2Canvas from '../../../../components/pdf/html2canvas.js'
import jsPDF from 'jspdf/dist/jspdf.debug.js'
import vis from "vis/dist/vis.min.js"
// import "vis/dist/vis.min.css"

export default{
    name:'colligateReport',
    data(){
        return {
            inds:0,
            charts:'',
            opiniondata:[],
            appId:'',
            result:{},
            queryType:'',
            resultlist:[],
            desc:'',
            compareResultList:[],
            appServer:[],
            dbServer:[],
            cdns:[],
            network:[],
            storage:[],
            information:{},
            advise:'',
            reslist:false,
            isclick:'',
            details:[],
            confirm:[],
            length:'',
            system:'',
            Issystem:false,
            systemold:'',
            isClass:false,
            designdata:{
                appServer:[],
                dbServer:[],
                cdns:[],
                network:[],
                storage:[]
            },
            graphnodes:[
                {id: 1, label: '公网', shape: 'image', image:'/src/assets/report/publicnetwork.png',group:1,color:{border:'#da121a'}},
            ],
            graphedges:[],
            appfrom:[],
            container:'',
            graphdata:{},
            graphoptions:{},
            dbScaleservies:[],
            dbScaleName:[],
            dbScaleType:[],
            pricelist:[],
            pricelistOne:[],
            isbudget:false,
            budgetprice:'',
            priceRate:''
        }
    },
    updated:function(){
        // if(this.inds = 1){
        //     this.isClass = false;
        // }else if(this.inds = 0){
        //      this.isClass = false;
        // }
    },
    mounted:function(){
        this.graph(this.$route.query.id,1);
        if(this.graphnodes.length>1){
            this.graph(this.$route.query.id,2);
        }        
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
                },
                //image:'aa.jpg'
            },
            interaction:{
                zoomView:false,
                hover: false,//鼠标移过后加粗该节点和连接线
                dragNodes:false,//是否能拖动节点
                dragView:false,//是否能拖动画布
                selectConnectedEdges:false,//选择节点后是否显示连接线
                hoverConnectedEdges:false,//鼠标滑动节点后是否显示连接线
                selectable:false,//是否可以点击选择
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
        };
        this.queryType = this.$route.query.type;
        this.appId = this.$route.query.id;
        this.information.realname = JSON.parse(sessionStorage.getItem("account")).realname;
        this.information.tenant = JSON.parse(sessionStorage.getItem("account")).tenant;
        this.getdesign();        
        this.getplan();//云规划        
        this.getdata();// 云选型
        this.compareDiffer();//云选型做题记录
        this.gettype();//获取类型
        this.dbScale();//数据库服务场景占比分析
        this.getPrice();//获取价格列表
    },
    methods:{
        budget:function(){//预算
            this.isbudget==false?this.isbudget=true:this.isbudget=false;
        },
        budgetYes:function(){
            this.isbudget = false;
            if(this.budgetprice!=''){
                let obj = {
                    appid:[this.appId],
                    budget:this.budgetprice
                };
                this.$this.post('/broker/price/roi',JSON.stringify(obj)).then((response)=>{
                    if(response.data.code==1){
                        this.priceRate = response.data.data.roi;
                    }
                }).catch((error)=>{})
            }
            
        },
        getPrice:function(){
            let obj = {"ids":[]};
            this.$this.post('/broker/price/purchasing/list/'+this.appId,JSON.stringify(obj)).then((response)=>{
                //console.log('----',response); 
                this.pricelistOne = response.data.data[0];
                for(let i=1;i<response.data.data.length;i++){
                    this.pricelist.push(response.data.data[i]);
                }
            }).catch((error)=>{
            })
        },
        gettype:function(){
            this.$this.get('/broker/prop/typedata/esc-csb/-1').then((response)=>{
                //console.log('----',response);
                for(let i=0;i<response.data.data.length;i++){
                    this.dbScaleType.push(response.data.data[i].name);
                }
            }).catch((error)=>{
            })
        },
        dbScale:function(){
            let str = {"appids":[this.appId]};
            this.$this.post('/broker/price/purchasin/scene',JSON.stringify(str)).then((response)=>{
                for(let i=0;i<response.data.data.length;i++){
                    this.dbScaleservies.push({
                        name: response.data.data[i].vmType,
                        type: 'bar',
                        stack: '总量',
                        data: [[response.data.data[i].num,response.data.data[i].sceneType]]
                    });
                    this.dbScaleName.push(response.data.data[i].vmType);
                }  
                this.$nextTick(function() {
                    this.dbScaleCanvas('colligateBuy-type');
                })
            }).catch((error)=>{})
        },
        dbScaleCanvas:function(dom){
            this.charts = echarts.init(document.getElementById(dom));
            this.charts.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: this.dbScaleName,
                    top:'10',
                    left:'0'
                },
                color:['#F7A72C', '#da121a','#E15F2D','#55D0C5','#6380D3','#8261E0','#F7A72C','#DA121B','#E15E2D'],
                grid: {
                    left: '2%',
                    right: '8%',
                    bottom: '2%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'value',
                    name:'数量',
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    axisLabel:{
                        color:'#333'                   
                    },
                    nameTextStyle:{
                        color:'#333'
                    },
                },
                yAxis: {
                    type: 'category',
                    name:'类型',
                    data: this.dbScaleType,
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    axisLabel:{
                        color:'#333'                   
                    },
                    nameTextStyle:{
                        color:'#333'
                    },
                },
                series: this.dbScaleservies
            })
        },
        getplan:function(){
            this.$this.get('/broker/result/plan/'+this.appId+'').then((response)=>{
                //console.log('结果',response);
                let qinhe,shouyi;   
                this.result =  response.data.data; 
                this.information.proname = response.data.data.proname;
                this.information.appname = response.data.data.appname;
                this.information.protypeStr = response.data.data.protypeStr;
                this.information.frametypeStr = response.data.data.frametypeStr;
                this.information.createDt = response.data.data.createDt;
                for(let i=0;i<response.data.data.appResults.length;i++){
                    if(response.data.data.appResults[i].moduleId==1||response.data.data.appResults[i].moduleId==2||response.data.data.appResults[i].moduleId==3){
                        this.resultlist.push(response.data.data.appResults[i]);
                    }
                    if(response.data.data.appResults[i].moduleId==2){
                        shouyi = response.data.data.appResults[i].result;
                    }
                    if(response.data.data.appResults[i].moduleId==3){
                        qinhe = response.data.data.appResults[i].result;
                    }
                    if(response.data.data.appResults[i].moduleId==1){
                        this.system = JSON.parse(response.data.data.appResults[i].result).advice;
                        this.systemold = JSON.parse(response.data.data.appResults[i].result).advice;
                        this.desc = JSON.parse(response.data.data.appResults[i].result).description;
                        this.isclick = JSON.parse(response.data.data.appResults[i].result).id;
                    }
                }
                //  if( this.isclick==1 && this.isclick==2 ){
                //     this.$layer.msg(" 因在云规划后不属于公有云服务类型，所以后台将助您直接进入综合报告。");
                //  }
                this.opiniondata =  [{
                    name:response.data.data.appname,
                    value:[shouyi,qinhe]
                }] 
                this.$nextTick(function() {
                    this.drawPie('main')
                })
                //console.log(this.opiniondata);         
            }).catch((error)=>{
            }) 
        },
        compareDiffer:function(){
            this.$this.get('/broker/compare/selected/feature/'+this.appId+'').then((response)=>{
                this.details =  response.data.data;
                for(let variable  in this.details){   //variable 为属性名
                    this.confirm = this.details[variable][0].servers;
                }
                this.length = this.confirm.length+3;
            }).catch((error)=>{})
        },
        graph:function(appid,serversid){//拓扑图
            this.$this.get('/broker/design/list/'+appid+'/'+serversid+'/17').then((response)=>{
                let index = this.graphnodes.length+1;
                let arr = [];
                if(serversid==1){//应用服务
                    for(let i=0;i<response.data.data.length;i++){
                        this.graphnodes.push({id:index+i,label:'应用服务'+(i+1),shape:'image',image:'/src/assets/report/appnetwork.png',group:2});
                        this.appfrom.push(index+i);
                        this.graphedges.push({from: 1, to:index+i,label: '应用与公网\n用户交互',font: {align: 'horizontal',size:10,}});
                    }
                    this.graph(this.$route.query.id,2);
                }else{//数据库服务
                    for(let i=0;i<response.data.data.length;i++){
                        this.graphnodes.push({id:index+i,label:'数据库服务'+(i+1),shape:'image',image:'/src/assets/report/dbnetwork.png',group:3});
                        if(this.appfrom.length==0){                            
                            this.graphedges.push({from:1,to:index+i,dashes:true,label: '数据库与公\n网用户交互',font: {align: 'horizontal',size:10,}});
                        }else{
                            for(let n=0;n<this.appfrom.length;n++){
                                this.graphedges.push({from:this.appfrom[n],to:index+i,label: '应用与数\n据交互',font: {align: 'middle',size:10,}});
                            }  
                        }                                              
                    }
                }
                // if(this.graphnodes.length>3){
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
                // }
                
            }).catch((error)=>{})
        },
        goBack:function(link){
            if(link=='comparelist'){
                this.$router.push({path:'/compareList'});
            }else if(link=='comparequestion'){
                this.$router.push({path:'/compareQuestion',query:{id:this.appId,type:this.queryType}});
            }
        },
        systemEdit:function(){
            this.Issystem = true;
        },
        systemSave:function(dom){
            this.Issystem = false;
            if(dom=='no'){
                this.system = this.systemold;
            }
        },
        getdesign:function(){
            this.$this.get('/broker/design/list/'+this.appId).then((response)=>{
                //console.log('aaaa',response.data.data);
                this.designdata.appServer = response.data.data.designAppServer;
                this.designdata.dbServer = response.data.data.designAppdb;
                this.designdata.network = response.data.data.network;
                this.designdata.storage = response.data.data.storage;
                this.designdata.cdns = response.data.data.cdns;
                //console.log('aaa',this.designdata.appServer);
            }).catch((error)=>{

            })
        },
        drawPie:function(id){
            //console.log(this.opiniondata);
            this.charts = echarts.init(document.getElementById(id));
            this.charts.setOption({
                //backgroundColor:'#ccc',
                title: {
                    text: '',
                    textStyle:{
                        color:'#333333',
                        fontWeight:'bold',
                        fontSize:'15'
                    },
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    axisPointer: {
                        show: true,
                        type: 'cross',
                        lineStyle: {
                            type: 'dashed',
                            width: 1
                        }                        
                    },
                    formatter: function(obj) {
                        if (obj.componentType == "series") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                                obj.name +
                                '</div>' +
                                '<span>' +
                                '云亲和度' +
                                '</span>' +
                                ' : ' + obj.data.value[0]  +
                                '<br/>' +
                                '<span>' +
                                '云收益度' +
                                '</span>' +
                                ' : ' + obj.data.value[1] 
                        }
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'bottom',
                        formatter: function(params) {
                            return params.name
                        }
                    },
                    emphasis: {
                        show: true,
                        position: 'bottom',
                    }
                },
                xAxis: {
                    name: '云收益度',
                    type: 'value',
                    scale: true,
                    min:0,
                    max:100,
                    axisLabel: {
                        interval:20
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#c2c2c2'
                        }
                    },
                    nameTextStyle:{
                        color:'#333'
                    }
                },
                yAxis: {
                    name: '云亲和度',
                    type: 'value',
                    scale: true,
                    min:0,
                    max:100,
                    axisLabel: {
                        interval:20
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#c2c2c2'
                        }
                    },
                    nameTextStyle:{
                        color:'#333'
                    }
                },
                series: [{
                    type: 'scatter',
                    data: this.opiniondata,
                    symbolSize: 13,
                    markLine: {
                        lineStyle: {
                            normal: {
                                color: "#626c91",
                                type: 'solid',
                                width: 1,
                            },
                            emphasis: {
                                color: "#d9def7"
                            }
                        },
                        data: [{
                            xAxis: 50,
                            name: '',
                            itemStyle: {
                                normal: {
                                    color: "#b84a58",
                                }
                            }
                        }, {
                            yAxis: 50,
                            name: '',
                            itemStyle: {
                                normal: {
                                    color: "#b84a58",
                                }
                            }
                        }]
                    },
                    markArea: {
                        silent: true,
                        data: [
                            [{
                                name: '',//合适
                                itemStyle: {
                                    normal: {
                                        color: '#e7faff'
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideTopLeft',
                                        fontStyle: 'normal',
                                        color: "#409EFF",
                                        fontSize: 20,
                                    }
                                },
                                coord: [50, 50],
                            }, {
                                coord: [Number.MAX_VALUE, 0],
                            }],
                            [{
                                name: '',//低
                                itemStyle: {
                                    normal: {
                                        color: '#efefef',
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideTopRight',
                                        fontStyle: 'normal',
                                        color: "#409EFF",
                                        fontSize: 20,
                                    }
                                },
                                coord: [0, 0],
                            }, {
                                coord: [50, 50],
                            }],
                            [{
                                name: '',//高
                                itemStyle: {
                                    normal: {
                                        color: '#ffe9ea',
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideBottomLeft',
                                        fontStyle: 'normal',
                                        color: "#409EFF",
                                        fontSize: 20,
                                    }
                                },
                                coord: [50, 50],
                            }, {
                                coord: [Number.MAX_VALUE, Number.MAX_VALUE],
                            }],
                            [{
                                name: '',//一般
                                itemStyle: {
                                    normal: {
                                        color: '#fff1e2',
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideBottomRight',
                                        fontStyle: 'normal',
                                        color: "#409EFF",
                                        fontSize: 20,
                                    }
                                },
                                coord: [0, Number.MAX_VALUE],
                            }, {
                                coord: [50, 50],
                            }],
                        ]
                    }
                }]
                //
            })
        },
        getdata:function(){
            this.$this.get('/broker/app/resource/group/'+this.appId+'').then((response)=>{
                if(response.data.data.appServer.length>0||response.data.data.dbServer.length>0||response.data.data.network!=null||response.data.data.storage.length>0||response.data.data.cdns.length>0){
                    this.reslist = true;
                }
                this.appServer = response.data.data.appServer;
                this.dbServer = response.data.data.dbServer;
                this.network = response.data.data.network;
                this.storage = response.data.data.storage;
                this.cdns = response.data.data.cdns;
            }).catch((error)=>{})
            this.$this.get('/broker/compare/result/'+this.appId+'').then((response)=>{
                this.compareResultList = response.data.data.datas;
                // if(response.data.data.res!=null){
                //     this.reslist = true;
                // }
                // this.appServer = JSON.parse(response.data.data.res.appServer);
                // this.dbServer = JSON.parse(response.data.data.res.dbServer);
                // this.network = JSON.parse(response.data.data.res.network);
                // this.storage = JSON.parse(response.data.data.res.storage);
                //console.log('----',this.appServer); 
            }).catch((error)=>{})
        },
       getPdf:function(){
            let date = new Date();
            let time = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
            var pdf = new jsPDF('p', 'pt','a4');
            pdf.internal.scaleFactor = 2.5;//可以调整缩放比例
            var options = {
                pagesplit: true
            };
            //$("#difference-box").css({"height":"100% !important"});
            $('#pdf-wrap').css({"background":"#fff","border-width":"0px"});
            let that = this;
            this.isClass = true;
            pdf.addHTML($("#pdf-wrap"), options, function() {
                pdf.save('综合报告'+time+'.pdf');
                that.isClass = false;
            });
       },
            // getPdf: function () {
            //     let _this = this;
            //     let pdfDom = document.querySelector('#pdf-wrap');
            //     html2Canvas(pdfDom, {
            //     onrendered: function(canvas) {
            //     let contentWidth = canvas.width
            //     let contentHeight = canvas.height
            //     let pageHeight = contentWidth / 592.28 * 841.89
            //     let leftHeight = contentHeight
            //     let position = 0
            //     let imgWidth = 595.28
            //     let imgHeight = 592.28 / contentWidth * contentHeight
            
            //     let pageData = canvas.toDataURL('image/jpeg', 1.0)
            
            //     let PDF = new JsPDF('', 'pt', 'a4')
            
            //     if (leftHeight < pageHeight) {
            //     PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
            //     } else {
            //     while (leftHeight > 0) {
            //         PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            //         leftHeight -= pageHeight
            //         position -= 841.89
            //         if (leftHeight > 0) {
            //         PDF.addPage()
            //         }
            //     }
            //     }
            //     PDF.save(_this.pdfData.title + '.pdf')
            //     }
            //     })
            //     html2Canvas()
            // },
       //},
      pointers:function(){
        //    factory.printing.header = "";       //页眉
        //     factory.printing.footer = "";       //页脚
        //     // let newWindow = window.open("_blank");   //打开新窗口
        //     // let codestr = document.getElementById("pdf-wrap").innerHTML;   //获取需要生成pdf页面的div代码
        //     // newWindow.document.write(codestr);   //向文档写入HTML表达式或者JavaScript代码
        //     // newWindow.document.close();     //关闭document的输出流, 显示选定的数据
                var a =$("#difference-box").html();
                 $("#boxinnerHtml").html(a);
                 $("#difference-box").addClass("pala");
          // this.isClass = true;
          window.print();   //打印当前窗口
           $("#boxinnerHtml").html("");
           $("#difference-box").removeClass("pala");
        //   this.inds = 1;
        //   this.getdata();
            
         //console.log(a);
        //     //return true;
            
     }
    },
    components:{
        child
    }
}
</script>