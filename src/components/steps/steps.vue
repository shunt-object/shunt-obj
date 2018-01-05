<template>
<div class="steps">
  <div class="steps-line"></div>
  <div class="steps-atage">
    <span :class="index==1?'step-active':'step-circle'">1</span>
    <p class="">创建上云分析</p>
  </div>
  <div class="steps-atage steps2">
    <span :class="index==2?'step-active':'step-circle'">2</span>
    <p class="">上云工作负载信息</p>
  </div>
  <div class="steps-atage steps3">
    <span :class="index==3?'step-active':'step-circle'">3</span>
    <p class="">云规划</p>
  </div>
  <div class="steps-atage steps4">
    <span :class="index==4?'step-active':'step-circle'">4</span>
    <p class="">云选型</p>
  </div>
  <div class="steps-atage steps5">
    <span :class="index==5?'step-active':'step-circle'">5</span>
    <p class="">云实测</p>
  </div>
  <div class="steps-atage steps6">
    <span :class="index==6?'step-active':'step-circle'">6</span>
    <p class="">上云分析报告</p>
  </div>
</div>
</template>
<script>
import '../steps/steps.css'
export default{
  props:["index","start"]
}
</script>