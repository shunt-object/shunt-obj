<template>
<div>
    <el-dialog title="意见反馈" :visible.sync="feedback.boolean" style="text-align:left;" @close='closeDialog'>
        <div class="comment-box">
            <div class="comment-word">您的反馈，是我们前进的动力！</div>
            <div class="comment-list">
                <div class="row">
                    <div class="col-md-2 comment-key">我的评分</div>
                    <div class="col-md-10" style="padding-left:0px !important;">
                        <span class="comment-star" :class="item.boolean==false?'star1':'star2'" v-for="(item,index) in starlist" v-on:click="selectstar(index)"></span>
                    </div>
                </div>
            </div>
            <div class="comment-list">
                <div class="row">
                    <div class="col-md-2 comment-key"><span style="color:#da121a;">*</span>意见类型</div>
                    <div class="col-md-10" style="padding-left:0px !important;">
                        <button class="comment-type" :class="item.boolean==false?'comment-default':'comment-active'" v-for="(item,index) in commentlist" v-on:click="selectcomment(index)">{{item.data.name}}</button>
                    </div>
                </div>
            </div>
            <div class="comment-list">
                <div class="row">
                    <div class="col-md-2 comment-key">意见内容</div>
                    <div class="col-md-10" style="padding-left:0px !important;">
                        <textarea class="comment-text" placeholder="欢迎将使用中遇到的问题反馈给我们" v-model="confirmobj.content"></textarea>
                    </div>
                </div>
            </div>
            <div class="comment-list">
                <div class="row">
                    <div class="col-md-2 comment-key">联系方式</div>
                    <div class="col-md-10 contactway" style="padding-left:0px !important;">{{contactway}}</div>
                </div>
            </div>            
            <div class="">
                <div class="comment-notice">
                    <p>温馨提示：</p>
                    1、反馈会在1-3个工作日与您联系(工作时间：周一至周五，9:00-18:00)。<br>
                    2、产品使用中遇到的问题您可以联系<span>Prof. 吴</span> 。<br>
                    3、紧急问题建议您拨打<span> 400-828-7308 </span>或发邮件到<span> Help@csb-china.com </span>。
                </div>
            </div>
            <div class="email-btn">
                <button class="safe-save-btn" v-on:click="success()">提交</button>
                <button class="safe-cel-btn" v-on:click="undialog()">取消</button>
            </div>   
        </div>         
    </el-dialog>
</div>
</template>
<script>
export default{
    props:["feedback"],
    data(){
        return {
            dialogcomment:false,
            commentlist:[],
            starlist:[
                {id:1,boolean:false},
                {id:2,boolean:false},
                {id:3,boolean:false},
                {id:4,boolean:false},
                {id:5,boolean:false}
            ],
            contactway:'',
            confirmobj:{
                content:'',
                grade:'0',
                type:''
            },
            msg: "我是子组件中的数据"
        }
    },
    mounted:function(){
        this.getcomment();
    },
    methods:{
        closeDialog:function(){
            this.$emit('my-event', this.feedback.boolean);
        },
        emitEvent:function(){
            this.$emit('my-event', this.msg)
        },
         getcomment:function(){            
            this.$this.get('/broker/prop/typedata/fb/-1').then((response)=>{
                //console.log('----',response);
                for(let i=0;i<response.data.data.length;i++){
                    this.commentlist.push({data:response.data.data[i],boolean:false});
                }
            }).catch((error)=>{
            })
        },
        selectstar:function(index){
            let n=0;
            if(this.starlist[index].boolean==true){
                for(let i=0;i<this.starlist.length;i++){
                    if(this.starlist[i].boolean==true){
                        n++;
                    }
                }
                if(index<n-1){
                    for(let j=index+1;j<this.starlist.length;j++){
                        this.starlist[j].boolean = false;
                    }
                }else{
                    this.starlist[index].boolean = false;
                }
                if(index==0){
                    this.starlist[index].boolean = true;
                }
            }else{
                if(index>0){
                    for(let i=0;i<this.starlist.length;i++){
                        if(i<=index){
                            this.starlist[i].boolean = true;
                        }
                    }
                }else{
                    this.starlist[index].boolean = true;
                }
            }
            this.confirmobj.grade = this.starlist[index].id;
        },
        selectcomment:function(index){
            for(let i=0;i<this.commentlist.length;i++){
                this.commentlist[i].boolean = false;
            }
            this.commentlist[index].boolean = true;
            this.confirmobj.type = this.commentlist[index].data;
        },
        success:function(){
            //console.log(this.confirmobj);
            if(this.confirmobj.type==''){
                //this.$layer.msg('请选择意见类型');
                this.$message({
                    message: '请选择意见类型',
                    type: 'warning'
                });
            }else{
                let obj = JSON.stringify(this.confirmobj);
                this.$this.post('/broker/feedback/add',obj).then((response)=>{
                    //console.log('----',response);
                    this.feedback.boolean = false;
                    this.$emit('my-event', this.feedback.boolean);
                    this.selectstar(2);
                    this.confirmobj.content = '';
                    this.$message({
                        message: '您已提交成功。',
                        //type: 'success',
                        customClass:'lay-msg',
                        iconClass:'el-icon-success'
                    });
                    for(let i=0;i<this.commentlist.length;i++){
                        this.commentlist[i].boolean = false;
                    }
                    for(let i=0;i<this.starlist.length;i++){
                        this.starlist[i].boolean = false;
                    }
                }).catch((error)=>{
                })
            }
        },
        
        undialog:function(){
            this.feedback.boolean = false;
            this.$emit('my-event', this.feedback.boolean);
        },
    }
}
</script>