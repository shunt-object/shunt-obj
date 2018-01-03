<template>
    <div>
         <ul class="uls">
             <li class="sps row">
                 <span class="col-md-1"><input type="checkbox"></span>
                 <span class="col-md-1">云分析名称</span>
                 <span class="col-md-2">应用名称</span>
                 <span class="col-md-4">云规划进度</span>
                 <span class="col-md-4">云选型进度</span>
             </li>
             <li class="" v-for="vp in vpd">
                 <ul >
                      <li class="row sps" >
                        <span class="col-md-1"><input type="checkbox"></span>
                        <span class="col-md-1">{{vp.proname}}</span>
                        <span class="col-md-2"></span>
                        <span class="col-md-4"></span>
                        <span class="col-md-4"></span>
                      </li>
                      <li class="row spx active" v-for="item in vp.projectApps">
                        <span class="col-md-1 bn"></span>
                        <span class="col-md-1 bn"></span>
                        <span class="col-md-2 bn">{{item.appname}}</span>
                        <span class="col-md-8 text-left">
                            <p >
                                
                                <a v-for="(im,index) in item.appResults" id="as" style="position:relative" v-on:click="onm(index)">
                                    <a  class="ad" v-if="im.moduleName!=='受益度'&&im.moduleName!=='亲和度'&&im.result!==null"  style="position:absolute;left:0;top:-50px;width:160px;">{{JSON.parse(im.result).sname}}</a>
                                    <a  class="ad" v-else-if="im.result==null"  style="position:absolute;left:0;top:-50px;" >未完成</a>
                                    <a  class="ad" v-else style="position:absolute;left:0;top:-50px;" >{{im.result}}</a><!--v-show="index == i"-->
                                    {{im.moduleName}}
                                </a>
                                <a>资源组配置</a>
                                <a >标准</a>
                         
                            </p>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="60"
                                    aria-valuemin="0" aria-valuemax="100" style="width: 40%;">
                                    <span class="sr-only">40% 完成</span>
                                </div>
                            </div><span class="spc">40%</span>
                        </span>
                     </li>
                 </ul> 
             </li>
         </ul>
    </div>
    
    
</template>
<style>
.active{
    display:block
}
#pol{
    display:BLOCK;
}

.sps{
   height:50px;
   background:#ccc;
   border:1px solid #000;
   line-height:49px;
   
}
.spx{ 
   height:200px;
   background:red;
   
}
.spx .bn{
    line-height:200px
}
.spx span p{margin-top:80px;}

.progress{
    width:59%;
    margin:20px 0 0 0;
    height:12px;
    border-radius:10px;
    display:inline-block;
    margin:5px 0 0 0;
} 
.spc{
    margin-left:5px;
    color:#ccc;
}
.progress-bar{
    background-color:#ccc;
    border-radius:10px;
}
*{margin:0;padding:0}
ul li{
    list-style:none
}
a{
    text-decoration:none; 
    color:#000;
}
a:hover{
    text-decoration:none;  
}
.row a{
    display:inline-block;
    text-align:left;
    width:90px;
    margin:0 10px 0 0;
    background:#ccc;
    border-radius:20px;
    border:1px solid #ccc;
}
.ad{
    width:100px;
    margin-right:10px;
}
</style>
<script>

    export default {
        name:"overviewList",
        data (){
            return {
                vpd:[],
                ssd:[],
                ds:[],
                df:[],
                dg:"",
                gv:"",
                list:false,
                i:-1
            }
        },
        methods:{
            onm:function(index){
                
                 this.i = index
            }
               
            

        },
        created:function(){
                    this.$http.get('/broker/result/analysis').then((res)=>{
                        console.log(eval("(" + res.bodyText +")").data);

                        this.vpd = eval("(" + res.bodyText +")").data;   //所有数据
                        for(let i = 0;i<this.vpd.length;i++){            
                            this.ssd = this.vpd[i].projectApps;                                         // app   5个
                            //console.log(this.ssd);
                            // for(let e = 0;e<this.ds.length;e++){
                            //         console.log(this.ds[e])
                            // }  
                            for(let j=0;j<this.ssd.length;j++){
                               // console.log('appname-----',this.ssd[j].appname);
                                // this.df.push(this.ssd[j].appname);
                                this.dg = this.ssd[j].appResults;
                                 //console.log(this.dg);
                                  for(let c = 0;c<this.dg.length;c++){
                                        this.gv = this.dg[c].result;
                                        console.log(eval("("+ this.gv +")") );
                                        console.log(this.gv )

                                 }
                            }
                        }
                        
                     },(err)=>{
                         console.log("不好意思")
                      })
        }
    }
</script>