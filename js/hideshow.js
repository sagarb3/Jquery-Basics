/*toggle is a depriciated functionality of jquery 1.8 */

$('#hideshow').click(function(){
$('#hideshow').toggle(
	function(){
$('#hideshow').text('Show');
$('#message').hide();

},function(){
$('#hideshow').text('Hide');
$('#message').show();
});	
});
