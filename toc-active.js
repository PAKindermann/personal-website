document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        const tocLink = document.querySelector(`#TOC li a[href="#${id}"]`);
        if (tocLink) {
          // Remove active class from all TOC links
          document.querySelectorAll('#TOC li a').forEach((el) => {
            el.classList.remove('toc-active');
          });
          // Add active class to current TOC link
          tocLink.classList.add('toc-active');
        }
      }
    });
  }, {
    rootMargin: '0px 0px -50% 0px'
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
});