<template>
	<div class="repeat-row">
		<a href="#" class="headline">
			<i :class="['c-channelicon',thats[id].icon]"></i>
			<span>{{thats[id].name}}</span>
		</a>
		<div class="videos">
			<v-mVideo1 v-for="(item,index) in showList" :data="item" :key="index"/>
		</div>
		<div class="bottom">
			<a href="#">
				{{thats[id].more}}<i class="c-glyphicon c-glyphicon-more"></i>
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
				zonyshow:{
					icon:'c-channel-zongyi',
					name:'综艺',
					more:'更多综艺',
					length: 6
				},
				yuleshow:{
					icon:'c-channel-yule',
					name:'娱乐',
					more:'更多娱乐',
					length: 4
				},
				originshow:{
					icon:'c-channel-yuanchuang',
					name:'原创',
					more:'更多原创',
					length:6
				},
				teachplay:{
					icon:'c-channel-jiaoyu',
					name:'教育',
					more:'更多教育',
					length:4
				},
				sportsplay:{
					icon:'c-channel-tiyu',
					name:'体育',
					more:'更多体育',
					length:4
				},
				mobabyplay:{
					icon:'c-channel-muying',
					name:'母婴',
					more:'更多母婴',
					length:4
				},
				trailer:{
					icon:'c-channel-pianhua',
					name:'片花',
					more:'更多片花',
					length:2
				},
				childshow:{
					icon:'c-channel-ertong',
					name:'儿童',
					more:'更多儿童',
					length:2
				}
			},
			list:[]
		}
	},
	computed:{
		showList(){
			return this.list.slice(0,this.thats[this.id].length);
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