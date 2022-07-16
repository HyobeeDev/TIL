// fixed sidebar


$(function() {
  let top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
  let footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));

  let maxY = footTop - $('#sidebar').outerHeight();

  $(window).scroll(function(evt) {
      let y = $(this).scrollTop();
      if (y >= top - $('#fixedHeader').height()) {
          if (y < maxY) {
              $('#sidebar').addClass('fixed').removeAttr('style');
          } else {
              $('#sidebar').removeClass('fixed').css({
                  position: 'absolute',
                  top: (maxY - top) + 'px'
              });
          }
      } else {
          $('#sidebar').removeClass('fixed');
      }
  });
});