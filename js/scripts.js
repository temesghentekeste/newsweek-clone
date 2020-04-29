$(document).ready(function () {
  $('.navbar-toggler').on('click', function () {
    console.log('Clicked');
    $('.mobileMenu').toggleClass('open');
  });
});
