(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();new Swiper(".testimonials-swiper-container",{direction:"horizontal",autoHeight:!0,loop:!0,spaceBetween:32,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1280:{slidesPerView:3,spaceBetween:26}}});(()=>{const r={modal:document.querySelector("#mobile-menu"),menuOpenBtn:document.querySelector(".button-burger"),menuCloseBtn:document.querySelector(".close-button"),menuCloseByLink:document.querySelectorAll(".modal-menu-item-link")};r.menuOpenBtn.addEventListener("click",o),r.menuCloseBtn.addEventListener("click",o),r.menuCloseByLink.forEach(n=>{n.addEventListener("click",o)});function o(){r.modal.classList.toggle("is-open")}})();
//# sourceMappingURL=commonHelpers.js.map
