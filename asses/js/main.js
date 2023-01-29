// start animate on scrol
AOS.init();

// Sticky Header
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".siteHeader").addClass("sticky");
    } else {
        $(".siteHeader").removeClass("sticky");
    }
});


// slick slider Hero Section
$('.heroSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });


// slick slider sponser
  $('.sponserSlider').slick({
    rows: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
                autoplay: true,
                autoplaySpeed: 4000,
            }
        },

  ]
});


// responsive menu
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.siteMenu');
const navLink = document.querySelectorAll('.siteMenu li');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    burger.classList.toggle('burger-open');
    navLink.forEach(link => {
        link.classList.toggle('nav-link-open');
    })
});




  
