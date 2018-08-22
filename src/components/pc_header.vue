<template>
	<div class="header" :class="{fade:!isTop}">
		<div class="header-inner clearfix">
			<a href="#" class="header-logo">
				<img src="/static/img/sprite-headLogo-index.png" alt="">
			</a>

			<div class="header-search">
				<form action="" @submit.prevent="formSubmit">
					<div class="serach-text">
						<input type="text" name="keyword" id="keyword" autocomplete="off" @click.stop="listShow" :placeholder="placeholder" v-model="keyword" :style="inputStyle" @input="inputChange">
						<a href="#" class="camera">
							<i class="qy-svgicon qy-svgicon-camera"></i>
						</a>
					</div>
					<button type="submit">
						<i class="qy-svgicon qy-svgicon-search"></i>
						<span>搜全网</span>
					</button>
					<transition name="fade">
						<div class="datalist" v-show="isShowList">
							<template v-if="otherSearch.length == 0">
								<div class="list-head clearfix" v-if="historySearch.length > 0">
									<span class="title">历史搜索</span>
									<a href="#" class="clear" @click.prevent="clearHistory">
										<i class="qy-svgicon qy-svgicon-trashcan"></i>
										清除记录
									</a>
								</div>
								<a href="#" class="list-item" v-for="item in historySearch">
									{{item}}
								</a>
								<div class="list-head">
									<span class="title">热门搜索</span>
								</div>
								<a href="#" class="list-item" v-for="(item,index) in hotSearch">
									<span class="num">{{index+1}}</span>
									{{item}}
								</a>
							</template>
							<template v-else>
								<a href="#" class="list-item" v-for="item in otherSearch">
									{{item}}
								</a>
							</template>
						</div>
					</transition>
				</form>
			</div>

			<v-pcHeaderSide @exit="exit"/>
		</div>
	</div>
</template>

<script>
export default{
	props: ['isTop'],
	data(){
		return{
			historySearch: [],
			otherSearch: [],
			isShowList : false,
			keyword: ''
		}
	},
	computed: {
		inputStyle: function(){
			return this.keyword.trim().length>0?{
				color: 'rgb(204, 204, 204)'
			}:{
				color: '#999'
			};
		},
		placeholder(){
			return this.$store.state.hotSearch[0];
		},
		hotSearch(){
			return this.$store.state.hotSearch;
		}
	},
	methods:{
		getHistorySearch: function(){
			let tempObj = this.GLOBAL.getData('historySearch');
			if(tempObj && Object.prototype.toString.call(tempObj) === '[object Array]'){
				this.historySearch = tempObj;
			}
		},
		listShow: function(){
			this.isShowList = true;
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
				this.$http.get('../../static/data/otherSearch.json').then((response)=>{
					if(response.data.code === 200){
						this.otherSearch = response.data.data.list;
					}else{
						console.log('获得类似搜索信息失败:');console.log(response.data.data.message)
					}
				},(response)=>{
					console.log('获得类似搜索信息失败:');console.log(response);
				});
			}
		},
		exit: function(){
			this.$emit('exit');
		}
	},
	watch:{
		keyword: function(newValue){
			if(newValue.trim().length == 0){
				this.otherSearch = [];
			}
		}
	},
	created: function(){
		this.getHistorySearch();
	},
	mounted: function(){
		document.addEventListener('click',()=>{
			this.isShowList = false;
		});
	}
}
</script>

<style src="../../static/css/pc/pc_header.less" lang="less" scoped></style>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>