function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector(".form");function s(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l.addEventListener("submit",(function(t){t.preventDefault();const{delay:n,step:o,amount:i}=function(){const e=l.elements.delay.value,t=l.elements.step.value,n=l.elements.amount.value;return{delay:e,step:t,amount:n}}();for(let t=1;t<=i;t++){s(t,+n+o*t).then((t=>e(r).Notify.success(`✅ Fulfilled promise ${t.position} in ${t.delay}ms`))).catch((t=>e(r).Notify.failure(`❌ Rejected promise ${t.position} in ${t.delay}ms`)))}l.reset()}));
//# sourceMappingURL=03-promises.792d3fef.js.map