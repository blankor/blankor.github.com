if ('undefined' == typeof(document.body.style.maxHeight)) {
	//ie6
}

function autoSize(){
	var H =$(window).height();
	$(".vmiddle").css({"padding-top":H/2-140,"padding-bottom":H/2-140});
}

$(function() {
	autoSize();
	$(".nav a").click(function(){
		var index = $(this).index();
		var conH = $("."+$(this).attr("id")).height()+50;
		
		$(this).addClass("curr").siblings().removeClass("curr");
		$(".footer").css("position","relative");
		$(".vmiddle").animate({"padding-top":"5px","padding-bottom":"10px"},300);
		$(".slidew").animate({"margin-left":-index*100+"%"});
		$(".conter").animate({height: conH},300);
	});
	
	//窗口检测
	$("body").append("<div class='fixednum'></div>");
	$(".fixednum").html('主体宽：'+$('.layout').width()+'<br>窗口宽：'+$(window).width());
	$(window).resize(function(){
		$(".fixednum").html('主体宽：'+$('.layout').width()+'<br>窗口宽：'+$(window).width());
	})
});