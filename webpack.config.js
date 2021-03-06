const path = require("path");
const webpack = require('webpack')

module.exports = {
    entry: "./frontend/entry.jsx",
    plugins: [new webpack.DefinePlugin({ 'process.env': {
        GOOGLE_API_KEY: JSON.stringify('AIzaSyAcPEQaM7XDDOB0OtvIwYWCBIuIHH9tXVQ')
      }
      })],
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"
        ),
        filename: './bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.*']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, 
//a regular expression that tests what kind of files to run through this loader.

                exclude: /(node_modules)/, //ignore these files
                use: {
                  loader: 'babel-loader',
//the name of the loader we are going to use (babel-loader).

                  options: { // options for the loader
   // for webpack 5, this 'query' key should be 'options' key instead
   // for more info: https://webpack.js.org/configuration/module/#ruleoptions--rulequery
                    presets: ['@babel/env', '@babel/react']
//tells loader to use @babel/env which transpiles back to es5 and @babel/react which    converts jsx code
                  }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    devtool: 'source-map',
}