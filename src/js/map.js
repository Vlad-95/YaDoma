$(document).ready(function() {
    //открытие всплывашки
    $('.modal-toggle').click(function() {
        $('body').addClass('no-scroll');
        $('.overlay').fadeIn();
        $('.map__modal').fadeIn();
    });

    //закрытие всплывашки
    $('.map__modal__close').click(function() {
        $('body').removeClass('no-scroll');
        $('.overlay').fadeOut();
        $('.map__modal').fadeOut();
    });
    //табы на всплывашке
    $('.map__modal__tabs__item').click(function() {
        $(this).addClass('active');
        $('.map__modal__tabs__item').not($(this)).removeClass('active');
        
        if ($(this).hasClass('map__modal__tabs__item_metro')) {
            $('.map__modal__tabs__content').removeClass('active');
            $('.map__modal__tabs__content_metro').addClass('active');
        }
        if ($(this).hasClass('map__modal__tabs__item_district')) {
            $('.map__modal__tabs__content').removeClass('active');
            $('.map__modal__tabs__content_district').addClass('active');
        }
    });

    $(document).on('click', function(evt) {
        let target = evt.target;

        // выпадашка селектов
        if ($(target).hasClass('map__modal__select__current')) {
            $('.map__modal__select__current').not($(target)).next().fadeOut();
            $(target).next().fadeToggle();
            
        } else {
            $('.map__modal__select__dropdown').fadeOut();
        }
    });

    // клик по варианту селекта
    $('.map__modal__select__dropdown__item').click(function() {
        // показываем галочку
        $(this).addClass('active').siblings().removeClass('active');

        // берем дата-атрибут кликнутого элемента
        let itemValue = $(this).attr('data-value');
        // обращаемся к ближайшему скрытому инпуту
        let selectInput = $(this).closest('.map__modal__select').find('.map__modal__selelct__input');
        // обращаемся к текущему элементу селекта
        let selectCurrent = $(this).closest('.map__modal__select').find('.map__modal__select__current');
        
        // меняем значение в селекте
        selectCurrent.html(itemValue);
        // меняем значение в инпуте
        selectInput.val(itemValue);        
    });
});