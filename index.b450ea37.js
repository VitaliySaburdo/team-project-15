!function(){!function(){var e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),n=document.querySelector("[data-menu]");function r(){n.classList.toggle("is-open")}e.addEventListener("click",r),t.addEventListener("click",r)}();new Swiper(".hero__slider--container",{navigation:{nextEl:".slider__btn--left",prevEl:".slider__btn--right"},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1},speed:800});!function(){var e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.forEach((function(e){e.addEventListener("click",t)})),e.closeModalBtn.addEventListener("click",t)}();var e=document.querySelectorAll('.header__list a[href*="#"]'),t=!0,n=!1,r=void 0;try{for(var o,l=function(e,t){var n=t.value;n.addEventListener("click",(function(e){e.preventDefault();var t=n.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))},a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0)l(0,o)}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}var i=document.querySelectorAll('.footer__nav a[href*="#"]'),c=!0,d=!1,u=void 0;try{for(var s,f=function(e,t){var n=t.value;n.addEventListener("click",(function(e){e.preventDefault();var t=n.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))},v=i[Symbol.iterator]();!(c=(s=v.next()).done);c=!0)f(0,s)}catch(e){d=!0,u=e}finally{try{c||null==v.return||v.return()}finally{if(d)throw u}}var m=document.querySelectorAll('.menu__list a[href*="#"]'),y=!0,h=!1,b=void 0;try{for(var g,p=function(e,t){var n=t.value;n.addEventListener("click",(function(e){e.preventDefault();var t=n.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))},E=m[Symbol.iterator]();!(y=(g=E.next()).done);y=!0)p(0,g)}catch(e){h=!0,b=e}finally{try{y||null==E.return||E.return()}finally{if(h)throw b}}}();
//# sourceMappingURL=index.b450ea37.js.map