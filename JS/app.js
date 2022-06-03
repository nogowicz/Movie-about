const images = document.querySelectorAll('.image-container img');

let i = 0;
let j = 8;

function next() {
	document.getElementById('content' + (i + 1)).classList.remove('active');
	i = (j + i + 1) % j;
	document.getElementById('content' + (i + 1)).classList.add('active');
	if (i == 0) {
		document.getElementById('content' + 1).classList.add('active');
	}
}

function prev() {
	document.getElementById('content' + (i + 1)).classList.remove('active');
	i = (j + i - 1) % j;
	document.getElementById('content' + (i + 1)).classList.add('active');
}

setInterval(function() {
	next();
}, 5000);
