function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("TrumpGreen")) {
        image.src = "Trumpdefault.jpg";
    } else {
        image.src = "TrumpGreen.jpg";
    }
