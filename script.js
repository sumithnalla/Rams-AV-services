// Load header and footer on all pages
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    setupMenuToggle();      // <- new: initialize mobile menu after header is injected
    setupPrivacyModal();
    setupActiveNav();
});

// Load Header
function loadHeader() {
    const headerHTML = `
        <header id="header">
            <div class="container">
                <div class="header-content">
                    <div class="logo">
                        <img src="images/logo.png" alt="Ram's AV Logo">
                    </div>

                    <!-- Hamburger / menu toggle -->
                    <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation" aria-expanded="false">
                        <span class="hamburger"></span>
                    </button>

                    <nav class="nav-menu" role="navigation" aria-label="Main Navigation">
                        <a href="index.html" class="nav-link">Home</a>
                        <a href="equipment.html" class="nav-link">Equipment</a>
                        <a href="about.html" class="nav-link">About Us</a>
                        <a href="contact.html" class="nav-link">Contact</a>
                        <a href="privacy.html" class="nav-link">Privacy Policy</a>
                    </nav>
                </div>
            </div>
        </header>
    `;
    
    document.getElementById('header').innerHTML = headerHTML;
}

// Load Footer
function loadFooter() {
    const footerHTML = `
        <footer id="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Ram's AV Services</h3>
                        <p>Premium Audio-Visual solutions for corporate and social events across India. We provide equipment rental, delivery, installation, and on-site support.</p>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul class="footer-links">
                            <li><a href="index.html"><i class="fas fa-chevron-right"></i> Home</a></li>
                            <li><a href="equipment.html"><i class="fas fa-chevron-right"></i> Equipment Catalog</a></li>
                            <li><a href="about.html"><i class="fas fa-chevron-right"></i> About Company</a></li>
                            <li><a href="contact.html"><i class="fas fa-chevron-right"></i> Contact Us</a></li>
                            <li><a href="privacy.html"><i class="fas fa-chevron-right"></i> Privacy Policy</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Contact Info</h3>
                        <div class="contact-info">
                            <div class="contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Head Office: 17-2-625/25, MADANNAPET, POST OFFICE, SAIDHA,
SAIDHABAD, Hyderabad, Telangana, 500059</span>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-phone"></i>
                                <span>+91 9700033342</span>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <span>ramsprojector987@gmail.com</span>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-clock"></i>
                                <span>Mon-Sun: 8:00 AM - 10:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2024 Ram's Audio Visual Services. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    `;
    
    document.getElementById('footer').innerHTML = footerHTML;
}

// Setup Privacy Policy Modal
function setupPrivacyModal() {
    const modal = document.getElementById('privacyModal');
    const openBtn = document.getElementById('openPrivacy');
    const closeBtn = document.querySelector('.close-modal');
    
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Set active navigation link based on current page
function setupActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]') && e.target.getAttribute('href') !== '#') {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }
});

// New: setup mobile menu toggle behaviour
function setupMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav-menu');

    if (!menuToggle || !nav) return;

    // toggle open/close
    menuToggle.addEventListener('click', (e) => {
        const isOpen = nav.classList.toggle('open');
        menuToggle.classList.toggle('open', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    });

    // close when a nav link is clicked (mobile)
    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('open')) {
                nav.classList.remove('open');
                menuToggle.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // close when clicking outside the nav/menu toggle
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target) && nav.classList.contains('open')) {
            nav.classList.remove('open');
            menuToggle.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = 'auto';
        }
    });

    // close with Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('open')) {
            nav.classList.remove('open');
            menuToggle.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = 'auto';
        }
    });
}