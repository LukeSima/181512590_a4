function on(imageID) {
  if (imageID == 1) {
    document.getElementById("currentImage").src = "img/bird.jpg"
    document.getElementById("currentImageMobile").src = "img/bird.jpg"
  } else if (imageID == 2) {
    document.getElementById("currentImage").src = "img/blue.jpg"
    document.getElementById("currentImageMobile").src = "img/blue.jpg"
  } else if (imageID == 3) {
    document.getElementById("currentImage").src = "img/boat.jpg"
    document.getElementById("currentImageMobile").src = "img/boat.jpg"
  } else if (imageID == 4) {
    document.getElementById("currentImage").src = "img/falls.jpg"
    document.getElementById("currentImageMobile").src = "img/falls.jpg"
  } else if (imageID == 5) {
    document.getElementById("currentImage").src = "img/flower.jpg"
    document.getElementById("currentImageMobile").src = "img/flower.jpg"
  } else if (imageID == 6) {
    document.getElementById("currentImage").src = "img/forest.jpg"
    document.getElementById("currentImageMobile").src = "img/forest.jpg"
  } else if (imageID == 7) {
    document.getElementById("currentImage").src = "img/jungle.jpg"
    document.getElementById("currentImageMobile").src = "img/jungle.jpg"
  } else if (imageID == 8) {
    document.getElementById("currentImage").src = "img/koi.jpg"
    document.getElementById("currentImageMobile").src = "img/koi.jpg"
  } else if (imageID == 9) {
    document.getElementById("currentImage").src = "img/lake.jpg"
    document.getElementById("currentImageMobile").src = "img/koi.jpg"
  } else if (imageID == 10) {
    document.getElementById("currentImage").src = "img/ocean.jpg"
    document.getElementById("currentImageMobile").src = "img/ocean.jpg"
  } else if (imageID == 11) {
    document.getElementById("currentImage").src = "img/path.jpg"
    document.getElementById("currentImageMobile").src = "img/path.jpg"
  } else if (imageID == 12) {
    document.getElementById("currentImage").src = "img/plants.jpg"
    document.getElementById("currentImageMobile").src = "img/plants.jpg"
  } else if (imageID == 13) {
    document.getElementById("currentImage").src = "img/red.jpg"
    document.getElementById("currentImageMobile").src = "img/red.jpg"
  } else if (imageID == 14) {
    document.getElementById("currentImage").src = "img/trees.jpg"
    document.getElementById("currentImageMobile").src = "img/trees.jpg"
  } else if (imageID == 15) {
    document.getElementById("currentImage").src = "img/waves.jpg"
    document.getElementById("currentImageMobile").src = "img/waves.jpg"
  }
  document.getElementById("overlay").style.display = "block";
  document.body.classList.add("scrollStop");
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.body.classList.remove("scrollStop");
}
