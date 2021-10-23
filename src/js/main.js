const swiper = new Swiper('#cat_med', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 40,
  slideActiveClass: 'swiper-slide-active',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});