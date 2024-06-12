document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded foi acionado!");


    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }


    var voltarDeFotoPerfil = getParameterByName('voltarDeFotoPerfil');
    if (voltarDeFotoPerfil === 'true') {
     
        var bolinha = document.querySelector('.destaque::before');
        if (bolinha) {
            bolinha.style.backgroundColor = '#79C61E';
        }
        
 
        var etapaSpan = document.querySelector('.destaque span');
        if (etapaSpan) {
            etapaSpan.textContent = 'Etapa concluída';
            etapaSpan.style.color = '#79C61E';
      
            etapaSpan.parentNode.classList.add('concluida');
        }
    }
});
