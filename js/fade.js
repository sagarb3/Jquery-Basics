$(document).ready(function(){
	/*$('#show').click(function(){
	$('#image').fadeIn(5000,'linear',function(){
		$('#image_feedback').html('Image is loaded');
	});

});
	$('#hide').click(function(){
	$('#image').fadeOut(5000,'linear',function(){
		$('#image_feedback').html('Image is unloaded');
	});

});*/
$('#button').click(function(){
	$('#image').fadeToggle(5000,'linear',function(){
		alert('Toggled');
	});
});
});
