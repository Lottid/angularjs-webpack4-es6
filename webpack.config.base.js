const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require('webpack');


console.log("process.env.NODE_ENV 的值是(webpack.config.js)："+ process.env.NODE_ENV);

module.exports = function makeWebpackConfig(options) {
  const BUILD = !!options.BUILD;
  const WATCH = !!options.WATCH;
  const SERVER = !!options.SERVER;
  const UAT = !!options.UAT;
  const devServer = {
    contentBase: path.resolve(__dirname, 'build'),
    host: 'localhost',
    port: 9090,
    compress: true
  }
  const watchOptions = {
    ignored: /node_modules/,
    aggregateTimeout: 500,
    poll: 1000
  }
  let NODE_ENV = process.env.NODE_ENV;
  if(!NODE_ENV) {
    if(SERVER) NODE_ENV = 'test';
    if(WATCH) NODE_ENV = 'dev';
    if(BUILD) NODE_ENV = 'prod';
  }
  console.log("NODE_ENV 的值是(webpack.config.js)："+ NODE_ENV);
  const config = {
    context: path.resolve(__dirname),
    entry: {
      'app': './src/app.js'
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: '[name].js?v=[hash:8]',
      chunkFilename: '[name].js?v=[hash:8]'
    },
    externals: {
      // 'angular': 'window.angular',
      'jQuery': 'window.jQuery',
      '$': 'window.jQuery'
    },
    module: {
      rules: [{
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, 'src'),
        options: {
          failOnError: true,
        }
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }, {
        test: /\.less/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }, {
        test: /\.html$/,
        loader: 'html-loader?root=/&attrs=img:src img:data-src link:href'
      }, {
        test: /\.(png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/i,
        exclude: /node_modules/,
        loader: 'file-loader?name=images/[name].[ext]?[hash:8]'
      }]
    },
    devtool: 'source-map',
    resolve: {
      alias: {
        _commonComponents: path.resolve(__dirname, 'components'),
        _commonDirectives: path.resolve(__dirname, 'directives'),
        _commonServices: path.resolve(__dirname, 'services'),
        _components: path.resolve(__dirname, 'src/components'),
        _directives: path.resolve(__dirname, 'src/directives'),
        _services: path.resolve(__dirname, 'src/services'),
        _config: path.resolve(__dirname, 'src/config'),
        _assets: path.resolve(__dirname, 'src/assets')
      }
    },
    devServer: SERVER ? devServer : {},
    watch: WATCH,
    watchOptions: WATCH ? watchOptions : {},
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'), //模板
        filename: 'index.html',
        hash: true, //防止缓存
        minify: {
          removeAttributeQuotes: false //压缩 去掉引号
        }
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].css?v=[hash:8]",
        chunkFilename: "css/[id].css?v=[hash:8]"
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(NODE_ENV)
        }
      })
    ],
  }
  if (BUILD) {
    config.plugins.push(
      new CleanWebpackPlugin(['build'])
    );
    config.optimization = {
      runtimeChunk: {
        name: "manifest"
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true, // set to true if you want JS source maps,
          uglifyOptions: {
            warnings: false
          }
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    }
  }
  return config;
}