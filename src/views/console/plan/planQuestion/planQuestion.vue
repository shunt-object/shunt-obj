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
                        <button class="btn btn-primary plan-btn">{{cloudName}}</button>
                    </div>
                    <div class="plan-type col-md-4">
                        <button class="btn btn-primary plan-btn">{{profitReault}}</button>
                    </div>
                    <div class="plan-type col-md-4">
                        <button class="btn btn-primary plan-btn">{{affinityResult}}</button>
                    </div>
                </div>
                <!--定性问题-->
                <div class="question-list" v-show="qualitative">
                    <p class="question-list-item">{{quetionList.content}}</p>
                    <p class="question-list-item">
                        <span class="question-option" v-for="item in quetionList.option">
                            <input type="radio" :name="quetionList.code" v-on:click="fn(quetionList.code,item.code)" v-model="checked">{{item.content}}
                        </span>
                    </p>
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
            appId:2,//创建云分析的appid
            qinhe:[],//收益度问题列表
            serverce:'',//定性id
            cloudName:'云定性',//定性云
            profitReault:'云收益度',//收益结果
            affinityResult:'云亲和度',//亲和结果
            checked:false,//默认不选中
            shouyi:[],//亲和度问题李彪
            selectedId:[],//多选
            indexI:0,//
            qualitative:true,//定性问题是否显示
            profit:false,//收益度问题是否显示
            affinity:false,//亲和度问题是否显示
            queryType:''
        }
    },
    mounted:function(){
        this.queryType = this.$route.query.type;
        //this.appId = sessionStorage.getItem('appId');
        if( sessionStorage.getItem('appId')==null || sessionStorage.getItem('appId')=='' ){
            this.appId = this.$route.query.id;            
        }else{
            this.appId = sessionStorage.getItem('appId');
        }
        let qcode = -1;
        let optcode = -1;
        this.getdata(this.appId,qcode,optcode);
        //定量问题
        this.getLiang(this.appId,2);
        this.getLiang(this.appId,3);    
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
                    that.checked = false;
                }else if(response.data.code=='2'){//结果
                    that.cloudName = response.data.data.sname;
                    that.serverce = response.data.data.id;
                    that.qualitative = false;
                    that.profit = true;
                }
            }).catch((error)=>{
            })
        },
        getLiang:function(appId,type){//type=2 云受益；type=3 亲和度
            let that = this;
            this.$this.get('/broker/plan/questions/'+appId+'/{type}?type='+type+'').then((response)=>{
                if(type==2){
                    that.qinhe = response.data.data;
                }else{
                    that.shouyi = response.data.data;
                }
                //qtype==1单选qtype==2多选
                //console.log(response);                
            }).catch((error)=>{
                //console.log(error);
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
        }
    },
    components:{
        child
    }
}
</script>