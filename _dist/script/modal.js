$(document).ready(function(){
  $('#click-me').on('click', function(){
    $('#red-modal').toggleID('open');
  });
  $('.close').on('click', function(){
    $('#red-modal').removeClass('open');
  });
});
