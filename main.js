const displayModal = document.getElementById('display-modal');
const openModal = document.querySelector('.openModal');
const cancelButton = document.querySelector('.cancel');
const continueButton = document.querySelector('.continue');
const main = document.getElementById('main');


openModal.onclick = function(){
    displayModal.classList.add('show');
    main.style.background = "#b3b3b3";
}

function removeShow(){
    displayModal.classList.remove('show');
    main.style.background = "#f8f9fa";
}

cancelButton.onclick = removeShow;
continueButton.onclick = removeShow;
