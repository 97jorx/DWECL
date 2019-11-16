

document.onmousedown = function () {
    if (event.button != -1) {
        document.getElementById("img").src = "google2.jpg";
        console.log("MOUSE")
    }
}

document.onmouseup = function () {
    document.getElementById("img").src = "google.jpg";
    console.log("MOUSE2")
}
