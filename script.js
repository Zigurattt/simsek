document.getElementById('yesButton').addEventListener('click', function() {
    var flash = document.getElementById('flashEffect');
    flash.style.display = 'flex';
    setTimeout(function() {
        flash.style.display = 'none';
    }, 2000);
});
