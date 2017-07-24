$(document).ready(function(){
	$('#names li:first').append('(First)').addClass('bold').click(function(){alert('woof');});
	$('#names li:last').append('(Last)');

	$('#names').find('li').first().append('(F)');
	$('#names').find('li').first().next().append('(Second)');
	$('#names').find('li').first().addClass('bold').click(function(){
		$(this).find('li').nextAll().toggle();
	}).nextAll().show();
});