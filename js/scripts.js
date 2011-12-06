$(document).ready(function() {
	$("#slideshow").css("overflow", "hidden");
	
	$("ul#slides").cycle({
		fx: 'none', // Sets the transition to none
		pause: 0, // Pause timer
		timeout: 0, // Removes auto sliding to next slide
		fit: 'true',     // force slides to fit container 
		height: '100%', // Sets the height
		containerResize: 0,   // resize container to fit largest slide
		prev: '#prev', // force slides to fit container 
		next: '#next' // force slides to fit container 
	});
	
	$("#slideshow").hover(function() {
    	$("ul#nav").fadeIn();
  	},
  		function() {
    	$("ul#nav").fadeOut();
  	});
	
});