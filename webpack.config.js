const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:"development",
    entry:path.resolve(__dirname,'src','main.tsx'),
    output:{
        filename:"[name].[contenthash].js",
        path:path.resolve(__dirname,'dist'),
        clean:true
    },
    devtool: 'inline-source-map',
    plugins:[
        new HtmlWebpackPlugin({template:path.resolve(__dirname,'public','index.html')})
    ],
    module:{
        rules:[
            {
                test:/\.tsx?/,
                use:'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      }

}