// Main JavaScript file

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js
    initTypedJs();
    
    // Initialize navbar scroll effect
    initNavbarScroll();
    
    // Initialize smooth scrolling for navigation links
    initSmoothScroll();
    
    // Initialize mobile menu toggle
    initMobileMenu();
    
    // Load projects from configuration
    loadProjects();
    
    // Initialize project filtering
    initProjectFilter();
    
    // Initialize contact form (for form submission feedback)
    initContactForm();
    
    // Add animation to elements when they come into view
    initScrollAnimations();
});

// Initialize Typed.js for hero section
function initTypedJs() {
    const options = {
        strings: [
            'Software Engineer',
            'Data Scientist',
            'Full Stack Developer',
            'Machine Learning Engineer'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    };
    
    const typed = new Typed('#typed-text', options);
}

// Initialize navbar scroll effect
function initNavbarScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Initialize smooth scrolling for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a, .footer-links a, .hero-buttons a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.querySelector('.nav-links').classList.remove('active');
                    document.querySelector('.hamburger').classList.remove('active');
                }
            }
        });
    });
}

// Initialize mobile menu toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Load projects from configuration
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    if (!projectsGrid || !projectsConfig) return;
    
    // Clear existing projects
    projectsGrid.innerHTML = '';
    
    // Loop through projects and create HTML
    projectsConfig.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card ${project.category}`;
        
        // Create project HTML
        projectCard.innerHTML = `
            <div class="project-img">
                <img src="${project.imagePath}" alt="${project.title}" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubLink}" target="_blank" title="View Code"><i class="fab fa-github"></i></a>
                    <a href="${project.demoLink}" target="_blank" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Initialize project filtering
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Show/hide projects based on filter
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Initialize contact form submission feedback
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        // Add a success message after form submission
        // This is optional since Formspree will handle the actual submission
        contactForm.addEventListener('submit', function() {
            // You can add additional client-side validation here if needed
            console.log('Form submitted to Formspree');
        });
    }
}

// Initialize scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .contact-info-item');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to add animation class when element is in viewport
    function checkAnimations() {
        animatedElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    }
    
    // Check animations on scroll
    window.addEventListener('scroll', checkAnimations);
    
    // Check animations on page load
    checkAnimations();
}
