// Form validation functions
const validateFullName = (name) => {
    if (!name) return 'Please enter your full name';
    if (name.length < 3) return 'Full name must be at least 3 characters long';
    if (!/^[a-zA-Z\s]*$/.test(name)) return 'Full name should only contain letters and spaces';
    return '';
};

const validateEmail = (email) => {
    if (!email) return 'Please enter your email address';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
};

const validatePhone = (phone) => {
    if (!phone) return 'Please enter your phone number';
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) return 'Please enter a valid 10-digit phone number';
    return '';
};

const validateCourse = (course) => {
    if (!course) return 'Please select a course';
    return '';
};

// Show alert message function
const showAlert = (messages) => {
    let alertMessage = 'Please fix the following errors:\n\n';
    messages.forEach(msg => {
        alertMessage += '• ' + msg + '\n';
    });
    alert(alertMessage);
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

    // Collect all validation errors
    const errors = [];
    
    // Validate each field and collect errors
    const nameError = validateFullName(fullName);
    if (nameError) errors.push(nameError);
    
    const emailError = validateEmail(email);
    if (emailError) errors.push(emailError);
    
    const phoneError = validatePhone(phone);
    if (phoneError) errors.push(phoneError);
    
    const courseError = validateCourse(course);
    if (courseError) errors.push(courseError);

    // If there are errors, show alert and return
    if (errors.length > 0) {
        showAlert(errors);
        return;
    }

    // If no errors, show success message and proceed
    alert('Registration successful!\n\nThank you for registering with us.');

    // Create an object with form data
    const formData = {
        fullName,
        email,
        phone,
        course,
        message
    };

    // Store form data in sessionStorage
    sessionStorage.setItem('formData', JSON.stringify(formData));

    // Reset form and redirect
    this.reset();
    window.location.href = 'thanks.html';
});

// Real-time field validation (optional)
document.getElementById('full-name').addEventListener('blur', function() {
    const error = validateFullName(this.value.trim());
    if (error) alert(error);
});

document.getElementById('email').addEventListener('blur', function() {
    const error = validateEmail(this.value.trim());
    if (error) alert(error);
});

document.getElementById('phone').addEventListener('blur', function() {
    const error = validatePhone(this.value.trim());
    if (error) alert(error);
});

document.getElementById('course').addEventListener('change', function() {
    const error = validateCourse(this.value);
    if (error) alert(error);
});