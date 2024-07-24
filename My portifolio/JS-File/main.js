document.querySelector(".toggle-setting .fa-gear").onclick = function () {
  //toggle spin class
  this.classList.toggle("fa-spin");
  //toggle open class
  document.querySelector(".setting-box").classList.toggle("open");
};

// check if local storge is null
let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {
  document.documentElement.style.setProperty("--first-color", mainColor);

  document.querySelectorAll(".color-list li").forEach((element) => {
    element.classList.remove("active");
    if (element.dataset.color === mainColor) {
      element.classList.add("active");
    }
  });
}
//switch color
const colorLis = document.querySelectorAll(".color-list li");
colorLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--first-color",
      e.target.dataset.color
    );
    //set item in local storge
    localStorage.setItem("color_option", e.target.dataset.color);
    handleActive(e);
  });
});
//reset button
document.querySelector(".rest-option").onclick = () => {
  localStorage.removeItem("color_option");
  window.location.reload();
};
//handle active
function handleActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  ev.target.classList.add("active");
}


let bulletsSpan = document.querySelectorAll(".show-Bullets span");
let bulletscontainer = document.querySelector(".nav-bullets");
// check if local storge is null
let BulletsLocal = localStorage.getItem("Bullets-option");

if (BulletsLocal !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });
  if (BulletsLocal === "block") {
    bulletscontainer.style.display = "block";
    document.querySelector(".show-Bullets .yes").classList.add("active");
  } else {
    bulletscontainer.style.display = "none";
    document.querySelector(".show-Bullets .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    handleActive(e);
    if (span.dataset.display === "show") {
      bulletscontainer.style.display = "block";
      localStorage.setItem("Bullets-option", "block");
    } else {
      bulletscontainer.style.display = "none";
      localStorage.setItem("Bullets-option", "none");
    }
  });
});

//progress skills
const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});
//testimonials

