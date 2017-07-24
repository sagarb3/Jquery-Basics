$(document).ready(function(){
	$(window).resize(function(){
		var w_height=$(window).height();
	var w_width=$(window).width();
	$('.fit').css('height',w_height);
	$('.fit').css('width',w_width);
	});
	
});