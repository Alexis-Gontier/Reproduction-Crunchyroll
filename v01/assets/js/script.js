let pop_up = document.querySelector('header nav .nav-right .promo');
let pop_up_card = document.querySelector('header nav .nav-right .promo .pop-up');

pop_up.addEventListener("mouseover", () => {
    pop_up_card.style.display = "flex";
});

pop_up.addEventListener("mouseout", () => {
    pop_up_card.style.display = "none";
});