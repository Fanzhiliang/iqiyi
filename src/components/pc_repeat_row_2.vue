<template>
	<div class="repeat-row-2" :id="id" v-if="!!data">
		<div class="row-inner clearfix">
			<div class="head-line">
				<span v-if="that.icon" :class="['qy-mod-icon',that.icon]"></span>
				<a href="#" class="head-name"><h3>{{that.name}}</h3><span v-if="id != 'guesslove'">更多></span></a>
				<span class="examples" v-if="data.examples">
					<template v-for="item in data.examples">
						<a :href="item.href" :title="item.title">{{item.title}}</a><span>/</span>
					</template>
				</span>
				<a :href="data.headlineHref" class="headlineImg" v-if="id == 'orderupate'">
					<img v-lazy="data.headlineImg" alt="">
					<span>必看番机动队</span>
				</a>
			</div>
			<div class="row-videos">
				<div class="video" v-for="item in data.list">
					<a :href="item.href" class="video-up" :title="item.title">
						<img v-lazy="item.img" alt="">
						<a v-if="item.tag" :href="item.href" :class="['tag','qy-video-icon',tags[item.tag]]"></a>
						<a v-if="item.time" :href="item.href" class="time">{{item.time}}</a>
					</a>
					<div class="video-down">
						<p class="title" :title="item.title">
							<a :href="item.href" class="program" v-if="item.program">{{item.program}} · </a>
							<a :href="item.href">{{item.title}}</a>
						</p>
						<p class="info" v-if="item.info">
							<i class="qy-svgicon qy-svgicon-user" v-if="that.isUser"></i>
							{{item.info}}
						</p>
						<a href="#" class="attention" v-if="that.isAttention">关注</a>
					</div>
				</div>
				<a href="#" class="more" v-if="id === 'guesslove'">
					<div class="text">
						<p class="text-title">更多精彩内容</p>
						<p class="text-link">进去看看></p>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props:['id'],
	data(){
		return{
			thats:{
				self:{
					name: '自制综艺'
				},
				talkShow:{
					name:'脱口秀'
				},
				orderupate:{
					icon:'orderupate',
					name:'订阅更新',
					isAttention: true
				},
				onlineMovie:{
					name:'网络电影'
				},
				trailer:{
					name:'片花'
				},
				gamesplay:{
					icon:'gamesplay',
					name:'游戏视频',
					isAttention: true,
					isUser: true
				},
				sportsplay:{
					icon:'sportsplay',
					name:'体育'
				},
				originshow:{
					icon:'originshow',
					name:'原创',
					isAttention: true,
					isUser: true
				},
				teachplay:{
					icon:'teachplay',
					name:'教育'
				},
				mobabyplay:{
					icon:'mobabyplay',
					name:'母婴'
				},
				guesslove:{
					icon:'guesslove',
					name:'猜你喜欢'
				}
			},
			tags:{
				vip:'qy-video-vip',
				exc:'qy-video-exc',
				'1080p':'qy-video-1080',
				self:'qy-video-self',
				live:'qy-video-live',
				pay:'qy-video-pay'
			},
			data:{}
		}
	},
	computed:{
		that: function(){
			return this.thats[this.id];
		}
	},
	methods:{

	},
	created: function(){
		this.$http.get('../../static/data/'+this.id+'.json').then((response)=>{
			if(response.data.code === 200){
				this.data = response.data.data;
			}else{
				console.log('获得'+this.that.name+'信息失败:');console.log(response.data.data.message)
			}
		},(response)=>{
			console.log('获得'+this.that.name+'信息失败:');console.log(response);
		});
	}
}
</script>

<style src="../../static/css/pc/pc_repeat_row_2.less" lang="less" scoped></style>