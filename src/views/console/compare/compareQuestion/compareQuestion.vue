<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link to="/consolePage">总览</router-link> > 云规划
</div>
<div class="plan-box">
    <div class="plan-container">
    <child index="4" start="0" :type="queryType"></child>

    <div class="compare-box">
        <!--<div class="select2">
            <div class="slect2-box">
                <i class="square"></i>
            </div>
            <ul class="select2-list">
                <li>aaaa</li>
                <li>aaaa</li>
            </ul>
        </div>-->
        <div>
            <p class="">请选择场景</p>
            <p class="" v-for="(item,index) in List">
                <span style="float:left;"><input type="checkbox" v-model="types[index].boolean">{{item.gname}}</span>
            </p>
            <button v-on:click="scene()">开始答题</button>
        </div>
        <div class="clear"></div>
        <div class="compare-list" v-for="(item,index) in typesList">
            <h5>{{item.title.gname}}</h5>
            <ul class="compareQuestion-list">
                <li class="compare-question-item" v-for="ia in item.value">
                    <p class="">
                        {{ia.content}}
                        <select class="compare-select" v-model="modelList[ia.id]" v-on:change="selectChang(ia)">
                            <option :value="answer" v-for="answer in option">{{answer.name}}</option>
                        </select>
                    </p>
                
                </li>
            </ul>
        </div>
        <!--<div class="compare-list" v-for="(out,index) in List">
            <div class="out" style="text-align:left;" v-on:click="getquestion(index,out.id)">
                <input type="checkbox" :checked="outdata[index].boolean" readonly class="readonly">{{out.gname}}
                <ul class="compareQuestion-list" v-show="index==i">
                    <li class="compare-question-item" v-for="(item,i) in question">
                        {{item.content}} 
                        <select class="compare-select" v-model="formdata[item.id]" v-on:change="select(item.code,item,index)">
                            <option :value="answer" v-for="answer in option">{{answer.name}}</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>-->
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
            outdata:[],
            appId:'',
            queryType:'',
            // 改变
            types:[],
            typesList:[],
            typesdata:[],
            modelList:[]
        }
    },
    mounted:function(){
        this.queryType = this.$route.query.type;
        // if( sessionStorage.getItem('appId')==null || sessionStorage.getItem('appId')=='' ){
        //     this.appId = this.$route.query.id;            
        // }else{
        //     this.appId = sessionStorage.getItem('appId');
        // }
        this.appId = this.$route.query.id; 
        this.$this.get('/broker/compare/types/'+this.appId).then((response)=>{
            this.List = response.data.data;  
            for(let i=0;i<response.data.data.length;i++){
                this.outdata.push({boolean:false});
                this.types.push({boolean:false,id:response.data.data[i].id,gname:response.data.data[i].gname});
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
            this.$this.get('/broker/compare/feature/'+this.appId+'/'+Id+'').then((response)=>{
                //console.log('bbb',response); 
                this.question = response.data.data;  
                for(let i=0;i<response.data.data.length;i++){
                    this.formdata.push(response.data.data[i].id);
                }
                //默认选中
                for(let n=0;n<response.data.data.length;n++){
                    if(response.data.data[n].selectOptId!=null){
                        this.formdata[response.data.data[n].id] = this.option[response.data.data[n].selectOptId-1];
                    }
                }  
            }).catch((error)=>{
                
            }) 
        },
        select:function(featureCode,item,out){
            let obj = {
                "appid": this.appId,
                "featureCode":featureCode,
                //"groupId": item.groupId,
                "optionId": this.formdata[item.id].id
            };
            let strObj = JSON.stringify(obj);
            //console.log(this.formdata[item.id]);
            // for(let n=0;n<this.formdata.length;n++){
            //     if(n!=item.id){
            //         this.formdata[n]=='';
            //     }
            // }
            if(this.formdata[item.id]!=''){
                this.outdata[out].boolean = true;
            }
            this.$this.post('/broker/compare/saveUser',strObj).then((response)=>{
                             
            }).catch((error)=>{
                
            })
        },
        result:function(){
            this.$router.push({path:'/compareResult',query:{id:this.appId}});
        },
        change(item,backParamsData){
            console.log('item',item)
        },
        // 改变
        scene:function(){
            for(let i=0;i<this.types.length;i++){
                if(this.types[i].boolean==true){
                    this.typesList.push({title:this.types[i],value:{}});
                }
            }
            for(let n=0;n<this.typesList.length;n++){
                this.data(this.typesList[n].title.id,n);
            }
            for(let i=0;i<this.types.length;i++){
                this.types[i].boolean = false;
            }
        },
        data:function(id,I){
            this.$this.get('/broker/compare/feature/'+this.appId+'/'+id+'').then((response)=>{
                this.typesList[I].value = response.data.data;
                //console.log(this.typesList);
                for(let i=0;i<this.typesList.length;i++){
                    for(let n=0;n<this.typesList[i].value.length;n++){
                        this.modelList.push(this.typesList[i].value[n].id);
                    }
                }
                // 默认选中
                for(let n=0;n<this.typesList.length;n++){
                    for(let s=0;s<this.typesList[n].value.length;s++){
                        if(this.typesList[n].value[s].selectOptId!=null){
                            this.modelList[this.typesList[n].value[s].id] = this.option[this.typesList[n].value[s].selectOptId-1];
                        }
                    }
                    
                }  
                //console.log('cccc',this.modelList);        
            }).catch((error)=>{
                
            })
        },
        selectChang:function(item){
            let obj = {
                "appid": this.appId,
                "featureCode":item.code,//问题的id
                //"groupId": item.groupId,
                "optionId": this.modelList[item.id].id//选项的id
            };
            let strObj = JSON.stringify(obj);
            this.$this.post('/broker/compare/saveUser',strObj).then((response)=>{
                             
            }).catch((error)=>{
                
            })
        }
    },
    components:{
        child
    }
}
</script>