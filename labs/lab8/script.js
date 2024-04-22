function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

var toggleButton = document.getElementById('toggleButton');

toggleButton.onclick = toggleTheme;
