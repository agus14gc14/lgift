document.getElementById("caja").onclick = function(){
    const newImg = document.createElement('img')
    newImg.src = ("pato.png")
    document.getElementById("caja").replaceWith(newImg)
}