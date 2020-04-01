const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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

const htmlPlugins = pages.map(fileName => new HtmlWebpackPlugin({
	// getData: () => {
	// 	try {
	// 		return JSON.parse(fs.readFileSync(`./src/pages/${fileName}/data.json`, 'utf8'));
	// 	} catch (e) {
	// 		console.warn(`data.json was not provided for page ${fileName}`);
	// 		return {};
	// 	}
	// },
	filename: `${fileName}.html`,
	template: path.resolve(__dirname, `src/pages/${fileName}/${fileName}.pug`),
	alwaysWriteToDisk: true,
	inject: 'body',
	hash: true,
	minify:{
		collapseWHiteSpace: isProd
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
		new CopyWebpackPlugin([
			// {
			// 	from: `${PATHS.src}/theme/fonts`, 
			// 	to: `${PATHS.dist}/fonts`
			// },
			// {
			// 	from: `${PATHS.src}/**/*.+(png|jpg|svg|gif)`,
			// 	to: `${PATHS.dist}/images/`,
			// 	// to: `${PATHS.dist}/images/[name].[ext]`,
			// }
		]),
		new MiniCssExtractPlugin( filename('css') )
	];

	if( isProd ){
		base.push(new BundleAnalyerPlugin());
	}
	
	return base;
};


module.exports = {
	context: PATHS.src,
	mode: 'development',
	entry: {
		// bundle: [path.resolve(__dirname, 'src/entry.js')]
		bundle: path.join(PATHS.src, '/entry.js')
	},
	output:{
		filename: '[name].js',
		path: PATHS.dist,
		publicPath: '/',
	},
	resolve:{
		extensions: ['.js', '.json', '.png'],
		alias:{
			// '@models': path.resolve(__dirname, 'src/models'),
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
					'css-loader'
				]
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				loader: 'file-loader',
				// loader: 'url-loader',
				// loader: 'file-loader?name=[path][name].[ext]',
				options: {
					name: 'img/[name].[ext]'
				},
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: ['file-loader'],
				// options: {
				// 	name: 'fonts/[name].[ext]'
				// },
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
					'css-loader',
					'sass-loader'
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