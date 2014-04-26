//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {

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
      items : $carousel.data('items')
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

});