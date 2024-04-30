const filterSelect = document.getElementById('categoryFilter');
const cards = document.querySelectorAll('.card');

filterSelect.addEventListener('change', function () {
        const selectedCategory = this.value;

        cards.forEach(card => {
            if (selectedCategory === 'all' || card.classList.contains(selectedCategory)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
});