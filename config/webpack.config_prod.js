//helpers
const webpack = require("webpack");
const path = require("path");
const helpers = require("./helpers");

//plugins
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ENV = (process.env.NODE_ENV = process.env.ENV = "production");

module.exports = {
    entry: {
        polyfills: "./src/polyfills.ts",
        vendor: "./src/vendor-aot.ts",
        app: "./src/main-aot.ts" //app bootstrapping entry point
    },

    output: {
        path: helpers.root("dist/prod"),
        filename: "[name].[hash].js", //filename for all output files
        publicPath: "/",
        chunkFilename: "[id].chunk.js"
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
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
                loader: '@ngtools/webpack'
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

        new AngularCompilerPlugin({
            genDir: helpers.root('./dist/prod'),
            tsConfigPath: './tsconfig.aot.json',
            entryModule: helpers.root('./src/app/app.module#AppModule')
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
        }),

        new CopyWebpackPlugin([
            {
                from: "./src/assets",
                to: "assets"
            },
            {
                from: "./src/assets/favicon.ico",
                to: "."
            },
            {
                from: "./src/assets/fonts",
                to: "assets/fonts"
            },
            {
                from: "./src/assets/locales",
                to: "assets/locales"
            },
            { from: "./node_modules/jquery/dist/jquery.min.js", to: "vendor" },
            { from: "./node_modules/angular/angular.js", to: "vendor" },
            {
                from: "./node_modules/angular-cookies/angular-cookies.js",
                to: "vendor"
            },
            {
                from: "./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js",
                to: "vendor"
            },
            {
                from: "./node_modules/angular-animate/angular-animate.min.js",
                to: "vendor"
            },
            {
                from: "./node_modules/angular-sanitize/angular-sanitize.min.js",
                to: "vendor"
            },
            {
                from: "./node_modules/angular-ui-router/release/angular-ui-router.js",
                to: "vendor"
            },
            {
                from: "./node_modules/angular-translate/dist/angular-translate.min.js",
                to: "vendor"
            },
            {
                from:
                    "./node_modules/angular-translate/dist/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js",
                to: "vendor"
            },
            {
                from:
                    "./node_modules/angular-translate/dist/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js",
                to: "vendor"
            },
            {
                from:
                    "./node_modules/angular-translate/dist/angular-translate-handler-log/angular-translate-handler-log.min.js",
                to: "vendor"
            },
            { from: "./node_modules/ui-select/dist/select.min.js", to: "vendor" },
            {
                from: "./node_modules/angular-ui-validate/dist/validate.js",
                to: "vendor"
            },
            { from: "./node_modules/bootstrap/dist/js/bootstrap.min.js", to: "vendor" },
            { from: "./node_modules/lodash/lodash.min.js", to: "vendor" }
        ]),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root("./src"),
            {}
        )


    ]
};
