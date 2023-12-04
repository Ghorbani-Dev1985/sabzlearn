const presellCourseSwiper = new Swiper(".OtherBlogSwiper", {
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
      nextEl: '#PreSellSwiperPrevBtn',
      prevEl: '#PreSellSwiperPrevBtn',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
      breakpoints: {
        300: {
            slidesPerView: 1,
          },
        768 :{
          slidesPerView: 2,
        }
  },
  });

  
