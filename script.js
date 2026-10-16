window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hide");
  }, 650);
});

const screens = document.querySelectorAll(".screen");

function goToScreen(id) {
  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  const nextScreen = document.getElementById(id);

  if (nextScreen) {
    nextScreen.classList.add("active");
    nextScreen.scrollTop = 0;
  }
}

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => {
    goToScreen(button.dataset.go);
  });
});
