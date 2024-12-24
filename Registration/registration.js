// Form validation functions
const validateFullName = (name) => {
    if (name.length < 3) {
        return 'Full name must be at least 3 characters long';
    }
    if (!/^[a-zA-Z\s]*$/.test(name)) {
        return 'Full name should only contain letters and spaces';
    }
    return '';
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address';
    }
    return '';
};

const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        return 'Please enter a valid 10-digit phone number';
    }
    return '';
};

const validateCourse = (course) => {
    if (!course) {
        return 'Please select a course';
    }
    return '';
};

// Create and show error message
const showError = (input, message) => {
    // Remove any existing error message
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    if (message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = message;
        input.parentElement.appendChild(errorDiv);
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = 'green';
    }
};

// Form submission handler
document.querySelector('.registration-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const course = document.getElementById('course').value;
    const message = document.getElementById('message').value.trim();

    // Validate all fields
    const nameError = validateFullName(fullName);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const courseError = validateCourse(course);

    // Show validation messages
    showError(document.getElementById('full-name'), nameError);
    showError(document.getElementById('email'), emailError);
    showError(document.getElementById('phone'), phoneError);
    showError(document.getElementById('course'), courseError);

    // If there are no errors, proceed with form submission
    if (!nameError && !emailError && !phoneError && !courseError) {
        // Create an object with form data
        const formData = {
            fullName,
            email,
            phone,
            course,
            message
        };

        // Store form data in sessionStorage for access on thanks.html
        sessionStorage.setItem('formData', JSON.stringify(formData));

        // Redirect to thanks.html
        window.location.href = 'thanks.html';
    }
});

// Real-time validation
document.getElementById('full-name').addEventListener('blur', function() {
    showError(this, validateFullName(this.value.trim()));
});

document.getElementById('email').addEventListener('blur', function() {
    showError(this, validateEmail(this.value.trim()));
});

document.getElementById('phone').addEventListener('blur', function() {
    showError(this, validatePhone(this.value.trim()));
});

document.getElementById('course').addEventListener('change', function() {
    showError(this, validateCourse(this.value));
});