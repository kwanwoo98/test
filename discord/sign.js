// sign.js

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    const showPasswordCheckbox = document.getElementById('showPasswordCheckbox');
    const confirmPasswordInput = document.getElementById('confirmPasswordInput');
    const showConfirmPasswordCheckbox = document.getElementById('showConfirmPasswordCheckbox');

    showPasswordCheckbox.addEventListener('change', function() {
        if (this.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });

    showConfirmPasswordCheckbox.addEventListener('change', function() {
        if (this.checked) {
            confirmPasswordInput.type = 'text';
        } else {
            confirmPasswordInput.type = 'password';
        }
    });
});
