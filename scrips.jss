// Reveal animation on scroll
const reveals = document.querySelectorAll("section, .card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});

// Navbar background on scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  nav.style.background =
    window.scrollY > 50
      ? "rgba(0,0,0,0.85)"
      : "rgba(0,0,0,0.6)";
});
