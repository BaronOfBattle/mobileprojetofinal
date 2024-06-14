document.addEventListener('DOMContentLoaded', function () {
    const passageiroButton = document.getElementById('passageiro');
    const motoristaButton = document.getElementById('motorista');
    const plusButton = document.querySelector('.footer-plus');

    function selectRole(selectedButton, otherButton) {
        selectedButton.classList.add('selected');
        selectedButton.classList.remove('not-selected');
        otherButton.classList.add('not-selected');
        otherButton.classList.remove('selected');
    }

    function enableButtons() {
        passageiroButton.disabled = false;
        motoristaButton.disabled = false;
        passageiroButton.style.pointerEvents = 'auto';
        motoristaButton.style.pointerEvents = 'auto';
        passageiroButton.style.opacity = '1';
        motoristaButton.style.opacity = '1';
    }

    function updateContentBasedOnRole(role) {
        const contentContainer = document.querySelector('.content-container');
        if (role === 'passageiro') {
            contentContainer.innerHTML = `
                <link rel="stylesheet" href="iniciopassageiro.css">

                <div class="btn-viagem-container"> 
                    <div class="motorista-foto">
                        <img src="foto1.png" alt="Foto do Motorista">
                    </div>
                    <h3 class="nome-motorista">Maya</h3>
                    <h3 class="btn-viajar"> IDA - R$ 4,00 </h3>
                    <h4 class="btn-viajar2">FIAT UNO 1.0 FIRE FLEX</h4>
                    <h3 class="horario"> 17:30</h3>  
                    <h3 class="destaque"> Faculdade SENAC <br> R. do Pombal, 57 - Santo Amaro - Recife </h3>
                    <h3 class="destaque"> TI Pelópidas <br>Terminal integrado Pelópidas - Paulista</h3>
                </div>
                <div class="btn-viagem-container"> 
                    <div class="motorista-foto">
                        <img src="foto2.png" alt="Foto do Motorista">
                    </div>
                    <h3 class="nome-motorista">Pietro</h3>
                    <h3 class="btn-viajar"> IDA - R$ 4,00 </h3>
                    <h4 class="btn-viajar2">FIAT UNO 1.0 FIRE FLEX</h4>
                    <h3 class="horario"> 17:30</h3>  
                    <h3 class="destaque"> Faculdade SENAC <br> R. do Pombal, 57 - Santo Amaro - Recife </h3>
                    <h3 class="destaque"> TI Pelópidas <br>Terminal integrado Pelópidas - Paulista</h3>
                </div>
                <div class="btn-viagem-container"> 
                    <div class="motorista-foto">
                        <img src="foto3.png" alt="Foto do Motorista">
                    </div>
                    <h3 class="nome-motorista">Kirya</h3>
                    <h3 class="btn-viajar"> IDA - R$ 4,00 </h4>
                    <h4 class="btn-viajar2">FIAT UNO 1.0 FIRE FLEX</h4>
                    <h3 class="horario"> 17:30</h3>  
                    <h3 class="destaque"> Faculdade SENAC <br> R. do Pombal, 57 - Santo Amaro - Recife </h3>
                    <h3 class="destaque"> TI Pelópidas <br>Terminal integrado Pelópidas - Paulista</h3>
                </div>
            `;
        } else {
            contentContainer.innerHTML = `
                <p class="tema"> ACOMPANHE SUA VIAGEM </p>
                <div class="btn-viagem-container"> 
                    <h3 class="btn-viajar"> IDA - R$ 4,00 </h3>
                    <h4 class="btn-viajar2">VAGAS OCUPADAS: 2/3 </h4>
                    <h3 class="horario"> 17:30</h3>  
                    <h3 class="destaque"> Faculdade SENAC <br> R. do Pombal, 57 - Santo Amaro - Recife </h3>
                    <h3 class="destaque"> TI Pelópidas <br>Terminal integrado Pelópidas - Paulista</h3>
                </div>
                <p class="tema"> SOLICITAÇÕES DE PASSAGEIROS </p>
                <div class="btn-solicitar-container"> 
                    <div class="info">
                        <h2>Nome</h2>
                        <p>PROFESSOR - SENAC</p>
                        <div class="rectangle">
                            <span class="rating">4.9</span>
                            <span class="star">&#9733;</span>
                        </div>
                        <div class="container">
                            <div class="circles"></div>          
                            <button class="button">Recusar</button>
                            <button class="button2">Aceitar</button>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    passageiroButton.addEventListener('click', function () {
        const selectedRole = localStorage.getItem('selectedRole');
        if (selectedRole === 'ambos' || selectedRole === 'motorista') {
            selectRole(passageiroButton, motoristaButton);
            localStorage.setItem('previousChoice', 'passageiro');
            updateContentBasedOnRole('passageiro');
        }
    });

    motoristaButton.addEventListener('click', function () {
        const selectedRole = localStorage.getItem('selectedRole');
        if (selectedRole === 'ambos' || selectedRole === 'passageiro') {
            selectRole(motoristaButton, passageiroButton);
            localStorage.setItem('previousChoice', 'motorista');
            updateContentBasedOnRole('motorista');
        }
    });

    // Initialize with one button selected based on stored role
    const savedRole = localStorage.getItem('selectedRole');
    if (savedRole === 'motorista') {
        selectRole(motoristaButton, passageiroButton);
        passageiroButton.disabled = true;
        passageiroButton.style.pointerEvents = 'none';
        passageiroButton.style.opacity = '0.5';
        updateContentBasedOnRole('motorista');
    } else if (savedRole === 'passageiro') {
        selectRole(passageiroButton, motoristaButton);
        motoristaButton.disabled = true;
        motoristaButton.style.pointerEvents = 'none';
        motoristaButton.style.opacity = '0.5';
        updateContentBasedOnRole('passageiro');
    } else if (savedRole === 'ambos') {
        enableButtons(); // Ensure buttons are enabled for "ambos"
        const previousChoice = localStorage.getItem('previousChoice');
        if (previousChoice === 'motorista') {
            selectRole(motoristaButton, passageiroButton);
            updateContentBasedOnRole('motorista');
        } else {
            selectRole(passageiroButton, motoristaButton);
            updateContentBasedOnRole('passageiro');
        }
    }

    // Add event listener for redirection on plus button click
    plusButton.addEventListener('click', function () {
        if (passageiroButton.classList.contains('selected')) {
            window.location.href = 'solicitarviagem.html';
        } else if (motoristaButton.classList.contains('selected')) {
            window.location.href = 'criarviagem.html';
        }
    });
});

document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('btn-viagem-container')) {
        window.location.href = 'iniciopassageiro2.html';
    }
});





window.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.display = 'none';
    } else {
        footer.style.display = 'flex'; 
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var savedProfileImageSrc = localStorage.getItem("selectedImageSrc");
    if (savedProfileImageSrc) {
        var profileImage = document.createElement("img");
        profileImage.src = savedProfileImageSrc;
        profileImage.alt = "Foto de Perfil";
        profileImage.style.width = "100%";
        profileImage.style.height = "100%";
        profileImage.style.borderRadius = "50%";
        document.querySelector('.circle').appendChild(profileImage);
    }
});

