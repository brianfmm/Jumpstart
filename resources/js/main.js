
$(document).ready(function(){
  $('.carousel').slick({
       arrows:false,
       autoplay:true,
       autoplaySpeed:4000,
       fade: false,
       pauseOnHover: false,
       pauseOnFocus: false,
       draggable: false
  });

  var prev = 0;
  var $window = $(window);
  var nav = $('nav');

  $window.on('scroll', function(){
    var scrollTop = $window.scrollTop();
    nav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
  });
});



/*
$("div").scroll(function(){
    $("span").text(x += 1);
});

var zeroScroll = 0;
var scrollValue = $(this).scrollTop();

$(window).scroll(function){
    if
};

*/
