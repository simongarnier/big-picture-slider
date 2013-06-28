//initial configuration of size
$(window).load(configure());
//reconfig each time the viewport is resized
$(window).resize(function() {configure()});
//click handler for the slider
bindClick();

function bindClick(){
	$('.slider').click(function(){
		var last = true;
		if($(this).attr('last') != 'last'){
			last = false;
		}
		slide($(this).attr('row'),$(this).attr('column'),last,true);
	});
}

function configure(){
	//get the height of the viewport
	var height = $(window).height(); 
	var width = $(window).width(); 
	var slider = (height-40)/3;
	var nbr_column = $('.slider:last').attr('column');
	//set the height and with
	$('body').css('height',height);
	$('body').css('width',width);
	$('.slider').css('height',slider);
	$('.slider').css('width',width);
	//height-wise positioning
	$('.slider-row-1').css('top', 20);
	$('.slider-row-2').css('top', 20+slider);
	$('.slider-row-3').css('top', 20+slider*2);
	//width-wise positionning
	for (var i = 1; i<= nbr_column; i++) {
		$('.slider-column-'+i).css('left',width*(i-1));
	};
}

function slide(row, column, last, cycling){
	var width = $(window).width(); 
	var slider_elements = $('.slider-row-'+row);
	var length = slider_elements.length;

	for(var i = 0; i< length; i++){
		var element = $(slider_elements[i]);
		if(last == false){
			element.animate({
				left:width*(i-column+1) - width
			},1000);
		}else{
			element.animate({
				left:width*i
			},1000);
		}
		
	}
}

