<template>
    <div>   123132321321321321212  </div>
</template>
<style>
    
</style>
<script>
    export default{
        name:"ry",
        data(){
            return {
                
            }
        },
        updated:function(){
            var a = sessionStorage.getItem('testKey',"0");
            console.log(a)
        },
        mounted: function () {
            
        },
        methods:{
            rongClouds:function(){
                    //  RCS.init({
                    //     appKey:"cpj2xarlc73sn",
                    //     token:"",
                    //     upload:{
                    //         fileServer:"http://upload.qiniu.com",
                    //         isPrivate:false
                    //     },
                    //     target:document.getElementById(""),
                    //     customerServiceId:"",
                    //     extraInfo:{
                    //         "userInfo":{
                    //             "name":"京玉"
                    //         },
                    //         "requestInfo":{
                    //             "referrer":""
                    //         }
                    //     }
                    //  })
                    alert(1)
            }
        }
    }
</script>