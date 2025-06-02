$(document).ready(function () {
  // Configuration for all accordion items
  const accordionConfig = [
    { collapseId: '#collapseOne', cardClass: '.collapse-one' },
    { collapseId: '#collapseTwo', cardClass: '.collapse-two' },
    { collapseId: '#collapseThree', cardClass: '.collapse-three' },
    { collapseId: '#collapseFour', cardClass: '.collapse-four' },
    { collapseId: '#collapseFive', cardClass: '.collapse-five' },
  ];

  // Variables to track hover state for each card
  const hoverStates = {};

  // Initialize hover states
  accordionConfig.forEach((config) => {
    hoverStates[config.collapseId] = {
      timeout: null,
      isHovering: false,
      isCollapsing: false,
    };
  });

  // Setup show/hide handlers for all accordion items
  accordionConfig.forEach((config) => {
    const { collapseId, cardClass } = config;

    // Show event handler
    $(collapseId).on('show.bs.collapse', function () {
      $(cardClass).css({
        transition: 'opacity 0.3s ease',
        opacity: '0',
      });
      $(cardClass).hide();
    //   setTimeout(function () {
    //   }, 500);
    });

    // Hide event handler
    $(collapseId).on('hide.bs.collapse', function () {
      $(cardClass).show().css({
        transition: 'opacity 0.3s ease',
        opacity: '0',
      });
      $(cardClass).css('opacity', '1');
    //   setTimeout(function () {
    //   }, 10);
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
  $('.card').each(function (index) {
    const $card = $(this);
    const config = accordionConfig[index];

    if (!config) return; // Skip if no config for this card

    const { collapseId } = config;
    const state = hoverStates[collapseId];

    // Only apply hover effects on desktop
    if (isDesktop()) {
      $card.hover(
        // Mouse enter
        function () {
          state.isHovering = true;
          clearTimeout(state.timeout);

          // Only open if not already open/opening
          if (
            !$(collapseId).hasClass('show') &&
            !$(collapseId).hasClass('collapsing')
          ) {
            state.timeout = setTimeout(function () {
              if (state.isHovering) {
                $(collapseId).collapse('show');
              }
            }, 200);
          }
        },
        // Mouse leave
        function () {
          state.isHovering = false;
          clearTimeout(state.timeout);

          // Only close if currently open and not collapsing
          if ($(collapseId).hasClass('show') && !state.isCollapsing) {
            state.timeout = setTimeout(function () {
              if (!state.isHovering) {
                $(collapseId).collapse('hide');
              }
            }, 300);
          }
        },
      );
    }

    // Button click handler works on all devices
    $card.find('[data-toggle="collapse"]').on('click', function (e) {
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
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    });

    // Add subtle hover effect on all cards
    $('.card').hover(
      function () {
        $(this).css({
          transform: 'translateY(-2px)',
          'box-shadow': '0 4px 15px rgba(0,0,0,0.1)',
        });
      },
      function () {
        $(this).css({
          transform: 'translateY(0)',
          'box-shadow': 'initial',
        });
      },
    );
  }

  // Handle device orientation/resize changes
  $(window).on('resize orientationchange', function () {
    // Remove hover effects if switching to mobile
    if (!isDesktop()) {
      $('.card').off('mouseenter mouseleave').css({
        transform: 'translateY(0)',
        'box-shadow': 'initial',
        transition: 'none',
      });

      // Clear any pending hover timeouts
      Object.keys(hoverStates).forEach((collapseId) => {
        const state = hoverStates[collapseId];
        clearTimeout(state.timeout);
        state.isHovering = false;
      });
    }
  });
});

$(document).ready(function () {
  const collapseId = '#collapseFive'; // example
  const $card1 = $('.collapse-five'); // card-1
  const $card2 = $('#collapseFive'); // card-2

  // Show event
  $(collapseId).on('show.bs.collapse', function () {
    $card1.addClass('fading-out');
    $card2.addClass('showing');
  });

  // Hide event
  $(collapseId).on('hide.bs.collapse', function () {
    $card1.removeClass('fading-out');
    $card2.removeClass('showing');
  });
});
