// --- Toggle menu di mobile ---
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// --- Tutup menu saat link diklik (UX lebih baik di mobile) ---
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// --- Sembunyikan hamburger di desktop otomatis ---
function handleResize() {
  if (window.innerWidth > 768) {
    menu.classList.remove("active");
    hamburger.style.display = "none";
  } else {
    hamburger.style.display = "block";
  }
}
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// --- Efek transparansi navbar saat scroll ---
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
