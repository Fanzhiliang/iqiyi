<template>
	<a :href="data.href" class="video-2">
		<div class="video-up" :style="{'background-image':'url('+(data.img || data.cover)+')'}">
			<span v-if="data.tag" :class="['tag','qy-video-icon',tags[data.tag]]"></span>
			<span class="score" v-if="id=='movie'">{{data.score}}</span>
			<span  class="update" v-else>{{data.update}}</span>
		</div>
		<div class="video-down">
			<p :class="['title',{small:this.id=='qixiu'}]">{{data.title}}</p>
			<p class="info">{{data.info}}</p>
		</div>
	</a>
</template>

<script>
export default{
	props:['data','id'],
	data(){
		return{
			tags:{//qy-video-icon
				vip:'qy-video-vip',
				exc:'qy-video-exc',
				'1080p':'qy-video-1080',
				self:'qy-video-self',
				live:'qy-video-live',
				pay:'qy-video-pay'
			}
		}
	}
}
</script>

<style>
.video-2{
	display: inline-block;
	float: left;
	width: 5.25rem;
	margin-right: 0.1rem;
	overflow: hidden;
}
.video-2:nth-child(4){
	clear: left;
}
.video-2:nth-child(3n){
	margin-right: 0;
}
.video-2 .video-up{
	width: 100%;
	height: 7rem;
	background-size: cover;
	position: relative;
}
.video-2 .tag{
	position: absolute;
	top: 0;
	right: -4px;
	transform: scale(0.8,0.8) translateY(-15%);
}
.video-2 .update{
	position: absolute;
	font-size: 0.5rem;
	color: #fff;
	right: 0.65rem;
	bottom: 0.4rem;
}
.video-2 .score{
	position: absolute;
	font-size: 0.65rem;
	color: #ff6e0d;
	right: 0.65rem;
	bottom: 0.4rem;
	font-weight: bold;
}
.video-2 .video-down{
	padding: 0.4rem 0.65rem;
}
.video-2 .title{
	width: 4.3rem;
	color: #333;
	font-size: 0.7rem;
	line-height: 1rem;
	max-height: 2rem;
	overflow: hidden;
}
.video-2 .title.small{
	height: 1rem;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.video-2 .info{
	width: 4.3rem;
	color: #999;
	font-size: 0.6rem;
	line-height: 1rem;
}
</style>