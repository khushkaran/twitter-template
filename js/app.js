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

  $('#dialog #option-tweet').hover(function(){
    if ($('#dialog textarea').val().length > 0) {
      $('#dialog #option-tweet').css({'background-image':'url(images/options/option-tweet-hover.png)'});
    }
  },function(){
    if ($('#dialog textarea').val().length > 0) {
      $('#dialog #option-tweet').css({'background-image':'url(images/options/option-tweet-active.png)'});
    }
  });

  $('#compose-tweet textarea, #dialog textarea').keyup(function() {
    var charCount = $('#compose-tweet textarea').val().length;
    var charCountDialog = $('#dialog textarea').val().length;
    $('#compose-tweet #char-count').html(140 - charCount);
    $('#dialog #char-count').html(140 - charCountDialog);
    if ($('#compose-tweet textarea').val().length > 0) {
      $('#compose-tweet #option-tweet').css({'background-image':'url(images/options/option-tweet-active.png)'});
    }else{
      $('#compose-tweet #option-tweet').css({'background-image':'url(images/options/option-tweet.png)'});
    }
    if ($('#dialog textarea').val().length > 0) {
      $('#dialog #option-tweet').css({'background-image':'url(images/options/option-tweet-active.png)'});
    }else{
      $('#dialog #option-tweet').css({'background-image':'url(images/options/option-tweet.png)'});
    }
  });
}

function addTweets(start,end){
  $.getJSON( "js/tweets.json", function(tweets) {
    for ( var i = start; i < end; i++ ) {
      var newTweet = Mustache.render($('#tweet-template').html(), tweets[i]);
      $(newTweet).appendTo('#all-tweets').slideDown();
    }
  });
}

function scrollToBottom(){
  $(window).scroll(function() {   
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      setTimeout(function() {
        random = Math.ceil(Math.random() * 10)
        addTweets(random,12);
      }, 1000);
    }
  });
}

function tweetComposeDialog(){
  $('#compose-tweet-button').click(function(event){
    event.preventDefault();
    $("#dialog").dialog({
      width: 520,
      height: 214,
      resizable: false,
      modal: true,
      show: {effect: "fade",duration: 150},
      hide: {effect: "fade",duration: 150},
      dialogClass: 'tweet-dialog',
    });
  })
}

$(function () {
  headerLinkHover();
  searchBoxAnimation();
  tweetBoxAnimation();
  addTweets(0,12);
  scrollToBottom();
  tweetComposeDialog();
});