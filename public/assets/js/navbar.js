document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const itens = document.querySelectorAll(".link");
  const body = document.body;

  window.onscroll = () => {
    const scrolled =
      body.scrollTop > 20 || document.documentElement.scrollTop > 20;

    navbar.classList.toggle("scrolled", scrolled);
    itens.forEach((item) => {
      item.classList.toggle("scrolled", scrolled);
    });

    if (!scrolled) {
      itens.forEach((item) => {
        item.classList.toggle("unscrolled", scrolled);
      });
    }
  };
});
