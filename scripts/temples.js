document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const mainContent = document.getElementById('main-content');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('open');
      if (navLinks.classList.contains('show')) {
          mainContent.style.marginTop = '40%';
      } else {
          mainContent.style.marginTop = '0';
      }
  });
  
  // Update the last modified date
  const currentYearSpan = document.getElementById('currentyear');
 const currentYear = new Date().getFullYear(); 
 currentYearSpan.textContent = currentYear;
  const lastModified = document.getElementById('lastModified');
  lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
});

// Adjust main content margin when resizing to larger screens
window.addEventListener('resize', () => {
  const navLinks = document.getElementById('nav-links');
  const mainContent = document.getElementById('main-content');
  if (window.innerWidth > 768) {
      navLinks.classList.remove('show');
      mainContent.style.marginTop ='0';}
});