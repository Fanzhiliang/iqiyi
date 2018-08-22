<template>
	<div class="app-tuijian">
		<a href="#" class="headline">
			<i class="c-channelicon c-channel-yingyong"></i>
			<span>应用推荐</span>
		</a>
		<div class="apps">
			<ul class="app-list">
				<li v-for="item in apps">
					<a :href="item.href"><img :src="item.img" alt=""></a>
					<p>{{item.name}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			apps:[
				{img:'/static/img/app-icon-1.png',href:'#',name:"爱奇艺阅"},
				{img:'/static/img/app-icon-2.png',href:'#',name:"爱奇艺动"},
				{img:'/static/img/app-icon-3.png',href:'#',name:"奇巴布"},
				{img:'/static/img/app-icon-4.png',href:'#',name:"奇秀直播"}
			]
		}
	}
}
</script>

<style>
.app-tuijian{
	overflow-x: hidden;
}
.app-tuijian .headline{
	display: block;
	width: 100%;
	padding: 0.35rem 0.6rem;
	height: 1.75rem;
}
.app-tuijian .headline i{
	line-height: 1.75rem;
}
.app-tuijian .headline span{
	display: inline-block;
	color: #333;
	font-size: 0.75rem;
	font-weight: bold;
	line-height: 1.75rem;
	vertical-align: top;
}
.app-tuijian .apps{
	padding: 0 0.65rem;
}
.app-tuijian .app-list{
	overflow: hidden;
}
.app-tuijian .app-list li{
	text-align: center;
	float: left;
	margin-right: 0.45rem;
}
.app-tuijian .app-list li:last-child{
	margin-right: 0;
}
.app-tuijian .app-list a{
	display: inline-block;
	width: 3.325rem;
	height: 3.325rem;
}
.app-tuijian .app-list img{
	display: block;
	width: 100%;
	height: 100%;
}
.app-tuijian .app-list p{
	font-size: 0.7rem;
	color: #333;
	line-height: 1.5rem;
}
</style>