module.exports = {
 proxy: {
    '/api':{
         target: 'http://10.94.100.122', // 接口域名
         //target:"http://WORKGROUP1:8080",   //本地
           //target: 'http://localhost:8080', // 接口域名
          //target:"http://172.16.10.66:8080",  //demo
          changeOrigin: true, //是否跨域
          // secure: false,
          // pathRewrite: {
          //   '^/fl': ''  //需要rewrite重写的,
          // }
      }
}
}
