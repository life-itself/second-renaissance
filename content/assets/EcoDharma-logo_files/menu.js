$(document).ready(function() {
	
	// hide all by default
	$("div#menu > ul > li > ul").hide();
	
	// open the parent of the currently selected menu item...
	$("div#menu li.active").parent().parent().children("ul").show();
	
	// ... and make it white ...
	$("div#menu li.active").parent().parent().children("a").css("color","#FFFFFF");
	$("#slide-menu li.active").parent().parent().children("a").css("color","#FFFFFF");
	
	// click action
	$("div#menu > ul > li > a").click(function() {
		if($(this).attr("href")=="#") { // if menu has no children - defined in cms php
			$(this).parent().children("ul").slideToggle("fast");
			return false;
		}	
	});
	
	// home link
	$("h1").click(function() {
		window.location.href = "/";
	});
	
	// validate contact form
	$("#formcontactform").validate();

});