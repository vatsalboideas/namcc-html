$(document).ready(function() {
    // Listen for Bootstrap collapse events on the accordion
    $('#collapseOne').on('show.bs.collapse', function () {
        // Hide card-1 when card-2 is about to show (jQuery Slim compatible)
        $('.collapse-one').css({
            'transition': 'opacity 0.3s ease',
            'opacity': '0'
        });
        setTimeout(function() {
            $('.collapse-one').hide();
        }, 100);
    });
    
    $('#collapseOne').on('hide.bs.collapse', function () {
        // Show card-1 when card-2 is about to hide (jQuery Slim compatible)
        $('.collapse-one').show().css({
            'transition': 'opacity 0.3s ease',
            'opacity': '0'
        });
        setTimeout(function() {
            $('.collapse-one').css('opacity', '1');
        }, 10);
    });
    $('#collapseTwo').on('show.bs.collapse', function () {
        // Hide card-1 when card-2 is about to show (jQuery Slim compatible)
        $('.collapse-two').css({
            'transition': 'opacity 0.3s ease',
            'opacity': '0'
        });
        setTimeout(function() {
            $('.collapse-two').hide();
        }, 100);
    });
    
    $('#collapseTwo').on('hide.bs.collapse', function () {
        // Show collapse-two when card-2 is about to hide (jQuery Slim compatible)
        $('.collapse-two').show().css({
            'transition': 'opacity 0.3s ease',
            'opacity': '0'
        });
        setTimeout(function() {
            $('.collapse-two').css('opacity', '1');
        }, 10);
    });
    $('#collapseThree').on('show.bs.collapse', function () {
        // Hide card-1 when card-2 is about to show (jQuery Slim compatible)
        $('.collapse-three').css({
            'transition': 'opacity 0.3s ease',
            'opacity': '0'
        });
        setTimeout(function() {
            $('.collapse-three').hide();
        }, 100);
    });
    
    $('#collapseThree').on('hide.bs.collapse', function () {
        // Show collapse-three when card-2 is about to hide (jQuery Slim compatible)
        $('.collapse-three').show().css({
            'transition': 'opacity 0.3s ease',
            'opacity': '0'
        });
        setTimeout(function() {
            $('.collapse-three').css('opacity', '1');
        }, 10);
    });
    $('#collapseFour').on('show.bs.collapse', function () {
        // Hide card-1 when card-2 is about to show (jQuery Slim compatible)
        $('.collapse-four').css({
            'transition': 'opacity 0.3s ease',
            'opacity': '0'
        });
        setTimeout(function() {
            $('.collapse-four').hide();
        }, 100);
    });
    
    $('#collapseFour').on('hide.bs.collapse', function () {
        // Show collapse-four when card-2 is about to hide (jQuery Slim compatible)
        $('.collapse-four').show().css({
            'transition': 'opacity 0.3s ease',
            'opacity': '0'
        });
        setTimeout(function() {
            $('.collapse-four').css('opacity', '1');
        }, 10);
    });
});
