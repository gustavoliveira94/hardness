const loginIcon = document.querySelector('.header__login');
const login = document.querySelector('.header__login--details');
const slide1 = document.querySelector('#slide1');
const slide2 = document.querySelector('#slide2');
const slide3 = document.querySelector('#slide3');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');

function hide() {
    if (login.classList.contains('hidden')) {
        login.classList.remove('hidden')
    } else {
        login.classList.add('hidden');
    }
}

function slide() {
    if (slide2.classList.contains('hidden') && slide3.classList.contains('hidden')) {
        slide1.classList.add('hidden')
        slide2.classList.remove('hidden')

    }

    else if(slide1.classList.contains('hidden') && slide3.classList.contains('hidden')) {
        slide2.classList.add('hidden')
        slide3.classList.remove('hidden')
    }

    else if(slide1.classList.contains('hidden') && slide2.classList.contains('hidden')) {
        slide1.classList.remove('hidden')
        slide3.classList.add('hidden')
    }
}

setInterval(slide, 2000);
loginIcon.addEventListener("click", hide);