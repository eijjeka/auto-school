const header = document.querySelector(".header");

function handleScroll() {
  const scrollY = window.scrollY

  if (scrollY > 50) {
    header.classList.add('header-bg')
  }
  if (scrollY < 50) {
    header.classList.remove('header-bg')
  }
}

document.addEventListener("scroll", handleScroll);
