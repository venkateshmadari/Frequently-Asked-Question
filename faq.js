const accocrdion = document.getElementsByClassName('content-container')
for ( i = 0; i < accocrdion.length; i++) {
    accocrdion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })

};