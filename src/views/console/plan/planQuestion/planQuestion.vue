<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback" v-on:click="goBack()">云规划</p>
    ><p class="comback">选择标准</p>
</div>
<child index="3" start="3" :type="$route.query.type" :id="$route.query.id"></child>
<div class="planquestion plan-input">
    <div class="plan-question-item row">
        <div class="plan-type col-md-4" id="tips" v-on:mouseenter="hoverStyle(1)" v-on:mouseleave="leaveStyle(1)">
            <p class="plan-step" :class="qualitative==true||hover[0].boolean==true?'qualitative-step':''">步骤1</p>
            <div class="common-block qualitative-ready" :class="qualitative==true||hover[0].boolean==true?'activeBtn':'active-btn'" v-on:click="tab(1)">
                <div class="plan-title">
                    <p class="title1">云定性</p>
                    <p class="title2">Cloud Target</p>
                    <p class="title-line"></p>
                </div>
                <span>{{cloudName}}</span>
            </div>
            <div class="qualitative-line" :class="qualitative==true||hover[0].boolean==true?'active-line':'plan-line'"></div>
        </div>
        <div class="plan-type col-md-4" v-on:mouseenter="hoverStyle(2)" v-on:mouseleave="leaveStyle(2)">
            <p class="plan-step" :class="profit==true||hover[1].boolean==true?'profit-step':''">步骤2</p>
            <div class="common-block profit-ready" :class="profit==true||hover[1].boolean==true?'activeBtn':'active-btn'" v-on:click="tab(2)">
                <div class="plan-title">
                    <p class="title1">云收益度</p>
                    <p class="title2">Cloud Benefit</p>
                    <p class="title-line"></p>
                </div>
                <span>{{profitReault}}</span>
            </div>
            <div class="profit-line" :class="profit==true||hover[1].boolean==true?'active-line':'plan-line'"></div>
        </div>
        <div class="plan-type col-md-4" v-on:mouseenter="hoverStyle(3)" v-on:mouseleave="leaveStyle(3)">
            <p class="plan-step" :class="affinity==true||hover[2].boolean==true?'affinity-step':''">步骤3</p>
            <div class="common-block affinity-ready" :class="affinity==true||hover[2].boolean==true?'activeBtn':'active-btn'" v-on:click="tab(3)">
                <div class="plan-title">
                    <p class="title1">云亲和度</p>
                    <p class="title2">Cloud readiness</p>
                    <p class="title-line"></p>
                </div>
                <span>{{affinityResult}}</span>
            </div>
            <div class="affinity-line" :class="affinity==true||hover[2].boolean==true?'active-line':'plan-line'"></div>
        </div>
    </div>
    <!--定性问题-->
    <div class="question-list" v-show="qualitative">
        <!-- 历史记录 -->
        <div class="question-heaved">
            <div class="question-heaved-list" v-for="(item,index) in havedList" v-on:click="edit(index)">
                <span class="questionNum grey">Q</span><!--{{index+1}} -->
                {{item.content}}
                <span v-for="ia in item.option" v-show="ia.code==item.selectOption">{{ia.content}}</span>
                <p class="qualitative-list pt10" style="margin:0;" v-if="editlist[index].boolean==true">
                    <span class="question-option question-type" v-for="o in item.option">
                        <input type="radio" :name="item.code" :checked="o.code==item.selectOption" v-on:click="fn(item.code,o.code,index)">{{o.content}}
                    </span>
                </p>
            </div>
        </div>
        <!-- -->
        <div class="question-block" v-if="quetionList!=''">
            <p class="qualitative-list weight-bold">
                <span class="questionNum orange">Q</span><!--{{havedList.length+1}} -->
                {{quetionList.content}}
            </p>
            <p class="qualitative-list weight-normal pt10">
                <span class="question-option question-type" v-for="item in quetionList.option">
                    <input type="radio" :name="quetionList.code" :checked="item.code==quetionList.selectOption" v-on:click="fn(quetionList.code,item.code)">{{item.content}}
                </span>
            </p>
        </div>
    </div>
    <!--定量问题 收益度-->
    <div class="question-list" v-show="profit">
        <div class="question-list-item" v-for="(i,index) in qinhe">
            <span class="questionNum orange">Q</span><!--{{index+1}} -->
            {{i.content}}
            <p>
                <span class="question-option" v-for="(item,itemIndex) in i.option">
                    <input type="radio" :name="i.code" v-if="i.qtype==1" v-on:click="qin(index,i.qtype,i.code,item.code,2)" :checked="i.selectOption==item.code?true:false">
                    <input :id="item.code" type="checkbox" :checked="i.selectOption[itemIndex]==item.code?true:false" v-else v-on:click="qin(i.selectOption,i.qtype,i.code,item.code,2)">
                    {{item.content}}
                </span>
            </p>
        </div>
        <button class="planbtn" v-on:click="result(2)">下一步</button>
        <div class="clear"></div>
    </div>
    <!--定量问题 亲和度-->
    <div class="question-list" v-show="affinity">
        <div class="question-list-item" v-for="(i,index) in shouyi">
            <span class="questionNum orange">Q</span><!--{{index+1}} -->
            {{i.content}}
            <p>
                <span class="question-option" v-for="(item,itemIndex) in i.option">
                    <input type="radio" :checked="i.selectOption==item.code?true:false" :name="i.code" v-if="i.qtype==1" v-on:click="qin(i.selectOption,i.qtype,i.code,item.code,3)">
                    <input type="checkbox":checked="i.selectOption[itemIndex]==item.code?true:false" v-else v-on:click="qin(i.selectOption,i.qtype,i.code,item.code,3)">{{item.content}}
                </span>
            </p>
        </div>
        <button class="planbtn" v-on:click="result(3)">下一步</button>
        <div class="clear"></div>
    </div>
</div>
</div>
</template>
<style>
.notify-tips{
    background:#da121a !important;
}
.notify-tips em{
    border-color:#da121a !important;
}
</style>
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
            cloudName:'',//定性云
            profitReault:'',//收益结果
            affinityResult:'',//亲和结果
            shouyi:[],//亲和度问题列表
            selectedId:[],//多选
            indexI:0,//
            qualitative:true,//定性问题是否显示
            profit:false,//收益度问题是否显示
            affinity:false,//亲和度问题是否显示
            queryType:'',
            typeName:'',
            havedList:[],//云定性已做的题，可编辑
            editlist:[],
            hover:[{boolean:false},{boolean:false},{boolean:false}]
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
        this.whichShow(this.typeName);
        this.defaultValue();
    },
    methods:{
        defaultValue:function(){//获取已有的答案
            this.$this.get('/broker/result/plan/'+this.appId+'').then((response)=>{
                //console.log('结果',response);    
                for(let i=0;i<response.data.data.appResults.length;i++){
                    if(response.data.data.appResults[i].moduleId==1){
                        if(response.data.data.appResults[i].result!=''){
                            this.cloudName = JSON.parse(response.data.data.appResults[i].result).sname;
                        }
                    }
                    if(response.data.data.appResults[i].moduleId==2){
                        if(response.data.data.appResults[i].result!=null){
                            this.profitReault = response.data.data.appResults[i].result;
                        }
                    }
                    if(response.data.data.appResults[i].moduleId==3){
                        if(response.data.data.appResults[i].result!=null){
                            this.affinityResult = response.data.data.appResults[i].result;
                        }
                    }
                } 
                this.layerNotice(this.typeName);  
            }).catch((error)=>{
            })
        },
        fn:function(qcode,optcode,index){
            if(index!=undefined){
                this.editlist[index].boolean = false;
                this.getLiang(this.appId,1); 
            }
            this.getdata(this.appId,qcode,optcode);
            this.getLiang(this.appId,1); 
        },
        getdata:function(appId,qcode,optcode){
            let that = this;
            this.$this.get('/broker/plan/questions/analysis/'+appId+'/'+qcode+'/'+optcode+'').then((response)=>{
                //console.log(response);
                if(response.data.code=='1'){
                     document.documentElement.scrollTop = document.documentElement.scrollTop+50;
                    this.quetionList = response.data.data;
                    this.getLiang(this.appId,1); 
                    $(".question-type input").prop("checked",false); 
                }else if(response.data.code=='2'){//结果
                    this.quetionList = [];
                    this.cloudName = response.data.data.sname;
                    this.serverce = response.data.data.id;
                    if( qcode!=-1 || optcode!=-1 ){
                        document.documentElement.scrollTop = 0;
                        
                        //您适合上XX云  请继续进行云收益度测试？
                        this.$layer.tips('您适合上'+response.data.data.sname+',请继续进行云收益度测试', '#tips', {
                            tips: [1],
                            time:5000
                        });
                        this.whichShow(2);
                        //let id = this.$layer.tips("在很久很久以前", '#tips');
                    }
                }
            }).catch((error)=>{
            })
        },
        getLiang:function(appId,type){//type=1云定性记录 type=2 云受益；type=3 亲和度
            this.$this.get('/broker/plan/questions/'+appId+'/{type}?type='+type+'').then((response)=>{
                if(type==1){
                    this.editlist = [];
                    this.havedList = response.data.data;
                    for(let i=0;i<this.havedList.length;i++){
                        this.editlist.push({boolean:false});
                    }
                    //console.log(this.havedList);
                }else if(type==2){
                    this.qinhe = response.data.data;
                }else{
                    this.shouyi = response.data.data;
                }             
            }).catch((error)=>{
            }) 
        },
        qin:function(selectOption,qtype,qcode,optcode,moduleId){
            //qtype==1单选qtype==2多选
            let boolean,n = 0,isDouble ;
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
                    "moduleId":moduleId,
                    "questionCode":qcode,
                    "select":boolean,
                    "multi":isDouble
            };
            let str = JSON.stringify(obj);
            this.save(str);
        },
        result:function(type){
            //type=2 云受益；type=3 亲和度
           this.$this.get('/broker/plan/questions/result/'+this.appId+'/'+this.serverce+'/{type}?type='+type+'').then((response)=>{
                console.log('result',response); 
                if(type==2){
                    this.whichShow(3);
                    this.profitReault =  response.data.data+'分';
                    document.documentElement.scrollTop = 0;
                }else{
                    document.documentElement.scrollTop = 0;
                    this.affinityResult = response.data.data+'分';
                    this.$router.push({path:'/planResult',query:{id:this.appId}});
                }              
            }).catch((error)=>{
                //console.log(error);
            }) 
        },
        save:function(str){
            this.$this.post('/broker/plan/saveUserPlan',str).then((response)=>{
                //console.log('plan',response);                
            }).catch((error)=>{}) 
        },
        tab:function(typeId){
            if(typeId==1){
                if(this.profit==true || this.affinity==true){
                    this.whichShow(1);
                }
            }else if(typeId==2){
                if( this.cloudName!='' || this.affinity==true){
                    this.whichShow(2);
                    this.getLiang(this.appId,2);
                }else{
                    this.$layer.msg("请先进行云定性测试");
                }
            }else if(typeId==3){
                if(this.profitReault!=''){
                    this.whichShow(3);
                    this.getLiang(this.appId,3);
                }else{
                    if(this.cloudName!=''){
                        this.$layer.msg("请先进行云收益度测试");
                    }else{
                       this.$layer.msg("请先进行云定性测试"); 
                    }                    
                }
            }
        },
        edit:function(index){
            if(this.editlist[index].boolean==true){
                this.editlist[index].boolean = false;
            }else{
                this.editlist[index].boolean = true;
            }
        },
        whichShow:function(typeName){
            if(typeName==1){
                this.qualitative = true;//定性问题是否显示
                this.profit = false;//收益度问题是否显示
                this.affinity = false;//亲和度问题是否显示
            }else if(typeName==3){
                this.qualitative = false;//定性问题是否显示
                this.profit = false;//收益度问题是否显示
                this.affinity = true;//亲和度问题是否显示
            }else if(typeName==2){
                this.qualitative = false;//定性问题是否显示
                this.profit = true;//收益度问题是否显示
                this.affinity = false;//亲和度问题是否显示
            }else{
                this.qualitative = true;//定性问题是否显示
                this.profit = false;//收益度问题是否显示
                this.affinity = false;//亲和度问题是否显示 
            }
        },
        goBack:function(){
            this.$router.push({path:'/planList'});
        },
        layerNotice:function(typeId){
            if(typeId==2 || typeId==3){
                if(this.cloudName==''){
                    let that = this;
                    let lay = this.$layer.open({
                        type: 0,
                        content: '您还未进行云定性测试，请前往测试',
                        title: '温馨提示',
                        btn: '我知道了',
                        yes:function(){
                            that.$layer.close(lay);
                            that.whichShow(1);
                        }
                    });
                }else if(this.profitReault==''){
                    let that = this;
                    let lay = this.$layer.open({
                        type: 0,
                        content: '您还未进行收益度测试，请前往测试',
                        title: '温馨提示',
                        btn: '我知道了',
                        yes:function(){
                            that.$layer.close(lay);
                            that.whichShow(2);
                        }
                    });
                }
            }
        },
        hoverStyle:function(I){
            this.hover[I-1].boolean = true;
        },
        leaveStyle:function(I){
            this.hover[I-1].boolean = false;
        }
    },
    components:{
        child
    }
}
</script>