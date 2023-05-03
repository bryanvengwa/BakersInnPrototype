"use strict";
// selection of elements
const tabButtons = document.querySelectorAll(".tabs");
const tabHandler = document.querySelector(".tab-links");
const recipes = document.querySelectorAll(".recipes");
const openModal = document.querySelector(".openModalA");
const modalA = document.querySelector(".modalA");
const modalB = document.querySelector(".modalB");
const closeModalA = document.querySelector(".close-modalA");
const closeModalB = document.querySelector(".close-modalB");
const btnopenModalB = document.querySelector(".openModalB");
const layers = document.querySelectorAll(".layer");
const texts = document.querySelectorAll(".texts");
const animates = document.querySelectorAll('.anime')
const openNext = document.querySelector('.openNext')
const closeModalC = document.querySelector(".close-modalC");
const modalC = document.querySelector('.modalC')


// RECIPE GALLERY SLIDER

console.log(layers);
const layersArr = [...layers];
console.log(layersArr);
const textsArr = [...texts];

let i = 0;
let change = true;
setInterval(function () {
	const textsArr = [...texts];
	const layersArr = [...layers];
	const animatesArr = [...animates]
	// layersArr[i].classList.add("gif");
	let x = i;
	if (i < 4) {
		layersArr[i].classList.remove("gif");
		animatesArr[i].classList.remove('hidden')
		animatesArr[i < 1 ? 3 : i - 1].classList.add('hidden')

		layersArr[( i < 1 ? 3 : i - 1)].classList.add("gif");
		i = x;

		textsArr[i].classList.toggle("hidden");

		///////////////////////////////////////

		///////////////////////////////////////
		if (i <= 2) {
			textsArr[i + 1].classList.remove("hidden");
		} else if ((i = 3)) {
			textsArr[0].classList.remove("hidden");
		}

		i++;
	} else if ((i = 4)) {
		i = 0;
		change = false;
	}
}, 3000);
console.log(layersArr);

// if (textsArr[i].classList.contains("hidden")) {
// 	console.log("hidden");
// 	textsArr[i].classList.remove("hidden");
// } else {
// 	textsArr[i].classList.add("hidden");
// }

// const
// tab for homepage

tabHandler.addEventListener("click", function (e) {
	const clicked = e.target.closest(".tabs");

	if (!clicked) return;
	tabButtons.forEach(function (button) {
		button.classList.remove("active");
	});
	e.target.classList.add("active");
	recipes.forEach(function (recipe) {
		recipe.classList.remove("active");
		recipe.classList.add("hidden");
		if (recipe.dataset.tab === clicked.dataset.tab) {
			console.log(recipe.dataset.tab, recipe);
			recipe.classList.remove("hidden");
			recipe.classList.add("active");
		}
	});
});

// window load animation
window.addEventListener("load", () => {
	const loader = document.querySelector(".loader");
	loader.classList.add("loader-hidden");
	loader.addEventListener("transitionend", () => {
		// document.body.removeChild("loader");
	});
});

// BOOKINGS MODAL -- MODALA
console.log(openModal, "modall");

openModal.addEventListener("click", function (e) {
	e.preventDefault();
	modalA.classList.remove("hidden");
	modalA.classList.add("open-modal");
});
closeModalA.addEventListener("click", function (e) {
	modalA.classList.add("hidden");
	modalA.classList.remove("open-modal");
});
// DONATIONS MODAL
btnopenModalB.addEventListener('click',function(){
	console.log("clicked")
	modalB.classList.toggle('hidden')
})
closeModalB.addEventListener("click", function (e) {
	modalB.classList.add("hidden");
	modalB.classList.remove("open-modal");
});
closeModalC.addEventListener("click", function (e) {
	modalC.classList.add("hidden");
	modalC.classList.remove("open-modal");
});

openNext.addEventListener('click',function(){
	modalC.classList.remove("hidden");
	modalB.classList.add('hidden')
})
