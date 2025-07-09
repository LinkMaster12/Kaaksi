// === Get Comic Info from URL ===
const params = new URLSearchParams(window.location.search);
const series = params.get('series') || 'Repadded Chapter 2';

// New path: Comics/public/[series]/001.jpg
const basePath = `../Comics/public/${series}/`;
let currentPage = 1;

// === Number of pages in the chapter ===
const totalPages = 20; // Update this as needed for each chapter

// === Load Comic Page ===
function loadPage() {
  const pageNum = currentPage.toString().padStart(3, '0'); // Formats as 001, 002, etc.
  document.getElementById('comicPage').src = `${basePath}${pageNum}.jpg`;
}

// === Page Navigation ===
function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    loadPage();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    loadPage();
  }
}

// === Initial Page Load ===
loadPage();

// === Swipe Handling for Mobile ===
let touchStartX = 0;
document.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX);
document.addEventListener('touchend', e => {
  const touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) nextPage();
  if (touchEndX > touchStartX + 50) prevPage();
});
