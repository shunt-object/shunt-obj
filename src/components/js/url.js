export default{
    install(Vue,options){ 
        let href =  window.location.href.split('?');
        if(href.length>1){
            Vue.prototype.url = href[1].split('&');
        }else{
            Vue.prototype.url = '';
        }
    }
}