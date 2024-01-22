// Header Sticky Affix Start
$(window).scroll(function () {
  var scroll = $(window).scrollTop()
  if (scroll >= 10) {
    $('.headerMain').addClass('affix')
  } else {
    $('.headerMain').removeClass('affix')
  }
})
// Header Sticky Affix End

// external js: isotope.pkgd.js
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
})

// bind filter button click
$('.filters-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter')
  $grid.isotope({ filter: filterValue })
})
// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup)
  $buttonGroup.on('click', 'button', function () {
    $buttonGroup.find('.is-checked').removeClass('is-checked')
    $(this).addClass('is-checked')
  })
})

$(document).ready(function () {
  // Owl Brand Logo Slider
  $('#brandLogoSlider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      700: {
        items: 4,
        nav: false
      },
      1200: {
        items: 6,
        nav: true,
        loop: true,
        margin: 20
      }
    }
  })
  // Owl Slider End
  // Owl Our Client Slider
  $('#ourClientSlider, #home5-testimonialSlider').owlCarousel({
    animateOut: 'fadeOut',
    mouseDrag: false,
    items: 1,
    loop: true,
    nav: true,
    navText: [
      "<i class='fas fa-long-arrow-alt-left fa-2x'></i>",
      "<i class='fas fa-long-arrow-alt-right fa-2x'></i>"
    ],

    dots: false,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 4000
  })
  // Owl Slider End
  // Footer Quote Slider Start
  $('#quoteSmallSlider').owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    dots: false,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 5000
  })
  // Footer Quote Slider End
  // Swiper Image Text Slider
  var aboutFirstSlider = new Swiper('.image-slider', {
    slidesPerView: 1,
    loop: true,
    speed: 600,
    autoplay: 15000,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  })

  var aboutSecondSlider = new Swiper('.quote-slider', {
    slidesPerView: 1,
    loop: true,
    speed: 600
  })

  aboutSecondSlider.params.control = aboutFirstSlider
  aboutFirstSlider.params.control = aboutSecondSlider

  // Swiper Image Text Slider End
})

// AOS.init();
AOS.init({
  duration: 1200,
  once: true
})

// Fancybox .js
$('.fancyboxwithcaption [data-fancybox="images"]').fancybox({
  caption: function (instance, item) {
    return $(this).next('figcaption').html()
  }
})

$('.elementitemcaption').click(function () {
  $(this)
    .parents('.element-item')
    .find("[data-fancybox='images']")
    .trigger('click')
})

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
  var height = $(window).scrollTop()
  if (height > 100) {
    $('#back2Top').fadeIn()
  } else {
    $('#back2Top').fadeOut()
  }
})
$(document).ready(function () {
  $('#back2Top').click(function (event) {
    event.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, 'fast')
    return false
  })
})
/*Scroll to top when arrow up clicked END*/
$(document).ready(function () {
  if ($('#MainSlider').length) {
    $('#MainSlider')
      .on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
          return
        }
        var carousel = e.relatedTarget
        // $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);

        $('.slider-counter').html(
          carousel.relative(carousel.current()) +
            1 +
            '<span>' +
            '/' +
            carousel.items().length +
            '</span>'
        )
      })
      .owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 7000,
        navText: [
          "<i class='fas fa-caret-left'></i>",
          "<i class='fas fa-caret-right'></i>"
        ],
        responsiveClass: true,
        responsive: {
          0: {
            dots: false
          },
          991: {
            dots: false
          },
          992: {
            dots: true
          }
        }
      })
  }
  if ($('#cwwvww-owl-carousel').length) {
    $('#cwwvww-owl-carousel').owlCarousel({
      loop: true,
      dots: true,
      nav: false,
      items: 1,
      slide: 1,
      autoplay: true,
      autoplayTimeout: 6000
    })
  }
  if ($('#recipeCarousel').length) {
    $('#recipeCarousel').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 8000,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
          nav: false
        },
        600: {
          items: 3,
          nav: false
        },
        700: {
          items: 4,
          nav: false
        },
        1200: {
          items: 6,
          nav: true,
          loop: true,
          margin: 20
        }
      }
    })
  }

  if ($('#servicesProvideCarousel').length) {
    $('#servicesProvideCarousel').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 8000,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        700: {
          items: 2,
          nav: false
        },
        1200: {
          items: 3,
          nav: true,
          loop: true,
          margin: 20
        }
      }
    })
  }

  if ($('#home6-ourServicesCarousel').length) {
    $('#home6-ourServicesCarousel').owlCarousel({
      loop: true,
      autoplay: false,
      dots: true,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        850: {
          items: 2
        },
        992: {
          items: 3
        },
        1199: {
          items: 3,
          margin: 20
        },
        1399: {
          items: 3,
          margin: 30
        },
        1600: {
          items: 3,
          margin: 30
        }
      }
    })
  }
  if ($('#homeiibpr-ourServicesCarousel').length) {
    $('#homeiibpr-ourServicesCarousel').owlCarousel({
      loop: true,
      autoplay: false,
      dots: true,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        850: {
          items: 2
        },
        992: {
          items: 3
        },
        1199: {
          items: 3,
          margin: 20
        },
        1399: {
          items: 3,
          margin: 30
        },
        1600: {
          items: 3,
          margin: 30
        }
      }
    })
  }

  if ($('#home7-brandLogoCarousel').length) {
    $('#home7-brandLogoCarousel').owlCarousel({
      navText: [
        "<i class='fas fa-caret-left pr-1'></i>",
        "<i class='fas fa-caret-right pl-1'></i>"
      ],
      loop: true,
      autoplay: true,
      autoplayTimeout: 8000,
      margin: 10,
      nav: true,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        600: {
          items: 3
        },
        768: {
          items: 4
        },
        1199: {
          items: 5,
          margin: 20
        },
        1200: {
          items: 6,
          margin: 30
        }
      }
    })
  }

  if ($('#home6-testimonialsCarousel').length) {
    $('#home6-testimonialsCarousel').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 12000,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        700: {
          items: 2
        },
        992: {
          items: 2,
          margin: 25
        },
        1300: {
          items: 2,
          margin: 50
        }
      }
    })
  }

  if ($('#home6-teamCarousel').length) {
    $('#home6-teamCarousel').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 8000,
      margin: 10,
      nav: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2,
          margin: 15
        },
        768: {
          items: 3,
          margin: 15
        },
        800: {
          items: 3,
          margin: 25
        },
        1300: {
          items: 3,
          margin: 50
        }
      }
    })
  }

  if ($('.two-column-carousel').length) {
    $('.two-column-carousel').owlCarousel({
      items: 2,
      loop: true,
      nav: false,
      dots: true,
      slide: 1,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 1,
          nav: false
        },
        700: {
          items: 1,
          nav: false
        },
        1200: {
          items: 2,
          nav: false
        }
      }
    })
  }
  if ($('.topsliderhome4').length) {
    /*--
               Slider
           -----------------------------------*/
    var slider = new Swiper('.topsliderhome4', {
      loop: true,
      nextButton: '.topsliderhome4-next',
      prevButton: '.topsliderhome4-prev'
    })
  }
  if ($('.services-slider-home4').length) {
    /*--
               Services Active
           -----------------------------------*/
    var service = new Swiper('.services-slider-home4', {
      slidesPerView: 4,
      spaceBetween: 0,
      loop: true,
      watchSlidesVisibility: true,
      nextButton: '.services-slider-home4-next',
      prevButton: '.services-slider-home4-prev',
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        576: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 4
        }
      }
    })
  }
  if ($('.clients-slider-home4').length) {
    /*--
                    Client's Active
                -----------------------------------*/
    var client = new Swiper('.clients-slider-home4', {
      nextButton: '.clients-slider-home4-prev',
      prevButton: '.clients-slider-home4-next'
    })
  }
  if ($('.brand-active .swiper-container').length) {
    /*--
                    Brand Active
                -----------------------------------*/
    var brand = new Swiper('.brand-active .swiper-container', {
      slidesPerView: 6,
      spaceBetween: 0,
      loop: true,
      autoplay: 4000,
      breakpoints: {
        0: {
          slidesPerView: 2
        },
        576: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 4
        },
        992: {
          slidesPerView: 4
        },
        1200: {
          slidesPerView: 6
        }
      }
    })
  }
  if ($('.blog-slider-home4').length) {
    /*--
        Blog Active
        -----------------------------------*/
    var blog = new Swiper('.blog-slider-home4', {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      prevButton: '.blog-slider-home4-prev',
      nextButton: '.blog-slider-home4-next',
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 1
        }
      }
    })
  }
  if ($('.odometer').length) {
    /*--Odometer Activation 
	      -----------------------------------*/
    var elemOffset = $('.odometer').offset().top
    var winHeight = $(window).height()
    if (elemOffset < winHeight) {
      $('.odometer').each(function () {
        $(this).html($(this).data('count-to'))
      })
    }
    $(window).on('scroll', function () {
      var elemOffset = $('.odometer').offset().top
      function winScrollPosition() {
        var scrollPos = $(window).scrollTop(),
          winHeight = $(window).height()
        var scrollPosition = Math.round(scrollPos + winHeight / 1.2)
        return scrollPosition
      }
      if (elemOffset < winScrollPosition()) {
        $('.odometer').each(function () {
          $(this).html($(this).data('count-to'))
        })
      }
    })
  }
  if ($('.portfolioSliderLoop').length) {
    $('.portfolioSliderLoop').owlCarousel({
      center: true,
      items: 2,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 6000,
      margin: 0,

      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
          dots: true
        },
        600: {
          items: 4,
          dots: true
        },
        700: {
          items: 3,
          dots: true
        },
        1498: {
          items: 3,
          dots: true
        },
        1499: {
          items: 4,
          dots: true
        }
      }
    })
  }
  if ($('#sliderTwocarousel').length) {
    $('#sliderTwocarousel')
      .on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
          return
        }
        var carousel = e.relatedTarget
        // $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);

        $('.sliderTwo-counter').html(
          carousel.relative(carousel.current()) +
            1 +
            '<span>' +
            '/' +
            carousel.items().length +
            '</span>'
        )
      })
      .owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: [
          "<i class='fas fa-arrow-left'></i>",
          "<i class='fas fa-arrow-right'></i>"
        ],
        autoplay: true,
        autoplayTimeout: 6000,
        margin: 30,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          900: {
            items: 3
          },
          1200: {
            items: 3
          },
          1360: {
            items: 3
          },
          1400: {
            items: 3
          }
        }
      })
  }
  if ($('#ourPartnerCarousel').length) {
    $('#ourPartnerCarousel')
      .on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
          return
        }
        var carousel = e.relatedTarget
        // $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);

        $('.ourPartnerCarousel-counter').html(
          carousel.relative(carousel.current()) +
            1 +
            '<span>' +
            '/' +
            carousel.items().length +
            '</span>'
        )
      })
      .owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        nav: true,
        navText: [
          "<i class='fas fa-long-arrow-alt-left fa-2x'></i>",
          "<i class='fas fa-long-arrow-alt-right fa-2x'></i>"
        ],
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 0
      })
  }
  if ($('#awardsCarousel').length) {
    $('#awardsCarousel').owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"
      ],
      autoplay: true,
      autoplayTimeout: 7000,
      margin: 15,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2,
          margin: 30
        },
        801: {
          items: 3
        },
        900: {
          items: 3,
          margin: 15
        },
        1200: {
          items: 4
        },
        1400: {
          items: 4,
          margin: 20
        },
        1600: {
          items: 4,
          margin: 50
        }
      }
    })
  }
  if ($('#sliderOnecarousel').length) {
    $('#sliderOnecarousel').owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      navText: [
        "<i class='fas fa-long-arrow-alt-left fa-2x'></i>",
        "<i class='fas fa-long-arrow-alt-right fa-2x'></i>"
      ],
      autoplay: true,
      autoplayTimeout: 7000,
      margin: 15,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        900: {
          items: 3
        },
        1200: {
          items: 4
        },
        1360: {
          items: 4
        },
        1400: {
          items: 4,
          margin: 20
        }
      }
    })
  }
  if ($('.countdown').length) {
    // Set the count down timer
    var count = $('.countdown').data('count')
    var template = $('.countdown').html()
    $('.countdown').countdown(count, function (event) {
      $(this).html(event.strftime(template))
    })
  }
  if ($('#ourTeamSlider').length) {
    $('#ourTeamSlider').owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"
      ],
      autoplay: true,
      autoplayTimeout: 7000,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: true
        },
        700: {
          items: 2,
          nav: true
        },
        1000: {
          items: 3,
          nav: true,
          loop: true,
          margin: 30
        }
      }
    })
  }
  if ($('#recentPostsSlider').length) {
    $('#recentPostsSlider').owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"
      ],

      autoplay: true,
      autoplayTimeout: 7000,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        650: {
          items: 2,
          nav: true
        },
        700: {
          items: 2,
          nav: true
        },
        1000: {
          items: 2,
          nav: true,
          loop: true,
          margin: 30
        }
      }
    })
  }
  if ($('#clientSlider').length) {
    $('#clientSlider')
      .on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
          return
        }
        var carousel = e.relatedTarget
        // $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);

        $('.clientSlider-counter').html(
          carousel.relative(carousel.current()) +
            1 +
            '<span>' +
            '/' +
            carousel.items().length +
            '</span>'
        )
      })
      .owlCarousel({
        animateOut: 'fadeOut',
        mouseDrag: false,
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: [
          "<i class='fas fa-caret-left'></i>",
          "<i class='fas fa-caret-right'></i>"
        ]
      })
  }
  if ($('#contactFrm').length) {
    jQuery('#contactFrm').submit(function (e) {
      e.preventDefault()
      jQuery.post(
        'ajax.php',
        jQuery('#contactFrm').serialize(),
        function (response) {
          var res = response.split('|')
          if (res[0] == '0') {
            jQuery('#contactFrm').trigger('reset')
          }
          jQuery('.action-message').html(res[1])

          setTimeout(function () {
            jQuery('.action-message').html('')
          }, 5000)
        }
      )
    })
  }
  if ($('#contactFrm1').length) {
    jQuery('#contactFrm1').submit(function (e) {
      e.preventDefault()
      jQuery.post(
        'ajax.php',
        jQuery('#contactFrm1').serialize(),
        function (response) {
          var res = response.split('|')
          if (res[0] == '0') {
            jQuery('#contactFrm1').trigger('reset')
          }
          jQuery('.action-message').html(res[1])

          setTimeout(function () {
            jQuery('.action-message').html('')
          }, 5000)
        }
      )
    })
  }
  if ($('#contactFrm2').length) {
    jQuery('#contactFrm2').submit(function (e) {
      e.preventDefault()
      jQuery.post(
        'ajax.php',
        jQuery('#contactFrm2').serialize(),
        function (response) {
          var res = response.split('|')
          if (res[0] == '0') {
            jQuery('#contactFrm2').trigger('reset')
          }
          jQuery('.action-message').html(res[1])

          setTimeout(function () {
            jQuery('.action-message').html('')
          }, 5000)
        }
      )
    })
  }
  if ($('#commentform1').length) {
    jQuery('#commentform1').submit(function (e) {
      e.preventDefault()
      jQuery.post(
        'ajax.php',
        jQuery('#commentform1').serialize(),
        function (response) {
          var res = response.split('|')
          if (res[0] == '0') {
            jQuery('#commentform1').trigger('reset')
          }
          jQuery('.action-message').html(res[1])

          setTimeout(function () {
            jQuery('.action-message').html('')
          }, 5000)
        }
      )
    })
  }
  if ($('#comingsoonFrm').length) {
    jQuery('#comingsoonFrm').submit(function (e) {
      e.preventDefault()
      jQuery.post(
        'ajax.php',
        jQuery('#comingsoonFrm').serialize(),
        function (response) {
          var res = response.split('|')
          if (res[0] == '0') {
            jQuery('#comingsoonFrm').trigger('reset')
          }
          jQuery('.action-message').html(res[1])
          setTimeout(function () {
            jQuery('.action-message').html('')
          }, 5000)
        }
      )
    })
  }
  document.addEventListener('mousemove', parallax)
  function parallax(e) {
    this.querySelectorAll('.layer').forEach(function (layer) {
      const speed = Number(layer.getAttribute('data-speed'))

      const x = (window.innerWidth - e.pageX * speed) / 120
      const y = (window.innerHeight - e.pageY * speed) / 120

      layer.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
    })
  }
})

$(window).on('load', function () {
  $('.loaderholder').slideUp(750)
})

// Sets interval...what is transition slide speed?
$('#mainCarousel').carousel({
  interval: 5000,
  pause: 'false'
})
