<template>
	<div class="repeat-row" :id="id" v-if="list.length > 0">
		<a href="#" class="headline">
			<i :class="['c-channelicon',that.icon]"></i>
			<span>{{that.name}}</span>
		</a>
		<div class="videos">
			<v-mVideo2 v-for="(item,index) in showList" :data="item" :id="id" :key="index"/>
		</div>
		<div class="bottom">
			<a href="#">
				{{that.more||'更多资讯'}}<i class="c-glyphicon c-glyphicon-more"></i>
			</a>
			<a href="#" @click.prevent="isToggle = !isToggle" v-if="that.ableToggle">
				换一批<i class="c-glyphicon c-glyphicon-refresh"></i>
			</a>
		</div>
	</div>
</template>

<script>
export default{
	props:['id'],
	data(){
		return{
			thats:{
				tv:{
					icon:'c-channel-dianshiju',
					name:'电视剧',
					length: 6,
					ableToggle: true
				},
				movie:{
					icon:'c-channel-dianying',
					name:'电影',
					length: 6,
					ableToggle: true
				},
				donman:{
					icon:'c-channel-dongman',
					name:'动漫',
					length: 6,
					ableToggle: false
				},
				qixiu:{
					icon:'c-channel-qixiu',
					name:'奇秀直播',
					length: 3,
					ableToggle: false,
					more:'更多美女直播'
				},
				record:{
					icon:'c-channel-jilupian',
					name:'纪录片',
					length: 6,
					ableToggle: false,
					more:'更多纪录片'
				}
			},
			list:[],
			showLength: 6,
			isToggle: false
		}
	},
	computed:{
		that(){return this.thats[this.id];},
		showList(){
			return this.isToggle?this.list.slice(this.that.length,this.that.length*2):this.list.slice(0,this.that.length);
		}
	},
	created(){
		this.$http.get('../../static/data/'+this.id+'.json').then((response)=>{
	        if(response.data.code === 200){
	        	this.list = response.data.data.list;
	        }else{
	          console.log('获得'+this.id+'信息失败:');console.log(response.data.data.message);
	        }
      	},(response)=>{console.log('获得'+this.id+'信息失败:');console.log(response);});
	}
}
</script>

<style src="../../static/css/mobile/m_repeat_row.less" lang="less" scoped></style>