import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"

Vue.use(Router)

 
export default new Router({
	routes:[	//就因为这个！！！一直空白页的bug就是因为把这里的routes写成了router
		{
			path: "/",
			name: "Home",
			component: Home,
		},
	],
})