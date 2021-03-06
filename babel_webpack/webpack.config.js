// npx webpack -p produccion | -d desarrollo
// npx webpack-dev-server // esto es para desarrollo y para produccion tendriamos que convertir el codigo moderno a estandar
// npm run dev
// npm run build
// https://github.com/jantimon/html-webpack-plugin
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: { // donde estara nuestra carpeta de desarrollo
        
        app: [
            "@babel/polyfill",
            `${__dirname}/src/app/index.js`
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/app.bundle.js'
    },
    devServer:{
        port:8080
    },
    module:{ // para establecer reglas de determinados archivos
        rules:[
            {
                test:/\.js/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                    // 'style-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname+'/src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename:'css/app.bundle.css'
        })
    ]
}