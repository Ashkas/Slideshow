$(document).ready(function() {
	$("#slideshow").css("overflow", "hidden");
	
	//Create an array of titles
	var titles = $('#slideshow div.item').find("h1").map(function() { return $(this).text(); });
	
	//Add an unordered list to contain the navigation
	$('#slideshow').before('<ul id="slides"></ul>').cycle({
		fx: 'none', // Sets the transition to none
		pause: 0, // Pause timer
		timeout: 0, // Removes auto sliding to next slide
		fit: 'true',     // force slides to fit container 
		height: '100%', // Sets the height
		containerResize: 0,   // resize container to fit largest slide
		pager: '#slides', //Selector for element to use as pager container
		pagerAnchorBuilder: function (index) {               //Build the pager
            return '<li><a href="#">' + titles[index] + '</a></li>';
            },
		updateActivePagerLink: function(pager, currSlideIndex) { 
    		$(pager).find('li').removeClass('active').filter('li:eq('+currSlideIndex+')').addClass('active'); 
		}

	});
	
	$("#slideshow").hover(function() {
    	$("ul#nav").fadeIn();
  	},
  		function() {
    	$("ul#nav").fadeOut();
  	});
	
});