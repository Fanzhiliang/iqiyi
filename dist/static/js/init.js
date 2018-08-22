(function(window,document){
	if(/Android|webOS|iPhone|iPod|BlackBerry|Phone|Mobile/i.test(navigator.userAgent)){
		var pageWidth = window.innerWidth;
		if(typeof pageWidth != "number"){
			if (document.compatMode == "CSS1Compat") {
				pageWidth = document.documentElement.clientWidth;
			} else {
				pageWidth = document.body.clientWidth;
			}
		}
		//给html设置宽高，方便使用rem
		document.getElementsByTagName("html")[0].style.fontSize = pageWidth/16 + "px";
	}
})(window,window.document);