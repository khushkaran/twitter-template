$(function () {

  $('header a').hover(function(){
    var newSrc = $(this).children().data("hover-src");
    $(this).children().attr("src", newSrc);
  },function(){
    var newSrc = $(this).children().data("src");
    $(this).children().attr("src", newSrc);
  });

  $('#search_box').focus(function(){
    $(this).css('background-color','#66757F')
    $(this).css('color','#A3A9AD')
  });
  $('#search_box').blur(function(){
    $(this).css('background-color','#A3ACB2')
    $(this).css('color','#D7DBDD')
  });
});