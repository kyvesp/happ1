"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


/* const count = document.querySelector('.article__description--js');
const add = document.querySelector('.article__button--add-js');
const del = document.querySelector('.article__button--del-js');

add.addEventListener('click', (e) => {
	count.innerHTML = parseInt(count.innerHTML) + 1;
});

del.addEventListener('click', (e) => {
	const currentValue = parseInt(count.innerHTML);
	if (currentValue > 0) {
		count.innerHTML = currentValue - 1;
	}
}); */


const count = document.querySelector('.article__description--js');
const add = document.querySelector('.article__button--add-js');
const del = document.querySelector('.article__button--del-js');
const key = new Date().toISOString().slice(0, 10);

if (!localStorage.getItem(key)) {
	localStorage.setItem(key, 0)
	count.innerHTML = '0';
} else {
	count.innerHTML = localStorage.getItem(key);
}

add.addEventListener('click', (e) => {
	localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
	count.innerHTML = localStorage.getItem(key);
})

del.addEventListener('click', (e) => {
	const currentValue = parseInt(localStorage.getItem(key));
	if (currentValue > 0) {
		localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1);
		count.innerHTML = localStorage.getItem(key);
}})