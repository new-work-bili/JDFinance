//路由组件
import Vue from "vue"
import Router from "vue-router"
import "../../css/reset.scss"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Ious from "../ious/index.vue"
import Raise from "../raise/index.vue"
import Download from "../down/download.vue"


Vue.use(Router)

 
export default new Router({
	routes:[	//就因为这个！！！一直空白页的bug就是因为把这里的routes写成了router
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path:"/money",
			name: "money",
			component: Money,
		},
		{
			path:"/ious",
			name: "ious",
			component: Ious,
			
		},
		{
			path:"/raise",
			name: "raise",
			component: Raise,
		},
		{
			path:"/download",
			name:'download',
			component:Download,
		}
	],
})