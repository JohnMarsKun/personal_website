/**
handle the Nika GIF animation
*/
function showNikaGif(buttonId, gifId) {
	var button = document.getElementById(buttonId);
	var rect = button.getBoundingClientRect();
	var gif = document.getElementById(gifId);

	gif.style.display = 'block'; // make the GIF visible
	gif.style.left = rect.left + 35 + 'px';
	gif.style.top = (rect.top + rect.height - 8) + 'px';

	setTimeout(function () {
		gif.style.opacity = '0';
		setTimeout(function () {
			gif.style.display = 'none';
		}, 1000);
	}, 2000);
}

/** Load content function that switches between different sections*/
function loadContent(contentId) {
	const currentClass = document.getElementsByClassName("current")[0];
	currentClass.className = "not-current";

	switch (contentId) {
		case 'home':
			document.getElementById("homeNav").className = "current flicker-anim";
			loadHomeContent();
			break;
		case 'education':
			document.getElementById("eduNav").className = "current flicker-anim";
			loadEducationContent();
			break;
		case 'experience':
			document.getElementById("expNav").className = "current flicker-anim";
			loadExperienceContent();
			break;
		case 'books':
			document.getElementById("booksNav").className = "current flicker-anim";
			loadBookContent();
			break;
		default:
			console.error('Invalid content ID:', contentId);
	}
}

function loadHomeContent() {
	document.getElementById('contents2').innerHTML = homeContent;
}

function loadEducationContent() {
	showNikaGif('eduNav', 'lnikaGifedu');
	document.getElementById('contents2').innerHTML = educationContent;
}

function loadExperienceContent() {
	showNikaGif('expNav', 'lnikaGifexp');
	document.getElementById('contents2').innerHTML = experienceContent;
}

function loadBookContent() {
	showNikaGif('booksNav', 'lnikaGifbooks');
	document.getElementById('contents2').innerHTML = bookContent;
}

window.onload = function () {
	loadHomeContent();
	document.body.style.opacity = '1';
};

function easterEgg() {
	document.getElementById('profile').innerHTML = '<img src="src/easter_egg.png" style="width:250px">';
	setTimeout(() => {
		document.getElementById('profile').innerHTML = '<img src="src/pfp2.png" alt="Profile Image" onclick="easterEgg()">';
	}, 100);
}
