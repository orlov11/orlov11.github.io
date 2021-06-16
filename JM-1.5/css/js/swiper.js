  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

  
    breakpoints: {
        320: {
          slidesPerView: 1.25,
          spaceBetween: 16
        },

    },

        pagination: {
            el: '.swiper-pagination',
          },
  });


