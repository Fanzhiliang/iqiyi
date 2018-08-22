<template>
	<div class="footer">
		<div class="footer-inner clearfix">
			<div class="partner">
				<div class="headline">
					<a href="#"><h3>合作伙伴</h3><span>更多></span></a>
				</div>
				<ul class="main-body clearfix">
					<li v-for="item in partners"><a :href="item.href" :title="item.name">{{item.name}}</a></li>
				</ul>
			</div>
			<div class="dynamic">
				<div class="headline">
					<a href="#"><h3>爱奇艺动态</h3><span>更多></span></a>
				</div>
				<ul class="main-body clearfix">
					<li v-for="item in dynamics"><a :href="item.href" :title="item.name">{{item.name}}</a></li>
				</ul>
			</div>
			<ul class="prove">
				<li v-for="item in proves">
					<a :href="item.href" :title="item.name">
						<img v-if="item.img" :src="item.img" alt="">
						{{item.name}}
					</a>
				</li>
			</ul>
			<div class="about">
				<ul class="about-inner clearfix">
					<li v-for="item in abouts">
						<a :href="item.href" :title="item.name">{{item.name}}</a>
						<span>|</span>
					</li>
				</ul>
			</div>
			<ul class="report">
				<li v-for="item in reports">
					<a v-if="item.href" :href="item.href" :title="item.name">{{item.name}}</a>
					<span v-else :title="item.name">{{item.name}}</span>
				</li>
			</ul>
			<ul class="last">
				<a href="#" title="反盗版和反盗链权利声明">反盗版和反盗链权利声明</a>
				<span>
					<span>Copyright © 2018</span><a href="#">爱奇艺</a><span>All Rights Reserved</span>
				</span>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			partners:[
				{name:'万达电影网',href:'#'},{name:'星美',href:'#'},{name:'光线影业',href:'#'},
				{name:'电影网',href:'#'},{name:'华策影视',href:'#'},{name:'百度视频',href:'#'},
				{name:'百度百科',href:'#'},{name:'微博视频台',href:'#'},{name:'百度贴吧',href:'#'},
				{name:'央广网',href:'#'},{name:'hao123',href:'#'},{name:'爱奇艺天猫店',href:'#'}
			],
			dynamics:[
				{name:'爱奇艺体育获5亿元战略融资IDG资本领投',href:'#'},
				{name:'2018年Q2财报:总营收62亿元同比增51%',href:'#'},
				{name:'2018上半年影片分账收益超1.8亿',href:'#'},
				{name:'爱奇艺、新英体育打造超级在线体育平台',href:'#'},
				{name:'暑期档推出古装题材新表达《延禧攻略》',href:'#'},
				{name:'爱奇艺多部自制剧登陆卫视播出',href:'#'}
			],
			proves:[
				{name:'京网文[2018]6272-484号',href:'#'},
				{name:'中国互联网诚信联盟',img:'/static/img/trust.png',href:'#'},
				{name:'出版物经营许可证',href:'#'},
				{name:'信息网络传播视听节目许可证 0110544号',href:'#'},
				{name:'广播电视节目制作经营许可证 (京)字第1938号',href:'#'},
				{name:'京ICP证110636号',href:'#'},
				{name:'经营性网站备案信息',img:"/static/img/records.png",href:'#'},
				{name:'京公网安备 11010802010263号',href:'#'},
				{name:'增值电信业务经营许可证 B2-20120273',href:'#'},
				{name:'互联网药品信息服务资格证书 (京)-经营性-2013-0012',href:'#'},
				{name:'食品经营许可证 JY11108111598788',href:'#'}
			],
			abouts:[
				{name:'公司介绍',href:'#'},{name:'新闻动态',href:'#'},
				{name:'Investor Relations',href:'#'},{name:'联系方式',href:'#'},
				{name:'内容播放量计算标准',href:'#'},{name:'招聘英才',href:'#'},
				{name:'爱奇艺创新实验室',href:'#'},{name:'开放平台',href:'#'},
				{name:'爱奇艺内容合作标准',href:'#'},{name:'爱奇艺号',href:'#'},
				{name:'爱奇艺会员合作',href:'#'},{name:'安全应急响应中心',href:'#'},
				{name:'帮助中心',href:'#'},{name:'侵权投诉',href:'#'},
				{name:'用户协议',href:'#'},{name:'隐私政策',href:'#'}
			],
			reports:[
				{name:'中国互联网举报中心',href:'#'},{name:'网络举报APP下载',href:'#'},
				{name:'违法和不良信息举报电话：400-923-7171'},{name:'举报邮箱：jubao365@qiyi.com',href:'#'}
			]
		}
	}
}
</script>

<style src="../../static/css/pc/pc_footer.less" lang="less" scoped></style>