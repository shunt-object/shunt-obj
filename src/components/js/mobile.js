export default{
    install(Vue,options){ 
        Vue.prototype.IsPC = function () {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                        "SymbianOS", "Windows Phone",
                        "iPad", "iPod"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        };
        Vue.prototype.userAgent = function(){
            var u = navigator.userAgent;
            if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
                //安卓手机
            } else if (u.indexOf('iPhone') > -1) {
                //苹果手机
            } else if (u.indexOf('Windows Phone') > -1) {
                //winphone手机
            }
        };
        Vue.prototype.isWeiXin = function (){ 
            var ua = navigator.userAgent.toLowerCase(); 
            if(ua.indexOf('micromessenger') != -1) { 
                return true; 
            } else { 
                return false; 
            } 
        };
        
    }
}