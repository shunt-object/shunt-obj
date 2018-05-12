<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback">顾问</p>
</div>
<div class="adviser" style="background:#fff;">
    <div class="adviser-title">
        <i class="iconfont icon-jibenxinxi main-color" style="color:#da121a"></i>预约信息
    </div>
    <div class="adviser-select">
        <div class="adviser-sele-list adviser-sele-on">
            <button>已预约顾问</button>
        </div>
        <div class="adviser-sele-list">
            <button>已预约课程</button>
        </div>
    </div>
    <div class="adviser-table">
        <table>
            <thead>
                <tr>
                    <th>已预约顾问</th>
                    <th>预约时间</th>
                    <th>预约是由</th>
                    <th>备注</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>已预约顾问</td>
                    <td>预约时间</td>
                    <td>预约是由</td>
                    <td>备注</td>
                    <td>操作</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="adviser-title">
        <i class="iconfont icon-jibenxinxi main-color" style="color:#da121a"></i>智识学院
    </div>
    <div class="adviser-cafe row">
        <div class="col-md-4" v-for="item in cafelist">
            <div class="bigcafe-desc-list">
                <img :src="item.userProfessor.headImg" alt="" v-on:click="teamdetail(item.userProfessor.id)">
                <div class="bigcafe-desc-name">{{item.realname}}</div>
                <div class="bigcafe-desc-jobs">{{item.userProfessor.title}}</div>
                <div class="bigcafe-desc-honour">{{item.userProfessor.desc}}</div>
                <button class="bigcafe-desc-btn">我要预约</button>   
            </div>
        </div>
    </div>
</div>

</div>
</template>
<script>
import '../adviser/adviser.css'
export default {
    name:'adviser',
    data(){
        return {
            cafelist:[],
        }
    },
    mounted:function(){
         this.getlist();
    },
    methods:{
        getlist:function(){
            this.$this.get('/broker/prof/getList').then((response)=>{
                //console.log('---',response.data);
                this.cafelist = response.data.data;
            }).catch((error)=>{

            })
        },
    }
}
</script>

