const caja = document.getElementById('caja')
function funcion(){
    const newImg = document.createElement('img')
    const newP = document.createElement('p')
    newImg.src = 'poster.jpg'
    newImg.setAttribute('width', '800')
    newImg.setAttribute('height', '600')
    document.getElementById('mensaje').innerHTML='Te queremos mucho Caro, Ambar y Agus.'
    caja.replaceWith(newImg)
}

caja.addEventListener('click', funcion)