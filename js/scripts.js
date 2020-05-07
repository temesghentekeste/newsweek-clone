$(document).ready(function () {
  $('.navbar-toggler').on('click', function () {
    console.log('Clicked');
    $('.mobileMenu').toggleClass('open');
  });



  $(window).scroll(function () {
    let position = $(this).scrollTop();
    let $navbarToggler = $('.navbar-toggler');
    let $logoContainer = $('.main-logo-container');
    let $mainLogo = $('.main-logo');
    let $weatherContainer = $('.weather');

    console.log(position);
    console.log($navbarToggler)
    console.log($logoContainer)

    if(position >= 300){
      $('.red-nav').addClass('top-nav-onScroll');
      $('.red-nav').removeClass('top-nav sticky-top');
      $('.top-nav-container').removeClass('container');
      $navbarToggler.css({'display': 'block'});
      $logoContainer.css({'order': '-1', 'height': '50px'});
      $weatherContainer.css({'margin-right': 'auto'});
      $mainLogo.css({'height': '35px'})
      
    }else{
      $('.red-nav').removeClass('top-nav-onScroll')
      $('.top-nav-container').addClass('container');
      $navbarToggler.css({'display': 'none'});
      $logoContainer.css({'order': '0', 'padding-bottom': '4rem'});
      $weatherContainer.css({'margin-right': 'inherit'});
      $mainLogo.css({'height': '60px'})

    }
    if (position >= 1400) {
      $('.more-stories').addClass('stick-more-stories');
    } else {
      $('.more-stories').removeClass('stick-more-stories');
    }
  });
});
