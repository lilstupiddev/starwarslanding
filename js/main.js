$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin:10,
        nav:true,
        navClass: ["slider_nav_left", "slider_nav_right"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
  });


  $(window).on("load",function(){
    $(".loader-container").fadeOut(3000);
});