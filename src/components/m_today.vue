<template>
	<div class="today" v-if="newsList.length > 0">
		<a href="#" class="headline">
			<i class="c-channelicon c-channel-zixun"></i>
			<span>今日资讯</span>
		</a>
		<div class="news">
			<a href="#" v-for="item in newsList">
				<i class="c-channelicon c-channel-zixun-play"></i>{{item.title}}
			</a>
		</div>
		<div class="videos">
			<v-mVideo1 v-for="(item,index) in videoShow" :data="item" :key="index"/>
		</div>
		<div class="bottom">
			<a href="#">
				更多资讯<i class="c-glyphicon c-glyphicon-more"></i>
			</a>
			<a href="#" @click.prevent="isToggle = !isToggle">
				换一批<i class="c-glyphicon c-glyphicon-refresh"></i>
			</a>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			newsList:[],
			videoList:[],
			isToggle: true
		}
	},
	computed:{
		videoShow(){
			return this.isToggle?this.videoList.slice(2,this.videoList.length):this.videoList.slice(0,2);
		}
	},
	created(){
		this.$http.get('../../static/data/today.json').then((response)=>{
	        if(response.data.code === 200){
	        	let tempNews = response.data.data.small;
	        	tempNews.splice(2,tempNews.length-2)
	          	this.newsList = tempNews;
	          	let tempVideo = response.data.data.pic2;
	          	tempVideo.splice(4,tempVideo.length-4);
	          	this.videoList = tempVideo;
	        }else{
	          console.log('获得今日资讯失败:');console.log(response.data.data.message)
	        }
      	},(response)=>{console.log('获得今日资讯失败:');console.log(response);});
	}
}
</script>

<style>
.today{
	border-bottom: 1px solid rgb(240, 240, 240);
	overflow-x: hidden;
}
.today .headline{
	display: block;
	width: 100%;
	padding: 0.35rem 0.6rem;
	height: 1.75rem;
}
.today .headline i{
	line-height: 1.75rem;
}
.today .headline span{
	display: inline-block;
	color: #333;
	font-size: 0.75rem;
	font-weight: bold;
	line-height: 1.75rem;
	vertical-align: top;
}
.today .news{
	padding: 0 0.6rem;
}
.today .news a{
	height: 0.75rem;
	display: block;
	color: #333;
	vertical-align: top;
	line-height: 0.75rem;
	position: relative;
	padding-left: 1.3rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-bottom: 0.75rem;
}
.today .news a i{
	line-height: 1.5rem;
	position: absolute;
	top: -0.18rem;
	left: -0.15rem;
	margin: 0;
}
.today .videos{
	overflow: hidden;
}
.today .bottom{
	width: 100%;
	height: 2.5rem;
}
.today .bottom a{
	color: #00be06;
	display: inline-block;
	line-height: 2.5rem;
	width: 49%;
	font-size: 0.7rem;
	text-align: center;
}
.today .bottom a i:before{
	font-size: 0.7rem;
	position: relative;
	left: 0.3rem;
}
</style>