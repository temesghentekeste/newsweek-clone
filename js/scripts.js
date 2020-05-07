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
    let $date = $('.date');

    console.log(position);
    console.log($navbarToggler)
    console.log($logoContainer)

    if(position >= 300){
      $('.red-nav').addClass('top-nav-onScroll');
      $('.red-nav').removeClass('top-nav sticky-top');
      $('.top-nav-container').removeClass('container');
      $navbarToggler.css({'display': 'block'});
      $logoContainer.css({'order': '-1', 'height': '40px','width':'132px', 'margin-right': '1rem'});
      $mainLogo.css({'height': '38px', 'margin-top':'0'});
      $weatherContainer.css({'margin-right': 'auto', 'padding-top': '0.5rem'});
      $date.css({'display':'none'});
      
    }else{
      $('.red-nav').removeClass('top-nav-onScroll')
      $('.top-nav-container').addClass('container');
      $navbarToggler.css({'display': 'none'});
      $logoContainer.css({'order': '0', 'height': '90px','width':'324px', 'margin-right': 'inherit'});
      $mainLogo.css({'height': '65px', 'margin-top':'1rem'});
      $weatherContainer.css({'margin-right': 'inherit'});
      // $mainLogo.css({'height': '60px', 'padding-bottom': '3rem'})
      // $('.red-nav').css({'height': '95px'})

    }
    if (position >= 1400) {
      $('.more-stories').addClass('stick-more-stories');
    } else {
      $('.more-stories').removeClass('stick-more-stories');
    }
  });
});
