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






