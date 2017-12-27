<template>
<div>
    <!--定性问题-->
    <div class="list">
        <p v-if="cloud==''">{{quetionList.content}}</p>
        <p v-if="cloud==''">
            <span v-for="item in quetionList.option">
                <input type="radio" :name="quetionList.code" v-on:click="fn(quetionList.code,item.code)" v-model="checked">{{item.content}}
            </span>
        </p>
        <p v-else>{{cloud}}</p>
    </div>
    <!--定量问题 亲和度-->
    <div class="liang">
        <p v-for="i in qinhe">{{i.content}}
            <span v-for="item in i.option">
                <input type="radio" :name="i.code" v-if="i.qtype==1" v-on:click="qin(i.qtype,i.code,item.code)">
                <input type="checkbox" v-else v-on:click="qin(i.qtype,i.code,item.code)">{{item.content}}
            </span>
        </p>
        <button v-on:click="result()">定量结果</button>
    </div>
    <!--定量问题 收益度-->
    <div class="liang">
        <p v-for="i in shouyi">{{i.content}}
            <span v-for="item in i.option">
                <input type="radio" :name="i.code" v-if="i.qtype==1" v-on:click="qin(i.qtype,i.code,item.code)">
                <input type="checkbox" v-else v-on:click="shouyid(i.qtype,i.code,item.code)">{{item.content}}
            </span>
        </p>
        <button v-on:click="Sresult()">收益结果</button>
    </div>
</div>
</template>
<script> 
export default{
    name:'plan',
    data(){
        return {
            quetionList:[],
            appId:2,
            qinhe:[],
            serverce:'',
            cloud:'',
            checked:false,
            shouyi:[]
        }
    },
    mounted:function(){
        //this.appId = sessionStorage.getItem('appId');
        let qcode = -1;
        let optcode = -1;
        console.log('appId',sessionStorage.getItem('appId'));
        this.getdata(this.appId,qcode,optcode);
        //定量问题
        this.getLiang(this.appId,2);
        this.getLiang(this.appId,3);
    },
    methods:{
        fn:function(qcode,optcode){
            console.log(qcode,'-------',optcode);
            this.getdata(this.appId,qcode,optcode);
        },
        getdata:function(appId,qcode,optcode){
            let that = this;
            this.$this.get('/broker/plan/questions/analysis/'+appId+'/'+qcode+'/'+optcode+'').then((response)=>{
                console.log(response);
                if(response.data.code=='1'){
                    that.quetionList = response.data.data;
                    that.checked = false;
                }else if(response.data.code=='2'){//结果
                    that.cloud = response.data.data.sname;
                    that.serverce = response.data.data.id;
                }
                
            }).catch((error)=>{
                //console.log(error);
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
                console.log(response);                
            }).catch((error)=>{
                //console.log(error);
            }) 
        },
        qin:function(qtype,qcode,optcode){
            console.log(qtype,'-------',qcode,'-------',optcode);
            let obj = {
                "appid":this.appId,
                "optcodes":[optcode],
                "questionCode":qcode
            };
            let str = JSON.stringify(obj);
            this.$this.post('/broker/plan/saveUserPlan',str).then((response)=>{
                console.log('plan',response);                
            }).catch((error)=>{
                //console.log(error);
            }) 
        },
        result:function(){
           // /plan/questions/result/{appid}/{serviceId}/{type}
           this.$this.get('/broker/plan/questions/result/'+this.appId+'/4/{type}?type=2').then((response)=>{
                console.log('result',response);                
            }).catch((error)=>{
                //console.log(error);
            }) 
        },
        shouyid:function(qtype,qcode,optcode){
            console.log(qtype,'-------',qcode,'-------',optcode);
            let obj = {
                "appid":this.appId,
                "optcodes":[optcode],
                "questionCode":qcode
            };
            let str = JSON.stringify(obj);
            this.$this.post('/broker/plan/saveUserPlan',str).then((response)=>{
                console.log('plan',response);                
            }).catch((error)=>{
                //console.log(error);
            }) 
        },
        Sresult:function(){
            this.$this.get('/broker/plan/questions/result/'+this.appId+'/4/{type}?type=3').then((response)=>{
                console.log('result',response);                
            }).catch((error)=>{
                //console.log(error);
            }) 
        }
    }
}
</script>