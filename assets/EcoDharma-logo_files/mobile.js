$(document).ready(function() {

	// get carousel image urls (or defaults)
	var cd = $("#carousel-data");
	var imgs = cd.text().split(/\n/);

	// get carousel el
	var type = "interior";
	if(window.location.pathname == "/") type = "home";
	var el = $("#frame-" + type + "-fader");

	// add image(s)
	$(imgs).each(function(i, img) {
		el.append('<div class="slide" style="background-image:url(\'/public/workspace/header-images/' + img + '\');"></div>');
	});

	// start carousel
	el.cycle({ fx: "fade", timeout: 5000, speed: 2000 });

	// toggle menu on click of trigger
    $("#slide-menu-trigger").bind("click touchstart", function() {
        $("body").toggleClass("slide-menu-active");
    });

    // close menu if main column touched when menu is open
    $("#wrapper").bind("touchstart", function() {
        $("body").removeClass("slide-menu-active");
    });
	
});