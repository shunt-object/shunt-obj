module.exports = {
 proxy: {
    '/broker':{
          target: 'http://118.244.227.150:22080', // 接口域名
          // target: 'http://localhost:8080', // 接口域名
          changeOrigin: true, //是否跨域 
          secure: false, 
          pathRewrite: {
            '^/borker': ''  //需要rewrite重写的,
          } 
      }
}
}