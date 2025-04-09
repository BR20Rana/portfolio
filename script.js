document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
    // Dynamic Welcome Message
document.addEventListener('DOMContentLoaded', function() {
    // Check if this is the first visit or returning visit
    const isFirstVisit = !localStorage.getItem('portfolioVisited');
    
    // Welcome messages array
    const welcomeMessages = [
      "Hello there! 👋 Welcome to my digital space.",
      "Greetings! 🚀 Excited to have you here.",
      "Hi friend! 🌟 Let's explore together.",
      "Welcome back! 💡 Ready to dive in?",
      isFirstVisit 
        ? "First time here? Awesome! Let me show you around." 
        : "Nice to see you again! Check out my latest updates."
    ];
  // Add to script.js
document.addEventListener('DOMContentLoaded', function() {
  const particlesContainer = document.querySelector('.particles');
  const particleCount = 15;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random properties
    const size = Math.random() * 15 + 5;
    const posX = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 10;
    const color = `hsla(${Math.random() * 360}, 100%, 70%, 0.7)`;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.background = color;
    particle.style.top = `${Math.random() * 100 + 100}%`;
    
    particlesContainer.appendChild(particle);
  }
});
    // Select random welcome message
    const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    
    // Show welcome modal
    const welcomeModal = document.getElementById('welcomeModal');
    const welcomeMessage = document.getElementById('welcomeMessage');
    
    // Only show if not dismissed in this session
    if (!sessionStorage.getItem('welcomeDismissed')) {
      setTimeout(() => {
        welcomeModal.style.display = "block";
        document.body.style.overflow = "hidden";
        
        // Typing effect
        welcomeMessage.innerHTML = `<span class="typing-effect">${randomMessage}</span>`;
        
        // Mark as visited
        localStorage.setItem('portfolioVisited', 'true');
      }, 1000);
    }
  
    // Close modal
    document.querySelector('.close-btn').addEventListener('click', function() {
      welcomeModal.style.display = "none";
      document.body.style.overflow = "auto";
      sessionStorage.setItem('welcomeDismissed', 'true');
    });
  
    // Explore button
    document.getElementById('exploreBtn').addEventListener('click', function() {
      welcomeModal.style.display = "none";
      document.body.style.overflow = "auto";
      sessionStorage.setItem('welcomeDismissed', 'true');
      window.scrollTo({
        top: document.getElementById('about').offsetTop - 80,
        behavior: 'smooth'
      });
    });
  
    // Contact button
    document.getElementById('contactBtn').addEventListener('click', function() {
      welcomeModal.style.display = "none";
      document.body.style.overflow = "auto";
      sessionStorage.setItem('welcomeDismissed', 'true');
      window.scrollTo({
        top: document.getElementById('contact').offsetTop - 80,
        behavior: 'smooth'
      });
    });
  
    // Close when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target == welcomeModal) {
        welcomeModal.style.display = "none";
        document.body.style.overflow = "auto";
        sessionStorage.setItem('welcomeDismissed', 'true');
      }
    });
  });
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });
    });
    
    // Animate skill bars on scroll
    const skills = document.querySelectorAll('.skill');
    
    function animateSkills() {
        skills.forEach(skill => {
            const level = skill.getAttribute('data-level');
            skill.style.setProperty('--skill-level', level + '%');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        skill.style.width = level + '%';
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(skill);
        });
    }
    
    // Initialize animations when page loads
    animateSkills();
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
    
    // Update copyright year automatically
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = yearSpan.textContent.replace('2024', currentYear);
    }
});