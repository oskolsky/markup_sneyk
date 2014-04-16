//****************************************************************************************************
//
// .. INIT
//
//****************************************************************************************************
//
// .. arcticModal
//
$.arcticmodal('setDefault', {
  overlay: {
    css: {
      backgroundColor: '#000',
      opacity: 0.66
    }
  },
  openEffect: {
    speed: 200
  },
  closeEffect: {
    speed: 200
  }
});

//
// .. Accounting
//
accounting.settings = {
  currency: {
    decimal: '.',
    thousand: ' ',
    precision: 2
  },
  number: {
    decimal : '.',
    thousand: ' ',
    precision: 0
  }
};



//****************************************************************************************************
//
// .. FUNCTIONS
//
//****************************************************************************************************
//
// .. Accounting
//
function formatNumber() {
  $('.format-number').each(function() {
    var
      number = parseInt($(this).text()),
      formatNumber = accounting.formatNumber(number);

    $(this).text(formatNumber);
  });
}

function formatMoney() {
  $('.format-money').each(function() {
    var c = accounting.settings.currency;

    if ($(this).hasClass('__rub')) {
      c.format = '%v';
    } else if ($(this).hasClass('__usd')) {
      c.symbol = '$';
      c.format = '%s%v';
    } else if ($(this).hasClass('__eur')) {
      c.symbol = '€';
      c.format = '%s%v';
    }

    var
      money = parseFloat($(this).text()),
      formatMoney = accounting.formatMoney(money);
    
    if ($(this).hasClass('__rub')) {
      $(this).text(formatMoney).append('&nbsp;<i class="fa fa-ruble"></i>');
    } else {
      $(this).text(formatMoney);
    }
  });
}



//****************************************************************************************************
//
// .. EVENTS
//
//****************************************************************************************************
//
// .. Open dialog
//
$(document).on('click touchstart', '[data-dialog="open"]', function() {
  if (window.matchMedia) {
    if (matchMedia('all and (min-width: ' + config.matchMedia.desktop.minWidth + 'px)').matches) {
      var url = $(this).data('url');
    
      $.arcticmodal('close');

      $.arcticmodal({
        type: 'ajax',
        url: url
      });
      
      return false;
    }
  }
});

//
// .. Close dialog
//
$(document).on('click touchstart', '[data-dialog="close"]', function() {
  if (window.matchMedia) {
    if (matchMedia('all and (min-width: ' + config.matchMedia.desktop.minWidth + 'px)').matches) {
      $.arcticmodal('close');

      return false;
    }
  }
});



//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {
  
  //****************************************************************************************************
  //
  // .. DOUBLE HOVER
  //
  //****************************************************************************************************
  doubleHover('a.double-hover', 'hover');



  //****************************************************************************************************
  //
  // .. FORMS
  // .. $('#checkbox').customForm() to init single element; $('body').customForm() to init all elements
  //
  //****************************************************************************************************
  $('.form').customForm();



  //****************************************************************************************************
  //
  // .. SCROLL TO
  //
  //****************************************************************************************************
  $('a[data-scroll="true"]').on('click touchstart', function() {
    var
      anchor = $(this).attr('href'),
      offset = $(this).data('offset') || 0,
      destination = $(anchor).offset().top - offset;
    
    $('html, body').animate({scrollTop: destination}, 500);
    
    return false;
  });



  //****************************************************************************************************
  //
  // .. ACCOUNTING
  //
  //****************************************************************************************************
  formatNumber();
  formatMoney();
  


  //****************************************************************************************************
  //
  // .. RESIZE
  //
  //****************************************************************************************************
  $(window).smartresize(function() {

    $('#header').stickyHeader();
    $('#footer').stickyFooter();

  });
  
});



//****************************************************************************************************
//
// .. LOAD
//
//****************************************************************************************************
$(window).load(function() {

  $('#header').stickyHeader();
  $('#footer').stickyFooter();

});