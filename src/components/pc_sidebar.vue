<template>
	<div class="sidebar" :style="sidebarStyle" @click.stop="">
		<ul>
			<li>
				<a href="#" :class="['integral',integralStyle]" @mouseenter="showInner" @mouseleave="hideInner">
					<div class="integral-inner">
						<div class="inner-item clearfix" v-for="(item,key) in items">
							<div class="left-col"><i :class="['integral-icons',key]"></i></div>
							<div class="middle-col">
								<p>{{item.title}}<i class="credit">+{{item.stepCredit}}分</i></p>
								<span>
									完成{{item.currCredit/item.stepCredit}}/{{item.needCredit/item.stepCredit}}
								</span>
							</div>
							<div class="right-col">
								<i class="integral-icons status-done" v-if="item.currCredit==item.needCredit"></i>
								<a href="#" @click.prevent="addCredit(key)" v-else>{{item.doit}}</a>
							</div>
						</div>
						<a href="#" class="more">去积分主页查看更多</a>
					</div>
					<i class="qy-svgicon qy-svgicon-anchorIntegral"></i>
				</a>
			</li>
			<li>
				<a href="#">
					<span>意见反馈</span>
					<i class="qy-svgicon qy-svgicon-anchorHelp"></i>
				</a>
			</li>
			<li>
				<a href="#" v-show="!isTop" @click.prevent="backTop">
					<span>回到顶部</span>
					<i class="qy-svgicon qy-svgicon-anchorTop"></i>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	props:['body'],
	data(){
		return{
			sidebarStyle:{
				right: 0,
				bottom: '30px',
				opacity: 0
			},
			isTop: true,
			isOn: false,
			items:{
				watch:{
					title:'每观看视频30分钟',
					stepCredit:10,
					currCredit:0,
					needCredit:30,
					doit:'去观看'
				},
				paopao:{
					title:'访问泡泡首页',
					stepCredit:10,
					currCredit:0,
					needCredit:30,
					doit:'去访问'
				},
				sign:{
					title:'签到',
					stepCredit:5,
					currCredit:0,
					needCredit:5,
					doit:'去签到'
				}
			}
		}
	},
	methods:{
		setSidebarStyle:function(){
			this.$set(this.sidebarStyle,'right',this.GLOBAL.getStyle(this.body,'margin-right'));
			this.$set(this.sidebarStyle,'opacity',1);
		},
		showInner:function(){
			this.isOn = true;
		},
		hideInner:function(){
			this.isOn = false;
		},
		addCredit:function(key){
			let step = this.items[key].stepCredit,
				currCredit = this.items[key].currCredit;
			this.$set(this.items[key],'currCredit',step+currCredit);
		},
		backTop:function(){
			let backTopHandler = ()=>{
				let currTop = this.GLOBAL.getScrollTop();
				currTop -= 100;
				if(currTop <= 0){
					currTop = 0;
				}else{
					setTimeout(backTopHandler, 10);
				}
				this.GLOBAL.setScrollTop(currTop);
			};
			backTopHandler();
		}
	},
	computed:{
		integralStyle:function(){
			let isWatched = this.items.watch.currCredit == this.items.watch.needCredit,
				isPaopao = this.items.paopao.currCredit == this.items.paopao.needCredit,
				isSigned = this.items.sign.currCredit == this.items.sign.needCredit;
			return{
				point:!(isWatched && isPaopao && isSigned),
				signed:isSigned,
				sign:!isSigned,
				on: this.isOn
			}
		}
	},
	mounted:function(){
		document.addEventListener('scroll',()=>{
			this.isTop = this.GLOBAL.getScrollTop() == 0;
		});
		window.addEventListener('load',()=>{
			this.setSidebarStyle();
		});
		window.addEventListener('resize',()=>{
			this.setSidebarStyle();
		});
	}
}
</script>

<style src="../../static/css/pc/pc_sidebar.less" lang="less" scoped></style>