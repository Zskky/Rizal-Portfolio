// Tab switching logic
(function () {
  const buttons = document.querySelectorAll('.tab-button');
  const panels = document.querySelectorAll('.tab-panel');

  function setActive(tabKey) {
    buttons.forEach((btn) => {
      const isActive = btn.dataset.tab === tabKey;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === tabKey;
      panel.classList.toggle('active', isActive);
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => setActive(btn.dataset.tab));
  });

  // Set default state on load
  const defaultBtn = document.querySelector('.tab-button.active') || buttons[0];
  if (defaultBtn) setActive(defaultBtn.dataset.tab);
})();


