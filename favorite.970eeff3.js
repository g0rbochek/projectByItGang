!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequired7c6;function r(t){return t.map((function(t){var e,n=t.description,a=t.rating,r=t.thumb,o=t.title,i=t._id;return ratingStar=(e=a.toFixed(1))%1==0?Math.floor(e):e,'\n        <li class="main-img-items">\n                    <img class="main-img-img" src="'.concat(r,'" alt="').concat(o,'" />\n                    <div class="main-heart">\n                      <button type="button" id="').concat(i,'" class="favorite-main-heart-btn">\n    <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" >\n    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.9939 4.70783C9.16115 2.5652 6.10493 1.98884 3.80863 3.95085C1.51234 5.91285 1.18905 9.19323 2.99234 11.5137C4.49166 13.443 9.02912 17.5121 10.5163 18.8291C10.6826 18.9764 10.7658 19.0501 10.8629 19.0791C10.9475 19.1043 11.0402 19.1043 11.1249 19.0791C11.2219 19.0501 11.3051 18.9764 11.4715 18.8291C12.9586 17.5121 17.4961 13.443 18.9954 11.5137C20.7987 9.19323 20.5149 5.89221 18.1791 3.95085C15.8434 2.00948 12.8266 2.5652 10.9939 4.70783Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n  </svg>\n  </button>\n                    </div>\n                    <div class="main-img-text-wrap">\n                      <h3 class="main-img-title">').concat(o,'</h3>\n                      <p class="main-img-text">\n                        ').concat(n,'\n                      </p>\n                      <div class="main-img-subtext-wrap">\n                        <div class="main-rating-wrap">\n                          <span class="main-rating-span">').concat(ratingStar,'</span>\n                          <svg class="').concat(ratingStar>=1?"rating-star-fill":"rating-star",'" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12">\n    <path d="M5.04894 1.42705C5.3483 0.505738 6.6517 0.50574 6.95106 1.42705L7.5716 3.33688C7.70547 3.7489 8.08943 4.02786 8.52265 4.02786H10.5308C11.4995 4.02786 11.9023 5.26748 11.1186 5.83688L9.49395 7.01722C9.14347 7.27187 8.99681 7.72323 9.13068 8.13525L9.75122 10.0451C10.0506 10.9664 8.9961 11.7325 8.21238 11.1631L6.58778 9.98278C6.2373 9.72813 5.7627 9.72814 5.41221 9.98278L3.78761 11.1631C3.0039 11.7325 1.94942 10.9664 2.24878 10.0451L2.86932 8.13526C3.00319 7.72323 2.85653 7.27186 2.50604 7.01722L0.881445 5.83688C0.0977311 5.26748 0.500508 4.02786 1.46923 4.02786H3.47735C3.91057 4.02786 4.29453 3.7489 4.4284 3.33688L5.04894 1.42705Z"/>\n  </svg>\n                          <svg class="').concat(ratingStar>=2?"rating-star-fill":"rating-star",'" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12">\n    <path d="M5.04894 1.42705C5.3483 0.505738 6.6517 0.50574 6.95106 1.42705L7.5716 3.33688C7.70547 3.7489 8.08943 4.02786 8.52265 4.02786H10.5308C11.4995 4.02786 11.9023 5.26748 11.1186 5.83688L9.49395 7.01722C9.14347 7.27187 8.99681 7.72323 9.13068 8.13525L9.75122 10.0451C10.0506 10.9664 8.9961 11.7325 8.21238 11.1631L6.58778 9.98278C6.2373 9.72813 5.7627 9.72814 5.41221 9.98278L3.78761 11.1631C3.0039 11.7325 1.94942 10.9664 2.24878 10.0451L2.86932 8.13526C3.00319 7.72323 2.85653 7.27186 2.50604 7.01722L0.881445 5.83688C0.0977311 5.26748 0.500508 4.02786 1.46923 4.02786H3.47735C3.91057 4.02786 4.29453 3.7489 4.4284 3.33688L5.04894 1.42705Z"/>\n  </svg>\n                          <svg class="').concat(ratingStar>=3?"rating-star-fill":"rating-star",'" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12">\n    <path d="M5.04894 1.42705C5.3483 0.505738 6.6517 0.50574 6.95106 1.42705L7.5716 3.33688C7.70547 3.7489 8.08943 4.02786 8.52265 4.02786H10.5308C11.4995 4.02786 11.9023 5.26748 11.1186 5.83688L9.49395 7.01722C9.14347 7.27187 8.99681 7.72323 9.13068 8.13525L9.75122 10.0451C10.0506 10.9664 8.9961 11.7325 8.21238 11.1631L6.58778 9.98278C6.2373 9.72813 5.7627 9.72814 5.41221 9.98278L3.78761 11.1631C3.0039 11.7325 1.94942 10.9664 2.24878 10.0451L2.86932 8.13526C3.00319 7.72323 2.85653 7.27186 2.50604 7.01722L0.881445 5.83688C0.0977311 5.26748 0.500508 4.02786 1.46923 4.02786H3.47735C3.91057 4.02786 4.29453 3.7489 4.4284 3.33688L5.04894 1.42705Z"/>\n  </svg>\n                          <svg class="').concat(ratingStar>=4?"rating-star-fill":"rating-star",'" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12">\n    <path d="M5.04894 1.42705C5.3483 0.505738 6.6517 0.50574 6.95106 1.42705L7.5716 3.33688C7.70547 3.7489 8.08943 4.02786 8.52265 4.02786H10.5308C11.4995 4.02786 11.9023 5.26748 11.1186 5.83688L9.49395 7.01722C9.14347 7.27187 8.99681 7.72323 9.13068 8.13525L9.75122 10.0451C10.0506 10.9664 8.9961 11.7325 8.21238 11.1631L6.58778 9.98278C6.2373 9.72813 5.7627 9.72814 5.41221 9.98278L3.78761 11.1631C3.0039 11.7325 1.94942 10.9664 2.24878 10.0451L2.86932 8.13526C3.00319 7.72323 2.85653 7.27186 2.50604 7.01722L0.881445 5.83688C0.0977311 5.26748 0.500508 4.02786 1.46923 4.02786H3.47735C3.91057 4.02786 4.29453 3.7489 4.4284 3.33688L5.04894 1.42705Z"/>\n  </svg>\n                          <svg class="').concat(ratingStar>=5?"rating-star-fill":"rating-star",'" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12">\n    <path d="M5.04894 1.42705C5.3483 0.505738 6.6517 0.50574 6.95106 1.42705L7.5716 3.33688C7.70547 3.7489 8.08943 4.02786 8.52265 4.02786H10.5308C11.4995 4.02786 11.9023 5.26748 11.1186 5.83688L9.49395 7.01722C9.14347 7.27187 8.99681 7.72323 9.13068 8.13525L9.75122 10.0451C10.0506 10.9664 8.9961 11.7325 8.21238 11.1631L6.58778 9.98278C6.2373 9.72813 5.7627 9.72814 5.41221 9.98278L3.78761 11.1631C3.0039 11.7325 1.94942 10.9664 2.24878 10.0451L2.86932 8.13526C3.00319 7.72323 2.85653 7.27186 2.50604 7.01722L0.881445 5.83688C0.0977311 5.26748 0.500508 4.02786 1.46923 4.02786H3.47735C3.91057 4.02786 4.29453 3.7489 4.4284 3.33688L5.04894 1.42705Z"/>\n  </svg>\n  \n                        </div>\n                        <button id="').concat(i,'" class="main-rating-btn">See recipe</button>\n                      </div>\n                    </div>\n                  </li>\n      ')})).join("")}function o(t){return t.map((function(t){return'<li>\n        <button class="hero-favorites-btn-design js-select-category" type="button">'.concat(t,"</button>  \n        </li>")})).join("")}null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var r={id:t,exports:{}};return e[t]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequired7c6=a),a("7e2cb"),a("7e2cb");var i,s="favourite-items",c=document.querySelector(".hero-favorite-buttons"),l=document.querySelector(".js-hero-favorite-all-categories-listener"),d=null!==(i=JSON.parse(localStorage.getItem(s)))&&void 0!==i?i:[],u=document.querySelector(".hero-favorite-cards"),v=document.querySelector(".hero-favorites-content-wrapper"),g=document.querySelector(".favorites-main-img-menu"),m=document.querySelector(".hero-favorites-container-image"),h=document.querySelector(".container-button-markup-wrapper");if(c.addEventListener("click",(function(t){if(!t.target.classList.contains("js-select-category"))return;document.querySelectorAll(".js-select-category").forEach((function(t){t.classList.contains("hero-favorite-btn-active")&&t.classList.remove("hero-favorite-btn-active")})),t.target.classList.add("hero-favorite-btn-active"),l.classList.remove("hero-favorite-btn-active");var e;e=d.filter((function(e){return e.category===t.target.textContent})),console.log(e),u.innerHTML=r(e)})),l.addEventListener("click",(function(){document.querySelectorAll(".js-select-category").forEach((function(t){t.classList.contains("hero-favorite-btn-active")&&t.classList.remove("hero-favorite-btn-active")})),l.classList.add("hero-favorite-btn-active"),u.innerHTML=r(d)})),g.addEventListener("click",(function(t){console.log(t.target);var e,n=t.target,a=null!==(e=JSON.parse(localStorage.getItem(s)))&&void 0!==e?e:[];if(n.classList.contains("favorite-main-heart-btn")){var i=a.filter((function(t){return t._id!==n.id}));console.log(i),localStorage.setItem(s,JSON.stringify(i)),u.innerHTML=r(i);var l=o(i.map((function(t){return t.category})).filter((function(t,e,n){return n.indexOf(t)===e})));return c.innerHTML=l,void(i.length||(h.classList.add("visually-hidden"),m.classList.add("visually-hidden"),v.classList.remove("visually-hidden")))}})),d.length){console.log(d),m.style.display="block",h.classList.remove("visually-hidden");var f=d.map((function(t){return t.category})).filter((function(t,e,n){return n.indexOf(t)===e}));console.log(f);var L=o(f);console.log(L),c.innerHTML=L,u.innerHTML=r(d),v.classList.add("visually-hidden")}var C={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function p(){C.modal.classList.toggle("is-hidden")}C.closeModalBtn.addEventListener("click",p),document.addEventListener("keydown",(function(t){"Escape"===t.key&&p()}));var w={btnCart:document.querySelector(".js-shopping-cart"),btnBurger:document.querySelector(".js-burger-menu"),btnCloseModal:document.querySelector(".js-btn-close"),modal:document.querySelector(".header-back"),homeBtn:document.querySelector(".js-header-ref-home"),favorBtn:document.querySelector(".js-header-ref-favor"),navList:document.querySelector(".header-refs")};w.btnBurger.addEventListener("click",(function(){w.modal.classList.toggle("display-none"),document.body.style.overflow="hidden"})),w.btnCloseModal.addEventListener("click",(function(){w.modal.classList.toggle("display-none"),document.body.style.overflow="visible"})),"/index.html"===document.location.pathname&&w.homeBtn.classList.add("header-active"),"/favorite.html"===document.location.pathname&&(w.favorBtn.classList.add("header-active"),w.homeBtn.classList.remove("header-active"),console.log("favor")),w.btnCart.addEventListener("click",p)}();
//# sourceMappingURL=favorite.970eeff3.js.map