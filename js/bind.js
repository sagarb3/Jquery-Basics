/*$('a').mouseenter(function(){
	$(this).addClass('bold');
}).mouseleave(function(){
	$(this).removeClass('bold');
});*/
$('a').bind('mouseenter mouseleave',function(){
$(this).toggleClass("bold");
});