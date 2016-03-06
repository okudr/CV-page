$(function() {
  $('.flex-head-LR').hover(function() {
    $('#flex-head-C').css('background', 'none');
        }, function() {
    $('#flex-head-C').css('background', '');
  });
});

function showFunction() {
    var x = document.getElementsByClassName("flex-body-BOX-LCR");
    var i;
    for (i = 0; i < x.length; i++) { x[i].style.display="flex"; }
}