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
            <div class="all-list col-md-11 ulas row" v-for="(types,index) in typelist">
                <div class="col-md-1">{{types.gname}}：</div>
                <div class="change-all col-md-1" v-on:click="allSelect(index)">全选</div>
                <ul class="col-md-10">
                    <li id="lis" v-for="(typeChild,indexes) in types.childGroups" :class="typeChild.selected==true?'active-change':'default'" v-on:click="changeType(index,indexes)">{{typeChild.gname}}</li>
                </ul>
            </div>
          <!--<ul class="all-list col-md-11 ulas"  v-for="(types,index) in typelist">
                <li class="default">
                    {{types.gname}}：
               </li>
                <li class="change-all col-md-1" v-on:click="allSelect(index)">全选</li>
               <li id="lis" v-for="(typeChild,indexes) in types.childGroups" :class="typeChild.selected==true?'active-change':''" v-on:click="changeType(index,indexes)">{{typeChild.gname}}</li>
            </ul>-->
        </div>
    </div>
    <!-- 空白 -->
    <div class="nodata" v-if="typeCheck.length<1">
        <img src="../../../../assets/compare-nodata.png" alt="">
        <br>
        
        暂无数据

    </div>
    <!-- 做题 -->
    <div v-for="(out,i) in typelist" v-else style="margin-top:20px;">
        <div class="compare-question-title" v-if="out.selected==true" style="background:#dedede;">
            <span>{{out.gname}}</span>
            <span class="add-toggle" v-on:click="zong(i)">+</span>
        </div>
        <div v-if="numlist[i].boolean==true">
            <div class="compare-box" v-for="(item,index) in typeCheck" v-if="item.type.gname==out.gname">
                <div class="compare-question-title">
                    <span>{{item.name}}</span>
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
        </div>
    </div>
    <div class="comparebnt-box">
        <button class="comparebtn" v-on:click="result()">
            下一步<i class="iconfont icon-xiayibu" style="margin-left:5px;"></i>
        </button>
        <button class="planprev" v-on:click="prev()">
            <i class="iconfont icon-shangyibu1" style="margin-right:5px;"></i>上一步
        </button>
    </div>
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
            togglelist:[],
            havelist:[],
            numlist:[],
            allLsit:[]
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
                this.havelist = response.data.data;
                //console.log(this.typelist)
                let arr =[];
                let arry = [];
                for(let n=0;n<response.data.data.length;n++){
                    this.numlist.push({boolean:true});
                    this.allLsit.push({boolean:false});
                    for(let i=0;i<response.data.data[n].childGroups.length;i++){
                        if(response.data.data[n].childGroups[i].selected==true){
                            arr.push(response.data.data[n].childGroups[i].selected);
                            this.questionList(response.data.data[n].childGroups[i].id,true,n);
                            this.numlist[i].boolean = true;
                        }
                    }
                }  
                if(arr.length<1){
                    this.$alert('请选择场景进行答题。', '温馨提示', {
                        confirmButtonText: '我知道了',
                        showClose:false,
                        confirmButtonClass:'lay-btn-red'
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
        zong:function(ind){
            if(this.numlist[ind].boolean == false){
                this.numlist[ind].boolean=true;
            }else{
                this.numlist[ind].boolean=false;
            }
        },
        changeType:function(Ind,index){
            //console.log('-----',this.typelist[Ind].childGroups[index]);
            if(this.typelist[Ind].childGroups[index].selected==false){
                this.typelist[Ind].childGroups[index].selected=true;
                this.questionList(this.typelist[Ind].childGroups[index].id,true,Ind);
            }else{
                this.typelist[Ind].childGroups[index].selected=false;
                this.questionList(this.typelist[Ind].childGroups[index].id,false,Ind);
            }
            // for(let i=0;i<this.havelist.length;i++){
            //     this.typelist[i].selected = this.havelist[i].selected;
            // }
            for(let i=0;i<this.typelist.length;i++){
                for(let n=0;n<this.typelist[i].childGroups.length;n++){
                    if(this.typelist[i].childGroups[n].selected==true){
                        this.typelist[i].selected = true;
                    }
                }
            }
        },
        questionList:function(Id,boolean,Index){
            let ax;
            //console.log(Id);
            for(let j=0;j<this.typelist.length;j++){
                for(let a=0;a<this.typelist[j].childGroups.length;a++){
                    if(this.typelist[j].childGroups[a].id==Id){
                        ax = a;
                    }                    
                }
            }
            this.$this.get('/broker/compare/feature/'+this.appId+'/'+Id+'').then((response)=>{
                //console.log(response.data.data)
                if(boolean==true){
                    this.typeCheck.push({boolean:true,type:this.typelist[Index],data:response.data.data,name:this.typelist[Index].childGroups[ax].gname});                   
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
                        for(let k=0;k<this.typeCheck[i].type.childGroups.length;k++){
                            if(this.typeCheck[i].type.childGroups[k].id==Id){
                                this.typeCheck.splice(i,1);
                            }
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
            // this.typeCheck = [];
            if(this.allLsit[e].boolean==false){
                this.allLsit[e].boolean=true;
                this.typelist[e].selected = true;
                for(let i=0;i<this.typelist[e].childGroups.length;i++){
                 if(this.typelist[e].childGroups[i].selected==false){
                    this.questionList(this.typelist[e].childGroups[i].id,true,e);
                    this.typelist[e].childGroups[i].selected=true;
                 }
                }
            }else{
                this.allLsit[e].boolean=false;
                this.typelist[e].selected = false;
                for(let i=0;i<this.typelist[e].childGroups.length;i++){
                 if(this.typelist[e].childGroups[i].selected==true){
                    this.questionList(this.typelist[e].childGroups[i].id,false,e);
                    this.typelist[e].childGroups[i].selected=false;
                 }
                }
            }
            
        },
        goBack:function(){
            this.$router.push({path:'/compareList'});
        },
        prev:function(){
            this.$router.push({path:'/planResult',query:{id:this.appId}});
        }
    },
    components:{
        child
    }
}
</script>