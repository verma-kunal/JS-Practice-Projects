// set initial count
let count = 0;

// values & buttons
const value = document.querySelector("#numCount");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const type = e.currentTarget.classList;
    if (type.contains("dec")) {
      count--;
    } else if (type.contains("inc")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
    if (count > 0) {
      value.style.color = "#0CF574";
    }
    if (count < 0) {
      value.style.color = "#C52233";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
  });
});
