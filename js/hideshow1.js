$('#a_button').click(function(){
	$('#a_div').hide('slow','linear',function(){
		alert('Successfully Hidden the element');
	});
});
$('#b_button').click(function(){
	$('#b_div').show('slow','linear',function(){
		alert('Successfully Shown the element');
	});
});