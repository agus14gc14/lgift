const caja = document.getElementById('caja')
function funcion(){
    alert('[DEBUG] ejecutando cambio de imagen')
    const newImg = document.createElement('img')
    newImg.src = 'pato.png'
    caja.replaceWith(newImg)
}

caja.addEventListener('click', funcion)