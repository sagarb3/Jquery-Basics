$(document).ready(function(){
	$('fadeto').css('opacity','0.4');
	$('.fadeto').mouseover(function(){
		$(this).fadeTo(1000,1);
		$('.fadeto').not(this).fadeTo(1000,0.4);

	});
});