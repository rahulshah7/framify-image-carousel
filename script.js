const framifyElements = document.querySelectorAll(".framify-element");
console.log(framifyElements);

const framifyElementsWrapper = document.querySelector(
  ".framify-elements-wrapper"
);

function scrollElement(elementToScroll, scrollVelocity, scrollMagnitude) {
  let scrolled = 0;
  const intervalID = window.setInterval(function() {
    elementToScroll.scrollLeft += scrollVelocity;
    scrolled += Math.abs(scrollVelocity);
    if (scrolled >= scrollMagnitude) {
      window.clearInterval(intervalID);
    }
  }, 10);
}
