//ficheiro de script

(function() {
    window.addEventListener('load', function() {
        var form = document.getElementById('contactForm');
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }, false);
})();

function resetForm() {
    var form = document.getElementById('contactForm');
    form.reset();
    form.classList.remove('was-validated');
}
