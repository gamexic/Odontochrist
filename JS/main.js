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
});

close_services.addEventListener("mousedown", () => {
	all_services.style.display = "none";
	close_services.style.display = "none";
});

/* End Specialties Section */

/* Specialty Section */

const specialties_image = document.getElementById("specialties_image");
const specialty_title = document.getElementById("specialty-title");
const specialty_image = document.getElementById("specialty-image");
const specialty_FQ = document.getElementById("specialty-FQ");
const specialty_FI = document.getElementById("specialty-FI");
const specialty_SQ = document.getElementById("specialty-SQ");
const specialty_SI = document.getElementById("specialty-SI");

function ortodoncia() {
	specialties_image.style.backgroundImage = "url(https://www.higienistasvitis.com/wp-content/uploads/2016/08/HABITOS-DE-HIGIENE-ORAL-EN-PACIENTES-CON-ORTODONCIA_A_shutterstock_417290032.jpg)";
	specialty_title.innerText = "Ortodoncia";
	specialty_image.src = "../IMG/ortodonciaa.jpeg";
	specialty_FQ.innerText = "¿Qué es la Ortodoncia?";
	specialty_FI.innerText = "Lorem10";
	specialty_SQ.innerText = "¿Cómo se hace la Ortodoncia?";
	specialty_SI.innerText = "Lorem30";
};
function profilaxis() {
	specialties_image.style.backgroundImage = "url(https://clinicabarreiro.es/wp-content/uploads/2016/11/profilaxis-dental.jpg)";
	specialty_title.innerText = "Profilaxis Dental";
	specialty_image.src = "../IMG/profilaxis.jpeg";
	specialty_FQ.innerText = "¿Qué es la Profilaxis Dental?";
	specialty_FI.innerText = "Lorem10";
	specialty_SQ.innerText = "¿Cómo se hace la Profilaxis Dental?";
	specialty_SI.innerText = "Lorem30";
};
function curaciones() {
	specialties_image.style.backgroundImage = "url(https://static.wixstatic.com/media/a758a3_e378c39709ad44ccaaff76aabb357b09~mv2.png/v1/fill/w_740,h_650,al_c,q_95/a758a3_e378c39709ad44ccaaff76aabb357b09~mv2.webp)";
	specialty_title.innerText = "Curación Dental";
	specialty_image.src = "../IMG/curaciones.jpeg";
	specialty_FQ.innerText = "¿Qué es la Curación Dental?";
	specialty_FI.innerText = "Lorem10";
	specialty_SQ.innerText = "¿Cómo se hace la Curación Dental?";
	specialty_SI.innerText = "Lorem30";
};
function endodoncia() {
	specialties_image.style.backgroundImage = "url(https://expertdent.pe/upload/thumb/907x540_16510953602895dda6091.jpg)";
	specialty_title.innerText = "Endodoncia";
	specialty_image.src = "../IMG/endodoncia.jpeg";
	specialty_FQ.innerText = "¿Qué es la Endodoncia?";
	specialty_FI.innerText = "Lorem10";
	specialty_SQ.innerText = "¿Cómo se hace la Endodoncia?";
	specialty_SI.innerText = "Lorem30";
};
function cirugia() {
	specialties_image.style.backgroundImage = "url(https://www.clinicasdentalbell.es/wp-content/uploads/2021/03/preguntas-cirugia-bucal-CD-1024x683.jpg)";
	specialty_title.innerText = "Cirugía Dental";
	specialty_image.src = "../IMG/cirujia_dental.jpeg";
	specialty_FQ.innerText = "¿Qué es la Cirugía Dental?";
	specialty_FI.innerText = "Lorem10";
	specialty_SQ.innerText = "¿Cómo se hace la Cirugía Dental?";
	specialty_SI.innerText = "Lorem30";
};
function rehabilitacion() {
	specialties_image.style.backgroundImage = "url(https://1.bp.blogspot.com/-1_WbW4XopoA/Xp5fdgJFCCI/AAAAAAAAEy0/xvdumOBvyNUwtipDhe9czQ6zqlZ7qT3GQCEwYBhgLKs0DAL1OcqxUXqM1Y75-cY0eoszfCkaVcDh7BhMF6w2ni_g3pFr6bHj_AkShTUtmhIId2EHFccV8GhfCbOLEIhzA7zC-DTMH_HpypSqLAQT8Ug4M-S4eP-A4a9WQpKQ5v_wUoapV1naBC_QneG_fsPGy5OGSiWntAxyDoukJp33jsBWofyFR38iBSZj4eynLSQspOaBqneHfhSi7rvpIpOeyaUoIay6uMh7tMvuU6SoTbPKA4R0BicP74pdLwXkbtRnv7AawBTs43Tk6XUafzr7_8wG8zyWC7FSs_H0cNgO-RZfCuAasfKcrh-tZUcesPT7LapuDevhWnQx5JIIpzNn4huHZTGJjHN_Zjq0ly7F_u0yp2nsX-oxOxHZkd4yoPDv6uBXa5msIaQH2QRLEUcRa0zsW7y0yLSJqgdfc_wErGJxRYgAJuboia3x5841U_sI4CxFsHHXBHh64FYj-74kMvmFCHJeE6gZgoC6tZRcUWYLw05LHZXfcul33LDHDxQiENb-TMeUbnnF7F-D9K8Zf6z6SUYGaBbXjBj9JfQiube3sEczVLgKBZhfq6D8vR0t5r9ZZEe4_CeOOo_MPlu14BWcYBK8cfYxQ9gW_rl8w6sP59AU/s1600/rehabilitaci%25C3%25B3n%2Boral.jpg)";
	specialty_title.innerText = "Rehabilitación Oral";
	specialty_image.src = "../IMG/rehabilitacion_oral.jpeg";
	specialty_FQ.innerText = "¿Qué es la Rehabilitación Oral?";
	specialty_FI.innerText = "Lorem10";
	specialty_SQ.innerText = "¿Cómo se hace la Rehabilitación Oral?";
	specialty_SI.innerText = "Lorem30";
};
function radiologia() {
	specialties_image.style.backgroundImage = "url(https://radiologiadentallaspalmas.com/wp-content/uploads/2019/07/post.-pan-1170x658.jpeg)";
	specialty_title.innerText = "Radiología Dental";
	specialty_image.src = "../IMG/radiologia_dental.jpeg";
	specialty_FQ.innerText = "¿Qué es la Radiología Dental?";
	specialty_FI.innerText = "Lorem10";
	specialty_SQ.innerText = "¿Cómo se hace la Radiología Dental?";
	specialty_SI.innerText = "Lorem30";
};
function odontopediatria() {
	specialties_image.style.backgroundImage = "url(https://escuelaorigen.com/wp-content/uploads/shutterstock_663132562.jpg)";
	specialty_title.innerText = "Odontopediatría";
	specialty_image.src = "../IMG/odontopediatria.jpeg";
	specialty_FQ.innerText = "¿Qué es la Odontopediatría?";
	specialty_FI.innerText = "Lorem10";
	specialty_SQ.innerText = "¿Cómo se hace la Odontopediatría?";
	specialty_SI.innerText = "Lorem30";
};
function estetica() {
	specialties_image.style.backgroundImage = "url(https://www.topdoctors.mx/files/Image/large/a2304a7289ff7e4f12dd73cc42e0f45b.jpg)";
	specialty_title.innerText = "Estética Dental";
	specialty_image.src = "../IMG/estetica_dental.jpeg";
	specialty_FQ.innerText = "¿Qué es la Estética Dental?";
	specialty_FI.innerText = "Lorem10";
	specialty_SQ.innerText = "¿Cómo se hace la Estética Dental?";
	specialty_SI.innerText = "Lorem30";
};
function blanqueamiento() {
	specialties_image.style.backgroundImage = "url(https://www.dentaltix.com/es/sites/default/files/blanqueamiento-dental-peroxido.jpg)";
	specialty_title.innerText = "Blanqueamiento Dental";
	specialty_image.src = "../IMG/blanqueamiento.jpeg";
	specialty_FQ.innerText = "¿Qué es el Blanqueamiento Dental?";
	specialty_FI.innerText = "Lorem10";
	specialty_SQ.innerText = "¿Cómo se hace el Blanqueamiento Dental?";
	specialty_SI.innerText = "Lorem30";
};

/* End Specialty Section */