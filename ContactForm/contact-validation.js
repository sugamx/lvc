// contact-validation.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    
    // Show error function
    const showError = (input, message) => {
        const errorDiv = input.parentElement.querySelector('.error-message') || 
            createErrorDiv(input.parentElement);
        errorDiv.textContent = message;
        errorDiv.style.display = message ? 'block' : 'none';
        input.style.borderColor = message ? 'red' : '#ccc';
    };

    // Create error div
    const createErrorDiv = (parent) => {
        const div = document.createElement('div');
        div.className = 'error-message';
        parent.appendChild(div);
        return div;
    };

    // Validate input fields
    const validate = (input) => {
        const value = input.value.trim();
        
        switch(input.id) {
            case 'name':
                if (!value) return 'Name is required';
                if (value.length < 2) return 'Name must be at least 2 characters';
                break;
                
            case 'email':
                if (!value) return 'Email is required';
                if (!value.includes('@')) return 'Please enter a valid email';
                break;
                
            case 'message':
                if (!value) return 'Message is required';
                if (value.length < 10) return 'Message must be at least 10 characters';
                break;
        }
        return '';
    };

    // Add blur event listeners to all inputs and textarea
    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('blur', () => {
            showError(input, validate(input));
        });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Check all inputs
        document.querySelectorAll('input, textarea').forEach(input => {
            const error = validate(input);
            showError(input, error);
            if (error) isValid = false;
        });

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});

// Add CSS
document.head.appendChild(Object.assign(document.createElement('style'), {
    textContent: `
        .error-message {
            color: red;
            font-size: 12px;
            margin-top: 5px;
            display: none;
        }
    `
}));