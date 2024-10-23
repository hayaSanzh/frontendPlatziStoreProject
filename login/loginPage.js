document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout-button');
    const storedUser = localStorage.getItem('loggedInEmail');

    if (storedUser) {
        document.querySelector('.login').textContent = `Logged in as ${storedUser}`;
        loginForm.style.display = 'none';
        logoutButton.style.display = 'block';
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const registeredEmail = localStorage.getItem('registeredEmail');
        const registeredPassword = localStorage.getItem('registeredPassword');

        if (email === registeredEmail && password === registeredPassword) {
            const form = e.target;
            if (form.checkValidity()) {
                const nextPage = '../index.html';
                window.location.href = nextPage;
            }
        } else {
            alert('Invalid email or password');
        }
    });
});
