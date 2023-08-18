
$(document).ready( function(){
    
    $('.main-slider').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='btn btn-dark slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='btn btn-dark slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"

      });
});
