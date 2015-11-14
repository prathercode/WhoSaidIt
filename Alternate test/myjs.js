

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("TrumpGreen")) {
        image.src = "TrumpDefault.jpg";
    } else {
        image.src = "TrumpGreen.jpg";
    }
}

function changeImage1() {
    var image = document.getElementById('myImage1');
    if (image.src.match("TrumpGreen")) {
        image.src = "TrumpDefault.jpg";
    } else {
        image.src = "TrumpGreen.jpg";
    }
}