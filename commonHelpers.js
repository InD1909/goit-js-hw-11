import{i as a,S as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function l(r){return` <li>
            <a href="${r.largeImageURL}" class="gallery-item">
              <img src="${r.webformatURL}" alt="${r.tags}" />
            </a>
            <div class="info">
              <p>Likes: ${r.likes}</p>
              <p>Views: ${r.views}</p>
              <p>Comments: ${r.comments}</p>
              <p>Downloads: ${r.downloads}</p>
            </div>
          </li>`}function u(r){return r.map(l).join("")}function m(r){const o="https://pixabay.com/api/",n=new URLSearchParams({key:"37050490-6d3dacd6192465869ce2cc708",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),s=`${o}?${n}`;return fetch(s).then(e=>e.json()).catch(function(e){loader.style.display="none",a.error({title:"Error",message:"Something went wrong. Please try again later."})})}d.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements.query.value.trim();if(!o){a.error({title:"Error",message:"Please enter a search query."});return}m(o).then(n=>{const s=u(n.hits);if(p.innerHTML=s,s.length===0){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}})});const f=new c(".gallery a");f.refresh();const d=document.querySelector("#search-form"),p=document.querySelector("#loading");
//# sourceMappingURL=commonHelpers.js.map
