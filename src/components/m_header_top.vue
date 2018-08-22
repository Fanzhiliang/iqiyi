<template>
	<div class="top clearfix">
		<router-link to="/" class="logo"></router-link>
		<div class="right-side  clearfix">
			<div class="search">
				<router-link to="search" class="c-glyphicon c-glyphicon-searchfine"></router-link>
			</div>
			<div class="history">
				<router-link to="history" class="c-glyphicon c-glyphicon-recorder"></router-link>
			</div>
			<div class="home">
				<router-link to="home">我的</router-link>
			</div>
			<div class="download">
				<router-link to="#">下载APP</router-link>
			</div>
		</div>
	</div>
</template>

<style src="../../static/css/mobile/m_header_top.less" lang="less" scoped></style>