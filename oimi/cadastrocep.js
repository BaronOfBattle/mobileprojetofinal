document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded foi acionado!");

   
    function addOrReplaceUrlParam(param, value) {
        var url = window.location.href;
        var re = new RegExp("([?&])" + param + "=.*?(&|#|$)(.*)", "gi"),
            hash;

        if (re.test(url)) {
            if (typeof value !== 'undefined' && value !== null)
                return url.replace(re, '$1' + param + "=" + value + '$2$3');
            else {
                hash = url.split('#');
                url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1];
                return url;
            }
        } else {
            if (typeof value !== 'undefined' && value !== null) {
                var separator = url.indexOf('?') !== -1 ? '&' : '?';
                hash = url.split('#');
                url = hash[0] + separator + param + '=' + value;
                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1];
                return url;
            } else
                return url;
        }
    }


    function continuar() {
   
        window.location.href = addOrReplaceUrlParam('voltarDeCadastroCep', 'true');
    }


    var btnContinuar = document.querySelector('.btn-cadastrar');
    if (btnContinuar) {
        btnContinuar.addEventListener('click', function() {
            continuar();
        });
    }
});
