import{i as a,S as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function l(t){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"37050490-6d3dacd6192465869ce2cc708",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${o}?${s}`;return fetch(n).then(e=>e.json()).catch(function(e){a.error({title:"Error",message:"Something went wrong. Please try again later."})})}function u(t){return` <li class="list-item">
            <a href="${t.largeImageURL}" class="gallery-item">
              <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img" />
            </a>
            <div class="info">
              <p>Likes: ${t.likes}</p>
              <p>Views: ${t.views}</p>
              <p>Comments: ${t.comments}</p>
              <p>Downloads: ${t.downloads}</p>
            </div>
          </li>`}function m(t){return t.map(u).join("")}const f=document.querySelector("#search-form"),p=document.querySelector("#list");document.querySelector(".loader");f.addEventListener("submit",t=>{t.preventDefault();const o=t.target.elements.query.value.trim();if(!o){a.error({title:"Error",message:"Please enter a search query."});return}l(o).then(s=>{const n=m(s.hits);if(p.innerHTML=n,d.refresh(),s.hits.length===0){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}})});const d=new c(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
