<template>
	<div class="wrap">
		<div class="header">
			<v-mHeaderTop/>
			<v-mHeaderNav/>
		</div>
		<div class="main">
			<a href="#" class="user-row">
				<div class="user-head">
					<img :src="userHeadImg" alt="">
				</div>
				<p class="name">{{user.name}}</p>
			</a>
			<div class="kaitong-row">
				<div class="kaitong-inner" ref="inner0" @touchstart="startDrag($event,0)" @touchmove="moveDrag($event,0)" @touchend="stopDrag($event,0)" :style="innerParams[0].style">
					<a href="#" class="kaitong-item vip">
						<i class="c-viptennis-icon"></i>
						<div class="text">
							<p class="u">VIP</p>
							<p class="d">新用户首月仅6元</p>
						</div>
						<div class="btn">开通</div>
					</a>
					<a href="#" class="kaitong-item tiyu">
						<i class="c-tiyutennis-icon"></i>
						<div class="text">
							<p class="u">体育会员</p>
							<p class="d">看精彩赛事直播</p>
						</div>
						<div class="btn">开通</div>
					</a>
				</div>
			</div>
			<div class="history-row">
				<div class="link-outer">
					<a href="#" class="headline clearfix">
						<span class="c-myicon c-myicon-bofangjilu icon"></span>
						<span class="title">播放记录</span>
						<i class="c-glyphicon c-glyphicon-arrowRight more"></i>
						<span class="info">记录看过的精彩</span>
					</a>
					<div class="video-list">
						<div class="video-inner" ref="inner1" @touchstart="startDrag($event,1)" @touchmove="moveDrag($event,1)" @touchend="stopDrag($event,1)" :style="innerParams[1].style">
							<div class="video" v-for="item in historyList">
								<a href="#" class="cover" :style="{'background-image':'url('+item.img+')'}">
									<span>{{item.length}}</span>
								</a>
								<a href="#" class="name">{{item.name}}</a>
							</div>
						</div>
					</div>
				</div>
				<div class="link-outer">
					<a href="#" class="headline clearfix">
						<span class="c-myicon c-myicon-shoucang icon"></span>
						<span class="title">收藏</span>
						<i class="c-glyphicon c-glyphicon-arrowRight more"></i>
					</a>
				</div>
				<div class="link-outer">
					<a href="#" class="headline clearfix">
						<span class="c-myicon c-myicon-dingyue icon"></span>
						<span class="title">关注</span>
						<i class="c-glyphicon c-glyphicon-arrowRight more"></i>
						<span class="info">发现未知的精彩</span>
					</a>
				</div>
			</div>
			<div class="link-row" v-for="items in links">
				<div class="link-outer" v-for="item in items">
					<a :href="item.href" class="headline clearfix">
						<span :class="item.icon+' icon'"></span>
						<span class="title">{{item.name}}</span>
						<i class="c-glyphicon c-glyphicon-arrowRight more"></i>
					</a>
				</div>
			</div>
		</div>
		<v-mFooter/>
	</div>
</template>

<script>
export default{
	data(){
		return{
			links:[
				[
					{name:'我的账号',icon:'c-myicon c-myicon-wodezhanghao',href:'#'},
					{name:'免流量追剧',icon:'c-myicon c-myicon-mianliuliang',href:'#'},
					{name:'安全中心',icon:'c-myicon c-myicon-anquanzhongxin',href:'#'},
					{name:'用户隐私保护声明',icon:'c-myicon c-myicon-statement',href:'#'}
				],
				[
					{name:'关于我们',icon:'c-myicon c-myicon-guanyuwomen',href:'#'}
				]
			],
			innerParams:[
				{
					oldPos: 0,
					style:{'margin-left': 0}
				},
				{
					oldPos: 0,
					style:{'margin-left': 0}
				}
			]
		}
	},
	computed:{
		user(){
			return this.$store.state.user;
		},
		historyList(){
			let result = [];
			for(let i=0;i<this.$store.state.historyData.list.length;i++){
				result = result.concat(this.$store.state.historyData.list[i].list);
			}
			return result;
		},
		userHeadImg: function(){
			if(this.user.img && this.user.img.length>0){
				return this.user.img;
			}else if(this.user.sex == 'male' || this.user.sex == 'female'){
				return this.user.sex == 'male'?'/static/img/male-130.png':'/static/img/female-130.png';
			}else{
				return '';
			}
		}
	},
	methods:{
		startDrag: function(e,i){
			this.$set(this.innerParams[i],'oldPos',e.touches[0].pageX);
		},
		moveDrag: function(e,i){
			let newPos = e.touches[0].pageX,
				oldPos = this.innerParams[i].oldPos,
				currMarginLeft = parseFloat(this.innerParams[i].style['margin-left']),
				dist = newPos-oldPos,
				parentWidth = parseFloat(this.GLOBAL.getStyle(this.$refs['inner'+i].parentNode,'width')),
				innerWidth = parseFloat(this.GLOBAL.getStyle(this.$refs['inner'+i],'width')),
				innerLeft = parseFloat(this.GLOBAL.getStyle(this.$refs['inner'+i],'padding-left')),
				realWidth = innerWidth + innerLeft;
			if(currMarginLeft > 0 || currMarginLeft < -(realWidth-parentWidth)){dist = dist/2;}
			let	newMarginLeft = currMarginLeft + dist;
			this.$set(this.innerParams[i],'oldPos',newPos);
			this.$set(this.innerParams[i].style,'margin-left',newMarginLeft+'px');
		},
		stopDrag: function(e,i){
			let marginLeft = parseFloat(this.innerParams[i].style['margin-left']),
				parentWidth = parseFloat(this.GLOBAL.getStyle(this.$refs['inner'+i].parentNode,'width')),
				innerWidth = parseFloat(this.GLOBAL.getStyle(this.$refs['inner'+i],'width')),
				innerLeft = parseFloat(this.GLOBAL.getStyle(this.$refs['inner'+i],'padding-left')),
				realWidth = innerWidth + innerLeft;
			if(marginLeft > 0){
				this.$set(this.innerParams[i].style,'margin-left',0);
			}else if(marginLeft < -(realWidth-parentWidth)){
				this.$set(this.innerParams[i].style,'margin-left',-(realWidth-parentWidth)+'px');
			}
		}
	},
	mounted(){
		
	}
}
</script>

<style src="../../static/css/mobile/m_home.less" lang="less" scoped></style>