<template>
	<div class="recommend">
		<div class="head-line">
			<a href="#" class="head-name"><h3>精彩推荐</h3><span>更多></span></a>
		</div>
		<a href="#" class="head-img">
			<img :src="data.img" alt="">
		</a>
		<div class="item" v-for="item in data.list">
			<i class="arrow"></i>
			<a :href="item.href" :title="item.title">{{item.title}}</a>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			data:{}
		}
	},
	methods:{
		getRecommendData: function(){
			this.$http.get('../../static/data/recommend.json').then((response)=>{
				if(response.data.code === 200){
					this.data = response.data.data;
				}else{
					console.log('获得今日焦点失败:');console.log(response.data.data.message)
				}
			},(response)=>{
				console.log('获得今日焦点失败:');console.log(response);
			});
		}
	},
	created: function(){
		this.getRecommendData();
	}
}
</script>

<style src="../../static/css/pc/pc_recommend_row.less" lang="less" scoped></style>