function startBurgerMenu(){

    const MENU_BUTTON = document.querySelector('.menuButton');
    const HAMBURGER = document.querySelector('.hamburger');
    const BAR = document.querySelectorAll('.bar');
    const TO_DOWN = document.querySelector('.toDown');

    MENU_BUTTON.addEventListener('click', () => {
       //alert('działa');
       HAMBURGER.classList.toggle('active');
       TO_DOWN.classList.toggle('aLittleBigMoreToDown');
    })

    BAR.forEach(n => n.addEventListener('click', ()=> {
        HAMBURGER.classList.remove('active');
        TO_DOWN.classList.remove('aLittleBigMoreToDown');
    }))
}
window.onload = startBurgerMenu;