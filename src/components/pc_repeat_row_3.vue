<template>
	<div class="repeat-row-3" :id="id" v-if="!!data">
		<div class="row-frame">
			<div class="row-inner clearfix">
				<div class="head-line">
					<span v-if="that.icon" :class="['qy-mod-icon',that.icon]"></span>
					<a href="#" class="head-name"><h3>{{that.name}}</h3><span>更多></span></a>
					<span class="examples">
						<template v-for="item in data.examples">
							<a :href="item.href">{{item.title}}</a><span>/</span>
						</template>
					</span>
				</div>
				<div class="row-items">
					<div class="item" v-for="(item,index) in data.list" @mouseenter="hoverShow($event,index)" @mouseleave="hoverHide(index)">
						<a :href="item.href" class="item-up" :title="item.title">
							<img :src="item.img" alt="">
							<a :href="item.href" :class="['tag','qy-video-icon',tags[item.tag]]"></a>
							<a :href="item.href" class="update" v-if="item.update">{{item.update}}</a>
						</a>
						<div class="item-down">
							<p class="title" :title="item.title">
								<a :href="item.href">{{item.title}}</a>
								<span v-if="id==='movie'">{{item.score}}</span>
							</p>
							<p class="info" v-if="id!=='tvshow'">{{item.infoS}}</p>
						</div>
					</div>
				</div>
				<div class="rank" v-if="that.rankName">
					<div class="head-line">
						<a href="#" class="head-name"><h3>{{that.rankName}}</h3><span>更多></span></a>
					</div>
					<div class="rank-body">
						<div class="rank-item" v-for="(item,index) in data.rank">
							<span>{{index+1}}</span>
							<a :href="item.href">{{item.title}}</a>
							<i :class="['qy-common-icon',getIconClass(item.dir)]"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="item-hovers" v-if="that.rankName">
			<div class="item-hover" :ref="id+'-item'" v-for="(item,index) in data.list" :style="list[index].style" :class="{show:list[index].isShow}" @mouseenter="stay(index)" @mouseleave="hoverHide(index)">
				<a :href="item.href" class="cover">
					<img :src="item.cover" alt="">
					<i class="qy-xl-play"></i>
				</a>
				<a href="#" class="text-link">
					<p class="title">
						<a :href="item.href">{{item.title}}</a>
						<span>{{item.score}}</span>
					</p>
					<p class="descript">
						<span class="text-title">标签：</span>
						<span class="text" v-for="d in item.des">{{d}}</span>
						<span class="time">{{item.time}}</span>
					</p>
					<template v-if="id==='movie'">
						<p class="names">
							<span class="names-title">主演：</span>
							<template v-for="a in item.actors">
								<span class="name">{{a}}</span><span class="separate">/</span>
							</template>
						</p>
						<p class="info">{{item.infoB}}</p>
					</template>
					<template v-if="id==='tv'">
						<p class="about">
							{{item.update}}；{{item.about}}
						</p>
						<p class="names">
							<span class="names-title">导演：</span>
							<template v-for="a in item.directors">
								<span class="name">{{a}}</span><span class="separate">/</span>
							</template>
						</p>
						<p class="names">
							<span class="names-title">主演：</span>
							<template v-for="a in item.actors">
								<span class="name">{{a}}</span><span class="separate">/</span>
							</template>
						</p>
						<p class="highlight">
							<span class="highlight-title">亮点：</span>
							<span class="highlight-value">{{item.infoB}}</span>
						</p>
					</template>
						
				</a>
				<div :class="['assess',{tv:id==='tv'}]">
					<div class="score">
						<div class="set-score" @mousemove="setScore($event,index)">
							<div class="score-inner" :style="{width:(list[index].score*8+(parseInt(list[index].score/2))*9)+'px'}" :ref="id+'-score'"></div>
						</div>
						<span class="score-text" v-if="list[index].score>0">{{list[index].score}}分</span>
						<span class="no-score" v-else>未评分</span>
					</div>
					<a href="#" class="attention" v-if="id==='movie'">收藏</a>
					<a href="#" class="attention" v-else>追剧</a>
				</div>
				<div class="goodOrbad" v-if="id==='movie'">
					<div class="col">
						<i class="qy-svgicon qy-svgicon-praise-hollow"></i>
						<i class="qy-svgicon qy-svgicon-praise"></i>
						<p>顶{{item.good}}</p>
					</div>
					<span class="separate"></span>
					<div class="col">
						<i class="qy-svgicon qy-svgicon-stampe-hollow"></i>
						<i class="qy-svgicon qy-svgicon-stampe"></i>
						<p>踩{{item.bad}}</p>
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
				movie:{
					icon: 'movieshow',
					name: '电影',
					rankName: '电影榜'
				},
				tv:{
					icon: 'tvshow',
					name: '电视剧',
					rankName: '电视剧榜'
				},
				record:{
					icon: 'recordshow',
					name: '纪录片'
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
			list:[],
			waitTimeOut:null,
			showTimeOut:null,
			ableHide:true
		}
	},
	computed:{
		that: function(){
			return this.thats[this.id];
		}
	},
	methods:{
		setScore: function(e,index){
			let target = e.currentTarget,
				posX = e.clientX-this.GLOBAL.getOffset(target).left,
				score = this.$refs[this.id+'-score'][index],
				scoreStep = parseFloat(parseFloat(this.GLOBAL.getStyle(target,'width')))/10,
				result = Math.ceil(posX/scoreStep);
			if(result<0){
				result = 0;
			}else if(result>10){
				result = 10;
			}
			this.$set(this.list[index],'score',result);
		},
		hoverShow: function(e,index){
			let target = e.currentTarget;
			clearTimeout(this.waitTimeOut);
			this.waitTimeOut = setTimeout(()=>{
				this.$set(this.list[index],'style',{
					top: target.offsetTop+'px',
					left: target.offsetLeft+'px'
				});
				this.showTimeOut = setTimeout(()=>{
					this.$set(this.list[index],'isShow',true);
				},500);
			},500);
		},
		hoverHide: function(index){
			setTimeout(()=>{
				if(!this.ableHide){
					return false;
				}
				this.$set(this.list[index],'style',{});
				this.$set(this.list[index],'isShow',false);
				clearTimeout(this.showTimeOut);
				clearTimeout(this.waitTimeOut);
			},100);
		},
		stay: function(){
			this.ableHide = false;
			setTimeout(()=>{
				this.ableHide = true;
			},150);
		},
		getIconClass: function(dir){
			if(dir==0){
				return 'qy-common-rankUnchg';
			}else if(dir<0){
				return 'qy-common-rankDown';
			}else{
				return 'qy-common-rankUp';
			}
		}
	},
	created: function(){
		this.$http.get('../../static/data/'+this.id+'.json').then((response)=>{
			if(response.data.code === 200){
				this.data = response.data.data;
				this.data.list.forEach((item)=>{
					this.list.push({
						score:0,
						style:{},
						isShow: false
					});
				});
			}else{
				console.log('获得'+this.that.name+'信息失败:');console.log(response.data.data.message)
			}
		},(response)=>{
			console.log('获得'+this.that.name+'信息失败:');console.log(response);
		});
	}
}
</script>

<style src="../../static/css/pc/pc_repeat_row_3.less" lang="less" scoped></style>