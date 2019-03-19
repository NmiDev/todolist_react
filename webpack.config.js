// Path resolver 
const path = require('path');
// Webpack plugins 
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// Modes : dev, prod or none 
const devMode = process.env.NODE_ENV !== 'production';

// Configuration
module.exports = {
  // Set the default mode
  mode : 'development',
  // Resolve personnal path alias
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
    }
  },
  // Set the entry point
  entry: [
    // Babel Polyfill tools
    "babel-polyfill",
    // Main entry point for my script
    "./src/index.js",
    // Main entry point for my styles
    "./src/styles/index.scss"
  ],
  // Set the output
  output: {
    // Path for the file
    path: path.resolve(__dirname, 'dist'),
    // Name for the output file
    filename: "app.js"
  },
  // Loaders modules configurations
  module: {
    rules: [
      // Files .js manager
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        }
      },
      // Files .html manager
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: !devMode ? true : false }
          }
        ]
      },
      // Files .sass, .scss, .css manager
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer'),
              ]
            }
          },
          "sass-loader"
        ]
      },
      // Files images manager
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
            },
          },
        ],
      },
    ]
  },
  // Plugins configurations
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "./src/assets/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new UglifyJsPlugin({

    }),
    new OptimizeCSSAssetsPlugin({

    }),
  ]
};
