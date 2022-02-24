$(document).ready(function(){
    $(window).paroller();
    $('.container').addClass('wow fadeIn');
    new WOW().init();

    $("#aboutCarousel").owlCarousel({
        nav:true,
        pagination:true,
        dots:false,
        loop:true,
        responsiveClass:false,
        autoplay:true,
        center:true,
        navText:false,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $(".seeMore").click(function(){
        $(".portfolioImg").removeClass("hideDesctop");
        $(".seeMore").hide();
    });

    $(".languageActive").click(function(){
        $(".languageOptions").slideToggle(60); 
    });

    if($(window).width() < 768){
        $(".burgerMobileMenu").click(function(){
            $(".menu").slideToggle(70); 
        });
    };
});