<template>
	<div class="wrap">
		<div class="header">
			<div class="top clearfix">
				<router-link to="/" class="logo"></router-link>
				<div class="right-side  clearfix">
					<form action="" class="search">
						<i class="c-glyphicon c-glyphicon-searchfine"></i>
						<input type="text" v-model="keyword" :placeholder="placeholder" @focus="isFocus=true" @blur="isFocus=false" @input="inputChange">
						<i class="c-glyphicon c-glyphicon-close" :style="closeStyle" @click="clearKeyword"></i>
					</form>
					<div class="but">
						<a href="#" @click.prevent="formSubmit" class="submit" v-if="this.keyword.trim().length>0">搜索</a>
						<a href="#" @click.prevent="back" class="cancel" v-else>取消</a>
					</div>
				</div>
			</div>
		</div>
		<div class="main">
			<div class="row-title" v-show="historySearch.length > 0">
				<span>搜索历史</span>
				<span class="clear-history" @click.prevent="clearHistory">清空记录</span>
			</div>
			<ul class="row-value" v-show="historySearch.length > 0">
				<li v-for="item in historySearch"><a href="#">{{item}}</a></li>
			</ul>
			<div class="row-title">
				<span>热门搜索</span>
			</div>
			<ul class="row-value">
				<li v-for="(item,index) in hotSearch">
					<a href="#">
						<span class="num">{{index+1}}</span>{{item}}
					</a>
				</li>
			</ul>
			<ul class="other-search" v-show="keyword.trim().length > 0">
				<li v-for="item in otherSearch">
					<a href="#">{{item}}</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			keyword: '',
			isFocus: false,
			historySearch: [],
			otherSearch: []
		}
	},
	computed:{
		placeholder: function(){
			return this.$store.state.keyword;
		},
		hotSearch(){
			return this.$store.state.hotSearch;
		},
		closeStyle: function(){
			return{
				opacity: this.keyword.trim().length>0&&this.isFocus?1:0
			}
		}
	},
	methods:{
		clearKeyword:function(){
			this.keyword = '';
		},
		back:function(){
			window.history.go(-1);
		},
		getHistorySearch: function(){
			let tempObj = this.GLOBAL.getData('historySearch');
			if(tempObj && Object.prototype.toString.call(tempObj) === '[object Array]'){
				this.historySearch = tempObj;
			}
		},
		formSubmit: function(){
			if(this.keyword.trim().length > 0){
				this.$http.get('../../static/data/success.json').then((response)=>{
					if(response.data.code === 200){
						this.historySearch.unshift(this.keyword);
						this.historySearch = this.GLOBAL.arrayDeleteRepeat(this.historySearch);
						this.historySearch = this.historySearch.slice(0,3);
						this.GLOBAL.setData('historySearch',this.historySearch);
						this.keyword = '';
					}else{
						console.log(response.data.data.message)
					}
				},(response)=>{
					console.log('fail:');console.log(response);
				});	
			}
		},
		clearHistory: function(){
			this.historySearch = [];
			this.GLOBAL.removeData('historySearch');
		},
		inputChange: function(){
			if(this.keyword.trim().length > 0){
				this.$http.get('../../static/data/otherSearch.json').then((response)=>{//这里应该用post
					if(response.data.code === 200){
						this.otherSearch = response.data.data.list;
					}else{
						console.log('获得类似搜索信息失败:');console.log(response.data.data.message)
					}
				},(response)=>{
					console.log('获得类似搜索信息失败:');console.log(response);
				});
			}
		}
	},
	created:function(){
		this.getHistorySearch();
	}
}
</script>

<style src="../../static/css/mobile/m_search.less" lang="less" scoped></style>