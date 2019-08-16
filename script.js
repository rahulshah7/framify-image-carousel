const container = document.querySelector(".framify-container");
const nextButton = document.querySelector(".framify-button-next");
const previousButton = document.querySelector(".framify-button-previous");
const elementsWrapper = document.querySelector(".framify-elements-wrapper");
const elements = document.querySelectorAll(".framify-element");

const width = container.clientWidth;
const scrollSpeed = parseInt(container.getAttribute("data-scroll-speed"));
const elementCount = elements.length;

/* Event Listeners */

let currentElementIndex = 0;

nextButton.addEventListener("click", () => {
  scrollElement(elementsWrapper, scrollSpeed, width);
  setTimeout(() => {
    elementsWrapper.appendChild(elements[currentElementIndex]);
    currentElementIndex = (currentElementIndex + 1) % elementCount;
    elementsWrapper.scrollLeft -= width;
  }, width);
});

previousButton.addEventListener("click", () => {
  currentElementIndex = mod(currentElementIndex - 1, elementCount);
  elementsWrapper.insertBefore(
    elements[currentElementIndex],
    elementsWrapper.firstChild
  );
  elementsWrapper.scrollLeft += width;
  scrollElement(elementsWrapper, -scrollSpeed, width);
});

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

/* Helper Functions */

/**
 * Computes x mod n
 * x arbitrary integer
 * n natural number
 * Source: https://maurobringolf.ch/2017/12/a-neat-trick-to-compute-modulo-of-negative-numbers/
 */
const mod = (x, n) => ((x % n) + n) % n;
