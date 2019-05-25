<template>
	<div class="ad-row-1" v-if="!!data">
		<div class="head-line">
			<a href="#" class="head-name"><h3>推广广告</h3></a>
		</div>
		<div class="ads-wrap">
			<i class="qy-common-icon qy-common-pageleft32 prev" @click="toggleList(-1)"></i>
			<i class="qy-common-icon qy-common-pageright32 next" @click="toggleList(1)"></i>
			<div class="ads clearfix" @mouseleave="adLeave">
				<a :href="item.href" style="" class="ad" v-for="(item,index) in showList" @mouseenter="adEnter(index)" :style="item.style">
					<div class="ad-inner clearfix">
						<div class="left" ref="itemWidth">
							<img :src="item.left" alt="">
						</div>
						<div class="right">
							<img :src="item.right" alt="">
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props:['dataUrl'],
	data(){
		return{
			data:[],
			currIndex: 0,
			flagIndex: 0,
			showList:[],
			isHover: false,
			moveObj: []
		}
	},
	methods:{
		adEnter: function(index){
			// this.GLOBAL.getWindowWidth()
			let marginLeftStep = this.GLOBAL.getWindowWidth()>=1300?215:185;
			this.data.forEach((item,i)=>{
				if(i<=index && i>0 && i<=4){
					item.style['margin-left'] = -marginLeftStep + 'px';
				}
			})
		},
		adLeave: function(){
			this.data.forEach((item)=>{
				item.style['margin-left'] = '';
			})
		},
		superPush: function(arr,index,dir){
			if(typeof dir !== 'number'){dir=1;}
			let tempLength = 8,
				tempArr = [];
			while (tempArr.length < 8) {
				if(index > arr.length-1){
					index = 0;
				}else if(index < 0){
					index = arr.length-1;
				}
				tempArr.push(arr[index]);
				index += dir;
			}
			return {
				array: tempArr,
				index: index
			};
		},
		toggleList: function(dir){
			let result = this.superPush(this.data,this.flagIndex,dir);
			this.showList = result.array;
			this.flagIndex = result.index+1;
		}
	},
	created: function(){
		this.$http.get(this.dataUrl).then((response)=>{
			if(response.data.code === 200){
				let tempList = response.data.data.list;
				tempList.forEach((item)=>{
					item.style = {'margin-left':''};
				});
				this.data = tempList;
				this.toggleList(1);
			}else{
				console.log('获得广告信息失败:');console.log(response.data.data.message)
			}
		},(response)=>{
			console.log('获得广告信息失败:');console.log(response);
		});
	}
}
</script>

<style src="../../static/css/pc/pc_ad_row_1.less" lang="less" scoped></style>