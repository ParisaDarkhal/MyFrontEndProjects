function markAllRead() {
  var notSpan = document.getElementById("notificationSpan");
  notSpan.textContent = "0";
  const unreadCards = document.getElementsByClassName("unread");
  Array.from(unreadCards).forEach((card) => {
    card.classList.remove("unread");
  });
  var redDotElement = document.getElementsByClassName("redDot");
  for (item of redDotElement) {
    item.style.display = "none";
  }
}

function markOneRead(card) {
  if (card.classList.contains("unread")) {
    var notifSpan = document.getElementById("notificationSpan");
    notifSpan.textContent = parseInt(notifSpan.textContent) - 1;
    card.classList.remove("unread");
    card.getElementsByClassName("redDot")[0].style.display = "none";
  }
}
