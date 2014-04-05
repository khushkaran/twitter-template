$(function () {
  $('header a').hover(function(){
    var newSrc = $(this).children().data("hover-src");
    $(this).children().attr("src", newSrc);
    var anchorID = "#" + $(this).attr("id") + "_slider";
    $(anchorID).fadeIn();
  },function(){
    var newSrc = $(this).children().data("src");
    $(this).children().attr("src", newSrc);
    var anchorID = "#" + $(this).attr("id") + "_slider";
    $(anchorID).fadeOut();
  });

  $('#search_box').focus(function(){
    $(this).animate({'background-color':'#66757F'}, 200);
    $(this).animate({'color':'#FFFFFF'});
  });

  $('#search_box').blur(function(){
    $(this).animate({'background-color':'#A3ACB2'}, 200);
    $(this).animate({'color':'#D7DBDD'});
  });
});