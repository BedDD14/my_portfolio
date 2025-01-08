document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

function highlightItem(element) {
    // Hapus kelas "active" dari semua item
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => item.classList.remove('active'));

    // Tambahkan kelas "active" pada item yang diklik
    element.classList.add('active');
}


