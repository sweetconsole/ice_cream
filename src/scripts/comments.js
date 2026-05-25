document.addEventListener("DOMContentLoaded", function () {
	const photoSwiper = document.getElementById("photoSwiper")
	const commentsSwiper = document.getElementById("commentsSwiper")

	if (photoSwiper) {
		new Swiper(photoSwiper, {
			loop: true,
			autoplay: {
				delay: 10000,
				disableOnInteraction: false
			},
			allowTouchMove: false,
			simulateTouch: false,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			}
		})
	} else {
		console.log("ERROR commentsSwiper not loading!")
	}

	if (commentsSwiper) {
		new Swiper(commentsSwiper, {
			loop: true,
			pagination: {
				el: "#commentsSwiperPagination",
				clickable: true
			},
			autoplay: {
				delay: 15000,
				disableOnInteraction: false
			},
			allowTouchMove: true,
			simulateTouch: true
		})
	} else {
		console.log("ERROR commentsSwiper not loading!")
	}
})
