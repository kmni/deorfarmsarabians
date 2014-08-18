$(document).ready(function() {

    $('.slider').jcarousel({
        wrap: 'circular'
    });
    /*
    .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        })
    */


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
});