$(function() {
  $('.flex-head-LR').hover(function() {
    $('#flex-head-C').css('transform', 'rotateY(180deg)');
        }, function() {
    $('#flex-head-C').css('transform', '');
  });
});