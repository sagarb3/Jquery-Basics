$(':text').focusin(function(){
	$(this).css('background-color','yellow');
});
$(':input').blur(function(){
	$(this).css('background-color','green');
});//if we use input then it will work also for textarea