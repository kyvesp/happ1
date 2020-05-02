!function(n){var e={};function t(c){if(e[c])return e[c].exports;var l=e[c]={i:c,l:!1,exports:{}};return n[c].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)t.d(c,l,function(e){return n[e]}.bind(null,l));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function(err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\n\n/* const count = document.querySelector('.article__description--js');\nconst add = document.querySelector('.article__button--addjs');\nconst del = document.querySelector('.article__button--deljs');\n\nadd.addEventListener('click', (e) => {\n\tcount.innerHTML = parseInt(count.innerHTML) + 1;\n});\n\ndel.addEventListener('click', (e) => {\n\tconst currentValue = parseInt(count.innerHTML);\n\tif (currentValue > 0) {\n\t\tcount.innerHTML = currentValue - 1;\n\t}\n}); */\n\n\nconst count = document.querySelector('.article__description--js');\nconst add = document.querySelector('.article__button--addjs');\nconst del = document.querySelector('.article__button--deljs');\nconst key = new Date().toISOString().slice(0, 10);\n\nif (!localStorage.getItem(key)) {\n\tlocalStorage.setItem(key, 0)\n\tcount.innerHTML = '0';\n} else {\n\tcount.innerHTML = localStorage.getItem(key);\n}\n\nadd.addEventListener('click', (e) => {\n\tlocalStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);\n\tcount.innerHTML = localStorage.getItem(key);\n})\n\ndel.addEventListener('click', (e) => {\n\tconst currentValue = parseInt(localStorage.getItem(key));\n\tif (currentValue > 0) {\n\t\tlocalStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1);\n\t\tcount.innerHTML = localStorage.getItem(key);\n}})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xuXG5cbi8qIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2Rlc2NyaXB0aW9uLS1qcycpO1xuY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2J1dHRvbi0tYWRkanMnKTtcbmNvbnN0IGRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlX19idXR0b24tLWRlbGpzJyk7XG5cbmFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGNvdW50LmlubmVySFRNTCA9IHBhcnNlSW50KGNvdW50LmlubmVySFRNTCkgKyAxO1xufSk7XG5cbmRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlSW50KGNvdW50LmlubmVySFRNTCk7XG5cdGlmIChjdXJyZW50VmFsdWUgPiAwKSB7XG5cdFx0Y291bnQuaW5uZXJIVE1MID0gY3VycmVudFZhbHVlIC0gMTtcblx0fVxufSk7ICovXG5cblxuY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fZGVzY3JpcHRpb24tLWpzJyk7XG5jb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fYnV0dG9uLS1hZGRqcycpO1xuY29uc3QgZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2J1dHRvbi0tZGVsanMnKTtcbmNvbnN0IGtleSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIDApXG5cdGNvdW50LmlubmVySFRNTCA9ICcwJztcbn0gZWxzZSB7XG5cdGNvdW50LmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG59XG5cbmFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgKyAxKTtcblx0Y291bnQuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbn0pXG5cbmRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuXHRpZiAoY3VycmVudFZhbHVlID4gMCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgLSAxKTtcblx0XHRjb3VudC5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xufX0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);