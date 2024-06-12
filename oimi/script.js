var selectedOption = '';

function selectOption(option) {
    var buttons = document.querySelectorAll('.caixas button');
    buttons.forEach(function(button) {
        button.classList.remove('selected');
    });

    var selectedButton = document.querySelector('.caixas button[data-option="' + option + '"]');
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }

    selectedOption = option;
}

function goToCadastro() {
    var url;
    if (selectedOption === 'motorista') {
        url = 'cadastromotorista.html';
    } else if (selectedOption === 'passageiro') {
        url = 'cadastropassageiro.html';
    } else if (selectedOption === 'ambos') {
        url = 'cadastromotorista.html'; 
    }

    
    if (url) {
        window.location.href = url;
    }
}
