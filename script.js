const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

localStorage.setItem('theme', 'dark');
body.classList.add('dark-theme');

themeToggle.classList.remove('fa-moon');
themeToggle.classList.add('fa-sun');

function toggleTheme() {
    const isDark = body.classList.contains('dark-theme');
    body.classList.remove(isDark ? 'dark-theme' : 'light-theme');
    body.classList.add(isDark ? 'light-theme' : 'dark-theme');
    themeToggle.classList.toggle('fa-sun');
    themeToggle.classList.toggle('fa-moon');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 't') {
        toggleTheme();
    }
    if (event.key === '1') {
        window.open('https://www.linkedin.com/in/burak-basal/', '_blank');
    }
    if (event.key === '2') {
        window.open('https://github.com/burakbasal', '_blank');
    }
    if (event.key === '3') {
        window.open('https://gitlab.com/burakbasal', '_blank');
    }
    if (event.key === '4') {
        window.open('https://x.com/burakbasall', '_blank');
    }
    if (event.key === '5') {
        window.open('https://instagram.com/burak.bsl', '_blank');
    }
});