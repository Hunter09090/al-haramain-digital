// হেডার এবং অন্যান্য ফাইল লোড করার ফাংশন
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// পেজ লোড হওয়ার সময় সব কম্পোনেন্ট লোড করা
window.onload = () => {
    loadComponent('header-container', 'header.html');
    loadComponent('bani-container', 'bani.html');
    loadComponent('footer-container', 'footer.html');
};

// মেনু টগল করার ফাংশন
function toggleMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}
