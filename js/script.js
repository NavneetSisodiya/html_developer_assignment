// Search icon toggle
document.querySelector('.search-icon').onclick = () => {
  document.querySelector('.search-box').classList.toggle('hidden');
};
// Hamburger menu toggle
document.querySelector('.hamburger').onclick = () => {
  document.querySelector('.nav-links').classList.toggle('open');
};
function changeImage(src) {
    document.getElementById('mainPerfumeImg').src = src;
  }
  function prevImage() {
    // Slider logic 
  }

  function nextImage() {
    // Slider logic 
  }

  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const openItem = document.querySelector('.accordion-item.active');
      if (openItem && openItem !== header.parentElement) {
        openItem.classList.remove('active');
        openItem.querySelector('.symbol').textContent = '+';
      }

      header.parentElement.classList.toggle('active');
      const symbol = header.querySelector('.symbol');
      symbol.textContent = header.parentElement.classList.contains('active') ? '-' : '+';
    });
  });

  const faqs = document.querySelectorAll('.faq-item');

  faqs.forEach(faq => {
    faq.querySelector('.faq-question').addEventListener('click', () => {
      const answer = faq.querySelector('.faq-answer');
      const toggle = faq.querySelector('.toggle');

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        toggle.textContent = '+';
      } else {
        // Close all
        faqs.forEach(f => {
          f.querySelector('.faq-answer').style.display = 'none';
          f.querySelector('.toggle').textContent = '+';
        });
        // Open this
        answer.style.display = 'block';
        toggle.textContent = '−';
      }
    });
  });

