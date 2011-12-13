$(document).ready(function () {
	//Create an array of titles
	var titles = $('#cycleContainer div.item').find("h2").map(function() { return $(this).text(); });
	
	//Add an unordered list to contain the navigation
	//Invoke the cycle plugin on #cycleContainer
	$('#cycleContainer').before('<ul id="pager"></ul>').cycle({
		//Specify options
		fx:     'scrollLeft', //Name of transition effect 
        timeout: 0,           //Disable auto advance
        pager:  '#pager',	  //Selector for element to use as pager container 
        pagerAnchorBuilder: function (index) {               //Build the pager
            return '<li><a href="#">' + titles[index] + '</a></li>';
        },
		updateActivePagerLink: function(pager, currSlideIndex) { 
    		$(pager).find('li').removeClass('active').filter('li:eq('+currSlideIndex+')').addClass('active'); 
		}
	});
});
