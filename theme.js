const cartBtn = document.getElementById('cart-btn');
const toggleButton = document.getElementById('toggle-theme');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.classList.add('dark-mode');
    cartBtn.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode');
    cartBtn.classList.toggle('dark-mode');

    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});
