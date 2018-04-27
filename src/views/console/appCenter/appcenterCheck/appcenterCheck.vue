<template>
<div class="total">
    <div class="total-header">
        <span></span>
        <router-link class="zong" to="/appcenterList">应用市场</router-link>
        ><p class="comback">云适合度检验器</p>
    </div>
    <div class="appcenterPrice">
        <div class="appcheck-list">
            <div class="appcheck-item" v-for="item in questionlist">
                <div class="appcheck-item-head">{{item.name}}</div>
                <div class="appcheck-item-question" v-for="list in item.question">
                    <p class="appcheck-question-list"><span>Q</span>{{list.data.content}}</p>
                    <p class="appcheck-question-answer">
                        <span v-for="box in list.data.optionSimples"><input type="radio" :name="list.data.code">{{box.content}}</span>
                    </p>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import '../appcenterCheck/appcenterCheck.css';
export default {
    name:'appcenterCheck',
    data(){
        return {
            questionlist:[]
        }
    },
    mounted:function(){
        this.getQuestion();
    },
    methods:{
        getQuestion:function(){
            this.$this.post('/broker/app/tool/plan/simple/questions/32').then((response)=>{
                //console.log('---',response.data);
                for(let i in response.data.data){
                    this.questionlist.push({name:i,question:[]});
                }
                for(let i in response.data.data){
                    for(let k=0;k<this.questionlist.length;k++){
                        if(this.questionlist[k].name==i){
                            for(let n=0;n<response.data.data[i].length;n++){
                                this.questionlist[k].question.push({boolean:false,data:response.data.data[i][n]});
                            }
                        }
                    }
                }
                //console.log('====',this.questionlist);
            }).catch((error)=>{})
        }
    }
}
</script>
