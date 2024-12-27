// Focus and blur handlers
function handleFocus(element) {
    // Remove any error styling
    element.classList.remove('input-error');
    element.classList.add('input-focus');
    
    // Clear any error message
    const errorDiv = element.parentElement.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.style.display = 'none';
    }
}

function handleBlur(element, validationFunction) {
    element.classList.remove('input-focus');
    
    if (!validationFunction) return;

    const value = element.value.trim();
    const error = validationFunction(value);
    
    // Create or get error message div
    let errorDiv = element.parentElement.querySelector('.error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        element.parentElement.appendChild(errorDiv);
    }

    if (error) {
        element.classList.add('input-error');
        errorDiv.textContent = error;
        errorDiv.style.display = 'block';
    } else {
        element.classList.remove('input-error');
        errorDiv.style.display = 'none';
    }
}

// Update your existing validation functions to return specific messages
const validateFullName = (name) => {
    if (!name) return 'Full name is required';
    if (name.length < 3) return 'Name must be at least 3 characters';
    if (!/^[a-zA-Z\s]*$/.test(name)) return 'Only letters and spaces allowed';
    return '';
};

const validateEmail = (email) => {
    if (!email) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Invalid email format';
    return '';
};

const validatePhone = (phone) => {
    if (!phone) return 'Phone number is required';
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) return 'Must be 10 digits';
    return '';
};

const validateCourse = (course) => {
    if (!course) return 'Please select a course';
    return '';
};

// Keep your existing form submission handler, but update the error display
document.querySelector('.registration-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear all previous errors
    document.querySelectorAll('.error-message').forEach(div => {
        div.style.display = 'none';
    });
    document.querySelectorAll('input, select, textarea').forEach(element => {
        element.classList.remove('input-error');
    });

    // Get and validate form values
    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const course = document.getElementById('course');
    const message = document.getElementById('message');

    // Validate each field
    let hasErrors = false;
    if (validateFullName(fullName.value.trim())) {
        handleBlur(fullName, validateFullName);
        hasErrors = true;
    }
    if (validateEmail(email.value.trim())) {
        handleBlur(email, validateEmail);
        hasErrors = true;
    }
    if (validatePhone(phone.value.trim())) {
        handleBlur(phone, validatePhone);
        hasErrors = true;
    }
    if (validateCourse(course.value)) {
        handleBlur(course, validateCourse);
        hasErrors = true;
    }

    if (hasErrors) return;

    // Your existing success handling code...
    alert('Registration successful!\n\nThank you for registering with us.');
    // ... rest of your code
});