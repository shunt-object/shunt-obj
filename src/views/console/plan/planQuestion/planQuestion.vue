<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link to="/consolePage">总览</router-link> > 云规划
</div>
<div class="plan-box">
    <div class="plan-container">
        <child index="3" start="0" :type="queryType"></child>
        <div class="plan-question-box">
            <div class="plan-question-list">
                <div class="plan-question-item row">
                    <div class="plan-type col-md-4">
                        <button class="btn btn-primary" :class="isclass1==true?'confirm-btn':'plan-btn'" v-on:click="tab(1)">{{cloudName}}</button>
                    </div>
                    <div class="plan-type col-md-4">
                        <button class="btn btn-primary" :class="isclass2==true?'confirm-btn':'plan-btn'" v-on:click="tab(2)">{{profitReault}}</button>
                    </div>
                    <div class="plan-type col-md-4">
                        <button class="btn btn-primary" :class="isclass3==true?'confirm-btn':'plan-btn'" v-on:click="tab(3)">{{affinityResult}}</button>
                    </div>
                </div>
                <!--定性问题-->
                <div class="question-list" v-show="qualitative">
                    <div class="question-heaved">
                        <p class="question-heaved-list" v-for="(item,index) in havedList" v-on:click="edit(item)">{{index+1}}、{{item.content}}
                         <span v-for="ia in item.option" v-show="ia.code==item.selectOption">{{ia.content}}</span>
                        </p>
                    </div>
                    <div class="question-block">
                        <p class="question-list-item">{{quetionList.content}}</p>
                        <p class="question-list-item">
                            <span class="question-option question-type" v-for="item in quetionList.option">
                                <input type="radio" :name="quetionList.code" :checked="item.code==quetionList.selectOption" v-on:click="fn(quetionList.code,item.code)">{{item.content}}
                            </span>
                        </p>
                    </div>
                    <!-- v-if="cloud==''"<p v-else>{{cloud}}</p>-->
                </div>
                <!--定量问题 收益度-->
                <div class="question-list" v-show="profit">
                    <div class="question-list-item" v-for="(i,index) in qinhe">{{i.content}}
                        <p>
                            <span class="question-option" v-for="(item,itemIndex) in i.option" >
                                <input type="radio" :name="i.code" v-if="i.qtype==1" v-on:click="qin(index,i.qtype,i.code,item.code)" :checked="i.selectOption==item.code?true:false">
                                <input :id="item.code" type="checkbox" :checked="i.selectOption[itemIndex]==item.code?true:false" v-else v-on:click="qin(i.selectOption,i.qtype,i.code,item.code)">
                                {{item.content}}
                            </span>
                        </p>
                    </div>
                    <button class="btn btn-default planbtn" v-on:click="result(2)">下一步</button>
                </div>
                <!--定量问题 亲和度-->
                <div class="question-list" v-show="affinity">
                    <div class="question-list-item" v-for="i in shouyi">{{i.content}}
                        <p>
                            <span class="question-option" v-for="(item,itemIndex) in i.option">
                                <input type="radio" :checked="i.selectOption==item.code?true:false" :name="i.code" v-if="i.qtype==1" v-on:click="qin(i.selectOption,i.qtype,i.code,item.code)">
                                <input type="checkbox":checked="i.selectOption[itemIndex]==item.code?true:false" v-else v-on:click="qin(i.selectOption,i.qtype,i.code,item.code)">{{item.content}}
                            </span>
                        </p>
                    </div>
                    <button class="btn btn-default planbtn" v-on:click="result(3)">下一步</button>
                </div>
            </div>
        </div>
    
    </div>
</div>
</div>
</template>
<script> 
import child from '../../../../components/steps/steps.vue'
import '../planQuestion/planQuestion.css'

export default{
    name:'planQuestion',
    data(){
        return {
            quetionList:[],//定性问题列表
            appId:'',//创建云分析的appid
            qinhe:[],//收益度问题列表
            serverce:'',//定性id
            cloudName:'云定性',//定性云
            profitReault:'云收益度',//收益结果
            affinityResult:'云亲和度',//亲和结果
            shouyi:[],//亲和度问题李彪
            selectedId:[],//多选
            indexI:0,//
            qualitative:true,//定性问题是否显示
            profit:false,//收益度问题是否显示
            affinity:false,//亲和度问题是否显示
            queryType:'',
            typeName:'',
            isclass1:false,
            isclass2:false,
            isclass3:false,
            havedList:[],//云定性已做的题，可编辑
        }
    },
    mounted:function(){
        this.queryType = this.$route.query.type;
        this.typeName = this.$route.query.name;
        this.appId = this.$route.query.id; 
        let qcode = -1,optcode = -1;
        this.getdata(this.appId,qcode,optcode);
        //定量问题
        this.getLiang(this.appId,2);
        this.getLiang(this.appId,3); 
        this.getLiang(this.appId,1); 
        if(this.typeName==1){
            this.qualitative = true;//定性问题是否显示
            this.profit = false;//收益度问题是否显示
            this.affinity = false;//亲和度问题是否显示
        }else if(this.typeName==3){
            this.qualitative = false;//定性问题是否显示
            this.profit = false;//收益度问题是否显示
            this.affinity = true;//亲和度问题是否显示
        }else if(this.typeName==2){
            this.qualitative = false;//定性问题是否显示
            this.profit = true;//收益度问题是否显示
            this.affinity = false;//亲和度问题是否显示
        }else{
            this.qualitative = true;//定性问题是否显示
            this.profit = false;//收益度问题是否显示
            this.affinity = false;//亲和度问题是否显示 
        }
    },
    methods:{
        fn:function(qcode,optcode){
            this.getdata(this.appId,qcode,optcode);
        },
        getdata:function(appId,qcode,optcode){
            let that = this;
            this.$this.get('/broker/plan/questions/analysis/'+appId+'/'+qcode+'/'+optcode+'').then((response)=>{
                //console.log(response);
                if(response.data.code=='1'){
                    that.quetionList = response.data.data;
                    this.getLiang(this.appId,1); 
                    $(".question-type input").prop("checked",false); 
                }else if(response.data.code=='2'){//结果
                    that.quetionList = [];
                    that.cloudName = response.data.data.sname;
                    that.serverce = response.data.data.id;
                    that.qualitative = false;
                    that.profit = true;
                    that.isclass1 = true;
                }
            }).catch((error)=>{
            })
        },
        getLiang:function(appId,type){//type=1云定性记录 type=2 云受益；type=3 亲和度
            let that = this;
            this.$this.get('/broker/plan/questions/'+appId+'/{type}?type='+type+'').then((response)=>{
                if(type==1){
                    that.havedList = response.data.data;
                }else if(type==2){
                    that.qinhe = response.data.data;
                }else{
                    that.shouyi = response.data.data;
                }
                //qtype==1单选qtype==2多选               
            }).catch((error)=>{
            }) 
        },
        qin:function(selectOption,qtype,qcode,optcode){
            //qtype==1单选qtype==2多选
            let boolean ;
            let n = 0;
            let isDouble ;
            if(qtype==1){
                boolean = true;
                isDouble = false;
            }else{
                this.indexI++;
                isDouble = true;
                this.selectedId.push(optcode);
                if(selectOption==null){
                    if(this.indexI==1){
                        boolean = true;
                    }else{
                        for(let i=0;i<this.selectedId.length;i++){
                            if(optcode==this.selectedId[i]){
                                n++;
                            }
                        }
                        n%2==0?boolean=false:boolean=true;
                    }
                }else{
                    for(let a=0;a<selectOption.length;a++){
                        if(optcode==selectOption[a]){
                            boolean = false;
                        }else{
                            for(let i=0;i<this.selectedId.length;i++){
                                if(optcode==this.selectedId[i]){
                                    n++;
                                }
                            }
                            n%2==0?boolean=false:boolean=true;
                        }
                    }
                }
            }
            let obj = {
                    "appid":this.appId,
                    "optcode":optcode,
                    "questionCode":qcode,
                    "select":boolean,
                    "multi":isDouble
            };
            let str = JSON.stringify(obj);
            this.save(str);
        },
        result:function(type){
            //type=2 云受益；type=3 亲和度
           this.$this.get('/broker/plan/questions/result/'+this.appId+'/3/{type}?type='+type+'').then((response)=>{
                console.log('result',response); 
                if(type==2){
                    this.profit = false;
                    this.qualitative = false;
                    this.affinity = true;
                    this.profitReault =  response.data.data+'分';
                    this.isclass2 = true;
                }else{
                    this.affinityResult = response.data.data+'分';
                    this.$router.push({path:'/planResult',query:{id:this.appId}});
                }              
            }).catch((error)=>{
                //console.log(error);
            }) 
        },
        save:function(str){
            this.$this.post('/broker/plan/saveUserPlan',str).then((response)=>{
                console.log('plan',response);                
            }).catch((error)=>{
                
            }) 
        },
        tab:function(typeId){
            if(typeId==1){
                if(this.profit==true || this.affinity==true){
                    this.qualitative = true;//定性问题是否显示
                    this.profit = false;//收益度问题是否显示
                    this.affinity = false;//亲和度问题是否显示
                }
            }else if(typeId==2){
                if( this.isclass1==true || this.affinity==true){
                    this.qualitative = false;//定性问题是否显示
                    this.profit = true;//收益度问题是否显示
                    this.affinity = false;//亲和度问题是否显示
                    this.getLiang(this.appId,2);
                }else{
                    this.$layer.msg("不能点击");
                }
            }else if(typeId==3){
                if(this.isclass2==true){
                    this.qualitative = false;//定性问题是否显示
                    this.profit = false;//收益度问题是否显示
                    this.affinity = true;//亲和度问题是否显示
                    this.getLiang(this.appId,3);
                }else{
                    this.$layer.msg("no");
                }
            }
        },
        edit:function(item){
            this.quetionList = item;
        }
    },
    components:{
        child
    }
}
</script>