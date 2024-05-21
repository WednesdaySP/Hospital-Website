document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const autoplayBtn = document.getElementById('autoplay');
    const images = document.querySelectorAll('.gallery img');
    let currentImageIndex = 0;
    let autoplayInterval;

    // Show the lightbox
    function showLightbox(index) {
        currentImageIndex = index;
        const img = images[currentImageIndex];
        const largeImage = img.dataset.image || img.src;
        lightboxImage.src = largeImage;
        lightboxCaption.innerHTML = img.dataset.caption || img.alt;
        lightbox.style.display = 'flex';
        setTimeout(() => {
            lightbox.style.opacity = '1';
            lightboxImage.style.opacity = '1';
        }, 10);
    }

    // Hide the lightbox
    function hideLightbox() {
        lightbox.style.opacity = '0';
        lightboxImage.style.opacity = '0';
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 500);
        stopAutoplay();
    }

    // Show next image
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showLightbox(currentImageIndex);
    }

    // Show previous image
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showLightbox(currentImageIndex);
    }

    // Start autoplay
    function startAutoplay() {
        stopAutoplay(); // Clear any existing interval
        autoplayInterval = setInterval(showNextImage, 3000); // Change image every 3 seconds
        autoplayBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }

    // Stop autoplay
    function stopAutoplay() {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
        autoplayBtn.innerHTML = '<i class="fas fa-play"></i>';
    }

    // Toggle autoplay
    function toggleAutoplay() {
        if (autoplayInterval) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    }

    // Event listeners
    images.forEach((img, index) => {
        img.addEventListener('click', () => showLightbox(index));
    });

    closeBtn.addEventListener('click', hideLightbox);
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);
    autoplayBtn.addEventListener('click', toggleAutoplay);

    document.addEventListener('keydown', (event) => {
        if (lightbox.style.display === 'flex') {
            if (event.key === 'Escape') hideLightbox();
            if (event.key === 'ArrowRight') showNextImage();
            if (event.key === 'ArrowLeft') showPrevImage();
        }
    });
});
