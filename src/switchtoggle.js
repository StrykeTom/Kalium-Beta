const body = document.querySelector('body');
const sidebar = body.querySelector('nav');
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
    localStorage.setItem("mode", "dark");
  } else {
    modeText.innerText = "Dark mode";
    localStorage.setItem("mode", "light");
  }
});

const mode = localStorage.getItem("mode");
if (mode === "dark") {
  body.classList.add("dark");
  modeText.innerText = "Light mode";
}

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});