const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const crypto = require('crypto');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const pages = [];

const PATHS = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist')
};

fs
  .readdirSync(path.resolve(__dirname, 'src', 'pages'))
  .filter((file) => {
    return file.indexOf('base') !== 0;
  })
  .forEach((file) => {
    pages.push(file.split('/', 2));
  });


function makeHash(path) {
  var hashFile = '';
  const fileStream = fs.readFileSync(path);
  const hash = crypto.createHash('md4');
  hash.update(fileStream);
  hashFile = hash.digest('hex');

  return hashFile;
}


function getFileName(path) {
  return path.split('\\').pop().split('/').pop();
}

function appendHashFileName(name, hash){
  var name_new = name.split('.');
      name_new[0] += '.' + hash;
      name_new = name_new.join('.');
  return name_new;
}


function changePath(path){
  var hasFile = makeHash( path.replace(/@/, PATHS.src) );
  var filename = getFileName(path);
  var name_hash = appendHashFileName(filename, hasFile);
  path = path.replace(filename, name_hash);
  path = path.replace(/@/, 'img');
  return path;
}


function iteratorArray(arr){
  var toString = {}.toString;  // для получения типа объекта
  for (var i = 0; i < arr.length; i++){
    if( toString.call(arr[i]) === '[object Object]' ){
      arr[i] = iteratorAllProp(arr[i]);
    }
    if( toString.call(arr[i]) === '[object String]' ){
      if( arr[i].includes('@/') ){
        arr[i] = changePath(arr[i]);
      }
    }
  }
  return arr;
}


function iteratorAllProp(obj){
  var toString = {}.toString;  // для получения типа объекта

  for(var prop in obj){
    if( toString.call(obj[prop]) === '[object Object]' ){
      obj[prop] = iteratorAllProp(obj[prop]);
    }
    if( toString.call(obj[prop]) === '[object Array]' ){
      obj[prop] = iteratorArray(obj[prop]);
    }
    if( toString.call(obj[prop]) === '[object String]' ){
      if( obj[prop].includes('@/') ){
        obj[prop] = changePath(obj[prop]);
      }
    }
  }

  return obj;
}


const htmlPlugins = pages.map(fileName => new HtmlWebpackPlugin({
  getData: () => {
    try {
      var data_obj = JSON.parse(fs.readFileSync(`./src/pages/${fileName}/data.json`, 'utf8'));
      try {
        data_obj = iteratorAllProp(data_obj);
      } catch (error) {
        console.log(error);
      }

      return data_obj;
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

const arrayEntry = {};
pages.forEach(fileName => {
  arrayEntry[fileName] = `/pages/${fileName}/${fileName}.js`;
});

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
        test: /\.(scss|sass)$/,
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