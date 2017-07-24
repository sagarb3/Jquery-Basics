$(document).ready(function(){
//alert('hello');
var text_max=55;

$('#textarea_feedback').html(text_max+' characters remaining');
$('#textarea').keyup(function(){
	var text_length=$(this).val().length;
	var text_remaining=text_max-text_length;
	$('#textarea_feedback').html(text_remaining+'characters remaining');
});
});