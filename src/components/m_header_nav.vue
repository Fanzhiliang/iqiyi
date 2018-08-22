<template>
	<div class="nav clearfix">
		<a href="#" :class="['nav-item',{on:index===onIndex}]" v-for="(item,index) in navItems">{{item}}</a>
		<router-link to="channel" class="nav-more">
			<i class="menu-more-icon"></i>
		</router-link>
	</div>
</template>

<script>
export default{
	props:['onIndex'],
	data(){
		return{
			navItems:['精选','VIP会员','热点','电视剧','电影']
		}
	}
}
</script>

<style src="../../static/css/mobile/m_header_nav.less" lang="less" scoped></style>