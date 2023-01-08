//   Scroll to top function
$(document).ready(function() {
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 50) {
		$('#scroll').fadeIn();
	  } else {
		$('#scroll').fadeOut();
	  }
	});
	$('#scroll').click(function() {
	  $("html, body").animate({
		scrollTop: 0
	  }, 400);
	  return false;
	});
  });