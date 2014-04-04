var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('hover-src');
    $this.data('hover-src', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function () {
  // $('#left_menu a').hover(sourceSwap, sourceSwap);
  $('#left_menu a').hover(function() {
    var $this = $(this).find("img")[0];
    var newSource = $this.data('hover-src');
    $this.data('hover-src', $this.attr('src'));
    $this.attr('src', newSource);
  });
});