$( document ).ready(function() {

	// Footer collapse functionality 
	$('.footer-links-wrapper h3').click(function(){
		$(this).next('ul').slideToggle();
		$(this).toggleClass("expanded");
	});

	// Search bar 
	$('.search-link').click(function(event){
		event.preventDefault();
		$(".logo-link").fadeToggle();
		$(".searchbox").slideToggle();
	});


});