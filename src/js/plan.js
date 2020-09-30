$(document).ready(function() {
    $('.plan__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        focusOnSelect: true,
        asNavFor: '.plan__thumbs'
    });

    $('.plan__thumbs').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.plan__slider',
        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                }
            }
        ]
    });
})