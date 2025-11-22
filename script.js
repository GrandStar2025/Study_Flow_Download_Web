// SMOOTH SCROLLING FOR NAVIGATION LINKS
// This function enables smooth scrolling when clicking on navigation links
// SCROLL OFFSET: Change '- 80' below to adjust how far from the top elements appear
// SCROLL BEHAVIOR: Change 'smooth' to 'auto' for instant scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// CONTACT FORM SUBMISSION HANDLING
// This function handles form validation and submission
// FORM SELECTOR: Change '.contact-form' below if you use a different class
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        // NAME FIELD: Change 'input[type="text"]' if you use a different input type
        const name = this.querySelector('input[type="text"]').value;
        // EMAIL FIELD: Change 'input[type="email"]' if you use a different input type
        const email = this.querySelector('input[type="email"]').value;
        // MESSAGE FIELD: Change 'textarea' if you use a different element
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (name && email && message) {
            // SUCCESS MESSAGE: Change the text below
            // In a real application, you would send this data to a server
            alert('Thank you for your message! We will get back to you soon.');
            // RESET FORM: Remove 'this.reset()' if you don't want to clear the form
            this.reset();
        } else {
            // ERROR MESSAGE: Change the text below
            alert('Please fill in all fields.');
        }
    });
}

// HEADER SCROLL EFFECT
// This function changes the header style when scrolling down
// SCROLL THRESHOLD: Change '100' below to adjust when the effect triggers
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        // SCROLLED HEADER SHADOW: Modify the rgba values below
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        // SCROLLED HEADER BACKGROUND: Change 'rgba(255, 255, 255, 0.95)' below
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        // TOP HEADER SHADOW: Modify the rgba values below
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        // TOP HEADER BACKGROUND: Change '#fff' below
        header.style.background = '#fff';
    }
});

// ANIMATION ON SCROLL
// This function adds animations when elements come into view

// OBSERVER OPTIONS
// rootMargin: '0px' - margin around the root
// threshold: 0.1 - 10% of element must be visible to trigger
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // ANIMATION CLASS: Change 'animated' below to use a different class
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// OBSERVE ELEMENTS FOR ANIMATION
// ANIMATED ELEMENTS: Add or remove selectors below
// Currently animates: feature cards, download cards, contact items
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .download-card, .contact-item');
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add animation classes to elements that are already in view
    // DELAY: Change '100' below to adjust animation delay
    setTimeout(() => {
        animateElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('animated');
            }
        });
    }, 100);
});

// Mobile menu toggle functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        // Change hamburger icon when menu is open
        if (nav.classList.contains('active')) {
            hamburger.innerHTML = '&times;'; // Close icon (×)
        } else {
            hamburger.innerHTML = '&#9776;'; // Hamburger icon (☰)
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.innerHTML = '&#9776;'; // Reset to hamburger icon
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            hamburger.innerHTML = '&#9776;'; // Reset to hamburger icon
        }
    });
}

// DOWNLOAD BUTTON FUNCTIONALITY
// Download buttons now work directly with href attributes
// No JavaScript needed as links open in new tabs automatically