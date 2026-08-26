const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.querySelector(".header");
const reveals = document.querySelectorAll(".reveal");
const orb = document.querySelector(".axel-orb");

/* MENÚ MÓVIL */
menuToggle?.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

/* HEADER CON EFECTO AL BAJAR */
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ANIMACIÓN AL APARECER SECCIONES */
function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* AXEL ESFERA: SIGUE LEVEMENTE EL MOUSE */
document.addEventListener("mousemove", e => {
  if (!orb) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 18;
  const y = (e.clientY / window.innerHeight - 0.5) * 18;

  orb.style.transform = `translateY(-10px) rotateX(${-y}deg) rotateY(${x}deg)`;
});

/* EN CELULAR NO FORZAMOS MOVIMIENTO RARO */
document.addEventListener("mouseleave", () => {
  if (!orb) return;
  orb.style.transform = "translateY(0) rotateX(0deg) rotateY(0deg)";
});

/* EFECTO DE LUZ EN TARJETAS */
document.querySelectorAll(".feature-card, .project-card, .contact-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});