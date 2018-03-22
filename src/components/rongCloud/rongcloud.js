
function rongClouds(idsName){
    //console.log(a.id)
    //console.log(document.getElementById(a.id).innerHTML);
    var idName = idsName.id;
    console.log(idName)
   // console.log(document.getElementById(a).innerHTML)
   
       RCS.init({
            appKey:"cpj2xarlc73sn",
            token:"GYffaK7bbBy92MsBCSBwQH/DWhY7rUdA55SJzMWKIPEYGzGXOBdtBtFeWPLYg/OMkcVs0dY7K/L3RDz7hdlrXewExd/yELe9",
            upload:{
                fileServer:"http://upload.qiniu.com",
                isPrivate:false
            },
            showButton: false,
            //是否需要按钮主动发起，设为false的时候，init()方法直接唤起聊天窗口,需客户自己编写按钮，点击之后调用init(),templates中的button模板不可用;设为true的时候，init()首先唤起客服咨询按钮，点击之后才连接客服，唤起聊天窗口，在进入页面之后就需调用init()方法。此参数是为了方便客户在点击客服按钮后自行获取token，在获取到token之后，执行init()即可。
            connectingCallback: function(){
                console.log('连接中');
            },
            target:document.getElementById(idName),
            customerServiceId:"service",
            extraInfo:{
                "userInfo":{
                    "name":"demo"
                },
                "requestInfo":{
                    "referrer":"20002"
                }
            }
        })
}
export {
    rongClouds
}