const caja = document.getElementById('caja')
function funcion(){
    alert('[DEBUG] ejecutando cambio de imagen')
    const newImg = document.createElement('img')
    newImg.src = 'poster.jpg'
    newImg.setAttribute('width', '800')
    newImg.setAttribute('height', '600')
    caja.replaceWith(newImg)
}

caja.addEventListener('click', funcion)