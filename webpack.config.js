const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const fs = require('fs-extra');

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = MiniCssExtractPlugin.loader;

//const pages = fs.readdirSync(path.resolve('./src/index.html'));

const config = {
  entry: {
    app: [
      path.resolve(__dirname, 'src/js/items/loadItems.js'),
      path.resolve(__dirname, 'src/js/login/closeandswitchI.js'),
      path.resolve(__dirname, 'src/js/login/login.js'),
      path.resolve(__dirname, 'src/js/login/showPassLogin.js'),
      path.resolve(__dirname, 'src/js/signup/closeandswitchS.js'),
      path.resolve(__dirname, 'src/js/signup/showPassReg.js'),
      path.resolve(__dirname, 'src/js/signup/signup.js'),
      path.resolve(__dirname, 'src/js/items.js'),
      path.resolve(__dirname, 'src/js/localStorageService.js'),
      path.resolve(__dirname, 'src/js/main.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    port: 8080,
    liveReload: true,
    watchFiles: ['./src/**'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${path.resolve(`./src/index.html`)}`,
      filename: `index.html`,
    }),

    new MiniCssExtractPlugin(),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/img'),
          to: path.resolve(__dirname, 'dist/img'),
        },
        {
          from: path.resolve(__dirname, 'src/css'),
          to: path.resolve(__dirname, 'dist/css'),
        },
      ],
    }),
  ],
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
