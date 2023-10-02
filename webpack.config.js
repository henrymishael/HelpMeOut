const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   
    entry: {
        popup: './src/popup.jsx',
        options: './src/options.jsx',
        background: './src/background.js',
        contentScript: './src/contentScript.js',
        recordingUI:'./src/recordingUI.jsx' 
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    module:{
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader', 
               options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
               }
            }
        },
        {
            test: /\.(png|jpe?g|gif|svg|ico)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
              'postcss-loader',
            ],
          },
    ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/popup.html',
        filename: 'popup.html',
    }),
    new HtmlWebpackPlugin({
        template: './src/options.html',
        filename: 'options.html',
    }),
    new HtmlWebpackPlugin({
        template: './src/recordingUI.html', 
        filename: 'recordingUI.html',       
      }),
    new CopyPlugin({
      patterns: [
        { from: "public"}
      ],  
    }),
],
};