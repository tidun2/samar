window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("a__logo").style.padding = "20px 0";
        document.getElementById("header-btn").style.padding = "20px 0"
        let elems = document.getElementsByClassName('nav__a');
        Array.prototype.filter.call(elems, function (testElement) {
            testElement.style.padding = "40px 15px"
        });
        document.getElementById("header").style.background = "white";
        document.querySelector("header").classList.toggle('onscroll', window.scrollY > 80)
    } else {
        document.getElementById("a__logo").style.padding = "35px 0";
        document.getElementById("header-btn").style.padding = "35px 0"
        let elems = document.getElementsByClassName('nav__a');
        Array.prototype.filter.call(elems, function (testElement) {
            testElement.style.padding = "55px 15px"
        });
        document.getElementById("header").style.background = "transparent";
        document.querySelector("header").classList.toggle('onscroll',window.scrollY > 80)

    }
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById('back-to-top').classList.add('cd-top--is-visible')
    } else{
        document.getElementById('back-to-top').classList.remove('cd-top--is-visible')
    }
    function topFunction() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    document.getElementById('back-to-top').addEventListener('click',function(){
        topFunction();
    })
}


lightGallery(document.getElementById("animated-thumbnails"), {
    selector: ".lightimg",
    plugins: [lgZoom, lgThumbnail, lgAutoplay, lgFullscreen, lgShare],
    alignThumbnails: "left",
    loop: true,
    allowMediaOverlap: true,
    toggleThumb: true,
    showZoomInOutIcons: true,
    actualSize: false,
    exThumbImage: "data-exthumbimage"
});

function changeColorPlanMonthly() {
    let yearly = document.getElementById('yearly');
    let monthly = document.getElementById('monthly');
    let onclick__plan = document.getElementById('onclick__plan');
    yearly.style.color = "white"
    monthly.style.color = "black"
    onclick__plan.style.transform = 'translateX(5px) translateY(4px)'
}

function changeColorPlanYearly() {
    let yearly = document.getElementById('yearly');
    let monthly = document.getElementById('monthly');
    let onclick__plan = document.getElementById('onclick__plan');
    yearly.style.color = "black"
    monthly.style.color = "white"
    onclick__plan.style.transform = 'translateX(115px) translateY(4px)'
}

var testimonialThumbs = new Swiper(".testimonial-thumbs", {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    freeMode: true,
    autoplay: true,
    loop: true,
    speed: 3000
});


var testimonialContent = new Swiper(".testimonial-comment", {
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    speed: 3000,
    thumbs: {
        swiper: testimonialThumbs
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});


$(document).ready(function () {
    'use strict';
    $(".clients-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplaySpeed: 3000,
        navSpeed: 3000,
        paginationSpeed: 3000,
        slideSpeed: 3000,
        smartSpeed: 3000,
        autoplay: true,
        dots: false,
        items: 6
    });
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplaySpeed: 3000,
        navSpeed: 3000,
        paginationSpeed: 3000,
        slideSpeed: 3000,
        smartSpeed: 3000,
        autoplay: true,
        dots: false,
        items: 3,
    });

});
