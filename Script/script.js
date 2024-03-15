
contador = document.getElementById("radio1")
let count = 1
contador.checked = true

setInterval(function () {
    nextImage()
}, 8000)

function nextImage() {
    count++;
    if (count >= 5) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true
}
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".navMenu");
const info = document.querySelector('.info')


hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    info.classList.toggle('espaço')
})
navMenu.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    info.classList.toggle('espaço')

})

