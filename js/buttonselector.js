$(':button').click(function(){
	$(this).attr('value','Please Wait...');
});
$(':submit').click(function(){
	alert('Hello by submit');
});