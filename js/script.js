const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuBtn.setAttribute("aria-expanded", aberto);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observador.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.12 }
);

document
  .querySelectorAll(
    ".card, .tip, .ladder li, .rel-card, .biome-stat, .species-table tbody tr"
  )
  .forEach((el) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${Math.min(
      [...el.parentNode.children].indexOf(el) * 70,
      350
    )}ms`;
    observador.observe(el);
  });
