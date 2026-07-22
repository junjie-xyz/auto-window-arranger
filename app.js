const root = document.documentElement;
const languageButtons = document.querySelectorAll("[data-language-option]");
const revealElements = document.querySelectorAll(".reveal");
const localizedLabels = document.querySelectorAll("[data-aria-label-en][data-aria-label-zh]");
const localizedDescriptions = document.querySelectorAll("[data-description-en][data-description-zh]");
const supportedLanguages = new Set(["en", "zh"]);
const pageTitles = {
  en: root.dataset.titleEn || "Auto Window Arranger — Precise window layouts for macOS",
  zh: root.dataset.titleZh || "Auto Window Arranger — 精确排列 macOS 窗口",
};

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

function getURLLanguage() {
  const language = new URLSearchParams(window.location.search).get("lang");
  return supportedLanguages.has(language) ? language : null;
}

function updateURLLanguage(language) {
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState(null, "", url);
  } catch {
    // Language switching does not depend on URL updates.
  }
}

function setLanguage(language, shouldSave = true, shouldUpdateURL = true) {
  const nextLanguage = supportedLanguages.has(language) ? language : "en";
  root.dataset.currentLanguage = nextLanguage;
  root.lang = nextLanguage === "zh" ? "zh-CN" : "en";
  document.title = pageTitles[nextLanguage];

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.languageOption === nextLanguage));
  });

  localizedLabels.forEach((element) => {
    const label = nextLanguage === "zh" ? element.dataset.ariaLabelZh : element.dataset.ariaLabelEn;
    element.setAttribute("aria-label", label);
  });

  localizedDescriptions.forEach((element) => {
    element.setAttribute(
      "content",
      nextLanguage === "zh" ? element.dataset.descriptionZh : element.dataset.descriptionEn,
    );
  });

  if (shouldSave) {
    saveLanguage(nextLanguage);
  }

  if (shouldUpdateURL) {
    updateURLLanguage(nextLanguage);
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.languageOption));
});

const savedLanguage = getSavedLanguage();
const preferredLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
const urlLanguage = getURLLanguage();
setLanguage(urlLanguage || savedLanguage || preferredLanguage, Boolean(urlLanguage), false);

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
