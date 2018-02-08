<template>
<!-- 创建云选型 -->
<div class="stepPlan" v-if="type=='compare'">
    <div class="stepPlan-item step22">
        <span class="circle" :class="start==1?'active-circle':id!='0'?'finish-circle':'common-circle'" v-on:click="comparePrev(1)">1</span>
        <div class="stepPlan-name" :class="start==1?'active-color':'common-color'">创建云分析</div>
        <div class="stepPlan-line" :class="start==1?'common-line':start==2?'active-line':resource==false?'common-line':'finish-line'"></div>
    </div>
    <div class="stepPlan-item step22">
        <span class="circle" :class="start==2?'active-circle':resource==false?'common-circle':'finish-circle'" v-on:click="comparePrev(2)">2</span>
        <div class="stepPlan-name common-color int15" :class="start==2?'active-color':'common-color'">资源组</div>
        <div class="stepPlan-line" :class="start==2&&compare==false?'common-line':start==3?'active-line':compare==true?'finish-line':'common-line'"></div>
    </div>
    <div class="stepPlan-item step22">
        <span class="circle" :class="start==3?'active-circle':compare==true?'finish-circle':'common-circle'" v-on:click="comparePrev(3)">3</span>
        <div class="stepPlan-name common-color int15" :class="start==3?'active-color':'common-color'">云选型</div>
        <div class="stepPlan-line common-line"></div>
    </div>
    <div class="stepPlan-item step22">
        <span class="circle common-circle" v-on:click="comparePrev(4)">4</span>
        <div class="stepPlan-name common-color int15">云实测</div>
        <div class="stepPlan-line" :class="start==5?'active-line':compare==true?'finish-line':'common-line'"></div>
    </div>
    <div class="stepPlan-item step10" v-on:click="comparePrev(5)">
        <span class="circle" :class="start==5?'active-circle':compare==true?'finish-circle':'common-circle'">5</span>
        <div class="stepPlan-name common-color int10" :class="start==5?'active-color':'common-color'">综合报告</div>
    </div>
</div>
<!-- 创建云规划 -->
<div class="stepPlan" v-else>
    <div class="stepPlan-item step18">
        <span class="circle" :class="index==1?'active-circle':id!='0'?'finish-circle':'common-circle'" v-on:click="planPrev(1)">1</span>
        <div class="stepPlan-name" :class="index==1?'active-color':'common-color'">创建云分析</div>
        <div class="stepPlan-line" :class="index==1?'common-line':index==2?'active-line':resource==false?'common-line':'finish-line'"></div>
    </div>
    <div class="stepPlan-item step18">
        <span class="circle" :class="index==2?'active-circle':resource==false?'common-circle':'finish-circle'" v-on:click="planPrev(2)">2</span>
        <div class="stepPlan-name common-color int15" :class="index==2?'active-color':'common-color'">资源组</div>
        <div class="stepPlan-line" :class="index==2&&clould==false?'common-line':index==3?'active-line':clould==true?'finish-line':'common-line'"></div>
    </div>
    <div class="stepPlan-item step18">
        <span class="circle" :class="index==3?'active-circle':clould==true?'finish-circle':'common-circle'" v-on:click="planPrev(3)">3</span>
        <div class="stepPlan-name common-color int15" :class="index==3?'active-color':'common-color'">云规划<span></span></div>
        <div class="stepPlan-line" :class="index==3&&compare==false?'common-line':index==4?'active-line':compare==true?'finish-line':'common-line'"></div>
    </div>
    <div class="stepPlan-item step18">
        <span class="circle" :class="index==4?'active-circle':compare==true?'finish-circle':'common-circle'" v-on:click="planPrev(4)">4</span>
        <div class="stepPlan-name common-color int15" :class="index==4?'active-color':'common-color'">云选型</div>
        <div class="stepPlan-line common-line"></div>
    </div>
    <div class="stepPlan-item step18">
        <span class="circle common-circle" v-on:click="planPrev(5)">5</span>
        <div class="stepPlan-name common-color int15">云实测</div>
        <div class="stepPlan-line" :class="index==6?'active-line':compare==true&&clould==true?'finish-line':'common-line'"></div>
    </div>
      <div class="stepPlan-item step10" v-on:click="planPrev(6)">
        <span class="circle" :class="index==6?'active-circle':compare==true&&clould==true?'finish-circle':'common-circle'">6</span>
        <div class="stepPlan-name common-color int10" :class="index==6?'active-color':'common-color'">综合报告</div>
    </div>
</div>
</template>
<script>
import '../steps/steps.css'
export default{
  name:"sds",
  props:["index","start","type","id"],
  data(){
    return {
        resource:false,
        clould:false,
        compare:false,
        isnot:''
    }
  },
  mounted:function(){
        //资源配置
        // this.$this.get('/broker/app/resource/group/'+this.id).then((response)=>{ 
        //     //console.log('aaaaaa',response); code=0无数据code=1有数据 
        //     this.resource =  response.data.data.code;     
        // }).catch((error)=>{ 
        // })
        //云规划
        this.$this.get('/broker/result/plan/'+this.id).then((response)=>{ 
            //console.log('aaaaaa',response); code=0无数据code=1有数据 
            let arr = [];
            for(let i=0;i<response.data.data.appResults.length;i++){
                if(response.data.data.appResults[i].moduleId==1){
                   arr.push(response.data.data.appResults[i].moduleId);
                   this.isnot =  JSON.parse(response.data.data.appResults[i].result).id;
                }
                // if(response.data.data.appResults[i].moduleId==2){
                //    arr.push(response.data.data.appResults[i].moduleId);
                // }
                // if(response.data.data.appResults[i].moduleId==3){
                //    arr.push(response.data.data.appResults[i].moduleId);
                // }
            }
            //arr.length==3?this.clould='true':this.clould='false'
        }).catch((error)=>{ 
        })
        this.judge(5);
        this.judge(3);
        this.judge(4);
        // 云选型
        // this.$this.get('/broker/compare/result/'+this.id).then((response)=>{ 
        //     this.compare = response.data.data.datas;
        // }).catch((error)=>{ 
        //     this.compare = undefined;
        // })
  },
  methods:{
    judge:function(moduleId){
        //1=云定性 2=收益度 3=亲和度 4=比较标准 5=资源配置;返回值：模块状态：0：未做；1：已做；2：已完成
        this.$this.get('/broker/app/module/status/'+moduleId+'/'+this.id).then((response)=>{ 
            if(moduleId==5){
                if(this.id!=0){
                    response.data.data==2?this.resource=true:resource=false;
                }else{
                    resource=false;
                }
                
            }else if(moduleId==3){
                response.data.data==2?this.clould=true:clould=false;
            }else if(moduleId==4){
                response.data.data==2?this.compare=true:compare=false;
            }
        }).catch((error)=>{ 
        })
    },
    comparePrev:function(I){
        if(this.id!=0){
            if(I==1){
                this.$router.push({path:'/createAnalysis',query:{type:'compare'}});
            }else if(I==2){
                this.$router.push({path:'/resourceGroup',query:{type:'compare',id:this.id}});
            }else if(I==3){
                if( this.isnot!=1 && this.isnot!=2 ){
                    this.$router.push({path:'/compareQuestion',query:{type:'compare',id:this.id}});
                }
            }else if(I==5){
                this.$router.push({path:'/colligateReport',query:{type:'compare',id:this.id}});
            }
        }
    },
    planPrev:function(I){
        if(this.id!=0){
            if(I==1){
                let that = this;
                this.$confirm('您确定要重新再创建一个云分析吗？', '温馨提示', {
                    cancelButtonText: '取消',
                    confirmButtonText: '确定',
                    confirmButtonClass:'lay-btn-red',
                    cancelButtonClass:'lay-cancel-btn',
                    type: 'warning',
                    center: false
                    }).then(() => {
                        that.$router.push({path:'/createAnalysis',query:{type:'plan'}});
                    }).catch(() => {
                    });         
            }else if(I==2){
                this.$router.push({path:'/resourceGroup',query:{type:'plan',id:this.id}});
            }else if(I==3){
                this.$router.push({path:'/planQuestion',query:{type:'plan',id:this.id,name:'1'}});
            }else if(I==4){
                if( this.isnot!=1 && this.isnot!=2 ){
                    this.$router.push({path:'/compareQuestion',query:{type:'plan',id:this.id}});
                }                
            }else if(I==6){
                this.$router.push({path:'/colligateReport',query:{type:'plan',id:this.id}});
            }
        }
    }
  }
}
</script>