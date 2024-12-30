document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');

    // Validation functions for each field
    const validateName = (value) => {
        if (!value) return 'Please enter your name';
        if (value.length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s]*$/.test(value)) return 'Name should only contain letters and spaces';
        return '';
    };

    const validateEmail = (value) => {
        if (!value) return 'Please enter your email';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
    };

    const validateMessage = (value) => {
        if (!value) return 'Please enter your message';
        if (value.length < 10) return 'Message must be at least 10 characters';
        return '';
    };

    // Function to create or update error message
    const showFieldError = (field, error) => {
        let errorDiv = field.nextElementSibling;
        if (!errorDiv || !errorDiv.classList.contains('error-message')) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.color = 'red';
            errorDiv.style.fontSize = '0.8em';
            errorDiv.style.marginTop = '5px';
            field.parentNode.insertBefore(errorDiv, field.nextSibling);
        }
        errorDiv.textContent = error;
        field.classList.toggle('invalid', error !== '');
    };

    // Function to validate a field and show/hide error
    const validateField = (field, validationFn) => {
        const error = validationFn(field.value.trim());
        showFieldError(field, error);
        return error === '';
    };

    // Add input event listeners for real-time validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    nameInput.addEventListener('input', () => validateField(nameInput, validateName));
    emailInput.addEventListener('input', () => validateField(emailInput, validateEmail));
    messageInput.addEventListener('input', () => validateField(messageInput, validateMessage));

    // Form submission handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateField(nameInput, validateName);
        const isEmailValid = validateField(emailInput, validateEmail);
        const isMessageValid = validateField(messageInput, validateMessage);

        // If all fields are valid, proceed with submission
        if (isNameValid && isEmailValid && isMessageValid) {
            // Create form data object
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim(),
                timestamp: new Date().toISOString()
            };

            console.log('Form submitted:', formData);

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.style.color = 'green';
            successMessage.style.padding = '10px';
            successMessage.style.marginTop = '10px';
            successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            
            form.insertAdjacentElement('afterend', successMessage);

            // Reset form
            form.reset();

            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);

            // Clear any remaining error messages
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        }
    });
});