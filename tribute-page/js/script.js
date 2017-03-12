'use strict';

let lastScrollY = 0, animating = false, header = document.querySelector('header');
window.addEventListener('scroll', (e) => {
	lastScrollY = window.scrollY;
	if(!animating) {
		window.requestAnimationFrame(() => {
			header.style.backgroundPosition = `center calc(50% - ${lastScrollY * 0.2}px)`;
			animating = false;
		});
	}
	animating = true;
});
