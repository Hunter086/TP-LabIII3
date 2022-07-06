//change ligth to dark color site

const btn = document.querySelector("#boton");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
}else if (currentTheme == "light") {
  document.body.classList.remove("dark-theme");
  document.body.classList.toggle("light-theme");
}
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});