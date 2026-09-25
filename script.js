const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  document.querySelectorAll("#nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Open menu");
    });
  });
}

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = new FormData(enquiryForm);
    const value = (key, fallback = "") => String(form.get(key) || fallback).trim();

    const message = [
      "Hello Arjun, I want to create a website for my business.",
      "",
      `Name: ${value("name")}`,
      `Business: ${value("business")}`,
      `Mobile: ${value("phone")}`,
      `Email: ${value("email", "Not provided")}`,
      `Website Type: ${value("type")}`,
      `Budget: ${value("budget")}`,
      `Requirement: ${value("requirement")}`
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/918959872715?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

const header = document.querySelector(".header");
let progress = document.querySelector(".scroll-progress");

if (!progress) {
  progress = document.createElement("div");
  progress.className = "scroll-progress";
  document.body.appendChild(progress);
}

const updateScrollUI = () => {
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  progress.style.width =
    `${documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0}%`;

  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 20);
  }
};

window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();
