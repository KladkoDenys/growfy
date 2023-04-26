"use srtict"

window.addEventListener('DOMContentLoaded', function() {

//---------------------------
//--Burger menu
//---------------------------
	const burgerBtn = document.querySelector('.icon-menu');

	burgerBtn.addEventListener('click', (e) => {
		const targetItem = e.target;

		if(targetItem.closest('.icon-menu')){

			document.querySelector('.header__container').classList.toggle('menu-open');

		}
	})

//---------------------------
//--
//---------------------------

});