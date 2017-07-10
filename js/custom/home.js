$(function() {
	var current = null;	
	var noSections = $('.section').length;

	function nextSection(){
		var next = current + 1;
		console.log("next section");
		$('.section'+current).removeClass('current');
		$('body').scrollTo('.section'+next, {duration:600}, {queue:true});
		$('.section'+next).addClass('current');
	}

	function previousSection(){
		//SCROLL UP
		var prev = current - 1;
		console.log("prev section");
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
	//POC for change section using scroll. The proble is when interact up and down scroll
	/*
	var lastScrollTop = 0;
	var lastChangeSection = 0;
	var factorMovimiento = 40;
	var lastMoveNext = 0;
	var lastMovePrev = 0;
	var startPrev = 150;
	var endPrev = 350;
	var startNext = 0;
	var endNext = 200;
	$( window ).scroll(function() {
		var currentStrollTop = window.pageYOffset || document.documentElement.scrollTop;
		current = $('div.current').data('section');
		console.log(currentStrollTop);
		if(currentStrollTop >= 600){
			console.log("Start!");
			lastMovePrev = 600;
		}
	  	
	  	// 150 > 50
	  	if(currentStrollTop > startPrev && currentStrollTop < endPrev){
		  	if((lastMovePrev - factorMovimiento) > currentStrollTop){
		  		console.log("Is up");
		  		//console.log(current +" - " + noSections);
		  		if(true){
			  		//previousSection();
			  		moveToPrev();
			  		console.log("Prev move:" + lastMovePrev);
			  		console.log("Next move:" + lastMoveNext);
			  	}
		  		
		  	}
		}
	  	if(currentStrollTop > startNext && currentStrollTop < endNext){
		  	if( currentStrollTop > (lastMoveNext + factorMovimiento)){
		  		console.log("Is down");
		  		//console.log(current +" - " + noSections);
		  		if(true){
			  		//nextSection();
			  		moveToNext();
			  		console.log("Next move:" + lastMoveNext);
			  		console.log("Prev move:" + lastMovePrev);
			  	}
		  		
		  	}
	  	}
		
	  	lastScrollTop = currentStrollTop;
	  	//e.preventDefault();
		//return false;
	});

	function moveToNext(){
		console.log("Move to next");
		lastMoveNext += 200;
		lastMovePrev = lastMoveNext;
	}

	function moveToPrev(){
		console.log("Move to prev");	
		lastMovePrev -= 200;
		lastMoveNext = lastMovePrev;
	}
	*/
});
