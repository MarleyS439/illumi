document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("banner");

  const decline = document.getElementById("decline");
  const allow = document.getElementById("allow");

  setTimeout(() => {
    banner.style.display = "flex";
  }, 3000);

  decline.addEventListener("click", () => {
    banner.style.display = "none";
    console.log("Cookies recusados.");
  });

  allow.addEventListener("click", () => {
    banner.style.display = "none";
    console.log("Cookies permitidos.");
  });
});
