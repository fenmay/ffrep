const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

    slidesPerView: 4,
    grabCursor: true,
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    watchSlidesProgress: true,
    
    
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });