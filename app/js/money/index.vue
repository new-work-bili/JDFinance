<!-- 理财页面 -->
<template lang="html">
    <div>
        <Heador/>
        <mSlider></mSlider>
		<IMGa></IMGa>
		<Money></Money>
		<IMGb></IMGb>
		<Finance></Finance>
		<IMGc></IMGc>
        <Footor cname="mfooter"/>
        <Navbar/>
		
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import mSlider from "./mSlider.vue"
import IMGa from "./IMGa.vue"
import Finance from "./finance.vue"
import IMGb from "./IMGb.vue"
import IMGc from "./IMGc.vue"
import Money from "./money.vue"

export default {
    components: {
        Heador,
        Footor,
        Navbar,
		mSlider,
		IMGa,
		Finance,
		IMGb,
		IMGc,
		Money
    },
}
</script>

<style lang="scss">
  .mfooter{
    margin-top: 0!important;
    ul{
      li:first-child{
        display: none;
      }
    }
  }

</style>
