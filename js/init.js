var mainInterval = null;

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

$(document).ready(function() {

  $("#blog-rotate").children("li").first().css("display", "inline-block");

  startRotate(1);

  $("span").click(function() {

    clearInterval(mainInterval);

    var adjustmentIndex = $(this).index();

    currentIndex = adjustmentIndex + 1;

    startRotate(currentIndex);
  })
})

function startRotate(index) {
  var currentIndex = index;

  $(".blog-info").find("span").removeClass('rotator-full');
  $(".blog-info").find("span:nth-child(" + currentIndex + ")").addClass("rotator-full");

  $("#blog-rotate").children("li").css("display", "none");
  $("#blog-rotate").children("li:nth-child(" + currentIndex + ")").css("display", "inline-block");

  mainInterval = setInterval(function() {

    if (currentIndex == 3) {
      currentIndex = 0;
    }

    $("#blog-rotate").children("li").fadeOut(400);
    $(".blog-info").find("span").removeClass("rotator-full");

    $("#blog-rotate").children("li:nth-child(" + (currentIndex + 1) + ")").delay(400).fadeIn();
    $(".blog-info").find("span:nth-child(" + (currentIndex + 1) + ")").addClass("rotator-full");

    currentIndex++;

    
  }, 5000);
}
