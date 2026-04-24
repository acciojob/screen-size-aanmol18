//your JS code here. If required.
const sizeDisplay = document.querySelector("#sizeInfo h1");

function updateSize() {
    sizeDisplay.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}
updateSize();

window.addEventListener("resize", updateSize);