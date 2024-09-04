// Particle.js configuration for blue theme
const blueThemeParticlesConfig = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};

// Function to initialize or reinitialize particles
function initializeParticles() {
    particlesJS('particles-js', blueThemeParticlesConfig);
}

// Function to toggle the theme
function toggleTheme() {
    const body = document.body;
    const isDarkTheme = body.classList.contains('dark-theme');

    body.classList.toggle('dark-theme', !isDarkTheme);
    body.classList.toggle('bright-theme', isDarkTheme);

    if (isDarkTheme) {
        // Show particles for blue theme
        initializeParticles();
        localStorage.setItem('theme', 'bright-theme');
    } else {
        // Hide particles for dark theme
        document.getElementById('particles-js').innerHTML = '';
        localStorage.setItem('theme', 'dark-theme');
    }
}

// Set the theme on page load
function setTheme() {
    const savedTheme = localStorage.getItem('theme');
    const isBrightTheme = savedTheme === 'bright-theme';

    document.body.classList.toggle('bright-theme', isBrightTheme);
    document.body.classList.toggle('dark-theme', !isBrightTheme);

    if (isBrightTheme) {
        initializeParticles(); // Initialize particles on page load if bright theme
    }
}

// Copy email to clipboard function
function copyEmail() {
    const email = 'shivamkashyap90151@gmail.com';
    const textarea = document.createElement('textarea');
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Email copied to clipboard!');
}

// Add event listener to theme toggle button
document.getElementById('theme-toggle').addEventListener('click', () => {
    toggleTheme();
});

// Add event listener to home tab
document.getElementById('home-tab').addEventListener('click', () => {
    // Ensure the theme doesn't change when navigating back to the home tab
    window.location.href = 'index.html'; // Redirect to home page
});

// Set theme on page load
setTheme();
