define(["jquery"], function($) {
// ===========================================================
// SCROLL
// ===========================================================

//  var height = $(window).scrollTop();
//
//  if(height <= 150 ) {
//    $('header').removeClass('back');
//  }
//
//  $(window).scroll(function() {
//      var height = $(window).scrollTop();
//
//      if(height < 150 ) {
//            $('header').removeClass('back');
//      } else {
//           $('header').addClass('back');
//      }
//  });


// ===========================================================
// END SCROLL
// ===========================================================


// ===========================================================
// JavaScript
// ===========================================================

//  document.getSelection()
//
//   document.querySelector('#' + id).style.display = "block";
//         item.classList.add('active');


    $(document).ready(function() {


    $('.blox_block').click(function(events){

      events.preventDefault();
      $(this).find('.cont').toggleClass('open');
      $(this).find('.info').toggleClass('open');


    });

      $('.ip_employees_6 .list li').click(function(){

        var activeTab = $(this).data('set');

        $(".ip_employees_6 .list li").removeClass('active');

        $("[data-set=" + activeTab + "]").addClass('active');

        $(".ip_employees_6 .block li").removeClass('active');

        $(".ip_employees_6 .block li:nth-child(" + activeTab + ")").addClass('active');
    });

  });


// ===========================================================
// JavaScript
// ===========================================================

// ===========================================================
// Pixel Perfect MODUL
// ===========================================================

//    $(document).ready(function() {
//                $('body').each(function() {
//                    var body = $(this);
//                    var img_url = $(this).data('img');
//                    var img = new Image();
//                    img.src = img_url;
//                    img.onload = function() {
//                        var ppbox = '<div id="images__back" style="background: url(' + img_url + ') no-repeat 50% 0%;top:0;width:100%;position:absolute;z-index:1000;opacity:.9;height:' + img.height + 'px"></div>';
//                        body.append(ppbox);
//                    };
//                });
//
//        $('html').click(function() {
//            $('#images__back').toggleClass('front__end');
//        });
//    });

// ===========================================================
// END Pixel Perfect MODUL
// ===========================================================



// ===========================================================
// Scroll LINK
// ===========================================================

//   $('a[href^="#"].scroll').click(function() {
//        $("html, body").animate({
//            scrollTop: $($(this).attr("href")).offset().top + "px"
//        }, {
//            duration: 500,
//            easing: "swing"
//        });
//        return false;
//    });

// ===========================================================
// END Scroll LINK
// ===========================================================



// ===========================================================
// Scroll BAR
// ===========================================================


//    $(window).scroll(function() {
//        // calculate the percentage the user has scrolled down the page
//        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
//
//        $('.bar-long').css('width', scrollPercent + "%");
//
//    });


// ===========================================================
// END Scroll BAR
// ===========================================================



// ===========================================================
// SLICK SLIDER FULL NAVIGATION
// ===========================================================


//$(document).ready(function() {


//   $('.analytics_7_slider_1').slick({
//
//   prevArrow: '.box_backrund .arrow .prev',
//            nextArrow: '.box_backrund .arrow .next',
//
//      arrows: false,
//      dots: false,
//      autoplay: true,
//      speed: 1000,
//      infinite: false,
//      slidesToShow: 1,
//      slidesToScroll: 1,
//      responsive: [
//          {
//              breakpoint: 992,
//              settings: {
//                  arrows: false,
//                  slidesToShow: 2,
//                  slidesToScroll: 1,
//                  infinite: false,
//              }
//          },
//          {
//              breakpoint: 600,
//              settings: {
//                  arrows: false,
//                  slidesToShow: 1,
//                  slidesToScroll: 1,
//                  infinite: false,
//              }
//          }
//      ]
//  });
//
//
//});
  
  
    $( document ).ready(function() {

$('.1slick7__arrow__next').click(function() { 
    $slider__block__1.slick('slickNext');
  });
 
  $('.1slick7__arrow__prev').click(function() {
    $slider__block__1.slick('slickPrev');
  });
    
    
  var $slider__block__1 = $('.1slider__block__7');


    $( document ).ready(function() {
        $slider__block__1.slick({
            prevArrow: '.1slick7__arrow__prev',
            nextArrow: '.1slick7__arrow__next',

            arrows: false,


            autoplay: false,
            fade: false,
            dots: false,
            arrows: false,

            infinite: true,

            slidesToShow: 1,
            slidesToScroll: 1,



        });
    });

    $slider__block__1.on('init', function(event, slick){
      slideCount = slick.slideCount;
      setSlideCount();
      setCurrentSlideNumber(slick.currentSlide);
    });

    $slider__block__1.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      setCurrentSlideNumber(nextSlide);
    });

    function setSlideCount() {
      var $el = $('.1slide-count-wrap').find('.1total');
      $el.text(slideCount);
    }

    function setCurrentSlideNumber(currentSlide) {
      var $el = $('.1slide-count-wrap').find('.1current');
      $el.text(currentSlide + 1);
    } 


   });
  
  
  
  
    
    $( document ).ready(function() {

$('.2slick7__arrow__next').click(function() { 
    $slider__block__2.slick('slickNext');
  });
 
  $('.2slick7__arrow__prev').click(function() {
    $slider__block__2.slick('slickPrev');
  });
    
    
  var $slider__block__2 = $('.2slider__block__7');


    $( document ).ready(function() {
        $slider__block__2.slick({
            prevArrow: '.2slick7__arrow__prev',
            nextArrow: '.2slick7__arrow__next',

            arrows: false,


            autoplay: false,
            fade: false,
            dots: false,
            arrows: false,

            infinite: true,

            slidesToShow: 1,
            slidesToScroll: 1,



        });
    });

    $slider__block__2.on('init', function(event, slick){
      slideCount = slick.slideCount;
      setSlideCount();
      setCurrentSlideNumber(slick.currentSlide);
    });

    $slider__block__2.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      setCurrentSlideNumber(nextSlide);
    });

    function setSlideCount() {
      var $el = $('.2slide-count-wrap').find('.2total');
      $el.text(slideCount);
    }

    function setCurrentSlideNumber(currentSlide) {
      var $el = $('.2slide-count-wrap').find('.2current');
      $el.text(currentSlide + 1);
    } 


   });
  
  
  
  
  
    
    $( document ).ready(function() {

$('.3slick7__arrow__next').click(function() { 
    $slider__block__3.slick('slickNext');
  });
 
  $('.3slick7__arrow__prev').click(function() {
    $slider__block__3.slick('slickPrev');
  });
    
    
  var $slider__block__3 = $('.3slider__block__7');


    $( document ).ready(function() {
        $slider__block__3.slick({
            prevArrow: '.3slick7__arrow__prev',
            nextArrow: '.3slick7__arrow__next',

            arrows: false,


            autoplay: false,
            fade: false,
            dots: false,
            arrows: false,

            infinite: true,

            slidesToShow: 1,
            slidesToScroll: 1,



        });
    });

    $slider__block__3.on('init', function(event, slick){
      slideCount = slick.slideCount;
      setSlideCount();
      setCurrentSlideNumber(slick.currentSlide);
    });

    $slider__block__3.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      setCurrentSlideNumber(nextSlide);
    });

    function setSlideCount() {
      var $el = $('.3slide-count-wrap').find('.3total');
      $el.text(slideCount);
    }

    function setCurrentSlideNumber(currentSlide) {
      var $el = $('.3slide-count-wrap').find('.3current');
      $el.text(currentSlide + 1);
    } 


   });
  
  
  
    
    $( document ).ready(function() {

$('.4slick7__arrow__next').click(function() { 
    $slider__block__4.slick('slickNext');
  });
 
  $('.4slick7__arrow__prev').click(function() {
    $slider__block__4.slick('slickPrev');
  });
    
    
  var $slider__block__4 = $('.4slider__block__7');


    $( document ).ready(function() {
        $slider__block__4.slick({
            prevArrow: '.4slick7__arrow__prev',
            nextArrow: '.4slick7__arrow__next',

            arrows: false,


            autoplay: false,
            fade: false,
            dots: false,
            arrows: false,

            infinite: true,

            slidesToShow: 1,
            slidesToScroll: 1,



        });
    });

    $slider__block__4.on('init', function(event, slick){
      slideCount = slick.slideCount;
      setSlideCount();
      setCurrentSlideNumber(slick.currentSlide);
    });

    $slider__block__4.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      setCurrentSlideNumber(nextSlide);
    });

    function setSlideCount() {
      var $el = $('.4slide-count-wrap').find('.4total');
      $el.text(slideCount);
    }

    function setCurrentSlideNumber(currentSlide) {
      var $el = $('.4slide-count-wrap').find('.4current');
      $el.text(currentSlide + 1);
    } 


   });
 
// ===========================================================
// END SLICK SLIDER FULL NAVIGATION
// ===========================================================






// ===========================================================
// Fancybox
// ===========================================================


    //$("#open-policy").on('click', function() {
    //
    //  $.fancybox.open({
    //    src : '',
    //    type : 'html',
    //    smallBtn : false
    //  });
    //
    ////    $('.next-form').click(function() {
    ////
    ////        $.fancybox.open({
    ////	   src  : '#trueModal'
    ////
    ////});
    ////});
    //
    //});



// ===========================================================
// END Fancybox
// ===========================================================





// ===========================================================
// INPUT MASK
// ===========================================================



// ===========================================================
// END INPUT MASK
// ===========================================================





// ===========================================================
// checkbox input click
// ===========================================================


    //$(document).ready(function(){
    //
    //
    //
    //  $('[type="checkbox"]').click(function(){
    //
    ////      console.log('1');
    //
    //
    //
    //
    //        if ($(this).prop('checked')) {
    //           $('#bot').addClass('chek');
    //
    //              $('#bot').removeAttr('disabled');
    //             $('[type="checkbox"]').removeClass('errore');
    //
    //
    //        } else {
    //             $('#bot').attr('disabled', true);
    //            $('[type="checkbox"]').addClass('errore');
    //        };
    //
    //  });
    //
    //});



// ===========================================================
// END checkbox input click
// ===========================================================



});

