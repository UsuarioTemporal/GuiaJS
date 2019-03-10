const path = require('path')
module.exports = {
    entry:{ // donde estara nuestra carpeta de desarrollo
        app:`${__dirname}/src/app/index.js`
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'app.bundle.js'
    }
}