//****************************************************************************************************
//
// .. EVENTS
//
//****************************************************************************************************
//
// .. Set of count product (form element number)
//
$(document).on('click touchstart', '.form-el.__number .number_control', function() {
  var 
    $parent = $(this).closest('.form-el.__number'),
    $input  = $parent.find('input[type="hidden"]'),
    value   = $input.val();

  $(this).hasClass('__up') ? value++ : value--;
  
  if (value > 0) {
    $input.val(value);
    $parent.find('.number_control.__count').html(value);
    $parent.closest('.product').find('.form-el.__major.__basket span').html(value);
  }

  return false;
});



//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {

  //
  // .. Tabs init
  //
  $('.tabs').tabs({
    activate: function(event, ui) {
      $(this).find('.product').resizeToMaxHeight();
    }
  });

  //
  // .. OWL Carousel init
  //
  $('.carousel').each(function() {

    var 
      $carousel = $(this),
      $section  = $carousel.closest('.section'),
      $nav  = $section.find('.carousel-nav'),
      $prev = $nav.find('.carousel-nav_i.__prev'),
      $next = $nav.find('.carousel-nav_i.__next');

    $carousel.owlCarousel({
      responsive: false,
      items : $carousel.data('items'),
      transitionStyle: $carousel.data('transition') || 'fade'
    });

    $prev.on('touchstart click', function() {
      $carousel.trigger('owl.prev');
      return false;
    });

    $next.on('touchstart click', function() {
      $carousel.trigger('owl.next');
      return false;
    });

    var owl = $carousel.data('owlCarousel');
    
    if (owl.itemsAmount <= $carousel.data('items')) {
      $nav.hide();
    }

  });

  //
  // .. UI Slider range
  //
  $('.price-range').each(function() {
    
    var _this = this;
    
    var 
      $range = $(this).find('.price-range_slider'),
      $rangeMin = $(this).find('.price-range_min'),
      $rangeMax = $(this).find('.price-range_max');
    
    var
      rangeMin = $(this).data('min'),
      rangeMax = $(this).data('max');

    $range.slider({
      range: true,
      min: rangeMin,
      max: rangeMax,
      values: [rangeMin, rangeMax],
      slide: function( event, ui ) {
        $rangeMin.val(ui.values[0]);
        $rangeMax.val(ui.values[1]);
      }
    });
    $rangeMin.val($range.slider('values', 0));
    $rangeMax.val($range.slider('values', 1));

    $rangeMin.on('change', function() {
      var
        rangeMin = $(this).val(),
        rangeMax = $range.slider('values', 1);

      $range.slider({values: [rangeMin, rangeMax]});
    })

    $rangeMax.on('change', function() {
      var
        rangeMin = $range.slider('values', 0),
        rangeMax = $(this).val();

      $range.slider({values: [rangeMin, rangeMax]});
    })
  });


  //****************************************************************************************************
  //
  // .. SCROLL
  //
  //****************************************************************************************************
  $(window).scroll(function() {});



  //****************************************************************************************************
  //
  // .. RESIZE
  //
  //****************************************************************************************************
  $(window).smartresize(function() {});
  
});



//****************************************************************************************************
//
// .. LOAD
//
//****************************************************************************************************
$(window).load(function() {

  //
  // ..Set height on product block
  //
  $('.products').each(function() {
    $(this).find('.product').resizeToMaxHeight();
  });

  //
  // .. Resize to max height
  //
  $('.js-resize-to-max-height').resizeToMaxHeight();

});