const loginIcon = document.querySelector('.header__login');
const login = document.querySelector('.header__login--details');

function hide() {
    if(login.classList.contains('hidden')) {
        login.classList.remove('hidden')
    } else {
        login.classList.add('hidden');
    }
}

loginIcon.addEventListener("click", hide);