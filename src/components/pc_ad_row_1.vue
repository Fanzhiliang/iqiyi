<template>
	<div class="ad-row-1" v-if="!!data">
		<div class="head-line">
			<a href="#" class="head-name"><h3>推广广告</h3></a>
		</div>
		<div class="ads-wrap">
			<i class="qy-common-icon qy-common-pageleft32 prev" @click="toggleList(-1)"></i>
			<i class="qy-common-icon qy-common-pageright32 next" @click="toggleList(1)"></i>
			<div class="ads clearfix" @mouseleave="adLeave">
				<a :href="item.href" :style="item.style" :class="['ad',{enter:item.isEnter,'enter-left':item.isLeft,leave:item.isLeave}]" v-for="(item,index) in showList" @mouseenter="adEnter(index)">
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
			if(this.isHover){return false;}
			this.isHover = true;
			this.currIndex = index;
			let itemWidth = parseFloat(this.GLOBAL.getStyle(this.$refs.itemWidth[0],'width')),
				itemMargin = parseFloat(this.GLOBAL.getStyle(this.$refs.itemWidth[0],'margin-right')),
				tempWidth = itemWidth+itemMargin;
			this.showList.forEach((item,i)=>{
				this.$set(this.showList[i],'isLeft',i<index);
				this.$set(this.showList[i],'isEnter',i===index);
				this.$set(this.showList[i],'isLeave',false);
				if(i<=this.currIndex){
					let targetOne = i>=4?-4*tempWidth:-i*tempWidth,
						targetTwo = itemWidth*5+itemMargin*4,
						currLeft = 0,
						currWidth = itemWidth,
						move = ()=>{
							if(i<this.currIndex){
								currLeft=parseFloat(this.showList[i].style.transform.split('(')[1].split(')')[0]);
							}else if(i==this.currIndex){
								currLeft = parseFloat(this.showList[i].style['margin-left']);
							}
							currLeft += targetOne/40;
							currWidth += targetTwo/40;
							if(currLeft <= targetOne && currWidth >= targetTwo){
								currLeft = targetOne;
								currWidth = targetTwo;
							}else{
								this.moveObj[i] = setTimeout(move,1);
							}
							if(this.moveObj[i]){
								if(i<this.currIndex){
									this.$set(this.showList[i].style,'transform','translateX('+currLeft+'px)');
								}else if(i==this.currIndex){
									this.$set(this.showList[i].style,'margin-left',currLeft+'px');
									this.$set(this.showList[i].style,'width',currWidth+'px');
								}
							}
						}
					move();
				}
			});
		},
		adLeave: function(){
			this.moveObj.forEach((item)=>{
				clearTimeout(item);
			});
			let itemWidth = parseFloat(this.GLOBAL.getStyle(this.$refs.itemWidth[0],'width')),
				itemMargin = parseFloat(this.GLOBAL.getStyle(this.$refs.itemWidth[0],'margin-right')),
				tempWidth = itemWidth+itemMargin;
			this.showList.forEach((item,i)=>{
				this.$set(this.showList[i],'isLeft',false);
				this.$set(this.showList[i],'isEnter',false);
				this.$set(this.showList[i],'isLeave',i===this.currIndex);
				if(i<=this.currIndex){
					let oldOne = 0,
						oldTwo = itemWidth*5+itemMargin*4;
					if(i<this.currIndex){
						oldOne = parseFloat(this.showList[i].style.transform.split('(')[1].split(')')[0]);
					}else if(i==this.currIndex){
						oldOne = parseFloat(this.showList[i].style['margin-left']);
					}
					let	currLeft = 0,
						currWidth = oldTwo,
						move = ()=>{
							if(i<this.currIndex){
								currLeft=parseFloat(this.showList[i].style.transform.split('(')[1].split(')')[0]);
							}else if(i==this.currIndex){
								currLeft = parseFloat(this.showList[i].style['margin-left']);
							}
							currLeft -= oldOne/40;
							currWidth -= oldTwo/40;
							if(currLeft >= 0 && currWidth <= itemWidth){
								currLeft = 0;
								currWidth = itemWidth;
							}else{
								this.moveObj[i] = setTimeout(move,1);
							}
							if(this.moveObj[i]){
								if(i<this.currIndex){
									this.$set(this.showList[i].style,'transform','translateX('+currLeft+'px)');
								}else if(i==this.currIndex){
									this.$set(this.showList[i].style,'margin-left',currLeft+'px');
									this.$set(this.showList[i].style,'width',currWidth+'px');
								}
							}
						}
					move();
				}else{
					this.$set(this.showList[i].style,'transform','translateX(0px)');
				}
			});
			this.isHover = false;
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
			this.data.forEach((item,i)=>{
				this.$set(this.data[i],'isEnter',false);
				this.$set(this.data[i],'isLeave',false);
				this.$set(this.data[i],'isLeft',false);
				this.$set(this.data[i],'style',{transform:'translateX(0px)','margin-left':'0px',width:''});
			});
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
					item.isEnter = false;
					item.isLeave = false;
					item.isLeft = false;
					item.style = {transform:'','margin-left':'',width:''};
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