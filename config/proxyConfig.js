module.exports = {
 proxy: {
    '/broker':{
         target: 'http://118.244.227.150:22080', // 接口域名
         // target:"http://WORKGROUP1:8080",   //本地
          // target: 'http://localhost:8080', // 接口域名
          //target:"http://172.16.10.66:8080",  //demo
          changeOrigin: true, //是否跨域 
          secure: false, 
          pathRewrite: {
            '^/borker': ''  //需要rewrite重写的,
          } 
      }
}
}