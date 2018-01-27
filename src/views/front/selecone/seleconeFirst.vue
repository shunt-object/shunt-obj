<template>
<div style="background:#eceef3">
    <Sec></Sec>
    <div class="selecMain ">
            <div class="seleconeMain-banner row">
                <div class="seleconeMain-mainfir col-xs-12">
                    <p class="selecone-pfir">云实测<span>——我们应该上哪家云呢?</span></p>
                    <div class="seclone-dv">
                        <h3>六大场景 近二百多个标准</h3>
                        <p>有没有一个简单的应用，可以科学的告诉我结果呢?</p>
                    </div>
                </div>
            </div>
            <div class="seleconeMain-charts">
                <h4>现实中真实的困惑</h4>
                <P>面对诸多的云厂商，不知如何选择？</P>
                <div></div>
            </div>
    </div>
</div>


</template>
<style>
   *{margin:0px;padding:0px;}
   .seleconeMain-banner{background:url("../../../assets/seclecone-one.png") no-repeat;height:450px;text-align:center}
   .seleconeMain-mainfir{margin-top:160px;}
   .seleconeMain-mainfir .selecone-pfir{
        font-size:24px;
        color:#ffffff;
        text-align:center;
   }
   .seleconeMain-mainfir .selecone-pfir span{
       font-weight:100;
       color:#ccc;
   }
   .seclone-dv h3{
       font-size:32px;
       color:#ffffff;
       text-align:center;
   }
   .seclone-dv p{
       font-size:20px;
       color:#fff;
       text-align:center;
   }
   .seleconeMain-charts{
       width:100%;
   }
   .seleconeMain-charts H4{
       font-size:16px;
       color:#333333;
       text-align:center;
       margin-top:50px;
   }
   .seleconeMain-charts p{
       font-size:16px;
       color:#333333;
       text-align:center;
   }
</style>
<script>
 import Sec from "../../../components/SecondaryPages/SecondaryPages.vue"
    export default{
        components:{
            Sec
        }
    }
</script>