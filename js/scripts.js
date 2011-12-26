$(document).ready(function() {

	$("#slideshow").css("overflow", "hidden");
	$('#slides').append('<li></li>');
	
	//Add an unordered list to contain the navigation
	//Invoke the cycle plugin on #cycleContainer
	$("ul#slides").cycle({
		fx: 'none', // Sets the transition to none
		pause: 0, // Pause timer
		timeout: 0, // Removes auto sliding to next slide
		fit: 'true',     // force slides to fit container 
		height: '100%', // Sets the height
		containerResize: 0,   // resize container to fit largest slide
		prev: '#prev', // force slides to fit container 
		next: '#next', // force slides to fit container 
		pager:  '#pager',	  //Selector for element to use as pager container 
		after: indexFunction,
		
		/* Link version */
		pagerAnchorBuilder: function(idx, slide) {
		    return '<li><p><a href="#">'
		        + jQuery(slide).find('img').attr('src')
		        + '</a></p></li>'; 
}

		/* Thumbnail version */
		/* pagerAnchorBuilder: function(idx, slide) {     return '<li style="display: block;float: left;width: 120px;height: 120px;overflow: hidden;border: 3px solid #f1f5f6;padding: 4px;"><a href="#"><img src="'         + jQuery(slide).find('img').attr('src')         + '" width="120" /></a></li>';  */  

	});
	
	$("#slideshow").hover(function() {
    	$("ul#nav").fadeIn();
  	},
  		function() {
    	$("ul#nav").fadeOut();
  	});
  	
  	
	$("#index-div a").click(function() {
			$("#slideshow").css("display", "block");
			$("#index-div").css("display", "none");
	});  	
	
});



function indexFunction() {
	if($('#slides li:last-child').css('display') != "none") {
			
		$("#slideshow").css("display", "none");
		$("#index-div").css("display", "block");
		}
	}//func indexFunction()

