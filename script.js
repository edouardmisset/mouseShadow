// Variables
const style = document.querySelector("h1").style;
const hero = document.querySelector(".hero");
const { offsetWidth: width, offsetHeight: height } = hero;
const maxShadowOffset = 20;

// Adding event listener
document.querySelector("body").addEventListener("mousemove", updateShadow);

// Function to move the shadow
function updateShadow(e) {
  let { x, y } = e;

  x = maxShadowOffset * (1 / 2 - x / width);
  y = maxShadowOffset * (1 / 2 - y / width);

  style.textShadow = `
  ${-x}px ${-y}px 15px hsla(0, 100%, 50%, 0.9),
  ${-x}px ${y}px 15px hsla(30, 100%, 50%, 0.9),
  ${x}px ${-y}px 15px hsla(60, 100%, 50%, 0.9)
  `;
}
