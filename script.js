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