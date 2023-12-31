"use strict";
document.addEventListener("DOMContentLoaded", function () {
	//elements
	const navigationLinks = document.querySelectorAll('.header-link a');
	const hamburgerIcon = document.querySelector("header").querySelector(".hamburger");
	const headerMenu = document.querySelector("header").querySelector(".header-menu");
	const heroMotto = document.querySelector("section.hero").querySelector("h3");
	const register_link = "https://hazeldaniel.github.io/get-linked-ai-template-register/"
	const register_button = document.querySelector(".header-cta button");
	const headerCtaButton = document.querySelector(".header-cta button");
	const logoText = document.querySelector(".logo-text");
	const register_button_hero = document.querySelector(".header-cta button");
	const heroCta = document.querySelector(".hero-cta");
	let toggleCount = 0;

	const initBounce = function () {
		function removeBounceClass() {
			const elements = document.querySelectorAll('.bounce');
			elements.forEach((element) => {
				element.classList.remove('bounce');
			});
		}

		function addBounceClass(entries) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('bounce');
				}
			});
		}

		const observerOptions = {
			root: null,
			rootMargin: '0px',
		};

		const observer = new IntersectionObserver(addBounceClass, observerOptions);

		removeBounceClass();

		const elements = document.querySelectorAll('.animate-bounce');
		elements.forEach((element) => {
			observer.observe(element);
		});
		
	}

	const handleLeftTimelineInView = function () {

		function handleIntersection(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add("join_left");
					
					observer.unobserve(entry.target);
				}
			});
		}

		const observer = new IntersectionObserver(handleIntersection, {
			root: null,
			rootMargin: "0px",
			threshold: 0.1
		});

		const componentLeftElements = document.querySelectorAll(".component-left");

		componentLeftElements.forEach(element => {
			observer.observe(element);
		});
	}

	const handleRightTimelineInView = function () {

		function handleIntersection(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add("join_right");
					
					observer.unobserve(entry.target);
				}
			});
		}

		const observer = new IntersectionObserver(handleIntersection, {
			root: null,
			rootMargin: "0px",
			threshold: 0.1
		});

		const componentLeftElements = document.querySelectorAll(".component-right");

		componentLeftElements.forEach(element => {
			observer.observe(element);
		});
	}

	const initHeaderLinks = function() {

		navigationLinks.forEach(link => {
			link.addEventListener('click', (event) => {

				navigationLinks.forEach(navLink => {
					navLink.classList.remove('active');
				});
				link.classList.add('active');
			});
		});
	}

	const handleHamburgerClick = function() {
		hamburgerIcon.addEventListener('click', (_) => {
			hamburgerIcon.classList.toggle("opened");
			toggleCount++;
			if (toggleCount % 2) {
				headerMenu.style.visibility = "visible";
			}
			else
			{
				headerMenu.style.visibility = "hidden";

			}
		})
	}

	const initializeTyped = function() {

		const targetElement = document.getElementById("typed-element");
		targetElement.textContent = "";
		const text = "Igniting a Revolution in HR Innovation";
		let index = 0;
		let text_string = `
				<span>
					<svg width="255" viewBox="0 0 255 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5"/>
					</svg>
				</span>
		`;
		let child_span = document.createElement("span");
		child_span.innerHTML = text_string;
		let new_el = child_span.firstElementChild;

		function type() {
			if (index < text.length) {
				targetElement.textContent += text.charAt(index);
				index++;
				setTimeout(type, 100);
			}
			else
			{
				targetElement.appendChild(new_el);
			}
		}

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					type();
					observer.unobserve(entry.target);
				}
			});
		}); 
		observer.observe(targetElement);

  };

	const initCountDown = function () {
		function countdown() {
			const countdownDate = new Date("2027-12-31 23:59:59").getTime(); // Set your target date and time
			const countdownElement = document.getElementById("countdown");

			function updateCountdown() {
				const now = new Date().getTime();
				const timeRemaining = countdownDate - now;

				if (timeRemaining <= 0) {
					clearInterval(interval);
					countdownElement.innerHTML = "Countdown expired!";
					return;
				}

				const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
				const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

				document.querySelector(".hero-countdown-div").querySelector(".hour-countdown").innerText = hours.toString().padStart(2, "0");
				document.querySelector(".hero-countdown-div").querySelector(".minute-countdown").innerText = minutes.toString().padStart(2, "0");
				document.querySelector(".hero-countdown-div").querySelector(".seconds-countdown").innerText = seconds.toString().padStart(2, "0");
			}

			updateCountdown();
			const interval = setInterval(updateCountdown, 1000);
		}

		countdown();
	}

	const handle_route_register = function () {
		register_button.addEventListener('click', function() {
      window.location.href = register_link;
    });
		register_button_hero.addEventListener('click', function() {
			window.location.href = register_link;
		});
		logoText.addEventListener('click', function() {
			window.location.href = register_link;
		});
		heroCta.addEventListener('click', function() {
			window.location.href = register_link;
		});
	}

	const handleToastRender = function(message) {
		const toast = document.querySelector('.toast');

		if (toast) {
			const pElement = toast.querySelector('p');

			if (pElement)
				pElement.textContent = message;
			toast.classList.add('slide-in');
		}
	};

	const handleAccordionExpansion = function() {

		const controlElements = document.querySelectorAll(".control");
		const accordionElements = document.querySelectorAll(".accordion-item");

		controlElements.forEach(controlElement => {
			controlElement.addEventListener("click", () => {

				const parentAccordionItem = controlElement.closest(".accordion-item");

				if (parentAccordionItem) {
					if (parentAccordionItem.classList.contains("expanded")) {
						controlElement.textContent = "+";
						parentAccordionItem.classList.remove("expanded");
					} else {
						accordionElements.forEach((element)=> {
							element.classList.remove("expanded");
							element.querySelector(".control").textContent = "+";
						});
						parentAccordionItem.classList.add("expanded");
						controlElement.textContent = "-";
					}
				}
			});
		});

	}


	// driver code
	initHeaderLinks();
	handleHamburgerClick();
	initializeTyped();
	initCountDown();
	initBounce();
	handle_route_register();
	handleAccordionExpansion();
	handleLeftTimelineInView();
	handleRightTimelineInView();

});
