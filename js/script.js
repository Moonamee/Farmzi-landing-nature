$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});

for (let a = 1; a <= $(".mobile ul li").length; a++){ 
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");    
}


const swiper = new Swiper('.swiper-container-1', {
    // slidesPerView: 2,

    // spaceBetween: 10,

    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

});



const slider2 = new Swiper('.swiper-container-2', {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    clickable: true,
    paginationClickable: true,
    spaceBetween: 10,
    speed: 1000,
});


// ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


