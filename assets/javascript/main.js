const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const cookie = document.querySelector('.cookie')
const button = document.querySelector('button')


cookie.addEventListener('click', showMessage)
button.addEventListener('click', resetCookie)
document.addEventListener('keydown', pressEnter)

function showMessage() {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')
}

function resetCookie() {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
}

function pressEnter(event) {
    if (event.key == 'Enter') {
        screen1.classList.add('hide')
        screen2.classList.remove('hide')
    }
}
