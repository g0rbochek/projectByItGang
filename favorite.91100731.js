var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequired7c6;function r(t){return t.map((t=>{const{description:e,rating:n,thumb:i,title:r,_id:a}=t;var s;return ratingStar=(s=n.toFixed(1))%1==0?Math.floor(s):s,`\n        <li class="main-img-items">\n                    <img class="main-img-img" src="${i}" alt="${r}" />\n                    <div class="main-heart">\n                      <button type="button" id="${a}" class="favorite-main-heart-btn">\n    <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" >\n    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.9939 4.70783C9.16115 2.5652 6.10493 1.98884 3.80863 3.95085C1.51234 5.91285 1.18905 9.19323 2.99234 11.5137C4.49166 13.443 9.02912 17.5121 10.5163 18.8291C10.6826 18.9764 10.7658 19.0501 10.8629 19.0791C10.9475 19.1043 11.0402 19.1043 11.1249 19.0791C11.2219 19.0501 11.3051 18.9764 11.4715 18.8291C12.9586 17.5121 17.4961 13.443 18.9954 11.5137C20.7987 9.19323 20.5149 5.89221 18.1791 3.95085C15.8434 2.00948 12.8266 2.5652 10.9939 4.70783Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n  </svg>\n  </button>\n                    </div>\n                    <div class="main-img-text-wrap">\n                      <h3 class="main-img-title">${r}</h3>\n                      <p class="main-img-text">\n                        ${e}\n                      </p>\n                      <div class="main-img-subtext-wrap">\n                        <div class="main-rating-wrap">\n                          <span class="main-rating-span">${ratingStar}</span>\n                          <svg class="${ratingStar>=1?"rating-star-fill":"rating-star"}" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12">\n    <path d="M5.04894 1.42705C5.3483 0.505738 6.6517 0.50574 6.95106 1.42705L7.5716 3.33688C7.70547 3.7489 8.08943 4.02786 8.52265 4.02786H10.5308C11.4995 4.02786 11.9023 5.26748 11.1186 5.83688L9.49395 7.01722C9.14347 7.27187 8.99681 7.72323 9.13068 8.13525L9.75122 10.0451C10.0506 10.9664 8.9961 11.7325 8.21238 11.1631L6.58778 9.98278C6.2373 9.72813 5.7627 9.72814 5.41221 9.98278L3.78761 11.1631C3.0039 11.7325 1.94942 10.9664 2.24878 10.0451L2.86932 8.13526C3.00319 7.72323 2.85653 7.27186 2.50604 7.01722L0.881445 5.83688C0.0977311 5.26748 0.500508 4.02786 1.46923 4.02786H3.47735C3.91057 4.02786 4.29453 3.7489 4.4284 3.33688L5.04894 1.42705Z"/>\n  </svg>\n                          <svg class="${ratingStar>=2?"rating-star-fill":"rating-star"}" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12">\n    <path d="M5.04894 1.42705C5.3483 0.505738 6.6517 0.50574 6.95106 1.42705L7.5716 3.33688C7.70547 3.7489 8.08943 4.02786 8.52265 4.02786H10.5308C11.4995 4.02786 11.9023 5.26748 11.1186 5.83688L9.49395 7.01722C9.14347 7.27187 8.99681 7.72323 9.13068 8.13525L9.75122 10.0451C10.0506 10.9664 8.9961 11.7325 8.21238 11.1631L6.58778 9.98278C6.2373 9.72813 5.7627 9.72814 5.41221 9.98278L3.78761 11.1631C3.0039 11.7325 1.94942 10.9664 2.24878 10.0451L2.86932 8.13526C3.00319 7.72323 2.85653 7.27186 2.50604 7.01722L0.881445 5.83688C0.0977311 5.26748 0.500508 4.02786 1.46923 4.02786H3.47735C3.91057 4.02786 4.29453 3.7489 4.4284 3.33688L5.04894 1.42705Z"/>\n  </svg>\n                          <svg class="${ratingStar>=3?"rating-star-fill":"rating-star"}" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12">\n    <path d="M5.04894 1.42705C5.3483 0.505738 6.6517 0.50574 6.95106 1.42705L7.5716 3.33688C7.70547 3.7489 8.08943 4.02786 8.52265 4.02786H10.5308C11.4995 4.02786 11.9023 5.26748 11.1186 5.83688L9.49395 7.01722C9.14347 7.27187 8.99681 7.72323 9.13068 8.13525L9.75122 10.0451C10.0506 10.9664 8.9961 11.7325 8.21238 11.1631L6.58778 9.98278C6.2373 9.72813 5.7627 9.72814 5.41221 9.98278L3.78761 11.1631C3.0039 11.7325 1.94942 10.9664 2.24878 10.0451L2.86932 8.13526C3.00319 7.72323 2.85653 7.27186 2.50604 7.01722L0.881445 5.83688C0.0977311 5.26748 0.500508 4.02786 1.46923 4.02786H3.47735C3.91057 4.02786 4.29453 3.7489 4.4284 3.33688L5.04894 1.42705Z"/>\n  </svg>\n                          <svg class="${ratingStar>=4?"rating-star-fill":"rating-star"}" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12">\n    <path d="M5.04894 1.42705C5.3483 0.505738 6.6517 0.50574 6.95106 1.42705L7.5716 3.33688C7.70547 3.7489 8.08943 4.02786 8.52265 4.02786H10.5308C11.4995 4.02786 11.9023 5.26748 11.1186 5.83688L9.49395 7.01722C9.14347 7.27187 8.99681 7.72323 9.13068 8.13525L9.75122 10.0451C10.0506 10.9664 8.9961 11.7325 8.21238 11.1631L6.58778 9.98278C6.2373 9.72813 5.7627 9.72814 5.41221 9.98278L3.78761 11.1631C3.0039 11.7325 1.94942 10.9664 2.24878 10.0451L2.86932 8.13526C3.00319 7.72323 2.85653 7.27186 2.50604 7.01722L0.881445 5.83688C0.0977311 5.26748 0.500508 4.02786 1.46923 4.02786H3.47735C3.91057 4.02786 4.29453 3.7489 4.4284 3.33688L5.04894 1.42705Z"/>\n  </svg>\n                          <svg class="${ratingStar>=5?"rating-star-fill":"rating-star"}" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12">\n    <path d="M5.04894 1.42705C5.3483 0.505738 6.6517 0.50574 6.95106 1.42705L7.5716 3.33688C7.70547 3.7489 8.08943 4.02786 8.52265 4.02786H10.5308C11.4995 4.02786 11.9023 5.26748 11.1186 5.83688L9.49395 7.01722C9.14347 7.27187 8.99681 7.72323 9.13068 8.13525L9.75122 10.0451C10.0506 10.9664 8.9961 11.7325 8.21238 11.1631L6.58778 9.98278C6.2373 9.72813 5.7627 9.72814 5.41221 9.98278L3.78761 11.1631C3.0039 11.7325 1.94942 10.9664 2.24878 10.0451L2.86932 8.13526C3.00319 7.72323 2.85653 7.27186 2.50604 7.01722L0.881445 5.83688C0.0977311 5.26748 0.500508 4.02786 1.46923 4.02786H3.47735C3.91057 4.02786 4.29453 3.7489 4.4284 3.33688L5.04894 1.42705Z"/>\n  </svg>\n  \n                        </div>\n                        <button id="${a}" class="main-rating-btn">See recipe</button>\n                      </div>\n                    </div>\n                  </li>\n      `})).join("")}null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var r={id:t,exports:{}};return e[t]=r,i.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},t.parcelRequired7c6=i),i("4ZS0N");var a=i("4ZS0N");const s=document.querySelector(".hero-favorite-buttons"),o=document.querySelector(".js-hero-favorite-all-categories-listener");var l;const c=null!==(l=JSON.parse(localStorage.getItem("favourite-items")))&&void 0!==l?l:[],g=document.querySelector(".hero-favorite-cards"),d=document.querySelector(".hero-favorites-content-wrapper"),v=document.querySelector(".favorites-main-img-menu");if(s.addEventListener("click",(function(t){if(!t.target.classList.contains("js-select-category"))return;document.querySelectorAll(".js-select-category").forEach((t=>{t.classList.contains("hero-favorite-btn-active")&&t.classList.remove("hero-favorite-btn-active")})),t.target.classList.add("hero-favorite-btn-active"),o.classList.remove("hero-favorite-btn-active");let e=[];e=c.filter((({category:e})=>e===t.target.textContent)),console.log(e),g.innerHTML=r(e)})),o.addEventListener("click",(function(){document.querySelectorAll(".js-select-category").forEach((t=>{t.classList.contains("hero-favorite-btn-active")&&t.classList.remove("hero-favorite-btn-active")})),o.classList.add("hero-favorite-btn-active"),g.innerHTML=r(c)})),v.addEventListener("click",a.onSeeRecipeBtnClick),console.dir(v),c.length){console.log(c);const t=c.map((t=>t.category)).filter(((t,e,n)=>n.indexOf(t)===e));console.log(t);const e=t.map((t=>`<li>\n        <button class="hero-favorites-btn-design js-select-category" type="button">${t}</button>  \n        </li>`)).join("");console.log(e),s.innerHTML=e,g.innerHTML=r(c),d.classList.add("visually-hidden")}
//# sourceMappingURL=favorite.91100731.js.map
