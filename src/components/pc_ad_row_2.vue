<template>
	<div class="ad-row-2">
		<a href="#" class="tag">广告</a>
		<a href="#" class="bg" :style="bgStyle"></a>
	</div>
</template>

<script>
export default{
	props:['bg'],
	computed:{
		bgStyle:function(){
			return {
				'background-image': 'url('+this.bg+')'
			}
		}
	}
}
</script>

<style src="../../static/css/pc/pc_ad_row_2.less" lang="less" scoped></style>