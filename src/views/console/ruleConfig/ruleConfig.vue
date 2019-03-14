<template>
   <div id="totalMain">
       <div id="totalTitle">
            <div class="ruleButton" :class="btnIndex==index?'ruleButtonActive':''" v-for="(button,index) in buttonName" @click="btnClick(index)">{{button.name}}</div>
        </div>
        <div id="totalCenter"></div>
        <div>
            <bussiness v-if="btnIndex==0"></bussiness>
            <global v-if="btnIndex==1"></global>
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
    import bussiness from "../ruleConfig/ruleBusiness.vue"
    import global from "../ruleConfig/rulesCreateGlobal.vue"
    export default {
        name:'ruleConfig',
        components: {
            bussiness,//业务
            global,    //全局
        },
        data(){
            return{
              buttonName:[
                  {name:"业务规则",value:0},
                  {name:"全局规则",value:1},
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
