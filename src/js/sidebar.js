$(document).ready(function() {
    $('.sidebar.close').hover(function() {
      $(this).removeClass('close');
    }, function() {
      $(this).addClass('close');
    });
  });