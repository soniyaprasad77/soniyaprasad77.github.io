
const showOnPx = 600;
const backToTopButton = document.querySelector(".back-to-top");

document.addEventListener("scroll", () => {
  if (window.scrollY > showOnPx) {
    backToTopButton.style.display = "block"; 
  } else {
    backToTopButton.style.display = "none"; 
  }
});

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

backToTopButton.addEventListener("click", goToTop);
