
AOS.init({
    duration: 1000
});

/* navbar---------------------------------------- */
// hamburger //
$('.nav-toggler').click(function(){
    if($('.menu').hasClass('show')){
        $('.menu').removeClass('show')
        $('.fa-x').css('display','none')
        $('.fa-bars').css('display','block')
    }else{
        $('.menu').addClass('show')
        $('.fa-bars').css('display','none')
        $('.fa-x').css('display','block')

    }
})


// menu //
$(document).ready(function(){
    $('.pages-dropdown').hide()
    $('.pages').click(function(){
        $('.pages-dropdown').slideToggle(500)
        $('.blog-dropdown').slideUp(500)
        $('.shop-dropdown').slideUp(500)

        if($('.i-toggler-1').hasClass('rotate')){
            $('.i-toggler-1').removeClass('rotate')
        }else{
            $('.i-toggler-1').addClass('rotate')
        }
    })
})
$(document).ready(function(){
    $('.blog-dropdown').hide()
    $('.blog').click(function(){
        $('.blog-dropdown').slideToggle(500)
        $('.pages-dropdown').slideUp(500)
        $('.shop-dropdown').slideUp(500)

        if($('.i-toggler-2').hasClass('rotate')){
            $('.i-toggler-2').removeClass('rotate')
        }else{
            $('.i-toggler-2').addClass('rotate')
        }
    })
})
$(document).ready(function(){
    $('.shop-dropdown').hide()
    $('.shop').click(function(){
        $('.shop-dropdown').slideToggle(500)
        $('.blog-dropdown').slideUp(500)
        $('.pages-dropdown').slideUp(500)

        if($('.i-toggler-3').hasClass('rotate')){
            $('.i-toggler-3').removeClass('rotate')
        }else{
            $('.i-toggler-3').addClass('rotate')
        }
    })
})

// search //
$('.search').click(function(){
    if($('.navbar-hide').hasClass('show')){
        $('.navbar-hide').removeClass('show')
    }else{
        $('.navbar-hide').addClass('show')
    }

})

// lang //
$('.lang').click(function(){
    if($('.lang-dropdown').hasClass('show')){
        $('.lang-dropdown').removeClass('show')
    }else{
        $('.lang-dropdown').addClass('show')
    }

})

// popover //
$('.popover').click(function(){
    if($('.popover-info').hasClass('show')){
        $('.popover-info').removeClass('show')
    }else{
        $('.popover-info').addClass('show')
    }

})





/* section01-------------------------------------------------------------------------*/

var sec01Swiper = new Swiper("#section01 .mySwiper", {
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* section04------------------------------------------------------------------------ */
let valueDisplays=document.querySelectorAll('.num')
let interval=2000

valueDisplays.forEach((valueDisplay)=>{
    let startValue=0
    let endValue=parseInt(valueDisplay.getAttribute('data-val'))
    let duration=Math.floor(interval/endValue)
    let counter=setInterval(function(){
        startValue+=1
        valueDisplay.textContent=startValue
        if(startValue==endValue){
            clearInterval(counter)
        }
    },duration)
})


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

/* section07------------------------------------------------------------------------------------- */
$('.select').click(function(){
    if($('.caret').hasClass('caret-rotate')){
        $('.caret').removeClass('caret-rotate')
        $('.menu').removeClass('menu-open')
    } else{
        $('.caret').addClass('caret-rotate')
        $('.menu').addClass('menu-open')
    }
})

/* section 09----------------------------------------------------------- */
// var sec09Swiper = new Swiper("#section09 .mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     }
// })

var sec09Swiper = new Swiper("#section09 .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        768:{
            slidesPerView: 2,
        },
        1200:{
            slidesPerView: 4,

        }
    }
});

/* section10--------------------------------------------------------------- */
var sec10Swiper = new Swiper("#section10 .mySwiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        768:{
            slidesPerView:2
        },
        1200:{
            slidesPerView:3
        }
    },

});

/* section11---------------------------------------------------------------------- */
var sec11Swiper = new Swiper("#section11 .mySwiper", {
    spaceBetween: 30,
    // centeredSlides: true,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        768:{
            slidesPerView: 2,
        },
        1200:{
            slidesPerView:3
        }
    }
})


/* RWD */
/* 768px-------------------------------------------------------- */
