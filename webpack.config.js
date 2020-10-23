const path = require('path');
const newHtmlPlugins=require('html-webpack-plugin')
const htmlPlugins=new newHtmlPlugins({
    template:'./public/index.html'
})
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'index.js'
    },
    plugins:[htmlPlugins],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000
      },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:['babel-loader','eslint-loader']
            },
            {
                test:/\.s?css$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    }
}