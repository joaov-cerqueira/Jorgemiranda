/* =========================================================
   EDITE APENAS ESTE BLOCO PARA PERSONALIZAR O WHATSAPP
   Exemplo Brasil: 5521999999999 (55 + DDD + número)
   ========================================================= */
const CONFIG = {
  whatsapp: "55SEUNUMERO",
  mensagem: "Olá Jorge! Vi seu site e gostaria de falar sobre um Volkswagen."
};

const isValidWhatsapp = /^55\d{10,11}$/.test(CONFIG.whatsapp);
const whatsappUrl = isValidWhatsapp
  ? `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem)}`
  : "#contato";

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  link.href = whatsappUrl;
  if (isValidWhatsapp) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", () => {
      console.info("Defina o WhatsApp em CONFIG.whatsapp no arquivo script.js");
    });
  }
});

// Ano automático no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Cabeçalho compacto ao rolar
const header = document.querySelector(".site-header");
const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 22);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// Animações de entrada leves
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Glow que acompanha o mouse na primeira dobra
const hero = document.querySelector(".hero");
hero?.addEventListener("pointermove", (event) => {
  const rect = hero.getBoundingClientRect();
  hero.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
  hero.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
});

// Efeito 3D na foto do vendedor
const stage = document.getElementById("portraitStage");
const card = document.getElementById("portraitCard");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (stage && card && !reduceMotion) {
  stage.addEventListener("pointermove", (event) => {
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    card.style.setProperty("--ry", `${x * 9}deg`);
    card.style.setProperty("--rx", `${y * -7}deg`);
  });

  stage.addEventListener("pointerleave", () => {
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--rx", "0deg");
  });
}
