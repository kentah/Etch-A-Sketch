$(document).ready(function(){
	mkDiv();
});



mkDiv = function(){
	$grid = $('.grid');
	for(var j = 0; j < 16; j++){
		for(var i = 0; i < 16; i++){
			$grid.append("<div class='square'></div>")
		};
		$grid.append('<div class="new_row"></div>')
	};

};