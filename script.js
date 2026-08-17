/* =========================================================
   RIAD LIK FES — script.js
   Aucune dépendance externe. Modifiez les valeurs dans
   CONFIG ci-dessous pour personnaliser les liens de contact.
   ========================================================= */

const CONFIG = {
  // Numéro utilisé pour le bouton WhatsApp, format international sans "+" ni espaces.
  // Remplacez-le si le numéro WhatsApp diffère du téléphone principal.
  whatsapp: "212654174505",
  whatsappMessage: "Bonjour, je souhaite réserver au Riad Lik Fes.",
  instagramUrl: "https://www.instagram.com/riad.lik/"
};

document.addEventListener("DOMContentLoaded", () => {

  /* ---- Année du footer ---- */
  const anneeEl = document.getElementById("annee");
  if (anneeEl) anneeEl.textContent = new Date().getFullYear();

  /* ---- Liens WhatsApp (bouton flottant + section contact) ---- */
  if (CONFIG.whatsapp) {
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
    const flottant = document.getElementById("whatsapp-flottant");
    const lienContact = document.getElementById("lien-whatsapp");
    if (flottant) {
  flottant.href = url;
  flottant.target = "_blank";
  flottant.rel = "noopener";
}
    if (lienContact) {
      lienContact.href = url;
      lienContact.textContent = "+" + CONFIG.whatsapp.replace(/(\d{3})(\d{3})(\d{6})/, "$1 $2 $3");
      lienContact.target = "_blank";
      lienContact.rel = "noopener";
    }
  }

  /* ---- Lien Instagram ---- */
  const lienInsta = document.getElementById("lien-instagram");
  if (lienInsta && CONFIG.instagramUrl) {
    lienInsta.href = CONFIG.instagramUrl;
    lienInsta.textContent = "Instagram";
    lienInsta.target = "_blank";
    lienInsta.rel = "noopener";
  }

  /* ---- Navigation : fond au scroll ---- */
  const nav = document.getElementById("nav");
  const seuil = 60;
  const gererScroll = () => {
    if (window.scrollY > seuil) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  gererScroll();
  window.addEventListener("scroll", gererScroll, { passive: true });

  /* ---- Menu mobile ---- */
  const burger = document.getElementById("nav-burger");
  const liens = document.getElementById("nav-liens");
  if (burger && liens) {
    burger.addEventListener("click", () => {
      liens.classList.toggle("ouvert");
    });
    liens.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => liens.classList.remove("ouvert"));
    });
  }

  /* ---- Révélation au scroll ---- */
  const elementsReveal = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observateur = new IntersectionObserver((entrees) => {
      entrees.forEach(entree => {
        if (entree.isIntersecting) {
          entree.target.classList.add("visible");
          observateur.unobserve(entree.target);
        }
      });
    }, { threshold: 0.15 });
    elementsReveal.forEach(el => observateur.observe(el));
  } else {
    elementsReveal.forEach(el => el.classList.add("visible"));
  }

});
