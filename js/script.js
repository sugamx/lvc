document.addEventListener("DOMContentLoaded", () => {
    // Content for each menu item
    const contentMap = {
        home: '<iframe id="home-iframe" src="home/home.html" frameborder="0" style="width: 100%; height: 500px;"></iframe>',
        "all-courses": "<h2>All Courses</h2><p>Here is the list of all courses we offer.</p>",
        "registration": '<iframe id="registration-iframe" src="Registration/registration.html" frameborder="0" style="width: 100%; height: 500px;"></iframe>',
        "photo-gallery": '<iframe id="photo-gallery-iframe" src="PhotoGallery/photo-gallery.html" frameborder="0" style="width: 100%; height: 500px;"></iframe>',
        blog: "<iframe src='blog/blog.html' frameborder='0' style='width: 100%; height: 500px;'></iframe>",
        help: "<iframe src='help/help.html' frameborder='0' style='width: 100%; height: 500px;'></iframe>",
        "contact-us": `
 <iframe 
    src="ContactForm/contact-form.html" 
    frameborder="0" 
    style="width: 100%; height: 600px; border: none; border-radius: 5px; background: transparent; outline: none;">
</iframe>

 
    
`,

    };

    // Select all nav links and the dynamic content container
    const navLinks = document.querySelectorAll(".navbar a");
    const dynamicContent = document.getElementById("dynamic-content");
    // Load "Home" content by default
    dynamicContent.innerHTML = contentMap["home"];

    // Add click event listener to each nav link
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const contentKey = link.dataset.content; // Get the content key
            dynamicContent.innerHTML = contentMap[contentKey]; // Update the content box
        });
    });
});

// Get all the menu items
const dropdownItems = document.querySelectorAll('.nav-item');

dropdownItems.forEach(item => {
    item.addEventListener('click', function (e) {
        // Prevent the default action
        e.stopPropagation();

        // Close all other dropdowns
        dropdownItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle the active class for the clicked item
        item.classList.toggle('active');
    });
});

// Close dropdowns if clicked outside
document.addEventListener('click', function () {
    dropdownItems.forEach(item => {
        item.classList.remove('active');
    });
});
