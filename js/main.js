document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js with a slight delay to ensure it loads properly
    setTimeout(function() {
        const typed = new Typed('.typed-text', {
            strings: ['Software Engineer', 'Data Scientist', 'Full Stack Developer', 'Machine Learning Engineer'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }, 500);

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNavLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNavLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileNavLinks.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Experience Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.dataset.target;
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(`${target}-content`).classList.add('active');
        });
    });

    // Load projects dynamically from configuration
    function loadProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        
        // Sort projects to put Nutribuddy and CodeSage first
        const sortedProjects = [...projectsConfig].sort((a, b) => {
            if (a.id === 'nutribuddy') return -1;
            if (b.id === 'nutribuddy') return 1;
            if (a.id === 'codesage') return -1;
            if (b.id === 'codesage') return 1;
            return 0;
        });
        
        // Clear existing content
        projectsGrid.innerHTML = '';
        
        // Add projects to the grid
        sortedProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.dataset.category = project.category;
            
            const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
            
            projectCard.innerHTML = `
                <div class="project-img">
                    <img src="${project.imagePath}" alt="${project.title}" onerror="this.src='assets/images/placeholder.jpg'">
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                    <div class="project-links">
                        <a href="${project.githubLink}" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="${project.demoLink}" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
        
        // Preload all images to ensure they're available
        sortedProjects.forEach(project => {
            const img = new Image();
            img.src = project.imagePath;
            img.onerror = function() {
                console.log(`Failed to load image: ${project.imagePath}`);
            };
        });
    }
    
    // Load projects when the page is ready
    loadProjects();

    // Projects Filter
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter projects
            document.querySelectorAll('.project-card').forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to a server
            // For now, just show an alert
            alert('Thank you for your message! This is a demo form, so no message was actually sent.');
            
            // Reset the form
            this.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation on scroll (simple version)
    function animateOnScroll() {
        const elements = document.querySelectorAll('.skill-item, .project-card, .timeline-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for animation
    document.querySelectorAll('.skill-item, .project-card, .timeline-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});
