const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const postcssReporter = require('postcss-reporter');
const postcssSCSS = require('postcss-scss');
const autoprefixer = require('autoprefixer');
// const stylelint = require('stylelint');
// const doiuse = require('doiuse');
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
	// console.log('----------------');
	// console.log(path);
	var hasFile = makeHash( path.replace(/@/, PATHS.src) );
	var filename = getFileName(path);
	var name_hash = appendHashFileName(filename, hasFile);
	path = path.replace(filename, name_hash);
	path = path.replace(/@/, 'img');
	// console.log(path);
	// console.log('----------------');
	return path;
}


function iteratorArray(arr){
	var toString = {}.toString;  // для получение типа объекта
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
	var toString = {}.toString;  // для получение типа объекта

	for(var prop in obj){
		// console.log(prop + ' ; ' + toString.call(obj[prop]));
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
				// console.log(fileName + '  =======================================');
				data_obj = iteratorAllProp(data_obj);
				// console.log('=======================================');
				// console.log(data_obj);
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
	alwaysWriteToDisk: true,
	inject: 'body',
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
		new CopyWebpackPlugin({
			patterns:[
				{
					from: `${PATHS.src}/components/**/*.+(png|jpg|svg|gif)`,
					to: `${PATHS.dist}/img/[path][name].[hash].[ext]`,
				},
				{
					from: `${PATHS.src}/pages/**/*.+(png|jpg|svg|gif)`,
					to: `${PATHS.dist}/img/[path][name].[hash].[ext]`,
				}
			]
		}),
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
      favicons: {
        background: '#fff',
        theme_color: '#BC9CFF',
        version: '1.0',
      },
    }),
	];

	if( isProd ){
		// base.push(new BundleAnalyerPlugin());
	}
	
	return base;
};


module.exports = {
	context: PATHS.src,
	mode: 'development',
	entry: {
		bundle: path.join(PATHS.src, '/entry.js')
	},
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
				test: /\.css$/,
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
				test: /\.(png|jpg|svg|gif)$/,
				exclude: `${PATHS.src}/theme/fonts/`,
				loader: 'file-loader',
				options: {
					name: 'img/[path][name].[hash].[ext]'
				}
			},
			{
				test: /\.(ttf|woff|woff2|eot|svg)$/,
				include: `${PATHS.src}/theme/fonts/`,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]'
				},
			},
			{
				test: /\.(scss|sass)$/,
				// use: [
        //   'css-loader',
        //   {
        //     loader: 'postcss-loader',
        //     options: {
        //       plugins: function () {
        //         return [
        //           autoprefixer({browsers: ['last 2 versions']}),
        //         ];
        //       },
        //     },
        //   },
        //   'sass-loader',
        //   // {
        //   //   loader: 'postcss-loader',
        //   //   options: {
        //   //     syntax: postcssSCSS,
        //   //     plugins: function () {
        //   //       return [
        //   //         stylelint(),
        //   //         doiuse({
        //   //           browsers:['ie >= 11', 'last 2 versions'],
        //   //           ignore: ['flexbox', 'rem', 'css-resize', 'css-masks', 'object-fit'],
        //   //           ignoreFiles: ['**/normalize.css'],
        //   //         }),
        //   //         postcssReporter({
        //   //           clearReportedMessages: true,
        //   //           throwError: true,
        //   //         }),
        //   //       ];
        //   //     },
        //   //   },
        //   // },
				// ],
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
				test: /\.js$/,
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
				test: /\.pug$/,
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