<!--云规划-->
<template >
<div style="background:#eceef3" id="he">
      <div class="rightBs">
            <ul>
                <li class="nexton" data-to="go1"></li>
                <li class="nextsec" data-to="go2"></li>
                <li class="nextthe" data-to="go3"></li>
                <li class="nextf" data-to="go4"></li>
            </ul>
      </div>
      <div class="fixed-box">
        <ul class="fixed-ul">
            <li class=" liHoversBj" v-on:mouseenter="phoneEnter()" v-on:mouseleave="phoneleave()">
               <a href="tel:4008287308" style="color:#fff"><img src="../../../assets/homePage-phone.png" class="fixed-icon" alt=""></a>
                <div v-show="phoneBox" class="phone-box liHoversBj"><img src="../../../assets/alertPhone.png" alt="" style="width:100%;height:100%"></div>
            </li>
            <li id="xiaowei"  class="liHoversBj phone-li" v-on:click="xiaowei"> <img src="../../../assets/homePage-online.png" class="fixed-icon" alt=""></li>
        </ul>
      
        
        <img src="../../../assets/scroll.png" alt="" class="scrollUp" style="width:47px;height:47px;">
    </div>
    <div style="background:#f5f5f5;width:100%;height:70px;line-height:70px;" class="displayshow">
            <div class=" fixshow container">
                    <div class="col-md-3 col-xs-3"><span><a href="#cg"><i class="iconfont icon-shenpiliucheng"></i> 服务流程</a></span></div>
                    <div class="col-md-3 col-xs-3"><span><a href="#hy"><i class="iconfont icon-zuanshi"></i> 服务能力</a></span></div>
                    <div class="col-md-3 col-xs-3"><span><a href="#kr"><i class="iconfont icon-sheji"></i> 深度定制</a></span></div>
                    <div class="col-md-3 col-xs-3"><span><a href="#sz"><i class="iconfont icon-tuandui"></i> 服务团队</a></span></div>
            </div>
    </div>
    <Sec active="1" class="sectb"></Sec>
    <div class="selecMain ">
            <div class="seleconeMain-banners selectHelp row ">
                 <div class="container">
                        <div class="seleconeMain-mainfir nfir col-xs-12 col-md-6" style="padding-left:50px">
                            <p class="selecone-pfir" style="font-weight:100;text-align:left;font-size:26px;color:#f6f6f6">以“云”为核心，覆盖云生命周期</span></p>
                            <div class="seclone-dv">
                                <p style="font-weight:100;text-align:left;font-size:16px;color:#f2f2f2;line-height:26px;">CloudBroker²致力于为客户提供全流程一站式管家云服务和基于特定业务场景深度定制的解决方案，最大程度减少客户上云管云成本及风险，让客户专注核心业务发展。</p>
                            </div>
                             <p class="col-xs-12" style="margin-top:20px;margin-bottom:0px;text-align:left;padding:0 !important"><span class="spanTy" @click="lj">立即注册</span><span class="panTy" @click="ctaCloundCsbs()">DEMO体验</span></p>
                        </div>
                        <div class="col-md-6 col-xs-12 text-left lastyyy"><img src="../../../assets/er-icon/yunweis.png" alt="" style="float: right;width:85%"></div>
                 </div>
            </div>
            <div class="container naver">            
                <div class="row narow">
                    <div class="col-md-3 col-xs-3"><a href="#cg"><i class="iconfont icon-shenpiliucheng"></i> 服务流程</a></div>
                    <div class="col-md-3 col-xs-3"><a href="#hy"><i class="iconfont icon-zuanshi"></i> 服务能力</a></div>
                    <div class="col-md-3 col-xs-3"><a href="#kr"><i class="iconfont icon-sheji"></i> 深度定制</a></div>
                    <div class="col-md-3 col-xs-3"><a href="#sz"><i class="iconfont icon-tuandui"></i> 服务团队</a></div>
                </div>
            </div>
            <div class="nav-bottom-kk"></div>
            <div id="cg" class="go1">
                <div class="container erfs whyContainer" style="margin-bottom:50px;">
                    <div class=" text-left redtitle">
                       <span class="redLine"></span><span class="redlasttitle">服务流程</span>
                    </div>
                    <div class="row text-center">
                       <img src="../../../assets/er-icon/136.png" alt="" class="liuchengimg">
                    </div>
                 </div>
            </div>
            <div style="width:100%;background:#f8f8f8" id="hy" class="go2">
                <div class="container  erfs" style="padding-top:20px;padding-bottom:20px">
                    <div class=" text-left redtitle">
                        <span class="redLine"></span><span class="redlasttitle">服务能力</span>
                        <div style="margin-top:20px;">
                            <table id="servesTab" class="table table-bordered">
                                <thead class="">
                                    <th class="col-md-1">服务类别</thclass>
                                    <th class="col-md-6">服务细则</th>
                                    <th class="col-md-1">免费服务</th>
                                    <th class="col-md-1">标准版</th>
                                    <th class="col-md-1">企业版</th>
                                </thead>
                                <tbody class="bodyClass">
                                    <tr>
                                        <td rowspan="32" class="col-md-2">网络管理服务<br/>（虚拟网络管理）</td>
                                        <td class="col-md-4">1、通过问题管理流程进行问题工单的告警和警示信息通知</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">2、管理和跟踪网络问题工单，分派负责人和优先级，解决网络问题</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">3、基于沟通和升级流程机制，向客户通知问题情况</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">4、对所有问题分派负责人和优先级</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">5、使用事件管理系统生成的信息，进行初始诊断以孤立和修复问题</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">5、对路由器/交换机/防火墙/VPN设备提供支持咨询，执行纠正性修复 </td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">6、协助进行路由器/交换机设备根本原因分析，按要求的服务目标解决所有失效问题</td>
                                        <td  class="text-center"></td>
                                        <td  class="text-center"></td>
                                        <td  class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">7、协助路由器/交换机/防火墙/VPN设备设备事前发现问题和防范问题</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">8、基于路由器/交换机/防火墙/VPN设备技术及当前的安全策略，记录并关闭所有已知的安全问题</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">9、对路路由器/交换机/防火墙/VPN设备执行深入的二线和三线网络Problem Determination/Problem Source Identification (PD/PSI)来判断和孤立网络失效的源头和问题，包括性能下降问题</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">10、管理和跟踪正在进行的网络变更事件</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">11、按照事先的定义和要求，执行初始的次要或非关键变更</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">12、对路由器/交换机/防火墙/VPN设备系统备份计划，按要求维护和实施变更</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">13、对路由器/交换机/防火墙/VPN设备系统告警，监控和logging维护和实施变更</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">14、对路由器/交换机/防火墙/VPN设备所有不成功的变更，按要求参与分析根本问题</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">15、对路由器/交换机的操作系统，维护和执行变更</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">16、维护和执行对防火墙的客户,用户和会话的验证配置变更</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">17、维持和执行对路由表的变更</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">18、维持和支持IP地址转换表(NAT/PAT)的变更</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">19、维护和执行过滤，规则，流程</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">20、维护和支持对VPN安全配置和域的变更</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">21、维护和支持对用户验证的变更</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">22、维护路由器/交换机设备的物理网络拓扑文档</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">23、维护逻辑网络拓扑，并参与技术回顾会议</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">24、评估，实施，维护，记录和回顾路由器和交换机的网络集成</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">25、评审，评估，决定，设计，实施和文档记录防火墙和VPN设备的高可用设计</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">26、实施防火墙/VPN环境，以满足客户对优先级，预算，成长，性能，安全和业务目标的要求</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">27、定义和文档记录防火墙/VPN服务的硬件和软件</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">28、定义，实施和文档记录的验证方法，流程和过程（防火墙/VPN）</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">29、定义，实施和文档记录适当的加密方法，流程和过程（防火墙/VPN）</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">30、定义，实施和文档记录的过滤/规则校验流程和过程，符合最佳实践和客户安全策略（防火墙/VPN）</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">31、定义，实施和文档记录任何的防火墙规则集，告警通知和事件logging的变更</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td rowspan="53" class="col-md-2">服务器管理服务<br/>（云管理平台操作系统管理）</td>
                                        <td class="col-md-4">1、通过问题管理流程进行问题工单的告警和警示信息通知</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">2、管理和跟踪系统问题工单，分派负责人和优先级，解决系统问题</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">3、基于沟通和升级流程机制，向客户通知问题情况</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">4、对所有问题分派负责人和优先级</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">5、在系统和组件层面（包括硬件问题，软件问题和网络问题）进行基本的问题判定</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">6、对影响服务器环境的变更提供资料</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">7、评估对服务器环境的计划变更，并对支持这些变更的要求提出建议</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">8、响应系统告警和事件</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">9、响应硬件告警和事件</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">10、维护系统错误日志</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">11、提供服务器安装操作系统、系统管理软件和操作系统工具（软件及工具由客户提供）</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">12、提供服务器操作系统、系统管理软件和操作系统工具的技术支持，包括补丁升级及升级方案制定和评估</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">13、管理操作系统配置，包括初始的服务器配置，修改配置文件，系统配置文档和对系统配置文件的访问</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">14、管理操作系统的文件系统，包括创建、维护和删除卷及目录结构，修改文件系统大小，校验mount point的可用性，修复有问题的文件系统和修改文件系统权限</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">15、监控和优化操作系统log文件，以防止系统溢出</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">16、管理操作系统进程 (例如, 持续地执行系统子任务，或守护进程)， 包括按要求刷新系统进程，确立启动顺序，维护系统时钟同步，和适当地变更进程优先级</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">17、对操作系统的更新和配置修改提出建议</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">18、维护远程管理和告警监控的工具</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">19、维护硬件和软件配置信息</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">20、管理系统ID和域结构</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">21、评估对服务器环境的计划变更，并对支持这些变更的要求提出建议</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">22、设定密码机制使服务器能连接到网络中的其他服务器</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">23、创建和修改系统登录脚本</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">25、分派账号、工作组</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">26、管理文件系统目录分发和复制</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">27、提供健康检查和趋势报告，包括CPU，内存，磁盘和服务器红色操作列表</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">28、管理操作系统初始化配置信息，包括初始的服务器配置，修改配置文件，系统配置文档和对系统配置文件的访问</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">29、维护和管理硬件和软件配置信息</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-4">30、前瞻性地通过趋势和例外情况报告，跟踪和调整性能，避免可能低于服务水准的情况</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>31、就性能事件及其根本原因，进行事后调整以恢复服务</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>32、执行纠正性措施以解决系统性能问题，并对防范未来可能的性能事件提出建议</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>33、对变更提出建议，以维持系统性能水平</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>34、定义性能相关的衡量指标，数据收集、汇总和存储的要求</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">35、收集，汇总和存储性能数据 (标准的性能数据管理)</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>36、定义性能告警门限值，以符合服务水准要求</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>37、提供标准的性能报告</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>38、对事件分析提供临时的性能报告，以恢复服务</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>39、参与标准性能管理工具的客制化和管理，以实现生产率最大化</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>40、定义和维护业务流程文档</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>41、定义容量相关的衡量指标，数据收集、汇总和存储的要求</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>42、收集，汇总和存储容量数据 (标准的容量数据管理)</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>43、定义容量告警门限值，以符合服务水准要求</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>44、提供标准的系统容量报告</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>45、对预定义的门限值，跟踪其容量措施，并在被管理的系统资源达到关键或警告水平时通知客户</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>46、管理对事件、问题、变更及其他容量相关的服务请求的队列</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>47、对事件分析提供临时的容量报告，以恢复服务</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>48、分析容量措施，预测物理资源需求</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>49、资产记录和数据初始化</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>50、增加资产记录和数据</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>51、对资产捕获以外所发现的新增资产，增加资产记录及其数据</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>52、对从变更中新增的资产，增加资产记录及其数据</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>53、基于硬件的更新信息，更新资产记录</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>54、对系统硬件进行每季度的墙到墙资产检查，并更新资产记录</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td rowspan="30" class="col-md-2">数据库管理服务<br/>（云管理平台数据库管理）</td>
                                        <td>1、遵循基本的安全要求进行配置(例如，密码要求，日志，系统安全检查，特权授权/用户ID等)</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>2、进行标准的健康检查</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>3、维护DBMS产品软件的安全访问</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>4、维护DBMS的系统和数据库管理授权</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>5、管理DBMS 的诊断错误日志</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>6、就物理DBMS资源，执行纠正性措施</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>7、就DBMS空间，执行纠正性措施</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>8、就数据库交易日志，执行纠正性措施</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>9、管理和进行物理DBMS的维护</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>10、使用适当的变更管理流程和工具</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>11、提供估计用于变更计划内的DBMS相关任务的时间</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>12、评估所有可能影响DBMS的变更造成的技术影响，并签署适用的变更</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>13、维护数据库操作管理的文档</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>14、对范围内的数据库(gbase 8t(informix) Oracle, MYSQL)执行自动化的启动和关闭(客户应用不包括在内)</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>15、进行DBMS文件系统和物理数据库的备份</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                     <tr>
                                        <td>16、进行物理数据库恢复，以从硬件或数据库软件问题中恢复</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>17、遵循安全标准，实施每年由进行升级补丁或补丁集</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>18、提供DBMS问题的支持</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>19、管理和维护物理DBMS</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>20、支持DBMS软件(安装客户发起的补丁包)</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>21、向DBMS供应商和DBMS工具供应商报告问题并获取支持</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>22、遵循安全标准，实施高严重性能补丁或补丁集</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>23、维护DBMS产品软件的安全访问</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>24、对范围内的DBMS (gbase 8t(informix) Oracle, MYSQLL)执行恢复程序操作</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>25、维护需要备份的指定数据文件和服务器的清单</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>26、就任何非计划的数据文件备份和备份窗口排期，并通知</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>27、按要求, 维护备份和恢复机制/程序</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>28、对指定的数据文件，进行临时备份</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>

                                    <tr>
                                        <td>29、检查日常备份的log记录</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>30、基于恢复请求，确定要进行恢复的数据文件名和版本</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="12" class="col-md-2">中间件管理服务<br/>云管理平台中间件管理）</td>
                                        <td>1、协助安装标准的中间件软件</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2、协助配置或升级标准的中间件软件产品到当前版本</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>3、提供对中间件软件问题的判定和解决问题。如果问题被确定出在应用代码层面，则转交给适当的应用开发/管理团队负责解决</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>4、协助中间件软件故障的根本问题分析</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>

                                    <tr>
                                        <td>5、协助安装和维护适当的永久修复和补丁</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                    </tr>
                                    <tr>
                                        <td>6、就产品结束支持的日期，新产品发布和一般的可用性问题，进行沟通</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>

                                    <tr>
                                        <td>7、按要求对中间件软件产品采用应用软件要求的配置变更</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>8、进行中间件软件产品日志的rotation, pruning和archiving</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>9、确定需要备份的中间件软件文件/数据源和文件系统，作为操作系统/子系统备份的一部分</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>10、协助中间件系统软件层面的恢复</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>11、依据客户认可的安全策略执行安全遵从性操作</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>12、从中间件操作角度，维护操作程序（Operational Procedures） </td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="7" class="col-md-2">存储管理服务</td>
                                        <td>1、存储设备运行监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2、存储系统故障排错</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>3、存储系统日常操作</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>4、存储系统资源使用状况和运行趋势分析</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>5、存储运行状态报告</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>6、存储事件报告</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>7、存储变更管理报告</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="7" class="col-md-2">硬件设备维护服务</td>
                                        <td>1、设备硬件运行状态检查</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2、故障响应、排查、诊断和处理</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>3、设备日志检查分析</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>4、设备硬件故障定位</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>5、制定故障维修方案</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>6、对发生故障的硬件设备进行维修或更换；</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>7、提供硬件资产管理报告</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="15" class="col-md-2">安全管理服务</td>
                                        <td>1、提供国内外安全资讯报告</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2、提供安全预警服务，安全预警包括最新漏洞、病毒和攻击信息</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>3、提供传统安全架构建议</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>4、提供云安全架构建议</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>5、网站安全加固</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>6、APP应用安全加固</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>7、安全风险评估（包含1）漏洞扫描、2）安全基线检查、3）系统开放端口检查、4）弱密码检查、5）WEB安全检查、6）防火墙策略核查。）</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>8、安全态势感知</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>9、渗透测试（需人工进行黑白盒测试）</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>10、服务器安全防护和加固</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>11、漏洞检测</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>12、安全托管</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>13、堡垒机</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>14、日志审计</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>15、紧急通知</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="12"  class="col-md-2">网络性能管理服务</td>
                                        <td>1、网络流量特征分析</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2、用户感知特征分析</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>3、业务质量优化建议</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>4、实时监控驾驶舱</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>5、网络流量异常预警与通知</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>6、用户感知下降预警与通知</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>7、用户投诉故障域定位</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>8、特定业务服务质量监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>9、用户访问记录审计</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>10、用户访问记录导出</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>11、实时监控值守服务</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>12、故障排查与定位服务</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="8"  class="col-md-2">上云咨询</td>
                                        <td>1、应用软件架构调研</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2、应用系统资源使用情况调研（包括CPU、内存、文件系存储等各类服务（数量，逻辑关系））</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>3、网络流量调研</td>
                                         <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>4、业务交易量大小</td>
                                         <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>5、应用软件上云可行性分析及上云开发量评估</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>6、各云产品优劣势对比</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>7、云产品功能选型及架构方案设计</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>8、最终方案及成本确认</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="3"  class="col-md-2">上云测试</td>
                                        <td>线上场景测试：
轻松点击即可完成的场景化真机测试，帮助您实时在线测试和体验多个目标云的各种不同标准业务负载表现，确保您 『看的清，试的准』。</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>线下预约测试：
通过合作伙伴（听云）的拨测软件，部署您的应用到指定服务器，时间和访问频度根据需求进行定制。</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>测试结果分析和建议</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="10"  class="col-md-2">部署与迁移实施</td>
                                        <td>1、迁移工作量评估（数据库，应用服务器等）</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2、迁移开发工作量评估（需要针对云特点的开发）</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>3、云系统迁移问题协调及技术指导迁移方案评估及指导（针对自身IT经验不足的客户）</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>4、制定V2V、P2V迁移方案和操作步骤</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>5、制定数据库迁移方案和操作步骤</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>6、制定应用迁移方案和操作步骤</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>7、制定数据迁移方案和操作步骤</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>8、迁移解决方案规划和迁移实施</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>9、基础架构部署</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>10、业务系统部署</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="4"  class="col-md-2">迁移后系统运行状态跟踪</td>
                                        <td>1、网络流量监控</td>
                                        <td class="text-center"></td>
                                         <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2、系统资源监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>3、应用运行状态监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>4、交易处理能力监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="10"  class="col-md-2">云管理平台监控</td>
                                        <td>1、操作系统监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2、数据库监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>3、中间件监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>4、虚拟化软件监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>5、PCM监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>6、存储网络设备监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>7、服务器硬件监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>8、备份状态监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>9、监控策略统计与优化</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>10、告警信息统计与类型分析</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="4"  class="col-md-2">云资源平台监控</td>
                                        <td>1、网络与防火墙、负载均衡监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2、虚拟网络监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>3、虚拟化软件KVM监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>4、分布式存储系统监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="5"  class="col-md-2">云安全监控</td>
                                        <td>1、安全监控</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2、访问控制</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>3、网络可用性</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>4、连接状态</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>5、链路状态</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="9"  class="col-md-2">云管理平台虚拟化软件管理</td>
                                        <td>1、虚拟化软件的日常维护管理，包括状态检查、报错信息检查、用户管理、参数配置管理等工作；</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                      <tr>
                                        <td>2、虚拟化软件的变更实施，包括资源调整、参数及配置调整、软件包安装、打补丁和版本升级、分区资源新增或调整、更新CMDB等；</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                      <tr>
                                        <td>3、对虚拟化软件实施月度健康检查，记录并分析发现的异常；</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                      <tr>
                                        <td>4、虚拟化软件的备份恢复演练、切换演练；</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                      <tr>
                                        <td>5、虚拟化软件的性能监控及优化工作；</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                      <tr>
                                        <td>6、负责总结经验，编写或修改文档，完善操作手册及知识库。</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                      <tr>
                                        <td>7、虚拟化软件运行状态报告</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                      <tr>
                                        <td>8、虚拟化软件故障处理报告</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>9、虚拟化软件变更报告</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                      <tr>
                                        <td rowspan="10"  class="col-md-2">云管理平台备份与恢复管理</td>
                                        <td>1、系统备份恢复策略制定</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2、制定备份与恢复流程</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>3、制定备份的可恢复性定期测试计划</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>4、维护需要备份的指定数据文件和服务器的清单</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>5、按照备份计划进行备份与恢复测试操作</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>6、就任何非计划的甲方数据文件备份和备份窗口排期，通知客户；</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>7、维护备份和恢复机制/程序；</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>8、对指定的客户数据文件，进行临时备份；</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>9、检查日常备份的日志记录；</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>10、基于恢复请求，确定要进行恢复的数据文件名和版本。</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="8"  class="col-md-2">分布式文件系统管理</td>
                                        <td>1、跟踪分布式文件系统问题解决过程</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2、收集日志信息，对复杂的故障进行分析</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>3、分布式文件系统故障恢复后手工同步文件系统，</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>4、定期分析化布式文件系统性能，并按照需求调整分布式文件系统的参数配置</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>5、遵循变更管理流程下，升级分布式文件系统的版本</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>6、分布式文件系统运行状态报告</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>7、分布式文件系统故障处理报告</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>8、分布式文件系统变更报告</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="10"  class="col-md-2">云平台运维流程管理</td>
                                        <td>1、梳理现有流程，给出合理建议</td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2、制定与完善优化云IT管理流程，指导改进方案的实施</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>3、优化IT运维管理相关的文件和报告模板</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>4、监控、评审SLA的执行绩效并提出改进计划和程序</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>5、对IT运维事故、服务请求、访问授权处理跟踪、协调、监控等工作</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>6、进行问题处理跟踪、协调、监控等工作</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>7、进行日常变更、发布评审、变更控制、变更实施跟踪、变更质量控制与分析等工作</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>8、指导配置工程师完成配置数据录入、审核、校验、审计等工作</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>9、分析运维管理工具的不足之处并提出改进意见</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                    <tr>
                                        <td>10、结合最佳实践，引入新的管理工具包括工具的引进、验证测试、评定等工作，提升运维自动化能力</td>
                                        <td class="text-center"></td>
                                        <td class="text-center"></td>
                                        <td class="text-center"><i class="iconfont icon-duigou"></i></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div style="width:100%;" id="kr" class="go3">
                <div class="seleconeMain-shrts container erfs " style="padding-top:20px;padding-bottom:20px" >
                    <div class=" text-left redtitle">
                       <span class="redLine"></span><span class="redlasttitle">深度定制</span>
                    </div>
                       <div class="row text-center">
                        <div class="col-xs-12 col-sm-4 blurb-cta">
                            <div class="croundey"><img src="../../../assets/icon1/5.png" alt="" class="Yunimg"></div>
                            <h2 class="h2-18">全方位的系统托管服务</h2>
                            <div class="bluar-ccc mt" style="text-align:left !important">
                                <p class="text-left" style="text-align:left !important"><span class="color_999 text-left" style="font-size:14px;color:#666666;">提供行业成熟的架构方案，从部署上线到业务爆发的全程架构指导与优化，减少客户的运维成本与压力，从而更加专注于自身的业务发展。</span></p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 blurb-cta">
                            <div class="croundey"><img src="../../../assets/icon1/4.png" alt="" class="Yunimg"></div>
                            <h2 class="h2-18">云主机数据备份/恢复</h2>
                            <div class="bluar-ccc mt">
                                <p class="text-left" style="text-align:left !important;"><span class="color_999 text-left" style="font-size:14px;color:#666666;">提供行业成熟的架构方案，从部署上线到业务爆发的全程架构指导与优化，减少客户的运维成本与压力，从而更加专注于自身的业务发展。</span></p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 blurb-cta">
                            <div class="croundey"><img src="../../../assets/icon1/3.png" alt="" class="Yunimg"></div>
                            <h2 class="h2-18">网站数据库服务</h2>
                            <div class="bluar-ccc mt">
                                <p class="text-left"  style="text-align:left !important;"><span class="color_999 text-left" style="font-size:14px;color:#666666;">提供从在线技术支持到现场保障的全方位服务，评估数据库系统的性能瓶颈和风险隐患，提供相应的优化扩容专业建议及解决方案，共同保障客户的业务高峰期。</span></p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 blurb-cta" style="margin:40px 0;">
                            <div class="croundey"><img src="../../../assets/icon1/2.png" alt="" class="Yunimg"></div>
                            <h2 class="h2-18">架构优化与解决方案咨询服务</h2>
                            <div class="bluar-ccc mt">
                                <p class="text-left"  style="text-align:left !important;"><span class="color_999 text-left" style="font-size:14px;color:#666666;">运维保障团队提供业务流程架构、应用软件架构、信息数据架构、基础设施架构等的远程及现场支持服务，设置专家支持和应急响应机制，保障业务安全稳定。</span></p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 blurb-cta" style="margin:40px 0;">
                            <div class="croundey"><img src="../../../assets/icon1/1.png" alt="" class="Yunimg"></div>
                            <h2 class="h2-18">网站与系统安全优化</h2>
                            <div class="bluar-ccc mt">
                                <p class="text-left" style="text-align:left !important;"><span class="color_999 text-left" style="font-size:14px;color:#666666;">提供针对网站与系统的全面安全排查，包括但不限于OpenSSL，BASH，Nginx，MySQL等在内的安全问题，最大程度降低网站服务器被入侵的可能性。</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
             <div style="width:100%;background:rgb(248, 248, 248)" id="sz" class="go4">
                <div class="seleconeMain-shrts container erfs " style="padding-top:20px;padding-bottom:20px" >
                    <div class=" text-left redtitle">
                       <span class="redLine"></span><span class="redlasttitle">服务团队</span>
                    </div>
                       <div class="row text-center">
                        <div class="col-xs-12 col-sm-3 blurb-cta">
                            <div class="crounds "><img src="../../../assets/icon1/6.png" alt="" class="Yunimg"></div>
                            <h2 class="h2-18">管家服务团队</h2>
                            <div class="bluar-ccc mt">
                                <p class="text-center" style="text-align:center !important"><span class="color_999 text-center" style="font-size:14px;color:#666666;">处理客户发起的投诉建议</br>分配服务请求及工单跟踪</br>订单需求配置与管理交付</span></p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-3 blurb-cta">
                            <div class="crounds "><img src="../../../assets/icon1/7.png" alt="" class="Yunimg"></div>
                            <h2 class="h2-18">VIP保障团队</h2>
                            <div class="bluar-ccc mt">
                                <p class="text-center" style="text-align:center !important;"><span class="color_999 text-center" style="font-size:14px;color:#666666;">分配跟踪服务请求和事件</br>日常巡检和处理各类告警</br>管家服务配置交付与支持</span></p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-3 blurb-cta">
                            <div class="crounds "><img src="../../../assets/icon1/8.png" alt="" class="Yunimg"></div>
                            <h2 class="h2-18">运维专家团队</h2>
                            <div class="bluar-ccc mt">
                                <p class="text-center"  style="text-align:center !important;"><span class="color_999 text-center" style="font-size:14px;color:#666666;">处理升级事件和相关报障</br>全程一对一技术专家支持</br>技术咨询及技术方案确定</span></p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-3 blurb-cta" >
                            <div class="crounds "><img src="../../../assets/icon1/9.png" alt="" class="Yunimg"></div>
                            <h2 class="h2-18">产品研发团队</h2>
                            <div class="bluar-ccc mt">
                                <p class="text-center"  style="text-align:center !important;"><span class="color_999 text-center" style="font-size:14px;color:#666666;">处理升级事件和相关报障</br>业务架构设计与开发实施</br>运维管理和优化平台工具</span></p>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
      
            <div style="background:#ededed;;width:100%;height:auto;">
                <div class="seleconeMain-footer row">
                    <div class="container text-left" style="width:60%;padding-left:cd30px;">
                            <div class="col-md-3 col-xs-12" style="margin-top:27px;margin-bottom:20px;"><img src="../../../assets/qian.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">5天无理由退款</span></div>
                            <div class="col-md-3 col-xs-12 text-center" style="margin-top:27px;margin-bottom:20px;"><img src="../../../assets/24fuwu.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">7×24小时顾问支持</span></div>
                            <div class="col-md-3 col-xs-12 text-center" style="margin-top:27px;margin-bottom:20px;"><img src="../../../assets/1fuwu.png" alt="" style="width:18%;margin-right:10px;" class="imgeys"><span style="font-size:14px;color:#333333">1V1专家服务</span></div>
                            <div class="col-md-3 col-xs-12 text-right" style="margin-top:27px;margin-bottom:20px;padding-right:40px !important;"><img src="../../../assets/90fuwu.png" alt="" style="width:22%;margin-right:10px"><span style="font-size:14px;color:#333333">90秒极速响应</span></div>
                    </div>
                </div>
            </div>
    </div>
    <Sex></Sex>
</div>


</template>
<style>
.dv2:hover{
    cursor:pointer;
}
#servesTab thead th{
    height:40px;
    text-align:center;
    background:#ebebeb;
    font-size:700;
    color:#666666;
    font-size:12px;
}
#servesTab tbody .col-md-2{
    display:table-cell; vertical-align:middle;
}
#servesTab i{
    color:green;
    font-weight:700;
    font-size:18px;
}
.naver i{
    color:#c2c2c2;
}
.fixshow i{
    color:#c2c2c2;
}
/*悬浮框*/
.fixed-box{
 width:55px; position:fixed;right:0;bottom:100px;z-index:10;
}
.fixed-box .scrollUp{
    position:fixed;
    right:12px;
    display:none;
}
.fixed-ul li{
    background:#da121a; box-shadow:0 2px 4px 0 rgba(0,0,0,0.15); width:40px; height:40px; color:#fff;
    padding-top:1px; line-height:2px; cursor:pointer;
    font-size:10px;
}
.phone-li{
    margin-top:7px; position:relative;
}
.phone-box{
    width:185px; height:60px; position:absolute; right:68px; top:0;
}
.fixed-icon{
    display:block; margin:10px auto; width:18px; height:18px;
}
/**/
.rightBs ul li{
    background:#d8d8d8;
    width:10px;
    height:10px;
    border-radius:100%;
   margin-bottom:10px;
}
.rightBs ul li a{
    width:10px;
    height:10px;
    border-radius:100%;
    display:inline-block;
}
.rightBs ul{
    position:fixed;
    right:20px;
    top:40%;
}
.tm,.tm1,.tm2,.tm3,.tm4,.tm5{
    font-size:12px;
    color:#e41e2b;
}
.tm{
     position:absolute;
    top:-45px;
    left:8%;
}
.tm1{
     position:absolute;
    top:-45px;
    left:25%;
}
.tm2{
     position:absolute;
    top:-45px;
    left:39%;
}
.tm3{
     position:absolute;
    top:-45px;
    left:54%;
}
.tm4{
     position:absolute;
    top:-45px;
    left:70%;
}
.tm5{
    position:absolute;
    top:-45px;
    left:89%;
}
.lc,.lc1,.lc2,.lc3,.lc4,.lc5{
    font-size:12px;
    color:#666666;
}
.lc{
       position:absolute;
        top:45px;
        left:4%;
}
.lc1{
       position:absolute;
        top:45px;
        left:20%;
}

.lc2{
       position:absolute;
        top:45px;
        left:36%;
}

.lc3{
       position:absolute;
        top:45px;
        left:50%;
}
.lc4{
       position:absolute;
        top:45px;
        left:66%;
}
.lc5{
       position:absolute;
        top:45px;
        left:85%;
}
.ga{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    top:-10px;
    left:-2px;
}
.gs{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    left:10%;
    top:-10px;
}
.gd{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    left:27%;
    top:-10px;
}
.gf{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    left:41%;
    top:-10px;
}
.gg{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    left:56%;
    top:-10px;
}
.gm{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    left:72%;
    top:-10px;
}
.gj{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    left:90%;
    top:-10px;
}
.gk{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    left:100%;
    top:-10px;
}
.ga div{
    background:#ffffff;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
.gs div{
    background:#da121a;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
.gd div{
    background:#da121a;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
.gf div{
    background:#da121a;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
.gg div{
    background:#da121a;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
.gm div{
    background:#da121a;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
.gj div{
    background:#da121a;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
.gk div{
    background:#fff;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
@media (max-width: 768px){
      .ljs{
            width:100%;
            display:inline-block;
            margin-bottom:10px;
        }
        .liuchengimg{
            width:100%;
        }
        .imgets{
            display:none;
        }
        .iks{
            margin-left:0px !important;
        }
        .naver .row div{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .fixshow div{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
}
@media (min-width: 768px){
    .color_999{
        line-height:20px !important;
    }
      .ljs{
          width:16%;
          display:inline-block;
      }
      .imgets{
          display:inline-block;
      }
      .ik img{
         width:80px;
      }
      .iks{
        margin-left:20px !important;
      }
}
.mainPds{
    line-height:20px;
}
.crounds{
    background:#f5f5f5;
    border-radius:100px;
    width:88px;
    height:85px;
    margin:0 auto;
    line-height:80px;
}
.croundey{
       background:#f5f5f5;
        border-radius:100px;
        width:92px;
        height:91px;
        margin:0 auto;
        line-height:80px;
}
.fixshow a{
    font-size:14px;
    color:#333333;
}
.fixshow a:hover{
    font-size:14px;
    color:#da121a;
    border-bottom:1px solid #da121a;
    padding-bottom:20px;
}
.fixshow i:hover{
    font-size:14px;
    color:#da121a;
    border-bottom:1px solid #da121a;
    padding-bottom:20px;
}
.displayshow{
    display:none;
    position:fixed;
    top:0;
    z-index:999999999;
}
.cround{
    background: #f5f5f5;
    border-radius:100%;
    width:100px;
    height:130px;
    margin:0 auto;
    line-height:130px
}
.erfs{
        max-width: 1020px !important;
}
.redtitle{
    margin:40px 0 40px 0;
}
.redLine{
    display:inline-block;
    background:#da121a;
    width:4px;
    height:16px;
    margin-right:5px;
}
.redlasttitle{
    font-size:20px;
    color:#2b2b2b;
}
.sectb{
    display:block
}
.selecMain{
    background:#fff;
}
.naver{
    height:70px;
    line-height:70px;
}
.naver a{
    font-size:14px;
    color:#333333;  
}
.naver a i{
    font-size:14px;
    color:#A5A5A5 !important;  
}
.naver div a:hover{
    cursor:pointer;
    color:#da121a;
    display:inline-block;
    border-bottom:1px solid #da121a;
}

.nav-bottom-kk{
    width:100%;
    height:1px;
    background:#d6d6d6
}
.mt{
    margin-top:20px;
}
.h2-18{
    font-size:18px !important
}
.bigFang{
    display:inline-block;   
    background:#fdfdfd;
    border:1px solid #f0f0f0;
    box-shadow:0 0 1px 2px rgba(236,236,236,0.50);
    border-radius:2px;
    width:100%;
    height:80px;
    font-size:12px;
    text-align:left;
    position:relative;
}
.bigimg{
    display:inline-block;
    line-height:80px;
    width:40px
}
.dv1{
    font-size:14px;
    color:#2b2b2b;
    margin-top:10px;
    margin-left:5px;
}
.dv2{
    font-size:12px;
    color:#d5272c;
    margin-left:5px;
    margin-top:10px;
}
.dv3{
    font-size:48px;
    color:#da121a;
    position:absolute;
    right:10px;bottom:-10px;
}
.liHoversBj:hover{
    background:#EF131D;
}
.timezhou{
    border:2px solid #d2d2d2;
    width:90%;
    margin:0 auto 90px auto;
    height:0px;
    position:relative;
}
@media (min-width: 768px) {
    .lastyyy{
        margin-top:90px;
    }
    .seleconeMain-mainfir{
        margin-bottom:50px;
    }
    .imgeys{
        margin-left:20px !important
    }
}
@media (max-width: 768px) {
    .lastyyy{
        margin-top:10px;
        margin-bottom:20px;
    }
    .imgeys{
        margin-left:0px !important
    }
    .seleconeMain-mainfir{
        margin-bottom:0px;
    }
}
   .container{
     
        max-width: 1090px;

   }
  .seleconeMain-shrts h4{
       font-weight:100;
   }
   .seleconeMain-echarts h4{
       font-weight:100;
   }
   .footer-laster{
       
       margin-top:20px;
   }
   dl .dts{
        float:left;
        margin-top:10px;
        margin-right:10px;
   }
   dl .dds{
       text-align:left;
   }
   .dds-li{
       font-size:14px;
       color:#333333;
   }
   .dds-lis{
       font-size:12px;
       color:#666666;
       margin-top:5px;
   }
   *{margin:0px;padding:0px;}
   .selectHelp{
        background:#222222;text-align:center;background-size:100% 100%;
   }

   .seleconeMain-mainfir{margin-top:160px;}
   .nfir{margin-bottom:48px}
   .seleconeMain-mainfir .selecone-pfir{
        font-size:26px;
        color:#ffffff;
        text-align:center;
   }
   .seleconeMain-mainfir .selecone-pfir span{
       font-weight:100;
       color:#ccc;
   }
  
   .seclone-dv p{
       font-size:14px;
       color:#fff;
       text-align:center;
   }
   .seleconeMain-charts{
       width:100%;
   }
   .seleconeMain-charts H4{
       font-size:26px;
       color:#333333;
       text-align:center;
   }
   .seleconeMain-charts .h4Fir{
         margin-top:50px;
   }
   .Main-ul li img{
       width:47px;
       height:47px;
   }
   .seleconeMain-charts .h4Firer{
       margin-top:10px;
       margin-bottom:20px;
   }
   .seleconeMain-echarts .shrts-h4{
       margin-top: 40px;
           font-size: 26px;
    color: #333333;
    text-align: center;
   }
   .seleconeMain-echarts .shrts-h4er{
       margin-top: 10px;
    margin-bottom: 20px;
        font-size: 26px;
    color: rgb(51, 51, 51);
    text-align: center;
    }
   .seleconeMain-charts p{
       font-size:16px;
       color:#777777;
       text-align:center;
   }
   .seleconeMain-img img{
       width:42%;
       height:42%;
       
   }
   .seleconeMain-img{
       margin-top:25px;
       margin-bottom:60px;
   }
   .seleconeMain-shrts h4{
       font-size:26px;
       color:#333333;
       text-align:center;
     
   }
   .seleconeMain-shrts .shrts-h4{
      margin-top:50px;
   }
   .seleconeMain-shrts .shrts-h4er{
       margin-top:10px;
       margin-bottom:20px;
   }
   .seleconeMain-shrts p{
       font-size:16px;
       color:#777777;
       text-align:center;  
   }
   .seleconeMain-simg{
        margin-top:25px;
       margin-bottom:60px;
   }
   .seleconeMain-simg img{
       width:80%;
       height:80%;
   }
   .Main-ul{
       padding-left:20px;
   }
   .Main-li{
       margin-top:20px;
   }
   .iconer-img{
       margin-right:15px;
   }
   .seleconeMain-simg ul li .sp4{
       font-size:14px;
       color:#666666;
       text-align:center;
   }
   .seleconeMain-simg ul li .sp1{
      background:#e41e2b;
      width:20px;font-size:16px;
      height:20px;
      text-align:center;
      display:inline-block;
      border-radius:100%;
      color:#fff;
   }
   .seleconeMain-simg ul li .sp2{
     background:#e15f2d;
      width:20px;font-size:16px;
      height:20px;
      text-align:center;
      display:inline-block;
      border-radius:100%;
      color:#fff;
   }
   .seleconeMain-simg ul li .sp3{
     background:#f7a72c;
      width:20px;font-size:16px;
      height:20px;
      text-align:center;
      display:inline-block;
      border-radius:100%;
      color:#fff;
   }
    .seleconeMain-simg ul{
        margin-top:20px;
    }
     .seleconeMain-simg ul li span{
         margin-right:5px;
     }
    .seleconeMain-simg ul li{
        margin-bottom:10px;
    }
    .seleconeMain-echarts p{
    font-size: 16px;
    color: rgb(119, 119, 119);
    text-align: center;
    }
    .seleconeMain-echarts .child-p{
        font-size:26px;
       color:#333333;
       text-align:center;
       margin-top:50px; 
    }
    .seleconeMain-echarts .child-ps{
           font-size:26px;
       color:#333333;
       text-align:center;
    }
    .seleconeMain-echarts .child-pl{
           font-size:16px;
       color:#333333;
       text-align:center;
    }
    .spanTy{
        border:1px solid #e41e2b;font-size:12px;color:#fff;padding:10px 25px;display:inline-block;text-align:center;background:#e41e2b;margin-right:10px;
    }
    .panTy{
        border:1px solid #f0f0f0;font-size:12px;color:#f0f0f0;padding:10px 25px;display:inline-block;text-align:center;
    }
    .panTy:hover{
        color:#da121a;
        background:#fff;
        cursor:pointer;
    }
    .spanTy:hover{
        cursor:pointer;
        background:#fff;
        color:#e41e2b;
        border:1px solid #fff;
    }
     .scrollUp:hover{
        cursor:pointer;
    } 
</style>
<script>
    $(document).ready(function(){ 
                        // $(".rightBs ul li").find("a").click(function(){
                        //     // $(".rightBs ul li").css("background","#d8d8d8");
                        //     // $(this).css("background","#da121a");
                        //     alert(1)
                        // });
                       $(".fixshow a").hover(function(){
                                $(this).find("i").css("color","#da121a")
                        },function(){
                                $(this).find("i").css("color","#c2c2c2")
                        })
                         $(".naver a").hover(function(){
                                $(this).find("i").css("color","#da121a")
                        },function(){
                                $(this).find("i").css("color","#c2c2c2")
                        })
                     $(window).scroll(function(){
                    // console.log($(this).scrollTop());
                        // console.log("p",$(".naver").offset().top - $(window).scrollTop())
                        // console.log($(window).scrollTop())
                    //当window的scrolltop距离大于1时，go to 
                        if($(this).scrollTop() > 550){
                            $('.scrollUp').css("display","block")
                            }else{
                                    $('.scrollUp').fadeOut();
                            }
                        // if($(this).scrollTop()>80){
                        //     $(".sectb").css("display","none");
                        // };
                        // if($(this).scrollTop()<80){
                        //     $(".sectb").css("display","block");
                          
                        // };
                         if($(".naver").length==1){
                          
                            var topa = $(".naver").offset().top - $(window).scrollTop();
                             if(topa<0){
                                 $(".displayshow").css("display","block") ;
                                  $(".sectb").css("display","none");
                             }else if(topa>0){
                                  $(".displayshow").css("display","none") 
                                  $(".rightBs ul li").css("background","#d8d8d8");
                                  $(".sectb").css("display","block"); 
                             }
                             console.log($("#cg").offset().top - $(window).scrollTop());
                             if($(window).scrollTop()+70>=$("#cg").offset().top){
                                $(".rightBs ul li").css("background","#d8d8d8") 
                                $(".nexton").css("background","#da121a")
                             }
                             if($(window).scrollTop()+70>=$("#hy").offset().top){
                                  $(".rightBs ul li").css("background","#d8d8d8") 
                                    $(".nextsec").css("background","#da121a")
                             }
                            if($("#kr").length>0){
                                if($(window).scrollTop()+70>=$("#kr").offset().top){
                                    $(".rightBs ul li").css("background","#d8d8d8") 
                                        $(".nextthe").css("background","#da121a")
                                }
                            }
                             if($("#he").height()-($(window).height()+$(this).scrollTop())<50){
                                 $(".rightBs ul li").css("background","#d8d8d8") 
                                  $(".nextf").css("background","#da121a")  
                             }
                        }
                    });
            
                    $(".scrollUp").click(function(){
                        $('html ,body').animate({scrollTop: 0}, 300);
                        return false;
                    });


              })
 import Sec from "../../../components/SecondaryPages/SecondaryPages.vue"
 import Sex from "../../../components/SecondaryPages/SecondaryFooter.vue"
    export default{
         name: 'seleconeSix',
        components:{
            Sec,
            Sex
        },
        data(){
            return{
                 phoneBox:false,
                 
            }
        },
        methods:{
              ctaCloundCsbs:function(){
                    window.open("http://demo.csb-china.com")
                },
            spanTy:function(){
                this.$router.push({path: '/login'});
            },
            lj:function(){
                this.$router.push({path: '/registerOne'});
            },
             xiaowei:function(){
                // var that = this; 
                 var win = window.open("#/CustomerService");
                // var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
               //var win = window.open("#/CustomerService","_blank","height=600,width=500","toolbar=yes, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes");
            },
            phoneEnter:function(){
                this.phoneBox = true;
            },
            phoneleave:function(){
                    this.phoneBox = false;
            }
        },
        mounted:function(){
               $(".rightBs ul li").click(function(e){
                               //$(".rightBs ul li").css("background","#d8d8d8");
                               var s = $(this).index();
                               console.log(s)
                             $(".rightBs ul li").not($(this)).css("background","#d8d8d8")
                             $(this).css("background","#da121a")
                             var target = e.target;
                             var id = $(target).data("to");
                             $('html,body').animate({scrollTop:$('.'+id).offset().top+90}, 800);
                            
                         
                         })
                        //   $(".rightBs ul li").click(function(e){
                        //      var target = e.target;
                        //      var id = $(target).data("to");
                        //      $('html,body').animate({scrollTop:$('.'+id).offset().top}, 800);
                        //      $(".rightBs ul li").css("background","#d8d8d8");
                        //      $(this).next().css("background","#da121a")
                        //     //  if($(this).index()==0){
                        //     //      var a = '<a href="#cg"></a>';
                        //     //      $(this).append(a)
                        //     //       $(this).find("a").trigger("click");
                        //     //  }
                        //  })
        }
    //     mounted:function(){
    //         $(document).ready(function(){ 
    //                    $.fn.extend({
    //                     animateCss: function (animationName) {
    //                         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    //                         $(this).addClass('animated ' + animationName).one(animationEnd, function() {
    //                         $(this).removeClass('animated ' + animationName);
    //                         });
    //                     }           
    //                 });
    //          var index=0;
    //          var isn = true;
    //          $(window).scroll(function(){
              
    //            if(isn==true){
    //                 if($(this).scrollTop()>300&&$(this).scrollTop()<450){
    //                   $(".seleconeMain-charts").animateCss('bounceInLeft');
    //                 };
    //                 if($(this).scrollTop()>800&&$(this).scrollTop()<850){
    //                     $(".seleconeMain-shrts").animateCss('bounceInLeft');
    //                 };
    //                 if($(this).scrollTop()>1300&&$(this).scrollTop()<1350){
    //                     $(".broundDow").animateCss('bounceInLeft');
    //                 };
    //                 if($(this).scrollTop()>1750&&$(this).scrollTop()<1800){
    //                     $(".broundU").animateCss('bounceInLeft');
    //                     index=1;
    //                 };
    //            }
    //             if(index==1){
    //                isn = false;
    //            }
                  
    //     })
             
               
    //     })
    // }
    }
</script>