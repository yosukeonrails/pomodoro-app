const path = require('path');

const config = {
    entry: './js/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    watch:true,
    module: {
      rules: [
        { test:/\.js$/, 
          use: [
              {
                loader:'babel-loader',
                options:{
                  presets:['babel-preset-env', 'react','es2015','stage-2']
                    }
              }
              ]
        },
        {
            test:/\.less$/,
            use: [{
                loader:'style-loader'
            },{
                loader:'css-loader'
            },{
                loader:'less-loader',
                options:{
                    strictMath:true,
                    noIeCompat:true
                }
            }]
        },
        
        {
          test: /\.svg$/,
          use: "file-loader",
        }

       
      ]
    }
  };
  
  module.exports = config;

//   {
//     test:/\.css$/,
//     loader:'style-loader!css-loader'
//   }