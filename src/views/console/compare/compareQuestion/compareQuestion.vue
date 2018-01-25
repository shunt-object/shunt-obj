<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback" v-on:click="goBack()">云选型</p>
    ><p class="comback">选择标准</p>
</div>
<child index="4" start="3" :type="$route.query.type" :id="$route.query.id"></child>
<div class="compare-line"></div>
<div class="compare-container">
    <div class="compare-title">比较标准</div>
    <!-- 场景选择 -->
    <div class="compare-change row">
        <div class="change-name col-md-1">场景选择：</div>
        <div class="change-list col-md-11 row">
           
            
          <ul class="all-list col-md-11 ulas"  v-for="(types,index) in typelist">
                <li class="default">
                    {{types.gname}}
               </li>
                <li class="change-all col-md-1" v-on:click="allSelect(index)">全选</li>
               <li id="lis" v-for="(typeChild,indexes) in types.childGroups" :class="typeChild.selected==true?'active-change':''" v-on:click="changeType(typeChild,indexes,typeChild.id)">{{typeChild.gname}}</li>
            </ul>
        </div>
    </div>
    <!-- 空白 -->
    <div class="nodata" v-if="typeCheck.length<1">
        <img src="../../../../assets/compare-nodata.png" alt="">
        <br>
        
        暂无数据

    </div>
    <!-- 做题 -->
    <div class="compare-box" v-else v-for="(item,index) in typeCheck">
        <div class="compare-question-title">
            <!--{{item.type.gname}}-->
            <span class="add-toggle" v-on:click="toggle(item,index)">+</span>
        </div>
        <ul class="compare-question-list" v-if="item.boolean==true">
            <li class="row" v-for="(list,i) in item.data">
                <p class="col-md-6">
                    <span class="compare-num">Q</span><!-- Q{{i+1}}. -->
                    {{list.content}}
                </p>
                <p class="col-md-6">
                    <select class="compare-select" v-model="valuelist[list.id]" v-on:change="changeSelect(list)">
                        <option :value="option" v-for="option in optionlist">{{option.name}}</option>
                    </select>
                </p>
            </li>
        </ul>
    </div>

    <button class="comparebtn" v-on:click="result()">开始比较</button>
    <div class="clear"></div>

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
            queryType:'',
            typelist:[],
            groups:[],
            typeCheck:[],
            optionlist:[],
            valuelist:[],
            togglelist:[]
        }
    },
    mounted:function(){
        this.queryType = this.$route.query.type;
        this.appId = this.$route.query.id; 
        this.getTypes();
        this.getOptions();
    },
    methods:{
        getTypes:function(){
            this.$this.get('/broker/compare/types/'+this.appId).then((response)=>{
                this.typelist = response.data.data;
              
                
                console.log(this.typelist)
                let arr =[];
                let arry = [];
                for(let n=0;n<response.data.data.length;n++){
                    if(response.data.data[n].selected==true){
                        arr.push(response.data.data[n].selected);
                        this.questionList(response.data.data[n].id,true);
                         
                    }
                    
                    
                }  
              
                if(arr.length<1){
                    let that = this;
                    let lay = this.$layer.open({
                        type: 0,
                        content: '请选择场景进行答题',
                        title: '温馨提示',
                        btn: ['我知道了'],
                        yes:function(){
                            that.$layer.close(lay);
                        }
                    });
                }          
            }).catch((error)=>{
                
            })
        },
        getOptions:function(){
            this.$this.get('/broker/compare/feature/option').then((response)=>{
                //console.log('ccc',response);
                this.optionlist =  response.data.data;                
            }).catch((error)=>{
                
            })
        },
        changeType:function(childSelect,Indexes,ids){
            console.log(childSelect)
            console.log(ids)
            if(childSelect.selected==true){
               
                childSelect.selected=false;
                //this.questionList(this.typelist[Indexes].id,false);
            }else if(childSelect.selected==false){
               childSelect.selected=true;
               this.questionList(ids,true,childSelect);
            }
        },
        questionList:function(Id,boolean,childSelect){
            this.$this.get('/broker/compare/feature/'+this.appId+'/'+Id+'').then((response)=>{
                console.log(response.data.data)
                
                if(boolean==true){
                   
                        if(Id==Id){
                            this.typeCheck.push({boolean:true,type:childSelect,data:response.data.data});
                        }
                    
                    for(let n=0;n<this.typeCheck.length;n++){
                        for(let v=0;v<this.typeCheck[n].data.length;v++){
                            this.valuelist.push(this.typeCheck[n].data[v].id);
                            // 默认选中
                            if(this.typeCheck[n].data[v].selectOptId!=null){
                                this.valuelist[this.typeCheck[n].data[v].id] = this.optionlist[this.typeCheck[n].data[v].selectOptId];
                            }
                        }
                    }
                    
                }else{
                    for(let i=0;i<this.typeCheck.length;i++){
                        if(childSelect.type.id==Id){
                            this.typeCheck.splice(i,1);
                        }
                    }
                }
            }).catch((error)=>{ 
            }) 
        },
        changeSelect:function(item){
            let obj = {
                "appid": this.appId,
                "featureCode":item.code,//问题的code
                //"groupId": item.groupId,
                "optionId": this.valuelist[item.id].id//选项的id
            };
            let strObj = JSON.stringify(obj);
            this.$this.post('/broker/compare/saveUser',strObj).then((response)=>{            
            }).catch((error)=>{
            })
        },
        toggle:function(item,Index){
            if(this.typeCheck[Index].boolean==true){
                this.typeCheck[Index].boolean=false;
            }else{
                this.typeCheck[Index].boolean=true;
            }
        },
        result:function(){
            this.$router.push({path:'/compareResult',query:{id:this.appId,type:this.queryType}});
        },
        allSelect:function(e){
            console.log(e)
            // this.typeCheck = [];
            for(let i=0;i<this.typelist[e].childGroups.length;i++){
                 this.typelist[e].childGroups[i].selected=true;
                //this.questionList(this.typelist[i].id,true);
            }
        },
        goBack:function(){
            this.$router.push({path:'/compareList'});
        }
    },
    components:{
        child
    }
}
</script>