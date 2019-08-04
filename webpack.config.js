const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //提取 CSS 到单个文件
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');	//压缩js


module.exports = env =>{	
	if(!env){
		env={}
	}	
	let plugins = [	//定义一个插件变量，以便于push进来东西，下面要引用时直接用了；默认是开发环境
		new CleanWebpackPlugin(['dist']), //用于删除/清除构建文件夹的webpack插件；为什么要使用它？？？ 
		new HtmlWebpackPlugin({ //简化了HTML文件的创建，以便为你的webpack包提供服务
			template: './app/views/index.html'
		}),
		new webpack.NamedModulesPlugin(),		//区分环境所需要的插件？？？
		new webpack.HotModuleReplacementPlugin()
	];	
	if(env.production){	//如果env有production属性，表示生产环境，使用 "提取CSS到单个文件" 插件
			plugins.push(	//给webpack修改全局变量
			  new webpack.DefinePlugin({
			    'process.env': {
			      NODE_ENV: '"production"'
			    }
			  }),
			new ExtractTextPlugin("style.css"),	//提取 CSS 到单个文件
			new UglifyJsPlugin()	//压缩js，要写在生产模式里
		)
		
	}	
	return{	//箭头函数要return
		entry: { //对不同文件类型使用不同的编译方法
			app: './app/js/main.js'
		},
		devServer: {
			contentBase: './dist',
			compress: true,
			port: 9000
		},
		module: {
			loaders: [{
					test: /\.html$/,
					loader: 'html-loader'
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader',
					options: { //为其设置多个loader
						cssModules: {
							localIdentName: '[path][name]---[local]---[hash:base64:5]',
							camelCase: true
						},//下面用三目运算法把cssloaders的开发环境和生产环境区分开
						loaders: env.production?{ //添加px转rem功能与提取 CSS 到单个文件的合并；因为在vue组件中要同时使用css和scss，所以同时对他两个进行设置																										//?后面的是一些配置的参数；如remUni值1rem=75px
							css: ExtractTextPlugin.extract({use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8', fallback: 'vue-style-loader'}),
							scss: ExtractTextPlugin.extract({use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8!sass-loader', fallback: 'vue-style-loader'})
						}:{
							css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
							scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
						}
					}
				},
				{
					test: /\.scss$/,
					loader: 'style-loader!css-loader!sass-loader', //从右至左
					//遇到scss文件时，先交给sass-loader处理，sass-loader处理完后再交给css-loader处理，然后再交给style-loader处理
				}
			]
		},
		plugins: plugins,//插件，直接引用上面let的插件变量
		resolve: { //对于vue-loader 要使用完整版的编译器来做编译
			alias: {
				'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js' ； 为了解决运行环境问题bug
			}
		},
		output: { //输出
			filename: '[name].min.js', //打包后的名字，[name]指app
			path: path.resolve(__dirname, 'dist') //打包完后放到dist文件中，此文件是在生产环境下生成
		}
	}
	
}


