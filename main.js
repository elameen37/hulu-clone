const popup = document.querySelector('.pop-up-form')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal(){
    popup.style.display = 'block'
}

function closeModal(){
    popup.style.display = 'none'
}

function outsideClick(e){
    if (e.target == popup){
        closeModal()
    }
}

