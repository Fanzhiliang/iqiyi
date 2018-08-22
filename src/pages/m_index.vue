<template>
	<div class="wrap">
		<v-mIndexHeader/>
		<div class="main">
			<v-mIndexSlider/>
			<v-mTuijian/>
			<v-mToday/>
			<div v-show="isShowMore">
				<v-mRepeatRow1 :id="'tv'"/>
				<v-mRepeatRow1 :id="'movie'"/>
				<v-mRepeatRow1 :id="'donman'"/>
				<v-mRepeatRow2 :id="'zonyshow'"/>
				<v-mRepeatRow2 :id="'yuleshow'"/>
				<v-mRepeatRow1 :id="'qixiu'"/>
				<v-mRepeatRow2 :id="'originshow'"/>
				<v-mRepeatRow2 :id="'teachplay'"/>
				<v-mRepeatRow1 :id="'record'"/>
				<v-mRepeatRow2 :id="'sportsplay'"/>
				<v-mRepeatRow2 :id="'mobabyplay'"/>
				<v-mRepeatRow2 :id="'trailer'"/>
				<v-mRepeatRow2 :id="'childshow'"/>
				<v-mAppTuijian/>
				<v-mBackTop/>
			</div>
			<div class="loading" v-show="!isShowMore">
				<p>爱奇艺正在努力加载中...</p>
			</div>
		</div>
		<v-mFooter v-show="isShowMore"/>
	</div>
</template>

<script>
export default{
	data(){
		return{
			isShowMore: false
		}
	},
	mounted(){
		this.GLOBAL.setScrollTop(0);
		document.addEventListener('scroll',()=>{
			if(this.isShowMore){return;}
			if(this.GLOBAL.getScrollTop() >= this.GLOBAL.getScrollHeight()-this.GLOBAL.getWindowHeight()){
				setTimeout(()=>{this.isShowMore = true;},500);
			}
		});
	}
}
</script>

<style scoped>
.main{
	
}
.main .loading{
	height: 2.5rem;
	text-align: center;
}
.main .loading p{
	font-size: 0.7rem;
	color: #999;
	line-height: 2.5rem;
}
</style>