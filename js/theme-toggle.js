(function () {
  const STORAGE_KEY = "theme";
  const html = document.documentElement;
  const toggle = document.getElementById("themeToggleInput");
  const icon = document.querySelector(".theme-toggle__icon");
  if (!icon) return;

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);

    if (toggle) {
      toggle.checked = theme === "light";
    }
  }

  const theme = getPreferredTheme();
  applyTheme(theme);

  if (toggle) {
    toggle.addEventListener("change", function () {
      applyTheme(this.checked ? "light" : "dark");
    });
  }
})();
