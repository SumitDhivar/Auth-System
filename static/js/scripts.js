// Form validation
document.addEventListener('DOMContentLoaded', function() {
    // Get all forms with the auth-form class
    const forms = document.querySelectorAll('.auth-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            let valid = true;
            
            // Validate required fields
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    // Add error class to parent form-group
                    field.closest('.form-group').classList.add('has-error');
                    
                    // Create error message if it doesn't exist
                    let errorSpan = field.parentElement.querySelector('.error');
                    if (!errorSpan) {
                        errorSpan = document.createElement('span');
                        errorSpan.className = 'error';
                        field.parentElement.appendChild(errorSpan);
                    }
                    errorSpan.textContent = 'This field is required.';
                } else {
                    // Remove error class if field is valid
                    field.closest('.form-group').classList.remove('has-error');
                    const errorSpan = field.parentElement.querySelector('.error');
                    if (errorSpan) {
                        errorSpan.textContent = '';
                    }
                }
            });
            
            // Validate email format if there's an email field
            const emailField = form.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    valid = false;
                    emailField.closest('.form-group').classList.add('has-error');
                    
                    let errorSpan = emailField.parentElement.querySelector('.error');
                    if (!errorSpan) {
                        errorSpan = document.createElement('span');
                        errorSpan.className = 'error';
                        emailField.parentElement.appendChild(errorSpan);
                    }
                    errorSpan.textContent = 'Please enter a valid email address.';
                }
            }
            
            // Validate password matching in registration form
            const password1 = form.querySelector('#id_password1');
            const password2 = form.querySelector('#id_password2');
            if (password1 && password2 && password1.value && password2.value) {
                if (password1.value !== password2.value) {
                    valid = false;
                    password2.closest('.form-group').classList.add('has-error');
                    
                    let errorSpan = password2.parentElement.querySelector('.error');
                    if (!errorSpan) {
                        errorSpan = document.createElement('span');
                        errorSpan.className = 'error';
                        password2.parentElement.appendChild(errorSpan);
                    }
                    errorSpan.textContent = 'Passwords do not match.';
                }
            }
            
            // If form is not valid, prevent submission
            if (!valid) {
                event.preventDefault();
            }
        });
    });
    
    // Auto-dismiss messages after 5 seconds
    const messages = document.querySelectorAll('.message');
    if (messages.length > 0) {
        setTimeout(function() {
            messages.forEach(message => {
                message.style.opacity = '1';
                
                // Create fade-out effect
                let opacity = 1;
                const fadeEffect = setInterval(function() {
                    if (opacity > 0) {
                        opacity -= 0.1;
                        message.style.opacity = opacity;
                    } else {
                        clearInterval(fadeEffect);
                        message.style.display = 'none';
                    }
                }, 50);
            });
        }, 5000);
    }
    
    // Password strength meter for registration form
    const passwordField = document.querySelector('#id_password1');
    if (passwordField) {
        // Create strength meter element if it doesn't exist
        let strengthMeter = document.querySelector('.password-strength');
        if (!strengthMeter) {
            strengthMeter = document.createElement('div');
            strengthMeter.className = 'password-strength';
            passwordField.parentElement.appendChild(strengthMeter);
        }
        
        passwordField.addEventListener('input', function() {
            const password = passwordField.value;
            let strength = 0;
            let feedback = '';
            
            // Password strength rules
            if (password.length >= 8) strength += 1;
            if (password.match(/[A-Z]/)) strength += 1;
            if (password.match(/[a-z]/)) strength += 1;
            if (password.match(/[0-9]/)) strength += 1;
            if (password.match(/[^A-Za-z0-9]/)) strength += 1;
            
            // Update strength meter
            switch(strength) {
                case 0:
                case 1:
                    feedback = 'Weak';
                    strengthMeter.style.width = '20%';
                    strengthMeter.style.backgroundColor = '#e74c3c';
                    break;
                case 2:
                case 3:
                    feedback = 'Moderate';
                    strengthMeter.style.width = '60%';
                    strengthMeter.style.backgroundColor = '#f39c12';
                    break;
                case 4:
                case 5:
                    feedback = 'Strong';
                    strengthMeter.style.width = '100%';
                    strengthMeter.style.backgroundColor = '#2ecc71';
                    break;
            }
            
            strengthMeter.textContent = feedback;
            strengthMeter.style.display = password ? 'block' : 'none';
        });
    }
    
    // Toggle password visibility
    const passwordToggle = document.querySelectorAll('.password-toggle');
    passwordToggle.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const passwordInput = this.previousElementSibling;
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.textContent = type === 'password' ? 'Show' : 'Hide';
        });
    });
});

// Add custom styling to Django form fields
function enhanceFormFields() {
    // Add classes to Django form fields
    const djangoInputs = document.querySelectorAll('input, select, textarea');
    djangoInputs.forEach(input => {
        input.classList.add('form-control');
    });
    
    // Add toggle buttons for password fields
    const passwordFields = document.querySelectorAll('input[type="password"]');
    passwordFields.forEach(field => {
        if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('password-toggle')) {
            const toggleBtn = document.createElement('button');
            toggleBtn.type = 'button';
            toggleBtn.className = 'password-toggle';
            toggleBtn.textContent = 'Show';
            field.parentElement.insertBefore(toggleBtn, field.nextElementSibling);
        }
    });
}

// Call enhanceFormFields on page load
document.addEventListener('DOMContentLoaded', enhanceFormFields);