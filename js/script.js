
   $(document).ready(function(){
      $('.slider').bxSlider({
       mode: 'horizontal',
       auto: true,
        });

     if ($(window).width() > 960)
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.boarder',
                    'properties': {
                        'x': {
                            'left': {
                                'initial':45.8,
                                'multiplier': 0.0008,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -330,
                                'multiplier': 0.008,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                },    
            ]
        });
    };   
    
$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        $('.menu__block_layer').removeClass("menu__block_active")
        $('body').removeClass("overflow-h")
    }
    return false; // выключаем стандартное действие
});
        
     $(".menu__btn").click(function(e) {
            e.preventDefault();
        $(this).toggleClass("menu__btn_active")
    });
    $(".menu__btn").click(function(e) {
        e.preventDefault();
        $('.menu__block_layer').toggleClass("menu__block_active")
        $('body').toggleClass("overflow-h")
    });

    $('.menu__block_layer').click(function() {
        $('.menu__block_layer').toggleClass("menu__block_active")
        $('.menu__btn').toggleClass("menu__btn_active")
        $('body').removeClass("overflow-h")
    })
const wow = new WOW(
  {
    boxClass: 'wow', 
    animateClass: 'animated',
    offset: 50, 
    mobile: true,
    live: true,
    callback: function(box){

    },
    scrollContainer: null
  }
);
wow.init();

});
  