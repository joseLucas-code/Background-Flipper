const colors = ["red","cyan","orange","yellow", "#9b59b6", "#2ecc71", "#7f8c8d", "#8c7ae6"]
const jsBgFlipper = document.querySelector('.js-bg-flipper')
const bgColorText = document.querySelector('.bg-color-text p')
const bgBtn = document.querySelector('.bg-btn')


bgBtn.addEventListener('click', randomColors)

function randomColors(){
    const randomNumber = (Math.floor(Math.random() * colors.length))

    jsBgFlipper.style.backgroundColor = colors[randomNumber]
    bgColorText.innerText = colors[randomNumber]
}

window.onload = function(){
    randomColors()
}