<template>
    <div class="total">
        <div class="total-header">
            <span></span>
            <router-link class="zong" to="/messageCenter">消息列表</router-link>
            ><p class="comback">消息发布</p>
        </div>
    <div class="messadd-main">
            <div style="width:100%;height:20px;"></div>
            <div class="fabu">
                <div><p>1.请选择发布消息类型</p></div>
                <div >
                    <select name="isAudit" id="isAudit" v-model="vals">
                        <option value="val"  class="opSelected">--选择消息发布类型--</option>
                        <option :value="le.id" :key="le.value" v-for="(le,index) in lei" class="optis">{{le.name}}</option>
                    </select>
                </div>
           </div>
           <div class="fabu">
                <div><p>2.请填写发布内容</p></div>
                <div >
                   <textarea class="tea" v-model="textareaVal" placeholder=" 请输入文字...">
                    
                   </textarea>
                   <p class="titMsg">* 请仔细检查您发布内容，确认发布</p>
                </div>
           </div>
           <div class="text-left centerrys">
             <div class="centerfabu" v-on:click="fabuCenter">
                确认发布
             </div>
             <div class="outfabu" v-on:click="outCenter">
                取消
             </div>
         </div>
    </div>
    </div>
</template>
<style>
    .messadd-main{
        background:#fff;
        width: 100%;
        font-size: 14px;
        height:600px;
    }
    @media (min-width: 768px) {  /** pc */
          .fabu{
                text-align:left;
                margin-left:72px;
                margin-top:30px;
            }
          .tea{
            width:600px;height:180px
          }
          .centerfabu{
                width:100px;
                height:36px;
                text-align:center;
                line-height:33px;
                background:#da121a;
                display:inline-block;
                border:1px solid #da1a12;
                border-radius:3px;
                margin-left:90px;
                color:#fff;
                margin-right:20px;
        }
        .centerrys{
            margin-top:50px;
        }
    }
     @media (max-width: 768px) {  /** mobile */
          .fabu{
                margin-top:30px;
            }
          .tea{
             width:100%;height:180px
           }
          .centerfabu{
            width:100px;
            height:36px;
            text-align:center;
            line-height:33px;
            background:#da121a;
            display:inline-block;
            border:1px solid #da1a12;
            border-radius:3px;
            margin:0 auto;
            color:#fff;
            
        }
         .centerrys{
            text-align:center;
            margin-top:20px;
        }
    }
    .fabu p{
        color:#000;
        font-weight:900
    }
    #isAudit{
        width:250px;
        height:35px;
        color:#797979;
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;
        padding-left:10px
    }
    textarea{outline:none;resize:none;}
    .titMsg{
        color:#da121a !important;
        font-size:12px !important;
        margin-top:10px;
    }
  
    .outfabu:hover{
        cursor:pointer;
        background:#F5F7FA;
    }
    .centerfabu:hover{
        cursor:pointer;
        background:#EF131D;
    }
    .outfabu{
        width:100px;
        height:36px;
        line-height:33px;
        display:inline-block;
        border:1px solid #ccc;
         border-radius:3px;
        text-align:center;
        background:#fff;
    }
   
</style>
<script>
    //     })
       export default{
            name:"messAdd",
            data(){
                return {
                   vals:"",
                   lei:[],
                   textareaVal:"",
                   scsss:[],
                   dataId:""
                }
            },
            mounted:function(){
                  this.initCenter();
                  $("#isAudit option:first").prop("selected", 'selected');  
            },
            methods:{
                initCenter:function(){
                    this.$this.get('/broker/prop/typedata/msg-type/-1').then((pon)=>{  //获取消息类型
                                this.lei = pon.data.data
                        }).catch((error)=>{
                    })
                  
                  this.vals = $(".opSelected").val();
                },
                fabuCenter:function(){
                     if(this.vals!="val"){
                           if(this.textareaVal!=""){
                               // var ids= $(".optis").attr("ids");
                                var obj ={
                                            "content": this.textareaVal,
                                            "isDel": 0,
                                            "isTop": 1,
                                            "type": this.vals
                                        };
                                         console.log(this.vals)
                                this.$this.post('/broker/content/add/content',obj).then((pon)=>{  //获取消息类型
                                    //this.scsss = pon.data.msg
                                         this.$alert('发布成功', '温馨提示', {
                                            confirmButtonText: '我知道了',
                                            showClose:false,
                                            confirmButtonClass:'lay-btn-red',
                                            type: 'warning'
                                        });
                                      this.textareaVal = "" ;
                                      //$("#isAudit").first("option").attr()
                                      this.initCenter();
                                    }).catch((error)=>{
                                })
                           }else{
                               this.textareaVal="内容不能为空"
                           }
                    }
                   //console.log(this.textareaVal)
                },
                outCenter:function(){
                     this.initCenter();
                     this.textareaVal=""
                }
            }
       }
</script>