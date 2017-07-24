$(document).ready(function(){
	
	$('input[type="text"]').focus(function(){
		var	this_val=$(this);
	    var	minlength=this_val.attr('minlength');

	

		if(minlength!=0&&minlength>0&&this_val.val().length<minlength){
			this_val.after('<span>'+minlength+'</span>')

		}
	}).keyup(function(){
		//alert('Keyup')
		if($(this).val().length>=$(this).attr('minlength')){
			$(this).next().remove();
		}
	}).blur(function(){
		$(this).next().remove();
	});
});