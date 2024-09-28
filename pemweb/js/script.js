
// Temukan elemen dengan class "bagus-badge" dan area pembatas (hero-column)
const badge = document.querySelector('.floating-element.bagus-badge');
const heroSection = document.querySelector('.hero-column');

// Fungsi untuk menghasilkan posisi acak dalam batas tertentu
function randomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fungsi untuk menggerakkan elemen ke posisi acak dalam batas area hero
function moveRandomWithinHero() {
    const heroRect = heroSection.getBoundingClientRect();
    const badgeRect = badge.getBoundingClientRect();

    const randomLeft = randomPosition(
        0, // Start from the left boundary of the container
        heroRect.width - badgeRect.width // Deduct the width of the badge to avoid overflow
    );

    const randomTop = randomPosition(
        0, // Start from the top boundary of the container
        heroRect.height - badgeRect.height // Deduct the height of the badge to avoid overflow
    );

    badge.style.transition = 'all 0.5s ease-in-out';
    badge.style.position = 'absolute';
    badge.style.left = `${randomLeft}px`;
    badge.style.top = `${randomTop}px`;
}

// Fungsi untuk memulai gerakan acak dengan interval 1 detik
function startContinuousRandomMovement() {
    setInterval(() => {
        moveRandomWithinHero(); // Gerakkan elemen setiap 1 detik
    }, 1000); // Interval 1000 milidetik (1 detik)
}

// Mulai gerakan acak terus-menerus
startContinuousRandomMovement();
