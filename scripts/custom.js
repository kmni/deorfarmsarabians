$(document).ready(function() {

// slider na titulni strance
// ====================================

if( $(".slider").length > 0 ){
    $('.slider').jcarousel({
        wrap: 'circular'
    });

    //.jcarouselAutoscroll({ interval: 3000, target: '+=1', autostart: true });

    $('.slider__arrow-left')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.slider__arrow-right')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });
}

// slider v seznamu koni
// ====================================

// slider na titulni strance
// ====================================

if( $(".horse-gallery").length > 0 ){
    $('.horse-gallery').jcarousel({
        wrap: 'circular'
    });

    //.jcarouselAutoscroll({ interval: 3000, target: '+=1', autostart: true });

    $('.horse-gallery__arrow-left')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.horse-gallery__arrow-right')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });
}

// seznam koni
// ====================================

$(".horses__item").hover(
    function(){
        var $this = $(this);
        $this.addClass("is-hover");
    },
    function(){
        $(".horses__item").removeClass("is-hover");
    }
);

$(".horses__item").click(function(){
    var url = $(this).find(".horses__item__link").attr("href");
    window.location.href = url;
})

});