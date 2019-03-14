<template>
   <div id="totalMain">
       <div id="totalTitle">
            <div class="ruleButton" :class="btnIndex==index?'ruleButtonActive':''" v-for="(button,index) in buttonName" @click="btnClick(index)">{{button.name}}</div>
        </div>
        <div id="totalCenter"></div>
        <div>
            <enior v-if="btnIndex==1"></enior>
            <ordinary v-if="btnIndex==0"></ordinary>
        </div>
   </div>
 
</template>
<style>
    .ruler_small input{
        width: 130px;
        height: 30px;
    }
    .ruler_long input{
        width: 265px;
        height: 30px;
    }
    .no-4{
        padding:10px 0px!important;
    }
</style>

<script>  
    import "../ruleConfig/rulesCreate.css"
    import ordinary from "../ruleConfig/ruleCreateOrdinary.vue"
    import enior from "../ruleConfig/ruleCreateEnior.vue"
    export default {
        name:'ruleCreate',
        components: {
            ordinary,//普通
            enior,    //高级
        },
        data(){
            return{
              buttonName:[
                  {name:"普通规则",value:0},
                  {name:"高级规则",value:1},
              ],
              btnIndex:0,
            }
        },
        mounted:function(){
           
        },
        methods:{
            btnClick:function(index){
                this.btnIndex = index
            }
        }
    }
</script>
