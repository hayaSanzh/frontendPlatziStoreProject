document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);

    alert('Registration successful! You can now log in.');

    window.location.href = '../login/loginPage.html';
});