/* Scroll Part */

function scrolll() {
    var left = document.querySelector(".products-bot");
    left.scrollBy(-250, 0)
}
function scrollr() {
    var right = document.querySelector(".products-bot");
    right.scrollBy(250, 0)
}

/* End Scroll Part */

/* Nav Bar Hamburger */

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = 'rgb(41, 50, 60)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


/* End Nav Bar Hamburguer */

/* Specialties Section */

const initiator = document.getElementById("initiator-services")
const all_services = document.querySelector(".specialties-container .all_specialties-container ul")
const close_services = document.getElementById("close_all_services")

initiator.addEventListener("click", () => {
	all_services.style.display = "flex";
	close_services.style.display = "flex";
})

close_services.addEventListener("mousedown", () => {
	all_services.style.display = "none";
	close_services.style.display = "none";
})

/* End Specialties Section */