$(document).ready(function(){
	$('#textarea').scroll(function(){
		var scroll_top=$(this).scrollTop();
		$('#feedback').text('Currently at posititon '+scroll_top);
	});
});