document.addEventListener("DOMContentLoaded", () => {
    // Content for each menu item
    const contentMap = {
        home: '<iframe id="home-iframe" src="home/home.html" frameborder="0" style="width: 100%; height: 500px;"></iframe>',
        "all-courses": "<h2>All Courses</h2><p>Here is the list of all courses we offer.</p>",
        "registration": '<iframe id="registration-iframe" src="Registration/registration.html" frameborder="0" style="width: 100%; height: 500px;"></iframe>',
        "photo-gallery": '<iframe id="photo-gallery-iframe" src="PhotoGallery/photo-gallery.html" frameborder="0" style="width: 100%; height: 500px;"></iframe>',
        blog: "<iframe src='blog/blog.html' frameborder='0' style='width: 100%; height: 500px;'></iframe>",
        help: "<h2>Help</h2><p>Need help? Find resources here.</p>",
     "contact-us": `
    <div style="display: flex; flex-wrap: wrap; gap: 20px;">
        <div style="flex: 1; min-width: 300px;">
            <h2>Contact Us</h2>
            <p>Find us at the location below:</p>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.32796325552!2d-118.69192192394835!3d34.02073051311298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb43e213f7e7%3A0x6859a9137402ad8b!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1686332790242!5m2!1sen!2sin" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                style="width: 100%; height: 400px; border: 1px solid #ddd; border-radius: 5px;"
            ></iframe>
        </div>
        <div style="flex: 1; min-width: 300px;">
            <iframe 
                src="ContactForm/contact-form.html" 
                frameborder="0" 
                style="width: 100%; height: 400px; border: 1px solid #ddd; border-radius: 5px;"
            ></iframe>
        </div>
    </div>
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

