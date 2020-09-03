$(document).ready(function () {
    $('.offers__item__favourite').click(function () {
        $(this).toggleClass('active');
    });

    $('.offers__slider').slick({
        focusOnSelect: false,
        infinite: false,
        slidesToShow: 4,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1560,
                settings: {
                slidesToShow: 3,
                
              }
            },
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 3,
                
              }
            },
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 2,
                
              }
            },
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 1,
                
              }
            }
        ]
    });
});