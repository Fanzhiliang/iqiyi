<template>
	<div class="repeat-row-1" :id="id" v-if="!!data">
		<div class="row-inner clearfix">
			<div class="head-line">
				<span v-if="that.icon" :class="['qy-mod-icon',that.icon]"></span>
				<a href="#" class="head-name"><h3>{{that.name}}</h3><span>更多></span></a>
				<span class="examples">
					<template v-if="data.icons">
						<template v-for="item in data.icons">
							<a :href="item.href">
								<img :src="item.img" alt="">
							</a>
						</template>
						<span class="icon-separate">/</span>
					</template>
					<template v-if="data.examples" v-for="item in data.examples">
						<a :href="item.href">{{item.title}}</a><span>/</span>
					</template>
				</span>
			</div>
			<div class="row-slider" @mouseenter="stopCycle" @mouseleave="startCycle">
				<div class="slider-items clearfix">
					<a :href="item.href" :style="item.style" :class="['link',{on:item.isOn}]" v-for="item in sliderList">
						<img :src="item.img" alt="">
					</a>
					<div class="toggle-group">
						<i class="qy-common-icon qy-common-pageleft32 prev" @click="toggleItem(-1)"></i>
						<i class="qy-common-icon qy-common-pageright32 next" @click="toggleItem(1)"></i>
						<i class="qy-video-icon qy-video-today today" v-if="id === 'yuleshow'"></i>
						<a :href="item.href" :class="['tag','qy-video-icon',tags[item.tag]]" v-for="(item,index) in sliderList" v-show="index == currIndex"></a>
						<a :href="sliderHref" v-if="sliderTime" class="time">{{sliderTime}}</a>
					</div>
				</div>
				<div class="slider-down">
					<a :href="sliderHref" class="title">{{sliderTitle}}</a>
					<p class="info">{{sliderInfo}}</p>
				</div>
			</div>
			<div class="row-videos clearfix">
				<div class="video" v-for="item in data.list">
					<a :href="item.href" class="video-up" :title="item.title">
						<img :src="item.img" alt="">
						<a v-if="item.tag" :href="item.href" :class="['tag','qy-video-icon',tags[item.tag]]"></a>
						<a v-if="item.time" :href="item.href" class="time">{{item.time}}</a>
					</a>
					<div class="video-down">
						<p class="title" :title="item.title"><a :href="item.href">{{item.title}}</a></p>
						<p class="info" v-if="item.info">{{item.info}}</p>
					</div>
				</div>
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
				zonyshow:{
					icon: 'zonyshow',
					name: '综艺'
				},
				yuleshow:{
					icon: 'yuleshow',
					name: '娱乐'
				},
				domanshow:{
					icon: 'domanshow',
					name: '动漫'
				},
				childshow:{
					icon: 'childshow',
					name: '儿童'
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
			data:{},
			currIndex: 0,
			sliderList:[],
			cycleObj: false
		}
	},
	computed:{
		that: function(){
			return this.thats[this.id];
		},
		sliderTitle: function(){
			if(this.sliderList.length == 0){return false;}
			return this.sliderList[this.currIndex].title;
		},
		sliderInfo: function(){
			if(this.sliderList.length == 0){return false;}
			return this.sliderList[this.currIndex].info;
		},
		sliderHref: function(){
			if(this.sliderList.length == 0){return false;}
			return this.sliderList[this.currIndex].href;
		},
		sliderTime: function(){
			if(this.sliderList.length == 0){return false;}
			return this.sliderList[this.currIndex].time;
		}
	},
	methods:{
		toggleItem: function(dir){
			this.currIndex += dir;
			if(this.currIndex > this.sliderList.length-1){
				this.currIndex = 0;
			}else if(this.currIndex < 0){
				this.currIndex = this.sliderList.length-1;
			}
			this.sliderList.forEach((item,i)=>{
				var temp = i===this.currIndex;
				this.$set(this.sliderList[i],'isOn',temp);
			});
		},
		startCycle: function(){
			if(this.cycleObj){return false;}
			this.cycleObj = setInterval(()=>{
				this.toggleItem(1);
			},5000);
		},
		stopCycle: function(){
			clearInterval(this.cycleObj);
			this.cycleObj = false;
		}
	},
	created: function(){
		this.$http.get('../../static/data/'+this.id+'.json').then((response)=>{
			if(response.data.code === 200){
				this.data = response.data.data;
				let tempList = this.data.slider;
				tempList.forEach((item,i)=>{
					tempList[i].isOn = i===0;
					tempList[i].style = {'z-index':tempList.length-i}
				});
				this.sliderList = tempList;
			}else{
				console.log('获得'+this.that.name+'信息失败:');console.log(response.data.data.message)
			}
		},(response)=>{
			console.log('获得'+this.that.name+'信息失败:');console.log(response);
		});
	},
	mounted: function(){
		setTimeout(this.startCycle, 2000);
	}
}
</script>

<style src="../../static/css/pc/pc_repeat_row_1.less" lang="less" scoped></style>