<template>
	<div :class="[btn,cname]">	<!-- 动态绑定两个class名 -->
		<slot></slot>
	</div>
</template>

<script>
	export default{
		data() {		//一个是自己的
			return {
				btn: "btn"
			}
		},
		props: {		//一个是外部传来的
			cname: {
				type: String,
				default: ""
			},
		},
	}
</script>

<style lang="scss">
	@import "../../css/element.scss";
	
	.btn{
		@include btn;
	}

</style>
