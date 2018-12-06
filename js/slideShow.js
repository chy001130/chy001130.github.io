const image = document.getElementById("contentImage");

let imageIndex = 1;

function changeImage() {
    image.setAttribute("src", "./image/" + "slide" + imageIndex + ".png");
    imageIndex++;
    if (imageIndex > 10) {
        imageIndex = 1;
    }
}

window.onload = function () {
    setInterval(changeImage, 1500);
};