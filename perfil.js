

document.addEventListener("DOMContentLoaded", function() {
    var savedImageSrc = localStorage.getItem("selectedImageSrc");
    if (savedImageSrc) {
        var circle = document.getElementById('circle');
        var img = new Image();
        img.src = savedImageSrc;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        circle.innerHTML = '';
        circle.appendChild(img);
        document.getElementById('saveButton').style.display = 'block';
    }

    document.getElementById('circle').addEventListener('click', function() {
        document.getElementById('galleryInput').click();
    });

    document.getElementById('galleryInput').addEventListener('change', function(event) {
        var selectedFile = event.target.files[0];
        if (selectedFile && /\.(png|jpe?g)$/i.test(selectedFile.name)) {
            var reader = new FileReader();
            reader.onload = function(event) {
                var circle = document.getElementById('circle');
                var img = new Image();
                img.src = event.target.result;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                circle.innerHTML = '';
                circle.appendChild(img);
                document.getElementById('saveButton').style.display = 'block';

                localStorage.setItem("selectedImageSrc", event.target.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    });

    document.getElementById('saveButton').addEventListener('click', function() {
        var selectedImageSrc = document.getElementById('circle').querySelector('img').src;
        var downloadLink = document.createElement('a');
        downloadLink.href = selectedImageSrc;
        downloadLink.download = 'imagem_selecionada.png';
        downloadLink.click();
    });

    window.addEventListener('scroll', function() {
        var footer = document.querySelector('.footer'); 

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            footer.style.display = 'none';
        } else {
            footer.style.display = 'flex'; 
        }
    });

    document.querySelector('.footer-plus').addEventListener('click', function() {
        const selectedRole = localStorage.getItem('selectedRole');
        if (selectedRole === 'passageiro') {
            window.location.href = 'solicitarviagem.html';
        } else if (selectedRole === 'motorista') {
            window.location.href = 'criarviagem.html';
        } else {
            alert('Por favor, selecione Passageiro ou Motorista na página inicial.');
        }
    });
});
