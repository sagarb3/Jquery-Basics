$('.hover').mousemove(function(e){
	//$('#co').text('X:'+e.clientX+''+'Y:'+e.clientY);
var hovertext=$(this).attr('hovertext');
//alert(hovertext);
$('#hoverdiv').text(hovertext).show();
$('#hoverdiv').css('top',e.clientY+10).css('left',e.clientX+10);

}).mouseout(function(){
	$('#hoverdiv').hide();
});