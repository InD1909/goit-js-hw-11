import{i as a,S as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(t){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"37050490-6d3dacd6192465869ce2cc708",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${s}?${o}`;return fetch(n).then(e=>e.json())}function m(t){return` <li class="list-item">
            <a href="${t.largeImageURL}" class="gallery-item">
              <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img" />
            </a>
            <div class="info">
              <p>Likes: ${t.likes}</p>
              <p>Views: ${t.views}</p>
              <p>Comments: ${t.comments}</p>
              <p>Downloads: ${t.downloads}</p>
            </div>
          </li>`}function f(t){return t.map(m).join("")}const d=document.querySelector("#search-form"),p=document.querySelector("#list"),c=document.querySelector(".loader");d.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements.query.value.trim();if(!s){a.error({title:"Error",message:"Please enter a search query."});return}c.classList.remove("hidden"),u(s).then(o=>{const n=f(o.hits);if(p.innerHTML=n,h.refresh(),o.hits.length===0){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}}).catch(function(o){a.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>c.classList.add("hidden"))});const h=new l(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
