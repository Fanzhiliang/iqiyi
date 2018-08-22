<template>
	<div class="body">
		<div class="body-inner clearfix" ref="body">
			<v-pcTodayRow/>
			<div class="zonyshow-wrap">
				<v-pcRepeatRow1 :id="'zonyshow'"/>
				<v-pcRecommendRow/>
			</div>
			<v-pcRepeatRow2 :id="'self'"/>
			<v-pcRepeatRow2 :id="'talkShow'"/>
			<v-pcRepeatRow1 :id="'yuleshow'"/>
			<v-pcRepeatRow2 :id="'orderupate'"/>
			<v-pcAdRow1 :dataUrl="adDataUrl"/>
			<v-pcRepeatRow3 :id="'movie'"/>
			<div class="double-row">
				<div class="double-row-inner clearfix">
					<v-pcRepeatRow2 :id="'onlineMovie'"/>
					<v-pcRepeatRow2 :id="'trailer'"/>
				</div>
			</div>
			<v-pcAdRow2 :bg="adBgImg1"/>
			<v-pcRepeatRow3 :id="'tv'"/>
			<v-pcRepeatRow1 :id="'domanshow'"/>
			<v-pcRepeatRow1 :id="'childshow'"/>
			<v-pcRepeatRow2 :id="'gamesplay'"/>
			<v-pcRepeatRow2 :id="'sportsplay'"/>
			<v-pcRepeatRow2 :id="'originshow'"/>
			<v-pcRepeatRow3 :id="'record'"/>
			<div class="double-row">
				<div class="double-row-inner clearfix">
					<v-pcRepeatRow2 :id="'teachplay'"/>
					<v-pcRepeatRow2 :id="'mobabyplay'"/>
				</div>
			</div>
			<v-pcRepeatRow2 :id="'guesslove'"/>
			<v-pcPindaoRow/>
			<v-pcAdRow2 :bg="adBgImg2"/>
		</div>
	</div>
</template>

<script>
export default{
	props:['body'],
	data(){
		return{
			adDataUrl: '../../static/data/ad.json',
			adBgImg1: '../../static/img/ad-row-1.jpg',
			adBgImg2: '../../static/img/ad-row-2.jpg'
		}
	},
	mounted:function(){
		this.$nextTick(()=>{
			this.$emit('update:body',this.$refs.body);
		});
	}
}
</script>

<style lang="less" scoped>
	.body-inner{
		width: 925px;
		margin: 0 auto;
		@media screen{
			@media (min-width: 1150px){
				width: 1110px;
			}
			@media (min-width: 1300px){
				width: 1290px;
			}
			@media (min-width: 1600px){
				width: 1505px;
			}
			@media (min-width: 1750px){
				width: 1720px;
			}
		}
	}
	.zonyshow-wrap{
		width: 100%;
		overflow: hidden;
	}
	.double-row{
		overflow: hidden;
		.double-row-inner{
			width: 300%;
			& > *{
				float: left;
			}
			& > *:nth-child(2){
				margin-left: -190px;
				@media screen{
					@media (min-width: 1300px){
						margin-left: -220px;
					}
					@media (min-width: 1600px){
						margin-left: -5px;
					}
				}
			}
		}	
	}
</style>