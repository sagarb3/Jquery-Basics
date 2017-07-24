$(document).ready(function(){
	$('#combine').click(function(){
		var failed=false;
		var combined_text='';
		$('input[type="text"]').each(function(){
			combined_text+=$(this).val()+' ';
			
			if($(this).val()==''){
				failed=true;
				
			}

		});
		if(failed==true){
			
			$('#combined').text('Please value in all feilds');
		}
		else
			{
				$('#combined').text(combined_text); 
			}
		
	});
});