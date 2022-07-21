
$(function () {
    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 736,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            }
        ]
    });
})