function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = data;
        })
        .catch(err => console.error('Error:', err));
}

window.onload = () => {
    loadComponent('header-container', 'header.html');
    loadComponent('footer-container', 'footer.html');
    loadComponent('bani-container', 'bani.html');
    loadComponent('departments-container', 'departments.html');
};

function toggleAccordion(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden');
}
