<template>
	<div class="backTop" v-show="isShow">
		<a href="#" @click.prevent="backTop">
			<i class="c-glyphicon c-glyphicon-arrowUp"></i>
			<span>顶部</span>
		</a>
	</div>
</template>

<script>
export default{
	data(){
		return{
			isShow: false
		}
	},
	methods:{
		backTop(){
			this.GLOBAL.setScrollTop(0);
		}
	},
	mounted(){
		document.addEventListener('scroll',()=>{
			this.isShow = this.GLOBAL.getScrollTop()>=this.GLOBAL.getWindowHeight();
		});
	}
}
</script>

<style>
.backTop{
	position: fixed;
	background-color: rgba(0, 0, 0, 0.5);
	right: 0.5rem;
	bottom: 4rem;
	border-radius: 50%;
}
.backTop a{
	width: 2.25rem;
	height: 2.25rem;
	display: inline-block;
	text-align: center;
	border-radius: 50%;
}
.backTop i{
	margin-top: 0.3rem;
}
.backTop i:before{
	display: inline-block;
	font-size: 0.9rem;
	color: #fff;
	font-weight: bold;
}
.backTop span{
	color: #fff;
	font-size: 0.55rem;
	display: block;
}
</style>