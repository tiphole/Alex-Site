/* -----SCROLLING ANIMATION---- */

function checkForVisibility() {
  var words = document.querySelectorAll(".words");
  words.forEach(function(words) {
    if (isElementInViewport(words)) {
      words.classList.add("wordsVisible");
    } /* else {
      words.classList.remove("wordsVisible");
    } */
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}


