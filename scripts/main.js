const darkMQ = '(prefers-color-scheme: dark)';

function applyColorScheme(colorScheme) {
  document.documentElement.setAttribute('data-color-scheme', colorScheme);
  document.querySelector('meta[name="theme-color"]').setAttribute('content',  colorScheme === 'dark' ? '#2d2d2d' : '#fcfcfc');
  sessionStorage.setItem('color-scheme', colorScheme);
}

function init() {
  const getPreferredColorScheme = () => {
    const darkMQL = window.matchMedia ? window.matchMedia(darkMQ) : {};
    return darkMQL.media === darkMQ && darkMQL.matches ? 'dark' : 'light';
  };
  const colorScheme = sessionStorage.getItem('color-scheme') || getPreferredColorScheme();
  applyColorScheme(colorScheme);
}

function toggleColorScheme() {
  const colorScheme = document.documentElement.getAttribute('data-color-scheme');
  const targetScheme = colorScheme === 'light' ? 'dark' : 'light';
  applyColorScheme(targetScheme);
}

window.addEventListener('DOMContentLoaded', () => {
  init();
  const toggleButton = document.querySelector('.color-scheme-switch');
  if (toggleButton) {
    toggleButton.addEventListener('click', function () {
      toggleColorScheme();
    });
  }
});



