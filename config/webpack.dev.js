const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

console.log('required port', process.env.PORT)

module.exports = webpackMerge(commonConfig, {
    devServer: {
        //host: '0.0.0.0',
        port: process.env.PORT || 8080,
        proxy: {
            '/v1': {
                target: 'http://localhost',
                secure: false,
                ws: true,
                pathRewrite: {"^/v1" : ""}
            },
            
        }
    }
});
