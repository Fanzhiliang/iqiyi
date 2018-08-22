<template>
	<div class="wrap">
		<div class="header">
			<v-mHeaderTop/>
			<div class="title-row">
				<a href="#" class="back" @click.prevent="back">
					<i class="c-glyphicon c-glyphicon-arrowLeft"></i>
				</a>
				<div class="title">播放记录</div>
				<a href="#" class="toggle-edit" @click.prevent="isEdit = !isEdit">
					{{isEdit?'取消':'编辑'}}
				</a>
			</div>
			<div class="filter-row">
				<span class="text"><i class="c-myicon c-myicon-suo suo"></i>播放记录仅本人可见</span>
				<div :class="['filter',{on:isFilter}]" @click.prevent="isFilter = !isFilter">
					<i class="c-glyphicon c-glyphicon-checkbox"></i>
					<span>过滤短视频</span>
				</div>
			</div>
		</div>
		<div class="main" v-if="historyData">
			<div class="history-list" v-for="(item,index) in historyData.list">
				<div class="title" v-show="!(isAllShort(item.list)&&isFilter)" v-if="item.list&&item.list.length>1">
					{{item.time}}
				</div>
				<a href="#" :class="['item',{eidt:isEdit}]" v-for="(item2,index2) in item.list" v-show="!(item2.isShort&&isFilter)">
					<div :class="['checkbox',{on:item2.isOn}]" @click.prevent="selectItem(index,index2)">
						<i class="c-glyphicon c-glyphicon-checkbox"></i>
					</div>
					<a href="#" class="cover">
						<img :src="item2.img" alt="">
						<span>{{item2.length}}</span>
					</a>
					<p class="name">{{item2.name}}</p>
					<p class="bottom">
						<i class="c-glyphicon c-glyphicon-computer"></i>
						{{item2.surplusLen=='已看完'?item2.surplusLen:'剩余'+item2.surplusLen}}
					</p>
				</a>
			</div>
			<p class="last-text">没有更多了</p>
			<div class="ctrl" v-show="isEdit">
				<span class="all" @click.prevent="selectMore">{{isSelectAll?'取消全选':'全选'}}</span>
				<span class="separate">|</span>
				<span :class="['delete',{able:ableDelete}]" @click.prevent="deleteSelect">
					删除{{ableDelete>0?ableDelete:''}}
				</span>
			</div>
		</div>
		<v-mFooter/>
	</div>
</template>

<script>
export default{
	data(){
		return{
			isEdit: false,
			isFilter: false
		}
	},
	computed:{
		historyData(){
			let temp = this.$store.state.historyData;
			temp.list.forEach((item)=>{item.isOn = false;});
			return temp;
		},
		ableDelete: function(){
			let result = 0;
			if(!this.historyData){return result;}
			for(let j=0;j<this.historyData.list.length;j++){
				for(let i=0;i<this.historyData.list[j].list.length;i++){
					if(this.historyData.list[j].list[i].isOn){
						++result;
					}
				}
			}
			return result;
		},
		isSelectAll: function(){
			if(!this.historyData){return true;}
			for(let j=0;j<this.historyData.list.length;j++){
				for(let i=0;i<this.historyData.list[j].list.length;i++){
					if(!this.historyData.list[j].list[i].isOn){
						return false;
					}
				}
			}
			return true;
		}
	},
	methods:{
		back:function(){
			window.history.go(-1);
		},
		isAllShort: function(list){
			let result = 0;
			list.forEach((item)=>{
				if(!item.isShort){
					return false;
				}else{
					++result;
				}
			});
			return result === list.length;
		},
		selectItem: function(index,index2){
			let isOn = this.historyData.list[index].list[index2].isOn;
			this.$set(this.historyData.list[index].list[index2],'isOn',!isOn);
		},
		selectAll: function(){
			for(let j=0;j<this.historyData.list.length;j++){
				for(let i=0;i<this.historyData.list[j].list.length;i++){
					this.$set(this.historyData.list[j].list[i],'isOn',true);
				}
			}
		},
		notSelectAll: function(){
			for(let j=0;j<this.historyData.list.length;j++){
				for(let i=0;i<this.historyData.list[j].list.length;i++){
					this.$set(this.historyData.list[j].list[i],'isOn',false);
				}
			}
		},
		selectMore: function(){
			if(this.isSelectAll){
				this.notSelectAll();
			}else{
				this.selectAll();
			}
		},
		deleteSelect: function(){
			if(!this.ableDelete){return false;}
			for(let j=0;j<this.historyData.list.length;j++){
				for(let i=this.historyData.list[j].list.length-1;i>=0;i--){
					if(this.historyData.list[j].list[i].isOn){
						this.historyData.list[j].list.splice(i,1);
					}
				}
			}
		}
	}
}
</script>

<style src="../../static/css/mobile/m_history.less" lang="less" scoped></style>