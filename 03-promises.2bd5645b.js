!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u=document.querySelector(".form");function a(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();for(var t=function(){var e=u.elements.delay.value,n=u.elements.step.value,t=u.elements.amount.value;return{delay:e,step:n,amount:t}}(),o=t.delay,i=t.step,l=t.amount,s=1;s<=l;s++){a(s,+o+i*s).then((function(n){return e(r).Notify.success("✅ Fulfilled promise ".concat(n.position," in ").concat(n.delay,"ms"))})).catch((function(n){return e(r).Notify.failure("❌ Rejected promise ".concat(n.position," in ").concat(n.delay,"ms"))}))}u.reset()}))}();
//# sourceMappingURL=03-promises.2bd5645b.js.map
