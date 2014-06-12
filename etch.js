$(document).ready(function(){
    var input = 64;
    $('#butt').click(function(){
	$('.square').remove();
	input = parseInt(prompt('Give me a number between 1 and 100'));
	if(input < 1 || input > 100){
	    input = parseInt(prompt("Try again, I'm not stupid!"));
	}
	mkDiv(input);
	chngClr();
    });
    
    mkDiv(input);
    chngClr();
});


mkDiv = function(boxCount){
    for (var i = 0; i <= boxCount/2; i++){
	for (var j = 0; j <= boxCount/2; j++){
	    $('<div>', {'class' : 'square',}).appendTo('#grid');
	};
	$('<div>', {'class' : 'square',}).appendTo('#grid');
    }
    

    var boxSize = 960 / boxCount;
    $('.square').css({
	'width':boxSize +'px',
	'height':boxSize +'px'
    });
};

 
chngClr = function(){
    $square = $('.square')
    $square.hover(function(){
	$(this).addClass('hilite');
    });
}
