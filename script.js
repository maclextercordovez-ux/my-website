document.getElementById("btn").addEventListener("click", function () {
  alert("Hello! Welcome to my website.");
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  // Simple validation or processing can go here

  document.getElementById('response').textContent = `Thanks, ${name}! Your message has been received.`;

  e.target.reset();
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.cursor = 'pointer';
    
    const largeImg = document.createElement('img');
    largeImg.src = img.src;
    largeImg.style.maxWidth = '90%';
    largeImg.style.maxHeight = '90%';
    modal.appendChild(largeImg);
    
    modal.addEventListener('click', () => modal.remove());
    
    document.body.appendChild(modal);
  });
});
