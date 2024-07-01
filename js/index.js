console.log(window.innerWidth);
if (window.innerWidth < 768) {
    console.log("test");
    new Swiper(".brand-slider", {
        slidesPerView: "auto",
        wrapperClass: "brand-slider__list",
        slideClass: "brand-slider__item",
        spaceBetween: 16,
        pagination: {
            el: "#brandsPagination",
            clickable: true,
        },
    });
}
