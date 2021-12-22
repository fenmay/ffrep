const swiper = new Swiper('#cat_med', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 40,
  slideActiveClass: 'swiper-slide-active',

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
      centeredSlides: false,
    }, 
    1024: {
      slidesPerView: 3,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});


const swiper2 = new Swiper('#sorts', {
  // Optional parameters
  direction: 'horizontal',
  

  slidesPerView: 5,
  centeredSlides: true,
  initialSlide: 2,
  spaceBetween: 40,
  slideActiveClass: 'swiper-slide-active',
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 3,
    }, 
    1024: {
      slidesPerView: 5,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});

const swiper3 = new Swiper('#new_home', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 3,
  spaceBetween: 40,
  centeredSlides: true,
  initialSlide: 1,

  breakpoints: {
    320: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    }, 
    1024: {
      slidesPerView: 3,
    }
  },
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});