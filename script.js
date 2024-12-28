function toggleTheme() {
    document.body.classList.toggle('light-mode');
    // Temayı localStorage'a kaydedelim
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}

// Sayfa yüklendiğinde, kullanıcının tercihini kontrol et
window.onload = function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
        document.body.classList.add('light-mode');
    }
}
