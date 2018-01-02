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
    <!--定量问题 收益度-->
    <div class="liang">
        <p v-for="(i,index) in qinhe">{{i.content}}
            <span v-for="(item,itemIndex) in i.option" >
                <input type="radio" :name="i.code" v-if="i.qtype==1" v-on:click="qin(index,i.qtype,i.code,item.code)" :checked="i.selectOption==item.code?true:false">
                <input :id="item.code" type="checkbox" :checked="i.selectOption[itemIndex]==item.code?true:false" v-else v-on:click="qin(i.selectOption,i.qtype,i.code,item.code)">
                {{item.content}}
            </span>
        </p>
        <button v-on:click="result(2)">定量结果</button>
    </div>
    <!--定量问题 亲和度-->
    <div class="liang">
        <p v-for="i in shouyi">{{i.content}}
            <span v-for="(item,itemIndex) in i.option">
                <input type="radio" :checked="i.selectOption==item.code?true:false" :name="i.code" v-if="i.qtype==1" v-on:click="qin(i.selectOption,i.qtype,i.code,item.code)">
                <input type="checkbox":checked="i.selectOption[itemIndex]==item.code?true:false" v-else v-on:click="qin(i.selectOption,i.qtype,i.code,item.code)">{{item.content}}
            </span>
        </p>
        <button v-on:click="result(3)">收益结果</button>
    </div>
    <!--表格 -->
        <table id="example">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
            </tr>
            <tr>
                <td>Sonya Frost</td>
                <td>Software Engineer</td>
                <td>Edinburgh</td>
                <td>23</td>
                <td>2008/12/13</td>
                <td>$103,600</td>
            </tr>
            <tr>
                <td>Jena Gaines</td>
                <td>Office Manager</td>
                <td>London</td>
                <td>30</td>
                <td>2008/12/19</td>
                <td>$90,560</td>
            </tr>
            <tr>
                <td>Quinn Flynn</td>
                <td>Support Lead</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2013/03/03</td>
                <td>$342,000</td>
            </tr>
            <tr>
                <td>Charde Marshall</td>
                <td>Regional Director</td>
                <td>San Francisco</td>
                <td>36</td>
                <td>2008/10/16</td>
                <td>$470,600</td>
            </tr>
            <tr>
                <td>Haley Kennedy</td>
                <td>Senior Marketing Designer</td>
                <td>London</td>
                <td>43</td>
                <td>2012/12/18</td>
                <td>$313,500</td>
            </tr>
        </tbody>
 
    </table>
</div>
</template>
<script> 

$(document).ready(function() {
    $('#example').dataTable( {
        "bPaginate":true,
    })
} )
export default{
    name:'plan',
    data(){
        return {
            quetionList:[],
            appId:'',
            qinhe:[],
            serverce:'',
            cloud:'',
            checked:false,
            shouyi:[],
            selectedId:[],
            indexI:0
        }
    },
    mounted:function(){
       // this.appId = sessionStorage.getItem('appId');
       this.appId = 12;
        let qcode = -1;
        let optcode = -1;
        console.log('appId',sessionStorage.getItem('appId'));
        this.getdata(this.appId,qcode,optcode);
        //定量问题
        this.getLiang(this.appId,2);
        this.getLiang(this.appId,3);
        //
        this.$this.get('/broker/result/plan/'+this.appId+'').then((response)=>{
            console.log('结果',response);                
        }).catch((error)=>{
            
        }) 
        
    },
    methods:{
        fn:function(qcode,optcode){
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
           this.$this.get('/broker/plan/questions/result/'+this.appId+'/3/{type}?type='+type+'').then((response)=>{
                console.log('result',response);                
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
    }
}
</script>