let button = document.querySelector(".section__show-more-button");
let wrapper = document.querySelector(".brand-slider__list");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    button.classList.toggle("section__show-more-button--reversed");
    wrapper.classList.toggle("brand-slider__list--preview");

    if (wrapper.classList.contains("brand-slider__list--preview")) {
        button.textContent = "Показать все";
    } else {
        button.textContent = "Скрыть";
    }
});
