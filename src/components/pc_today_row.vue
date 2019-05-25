<template>
	<div class="today" v-if="!!news">
		<div class="today-inner clearfix">
			<div class="head-line">
				<span class="qy-mod-icon focuplay"></span>
				<a href="#" class="head-name"><h3>今日焦点</h3><span>更多></span></a>
			</div>
			<div class="news">
				<div class="big-new">
					<em>NEWS</em><i class="qy-svgicon qy-svgicon-news-point16"></i>
					<a :href="news.big[0].href" :title="news.big[0].title">{{news.big[0].title}}</a>
				</div>
				<div class="small-new" v-for="i in [0,1,2]">
					<i class="arrow"></i>
					<a :href="news.small[i].href" :title="news.small[i].title">{{news.small[i].title}}</a>
				</div>
				<div class="big-new">
					<em>NEWS</em><i class="qy-svgicon qy-svgicon-news-point16"></i>
					<a :href="news.big[1].href" :title="news.big[1].title">{{news.big[1].title}}</a>
				</div>
				<div class="small-new" v-for="i in [3,4]">
					<i class="arrow"></i>
					<a :href="news.small[i].href" :title="news.small[i].title">{{news.small[i].title}}</a>
				</div>
				<div class="small-new double">
					<i class="arrow"></i>
					<a :href="news.small[5].href" :title="news.small[5].title">{{news.small[5].title}}</a>
					<i class="separate"></i>
					<a :href="news.small[6].href" :title="news.small[6].title">{{news.small[6].title}}</a>
				</div>
				<a :href="item.href" :title="item.title" class="pic-new" v-for="item in news.pic1">
					<div class="img-frame">
						<img v-lazy="item.src" alt="">
					</div>
					<div class="p-frame">
						<p>{{item.title}}</p>
					</div>
				</a>
			</div>
			<div class="stars">
				<div class="start-slider" @mouseenter="stopCycle" @mouseleave="startCycle">
					<a :href="item.href" :class="['slider-item',{on:item.isOn}]" :style="item.style" v-for="item in sliderList">
						<img v-lazy="item.img" alt="">
					</a>
					<div class="slider-ctrl">
						<div class="ctrl-up">
							<i class="qy-svgicon qy-svgicon-focus-today"></i><a :href="sliderHref">{{sliderTitle}}</a>
						</div>
						<div class="ctrl-down clearfix">
							<span class="info" v-for="(item,index) in sliderList" v-show="currIndex == index">{{item.info}}</span>
							<div class="toggle-item">
								<i class="qy-common-icon qy-common-pageleft8" @click="toggleItem(-1)"></i><span>{{currIndex+1}}/4</span><i class="qy-common-icon qy-common-pageright8" @click="toggleItem(1)"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="small-new double" v-for="item in news.stars">
					<i class="arrow"></i>
					<a :href="item[0].href" :title="item[0].title">{{item[0].title}}</a>
					<i class="separate"></i>
					<a :href="item[1].href" :title="item[1].title">{{item[1].title}}</a>
				</div>
			</div>
			<div class="pics clearfix">
				<a :href="item.href" :title="item.title" class="pic-new" v-for="item in news.pic2">
					<div class="img-frame">
						<img v-lazy="item.src" alt="">
					</div>
					<div class="p-frame">
						<p>{{item.title}}</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			news: undefined,
			currIndex: 0,
			sliderList: [],
			cycleObj: false
		}
	},
	computed:{
		sliderHref: function(){
			if(this.sliderList.length>0){
				return this.sliderList[this.currIndex].href;
			}
		},
		sliderTitle: function(){
			if(this.sliderList.length>0){
				return this.sliderList[this.currIndex].title;
			}
		}
	},
	methods:{
		getTodayData: function(){
			this.$http.get('../../static/data/today.json').then((response)=>{
				if(response.data.code === 200){
					this.news = response.data.data;
					let tempList = this.news.slider;
					tempList.forEach((item,i)=>{
						tempList[i].isOn = i===0;
						tempList[i].style = {'z-index':tempList-i};
					});
					this.sliderList = tempList;
				}else{
					console.log('获得今日焦点失败:');console.log(response.data.data.message)
				}
			},(response)=>{
				console.log('获得今日焦点失败:');console.log(response);
			});
		},
		toggleItem: function(dir){
			this.currIndex += dir;
			if(this.currIndex > this.sliderList.length-1){
				this.currIndex = 0;
			}else if(this.currIndex < 0){
				this.currIndex = this.sliderList.length-1;
			}
			this.sliderList.forEach((item,i)=>{
				let temp = i === this.currIndex; 
				this.$set(this.sliderList[i],'isOn',temp);
			});
		},
		startCycle: function(){
			if(this.cycleObj){return false;}
			this.cycleObj = setInterval(()=>{
				this.toggleItem(1)
			},5000);
		},
		stopCycle: function(){
			clearInterval(this.cycleObj);
			this.cycleObj = false;
		}
	},
	created: function(){
		this.getTodayData();
	},
	mounted: function(){
		setTimeout(this.startCycle,2000);
	}
}
</script>

<style src="../../static/css/pc/pc_today_row.less" lang="less" scoped></style>