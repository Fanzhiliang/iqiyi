<template>
	<div class="slider">
		<div class="imgs">
			<ul class="imgs-inner" @touchstart="imgsTouchStart($event)" @touchmove="imgsTouchMove($event)" @touchend="imgsTouchEnd($event)">
				<li class="imgs-item" :style="item.style" v-for="(item,index) in imgs">
					<a href="#" :style="{'background-image':'url('+item.img+')'}">
						<div class="title">{{item.title}}</div>
						<i v-if="item.tag" :class="['tag','qy-video-icon',tags[item.tag]]"></i>
						<span class="update">{{item.update}}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="icons">
			<div class="icons-inner" ref="iconInner" :style="{'margin-left':iconMarginLeft+'px'}" @touchstart="iconsTouchStart($event)" @touchmove="iconsTouchMove($event)" @touchend="iconsTouchEnd($event)">
				<a href="#" class="icon-item" v-for="item in icons">
					<i class="icon-img" :style="{'background-image':'url('+item.img+')'}"></i>
					<p>{{item.title}}</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			currIndex: 1,//最少3张图片
			startImgX: 0,
			oldImgX: 0,
			oldImgLeft: 0,
			oldIconX: 0,
			iconMarginLeft: 0,
			imgs:[
				{
					title:'新说唱：吴亦凡忍痛淘汰引泪目',tag:'self',img:'/static/img/m-slider-1.jpg',update:'2018-08-18期',
					style:{width:'',height:'',left:'',top:'',display:'',transition:'','z-index':''}
				},
				{
					title:'好声音：梁博御用和声惊艳献唱',tag:'exc',img:'/static/img/m-slider-2.jpg',update:'2018-08-17期',
					style:{width:'',height:'',left:'',top:'',display:'',transition:'','z-index':''}
				},
				{
					title:'天盛长歌：陈坤倪妮博弈天下',tag:'',img:'/static/img/m-slider-3.jpg',update:'更新至9集',
					style:{width:'',height:'',left:'',top:'',display:'',transition:'','z-index':''}
				},
				{
					title:'延禧攻略：皇上深陷璎珞套路',tag:'vip',img:'/static/img/m-slider-4.jpg',update:'更新至56集',
					style:{width:'',height:'',left:'',top:'',display:'',transition:'','z-index':''}
				},
				{
					title:'四海鲸骑:妖风骇浪开启佛岛之谜',tag:'vip',img:'/static/img/m-slider-5.jpg',update:'更新至2集',
					style:{width:'',height:'',left:'',top:'',display:'',transition:'','z-index':''}
				}
			],
			icons:[
				{title:'延禧攻略',img:'/static/img/icon-pic-1.png'},
				{title:'免流量追剧',img:'/static/img/icon-pic-2.png'},
				{title:'小说',img:'/static/img/icon-pic-3.png'},
				{title:'电影票',img:'/static/img/icon-pic-4.png'},
				{title:'奇秀直播',img:'/static/img/icon-pic-5.png'},
				{title:'商城',img:'/static/img/icon-pic-6.png'},
				{title:'游戏中心',img:'/static/img/icon-pic-7.png'},
				{title:'会员俱乐部',img:'/static/img/icon-pic-8.png'}
			],
			tags:{// qy-video-icon
				vip:'qy-video-vip',
				exc:'qy-video-exc',
				'1080p':'qy-video-1080',
				self:'qy-video-self',
				live:'qy-video-live',
				pay:'qy-video-pay'
			},
			cycleObj: false
		}
	},
	methods:{
		dirIndex(index,dir){
			index = index + dir;
			if(index < 0){
				index = this.imgs.length - 1;
			}else if(index > this.imgs.length - 1){
				index = 0;
			}
			return index;
		},
		startCycle(){
			if(this.cycleObj){return false;}
			this.cycleObj = setInterval(()=>{
				this.currIndex = this.dirIndex(this.currIndex,1);
			},3000);
		},
		stopCycle(){
			clearInterval(this.cycleObj);
			this.cycleObj = false;
		},
		imgsTouchStart(e){
			this.stopCycle();
			this.startImgX = e.touches[0].pageX;
			this.oldImgX = this.startImgX;
			this.imgs.forEach((item)=>{item.style.transition = 'none';});
		},
		imgsTouchMove(e){
			let windowWidth = this.GLOBAL.getWindowWidth(),
				currImgX = e.touches[0].pageX,
				dist = currImgX - this.oldImgX,
				rate = parseFloat(dist / windowWidth)*100;
			this.oldImgX = currImgX;

			this.imgs.forEach((item)=>{
				let newLeft = (parseFloat(item.style.left)+rate)+'%';
				item.style.left = newLeft;
			});
		},
		imgsTouchEnd(e){
			this.startCycle();
			this.imgs.forEach((item)=>{item.style.transition = '';});
			let windowWidth = this.GLOBAL.getWindowWidth(),
				dist = this.oldImgX - this.startImgX,
				rate = parseFloat(dist / windowWidth);
			if(Math.abs(rate)>=0.5){
				if(rate<0){
					this.currIndex = this.dirIndex(this.currIndex,1);
				}else if(rate > 0){
					this.currIndex = this.dirIndex(this.currIndex,-1);
				}
			}else{
				rate = rate*100;
				this.imgs.forEach((item)=>{
					let newLeft = (parseFloat(item.style.left)-rate)+'%';
					item.style.left = newLeft;
				});
			}
		},
		iconsTouchStart(e){
			this.oldIconX = e.touches[0].pageX;
		},
		iconsTouchMove(e){
			let windowWidth = this.GLOBAL.getWindowWidth(),
				realWidth = parseFloat(this.GLOBAL.getStyle(this.$refs.iconInner,'width')),
				currIconX = e.touches[0].pageX,
				dist = currIconX - this.oldIconX;
			if(this.iconMarginLeft>0 || this.iconMarginLeft<-(realWidth-windowWidth)){
				dist = dist/2;
			}
			this.iconMarginLeft += dist;
			this.oldIconX = currIconX;
		},
		iconsTouchEnd(e){
			let windowWidth = this.GLOBAL.getWindowWidth(),
				realWidth = parseFloat(this.GLOBAL.getStyle(this.$refs.iconInner,'width'));
			if(this.iconMarginLeft > 0){
				this.iconMarginLeft = 0;
			}else if(this.iconMarginLeft < -(realWidth-windowWidth)){
				this.iconMarginLeft = -(realWidth-windowWidth);
			}
		}
	},
	watch:{
		currIndex(newValue,oldValue){
			let dir = newValue - oldValue;
			if(dir = 0){return;}
			let left = this.dirIndex(newValue,-1),
				right = this.dirIndex(newValue,1);
			this.imgs.forEach((item,i)=>{
				switch (i) {
					case newValue:
						this.$set(this.imgs[newValue],'style',{
							width: '91.5%',
							height: '100%',
							top: 0,
							left: '4.5%',
							display:'',
							'z-index':9
						});
						break;
					case left:
						this.$set(this.imgs[left],'style',{
							width: '88%',
							height: '92%',
							top: '4%',
							left: '-86%',
							display:''
						});
						break;
					case right:
						this.$set(this.imgs[right],'style',{
							width: '88%',
							height: '92%',
							top: '4%',
							left: '98%',
							display:''
						});
						break;
					default:
						this.$set(this.imgs[i].style,'display','none');
						break;
				}
			});
		}
	},
	created(){
		this.$set(this,'currIndex',parseInt(this.imgs.length/2));
	},
	mounted(){
		this.startCycle();
	}
}
</script>

<style src="../../static/css/mobile/m_index_slider.less" lang="less" scoped></style>