document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("language");
  const menu = document.getElementById("languageMenu");
  const itens = document.querySelectorAll(".link");

  button.addEventListener("click", () => {
    menu.style.display = "flex";

    itens.forEach((item) => {});
  });
});
