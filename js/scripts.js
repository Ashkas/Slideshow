$(document).ready(function() {
	
	$('#slideshow').cycle({
            fx: 'none',
            speed: 0,
            timeout: 0,
            pause: 0,
            cleartype: true,
            cleartypeNoBg: true,
            fit: 'true',     // force slides to fit container 
			height: '100%', // Sets the height
			containerResize: 0,   // resize container to fit largest slide
            pager: '#slides',
            pagerAnchorBuilder: function(idx, slide) {
                return '#slides li:eq(' + (idx) + ')';
            }
        });

        $('#slides-nav li').click(function() { 
            $('#slideshow').cycle('pause'); 
        });

        $.fn.cycle.updateActivePagerLink = function(pager, currSlideIndex) { 
            $(pager).find('li').removeClass('activeLI') 
                .filter('li:eq('+currSlideIndex+')').addClass('activeLI'); 
        }; 
		
	$("#slideshow").hover(function() {
    	$("ul#nav").fadeIn();
  	},
  		function() {
    	$("ul#nav").fadeOut();
  	});
	
});