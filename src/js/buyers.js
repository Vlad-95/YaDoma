$(document).ready(function() {
    $('.buyers__slider').slick({
        slidesToShow: 5,
        infinite: false,
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        arrows: false,
        centerPadding: '0px',
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 3,
                
              }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                
              }
            }
            
        ]
    });

    $('.buyers__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        let diff = nextSlide - currentSlide;
        
        // показ боковых слайдов
        $('.buyers__slider .slick-slide .buyers__slider__item').removeClass('visible');
        $('.buyers__slider .slick-slide[data-slick-index="'+(nextSlide - 2)+'"] .buyers__slider__item').addClass('visible');//1я позиция
        $('.buyers__slider .slick-slide[data-slick-index="'+(nextSlide - 1)+'"] .buyers__slider__item').addClass('visible');//2я позиция
        $('.buyers__slider .slick-slide[data-slick-index="'+nextSlide+'"] .buyers__slider__item').addClass('visible');//3я позиция
        $('.buyers__slider .slick-slide[data-slick-index="'+(nextSlide + 1)+'"] .buyers__slider__item').addClass('visible');//4я позиция
        $('.buyers__slider .slick-slide[data-slick-index="'+(nextSlide + 2)+'"] .buyers__slider__item').addClass('visible');//5я позиция
        
        //свайп вперед
        if (currentSlide < nextSlide) {      
                
            //свайп вперед на 2 слайда
            if (diff == 2) {
                $('.buyers__slider .slick-slide .buyers__slider__item').removeClass('scale');
                $('.buyers__slider .slick-slide[data-slick-index="'+(nextSlide + 1)+'"] .buyers__slider__item').addClass('scale');
                $('.buyers__slider .slick-slide[data-slick-index="'+(currentSlide + 1)+'"] .buyers__slider__item').addClass('scale');
            } else if (diff == 1) {
                // свайп вперед на 1 слайд
                $('.buyers__slider .slick-slide .buyers__slider__item').removeClass('scale');
                $('.buyers__slider .slick-slide[data-slick-index="'+(nextSlide + 1)+'"] .buyers__slider__item').addClass('scale');
                $('.buyers__slider .slick-slide[data-slick-index="'+currentSlide+'"] .buyers__slider__item').addClass('scale');
            }
            
        } else {
            //свайп назад
            
            //свайп назад на 2 слайда
            if (diff == -2) {
                $('.buyers__slider .slick-slide .buyers__slider__item').removeClass('scale');
                $('.buyers__slider .slick-slide[data-slick-index="'+(nextSlide - 1)+'"] .buyers__slider__item').addClass('scale');
                $('.buyers__slider .slick-slide[data-slick-index="'+(currentSlide - 1)+'"] .buyers__slider__item').addClass('scale');
            } else if (diff == -1) {
                // свайп назад на 1 слайд
                $('.buyers__slider .slick-slide .buyers__slider__item').removeClass('scale');
                $('.buyers__slider .slick-slide[data-slick-index="'+(nextSlide - 1)+'"] .buyers__slider__item').addClass('scale');
                $('.buyers__slider .slick-slide[data-slick-index="'+currentSlide+'"] .buyers__slider__item').addClass('scale');
            }            
        }
    });
})