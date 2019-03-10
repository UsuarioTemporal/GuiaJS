const path = require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports = {
    entry:{ // donde estara nuestra carpeta de desarrollo
        app:`${__dirname}/src/app/index.js`
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'app.bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:`${__dirname}/src/index.html`
        })
    ]
}
//npx webpack -p produccion | -d desarrollo