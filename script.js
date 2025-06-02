// $(document).ready(function() {
//     // Listen for Bootstrap collapse events on the accordion
//     $('#collapseOne').on('show.bs.collapse', function () {
//         // Hide card-1 when card-2 is about to show (jQuery Slim compatible)
//         $('.collapse-one').css({
//             'transition': 'opacity 0.3s ease',
//             'opacity': '0'
//         });
//         setTimeout(function() {
//             $('.collapse-one').hide();
//         }, 100);
//     });
    
//     $('#collapseOne').on('hide.bs.collapse', function () {
//         // Show card-1 when card-2 is about to hide (jQuery Slim compatible)
//         $('.collapse-one').show().css({
//             'transition': 'opacity 0.3s ease',
//             'opacity': '0'
//         });
//         setTimeout(function() {
//             $('.collapse-one').css('opacity', '1');
//         }, 10);
//     });
//     $('#collapseTwo').on('show.bs.collapse', function () {
//         // Hide card-1 when card-2 is about to show (jQuery Slim compatible)
//         $('.collapse-two').css({
//             'transition': 'opacity 0.3s ease',
//             'opacity': '0'
//         });
//         setTimeout(function() {
//             $('.collapse-two').hide();
//         }, 100);
//     });
    
//     $('#collapseTwo').on('hide.bs.collapse', function () {
//         // Show collapse-two when card-2 is about to hide (jQuery Slim compatible)
//         $('.collapse-two').show().css({
//             'transition': 'opacity 0.3s ease',
//             'opacity': '0'
//         });
//         setTimeout(function() {
//             $('.collapse-two').css('opacity', '1');
//         }, 10);
//     });
//     $('#collapseThree').on('show.bs.collapse', function () {
//         // Hide card-1 when card-2 is about to show (jQuery Slim compatible)
//         $('.collapse-three').css({
//             'transition': 'opacity 0.3s ease',
//             'opacity': '0'
//         });
//         setTimeout(function() {
//             $('.collapse-three').hide();
//         }, 100);
//     });
    
//     $('#collapseThree').on('hide.bs.collapse', function () {
//         // Show collapse-three when card-2 is about to hide (jQuery Slim compatible)
//         $('.collapse-three').show().css({
//             'transition': 'opacity 0.3s ease',
//             'opacity': '0'
//         });
//         setTimeout(function() {
//             $('.collapse-three').css('opacity', '1');
//         }, 10);
//     });
//     // $('#collapseFour').on('show.bs.collapse', function () {
//     //     // Hide card-1 when card-2 is about to show (jQuery Slim compatible)
//     //     $('.collapse-four').css({
//     //         'transition': 'opacity 0.3s ease',
//     //         'opacity': '0'
//     //     });
//     //     setTimeout(function() {
//     //         $('.collapse-four').hide();
//     //     }, 100);
//     // });
    
//     // $('#collapseFour').on('hide.bs.collapse', function () {
//     //     // Show collapse-four when card-2 is about to hide (jQuery Slim compatible)
//     //     $('.collapse-four').show().css({
//     //         'transition': 'opacity 0.3s ease',
//     //         'opacity': '0'
//     //     });
//     //     setTimeout(function() {
//     //         $('.collapse-four').css('opacity', '1');
//     //     }, 10);
//     // });
//     // Variables to track state and prevent conflicts
// let hoverTimeout;
// let isHovering = false;
// let isCollapsing = false;

// // Original show/hide handlers for card transitions
// $('#collapseFour').on('show.bs.collapse', function () {
//     // Hide card-1 when card-2 is about to show
//     $('.collapse-four').css({
//         'transition': 'opacity 0.3s ease',
//         'opacity': '0'
//     });
//     setTimeout(function() {
//         $('.collapse-four').hide();
//     }, 100);
// });

// $('#collapseFour').on('hide.bs.collapse', function () {
//     // Show collapse-four when card-2 is about to hide
//     $('.collapse-four').show().css({
//         'transition': 'opacity 0.3s ease',
//         'opacity': '0'
//     });
//     setTimeout(function() {
//         $('.collapse-four').css('opacity', '1');
//     }, 10);
// });

// // Hover functionality
// $('.card').hover(
//     // Mouse enter
//     function() {
//         isHovering = true;
//         clearTimeout(hoverTimeout);
        
//         // Only open if not already open/opening
//         if (!$('#collapseFour').hasClass('show') && !$('#collapseFour').hasClass('collapsing')) {
//             hoverTimeout = setTimeout(function() {
//                 if (isHovering) {
//                     $('#collapseFour').collapse('show');
//                 }
//             }, 200); // Small delay to prevent accidental triggers
//         }
//     },
//     // Mouse leave
//     function() {
//         isHovering = false;
//         clearTimeout(hoverTimeout);
        
//         // Only close if currently open and not in the middle of collapsing
//         if ($('#collapseFour').hasClass('show') && !isCollapsing) {
//             hoverTimeout = setTimeout(function() {
//                 if (!isHovering) {
//                     $('#collapseFour').collapse('hide');
//                 }
//             }, 300); // Delay before closing to allow user to move mouse back
//         }
//     }
// );

// // Track collapsing state to prevent conflicts
// $('#collapseFour').on('hide.bs.collapse', function () {
//     isCollapsing = true;
// });

// $('#collapseFour').on('hidden.bs.collapse', function () {
//     isCollapsing = false;
// });

// // Enhanced button click handler (optional - prevents double action)
// $('[data-toggle="collapse"][data-target="#collapseFour"]').on('click', function(e) {
//     // Clear any pending hover actions
//     clearTimeout(hoverTimeout);
//     isHovering = false;
    
//     // Let Bootstrap handle the toggle normally
//     // This will work alongside the hover functionality
// });

// // Optional: Add smooth hover transition for better UX
// $('.card').css({
//     'transition': 'transform 0.2s ease, box-shadow 0.2s ease'
// });

// // Optional: Add subtle hover effect on the card itself
// $('.card').hover(
//     function() {
//         $(this).css({
//             'transform': 'translateY(-2px)',
//             'box-shadow': '0 4px 15px rgba(0,0,0,0.1)'
//         });
//     },
//     function() {
//         $(this).css({
//             'transform': 'translateY(0)',
//             'box-shadow': 'initial'
//         });
//     }
// );
// });
$(document).ready(function() {
    // Configuration for all accordion items
    const accordionConfig = [
        { collapseId: '#collapseOne', cardClass: '.collapse-one' },
        { collapseId: '#collapseTwo', cardClass: '.collapse-two' },
        { collapseId: '#collapseThree', cardClass: '.collapse-three' },
        { collapseId: '#collapseFour', cardClass: '.collapse-four' }
    ];

    // Variables to track hover state for each card
    const hoverStates = {};
    
    // Initialize hover states
    accordionConfig.forEach(config => {
        hoverStates[config.collapseId] = {
            timeout: null,
            isHovering: false,
            isCollapsing: false
        };
    });

    // Setup show/hide handlers for all accordion items
    accordionConfig.forEach(config => {
        const { collapseId, cardClass } = config;
        
        // Show event handler
        $(collapseId).on('show.bs.collapse', function () {
            $(cardClass).css({
                'transition': 'opacity 0.3s ease',
                'opacity': '0'
            });
            setTimeout(function() {
                $(cardClass).hide();
            }, 100);
        });
        
        // Hide event handler
        $(collapseId).on('hide.bs.collapse', function () {
            $(cardClass).show().css({
                'transition': 'opacity 0.3s ease',
                'opacity': '0'
            });
            setTimeout(function() {
                $(cardClass).css('opacity', '1');
            }, 10);
        });

        // Track collapsing state
        $(collapseId).on('hide.bs.collapse', function () {
            hoverStates[collapseId].isCollapsing = true;
        });

        $(collapseId).on('hidden.bs.collapse', function () {
            hoverStates[collapseId].isCollapsing = false;
        });
    });

    // Function to check if device supports hover (desktop)
    function isDesktop() {
        return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    }

    // Setup hover functionality for each card (desktop only)
    $('.card').each(function(index) {
        const $card = $(this);
        const config = accordionConfig[index];
        
        if (!config) return; // Skip if no config for this card
        
        const { collapseId } = config;
        const state = hoverStates[collapseId];

        // Only apply hover effects on desktop
        if (isDesktop()) {
            $card.hover(
                // Mouse enter
                function() {
                    state.isHovering = true;
                    clearTimeout(state.timeout);
                    
                    // Only open if not already open/opening
                    if (!$(collapseId).hasClass('show') && !$(collapseId).hasClass('collapsing')) {
                        state.timeout = setTimeout(function() {
                            if (state.isHovering) {
                                $(collapseId).collapse('show');
                            }
                        }, 200);
                    }
                },
                // Mouse leave
                function() {
                    state.isHovering = false;
                    clearTimeout(state.timeout);
                    
                    // Only close if currently open and not collapsing
                    if ($(collapseId).hasClass('show') && !state.isCollapsing) {
                        state.timeout = setTimeout(function() {
                            if (!state.isHovering) {
                                $(collapseId).collapse('hide');
                            }
                        }, 300);
                    }
                }
            );
        }

        // Button click handler works on all devices
        $card.find('[data-toggle="collapse"]').on('click', function(e) {
            if (isDesktop()) {
                clearTimeout(state.timeout);
                state.isHovering = false;
            }
        });
    });

    // Optional: Add visual hover effects only on desktop
    if (isDesktop()) {
        // Add smooth hover transitions for all cards
        $('.card').css({
            'transition': 'transform 0.2s ease, box-shadow 0.2s ease'
        });

        // Add subtle hover effect on all cards
        $('.card').hover(
            function() {
                $(this).css({
                    'transform': 'translateY(-2px)',
                    'box-shadow': '0 4px 15px rgba(0,0,0,0.1)'
                });
            },
            function() {
                $(this).css({
                    'transform': 'translateY(0)',
                    'box-shadow': 'initial'
                });
            }
        );
    }

    // Handle device orientation/resize changes
    $(window).on('resize orientationchange', function() {
        // Remove hover effects if switching to mobile
        if (!isDesktop()) {
            $('.card').off('mouseenter mouseleave').css({
                'transform': 'translateY(0)',
                'box-shadow': 'initial',
                'transition': 'none'
            });
            
            // Clear any pending hover timeouts
            Object.keys(hoverStates).forEach(collapseId => {
                const state = hoverStates[collapseId];
                clearTimeout(state.timeout);
                state.isHovering = false;
            });
        }
    });
});