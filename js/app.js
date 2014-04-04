$(function () {

  $('header a').hover(function(){
    var newSrc = $(this).children().data("hover-src");
    $(this).children().attr("src", newSrc);
  },function(){
    var newSrc = $(this).children().data("src");
    $(this).children().attr("src", newSrc);
  });
});