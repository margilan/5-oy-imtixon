const body = document.querySelector('body')
const darkBtn = document.getElementById('dark_btn')
const lightBtn = document.getElementById('light_btn')

function colorsMode() {
     body.classList.toggle(`dark-mode`)
     darkBtn.classList.toggle('hidden') 
     lightBtn.classList.toggle('hidden') 
}
const modeLocal = localStorage.getItem('mode')
if(modeLocal) {
    body.classList.add('dark-mode')
    darkBtn.classList.toggle('hidden') 
    lightBtn.classList.toggle('hidden') 
}
lightBtn.addEventListener('click', () => {
    colorsMode()
    localStorage.setItem('mode', 'dark-mode')
});
darkBtn.addEventListener('click', () => {
    colorsMode()
    localStorage.setItem('mode', '')
});