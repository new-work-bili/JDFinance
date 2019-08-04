<!-- 跟理财页面里的理财精选差不多 -->
<template>
	<Panel title="白条福利" :class="$style.panel">
		<ul :class="$style.content">
			<li>
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
				<div>
					<h4>开通白条</h4>
					<p>送188元礼包</p>
				</div>
				<p>立即开通 > </p>
			</li>
			<li>
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
				<div>
					<h4>白条闪付</h4>
					<p>新手享158元礼包</p>
				</div>
				<p>立即开通 > </p>
			</li>
			<li>
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
				<div>
					<h4>白条提额</h4>
					<p>金融app专享提额礼包</p>
				</div>
				<p>立即开通 > </p>
			</li>
		</ul>
	</Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
}
</script>

<style lang="scss" module>
	@import "../../css/element.scss";
	.panel{
		@include panel;
		.content{
			li{
				@include list(row);
				align-items: center;
				height: 140px;
				box-sizing: border-box;
				border-top: 1px solid #ddd;
				>img{
					width: 88px;
					height: 88px;
					margin: 0 32px;
				}
				>div{
					width: 344px;
					>p{
						color: #ff3232;
						font-size: 24px;
						line-height: 1.1;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				}
				>p{
					color: #FF801A;
					font-size: 28px;
				}
			}
		}
	}
</style>
