(function () {
  const STORAGE_KEY = "theme";
  const html = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const icon = toggle ? toggle.querySelector(".theme-icon") : null;

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    if (icon) {
      icon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  const theme = getPreferredTheme();
  applyTheme(theme);

  if (toggle) {
    toggle.addEventListener("click", function () {
      const current = html.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }
})();
