$(document).ready(function() {
	
	// set dictionary to rendered height of content
	r = $("div.rightcol").height();
	h = r-340;
	// ie7 needs different things...
	if($.browser.msie) {
		h -= 20;
	}
	$("div#dictionary").css("height",h+"px");
	
	// extra margin for first feature
	if(isMobile) {
		$("img.feature:first").css("margin-top","30px");
		$("img.feature:last").css("margin-bottom","0px");
	} else {
		$("img.feature:first").css("margin-top","35px");
	}
	
});

