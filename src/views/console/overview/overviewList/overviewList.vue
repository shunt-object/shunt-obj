<template>

    <div class="Lists">
        <div class="modle" v-show="this.flag"><input type="button" value="创建云分析" v-on:click="als"></div>
         <ul class="uls">
             <li class="sps row">
                 <span class="col-md-1"><input type="checkbox" class="text-center"></span>
                 <span class="col-md-2">云分析名称</span>
                 <span class="col-md-1">应用名称</span>
                 <span class="col-md-4">云规划进度</span>
                 <span class="col-md-3">云选型进度</span>
             </li>
             <li class="" v-for="vp in vpd">
                 <ul >
                      <li class="row sps" >
                        <span class="col-md-1"><input type="checkbox"></span>
                        <span class="col-md-2">{{vp.proname}}</span>
                        <span class="col-md-1"></span>
                        <span class="col-md-6"></span>
                        <span class="col-md-2 removeIng" style="color:#222222"  v-on:click="rems(vp.id)">删除云分析</span>
                      </li>
                      <li class="row spx active" v-for="item in vp.projectApps">
                        <span class="col-md-1 bn"></span>
                        <span class="col-md-1 bn"></span>
                        <span class="col-md-3 bn">{{item.appname}}</span>
                        <span class="col-md-7 text-left">
                            <p >
                                <a v-for="(im,index) in item.appResults" id="as" style="position:relative" v-on:click="onm(index)">
                                    <a  class="ad" v-if="im.moduleName!=='受益度'&&im.moduleName!=='亲和度'&&im.result!==null"  style="position:absolute;left:0;top:-50px;width:80px;">{{JSON.parse(im.result).sname}}</a>
                                    <a  class="ad" v-else-if="im.result==null"  style="position:absolute;left:0;top:-50px;" >未完成</a>
                                    <a  class="ad" v-else style="position:absolute;left:0;top:-50px;" >{{im.result}}</a><!--v-show="index == i"-->
                                    {{im.moduleName}}
                                    
                                    
                                </a>
                                
                         
                            </p>
                            <div class="progress" style="background:#99a0a3">
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
.Lists{
    position:relative;
    height:100%;
}
.removeIng:hover{
    cursor:pointer
}
.modle{
    position:absolute;
    left:0;
    top:10px;
    width:100%;
    height:600px;
    background:#000;
    opacity:0.5;  
}
.modle input{
    width:15%;
    height:15%;
    margin:25% 40%;
    text-align:center;
    color:#000;
    font-weight:900
}
.active{
    display:block;

}
#pol{
    display:BLOCK;
}

.sps{
   height:50px;
   background:#ccc;
   border:1px solid #fff;
   line-height:49px;
   
}
.spx{ 
   height:200px;
   
   
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
    color:#fff;
}
.progress-bar{
    background-color:#f8f8f8;
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
    background:#fff;
    text-align:center;
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
                i:-1, 
                flag:false,
                
                //{"ids":[1,2,3]}
            }
        },
        methods:{
            onm:function(index){
                
                 this.i = index
            },
       
            als:function(){
                this.$router.push({path:'/CreateAnalysis'});
            },
            rems:function(e){
                var that = this;
                var con = confirm("您确定要删除该云分析下的所有应用吗?");
                if(con == true){
                    let ids=[];
                    ids.push(e);
                    var asf = {"ids":ids};
                    console.log(asf);
                    that.$this({
                        method: "delete",
                        url: "/broker/app/analysis",
                        data: asf
                    }).then(function(response) {
                        window.location.reload();
                    }).catch(function(error) {
                        console.log(error);
                    });
                }else{
                    return;
                }
            }
            

        },
        created:function(){
                    this.$http.get('/broker/result/analysis').then((res)=>{
                        console.log(eval("(" + res.bodyText +")").data);

                        this.vpd = eval("(" + res.bodyText +")").data;   //所有数据
                            
                                    if(this.vpd.length==0){
                                        this.flag=true
                                    }else{
                                        this.flag=false
                                    }
                                
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