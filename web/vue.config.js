// module.exports = {
//     devServer: {
//         proxy: {
//             '/api': {
//               target: 'http://127.0.0.1:8889/', //这里填写项目真实的后台接口地址
//               changOrigin: true, //设置允许跨域
              
//             }
//           }
//     }
//   }
  

// module.exports = {
//     publicPath: '/text2chart/', // 这里是添加 publicPath 的地方
  
//     chainWebpack(config) {
//       if(process.env.NODE_ENV === "production") {  // 只有打包发布才做这些操作
//         config.plugin('extract-css').tap(() => [
//           {
//             filename: 'assets/css/[name].css',
//             chunkFilename: 'assets/css/[name].[contenthash:8].css'
//           }
//         ]) 
//         config.plugin('html').tap(args => {
//           args[0].minify = false;                     // 不压缩 HTML 输出
//           args[0].filename = './index.html';          // 修改模板引用位置
//           args[0].templateParameters= {               // 增加 template 参数
//             BASE_URL:'"'+this.publicPath+'"',                
//           };
//           return args;
//         });
//       }
//     },
//   };
  

