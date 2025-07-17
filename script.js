document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.add('active');
    document.querySelector('.menu-overlay').classList.add('active');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('active');
    document.querySelector('.menu-overlay').classList.remove('active');
});

document.querySelector('.menu-overlay').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('active');
    this.classList.remove('active');
});

