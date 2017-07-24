$(document).ready(function(){
	function move_div(){
		window_width=$(window).width();
		window_height=$(window).height();
		obj_width=$('#verycenter').width();
		obj_height=$('#verycenter').height();
		var x=(window_width/2)-(obj_width/2);
		var y=(window_height/2)-(obj_height/2);
		$('#verycenter').css('top',x).css('left',y);

	}
	move_div();
	$(window).resize(function(){
		move_div();
	});

});