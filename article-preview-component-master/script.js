const buttonElement = document.getElementById("arrowBtn");
const arrowDivElement = document.getElementById("arrowDiv");
buttonElement.addEventListener("click", clickArrow);
arrowDivElement.addEventListener("click", clickArrowDiv);
function clickArrow() {
  if (window.innerWidth < 768) {
    const grayDiv = document.getElementById("socialMediaModal");
    grayDiv.classList.remove("hide");
    grayDiv.classList.add("show");
  }
}

function clickArrowDiv() {
  const grayDiv = document.getElementById("socialMediaModal");
  grayDiv.classList.remove("show");
  grayDiv.classList.add("hide");
}
