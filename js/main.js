//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".service-modal .modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio Modals
const imgCardContainers = document.querySelectorAll("[data-portfolio-target]");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");
const portfolioModals = document.querySelectorAll(".portfolio-model");

// Function to stop the video
const stopVideo = (modal) => {
    const iframe = modal.querySelector('iframe');
    if (iframe) {
        const videoSrc = iframe.src;
        iframe.src = videoSrc; // This reloads the iframe, stopping the video
    }
};

imgCardContainers.forEach((card) => {
    card.addEventListener("click", () => {
        const modalId = card.getAttribute("data-portfolio-target");
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.classList.add("active");
        }
    });
});

portfolioCloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        const modal = closeBtn.closest(".portfolio-model");
        if (modal) {
            modal.classList.remove("active");
            stopVideo(modal); // Stop the video
        }
    });
});

// Close modal and stop video when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('portfolio-model')) {
        e.target.classList.remove('active');
        stopVideo(e.target); // Stop the video
    }
});

// Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a"); // Get nav links for mobile menu close

// Check if elements exist before adding event listeners
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navigation.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        navigation.classList.remove("active");
        document.body.style.overflow = "auto"; // Restore scrolling
    });
}

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
        document.body.style.overflow = "auto"; // Restore scrolling
    });
});

// Close mobile menu when clicking outside
if (navigation) {
    navigation.addEventListener("click", (e) => {
        if (e.target === navigation) {
            navigation.classList.remove("active");
            document.body.style.overflow = "auto"; // Restore scrolling
        }
    });
}


// Typing effect
const phrases = ["Web Developer", "Fullstack Developer", "ICT Tutor", "Freelancer", "Tech Enthusiast"];
let currentPhrase = 0;
let currentLetter = 0;
const typingElement = document.getElementById("typing");

function typePhrase() {
    if (typingElement && currentLetter < phrases[currentPhrase].length) {
        typingElement.textContent += phrases[currentPhrase].charAt(currentLetter);
        currentLetter++;
        setTimeout(typePhrase, 100);
    } else {
        setTimeout(clearPhrase, 1000);
    }
}

function clearPhrase() {
    if (typingElement && currentLetter > 0) {
        typingElement.textContent = typingElement.textContent.slice(0, -1);
        currentLetter--;
        setTimeout(clearPhrase, 50);
    } else {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(typePhrase, 500);
    }
}

// Greeting
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';
    let icon = '';

    if (hour < 12) {
        greeting = 'Good Morning';
        icon = '<i class="fas fa-sun greeting-icon"></i>';
    } else if (hour < 18) {
        greeting = 'Good Afternoon';
        icon = '<i class="fas fa-sun greeting-icon"></i>';
    } else {
        greeting = 'Good Evening';
        icon = '<i class="fas fa-moon greeting-icon"></i>';
    }

    const greetingEl = document.getElementById('greeting');
    if(greetingEl) {
      greetingEl.innerHTML = icon + '  ' + greeting;
    }
}

window.onload = getGreeting;

// =================== JOURNEY & HIGHLIGHTS TABS ===================
const initTabSystem = (containerId) => {
    const tabs = document.querySelectorAll(`#${containerId} [data-target]`);
    const tabContents = document.querySelectorAll(`#${containerId} [data-content]`);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);

            // Deactivate all tabs and content
            tabs.forEach(t => t.classList.remove('qualification__active'));
            tabContents.forEach(content => content.classList.remove('qualification__active'));

            // Activate the clicked tab and corresponding content
            tab.classList.add('qualification__active');
            if (target) {
                target.classList.add('qualification__active');
            }
        });
    });
};

// Skills Toggle
const skillsHeaders = document.querySelectorAll('.skills__header');

skillsHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.parentElement;
        content.classList.toggle('skills__open');
    });
});


//
const skillModals = document.querySelectorAll(".skill-modal");
const skillOpenBtns = document.querySelectorAll(".skill-open-btn");
const skillModalCloseBtns = document.querySelectorAll(".skill-modal-close-btn");

var openSkillModal = function(modalClick){
    skillModals[modalClick].classList.add("active");
}

skillOpenBtns.forEach((openBtn, i) => {
    openBtn.addEventListener("click", () => {
        openSkillModal(i);
    });
});

skillModalCloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        skillModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

// =================== PORTFOLIO FILTER ===================
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".img-card-container");

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtns.forEach((button) => button.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        portfolioItems.forEach((item) => {
            item.classList.add("hide"); // Start by hiding all items

            setTimeout(() => {
                if (filterValue === "all" || item.getAttribute("data-id") === filterValue) {
                    item.classList.remove("hide");
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                }
            }, 10); // A small delay to ensure the hide class is applied first
        });
    });
});

// =================== UNIFIED MODAL LOGIC FOR JOURNEY & HIGHLIGHTS ===================
const openModalButtons = document.querySelectorAll("[data-modal-target]");

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal-target");
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.classList.add("active");
        }
    });
});

const closeModalButtons = document.querySelectorAll(".qualification-modal .modal-close-btn, .certificate-view-modal .modal-close-btn");

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".qualification-modal, .certificate-view-modal");
        if (modal) {
            modal.classList.remove("active");
        }
    });
});

window.addEventListener("click", (e) => {
    if (e.target.classList.contains("qualification-modal") || e.target.classList.contains("certificate-view-modal")) {
        e.target.classList.remove("active");
    }
});
// =================== END OF UNIFIED MODAL LOGIC ===================

// Consolidated Navigation, Scrollspy, and Startup Logic
document.addEventListener("DOMContentLoaded", () => {
    // --- Elements ---
    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");
    const navLinks = document.querySelectorAll(".nav-items a");
    const sections = document.querySelectorAll("section[id]");
    const header = document.querySelector("header");

    // --- Menu Toggle Functions ---
    const closeMenu = () => {
        if(navigation) {
            navigation.classList.remove("active");
        }
        document.body.style.overflow = "auto";
    };

    const openMenu = () => {
        if(navigation) {
            navigation.classList.add("active");
        }
        document.body.style.overflow = "hidden";
    };

    // --- Scrollspy Function ---
    const updateActiveLink = () => {
        const scrollY = window.scrollY;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50; // Adjusted offset
            let sectionId = current.getAttribute("id");

            const link = document.querySelector(".nav-items a[href*=" + sectionId + "]");
            if (link) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            }
        });
    };
    
    // --- Event Listeners ---
    if (menuBtn && closeBtn && navigation && navLinks.length > 0) {
        menuBtn.addEventListener("click", openMenu);
        closeBtn.addEventListener("click", closeMenu);
        navLinks.forEach(link => {
            link.addEventListener("click", closeMenu);
        });
        navigation.addEventListener("click", (e) => {
            if (e.target === navigation) {
                closeMenu();
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    
    // --- Initial Calls on Page Load ---
    typePhrase(); 
    getGreeting();
    updateActiveLink();
    
    initTabSystem('journey');
    initTabSystem('highlights');
});

// Our clients - Swiper initialization
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// =================== MOBILE OPTIMIZATIONS ===================
// Prevent zoom on double tap for iOS
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
});

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Improve scroll performance on mobile
let ticking = false;
function updateScrollPosition() {
    // Your scroll-based animations here
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
    }
});

// =================== CONTACT FORM TO GOOGLE SHEET ===================
const contactForm = document.getElementById('contact-form');
const popup = document.getElementById('submission-popup');
const popupIcon = document.getElementById('popup-icon');
const popupTitle = document.getElementById('popup-title');
const popupMessage = document.getElementById('popup-message');
const popupOkBtn = document.getElementById('popup-ok-btn');
const popupCloseBtn = document.querySelector('.popup-close-btn');

// --- IMPORTANT: PASTE YOUR GOOGLE APPS SCRIPT URL HERE ---
const scriptURL = 'https://script.google.com/macros/s/AKfycbyr7Cm26u5_PlmboyDF96SAgTBJRAh_vwPPdYGJfa2v5zWd5EMDfFC2pbXVoFGtO66Vog/exec'; 

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';
  
    fetch(scriptURL, { method: 'POST', body: new FormData(contactForm) })
      .then(response => response.json())
      .then(data => {
        if (data.result === 'success') {
          showPopup('success', 'Message Sent!', 'Thank you for contacting me. I will get back to you shortly.');
          contactForm.reset();
        } else {
          throw new Error(data.error || 'Unknown error occurred.');
        }
      })
      .catch(error => {
        showPopup('error', 'Submission Failed', 'Something went wrong. Please try again later.');
        console.error('Error!', error.message);
      })
      .finally(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
      });
  });
}

function showPopup(status, title, message) {
  popupTitle.textContent = title;
  popupMessage.textContent = message;
  if (status === 'success') {
    popupIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
  } else {
    popupIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
  }
  popup.classList.add('active');
}

function closePopup() {
  popup.classList.remove('active');
}

if(popupOkBtn) popupOkBtn.addEventListener('click', closePopup);
if(popupCloseBtn) popupCloseBtn.addEventListener('click', closePopup);


// Responsive navigation menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");
    const navItems = document.querySelectorAll(".nav-items a");

    const closeMenu = () => {
      if(navigation) {
        navigation.classList.remove("active");
        document.body.style.overflow = "auto";
        window.dispatchEvent(new Event('scroll'));
      }
    };

    const openMenu = () => {
      if(navigation) {
        navigation.classList.add("active");
        document.body.style.overflow = "hidden";
        navItems.forEach(link => {
            link.classList.remove('active');
        });
        const homeLink = document.querySelector(".nav-items a[href='#home']");
        if (homeLink) {
            homeLink.classList.add('active');
        }
      }
    };

    if (menuBtn && closeBtn && navigation && navItems.length > 0) {
        menuBtn.addEventListener("click", openMenu);
        closeBtn.addEventListener("click", closeMenu);
        navItems.forEach((navItem) => {
            navItem.addEventListener("click", closeMenu);
        });
        navigation.addEventListener("click", (e) => {
            if (e.target === navigation) {
                closeMenu();
            }
        });
    }
});


// Handle skills visibility on different screen sizes
const handleSkillsVisibility = () => {
  const skillsContent = document.querySelectorAll('.skills__content');
  if (window.innerWidth <= 768) {
    skillsContent.forEach((skill, index) => {
      if (index !== 0) {
        skill.classList.remove('skills__open');
      } else {
        skill.classList.add('skills__open');
      }
    });
  } else {
    skillsContent.forEach(skill => {
      skill.classList.add('skills__open');
    });
  }
};

document.addEventListener('DOMContentLoaded', handleSkillsVisibility);
window.addEventListener('resize', handleSkillsVisibility);


// =================== SCROLL REVEAL ANIMATION ===================
document.addEventListener("DOMContentLoaded", () => {
    if(typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2000,
            delay: 50,
            viewFactor: 0.2,
            reset: false 
        });
    
        sr.reveal('.section-title-01, .section-title-02', { delay: 200 });
        sr.reveal('.home-container .info', { origin: 'left' });
        sr.reveal('.home-container .home-img', { origin: 'right' });
        sr.reveal('.home .scroll-down', { origin: 'bottom', delay: 1200 });
        sr.reveal('.home .media-icons a', { origin: 'left', interval: 200, delay: 800 });
        sr.reveal('.about-img', { origin: 'left' });
        sr.reveal('.about-info', { origin: 'right' });
        sr.reveal('.skills__content', { origin: 'bottom', interval: 200 });
        sr.reveal('.qualification__tabs .qualification__button', { interval: 150 });
        sr.reveal('.service-card', { origin: 'bottom', interval: 200 });
        sr.reveal('.portfolio-filter-btns .filter-btn', { interval: 100 });
        sr.reveal('.client-swiper', { origin: 'bottom' });
        sr.reveal('.contact-left', { origin: 'left' });
        sr.reveal('.contact-right', { origin: 'right' });
        sr.reveal('.get-in-touch', { origin: 'bottom' });
    }
});

// =================== SKILL BAR ANIMATION ON SCROLL & MODAL OPEN ===================
document.addEventListener("DOMContentLoaded", () => {
    // Function to animate progress bars within a given container
    const animateProgressBars = (container) => {
        const progressBars = container.querySelectorAll('.skill-percentage, .skills__percentage');
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            if (targetWidth) {
                setTimeout(() => {
                    bar.style.width = targetWidth;
                }, 100);
            }
        });
    };

    // Use an Intersection Observer to animate the main skill bars when they scroll into view
    const skillCards = document.querySelectorAll('.skill-card');
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  animateProgressBars(entry.target);
                  observer.unobserve(entry.target); // Animate only once
              }
          });
      }, {
          threshold: 0.5 
      });
  
      skillCards.forEach(card => {
          observer.observe(card);
      });
    }


    // Animate progress bars inside modals when they are opened
    const skillModals = document.querySelectorAll(".skill-modal");
    const skillOpenBtns = document.querySelectorAll(".skill-open-btn");

    skillOpenBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const modal = skillModals[index]; 
            if (modal && !modal.classList.contains('animated')) {
                const progressBarsInModal = modal.querySelectorAll('.skill-percentage, .skills__percentage');
                progressBarsInModal.forEach(bar => {
                    bar.style.width = '0';
                });

                setTimeout(() => {
                    animateProgressBars(modal);
                    modal.classList.add('animated'); 
                }, 200); 
            }
        });
    });
});

// =================== PRELOADER SCRIPT ===================
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    const contentWrapper = document.querySelector('.content-wrapper');

    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            if (contentWrapper) {
               contentWrapper.classList.add('loaded');
            }
            setTimeout(() => {
                preloader.style.display = 'none';
           }, 750); 
       }, 1500); 
    }
});

// =================== DARK/LIGHT THEME (FINAL CORRECTED VERSION) ===================
document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.querySelector(".theme-btn");

    const applyTheme = (theme) => {
        const htmlElement = document.documentElement;
        if (theme === 'dark') {
            htmlElement.classList.add("dark-theme");
            if (themeBtn) themeBtn.classList.add("sun");
        } else {
            htmlElement.classList.remove("dark-theme");
            if (themeBtn) themeBtn.classList.remove("sun");
        }
    };

    const savedTheme = localStorage.getItem("saved-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(prefersDark ? "dark" : "light");
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const isDark = document.documentElement.classList.contains("dark-theme");
            const newTheme = isDark ? "light" : "dark";
            
            localStorage.setItem("saved-theme", newTheme); 
            
            applyTheme(newTheme);
        });
    }
});