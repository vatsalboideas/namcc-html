$(document).ready(function() {
    // Listen for Bootstrap collapse events on the accordion
    $('#collapseOne').on('show.bs.collapse', function () {
        // Hide card-1 when card-2 is about to show (jQuery Slim compatible)
        $('.card-1').css({
            'transition': 'opacity 0.3s ease',
            'opacity': '0'
        });
        setTimeout(function() {
            $('.card-1').hide();
        }, 100);
    });
    
    $('#collapseOne').on('hide.bs.collapse', function () {
        // Show card-1 when card-2 is about to hide (jQuery Slim compatible)
        $('.card-1').show().css({
            'transition': 'opacity 0.3s ease',
            'opacity': '0'
        });
        setTimeout(function() {
            $('.card-1').css('opacity', '1');
        }, 10);
    });
});
