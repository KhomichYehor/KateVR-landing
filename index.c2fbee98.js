document.addEventListener("scroll",function(e){var t=document.getElementsByTagName("body")[0],a=document.getElementsByClassName("main__to-top")[0];0===t.getBoundingClientRect().y?a.style.opacity=0:0!==t.getBoundingClientRect().y&&(a.style.opacity=1)}),l("main"),l("buy");var e=document.getElementsByClassName("menu__link--lang")[0],t=document.getElementsByClassName("menu__back")[0];e.addEventListener("click",function(e){document.getElementsByClassName("menu__close")[0].classList.add("menu__close--hidden"),t.classList.add("menu__back--show")}),t.addEventListener("click",function(e){document.getElementsByClassName("menu__close")[0].classList.remove("menu__close--hidden"),t.classList.remove("menu__back--show")});var a=document.getElementsByClassName("faq__question-title"),r=!0,n=!1,s=void 0;try{for(var o,i=a[Symbol.iterator]();!(r=(o=i.next()).done);r=!0)o.value.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();var t=e.target.closest(".faq__question");t.classList.contains("faq__question--active")?t.classList.remove("faq__question--active"):t.classList.add("faq__question--active")})}catch(e){n=!0,s=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw s}}function l(e){var t=document.getElementsByClassName(e+"__form-input"),a=!0,r=!1,n=void 0;try{for(var s,o=t[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var i=s.value;i.addEventListener("focus",function(t){var a=t.target,r=a.closest("."+e+"__form-group").querySelector("."+e+"__form-placeholder"),n=a.closest(".buy__form-cvv");n&&(r=n.querySelector("."+e+"__form-placeholder")),r.classList.contains(e+"__form-placeholder--error")&&a.classList.contains(e+"__form-input--error")&&(r.classList.remove(e+"__form-placeholder--error"),a.classList.remove(e+"__form-input--error")),r.classList.add(e+"__form-placeholder--top"),a.classList.add(e+"__form-input--focus")}),i.addEventListener("blur",function(t){var a=t.target,r=a.closest("."+e+"__form-group").querySelector("."+e+"__form-placeholder"),n=a.closest(".buy__form-cvv");n&&(r=n.querySelector("."+e+"__form-placeholder")),r.classList.remove(e+"__form-placeholder--top"),a.classList.remove(e+"__form-input--focus")})}}catch(e){r=!0,n=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw n}}var l=document.getElementsByClassName(e+"__form-area")[0];l&&(l.addEventListener("focus",function(t){var a=t.target,r=a.closest("."+e+"__form-group").querySelector("."+e+"__area-placeholder");r.classList.contains(e+"__area-placeholder--error")&&a.classList.contains(e+"__form-area--error")&&(r.classList.remove(e+"__area-placeholder--error"),a.classList.remove(e+"__form-area--error")),r.classList.add(e+"__area-placeholder--top"),a.classList.add(e+"__form-area--focus")}),l.addEventListener("blur",function(t){var a=t.target;a.closest("."+e+"__form-group").querySelector("."+e+"__area-placeholder").classList.remove(e+"__area-placeholder--top"),a.classList.remove(e+"__form-area--focus")}));var _=document.getElementsByClassName(e+"__form"),m=!0,u=!1,d=void 0;try{for(var y,v=_[Symbol.iterator]();!(m=(y=v.next()).done);m=!0){var f=y.value;!function(e,t){e.addEventListener("submit",function(e){e.preventDefault(),e.stopPropagation();var a=document.getElementsByClassName(t+"__form-input"),r=!0,n=!1,s=void 0;try{for(var o,i=a[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var l=o.value;if(""===l.value&&(l.closest(".buy__show")||l.closest("#main-form"))){var _=l.closest("."+t+"__form-instance").querySelector("."+t+"__form-placeholder");_&&(_.classList.add(t+"__form-placeholder--error"),l.classList.add(t+"__form-input--error"),_.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}));return}var m=l.closest("."+t+"__form-instance").querySelector("."+t+"__form-placeholder");m&&m.classList.contains(t+"__form-placeholder--error")&&l.classList.contains(t+"__form-input--error")&&(m.classList.remove(t+"__form-placeholder--error"),l.classList.remove(t+"__form-input--error"))}}catch(e){n=!0,s=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw s}}var u=document.getElementsByClassName("buy__form-quantity")[0],d=document.getElementsByClassName("buy__tab"),y=document.getElementsByClassName("buy__nav-tab-item"),v=document.getElementsByClassName("buy__product-wrapper")[0];if(e.target.classList.contains("buy__form--first")){var f=document.getElementsByClassName("buy__form--second")[0];u.classList.add("buy__form-quantity--grid"),e.target.classList.remove("buy__show"),f.classList.add("buy__show"),d[0].classList.remove("buy__tab--active"),d[1].classList.add("buy__tab--active"),y[0].classList.remove("buy__nav-tab-item--active"),y[1].classList.add("buy__nav-tab-item--active")}if(e.target.classList.contains("buy__form--second")){var L=document.getElementsByClassName("buy__form--third")[0];e.target.classList.remove("buy__show"),L.classList.add("buy__show"),d[1].classList.remove("buy__tab--active"),d[2].classList.add("buy__tab--active"),y[1].classList.remove("buy__nav-tab-item--active"),y[2].classList.add("buy__nav-tab-item--active"),u.classList.add("buy__quantity-none"),u.classList.remove("buy__form-quantity--grid"),v.classList.add("buy__wrapper-none")}if(e.target.classList.contains("buy__form--third")){var b=document.getElementsByClassName("buy__form--first")[0];e.target.classList.remove("buy__show"),b.classList.add("buy__show"),d[2].classList.remove("buy__tab--active"),d[0].classList.add("buy__tab--active"),y[2].classList.remove("buy__nav-tab-item--active"),y[0].classList.add("buy__nav-tab-item--active"),u.classList.remove("buy__quantity-none"),window.location.href="#",v.classList.remove("buy__wrapper-none"),c()}var h=document.getElementsByClassName(t+"__form-area")[0];if(h){if(""===h.value){h.closest("."+t+"__form-group").querySelector("."+t+"__area-placeholder").classList.add(t+"__area-placeholder--error"),h.classList.add(t+"__form-area--error");return}var p=h.closest("."+t+"__form-group").querySelector("."+t+"__area-placeholder");p.classList.contains(t+"__area-placeholder--error")&&h.classList.contains(t+"__form-area--error")&&(p.classList.remove(t+"__area-placeholder--error"),h.classList.remove(t+"__form-area--error")),h.value="";var g=!0,E=!1,q=void 0;try{for(var B,S=a[Symbol.iterator]();!(g=(B=S.next()).done);g=!0)B.value.value=""}catch(e){E=!0,q=e}finally{try{g||null==S.return||S.return()}finally{if(E)throw q}}}else c()})}(f,e)}}catch(e){u=!0,d=e}finally{try{m||null==v.return||v.return()}finally{if(u)throw d}}}function c(){var e=document.querySelectorAll(".buy__form-input"),t=!0,a=!1,r=void 0;try{for(var n,s=e[Symbol.iterator]();!(t=(n=s.next()).done);t=!0)n.value.value=""}catch(e){a=!0,r=e}finally{try{t||null==s.return||s.return()}finally{if(a)throw r}}}var _=document.getElementsByClassName("main__inform-btn"),m=!0,u=!1,d=void 0;try{for(var y,v=_[Symbol.iterator]();!(m=(y=v.next()).done);m=!0)!function(){var e=y.value;e.addEventListener("click",function(t){if(window.innerWidth<=1280){var a=e.querySelector(".main__inform-hidden");a.classList.contains("main__inform-hidden--show")?(e.classList.remove("main__inform-btn--show"),a.classList.remove("main__inform-hidden--show")):(e.classList.add("main__inform-btn--show"),a.classList.add("main__inform-hidden--show"))}})}()}catch(e){u=!0,d=e}finally{try{m||null==v.return||v.return()}finally{if(u)throw d}}var f=document.getElementsByClassName("buy__select"),L=!0,b=!1,h=void 0;try{for(var p,g=f[Symbol.iterator]();!(L=(p=g.next()).done);L=!0)p.value.addEventListener("click",function(e){var t=e.target.closest(".buy__form-instance");t||(t=e.target.closest(".buy__form-quantity-item")),(t=t.querySelector(".buy__select-options")).classList.contains("buy__select-options--active")?t.classList.remove("buy__select-options--active"):t.classList.add("buy__select-options--active")})}catch(e){b=!0,h=e}finally{try{L||null==g.return||g.return()}finally{if(b)throw h}}var E=document.getElementsByClassName("buy__select-option"),q=!0,B=!1,S=void 0;try{for(var w,C=E[Symbol.iterator]();!(q=(w=C.next()).done);q=!0)!function(){var e=w.value;e.addEventListener("click",function(t){var a=t.target.closest(".buy__form-instance");a||(a=t.target.closest(".buy__form-quantity-item"));var r=(a=a.querySelector(".buy__option")).innerHTML;a.innerHTML=e.innerHTML,e.innerHTML=r,e.closest(".buy__select-options").classList.remove("buy__select-options--active"),"number"===e.getAttribute("data-type")&&function(){for(var e=document.querySelectorAll("[data-type='number']"),t=0;t<e.length;t++){for(var a=t,r=parseInt(e[t].innerHTML),n=t+1;n<e.length;n++)r>parseInt(e[n].innerHTML)&&(a=n,r=parseInt(e[n].innerHTML));var s=parseInt(e[t].innerHTML);e[t].innerHTML=parseInt(e[a].innerHTML),e[a].innerHTML=s}}()})}()}catch(e){B=!0,S=e}finally{try{q||null==C.return||C.return()}finally{if(B)throw S}}document.getElementById("quantity").addEventListener("change",function(){var e=parseInt(document.getElementById("quantity").value);document.getElementById("totalPrice").innerText=(1200*e).toFixed(0)+"$"});var N=1;function x(e){var t,a=document.getElementsByClassName("main__img-item"),r=Array.from(a).filter(function(e){return!e.classList.contains("main__img-item--big")}),n=document.getElementsByClassName("main__img-dot"),s=document.querySelector(".main__img-number");for(e>r.length&&(N=1),e<1&&(N=r.length),t=0;t<a.length;t++)a[t].style.display="none";for(t=0;t<n.length;t++)n[t].classList.remove("main__img-dot--active");r[N-1].style.display="block",n[N-1].classList.add("main__img-dot--active"),s.innerHTML="".concat(N,"/").concat(r.length)}x(1),document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector(".main__info-tab:first-child"),a=document.querySelector(".main__info-tab:last-child");t.addEventListener("click",function(){x(N+=-1)}),a.addEventListener("click",function(){x(N+=1)})}),document.getElementsByClassName("header__lang")[0].addEventListener("click",function(e){var t=e.target.closest(".header__logo-lang").querySelector(".header__select-options");t.classList.contains("header__select-options--active")?t.classList.remove("header__select-options--active"):t.classList.add("header__select-options--active")});var M=document.getElementsByClassName("header__select-option"),T=!0,k=!1,H=void 0;try{for(var I,A=M[Symbol.iterator]();!(T=(I=A.next()).done);T=!0)!function(){var e=I.value;e.addEventListener("click",function(t){var a=t.target.closest(".header__lang-tool-item").querySelector(".header__lang-title"),r=a.innerHTML;a.innerHTML=e.innerHTML,e.innerHTML=r,e.closest(".header__select-options").classList.remove("header__select-options--active")})}()}catch(e){k=!0,H=e}finally{try{T||null==A.return||A.return()}finally{if(k)throw H}}function D(){var e,t,a,r=(e=document.querySelectorAll(".buy__form-input--card"),t="",(e.forEach(function(e){t+=e.value}),16!==t.length||isNaN(t))?(document.getElementById("cardNumberValidation").textContent="Please enter a valid 16-digit card number.",!1):(document.getElementById("cardNumberValidation").textContent="",!0)),n=(a=document.querySelector('input[name="date"]').value,/^(0[1-9]|1[0-2]) \/ (2[2-9]|3[0-9])$/.test(a)?(document.getElementById("expirationDateValidation").textContent="",!0):(document.getElementById("expirationDateValidation").textContent="Please enter a valid expiration date in MM / YY format.",!1));document.getElementById("submitButtonn").disabled=!(r&&n)}document.querySelectorAll(".buy__form-input--card").forEach(function(e){e.addEventListener("input",D)}),document.querySelector('input[name="date"]').addEventListener("input",D),D();
//# sourceMappingURL=index.c2fbee98.js.map