$(function() {
	var current = null;	
	var noSections = $('.section').length;

	function nextSection(){
		var next = current + 1;
		$('.section'+current).removeClass('current');
		$('body').scrollTo('.section'+next, {duration:600}, {queue:true});
		$('.section'+next).addClass('current');
	}

	function previousSection(){
		//SCROLL UP
		var prev = current - 1;
		$('.section'+current).removeClass('current');
		$('body').scrollTo( '.section' + prev, 600, {queue:true} );
		$('.section'+prev).addClass('current');	
		
	}

	$(document).keydown(function(e){
		current = $('div.current').data('section');
		if (e.keyCode == 40) {
			//SCROLL DOWN
			if(current < noSections){

				nextSection();	
				e.preventDefault();
				return false;
			}
		} 
		else if (e.keyCode == 38) {
			//SCROLL UP
			if(current > 1){
				previousSection();
				e.preventDefault();
				return false;
			}
		}
	});

	//TODO: Optimizar código, hay mucho código repetido (DRY) y hay validaciones que se deberían hacer
	//Antes de mover las clases del doom
	var offset1 = $('.section1').offset();
	var section1Top = offset1.top;

	var offset2 = $('.section2').offset();
	var section2Top = offset2.top;

	var offset3 = $('.section3').offset();
	var section3Top = offset3.top;

	var offset4 = $('.section4').offset();
	var section4Top = offset4.top;
	var zonaIntermedia = 50;
	var isFirstTime = true;
	$( window ).scroll(function() {

		if(isFirstTime){
			var currentStrollTop = window.pageYOffset || document.documentElement.scrollTop;
			current = $('div.current').data('section');
			if(currentStrollTop > (section1Top - 50) && currentStrollTop < (section1Top + 50)){
				current = 1;
				$('.current').removeClass('current');
				$('.section1').addClass('current');	
			}

			if(currentStrollTop > (section2Top - 50) && currentStrollTop < (section2Top + 50)){
				current = 2;
				$('.current').removeClass('current');
				$('.section2').addClass('current');	
			}

			if(currentStrollTop > (section3Top - 50) && currentStrollTop < (section3Top + 50)){
				current = 3;
				$('.current').removeClass('current');
				$('.section3').addClass('current');	
			}

			if(currentStrollTop > (section4Top - 50) && currentStrollTop < (section4Top + 50)){
				current = 4;
				$('.current').removeClass('current');
				$('.section4').addClass('current');	
			}

			isFirstTime = false;
		}
	});
	//Con la misma idea de los rangos podría resolver lo del scroll automatico 
	//disaparado por el evento scroll del mouse 

	$("#linkPortafolio").click(function(){
		current = 3;
		$('.current').removeClass('current');
		$('.section3').addClass('current');	
	})

	$("#linkContacto").click(function(){
		current = 4;
				$('.current').removeClass('current');
				$('.section4').addClass('current');	
	})
});
