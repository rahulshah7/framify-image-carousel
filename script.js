const framifyElements = document.querySelectorAll(".framify-element");
console.log(framifyElements);

const framifyElementsWrapper = document.querySelector(
  ".framify-elements-wrapper"
);

function scrollElement(elementToScroll, scrollIncrement, scrollMagnitude) {
  let scrolled = 0;
  while (scrolled !== scrollMagnitude) {
    elementToScroll.scrollLeft += scrollIncrement;
    scrolled += Math.abs(scrollIncrement);
  }
}
