<template>
<div class="compare" style="padding-left:100px;">
    <div class="list" v-for="(out,index) in List">
        <div class="out" style="text-align:left;" v-on:click="getquestion(index,out.id)">
            <input type="checkbox" :checked="outdata[index].boolean">{{out.gname}}
            <ul v-show="index==i">
                <li v-for="(item,i) in question">
                    {{item.content}} 
                    <select v-model="formdata[item.id]" v-on:change="select(out.id,item,index)"><option :value="answer" v-for="answer in option">{{answer.name}}</option></select>
                </li>
            </ul>
        </div>
    </div>
    <button v-on:click="result()">云选型结果</button>
</div>
</template>
<script>
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
    }
}
</script>