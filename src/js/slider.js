let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.swiper-button-next').addEventListener('click', function () {
    offset = offset + 528;
    if (offset > 1056) { offset = 0; }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.swiper-button-prev').addEventListener('click', function () {
    offset = offset - 528;
    if (offset < 0)
    { offset = 1056; }
    sliderLine.style.left = -offset + 'px';
});

// const images = document.querySelectorAll('.hero__slider--container .slider__line img');
// const sliderLine = document.querySelector('.slider__line');
// let count = 0;
// let width;

// function init() {
//     console.log('resize');
//     width = querySelector('.hero__slider--container').offsetWidth;
//     sliderLine.style.width = width * images.lenght + 'px';
//     images.forEach( item => {
//         item.style.width = width + 'px';
//         item.style.height = 'auto';
//     });
//     rollSlider();
// }

// window.querySelector('resize', init);
// init();

// document.querySelector('.swiper-button-prev').addEventListener('click', function () {
//     count--;
//     if (count < 0) { count = images.length - 1; }
//     rollSlider();
    
// });

// document.querySelector('.swiper-button-next').addEventListener('click', function () {
//     count--;
//     if (count >= images.length) { count = 0; }
//     rollSlider();
    
// });
// function rollSlider() {
//     sliderLine.style.transform = 'translate(-' + count * width + 'px)';
// }




