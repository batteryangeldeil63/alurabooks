const swiper = new Swiper(".swiper", {
    /* speed: 400, */
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 1024px
        1024: {
            spaceBetween: 50,
        },
    },
});
