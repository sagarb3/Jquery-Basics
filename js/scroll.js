$('#some_text').scroll(function(){
	var scroll_pos=$('#some_text').scrollTop();
	$('#some_feedback').html('You have scrolled at possition'+scroll_pos);
});
	