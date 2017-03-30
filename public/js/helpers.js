function showReviewModal() {
  const modal = document.getElementById('reviewModal');
  modal.style.display = 'block';

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}
