// ১. হেডার, ফুটার এবং অন্যান্য পেজ লোড করার ফাংশন
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = data;
        })
        .catch(err => console.error('Error:', err));
}

// ২. অটো লোড
window.onload = () => {
    loadComponent('header-container', 'header.html');
    loadComponent('footer-container', 'footer.html');
    loadComponent('bani-container', 'bani.html');
    loadComponent('departments-container', 'departments.html');
};

// ৩. টগল ফাংশন (মেনু ও অ্যাকর্ডিয়ন)
function toggleMenu() {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
}

function toggleAccordion(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden');
}
