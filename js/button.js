let button = document.querySelector(".nav__show-more-button");
let wrapper = document.querySelector(".nav-wrapper");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    button.classList.toggle("nav__show-more-button--reversed");
    wrapper.classList.toggle("nav-wrapper--preview");

    if (wrapper.classList.contains("nav-wrapper--preview")) {
        button.textContent = "Показать все";
    } else {
        button.textContent = "Скрыть";
    }
});
