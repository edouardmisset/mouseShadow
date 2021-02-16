// Variables
const style = document.querySelector("h1").style;
const hero = document.querySelector(".hero");
const { offsetWidth: width, offsetHeight: height } = hero;
const maxShadowOffset = 30;

// Adding event listener
document.querySelector("body").addEventListener("mousemove", updateShadow);

// Function to move the shadow
function updateShadow(e) {
  let { x, y } = e;

  x = maxShadowOffset * (1 / 2 - x / width);
  y = maxShadowOffset * (1 / 2 - y / width);

  style.textShadow = `${x}px ${y}px 10px hsl(40, 100%, 50%, 80%)`;
}
