<template>
<div>
    <div class="graph-lenged">
        <div class="graphlegenged-box" v-if="isgraph==false">
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
</div>
</template>
<script>
import vis from "vis/dist/vis.min.js";
import network from '../../../../../src/assets/report/publicnetwork.png'
import appnetwork from '../../../../../src/assets/report/appnetwork.png'
import dbnetwork from '../../../../../src/assets/report/dbnetwork.png'
export default{
    name:'toplolgyModules',
    props:["appId","type"],
    data(){
        return {
            isgraph:'',
            graphnodes:[
                {id: 1, label: '公网', shape: 'image', image:network,color:{border:'#da121a'}},
            ],
            graphoptions:{},
            appfrom:[],
            graphedges:[],
            container:'',
            graphdata:{},
        }
    },
    mounted:function(){
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
                multiselect:true,//按 ctrl 多选
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
        this.topology();  //拓扑图
    },
    methods:{
        goGroup:function(){
            this.$router.push({path:'/resourceGroup',query:{id:this.appId,type:this.type}});
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
        }
    },
    components:{
        network,
        appnetwork,
        dbnetwork,
    }
}
</script>