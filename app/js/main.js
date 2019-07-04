import Vue from "vue"
import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false	//声明不是生产环境

new Vue({
	el:"#app",
	router,
	components:{App},	//注册引入的组件
	template:'<App/>',	//末班内容
}) 