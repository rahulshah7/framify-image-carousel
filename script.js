const container = document.querySelector(".framify-container");
const nextButton = document.querySelector(".framify-button-next");
const previousButton = document.querySelector(".framify-button-previous");
const framifyElementsWrapper = document.querySelector(
  ".framify-elements-wrapper"
);
const framifyElements = document.querySelectorAll(".framify-element");

const width = container.clientWidth;
const scrollSpeed = parseInt(container.getAttribute("data-scroll-speed"));

/* Event Listeners */

nextButton.addEventListener("click", () =>
  scrollElement(framifyElementsWrapper, scrollSpeed, width)
);

previousButton.addEventListener("click", () =>
  scrollElement(framifyElementsWrapper, -scrollSpeed, width)
);

/* Event Handlers */

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
