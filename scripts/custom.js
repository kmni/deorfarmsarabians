$(document).ready(function() {

// fancybox
// ====================================

$(".fancybox").fancybox({
    'transitionIn'  :   'elastic',
    'transitionOut' :   'elastic',
    'speedIn'       :   600,
    'speedOut'      :   200,
    'overlayShow'   :   false,
    'padding'       :   0
});

$(".fancybox-video").click(function() {
    $.fancybox({
        'transitionIn'  :   'elastic',
        'transitionOut' :   'elastic',
        'speedIn'       :   600,
        'speedOut'      :   200,
        'overlayShow'   :   false,
        'width'         :   640,
        'height'        :   385,
        'href'          :  this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
        'type'          :   'swf',
        'swf'           :   { 'wmode': 'transparent', 'allowfullscreen': 'true' }
    });
    return false;
});

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
});

// stallions
// ====================================

$(".stallions__item").hover(
    function(){
        var $this = $(this);
        $this.addClass("is-hover");
    },
    function(){
        $(".stallions__item").removeClass("is-hover");
    }
);


});