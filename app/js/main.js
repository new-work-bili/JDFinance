//入口文件
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import viewport from "./viewport"

Vue.config.productionTip = false	//声明不是生产环境

new Vue({
	el:"#app",			//就是要被替换的index.html中的元素
	router,
	components:{App},	//注册引入的组件
	template:'<App/>',	//模板内容
}) 