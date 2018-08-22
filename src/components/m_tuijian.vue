<template>
	<div class="tuijian" v-if="tvList.length>0">
		<v-mVideo1 v-for="(item,index) in tvList" :data="item" :key="index"/>
	</div>
</template>

<script>
export default{
	data(){
		return{
			tvList:[]
		}
	},
	created(){
		this.$http.get('../../static/data/tv.json').then((response)=>{
	        if(response.data.code === 200){
	        	let temp = response.data.data.list;
	        	temp.splice(4,temp.length-4)
	          	this.tvList = temp;
	        }else{
	          console.log('获得推荐信息失败:');console.log(response.data.data.message)
	        }
      	},(response)=>{console.log('获得推荐信息失败:');console.log(response);});
	}
}
</script>

<style>
.tuijian{
	width: 100%;
	overflow: hidden;
	margin-top: 0.3rem;
	border-bottom: 1px solid rgb(240, 240, 240);
}
</style>