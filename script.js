const words = ["Developer","Software Tester","Designer"];
let wordIndex = 0, letterIndex = 0, isDeleting = false;

const typedTextElement = document.getElementById('typed-text');

(function type() {
  const currentWord = words[wordIndex];
  typedTextElement.textContent = currentWord.slice(0, letterIndex);
  
  letterIndex += isDeleting ? -1 : 1;

  if (!isDeleting && letterIndex === currentWord.length) {
    setTimeout(() => isDeleting = true, 2000);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
})();


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