const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const PATHS = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist')
};

const pages = [];
const arrayEntry = {};

fs
  .readdirSync(path.resolve(__dirname, 'src', 'pages'))
  .filter((file) => {
    return file.indexOf('base') !== 0;
  })
  .forEach((file) => {
    pages.push(file.split('/', 2));
    arrayEntry[file] = `/pages/${file}/${file}.js`;
  });


const htmlPlugins = pages.map(fileName => new HtmlWebpackPlugin({
  getData: () => {
    try {
      return JSON.parse(fs.readFileSync(`./src/pages/${fileName}/data.json`, 'utf8'));
    } catch (e) {
      console.warn(`data.json was not provided for page ${fileName}, because `);
      console.warn(e);
      return {};
    }
  },
  filename: `${fileName}.html`,
  template: path.resolve(__dirname, `src/pages/${fileName}/${fileName}.pug`),
  chunks: fileName,
  alwaysWriteToDisk: true,
  inject: 'head',
  scriptLoading: 'defer',
  hash: true,
  minify:{
    collapseWHiteSpace: isProd
  },
  getPaths: () => {
    return PATHS;
  }
}));


const optimization = () => {
  const config = {
    splitChunks:{
      chunks: 'all'
    }
  };

  if( isProd ){
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config;
}


const filename = ext => isDev ? `[name]${ext}` : `[name].[hash].${ext}`;

const plugins = () =>{
  const base = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin( filename('css') ),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
    new MomentLocalesPlugin({
        localesToKeep: ['es-us', 'ru'],
    }),
    new FaviconsWebpackPlugin({
      logo: PATHS.src + '/components/logo/img/logo-mini.svg',
      cache: true,
      publicPath: '',
      outputPath: 'favicons',
      prefix: 'favicons/',
      inject: true,
      lang: 'ru-RU',
      favicons: {
        background: '#fff',
        theme_color: '#BC9CFF',
        version: '1.0',
      },
    }),
  ];

  return base;
};


const imagesLoaders = [
  {
    loader: 'file-loader',
    options: {
      name: 'img/[path][name].[hash].[ext]'
    }
  }
];
if(isProd){
  imagesLoaders.push({
    loader: 'image-webpack-loader',
    options: {
      mozjpeg: {
        progressive: true,
      },
      optipng: {
        enabled: false,
      },
      pngquant: {
        quality: [0.65, 0.90],
        speed: 4
      },
      gifsicle: {
        interlaced: false,
      },
      webp: {
        quality: 75
      }
    }
  });
}

module.exports = {
  context: PATHS.src,
  mode: 'development',
  entry: arrayEntry,
  output:{
    filename: '[name].js',
    path: PATHS.dist,
    publicPath: '',
  },
  resolve:{
    alias:{
      '@': PATHS.src
    }
  },
  devServer:{
    port: 4200,
    hot: isDev,
    open: true,
    contentBase: PATHS.dist,
  },
  devtool: isDev ? 'source-map' : '',
  optimization: optimization(),
  plugins: plugins().concat(htmlPlugins),
  module:{
    rules:[
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hrm: isDev,
              reloadAll: true
            },
          },
          {
            loader: "css-loader",
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        exclude: `${PATHS.src}/theme/fonts/`,
        loaders: imagesLoaders,
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg)$/i,
        include: `${PATHS.src}/theme/fonts/`,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        },
      },
      {
        test: /\.(scss|sass)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hrm: isDev,
              reloadAll: true
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          },
        ]
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options:{
            presets:[
              '@babel/preset-env'
            ],
            plugins:[
              '@babel/plugin-proposal-class-properties'
            ],
            include: [
              '@babel/plugin-transform-destructuring'
            ]
          }
        }
      },
      {
        test: /\.pug$/i,
        loader: {
          loader: 'pug-loader',
          options:{
            pretty: true
          }
        }
      },
    ]
  }
};