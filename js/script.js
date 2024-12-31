document.addEventListener("DOMContentLoaded", () => {
    // Display a welcome message when the page loads
    alert("Welcome to my website!");
      // Show subscribe box after 3 seconds
      setTimeout(showSubscribeBox, 3000);

    // Content for each menu item
    const contentMap = {
         home: '<iframe id="home-iframe" src="home/home.html" frameborder="0" style="width: 100%; height: 100vh; border: none;"></iframe>',
        "all-courses": "<h2>All Courses</h2><p>Here is the list of all courses we offer.</p>",
        "registration": '<iframe id="registration-iframe" src="Registration/registration.html" frameborder="0" style="width: 100%; height: 500px;"></iframe>',
        "photo-gallery": '<iframe id="photo-gallery-iframe" src="PhotoGallery/photo-gallery.html" frameborder="0" style="width: 100%; height: 500px;"></iframe>',
        "scholarship": '<iframe id="scholarship-iframe" src="Scholarship/scholar.html" frameborder="0" style="width: 100%; height: 700px;"></iframe>',
        "online-exam": '<iframe id="exam-iframe" src="onlineexm/exam.html" frameborder="0" style="width: 100%; height: 700px;"></iframe>',
        blog: "<iframe src='blog/blog.html' frameborder='0' style='width: 100%; height: 500px;'></iframe>",
        help: "<iframe src='help/help.html' frameborder='0' style='width: 100%; height: 500px;'></iframe>",
        "contact-us": `<iframe src="ContactForm/contact-form.html" frameborder="0" style="width: 100%; height: 600px; border: none; border-radius: 5px; background: transparent; outline: none;"></iframe>`
    };

    // Select all nav links and the dynamic content container
    const navLinks = document.querySelectorAll(".navbar a");
    const dynamicContent = document.getElementById("dynamic-content");

    // Load "Home" content by default
    dynamicContent.innerHTML = contentMap["home"];

    // Handle nav link clicks
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const contentKey = link.dataset.content;
            
            if (contentKey === "scholarship") {
                openScholarshipTerms();
            } else {
                dynamicContent.innerHTML = contentMap[contentKey];
            }
        });
    });

    // Handle dropdown menu
    const dropdownItems = document.querySelectorAll('.nav-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
        dropdownItems.forEach(item => {
            item.classList.remove('active');
        });
    });

    // Listen for message from terms window
    window.addEventListener('message', function(event) {
        if (event.data === 'termsAccepted') {
            dynamicContent.innerHTML = contentMap["scholarship"];
        }
    });
});

function openScholarshipTerms() {
    const width = 500;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    window.open(
        'terms.html',
        'ScholarshipTerms',
        `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );
}



function showSubscribeBox() {
    const subscribeBox = document.getElementById('subscribeBox');
    subscribeBox.classList.add('show');
}

function closeSubscribe() {
    const subscribeBox = document.getElementById('subscribeBox');
    subscribeBox.classList.remove('show');
}

function handleSubscribe() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();

    // Simple email validation
    if (!email) {
        alert('Please enter an email address');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Show success message
    alert(`Thank you for subscribing! Updates will be sent to ${email}`);
    
    // Close the subscribe box
    closeSubscribe();
}

function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function redirectToSite(url) {
    if(url) {
        window.open(url, '_blank'); // Opens in new tab
    }
}