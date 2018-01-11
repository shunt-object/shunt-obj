module.exports = {
 proxy: {
    '/broker':{
          //target: 'http://172.16.10.39:8080', // 接口域名
          target: 'http://localhost:8080', // 接口域名
          changeOrigin: true, //是否跨域 
          secure: false, 
          pathRewrite: {
            '^/borker': ''  //需要rewrite重写的,
          } 
      }
}
}