(()=>{const e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),o=document.querySelector("[data-menu]");function n(){o.classList.toggle("is-open")}e.addEventListener("click",n),t.addEventListener("click",n)})();new Swiper(".hero__slider--container",{navigation:{nextEl:".slider__btn--left",prevEl:".slider__btn--right"},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1},speed:800});(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.forEach((e=>{e.addEventListener("click",t)})),e.closeModalBtn.addEventListener("click",t)})();const e=document.querySelectorAll('.header__list a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}));const t=document.querySelectorAll('.footer__nav a[href*="#"]');for(let e of t)e.addEventListener("click",(function(t){t.preventDefault();const o=e.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}));const o=document.querySelectorAll('.menu__list a[href*="#"]');for(let e of o)e.addEventListener("click",(function(t){t.preventDefault();const o=e.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}));
//# sourceMappingURL=index.87300329.js.map