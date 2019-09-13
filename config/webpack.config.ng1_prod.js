//helpers
const webpack = require("webpack");
const path = require("path");
const helpers = require("./helpers");

//plugins
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ENV = (process.env.NODE_ENV = process.env.ENV = "production");

module.exports = {
  entry: {  
    ng1app: "./src/index.ts", //this file points to all the angularjs files in the project
  },

  output: {
    path: helpers.root("dist/prod"),
    filename: "[name].js", //filename for all output files
    publicPath: "/",
    chunkFilename: "[id].chunk.js"
  },

  optimization: {
    minimizer: [
        new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
            uglifyOptions: {
                mangle:false
            }
        }),
    ],
  },

  watchOptions: {
    ignored: [/node_modules/]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ["angular2-template-loader", "ts-loader"],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|ico|json)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: helpers.root("/dist") + "/assets/"
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: "file-loader"
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000"
      },
      {
        test: /font-awesome\.config\.js/,
        use: [{ loader: "style-loader" }, { loader: "font-awesome-loader" }]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".ts"],
    alias: {
      "@icon-font-path": path.resolve(__dirname, "../src/assets/fonts"),
      src: path.resolve(__dirname, "../src")
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        ENV: JSON.stringify(ENV)
      }
    }),

    new HtmlWebpackPlugin({
      template: helpers.root("./src") + "/index.html",
      inject: true,
      minify: {
          removeComments: true,
          collapseWhitespace: true
      }
  }),

    
    new MiniCssExtractPlugin({
      filename: "home-app-styles.css"
    })

    // new BundleAnalyzerPlugin({
    // 	analyzerMode: 'static'
    // })
  ]
};
