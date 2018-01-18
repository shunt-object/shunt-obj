<template>
<!-- 创建云选型 -->
<div class="stepPlan" v-if="type=='compare'">
    <div class="stepPlan-item step22">
        <span class="circle" :class="start==1?'active-circle':start>=2?'finish-circle':'common-circle'" v-on:click="comparePrev(1)">1</span>
        <div class="stepPlan-name" :class="start==1?'active-color':'common-color'">创建云分析</div>
        <div class="stepPlan-line" :class="start==1?'common-line':start==2?'active-line':'finish-line'"></div>
    </div>
    <div class="stepPlan-item step22">
        <span class="circle" :class="start==2?'active-circle':start>=3?'finish-circle':'common-circle'" v-on:click="comparePrev(2)">2</span>
        <div class="stepPlan-name common-color textIndent-20" :class="start==2?'active-color':'common-color'">上云工作负载信息</div>
        <div class="stepPlan-line" :class="start==2?'common-line':start==3?'active-line':start==4?'finish-line':'common-line'"></div>
    </div>
    <div class="stepPlan-item step22">
        <span class="circle" :class="start==3?'active-circle':start>=4?'finish-circle':'common-circle'" v-on:click="comparePrev(3)">3</span>
        <div class="stepPlan-name common-color textIndent10" :class="start==3?'active-color':'common-color'">云选型</div>
        <div class="stepPlan-line" :class="start==3?'common-line':start==4?'active-line':start==5?'finish-line':'common-line'"></div>
    </div>
    <div class="stepPlan-item step22">
        <span class="circle" :class="start==4?'active-circle':start>=5?'finish-circle':' common-circle'" v-on:click="comparePrev(4)">4</span>
        <div class="stepPlan-name common-color textIndent10" :class="start==5?'active-color':'common-color'">云实测</div>
        <div class="stepPlan-line" :class="start==4?'common-line':start==5?'finish-line':'common-line'"></div>
    </div>
    <div class="stepPlan-item step10">
        <span class="circle" :class="start==5?'finish-circle':'common-circle'">5</span>
        <div class="stepPlan-name common-color" :class="start==5?'active-color':'common-color'">上云分析报告</div>
    </div>
</div>
<!-- 创建云规划 -->
<div class="stepPlan" v-else>
    <div class="stepPlan-item step18">
        <span class="circle" :class="index==1?'active-circle':index>=2?'finish-circle':'common-circle'" v-on:click="planPrev(1)">1</span>
        <div class="stepPlan-name" :class="index==1?'active-color':'common-color'">创建云分析</div>
        <div class="stepPlan-line" :class="index==1?'common-line':index==2?'active-line':'finish-line'"></div>
    </div>
    <div class="stepPlan-item step18">
        <span class="circle" :class="index==2?'active-circle':index>=3?'finish-circle':'common-circle'" v-on:click="planPrev(2)">2</span>
        <div class="stepPlan-name common-color textIndent-20" :class="index==2?'active-color':'common-color'">上云工作负载信息</div>
        <div class="stepPlan-line" :class="index==2?'common-line':index==3?'active-line':index==4?'finish-line':'common-line'"></div>
    </div>
    <div class="stepPlan-item step18">
        <span class="circle" :class="index==3?'active-circle':index>=4?'finish-circle':'common-circle'" v-on:click="planPrev(3)">3</span>
        <div class="stepPlan-name common-color textIndent10" :class="index==3?'active-color':'common-color'">云规划</div>
        <div class="stepPlan-line" :class="index==3?'common-line':index==4?'active-line':index==5?'finish-line':'common-line'"></div>
    </div>
    <div class="stepPlan-item step18">
        <span class="circle" :class="index==4?'active-circle':index>=5?'finish-circle':'common-circle'" v-on:click="planPrev(4)">4</span>
        <div class="stepPlan-name common-color textIndent10" :class="index==4?'active-color':'common-color'">云选型</div>
        <div class="stepPlan-line" :class="index==4?'common-line':index==5?'active-line':index==6?'finish-line':'common-line'"></div>
    </div>
    <div class="stepPlan-item step18">
        <span class="circle" :class="index==5?'active-circle':index>=6?'finish-circle':' common-circle'" v-on:click="planPrev(5)">5</span>
        <div class="stepPlan-name common-color textIndent10" :class="index==5?'active-color':'common-color'">云实测</div>
        <div class="stepPlan-line" :class="index==5?'common-line':index==6?'finish-line':'common-line'"></div>
    </div>
    <div class="stepPlan-item step10">
        <span class="circle" :class="index==6?'finish-circle':'common-circle'">6</span>
        <div class="stepPlan-name common-color" :class="index==6?'active-color':'common-color'">上云分析报告</div>
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

    }
  },
  mounted:function(){
  },
  methods:{
    comparePrev:function(I){
      if(I<this.start){
        if(I==1){
            this.$router.push({path:'/createAnalysis',query:{type:'compare'}});
        }else if(I==2){
            this.$router.push({path:'/resourceGroup',query:{type:'compare',id:this.id}});
        }else if(I==3){
            this.$router.push({path:'/compareQuestion',query:{type:'compare',id:this.id}});
        }
      }
    },
    planPrev:function(I){
      if(I<this.index){
        if(I==1){
          this.$router.push({path:'/createAnalysis',query:{type:'plan'}});
        }else if(I==2){
          this.$router.push({path:'/resourceGroup',query:{type:'plan',id:this.id}});
        }else if(I==3){
          this.$router.push({path:'/planQuestion',query:{type:'plan',id:this.id,name:'1'}});
        }else if(I==4){
          this.$router.push({path:'/compareQuestion',query:{type:'plan',id:this.id}});
        }
      }
    }
  }
}
</script>