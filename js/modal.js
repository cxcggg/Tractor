function addListeners() {
    const btn = document.querySelector('.btn__main-call')
    const modalWindow = document.getElementById('call-back');
    const clickClose = document.querySelector('.click-close');
    const btnClose = document.querySelector('.modal__close');

    btn.addEventListener('click', () => {
        window.scrollTo(0, 0);
        modalWindow.classList.toggle('active');
        clickClose.classList.toggle('active');
        document.body.classList.add('no-scrol');
    })

    clickClose.addEventListener('click', () => {
        modalWindow.classList.remove('active');
        clickClose.classList.remove('active');
        document.body.classList.remove('no-scrol');
    })

    btnClose.addEventListener('click', () => {
        modalWindow.classList.remove('active');
        clickClose.classList.remove('active');
        document.body.classList.remove('no-scrol');
    })
}

window.addEventListener('DOMContentLoaded', addListeners)
