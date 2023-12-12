// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    // Perform actions with the email (like sending to a server, etc.)
    alert(`Thank you for subscribing with ${email}!`);
    this.reset();
});

// Fetch a random image from Lorem Picsum
fetch('https://picsum.photos/1920/1080')
.then(response => {
  const imageUrl = response.url;
  // Set the body's background image to the fetched random image
  document.body.style.backgroundImage = `url(${imageUrl})`;
})
.catch(error => {
  console.error('Error fetching random image:', error);
});