$(document).ready(function(){
$('.file').on({
	change:function(){
		$(this).after('<input type="file" class="file"/>');
	}
});	
});

