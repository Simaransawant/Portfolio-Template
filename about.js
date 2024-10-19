AOS.init({
      once: false, // Ensures animation happens each time the section is scrolled into view
      duration: 1000, // Default duration (can override with data attributes)
    });
    document.addEventListener("DOMContentLoaded", function() {
        const progressBars = document.querySelectorAll('.progress-bar');

        // Create an intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Animate progress bars when they come into view
                    progressBars.forEach((bar) => {
                        const value = bar.getAttribute('data-value'); // Get the value from data attribute
                        bar.style.width = value + '%'; // Set the width to the value
                    });
                    // Unobserve after animating to avoid repeat animations
                    observer.unobserve(entry.target);
                }
            });
        });

        // Observe each skill section
        document.querySelectorAll('.skill').forEach(skill => {
            observer.observe(skill);
        });
    });

    // Show/Hide Scroll to Top Button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  }

  // Scroll to Top Function
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }