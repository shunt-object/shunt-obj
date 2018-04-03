<template>
<div class="total">
<div class="total-header not-print">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback">综合报告</p>
</div>
    <child index="7" start="6" :type="$route.query.type" :id="$route.query.id"></child>
    <div class="tites" id="pdf-wrap" style="background: #f8fafd;padding: 17px 23px;">
        <div class="from-headers" style="background:#fff;padding:20px;">
            <div class="from-head" style="color:#fff;">
                <div class="from-head-left" style="float:left;padding-left:2%"><img src="../../../../assets/logoers.png" alt=""><br>您的专属服务顾问</div>
                <div class="from-head-right" style="float:right;padding-right:2%">{{information.proname}} 上云分析综合报告</div>
            </div>
            
            <div class="colligate-heade">
                <button class="pointersd buttHover" @click="pointers()"><i class="iconfont icon-dayinji1" style="margin-right: 2px !important;"></i>打印</button>
                <button class="exportBtn buttHover" v-on:click="getPdf()"><!--<img src="../../../../assets/report/export.png" style="width:16px;margin-right:5px;" alt=""><--><i class="iconfont icon-icon-" style="margin-right:3px"></i>导出</button>
                
            </div>
            <div class="colligateReport" id="titBody">
                <!-- 基本信息 -->
                <div class="colligate-title">
                   <!--<img src="../../../../assets/report/report-information.png" alt="">-->
                    <i class="iconfont icon-jibenxinxi main-color" style="color:#da121a"></i>基本信息
                </div>

                <div class="colligate-list" style="padding:0 2em;">
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
                <div class="graph-lenged">
                    <div style="min-height:150px;" v-if="isgraph==false">
                        <div class="graphLenged" v-if="isgraph==false">
                            <div class="graphLenged-head">图例说明</div>
                            <div class="graphLenged-list"><img src="../../../../assets/report/appline.png" alt="">公网与前端应用交互</div>
                            <div class="clear"></div>
                            <div class="graphLenged-list"><img src="../../../../assets/report/dianline.png" alt="">公网与数据库交互</div>
                            <div class="clear"></div>
                            <div class="graphLenged-list"><img src="../../../../assets/report/dbline.png" alt="">前端应用与数据库交互</div>
                        </div>
                    </div>
                    <div id="mynetwork" :class="isgraph==true?'':'graph'"></div>   
                    <div class="graph-notice" v-if="isgraph==true">当前没有工作负载相关信息，请您首先在第二步<span style="color:#da121a;cursor:pointer;" v-on:click="goGroup()">“资源组”</span>中进行配置。</div>
                </div>                
                <!-- 云规划报告 -->
                <div class="colligate-title">
                    <!-- <img src="../../../../assets/report/report-plan.png" alt=""> -->
                    <i class="iconfont icon-zengshoushuju main-color" style="color:#da121a"></i>云规划报告详情
                </div>
                <div class="colligate-list" style="padding:0 2em;">
                    <!--<div class="legend-box">
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
                        </div>-->
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
                                    <span class="score-val" v-else>{{JSON.parse(item.result).sname==undefined?'--':JSON.parse(item.result).sname}}</span>
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
                        <div style="padding:0 2em;">
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
                        </div>
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
                        <div style="padding:0 2em;">
                            <p class="explain">
                                <span><i class="iconfont icon-yuan high-ratio" style="margin-right:3px;"></i>高匹配</span>
                                <span><i class="iconfont icon-yuan low-ratio" style="margin-right:3px;"></i>低匹配</span>
                            </p>
                        </div>
                        <div class="clear"></div>
                        <div id="boxinnerHtml" ></div>
                        <div class="difference-box" :class="isClass==true?'allheight':''" id="difference-box" style="margin-bottom:20px;padding:0 2em;" >
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
                    <div style="padding:0 2em;">
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
                    </div>
                    <!-- 上云分析建议  -->
                    <div class="colligate-title">
                        <i class="iconfont icon-pingjiabaogao main-color"></i>上云分析建议
                    </div>
                    <!--投资回报率--> 
                    <div class="colligateInvest">
                        <p class="advise-title"><i class="iconfont icon-touzizuhe main-color" style="font-size:20px !important;"></i>预算收益统计分析</p>
                        <div class="colligate-list" style="padding:0 2em;">
                            <div class="colligateBuy-echarts">
                                <div class="Invest-echarts" id="Invest-echarts" style="width:100%;height:100%;"></div>
                            </div>
                            <table class="Invest-table" id="Invest-table" v-if="pricelistOne.length>0">
                                <thead>
                                    <tr>                   
                                        <td rowspan="2">您的预算</td>
                                        <td align="center" valign="middle" colspan="7">优选后消费</td>
                                        <td rowspan="2">预算收益率</td>
                                    </tr>
                                    <tr class="Invest-table-headtwo">
                                        <td><input type="checkbox" class="invest-checbox" v-model="allInvest" v-on:click="allClick()">产品名称</td>
                                        <td>云厂商</td>                                        
                                        <td>规格</td>
                                        <td>数量</td>
                                        <td>时间</td>
                                        <td style="cursor:pointer;" v-on:click="sortPrice()">费用参考<i v-if="issort!=0" class="iconfont" :class="issort=='1'?'icon-sanjiao':'icon-xiaosanjiaoup'"></i></td>
                                        <td>京玉折扣价</td>
                                    </tr>                
                                </thead>
                                <tbody>
                                    <tr v-for="(item,index) in pricelistOne">
                                        <td :rowspan="pricelist.length+1">
                                            <p :class="budgetprice==''?'Invest-table-color':''" style="cursor:pointer;" v-if="isbudget==false" v-on:click="budget()">{{budgetprice==''?'请输入您的预算':budgetprice}}<span style="color:#666;margin-left:3px;"><i class="iconfont icon-bianji"></i></span></p>
                                            <p class="inputbudget" v-if="isbudget==true"><input type="number" v-model="budgetprice" v-on:blur="budgetYes()"></p>元
                                        </td>
                                        <td><input type="checkbox" class="invest-checbox" v-model="item.boolean" v-on:click="investInput('pricelistOne',index)">{{item.data.pname}}</td>
                                        <td>{{item.data.sname}}</td>
                                        <td>
                                            <div class="invest-size">
                                                <span class="Invest-table-color">{{item.data.cores}}</span><br>（v）CPU
                                            </div>
                                            <div class="invest-size">
                                                <span class="Invest-table-color">{{item.data.ram}}</span><br>内存（GB）
                                            </div>
                                        </td>
                                        <td>{{item.data.num}}</td>
                                        <td>{{item.data.month%12==0?item.data.month/12+'年':item.data.month%12+'个月'}}</td>
                                        <td>{{item.data.cloudPrice==0?'原厂在线暂不支持':'￥'+item.data.cloudPrice}}</td>
                                        <td>{{item.data.csbPrice==0?'线下联系':'￥'+item.data.csbPrice}}</td>
                                        <td :rowspan="pricelist.length+1"><p class="Invest-table-color">{{priceRate}}<span v-if="priceRate!=''">%</span></p></td>
                                    </tr>
                                    <tr v-for="(item,index) in pricelist" v-if="pricelist.length>0">
                                        <td><input type="checkbox" class="invest-checbox" v-model="item.boolean" v-on:click="investInput('pricelist',index)">{{item.data.pname}}</td>
                                        <td>{{item.data.sname}}</td>
                                        <td>
                                            <div class="invest-size">
                                                <span class="Invest-table-color">{{item.data.cores}}</span><br>（v）CPU
                                            </div>
                                            <div class="invest-size">
                                                <span class="Invest-table-color">{{item.data.ram}}</span><br>内存（GB）
                                            </div>
                                        </td>
                                        <td>{{item.data.num}}</td>
                                        <td>{{item.data.month%12==0?item.data.month/12+'年':item.data.month%12+'个月'}}</td>
                                        <td>{{item.data.cloudPrice==0?'原厂在线暂不支持':'￥'+item.data.cloudPrice}}</td>
                                        <td>{{item.data.csbPrice==0?'线下联系':'￥'+item.data.csbPrice}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--场景占比分析-->
                    <div class="colligateBuy">
                        <p class="advise-title"><i class="iconfont icon-equipments main-color"></i>多云优选意向订单场景分析图</p>
                        <div style="padding:0 2em;">
                            <div class="colligateBuy-echarts">
                                <div class="colligateBuy-type" id="colligateBuy-type" style="width:100%;height:100%;"></div>
                            </div>
                        </div>                        
                    </div>
                    <!--<div class="advise-box">-->
                    <div class="system-advise">
                        <p class="advise-title"><i class="iconfont icon-gongnengjianyi main-color"></i>上云分析CloudBroker²评估建议</p>
                        <p class="advise-content" v-if="Issystem==false">{{system}}
                            <span style="cursor:pointer;margin-left:20px;" v-on:click="systemEdit()"><i class="iconfont icon-bianji"></i><span style="color:#555;">编辑</span></span><!--#2eabf5-->
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
                        <div style="padding:0 2em;">
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
import network from '../../../../../src/assets/report/publicnetwork.png'
import appnetwork from '../../../../../src/assets/report/appnetwork.png'
import dbnetwork from '../../../../../src/assets/report/dbnetwork.png'
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
                {id: 1, label: '公网', shape: 'image', image:network,color:{border:'#da121a'}},
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
            priceRate:'',
            isgraph:'',
            allInvest:false,
            issort:'0',//排序
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
        this.queryType = this.$route.query.type;
        this.appId = this.$route.query.id;
        this.information.realname = JSON.parse(sessionStorage.getItem("account")).realname;
        this.information.tenant = JSON.parse(sessionStorage.getItem("account")).tenant;
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
        
        this.getdesign();        
        this.getplan();//云规划        
        this.getdata();// 云选型
        this.compareDiffer();//云选型做题记录
        this.gettype();//获取类型
        this.getPrice();//获取价格列表
        this.topology();  //拓扑图
        document.onkeyup = function(evnet){
            if (evnet.keyCode == '13') {               
                return false;
            }
        }
    },
    methods:{
        sortPrice:function(){
            let list = [],arr=[];
            list[0] = this.pricelistOne[0];
            for(let i=0;i<this.pricelist.length;i++){
                list.push(this.pricelist[i]);
            }
            this.pricelistOne = [];
            this.pricelist = [];
            if(this.issort=='0'){
                this.issort = '1';//从小到大
                for(let i=0; i<list.length; i++){ 
                    for(let j=0; j<list.length; j++){ 
                        if(list[i].data.cloudPrice < list[j].data.cloudPrice){ //从小到大
                            arr = list[j]; 
                            list[j] = list[i]; 
                            list[i] = arr; 
                        } 
                    } 
                }
                this.pricelistOne.push(list[0]);
                for(let k=1;k<list.length;k++){
                    this.pricelist.push(list[k]);
                }
            }else{
                if(this.issort == '1'){
                    this.issort = '2';//从大到小
                    for(let i=0; i<list.length; i++){ 
                        for(let j=0; j<list.length; j++){ 
                            if(list[i].data.cloudPrice > list[j].data.cloudPrice){ //从大到小
                                arr = list[j]; 
                                list[j] = list[i]; 
                                list[i] = arr; 
                            } 
                        } 
                    }
                    this.pricelistOne.push(list[0]);
                    for(let k=1;k<list.length;k++){
                        this.pricelist.push(list[k]);
                    }  
                }else{
                    this.issort = '1';//从小到大
                    for(let i=0; i<list.length; i++){ 
                        for(let j=0; j<list.length; j++){ 
                            if(list[i].data.cloudPrice < list[j].data.cloudPrice){ //从小到大
                                arr = list[j]; 
                                list[j] = list[i]; 
                                list[i] = arr; 
                            } 
                        } 
                    }
                    this.pricelistOne.push(list[0]);
                    for(let k=1;k<list.length;k++){
                        this.pricelist.push(list[k]);
                    }
                }            
            }
        },
        allClick:function(){
            let pname = [];
            let series = [];
            let price = 0;
            if(this.allInvest==false){//选中
                for(let i=0;i<this.pricelist.length;i++){
                    this.pricelist[i].boolean = true;
                }
                this.pricelistOne[0].boolean = true;
            }else{
                for(let i=0;i<this.pricelist.length;i++){
                    this.pricelist[i].boolean = false;
                }
                this.pricelistOne[0].boolean = false;
            }
            if(this.pricelistOne[0].boolean==true){
                pname.push(this.pricelistOne[0].data.pname);
                series.push(this.pricelistOne[0].data.cloudPrice);
            }
            for(let i=0;i<this.pricelist.length;i++){
                if(this.pricelist[i].boolean==true){
                    pname.push(this.pricelist[i].data.pname);
                    series.push(this.pricelist[i].data.cloudPrice);
                }
            }
            if(this.budgetprice!=''){
                price = this.budgetprice;
            }
            this.$nextTick(function() {
                this.canvasInvest('Invest-echarts',pname,series,price);
            })
        },
        goGroup:function(){
            this.$router.push({path:'/resourceGroup',query:{id:this.appId,type:this.$route.query.type}});
        },
        budget:function(){//预算
            let arr = 0;
            if(this.pricelistOne[0].boolean==true){
                arr++;
            }
            for(let i=0;i<this.pricelist.length;i++){
                if(this.pricelist[i].boolean==true){
                    arr++;
                }
            }
            if(arr>0){
                this.isbudget==false?this.isbudget=true:this.isbudget=false;
            }else{
                this.$alert('请您至少选中一个实例，计算投资回报率。', '温馨提示', {
                    confirmButtonText: '我知道了',
                    showClose:false,
                    type: 'warning',
                    confirmButtonClass:'lay-btn-red'
                });
            }
        },
        
        investInput:function(arrname,index){
            let pname = [];
            let series = [];
            let price = 0;
            let a = 0;
            if(arrname=='pricelistOne'){
                this.pricelistOne[index].boolean==false?this.pricelistOne[index].boolean=true:this.pricelistOne[index].boolean=false;
            }else{
                this.pricelist[index].boolean==false?this.pricelist[index].boolean=true:this.pricelist[index].boolean=false;
            }
            if(this.pricelistOne[0].boolean==true){
                pname.push(this.pricelistOne[0].data.pname);
                series.push(this.pricelistOne[0].data.cloudPrice);
            }else{
                a++;
            }
            for(let i=0;i<this.pricelist.length;i++){
                if(this.pricelist[i].boolean==true){
                    pname.push(this.pricelist[i].data.pname);
                    series.push(this.pricelist[i].data.cloudPrice);
                }else{
                    a++;
                }
            }
            if(a>0){
                this.allInvest = false;
            }
            //console.log('aaaa',series);
            if(this.budgetprice!=''){
                price = this.budgetprice;
            }
            this.$nextTick(function() {
                this.canvasInvest('Invest-echarts',pname,series,price);
            })
            
            this.budgetYes();
            //console.log('-----',this.pricelistOne);
        },
        budgetYes:function(){
            this.isbudget = false;
            let arr = [];
            let pname = [];
            let series = [];
            if(this.budgetprice!=''){
                for(let i=0;i<this.pricelist.length;i++){
                    if(this.pricelist[i].boolean==true){
                        arr.push(this.pricelist[i].data.id);
                        pname.push(this.pricelist[i].data.pname);
                        series.push(this.pricelist[i].data.cloudPrice);
                    }
                }
                if(this.pricelistOne[0].boolean==true){
                    arr.push(this.pricelistOne[0].data.id);
                    pname.push(this.pricelistOne[0].data.pname);
                    series.push(this.pricelistOne[0].data.cloudPrice);
                }
                this.$nextTick(function() {
                    this.canvasInvest('Invest-echarts',pname,series,this.budgetprice);
                })
                let obj = {
                    appid:[this.appId],
                    budget:this.budgetprice,
                    purchaseIds:arr
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
                if(response.data.data.length>0){
                    this.pricelistOne.push({boolean:true,data:response.data.data[0]});
                    this.$nextTick(function() {
                        this.canvasInvest('Invest-echarts',[response.data.data[0].pname],[response.data.data[0].cloudPrice],0);
                    })
                    for(let i=1;i<response.data.data.length;i++){
                        this.pricelist.push({boolean:false,data:response.data.data[i]});
                    }
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
                this.dbScale(this.dbScaleType);
            }).catch((error)=>{
            })
        },
        dbScale:function(dbScaleType){
            let str = {"appids":[this.appId]};
            let app = [],db = [];
            for(let n=0;n<dbScaleType.length;n++){
                app.push([dbScaleType[n],0]);
                db.push([dbScaleType[n],0]);
            }
            this.$this.post('/broker/price/purchasin/scene',JSON.stringify(str)).then((response)=>{
                for(let i=0;i<response.data.data.length;i++){
                    if(response.data.data[i].vmType=='应用服务'){
                        for(let j=0;j<app.length;j++){
                            if(response.data.data[i].sceneType==app[j][0]){
                                app[j][1] = response.data.data[i].num;
                            }
                        }
                    }else{
                        for(let k=0;k<db.length;k++){
                            if(response.data.data[i].sceneType==db[k][0]){
                                db[k][1] = response.data.data[i].num;
                            }
                        }
                    }
                    this.dbScaleName.push(response.data.data[i].vmType);
                }  
                this.$nextTick(function() {
                    this.dbScaleCanvas('colligateBuy-type',dbScaleType,app,db);
                })
            }).catch((error)=>{})
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
        topology:function(){//拓扑图
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
        canvasInvest:function(dom,x,series,centerline){
           // alert(1111);
            //console.log(series);
            this.charts = echarts.init(document.getElementById(dom));
            this.charts.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter:'{b0}: {c0}'
                },
                grid: {
                    left: '2%',
                    right: '8%',
                    bottom: '2%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: x,
                    name:'实例',
                    axisLabel:{
                        color:'#333',
                        interval:0,  
                        rotate:20                    
                    },
                },
                yAxis: {
                    name:'价格',
                    type: 'value'
                },
                legend: {
                    data: ['价格'],
                    top:'10',
                    right:'10'
                },
                color:['#da121a'],
                series: [
                    // {
                    //     type: 'scatter',
                    //     name:'预算',
                    //     markLine: {
                    //         lineStyle: {
                    //             normal: {
                    //                 color: "#f7a72c",
                    //                 type: 'solid',
                    //                 width: 1,
                    //             }
                    //         },
                    //         data: [ {
                    //             yAxis: centerline,
                    //             name: '预算'
                    //         }]
                    //     }
                    // },
                    {
                    name:'价格',
                    data: series,
                    barWidth : 25,//柱图宽度
                    type: 'bar',
                    markLine: {
                        lineStyle: {
                            normal: {
                                color: "#f7a72c",
                                type: 'solid',
                                width: 2,
                            }
                        },
                        data: [ {
                            yAxis: centerline,
                            name: '预算'
                        }]
                    }
                }]
            });
                       
        },
        dbScaleCanvas:function(dom,dbScaleType,app,db){
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
                    right:'10'
                },
                color:['#F7A72C', '#da121a','#E15F2D','#55D0C5','#6380D3','#8261E0','#F7A72C','#DA121B','#E15E2D'],
                grid: {
                    left: '2%',
                    right: '8%',
                    bottom: '2%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'category',
                    name:'类型',
                    data: dbScaleType,
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    axisLabel:{
                        color:'#333',
                        interval:0,  
                        rotate:30                    
                    },
                    nameTextStyle:{
                        color:'#333'
                    },
                },
                yAxis: {
                    type: 'value',
                    name:'数量',
                    //data: dbScaleType,
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
                //series: dbScaleservies
                series:[
                    {
                        name: '应用服务',
                        type: 'bar',
                        stack: '总量',
                        barWidth : 25,//柱图宽度
                        data: app
                    },
                    {
                        name: '数据库服务',
                        type: 'bar',
                        stack: '总量',
                        barWidth : 25,//柱图宽度
                        data: db
                    }
                ]
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
                visualMap: {
                    min: 0,
                    max: 100,
                    dimension: 0,
                    right:'5%',
                    //left: '73%',
                    top: '10',
                    text: ['高', '低'], // 文本，默认为数值文本
                    calculable: false,
                    itemWidth: 10,
                    itemHeight: 90,
                    textStyle: {
                        color: '#666',
                        height: 56,
                        fontSize: 11,
                        lineHeight: 60,
                    },
                    inRange: {
                        color: ['yellow', '#da121a']
                    },
                    //padding: [50, 20],
                    orient: 'horizontal',
                },
                series: [{
                    type: 'scatter',
                    data: this.opiniondata,
                    symbolSize: 13,
                    markLine: {
                        lineStyle: {
                            normal: {
                                color: "#f7a72c",
                                type: 'solid',
                                width: 1,
                            },
                            emphasis: {
                                color: "#d9def7"
                            }
                        },
                        data: [{
                            xAxis: 50,
                            name: '平均线',
                            itemStyle: {
                                normal: {
                                    color: "#b84a58",
                                }
                            }
                        }, {
                            yAxis: 50,
                            name: '平均线',
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
                                        color: '#fff'
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideTopLeft',
                                        fontStyle: 'normal',
                                       // color: "#409EFF",
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
                                        color: '#fff',
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideTopRight',
                                        fontStyle: 'normal',
                                       // color: "#409EFF",
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
                                        color: '#fff',
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideBottomLeft',
                                        fontStyle: 'normal',
                                        //color: "#409EFF",
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
                                        color: '#fff',
                                    },
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideBottomRight',
                                        fontStyle: 'normal',
                                        color: "#fff",
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
            $('#pdf-wrap').css({"background":"#fff","border-width":"0px"});
            let that = this;
            this.isClass = true;
            pdf.addHTML($("#pdf-wrap"), options, function() {
                pdf.save('综合报告'+time+'.pdf');
                that.isClass = false;
            });
       },
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
        child,
        network,
        appnetwork,
        dbnetwork
    }
}
</script>