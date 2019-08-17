const container = document.querySelector(".framify-container");
const buttonsWrapper = document.querySelector(".framify-buttons-wrapper");
const playButton = document.querySelector(".framify-button-play");
const pauseButton = document.querySelector(".framify-button-pause");
const nextButton = document.querySelector(".framify-button-next");
const previousButton = document.querySelector(".framify-button-previous");
const elementsWrapper = document.querySelector(".framify-elements-wrapper");
const elements = document.querySelectorAll(".framify-element");

let width = getElementWidth(container);
let scrollSpeed = setScrollSpeed(width);
const displayInterval = parseInt(container.getAttribute("data-interval"));
const elementCount = elements.length;

/* Event Listeners */

window.addEventListener("resize", () => {
  width = getElementWidth(container);
  setScrollSpeed(width);
  elementsWrapper.scrollLeft = 0;
});

let displayIntervalID;
playButton.addEventListener("click", () => {
  displayIntervalID = setInterval(handleNextElement, displayInterval);
  playButton.classList.add("framify-button-hidden");
  pauseButton.classList.remove("framify-button-hidden");
});

pauseButton.addEventListener("click", () => {
  clearInterval(displayIntervalID);
  playButton.classList.remove("framify-button-hidden");
  pauseButton.classList.add("framify-button-hidden");
});

nextButton.addEventListener("click", handleNextElement);
previousButton.addEventListener("click", handlePreviousElement);

container.addEventListener(
  "mouseover",
  () => (buttonsWrapper.style.opacity = 1)
);

container.addEventListener(
  "mouseout",
  () => (buttonsWrapper.style.opacity = 0)
);

/* Event Handlers */

let currentElementIndex = 0;

function handleNextElement() {
  scrollElement(elementsWrapper, scrollSpeed, width);
  setTimeout(() => {
    elementsWrapper.appendChild(elements[currentElementIndex]);
    currentElementIndex = (currentElementIndex + 1) % elementCount;
    elementsWrapper.scrollLeft -= width;
  }, width);
}

function handlePreviousElement() {
  currentElementIndex = mod(currentElementIndex - 1, elementCount);
  elementsWrapper.insertBefore(
    elements[currentElementIndex],
    elementsWrapper.firstChild
  );
  elementsWrapper.scrollLeft += width;
  scrollElement(elementsWrapper, -scrollSpeed, width);
}

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

function getElementWidth(element) {
  return element.clientWidth;
}

function setScrollSpeed(width) {
  return 20;
}
