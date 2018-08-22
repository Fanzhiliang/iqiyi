<template>
	<a :href="data.href" class="video-1">
		<div class="video-up" :style="{'background-image':'url('+(data.img || data.src)+')'}">
			<span v-if="data.tag" :class="['tag','qy-video-icon',tags[data.tag]]"></span>
			<span  class="update">{{data.update || data.time}}</span>
			<span class="when">{{data.when}}</span>
		</div>
		<div class="video-down">
			<p :class="['title',{big:!data.about&&!data.info}]">{{data.title || data.name}}</p>
			<p class="info">{{data.about || data.info}}</p>
		</div>
	</a>
</template>

<script>
export default{
	props:['data'],
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
.video-1{
	display: inline-block;
	width: 7.92rem;
	float: left;
	overflow: hidden;
	margin-right: 0.1rem;
}
.video-1:nth-child(2n){
	margin-right: 0;
}
.video-up{
	width: 100%;
	height: 4.5rem;
	background-size: cover;
	position: relative
}
.video-1 .tag{
	position: absolute;
	top: 0;
	right: -4px;
	transform: scale(0.8,0.8) translateY(-15%);
}
.video-1 .update{
	position: absolute;
	font-size: 0.5rem;
	color: #fff;
	right: 0.65rem;
	bottom: 0.4rem;
}
.video-1 .when{
	position: absolute;
	font-size: 0.5rem;
	color: #fff;
	left: 0.65rem;
	bottom: 0.4rem;
}
.video-1 .video-down{
	height: 2rem;
	padding: 0.4rem 0.65rem;
}
.video-1 .title{
	color: #333;
	font-size: 0.7rem;
	width: 7rem;
	white-space: nowrap;
	line-height: 1rem;
	max-height: 2rem;
	overflow: hidden;
}
.video-1 .title.big{
	white-space: normal;
}
.video-1 .info{
	color: #999;
	font-size: 0.6rem;
	white-space: nowrap;
	width: 7.2rem;
	line-height: 1rem;
	overflow: hidden;
}
</style>