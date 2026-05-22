function funcion(){
    const newImg = document.createElement('img')
    newImg.src = 'pato.png'
    document.getElementById("caja").replaceWith(newImg)
}

document.getElementById("caja").onclick = function() {
 funcion()
}
