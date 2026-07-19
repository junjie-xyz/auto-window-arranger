const root = document.documentElement;
const languageButtons = document.querySelectorAll("[data-language-option]");
const revealElements = document.querySelectorAll(".reveal");
const localizedLabels = document.querySelectorAll("[data-aria-label-en][data-aria-label-zh]");
const supportedLanguages = new Set(["en", "zh"]);

function getSavedLanguage() {
  try {
    return localStorage.getItem("auto-window-arranger-language");
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("auto-window-arranger-language", language);
  } catch {
    // The language switch still works when storage is unavailable.
  }
}

function setLanguage(language, shouldSave = true) {
  const nextLanguage = supportedLanguages.has(language) ? language : "en";
  root.dataset.currentLanguage = nextLanguage;
  root.lang = nextLanguage === "zh" ? "zh-CN" : "en";
  document.title = nextLanguage === "zh"
    ? "Auto Window Arranger — 精确排列 macOS 窗口"
    : "Auto Window Arranger — Precise window layouts for macOS";

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.languageOption === nextLanguage));
  });

  localizedLabels.forEach((element) => {
    const label = nextLanguage === "zh" ? element.dataset.ariaLabelZh : element.dataset.ariaLabelEn;
    element.setAttribute("aria-label", label);
  });

  if (shouldSave) {
    saveLanguage(nextLanguage);
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.languageOption));
});

const savedLanguage = getSavedLanguage();
const preferredLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
setLanguage(savedLanguage || preferredLanguage, false);

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  root.classList.add("motion-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12%", threshold: 0.08 },
  );

  revealElements.forEach((element) => observer.observe(element));
  requestAnimationFrame(() => root.classList.add("is-ready"));
}
