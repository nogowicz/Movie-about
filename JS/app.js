// // Other important pens.
// // Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
// // Dashboard: https://codepen.io/themustafaomar/pen/jLMPKm

// let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler');
// let dropdownIsOpen = false;

// // Handle dropdown menues
// if (dropdowns.length) {
// 	// Usually I don't recommend doing this (adding many event listeners to elements have the same handler)
// 	// Instead use event delegation: https://javascript.info/event-delegation
// 	// Why: https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js
// 	// But since we only have two dropdowns, no problem with that.
// 	dropdowns.forEach((dropdown) => {
// 		dropdown.addEventListener('click', (event) => {
// 			let target = document.querySelector(`#${event.target.dataset.dropdown}`);

// 			if (target) {
// 				if (target.classList.contains('show')) {
// 					target.classList.remove('show');
// 					dropdownIsOpen = false;
// 				} else {
// 					target.classList.add('show');
// 					dropdownIsOpen = true;
// 				}
// 			}
// 		});
// 	});
// }

// // Handle closing dropdowns if a user clicked the body
// window.addEventListener('mouseup', (event) => {
// 	if (dropdownIsOpen) {
// 		dropdowns.forEach((dropdownButton) => {
// 			let dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`);
// 			let targetIsDropdown = dropdown == event.target;

// 			if (dropdownButton == event.target) {
// 				return;
// 			}

// 			if (!targetIsDropdown && !dropdown.contains(event.target)) {
// 				dropdown.classList.remove('show');
// 			}
// 		});
// 	}
// });

// // Open links in mobiles
// function handleSmallScreens() {
// 	document.querySelector('.navbar-toggler').addEventListener('click', () => {
// 		let navbarMenu = document.querySelector('.navbar-menu');

// 		if (navbarMenu.style.display === 'flex') {
// 			navbarMenu.style.display = 'none';
// 			return;
// 		}

// 		navbarMenu.style.display = 'flex';
// 	});
// }

// handleSmallScreens();

const images = document.querySelectorAll('.image-container img');

let i = 0; // current slide
let j = 9; // total slides

function next() {
	document.getElementById('content' + (i + 1)).classList.remove('active');
	i = (j + i + 1) % j;
	document.getElementById('content' + (i + 1)).classList.add('active');
	if (i == 0) {
		deactivate(j);
		document.getElementById('content' + 1).classList.add('active');
	}
	deactivate(i);
	indicator(i + 1);
}

function prev() {
	document.getElementById('content' + (i + 1)).classList.remove('active');

	i = (j + i - 1) % j;
	document.getElementById('content' + (i + 1)).classList.add('active');
	deactivate(i);
	indicator(i + 1);
}

function indicator(num) {
	dots.forEach(function(dot) {
		dot.style.backgroundColor = 'transparent';
	});
	document.querySelector('.dot-container button:nth-child(' + num + ')').style.backgroundColor = '#66f';
}

function deactivate(num) {
	document.querySelector('.dot-container button:nth-child(' + num + ')').style.backgroundColor = 'transparent';
}

setInterval(function() {
	next();
}, 5000);
