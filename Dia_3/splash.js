document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById('splash');
  const home = document.getElementById('home');
  const splashDuration = 5000;

  const alreadyShown = localStorage.getItem("splashShown");

  if (!alreadyShown) {
    const notification = document.createElement('div');
    notification.textContent = "Bienvenido a Lechuza Soluciones";
    notification.className = "notification";
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 1500);

    setTimeout(() => {
      splash.classList.add('fade-out');
      splash.addEventListener('animationend', () => {
        splash.style.display = 'none';
        home.classList.remove('hidden');
        home.classList.add('fade-in');
      }, { once: true });
    }, splashDuration);

    localStorage.setItem("splashShown", "true");
  } else {
    splash.style.display = 'none';
    home.classList.remove('hidden');
    home.classList.add('fade-in');
  }
});

