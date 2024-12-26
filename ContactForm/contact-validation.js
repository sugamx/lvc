// contact-validation.js

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

    // Show alert messages function
    const showAlerts = (errors) => {
        if (errors.length > 0) {
            let alertMessage = 'Please fix the following:\n\n';
            errors.forEach(error => {
                alertMessage += `• ${error}\n`;
            });
            alert(alertMessage);
            return false;
        }
        return true;
    };

    // Add blur event listeners for real-time validation
    document.getElementById('name').addEventListener('blur', function() {
        const error = validateName(this.value.trim());
        if (error) alert(error);
    });

    document.getElementById('email').addEventListener('blur', function() {
        const error = validateEmail(this.value.trim());
        if (error) alert(error);
    });

    document.getElementById('message').addEventListener('blur', function() {
        const error = validateMessage(this.value.trim());
        if (error) alert(error);
    });

    // Form submission handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get all input values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Collect all errors
        const errors = [];
        
        const nameError = validateName(name);
        if (nameError) errors.push(nameError);
        
        const emailError = validateEmail(email);
        if (emailError) errors.push(emailError);
        
        const messageError = validateMessage(message);
        if (messageError) errors.push(messageError);

        // Show errors if any
        if (!showAlerts(errors)) {
            return;
        }

        // If no errors, show success and submit
        alert('Thank you for your message!\nWe will get back to you soon.');
        
        // Create form data object
        const formData = {
            name,
            email,
            message,
            timestamp: new Date().toISOString()
        };

        console.log('Form submitted:', formData);
        
        // Reset form
        form.reset();
    });
});