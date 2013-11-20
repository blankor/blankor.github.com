if ('undefined' == typeof(document.body.style.maxHeight)) {
	//ie6
}

function autoSize(){
	var H =$(window).height();
	$(".vmiddle").css({"padding":H/2-140});
}

$(function() {
	autoSize();
	$(".nav a").click(function(){
		$(".vmiddle").animate({"padding-top":"5px","padding-bottom":"10px"},300);
		$(".conter").animate({height: "560px"},300);
		$(this).addClass("curr").siblings().removeClass("curr");
		var index = $(this).index();
		$(".slidew").animate({"margin-left":-index*100+"%"});
	});
});