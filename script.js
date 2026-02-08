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
