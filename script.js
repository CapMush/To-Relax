document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('modal');
    const img = document.getElementById('clickableImage');
    const span = document.getElementsByClassName('close')[0];

    // When the user clicks on the image, open the modal
    img.onclick = function() {
        modal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});