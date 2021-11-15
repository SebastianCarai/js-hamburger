// Opening burger menu
const openBurgerBtn = document.querySelector('.fa-bars');

openBurgerBtn.addEventListener('click', 
    function() {
        document.querySelector('.hamburger-menu').classList.add('active')
    }
)

// Closing burger menu
const closeBurgerBtn = document.querySelector('.fa-times');

closeBurgerBtn.addEventListener('click', 
    function() {
        document.querySelector('.hamburger-menu').classList.remove('active')
    }
)