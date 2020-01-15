$(document).ready(function () {
    $(".nav-icon").click(function () {
        $(".full-nav").addClass("open");
    });
    $(".nav-close").click(function () {
        $(".full-nav").removeClass("open");
    });
    $(window).scroll(function () {
        let sc = $(window).scrollTop();
        if (sc > 100) {
            $(".nav").addClass("sticky")
        } else {
            $(".nav").removeClass("sticky")
        }
    });
    $(".bxslider").bxSlider({
        mode: 'horizontal',
        moveSlides: 1,
        slideMargin: 40,
        infiniteLoop: true,
        minSlides: 1,
        maxSlides: 1,
        speed: 1200,
    });
    $("#work").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });
    if($(".swiper-container").hasClass("team-member-slider")){
        let swiper = new Swiper('.swiper-container', {
            slidesPerView:3,
            allowTouchMode:true,
            loop:true,
            centeredSlides:true,
            effect:"coverflow",
            grabcursor:true,
            autoplay:false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            coverflow:{
                rotate:0,
                scretch:100,
                depth:200,
                modifier:1,
                slideShadows:false
            },
            breakpoints: {
                767: {
                    slidesPerView:1,
                    centeredSlides: false,
                    effect:"slide",
                }
            }
        })
    }
    $("#Mosaic").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });
    $("#news-slider").owlCarousel({
        items:3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[1000,2],
        itemsMobile:[599,1],
        pagination:false,
        autoplay: true,
        loop: true,
        responsive:{
            1024: {
                items:3
            },
            768: {
                items:2
            },
            596: {
                items:2
            },
            0:  {
                items:1
            }
        }
    });
    $('.count').counterUp({
        delay: 10,
        time: 3000
    });
    $(function () {
        $('a[href^="#"]').on('click', function (event) {
            event.preventDefault();
            var sc = $(this).attr("href");
            tn = $(sc).offset().bottom;
            dn = $(sc).offset().top;
            $('html,body').animate({scrollTop: dn}, 1500)
        })
    })
});