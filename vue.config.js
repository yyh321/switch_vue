const autoprefixer = require('autoprefixer');
// const pxtorem = require('postcss-pxtorem');
const webpack = require('webpack')
const path = require('path');
const url = "http://10.233.43.32:8093";

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    outputDir: 'dist',
    // css: {
    //     loaderOptions: {
    //         // postcss: {
    //         //     plugins: [
    //         //         autoprefixer(),
    //         //         pxtorem({
    //         //             rootValue: 17.5,
    //         //             propList: ['*']
    //         //         })
    //         //     ]
    //         // }
    //     }
    // },
    // baseUrl: './',
    publicPath: '/homi/dx',
    // baseUrl: 'http://192.168.1.74:8085/',
    assetsDir: "static",
    // devServer: {
    //     host: '0.0.0.0',
    //     port: 8060,
    //     https: false, // https:{type:Boolean}
    //     open: true
    // },
    devServer: {
        proxy: {
            '/api': {
                target:"http://10.233.43.32:8093",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ""
                }
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
            })
        ]
    },
    productionSourceMap: false,
    lintOnSave: false,
    chainWebpack: config => {
        config.entry.app = ["babel-polyfill", resolve('./src/main.js')],
            config.resolve.alias
                .set('@', resolve('./src'))
                .set('assets',resolve('./src/assets'))
                .set('components',resolve('./src/components'))
    }
};
