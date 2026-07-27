// Theme toggle functionality
(function() {
  const STORAGE_KEY = 'theme';
  const DARK_CLASS = 'theme-dark';

  function getTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;

    // Default to system preference
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.classList.toggle(DARK_CLASS, theme === 'dark');
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function toggleTheme() {
    const current = getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  // Initialize theme (already applied in inline script, but ensure consistency)
  applyTheme(getTheme());

  // Attach toggle to button
  const toggleButton = document.querySelector('.theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
  }

  // Listen for system theme changes
  const darkModeQuery = matchMedia('(prefers-color-scheme: dark)');
  darkModeQuery.addEventListener('change', (e) => {
    // Only auto-switch if user hasn't set a preference
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
