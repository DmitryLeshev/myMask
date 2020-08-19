$('.slider__content').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slideToScroll: 1
});

$('.slider-pt').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [{
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});

$('.slider-adv').slick({
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 99999,
            settings: 'unslick'
        }
    ]
});

// $(window).on('resize', function(e) {

//     const init = $('.slider-adv').data('init-slider')

//     if (window.innerWidth < 1024) {

//         if (init != 1) {

//             $('.slider-adv').slick({
//                 autoplay: true,
//                 autoplaySpeed: 5000,
//                 slidesToShow: 1,
//                 slideToScroll: 1
//             }).data({ 'init-slider': 1 })

//         }
//     } else {

//         if (init == 1) {
//             $('.slider-adv').slick('unslick').data({ 'init-slider': 0 })
//         }
//     }
// }).trigger('resize')