function headerLinkHover(){
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
}

function searchBoxAnimation(){
  $('#search_box').focus(function(){
    $(this).animate({'background-color':'#66757F'}, 200);
    $(this).animate({'color':'#FFFFFF'});
  });

  $('#search_box').blur(function(){
    $(this).animate({'background-color':'#A3ACB2'}, 200);
    $(this).animate({'color':'#D7DBDD'});
  });
}

function tweetBoxAnimation(){
  $('#compose-tweet textarea').focus(function(){
    $(this).css({height:'93px'});
    $(this).css({border:'2px solid #cfbaa9'});
    $(this).css({color:'#000'});
    $(this).attr("placeholder", "");
    $('#user').css({height: '370px'});
    $('#compose-tweet #compose-options div').css({opacity: 1});
  });

  $('#compose-tweet textarea').blur(function(){
    if ($('#compose-tweet textarea').val().length === 0) {
      $(this).css({height:'18px'});
      $(this).css({border:'2px solid #EAE0D9'});
      $(this).css({color:'#D7DBDD'});
      $(this).attr("placeholder", "Compose new Tweet...");
      $('#user').css({height: '248px'});
      $('#compose-tweet #compose-options div').css({opacity: 0});
    };
  });

  $('#compose-tweet #option-tweet').hover(function(){
    if ($('#compose-tweet textarea').val().length > 0) {
      $('#compose-tweet #option-tweet').css({'background-image':'url(images/options/option-tweet-hover.png)'});
    }
  },function(){
    if ($('#compose-tweet textarea').val().length > 0) {
      $('#compose-tweet #option-tweet').css({'background-image':'url(images/options/option-tweet-active.png)'});
    }
  });

  $('#compose-tweet textarea').keyup(function() {
    var charCount = $('#compose-tweet textarea').val().length;
    $('#compose-tweet #char-count').html(140 - charCount);
    if ($('#compose-tweet textarea').val().length > 0) {
      $('#compose-tweet #option-tweet').css({'background-image':'url(images/options/option-tweet-active.png)'});
    }else{
      $('#compose-tweet #option-tweet').css({'background-image':'url(images/options/option-tweet.png)'});
    }
  });
}

function addTweets(){
  $.getJSON( "js/tweets.json", function(tweets) {
    for ( var i = 0; i < 6; i++ ) {
      var newTweet = Mustache.render($('#tweet-template').html(), tweets[i]);
      $(newTweet).appendTo('#tweets-container').slideDown();
    }
  });
}

$(function () {
  headerLinkHover();
  searchBoxAnimation();
  tweetBoxAnimation();
  addTweets();
});