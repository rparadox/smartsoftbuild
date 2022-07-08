//swiper js
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//end swiper js

//fancy box js
$(document).ready(function () {
    $('main>section#services>section>div').click(function () {
        $('section.fancy-box').css({
            "animationName": "animate",
            "animationDuration": "300ms",
            "animationTimingFunction": "linear",
            "display": "block"
        })
        $("<div class='backBox'></div>").insertAfter("main>section.fancy-box");
        $('main>div.backBox').click(function () {
            $('main>section.fancy-box').css({
                "animationName": "animate1",
                "animationDuration": "300ms",
                "animationTimingFunction": "linear",
            })
            setTimeout(function () {
                $('main>section.fancy-box').css({
                    "display": "none"
                })
            }, 300)
            $('main>div.backBox').remove()
        })
    })
    $('main>section.fancy-box>div:nth-of-type(1)>i').click(function () {
        $('main>section.fancy-box').css({
            "animationName": "animate1",
            "animationDuration": "300ms",
            "animationTimingFunction": "linear",
        })
        setTimeout(function () {
            $('main>section.fancy-box').css({
                "display": "none"
            })
        }, 300)
        $('main>div.backBox').remove()
    })
})

// end fancy box js
// owl
$(document).ready(function () {
    $('.owl-carousel').owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    responsiveClass: true,
    lazyLoad: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 3,
        }
    }
})
// end owl