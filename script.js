let proximo = 0;
const imagens = [
    "img/img3.jpg",
    "img/img2.webp",
    "img/img1.webp"
];

function Trocar(vez) {
    let img = window.document.getElementById("img");

    img.classList.add("fade-out");

    setTimeout(function () {
        proximo = (proximo + vez) % imagens.length;

        if (proximo < 0) {
            proximo = imagens.length - 1;
        }

        img.src = imagens[proximo];
        img.classList.remove("fade-out");
    }, 250);
}

function Validar(event) {
    text1 = window.document.getElementById("nome").value;
    text2 = window.document.getElementById("email").value;
    text3 = window.document.getElementById("mensagem").value;

    if (text1 == "") {
        alert("Preencha seu nome");
        text1.focus();
        event.preventDefault();
        return false;
    }
    else if (text2 == "") {
        alert("Preencha seu email");
        text2.focus();
        event.preventDefault();
        return false;
    }
    else if (text3 == "") {
        alert("Coloque seu comentario");
        text3.focus();
        event.preventDefault();
        return false;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        var nome = document.querySelector('#nome').value;
        sessionStorage.setItem('text1', nome); // Armazena o valor na sessionStorage
        window.location.href = "contatofinal.html"; // Redireciona para a página de destino
    });
});