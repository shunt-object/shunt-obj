<template>
    <div class="dvsmain">
            <table class="table table-bordered">
                <thead class="row">
                    <tr>
                        <th class="text-center thtop thtops">用户名</th>
                        <th class="text-center thtop">登录名</th>
                        <th class="text-center thtop">公司信息</th>
                        <th class="text-center thtop">注册地址</th>
                        <th class="text-center thtop">行业信息</th>
                        <th class="text-center thtop">手机号码</th>
                        <th class="text-center thtop">邮件地址</th>
                        <th class="text-center thtop">注册时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="re in responers">
                        <td>{{re.username}}</td>
                        <td>{{re.realname}}</td>
                        <td>{{re.tenant}}</td>
                        <td>{{re.province.province}}/{{re.city.city}}/{{re.area.area}}</td>
                        <td>{{re.industryStr.name}}</td>
                        <td>{{re.phone}}</td>
                        <td>{{re.email}}</td>
                        <td>{{re.createDt}}</td>
                    </tr>
                
                </tbody>
            </table>
    </div>
</template>
<style>
    .dvsmain{
            min-height: 90vh;
            padding-bottom: 5%;
    }
    .thtop{
        border-top:1px solid #ddd !important;
    }
    .thtops{
        border-top-width: 1px !important;
    }
</style>
<script>
    export default{
         data () {
            return {
                responers:[]
            }
         },
         mounted:function(){
             this.$this.get('/broker/admin/user/list').then((respone)=>{
              this.responers = respone.data.data
                console.log(this.responers);
            }).catch((error)=>{
            })
         }
    }
</script>

