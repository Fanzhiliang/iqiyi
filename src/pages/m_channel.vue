<template>
	<div class="wrap">
		<div class="header">
			<v-mHeaderTop/>
		</div>
		<div class="main">
			<template v-for="c in channels">
				<div class="title">{{c.title}}</div>
				<div class="value" v-for="value in c.values">
					<a href="#" class="value-item" v-for="v in value">
						<i :class="v.icon"></i>
						<p class="name">{{v.name}}</p>
					</a>
				</div>
			</template>
			<div class="value">
				<a href="#" class="yijian">
					<i class="c-glyphicon c-glyphicon-feed"></i>
					<span>意见反馈</span>
				</a>
			</div>
		</div>
		<v-mFooter/>
	</div>
</template>

<script>
export default{
	data(){
		return{
			channels:[
				{
					title:'影视·休闲',
					values:[
						[
							{name:'电视剧',icon:'c-listicon c-list-dianshiju'},
							{name:'电影',icon:'c-listicon c-list-dianying'},
							{name:'纪录片',icon:'c-listicon c-list-jilupian'},
							{name:'影讯',icon:'c-listicon c-list-yingxun'},
							{name:'片花',icon:'c-listicon c-list-pianhua'},
							{name:'网络电视',icon:'c-listicon c-list-wangluodianying'}
						],
						[
							{name:'综艺',icon:'c-listicon c-list-zongyi'},
							{name:'动漫',icon:'c-listicon c-list-dongman'},
							{name:'脱口秀',icon:'c-listicon c-list-tuokouxiu'},
							{name:'娱乐',icon:'c-listicon c-list-yule'},
							{name:'搞笑',icon:'c-listicon c-list-gaoxiao'},
							{name:'音乐',icon:'c-listicon c-list-yinyue'}
						],
						[
							{name:'奇秀直播',icon:'c-listicon c-list-qixiu'},
							{name:'直播中心',icon:'c-listicon c-list-zhibo'},
							{name:'全网影视',icon:'c-listicon c-list-quanwangyingshi'}
						]
					]
				},
				{
					title:'精选·合家欢',
					values:[
						[
							{name:'游戏',icon:'c-listicon c-list-youxi'},
							{name:'热点',icon:'c-listicon c-list-redian'},
							{name:'风云榜',icon:'c-listicon c-list-fengyunbang'},
							{name:'资讯',icon:'c-listicon c-list-zixun'},
							{name:'原创',icon:'c-listicon c-list-yuanchuang'},
							{name:'爱奇艺出品',icon:'c-listicon c-list-iqychupin'}
						],
						[
							{name:'儿童',icon:'c-listicon c-list-ertong'},
							{name:'母婴',icon:'c-listicon c-list-muying'},
							{name:'教育',icon:'c-listicon c-list-jiaoyu'},
							{name:'健康',icon:'c-listicon c-list-jiankang'},
							{name:'生活',icon:'c-listicon c-list-shenghuo'},
							{name:'体育',icon:'c-listicon c-list-tiyu'}
						]
					]
				},
				{
					title:'其他频道',
					values:[
						[
							{name:'科技',icon:'c-listicon c-list-keji'},
							{name:'军事',icon:'c-listicon c-list-junshi'},
							{name:'汽车',icon:'c-listicon c-list-qiche'},
							{name:'财经',icon:'c-listicon c-list-caijing'},
							{name:'旅游',icon:'c-listicon c-list-lvyou'},
							{name:'时尚',icon:'c-listicon c-list-shishang'}
						],
						[
							{name:'拍客',icon:'c-listicon c-list-paike'},
							{name:'广告',icon:'c-listicon c-list-guanggao'},
							{name:'公益',icon:'c-listicon c-list-gongyi'}
						]
					]
				}
			]
		}
	}
}
</script>

<style src="../../static/css/mobile/m_channel.less" lang="less" scoped></style>