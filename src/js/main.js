new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  // new Swiper('#swiper_sec', {
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: true,
  
  //   If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination_sec',
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next_sec',
  //     prevEl: '.swiper-button-prev_sec',
  //   },
  
  // });


  
//   var swiper = new Swiper('.swiper_two', {
//     slidesPerView: 2,
//     spaceBetween: 20, //it is only effective when slidesPerView >=2
//     paginationClickable: true,
//     lazyLoading: true,
//     nextButton: '.swiper-button-next_two',
//     prevButton: '.swiper-button-prev'
// });

// var newSwiper = new Swiper('.swiper_two', {
//     slidesPerView: 3,
//     paginationClickable: true,
//     spaceBetween: 5,
//     lazyLoading: true,
//     nextButton: '.swiper-button-next_two',
//     prevButton: '.swiper-button-prev_two'
// });