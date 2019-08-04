<!-- 用了两个嵌套v-for -->
<template>
	<Panel title="In货推荐" :class="$style.panel">
		<section :class="$style.content" v-for="item in items">
			<img :src="item.big">
			<div :class="$style.list">
				<div v-for="listt in item.list">	<!-- 又嵌套一层 -->
					<img :src="listt.img" alt="">
					<h4>{{listt.title}}</h4>
					<p :class="$style.price"><span>{{listt.price}}</span>起</p>
					<div :class="$style.wrapper">
						<div :style="{width: listt.progress+'%'}"></div> <!-- 记住此类写法,包括了 -->
					</div>
					<p :class="$style.progress">{{listt.progress+'%'}}</p>
				</div>
			</div>
		</section>
	</Panel>
</template>

<script>
	import Panel from "../core/panel.vue";

	export default {
		components: {
			Panel
		},
		data() {
			return {
				items: [{
					big: "//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200",
					list: [{
						img: "https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg",
						title: "双响炮蓝牙音箱",
						price: "29.00",
						progress: 172,
					}, {
						img: "https://img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg",
						title: "脑波相机",
						price: "998.00",
						progress: 259,
					}],
				}, {
					big: "//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200",
					list: [{
						img: "https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg",
						title: "智能电动牙刷",
						price: "19.00",
						progress: 481,
					}, {
						img: "https://img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg",
						title: "烟草加热电子烟",
						price: "258.00",
						progress: 105,
					}],
				}, {
					big: "//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200",
					list: [{
						img: "https://img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg",
						title: "赖公高淮封藏老酒",
						price: "99.00",
						progress: 199,
					}, {
						img: "https://img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg",
						title: "泗洪花雕醉蟹",
						price: "58.00",
						progress: 222,
					}],
				}],
			}
		},
	}
</script>

<style lang="scss" module>
	@import "../../css/element.scss";

	.panel {
		@include panel;
		
		.content {
			margin-bottom: 10px;
			>img {
				width: 100%;
				height: 170px;
				display: block;
			}

			.list {
				@include list(row);
				justify-content: space-around;
				.wrapper {
					float: left;
					width: 50%;
					height: 24px;
					padding-top: 15px;

					>div {
						height: 10px;
						background-image: linear-gradient(270deg, #F55 1%, #FF9C31 100%);	/*  */
						width: 40%;
						max-width: 100%;

					}

				}

				;

				.price {
					font-family: PingFangSC-Semibold;
					font-size: 20px;
					color: #999;
					height: 48px;
					line-height: 48px;

					span {
						font-size: 36px;
						color: #FF3232;
						margin-right: 4px;

						&:before {
							content: "￥";		/* 如何添加￥ */
							font-size: 28px;
						}

					}
				}

				.progress {
					padding-top: 5px;
					text-indent: 20px;
					font-size: 24px;
					color: #999;
				}
			}
		}
	}
	h4{
		font-weight: 600;
		text-align: center;
	}
</style>
