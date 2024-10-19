document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.folding-section');
  
  sections.forEach(section => {
    const abstractToggle = section.querySelector('.abstract-toggle');
    const fullContent = section.querySelector('.full-content');
    
    // Ensure content is hidden by default
    fullContent.style.display = 'none';
    
    abstractToggle.addEventListener('click', function() {
      section.classList.toggle('active');
      if (section.classList.contains('active')) {
        fullContent.style.display = 'block';
      } else {
        fullContent.style.display = 'none';
      }
    });
  });
});