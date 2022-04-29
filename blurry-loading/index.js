let loadingElement = document.getElementById("loading");
let blurImage = document.querySelector(".bg");
let count = 0;
let blur = 50;
let opacity = 1;

const intervalPercents = setInterval(IncreasePercent, 30);
function IncreasePercent() {
  count++;
  loadingElement.innerHTML = count + "%";

  blur -= 0.5;
  blurImage.style.filter = `blur(${blur}px)`;

  if (count % 10 === 0) {
    opacity -= 0.1;
    loadingElement.style.opacity = `parseFloat(${opacity})`;
    console.log(opacity);
  }

  if (count === 100) {
    loadingElement.style.opacity = 0;
    clearInterval(intervalPercents);

  }
}
