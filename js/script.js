var atualColor = "red"

function Show(file) {
    var ShowPhoto = document.getElementById('img-grande');
    newPhoto = "assets/" + atualColor + "-" + file + ".jpg"
    ShowPhoto.src = newPhoto
}

//---------------------------//

function Shoes(color) {
    var tenis = 1
    var mudaCor = color
    while (tenis <= 8) {

        var thumbs = `/assets/thumbs/${mudaCor}-${tenis}.jpg`
        var novaCor = document.getElementById(tenis)
        novaCor.src = thumbs
        tenis++
    }
    atualColor = mudaCor
    Show('1')
}