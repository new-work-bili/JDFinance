<template>
	<section :class="[panelClass,cname]">	<!-- 语义化 -->
		<h4>--{{title}}--</h4>
		<slot></slot>						<!-- 插槽，被替换 -->
	</section>
</template>

<script>
	export default{
		data(){
			return{
				panelClass:"panel",
			}
		},
		props: {
			cname: {
				type: String,
				default: ""
			},
			title:{
				type:String,
				default:""
			}
		},
		
		
	}
</script>

<style lang="scss">
	@import "../../css/element.scss";
	.panel{
		@include panel;
	}
</style>
