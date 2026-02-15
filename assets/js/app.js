// Жеңіл функционал: ішкі іздеу + "iframe жұмыс істемесе" ескерту
function filterCards(inputId, cardSelector) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll(cardSelector).forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(q) ? '' : 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  filterCards('searchTopics', '.topic-card');
});
