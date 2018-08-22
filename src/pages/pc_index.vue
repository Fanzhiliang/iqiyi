<template>
	<div class="wrap clearfix">
		<v-pcHeader :isTop="isTop"/>
		<v-pcSlider :isTop="isTop"/>
		<div class="main">
			<v-pcBody :body.sync="body"/>
			<v-pcSidebar :body="body"/>
		</div>
		<v-pcFooter/>
	</div>
</template>

<script>
export default{
	data(){
		return{
			isTop: true,
			body:{}
		}
	},
	mounted: function(){
		window.addEventListener('load',()=>{
			let limitTop = parseFloat(this.GLOBAL.getStyle(document.querySelector(".header"),'height'))+parseFloat(this.GLOBAL.getStyle(document.querySelector(".slider"),'height'));
			window.addEventListener('resize', ()=>{
				limitTop = parseFloat(this.GLOBAL.getStyle(document.querySelector(".header"),'height'))+parseFloat(this.GLOBAL.getStyle(document.querySelector(".slider"),'height'));
			});
			document.addEventListener('scroll',()=>{
				if(this.GLOBAL.getScrollTop() > limitTop + 30){//这个+30是today组件的margin-top
					this.isTop = false;
				}else{
					this.isTop = true;
				}
			});
		});
	}
}
</script>

<style scoped>
.wrap{
	
}
.main{
	
}
</style>