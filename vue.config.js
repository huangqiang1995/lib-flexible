module.exports = {
    baseUrl : '/',
    devServer : {
        proxy:{
            '/api':{
                target: 'https://m.douban.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}