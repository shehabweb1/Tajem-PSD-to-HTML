$(function(){
    
  //Banner Slick Start
  $('.banner_slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
    });
  //Banner Slick End

  //Venobox Start
  new VenoBox({
    selector: '.my-video-links',
  });
  //Venobox End

  //Quote Slick Start
  $('.quote_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });
  //Quote Slick End

  //MixitUp Slick Start
  var containerEl = document.querySelector('.filter_plug');

  var mixer = mixitup(containerEl);
  //MixitUp Slick End

  //Stykey Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky_header');
    }
    else {
         $('.navbar').removeClass('sticky_header');
    }
    });  
  //Stykey Header  

  //Back-to-top button
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
  });
  //Back-to-top button

  //Animate the scroll to top
  $('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
  });
 //Animate the scroll to top

});