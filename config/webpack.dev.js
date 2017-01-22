const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

console.log(process.env, process.env.PORT, process.env.$PORT);

module.exports = webpackMerge(commonConfig, {
    devServer: {
        //port: 
        proxy: {
            '/v1': {
                target: 'http://localhost',
                secure: true,
                ws: true,
                pathRewrite: {"^/v1" : ""}
            },
            
        }
    }
});
