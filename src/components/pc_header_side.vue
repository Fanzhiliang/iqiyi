<template>
	<div class="header-side clearfix">
		<a href="#" :class="['side-item',{islogin:!!user}]">
			<template v-if="!!user">
				<a href="#" class="user-img">
					<img :src="userHeadImg" alt="">
				</a>
				<div class="item-inner user">
					<div class="inner-up">
						<div class="user-row clearfix">
							<a href="#" class="head-img">
								<img :src="userHeadImg" alt="">
							</a>
							<div class="right-col">
								<div class="info clearfix">
									<a href="#" class="name">{{user.name}}</a>
									<a href="#" class="qy-vip-rank qy-rank-vip qyrv-gray0"></a>
									<i class="qy-vip-rank qy-rank-tennis qyrt-gray"></i>
									<a href="" class="exit" @click.prevent="exit">退出</a>
								</div>
								<a href="#" class="point">
									<i class="point-num"></i><span class="num">{{user.point}}</span>
								</a>
							</div>
						</div>
						<div class="vip-row clearfix">
							<div class="vip-btn">
								<div class="vip-name">
									<span>VIP会员</span><a href="#">开通</a>
								</div>
								<div class="vip-info">新用户首月仅6元</div>
							</div>
							<div class="vip-btn">
								<div class="vip-name">
									<span>网球会员</span><a href="#">开通</a>
								</div>
								<div class="vip-info">精彩赛事直播随意看</div>
							</div>
						</div>
					</div>
					<div class="inner-down">
						<div class="goto-center">
							<a href="#">进入个人中心></a>
						</div>
						<div class="features">
							<a href="#" class="features-item">
								<i class="size55-icons subscribe"></i>
								<p>我的订阅</p>
							</a>
							<a href="#" class="features-item">
								<i class="size55-icons collection"></i>
								<p>我的订阅</p>
							</a>
							<a href="#" class="features-item">
								<i class="size55-icons saft-center"></i>
								<p>我的订阅</p>
							</a>
							<a href="#" class="features-item">
								<i class="size55-icons help-center"></i>
								<p>我的订阅</p>
							</a>
						</div>
					</div>
				</div>
			</template>
			<template v-else>
				<div class="up">
					<i class="qy-svgicon qy-svgicon-sign"></i>
				</div>
				<div class="down">
					<a href="#" class="login" @click.prevent="getUserData">登录</a>
					<span class="separate"></span>
					<a href="#" class="reg" @click.prevent="getUserData">注册</a>
				</div>
			</template>
		</a>
		<a href="#" class="side-item" @mouseenter="vipEnter" @mouseleave="vipLeave">
			<div class="up">
				<i :class="['qy-vip-rank','qy-rank-vip',vipStyle]"></i>
			</div>
			<div class="down"><a href="#" class="vip-link">开通</a></div>
			<div class="item-inner">
				<a href="#" class="item-vip-link">
					<i class="qy-head-side-icon side-icon-vip-g"></i>了解VIP会员专享特权
				</a>
				<a href="#" class="item-vip-link">
					<i class="qy-head-side-icon side-icon-gift-g"></i>做任务，领奖励
				</a>
				<a href="#" class="item-vip-link">
					<i class="qy-head-side-icon side-icon-welfare-g"></i>领取会员专属福利
				</a>
				<div class="btn-wrap">
					<a href="#" class="btn gold" v-if="!!user">立即体验</a>
					<a href="#" class="btn gold" v-else @click.prevent="getUserData">登录</a>
				</div>
			</div>
		</a>
		<a href="#" class="side-item">
			<div class="up">
				<i class="qy-svgicon qy-svgicon-upload"></i>
			</div>
			<div class="down"><a href="#" class="other-link">上传</a></div>
			<div class="item-inner">
				<a href="#" class="item-upload-link">
					<i class="qy-head-side-icon side-icon-videp"></i>上传视频
				</a>
				<a href="#" class="item-upload-link">
					<i class="qy-head-side-icon side-icon-mkvideo"></i>制作视频
				</a>
				<a href="#" class="item-upload-link">
					<i class="qy-head-side-icon side-icon-myspace"></i>我的空间
				</a>
				<a href="#" class="item-upload-link">
					<i class="qy-head-side-icon side-icon-manage"></i>视频管理
				</a>
				<a href="#" class="item-upload-link">
					<i class="qy-head-side-icon side-icon-data"></i>播放数据
				</a>
				<a href="#" class="item-upload-link">
					<i class="qy-head-side-icon side-icon-profit"></i>申请分成
				</a>
			</div>
		</a>
		<a href="#" class="side-item">
			<i class="vip-ad"></i>
			<div class="up">
				<i class="qy-svgicon qy-svgicon-pca-dwn"></i>
			</div>
			<div class="down"><a href="#" class="other-link">客户端</a></div>
			<div class="item-inner">
				<div class="item-client-link">
					<i class="qy-head-side-icon side-icon-noad"></i>签到免广告，送VIP
				</div>
				<div class="item-client-link">
					<i class="qy-head-side-icon side-icon-rocket"></i>5倍流畅度，不卡顿
				</div>
				<div class="item-client-link">
					<i class="qy-head-side-icon side-icon-1080p"></i>1080P免费畅享
				</div>
				<div class="item-client-link">
					<i class="qy-head-side-icon side-icon-vip"></i>搜不到视频，送VIP
				</div>
				<div class="btn-wrap">
					<a href="#" class="btn green">立即体验</a>
				</div>
			</div>
		</a>
		<a href="#" class="side-item">
			<div class="up">
				<i class="qy-svgicon qy-svgicon-info"></i>
			</div>
			<div class="down"><a href="#" class="other-link">消息</a></div>
			<div class="item-inner message">
				<div class="message-header">
					<span v-for="(m,index) in messages" :class="{on:m.isOn}" @mouseenter="headerEnter(index)">
						{{m.name}}
					</span>
				</div>
				<div class="message-body">
					<div class="null-tip" v-if="!!user">
						<i class="qy-head-side-icon side-icon-nonotice"></i>
						<p>暂时还没有新的消息哦~</p>
					</div>
					<div class="null-tip" v-else>
						<i class="qy-head-side-icon side-icon-nologin"></i>
						<p><a href="#" @click.prevent="getUserData">登录</a>后才能查看完整的通知列表哦~</p>
					</div>
				</div>
			</div>
		</a>
		<a href="#" class="side-item">
			<div class="up">
				<i class="qy-svgicon qy-svgicon-record"></i>
			</div>
			<div class="down"><a href="#" class="other-link">看过</a></div>
			<div class="item-inner history">
				<span class="isFilter" @click="toggleFilter">
					<i :class="['qy-head-side-icon','side-icon-radio',{selected:isFilter}]"></i>过滤短视频
				</span>
				<div class="history-list" v-if="historyLength > 0">
					<template v-for="(item,index) in historyData.list">
						<div class="list-head" v-if="!(isAllShort(item.list)&&isFilter)" v-show="item.list.length>0">
							<span>{{item.time}}</span>
						</div>
						<a class="list-item" v-for="(item2,index2) in item.list" v-if="!(item2.isShort&&isFilter)">
							<i class="qy-svgicon qy-svgicon-PC-12"></i>
							<span class="name" :title="item2.name">{{item2.name}}</span>
							<span class="surplus">{{item2.surplus==0?'已看完':'剩余'+item2.surplus+'%'}}</span>
							<div class="hover-ctrl">
								<a href="#" v-if="item2.surplus == 0">重播</a>
								<a href="#" v-else>续播</a>
								<template v-if="item2.hasSequel">
									<span class="separate"></span><a href="#">下一集</a>
								</template>
								<i class="qy-head-side-icon side-icon-delete" title="删除" @click="deleteItem(index,index2)"></i>
							</div>
						</a>
					</template>
				</div>
				<div class="no-history" v-else>
					<i class="qy-head-side-icon side-icon-novideo"></i>
					<p>暂无长视频（电视剧、纪录片动漫、 综艺、电影）播放记录哦~</p>
				</div>
				<div class="btn-wrap">
					<a href="#" class="btn green" v-if="!!user">查看更多</a>
					<a href="#" class="btn green" v-else @click.prevent="getUserData">登录查看更多</a>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
export default{
	data(){
		return{
			isHoverVip: false,
			messages:[
				{name:'更新提醒',isOn:true},{name:'与我相关',isOn:false},{name:'系统通知',isOn:false}
			],
			isFilter: false
		}
	},
	computed: {
		vipStyle: function(){
			let level = this.user && typeof this.user.level === 'number'?this.user.level:0;
			return this.isHoverVip?'qyrv'+level:'qyrv-gray'+level;
		},
		userHeadImg: function(){
			if(this.user.img && this.user.img.length>0){
				return this.user.img;
			}else if(this.user.sex == 'male' || this.user.sex == 'female'){
				return this.user.sex == 'male'?'/static/img/male-130.png':'/static/img/female-130.png';
			}else{
				return '';
			}
		},
		historyData: function(){
			return this.$store.state.historyData;
		},
		historyLength: function(){
			let result = [];
			for(let i=0;i<this.$store.state.historyData.list.length;i++){
				result = result.concat(this.$store.state.historyData.list[i].list);
			}
			return result.length;
		},
		user(){
			return this.$store.state.user;
		}
	},
	methods:{
		vipEnter: function(){
			this.isHoverVip = true;
		},
		vipLeave: function(){
			this.isHoverVip = false;
		},
		headerEnter: function(index){
			this.messages.forEach((m,i)=>{
				if(i == index){
					this.$set(this.messages[i],'isOn',true);
				}else{
					this.$set(this.messages[i],'isOn',false);
				}
			});
		},
		toggleFilter: function(){
			this.isFilter = !this.isFilter;
		},
		getUserData: function(){
			this.$store.commit('getUserData',this);
		},
		exit: function(){
			this.$store.commit('removeUserData',this);
		},
		isAllShort: function(list){
			let result = 0;
			list.forEach((item)=>{
				if(!item.isShort){
					return false;
				}else{
					++result;
				}
			});
			return result === list.length;
		},
		deleteItem: function(index,index2){
			this.$store.commit('deleteHistoryData',index,index2);
			console.log(this.$store.state.historyData.list.length)
		}
	},
	created:function(){
		
	}
}
</script>

<style src="../../static/css/pc/pc_header_side.less" lang="less" scoped></style>