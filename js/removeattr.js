$(document).ready(function(){
	$('#agree').change(function() {
   $('#continue').attr('disabled', !$(this).is(':checked'));
});
});
