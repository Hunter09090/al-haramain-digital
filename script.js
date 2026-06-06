/**
 * Al-Haramain Model Madrasah - Main Script
 */

// ১. হেডার, ফুটার এবং অন্যান্য পেজ লোড করার ফাংশন
function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (response.ok) return response.text();
            throw new Error('File not found');
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(err => console.error('Error loading ' + file, err));
}

// ২. পেজ লোড হওয়ার সময় সব কম্পোনেন্ট লোড করা
window.onload = () => {
    // হেডার ও ফুটার লোড
    loadComponent('header-container', 'header.html');
    loadComponent('footer-container', 'footer.html');

    // হোম পেজে থাকলে বাণী এবং বিভাগসমূহ লোড করা
    if (document.getElementById('bani-container')) {
        loadComponent('bani-container', 'bani.html');
    }
    if (document.getElementById('departments-container')) {
        loadComponent('departments.html', 'departments.html');
    }
};

// ৩. মেনু টগল করার ফাংশন
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// ৪. অ্যাকর্ডিয়ন (Accordion) খোলার ফাংশন - (যা আপনি বিস্তারিত দেখার জন্য চেয়েছেন)
function toggleAccordion(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('hidden');
    }
}
