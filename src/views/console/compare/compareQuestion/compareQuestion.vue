<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link to="/">总览</router-link> > 云规划
</div>
<div class="plan-box">
    <div class="plan-container">
    <child message="hellow" data="aaa"></child>

    <div class="compare-box">

        <div class="compare-list" v-for="(out,index) in List">
            <div class="out" style="text-align:left;" v-on:click="getquestion(index,out.id)">
                <input type="checkbox" :checked="outdata[index].boolean" readonly class="readonly">{{out.gname}}
                <ul class="compareQuestion-list" v-show="index==i">
                    <li class="compare-question-item" v-for="(item,i) in question">
                        {{item.content}} 
                        <select class="compare-select" v-model="formdata[item.id]" v-on:change="select(out.id,item,index)"><option :value="answer" v-for="answer in option">{{answer.name}}</option></select>
                    </li>
                </ul>
            </div>
        </div>
        <button class="btn btn-default planbtn" v-on:click="result()">开始比较</button>
        <div class="clear"></div>
    </div>

    </div>
</div>
</div>
</template>
<script>
import child from '../../../../components/steps/steps.vue'
import '../compareQuestion/compareQuestion.css'
export default{
    name:'compareQuestion',
    data(){
        return {
            List:[],
            question:[],
            option:[],
            i:'',
            checked:'',
            formdata:[],
            outdata:[]
        }
    },
    mounted:function(){
        this.$this.get('/broker/compare/types').then((response)=>{
            //console.log('aaa',response); 
            this.List = response.data.data;  
            for(let i=0;i<response.data.data.length;i++){
                this.outdata.push({boolean:false});
            }             
        }).catch((error)=>{
            
        }) 
        this.$this.get('/broker/compare/feature/option').then((response)=>{
            //console.log('ccc',response); 
            this.option = response.data.data;               
        }).catch((error)=>{
            
        })
    },
    methods:{
        getquestion:function(i,Id){
            this.i = i;
            this.$this.get('/broker/compare/feature/'+Id+'').then((response)=>{
                //console.log('bbb',response); 
                this.question = response.data.data;  
                for(let i=0;i<response.data.data.length;i++){
                    this.formdata.push(response.data.data[i].id);
                }   
            }).catch((error)=>{
                
            }) 
        },
        select:function(featureCode,item,out){
            console.log(item);
            let obj = {
                "appid": 12,
                "featureCode":featureCode,
                //"groupId": item.groupId,
                "optionId": this.formdata[item.id].id
            };
            let strObj = JSON.stringify(obj);
            console.log(this.formdata[item.id]);
            for(let n=0;n<this.formdata.length;n++){
                if(n!=item.id){
                    this.formdata[n]=='';
                }
            }
            if(this.formdata[item.id]!=''){
                this.outdata[out].boolean = true;
            }
            this.$this.post('/broker/compare/saveUser',strObj).then((response)=>{
                             
            }).catch((error)=>{
                
            })
        },
        result:function(){
            this.$this.get('/broker/compare/result/'+12+'').then((response)=>{                
            }).catch((error)=>{})
        }
    },
    components:{
        child
    }
}
</script>