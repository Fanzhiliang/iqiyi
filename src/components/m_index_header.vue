<template>
	<div class="header">
		<v-mHeaderTop/>
		<v-mHeaderNav :onIndex="0"/>
		<div :class="['search-row',{fade:isTop,'fade-re':!isTop}]">
			<div class="search-inner">
				<form action="">
					<input type="hidden" v-model="keyword">
					<router-link to="search" class="keyword">{{keyword}}</router-link>
					<router-link to="search" class="submit">
						<i class="c-glyphicon c-glyphicon-searchfine"></i>
					</router-link>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			isTop: true
		}
	},
	computed:{
		keyword(){
			return this.$store.state.keyword;
		}
	},
	created:function(){
		
	},
	mounted:function(){
		document.addEventListener('scroll',()=>{
			this.isTop = this.GLOBAL.getScrollTop() == 0;
		});
	}
}
</script>

<style src="../../static/css/mobile/m_index_header.less" lang="less" scoped></style>