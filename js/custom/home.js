$(function() {
	var current = null;	
	var noSections = $('.section').length;

	function nextSection(){
		var next = current + 1;
		console.log(current+" - " +next);
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
			console.log("down");
			//SCROLL DOWN
			if(current < noSections){

				nextSection();	
				e.preventDefault();
				return false;
			}
		} 
		else if (e.keyCode == 38) {
			console.log("up");
			//SCROLL UP
			if(current > 1){
				previousSection();
				e.preventDefault();
				return false;
			}
		}
	});

	var lastScrollTop = 0;
	$( window ).scroll(function() {
		var st = window.pageYOffset || document.documentElement.scrollTop;
	  	//console.log(lastScrollTop + ' - ' + st);
	  	lastScrollTop = st;
	});
});
