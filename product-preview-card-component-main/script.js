function changeImage() {
  console.log(window.innerWidth);
  var myImage = document.getElementById("ax");
  if (window.innerWidth < 780) {
    myImage.src = "images/image-product-mobile.jpg";
  } else {
    myImage.src = "images/image-product-desktop.jpg";
  }
}

window.addEventListener("resize", changeImage);
