(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('body').addClass('page-loaded');
			$('.preloader').delay(1000).fadeOut(300);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var headerUpper = $('.header-upper');
			var headerTop = $('.header-top');
			var scrollLink = $('.scroll-to-top');
			
			// Cek jika scroll lebih dari 100px
			if (windowpos > 136) {
				// Menambahkan kelas sticky pada header-upper
				headerUpper.addClass('sticky');
				// Menyembunyikan header-top
				headerTop.fadeOut(300);
				// Menampilkan scroll-to-top
				scrollLink.fadeIn(1000);
			} else {
				// Menghapus kelas sticky pada header-upper
				headerUpper.removeClass('sticky');
				// Menampilkan kembali header-top
				headerTop.fadeIn(300);
				// Menyembunyikan scroll-to-top
				scrollLink.fadeOut(300);
			}
		}
	}
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
	
	headerStyle();

	$(window).on('scroll', function() {
		headerStyle();
	});

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
		
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	// Loading masuk page akan di gantikan dengan fungsi berikut
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.heading-paralax').css({
        'transform' : 'translate(0px, '+ (wScroll * 3) +'%)'
    })
   console.log(wScroll); 
});

// Mencegah Inspect Element dan View Source
document.addEventListener("keydown", function (event) {
    if (
        (event.ctrlKey && (event.key === "u" || event.key === "i" || event.key === "j" || event.key === "s")) || 
        (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J" || event.key === "C")) || 
        (event.key === "F12")
    ) {
        event.preventDefault();
        console.log("Inspect Element telah dinonaktifkan!"); // Debugging
    }
});
// Mencegah Klik Kanan
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
// Mencegah Drag & Drop pada Semua Gambar
document.addEventListener("dragstart", function (event) {
    event.preventDefault();
});
// Mencegah Klik Kanan pada Gambar Secara Spesifik
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("contextmenu", event => event.preventDefault());
});

// SWIPER SLIDER CARD
// Data slide untuk masing-masing figure
const sliderData = [
    [
        { img: "assets/img/card/bph/kahim.png", title: "#" },
        { img: "assets/img/card/bph/wahim.png", title: "#" },
        { img: "assets/img/card/bph/sekum.png", title: "#" },
        { img: "assets/img/card/bph/wasekum.png", title: "#" },
        { img: "assets/img/card/bph/bendum.png", title: "#" },
        { img: "assets/img/card/bph/wabendum.png", title: "#" }
    ],
    [
        { img: "assets/img/card/internal/indyra1.png", title: "#" },
        { img: "assets/img/card/internal/anya.png", title: "#" },
        { img: "assets/img/card/internal/nazla.png", title: "#" },
        { img: "assets/img/card/internal/ambar.png", title: "#" },
        { img: "assets/img/card/internal/andhika.png", title: "#" },
        { img: "assets/img/card/internal/chandra.png", title: "#" },
        { img: "assets/img/card/internal/indyra2.png", title: "#" },
        { img: "assets/img/card/internal/andhika2.png", title: "#" },
        { img: "assets/img/card/internal/hanna.png", title: "#" },
        { img: "assets/img/card/internal/sasa.png", title: "#" },
    ],
    [
        { img: "assets/img/card/relasi/haliza.png", title: "#" },
        { img: "assets/img/card/relasi/ayas.png", title: "#" },
        { img: "assets/img/card/relasi/akmal.png", title: "#" },
        { img: "assets/img/card/relasi/martin.png", title: "#" },
        { img: "assets/img/card/relasi/rois.png", title: "#" },
        { img: "assets/img/card/relasi/adeyn.png", title: "#" },
        { img: "assets/img/card/relasi/dewa.png", title: "#" },
        { img: "assets/img/card/relasi/zen.png", title: "#" },
        { img: "assets/img/card/relasi/refi.png", title: "#" },
    ],
    [
        { img: "assets/img/card/rnd/openg.png", title: "#" },
        { img: "assets/img/card/rnd/sambo.png", title: "#" },
        { img: "assets/img/card/rnd/hehes.png", title: "#" },
        { img: "assets/img/card/rnd/sayainimah.png", title: "#" },
        { img: "assets/img/card/rnd/arif.png", title: "#" },
        { img: "assets/img/card/rnd/jibran.png", title: "#" },
        { img: "assets/img/card/rnd/raika.png", title: "#" },
        { img: "assets/img/card/rnd/auf.png", title: "#" },
        { img: "assets/img/card/rnd/manray.png", title: "#" },
    ],
    [
        { img: "assets/img/card/infokom/wayway.png", title: "#" },
        { img: "assets/img/card/infokom/nafkhan.png", title: "#" },
        { img: "assets/img/card/infokom/raihan.png", title: "#" },
        { img: "assets/img/card/infokom/rey.png", title: "#" },
        { img: "assets/img/card/infokom/alen.png", title: "#" },
        { img: "assets/img/card/infokom/zidan.png", title: "#" },
        { img: "assets/img/card/infokom/isma.png", title: "#" },
        { img: "assets/img/card/infokom/syahid.png", title: "#" },
        { img: "assets/img/card/infokom/atika.png", title: "#" },
        { img: "assets/img/card/infokom/arsya.png", title: "#" },
    ],
    [
        { img: "assets/img/card/edukasi/zul.png", title: "#" },
        { img: "assets/img/card/edukasi/inong.png", title: "#" },
        { img: "assets/img/card/edukasi/jeki.png", title: "#" },
        { img: "assets/img/card/edukasi/anggun.png", title: "#" },
        { img: "assets/img/card/edukasi/bahrul.png", title: "#" },
        { img: "assets/img/card/edukasi/nugi.png", title: "#" },
        { img: "assets/img/card/edukasi/orifake.png", title: "#" },
        { img: "assets/img/card/edukasi/drina.png", title: "#" },
        { img: "assets/img/card/edukasi/rifki.png", title: "#" },
        { img: "assets/img/card/edukasi/sidqi.png", title: "#" },
    ]
];

// Fungsi untuk mengganti isi slider
function updateSwiperContent(index) {
    const swiperWrapper = document.querySelector(".swiper-wrapper");

    // Kosongkan isi swiper-wrapper
    swiperWrapper.innerHTML = "";

    // Tambahkan slide berdasarkan data dari sliderData[index]
    sliderData[index].forEach((item) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <p>${item.title}</p>
        `;
        swiperWrapper.appendChild(slide);
    });

    // Perbarui Swiper agar mengenali slide baru
    swiperInstance.update();
}

// POPUP CARD
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup-slider");
    const closeBtn = popup.querySelector(".close-btn");
    const figures = document.querySelectorAll(".card-3d figure");

    let swiperInstance;

    figures.forEach((figure, index) => {
        figure.addEventListener("click", () => {
            // Tampilkan popup
            popup.classList.remove("hidden");

            // Perbarui konten Swiper sesuai figure yang diklik
            updateSwiperContent(index);

            // Geser ke slide pertama
            swiperInstance.slideTo(0);
        });
    });

    closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    // Inisialisasi Swiper
    swiperInstance = new Swiper(".swiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

