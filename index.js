
AOS.init({
    duration: 1000
});




/* section01-------------------------------------------------------------------------*/

var sec01Swiper = new Swiper("#section01 .mySwiper", {
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// $('.swiper-pagination-bullet').on('click', function () {
//     $('.carousel-caption').addClass('animated')
//     if ($('.carousel-caption').hasClass('animated') == true) {
//         $('.swiper-pagination-bullet').removeClass('animated')
//     }
// })

/* section05------------------------------------------------------------------------ */
var sec05Swiper = new Swiper("#section05 .mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
})

$(document).ready(function () {
    $('.collapse1').hide()
    $('.accordion-btn1').click(function () {
        $('.collapse1').slideToggle(500)
        $('.collapse2').slideUp(500)
        $('.collapse3').slideUp(500)
        return false
    })
})
$(document).ready(function () {
    $('.collapse2').hide()
    $('.accordion-btn2').click(function () {
        $('.collapse2').slideToggle(500)
        $('.collapse1').slideUp(500)
        $('.collapse3').slideUp(500)
        return false
    })
})
$(document).ready(function () {
    $('.collapse3').hide()
    $('.accordion-btn3').click(function () {
        $('.collapse3').slideToggle(500)
        $('.collapse2').slideUp(500)
        $('.collapse1').slideUp(500)
        return false
    })
})

$(document).ready(function () {
    $('.open').click(function () {
        $(this).addClass('active')
        $('.close').addClass('active')
    })
    $('.close').click(function () {
        $(this).removeClass('active')
        $('.open').removeClass('active')
    })
})

/* section06------------------------------------------------------------------------------- */
var sec06Swiper = new Swiper("#section06 .mySwiper", {
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
})