window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");

    if (loader) {
      loader.classList.add("hide");
    }
  }, 650);
});

const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(id);

  if (target) {
    target.classList.add("active");
    target.scrollTop = 0;
  }
}

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => {
    const nextScreen = button.getAttribute("data-next");
    showScreen(nextScreen);
  });
});
