window.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.querySelector('.close-button');
    var menuToggle = document.querySelector('#menu-toggle');

    closeButton.addEventListener('click', function() {
        menuToggle.checked = false;
    });
});