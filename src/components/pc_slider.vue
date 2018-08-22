<template>
	<div class="slider" v-if="sliderList.length>0" :style="sliderStyle" @mouseenter="stopCycle" @mouseleave="startCycle">
		<ul class="slider-bg">
			<li v-for="item in sliderList" :style="item.style" :class="{on:item.isOn}">
				<a :href="item.href"></a>
			</li>
		</ul>
		<a :href="link" class="slider-toggle-link">
			<div class="link-inner clearfix">
				<ul class="slider-title">
					<li v-for="(item,index) in sliderList">
						<a :href="item.href" :class="{on:item.isOn}" @mouseenter="toggleBg(index)">
							{{item.title}}
						</a>
					</li>
				</ul>
				<a :href="link" class="left-block"></a>
			</div>
		</a>
		<div class="slider-bottom">
			<div class="bottom-inner clearfix">
				<div class="left-col">
					<div class="group" v-for="group in groups">
						<div class="group-col" v-for="col in group">
							<div class="group-item" v-for="item in col">
								<a href="#">{{item}}</a>
							</div>
						</div>
					</div>
				</div>
				<div class="right-col">
					<a href="#">
						<i class="big-vip-gold"></i>
						<p>会员精选</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props: ['isTop'],
	data(){
		return{
			sliderList: [],
			link: '#',
			currIndex: 0,
			cycleObj: false,
			headerHeight: '',
			groups: [
				[['娱乐','体育','资讯'],['电影','片花','网络电影'],['电视剧','综艺','脱口秀'],['动漫','儿童','教育'],['生活','母婴','健康'],['音乐','时尚','旅游'],['搞笑','原创','拍客'],['财经','科技','汽车'],['军事','公益','纪录片']],
				[['热点','风云榜','全网影视'],['奇秀直播','直播中心','应用商店'],['商城','游戏','游戏中心'],['大头','爱奇艺号','VR'],['文学','漫画','泡泡广场']],
				[['娱乐','资讯'],['电影','网络电影'],['电视剧','片花'],['综艺','脱口秀']],
				[['动漫','游戏'],['搞笑','旅游'],['音乐','时尚'],['原创','拍客']],
				[['财经','科技'],['体育','教育'],['儿童','母婴'],['生活','健康'],['军事','汽车'],['公益','纪录片'],['文学','漫画']],
				[['热点','风云榜'],['全网影视','应用商店'],['奇秀直播','直播中心'],['商城','VR'],['大头','爱奇艺号'],['泡泡广场','游戏中心']]
			]
		}
	},
	computed: {
		sliderStyle: function(){
			return this.isTop?{}:{
				'margin-top': this.headerHeight
			};
		}
	},
	methods: {
		getSliderList: function(){
			this.$http.get('../../static/data/slider.json').then((response)=>{
				if(response.data.code === 200){
					let tempList = response.data.data.list;
					tempList.forEach(function(item,i){
						tempList[i].style = {
							'z-index': tempList.length - i,
							'background-image': 'url('+item.img+')'
						}
						tempList[i].isOn = i===0?true:false;
					});
					this.sliderList = tempList;
					this.link = this.sliderList[0].href;
				}else{
					console.log('获得焦点图信息失败:');console.log(response.data.data.message)
				}
			},(response)=>{
				console.log('获得焦点图信息失败:');console.log(response);
			});
		},
		toggleBg: function(index){
			this.sliderList.forEach((item,i)=>{
				if(index == i){
					this.$set(this.sliderList[i],'isOn',true);
					this.currIndex = index;
					this.link = this.sliderList[i];
				}else{
					this.$set(this.sliderList[i],'isOn',false);
				}
			});
		},
		startCycle: function(){
			if(this.cycleObj !== false){return false;}
			this.cycleObj = setInterval(()=>{
				this.currIndex += 1;
				if(this.currIndex >= this.sliderList.length){
					this.currIndex = 0;
				}
				this.toggleBg(this.currIndex);
			},5000);
		},
		stopCycle: function(){
			clearInterval(this.cycleObj);
			this.cycleObj = false;
		}
	},
	created: function(){
		this.getSliderList();
	},
	mounted: function(){
		setTimeout(this.startCycle,2000);
		window.addEventListener('load',()=>{
			this.headerHeight = this.GLOBAL.getStyle(document.querySelector(".header"),'height');
		});
	}
}
</script>

<style src="../../static/css/pc/pc_slider.less" lang="less" scoped></style>