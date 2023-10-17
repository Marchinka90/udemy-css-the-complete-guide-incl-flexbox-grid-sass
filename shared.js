let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative');
let selectPlanButton = document.querySelectorAll('.plan button');
let toogleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; // This will actually overwrite the complete class list
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});
if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toogleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});