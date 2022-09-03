const swiper = new Swiper('.hero__slider--container', {
  
  // Кнопки навигации
    navigation: {
    nextEl: '.slider__btn--left',
    prevEl: '.slider__btn--right',
  },

  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Автоперелистывание
  autoplay: {
    // Пауза между прокруткой
    delay: 3000,
    // Отключение послеручного переключения
    disableOnInteraction: false
  }, 
  // Скорость прокрутки
  speed: 800, 

});






