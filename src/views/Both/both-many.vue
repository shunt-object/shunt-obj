<template>
    <div>
         <ul class="uls">
             <li class="sps row">
                 <span class="col-md-1"><input type="checkbox"></span>
                 <span class="col-md-1">云分析</span>
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
                                <a href="#" v-for="im in item.appResults" id="as" style="position:relative">{{im.moduleName}}</a>
                         
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
.row a{
    display:inline-block;
    padding:5px 40px;
    margin:0 10px 0 0;
    background:#ccc;
    border-radius:20px;
    border:1px solid #ccc;
}

</style>
<script>
 $("#as").hover(function(){
                    // for(var i=0;i<$(".as").length;i++){
 alert(1)                   //     $("#pol")[i].css('display','block');
                    // }
                })
    export default {
        name:"bothMany",
        data (){
            return {
                vpd:[],
                ssd:[],
                ds:[],
                df:[],
                dg:"",
                gv:""
            }
        },
        methods:{
            
               
            

        },
        created:function(){
                    this.$http.get('/broker/result/analysis').then((res)=>{
                        console.log(eval("(" + res.bodyText +")").data.length);

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
                                 console.log(this.dg);
                                  for(let c = 0;c<this.dg.length;c++){
                                        this.gv = this.dg[c].moduleName;
                                        console.log(this.gv) 

                                 }
                            }
                        }
                        
                     },(err)=>{
                         console.log("不好意思")
                      })
        }
    }
</script>