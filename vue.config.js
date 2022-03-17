module.exports = {
  publicPath: './',
         css: {
             loaderOptions: {
               css: {},
               postcss: {
                 plugins: [
                   require('postcss-px2rem')({
                     remUnit: 37.5
                   })
                ]
              }
            }
        },
        lintOnSave:true,
  devServer: {
    overlay:{
      warning:false,
      errors:false
  },
    // proxy: {
    //   '/api': {
    //     // target: 'http://172.16.15.27:8081',
    //     target: 'https://www.jessieback.top/',
    //     secure: false, // falseΪhttp���ʣ�trueΪhttps����
    //     changeOrigin: true, // ����������ã�true�������
    //     ws: true,
    //     pathRewrite: { // ·����д����
    //       '^/api': '/api' // ��/proxy/Ϊ��ͷ�ĸ�дΪ''
    //     }
    //   }
    // }
  }
    }