document.addEventListener('DOMContentLoaded', function() {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
  
    document.addEventListener('mousemove', function(e) {
      const trailSize = 20; // Change the size of the trail
      const x = e.pageX;
      const y = e.pageY;
      const trailElement = document.querySelector('.cursor-trail');
      trailElement.style.left = x - trailSize / 2 + 'px';
      trailElement.style.top = y - trailSize / 2 + 'px';
    });
  });  

  const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').getAttribute('src');

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <span class="close-btn" onclick="closeLightbox()">&times;</span>
        <img src="${imgSrc}" alt="Enlarged Image">
      </div>
    `;

    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  });
});


function openLightbox(imageSrc) {
  document.getElementById('lightboxImage').src = imageSrc;
  document.getElementById('lightboxModal').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('lightboxModal').style.display = 'none';
}
document.getElementById('emailForm').addEventListener('submit', function (event) {
  event.preventDefault();
  showMessage();
});

function showMessage() {
  const confirmationBox = document.createElement('div');
  confirmationBox.classList.add('confirmation-box');
  confirmationBox.innerHTML = `
    <div class="message">
      <span>Your message has been delivered! &#10003;</span>
    </div>
  `;
  document.body.appendChild(confirmationBox);

  setTimeout(function () {
    document.body.removeChild(confirmationBox);
  }, 3000); // Display the message for 3 seconds
}