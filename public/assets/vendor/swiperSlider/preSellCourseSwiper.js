const presellCourseSwiper = new Swiper(".presellCourseSwiper", {
    loop: true,
    slidesPerView: 4,
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
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  });

  
