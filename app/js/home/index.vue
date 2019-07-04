<template lang="html">
    <div :class="$style.home">	<!-- 原本是 class='home';这里是使用了css Module;但是为什么？ -->
        <div>Home</div>
		<div :class="$style.test"></div>
		<p class="title">title</p>
    </div>
</template>

<script>
export default {	//为什么这个地方不输出也能
	/* name:"Home" */

}
</script>

<style lang="scss" module>	//module表示使用css Module 即css模块化
  @import '../../css/reset.scss';
  .home{
    color: red;
    font-size: 160px;
  }
  .test{
	  background-color: red;
	  width: 50px;
	  height: 100px;
	  background: red;
  }
</style>