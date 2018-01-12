<template>

    <div class="Lists">
    <div class="total-header">
        <span></span>
        总览
    </div>
        <div class="modle" v-show="this.flag"><input type="button" value="创建云分析" v-on:click="als"></div>
        <div v-on:click="UpRoute" class="creastes">创建云分析</div>
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
                        <span class="col-md-2 removeIng"   v-on:click="rems(vp.id)" style="color:#337ab7">删除云分析</span>
                      </li>
                      <li class="row spx active" v-for="item in vp.projectApps">
                        <span class="col-md-1 bn"></span>
                        <span class="col-md-1 bn"></span>
                        <span class="col-md-3 bn">{{item.appname}}</span>
                        <span class="col-md-6 text-left">
                            <p >
                                <a v-for="(im,index) in item.appResults" id="as" style="position:relative;cursor:pointer" v-on:click="onm(im.moduleId,item.id,im.taskStatus)"  >
                                    <span :class="im.taskStatus==2?'bg':((im.taskStatus==1)?'hg':'fl')" >{{im.moduleName}}</span>                                    
                                    <!--0=未做；1=已做未完成；2=已完成-->
                                </a>
                                
                                
                            </p>
                            <div class="progress" style="background:#f8f8f8">
                                <div class="progress-bar" role="progressbar" aria-valuenow="60"
                                    aria-valuemin="0" aria-valuemax="100" :style="{width:item.percent+'%'}">
                                </div>
                            </div><span class="spc">{{item.percent}}%</span>
                            
                        </span>
                        <span class="col-md-1 cs" v-on:click="remYy(item.id)">删除应用</span>
                
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
.creastes{
    border:1px solid #ccc;
     cursor:pointer;
     padding:5px 10px;
     background:rgb(51, 122, 183);
     color:#ccc;
}
.removeIng:hover{
    cursor:pointer
}
.modle{
    position:absolute;
    left:0;
    top:0px;
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
.cs{
    margin-top:88px;
     cursor:pointer;
     color:#337ab7
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
    border:1px solid #868686;
    display:inline-block;
    margin:5px 0 0 0;
} 
.spc{
    margin-left:5px;
    color:#000;
}
.progress-bar{
    background-color:#868686;
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
.hg{
    background:url("../../../../assets/brank.png") no-repeat;
    background-size:cover;
    text-align:center;
    border-radius:20px;
    border:0px solid #ccc;
    
   width:90px;
    display:block
}
.bg{
     background:#868686;
    text-align:center;
    border-radius:20px;
    border:0px solid #ccc;
     width:90px;
    margin:0 10px 0 0; 
      display:block  
}
.fl{
    background:#e4e4e4;
    text-align:center;
    border-radius:20px;
    border:0px solid #ccc;
     width:90px;
    margin:0 10px 0 0;
      display:block
}
.ad{
    width:100px;
    margin-right:10px;
}
.notice-title{
    margin:0px !important;
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
            // onm:function(index){
                
            //      this.i = index
            // },
            // onm:function(index){
            //     //alert(index);
            //     //console.log(this.vpd);
            //     var ps = [];
            //     var aix = this.vpd;
            //     for(var i=0;i<aix.length;i++){
            //         if(aix[i].projectApps&&aix[i].projectApps.length>0){
            //             for(var j=0;j<aix[i].projectApps.length;j++){
            //                 //console.log(aix[i].projectApps[j].appResults)
            //                 if(aix[i].projectApps[j].appResults&&aix[i].projectApps[j].appResults.length>0){
            //                         for(var k=0;k<aix[i].projectApps[j].appResults.length;k++){
            //                            // console.log(aix[i].projectApps[j].appResults[k].result)
            //                          var a=aix[i].projectApps[j].appResults[k].result;
            //                         console.log(a)
            //                         }
            //                 }
            //             }
            //         }
            //     }
            //     ps.push(a);
                 
            // },
            als:function(){
                this.$router.push({path:'/CreateAnalysis'});
            },
            rems:function(e){
                var that = this;
                var con = this.$layer.confirm("您确定要删除该云分析下的所有应用吗?", async function () {
                        let ids=[];
                        ids.push(e);
                        var asf = {"ids":ids};
                        //console.log(asf);
                        that.$this({
                            method: "delete",
                            url: "/broker/app/analysis",
                            data: asf
                        }).then(function(response) {
                             that.$layer.close(con);
                            window.location.reload();
                        }).catch(function(error) {
                            console.log(error);
                        });
                },function(){
                    return ;
                });
            },

            remYy:function(id){
                console.log(id)
                var that = this;
                 var con = this.$layer.confirm("您确定要删除该应用吗?", async function () {
                    var ida = [];
                    ida.push(id); //=也ok
                        var asg = {"ids":ida};
                        that.$this({
                            method: "delete",
                            url: "/broker/app/applications",
                            data: asg
                        }).then(function(response) {
                             that.$layer.close(con);
                            window.location.reload();
                        }).catch(function(error) {
                            console.log(error);
                        })
                     },function(){
                    return ;
                });

            },
            onm:function(n,o,b){
                //this.$router.push({path:'/',query:{id:n}});
                console.log(n,o,b);
                var o = o;
                var n = n;
                if(n == 4){
                    if((b==1 || b==0)){
                        this.$router.push({path:'/compareQuestion',query:{id:o}});
                    }
                }else if(n == 5){
                     if((b==1 || b==0)){
                       this.$router.push({path:'/resourceGroup',query:{id:o}});
                    }
                    
                }else{
                    if(b==1 || b==0){
                        this.$router.push({path:'/planQuestion',query:{id:o,name:n}});
                    }
                }
            },
            UpRoute:function(){
                this.$router.push({path:'/CreateAnalysis'});
            }
            

        },
        created:function(){
                    this.$http.get('/broker/result/analysis').then((res)=>{
                     

                        this.vpd = eval("(" + res.bodyText +")").data;   //所有数据
                               console.log(this.vpd);
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