# JDFinance-new

### webpack的配置
* 写这个项目主要是练习一下webpack的配置使用。没错该项目并没有使用vue-cli脚手架,而是自己配置的webpack
	* 实现了通过在命令行上的指令来区分生产环境和开发环境，进而在特定环境下使用特定的loader
	* 引入hotcss来适配移动端屏幕
	* 使用cssModiles来实现css的模块化，解决css作用域污染的问题
	* 使用px2rem-loader使px自动变异成rem
	* 使用extract-text-webpack-plugin在打包时把项目的多个style文件合并成一个
### 模块化
* 把页面中可以抽象成同一类型的部分，用单独的一个组件去写出框架，写上插槽slot;再在其他组件中使用该组件
* 使用sass来实现css的模块化

```
//比如该项目大量使用了felx布局，所以我们做如下封装
@mixin flex($direction:colum) {
	display: flex;
	flex-direction: $direction;
	flex-wrap: wrap;
	
}
```


