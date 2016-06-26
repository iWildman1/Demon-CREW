$(document).ready(function() {
  console.log("ready");

  $(".masonry").mouseenter(function() {
    $(this).children(".masonry-info").fadeTo('fast', 1);
  });
  $(".masonry").mouseleave(function() {
    $(this).children(".masonry-info").fadeTo('fast', 0);
  })
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
