//****************************************************************************************************
//
// .. EVENTS
//
//****************************************************************************************************
//
// .. Close alert
//
$(document).on('click touchstart', '.js-c-alert_close', function() {
  $(this).closest('.c-alert').fadeOut(500, function() {
    $(this).remove();
  });

  return false;
});