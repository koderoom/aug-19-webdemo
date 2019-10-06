let moveState = true;
window.addEventListener('keypress', (e) => {
    if(e.which === 13) {
        if (moveState) {
            document.querySelector('.surface').classList.remove('surface-anim');
            document.querySelector('.car').classList.remove('car-anim');

            document.querySelector('img').src = 'assets/car_off.png';
        } else {
            document.querySelector('.surface').classList.add('surface-anim');
            document.querySelector('.car').classList.add('car-anim');
            
            document.querySelector('img').src = 'assets/car_on.png';
        }
        
        moveState = !moveState;
    }
});