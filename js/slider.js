const initSlider = () => {
    const slideButtons = document.querySelectorAll(".slide-button");
    const list = document.querySelector(".cards-list");
    const item = document.querySelector(".card");
    slideButtons.forEach(button => {
        button.addEventListener('click', () =>{
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmout = item.clientWidth * direction;
            list.scrollBy({left: scrollAmout, behavior: "smooth"})
        })
    })
}

window.addEventListener('load', initSlider);
