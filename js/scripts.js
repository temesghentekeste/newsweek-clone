$(document).ready(function () {
  $(window).scroll(function () {
    let position = $(this).scrollTop();

    if (position >= 1400) {
      $('.more-stories').addClass('stick-more-stories');
    } else {
      $('.more-stories').removeClass('stick-more-stories');
    }
  });
});
