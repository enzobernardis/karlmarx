let proximo = 0;
const imagens = [
    "img/img3.jpg",
    "img/img2.webp",
    "img/img1.webp"
];

function Trocar(vez) {
    let img = document.getElementById("img");

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

let text1;
let text2;
let text3;

function Validar() {
    text1 = document.getElementById("nome").value;
    text2 = document.getElementById("email").value;
    text3 = document.getElementById("mensagem").value;

    if (text1.trim() === "") {
        alert("Preencha seu nome");
        return false;
    }
    else if (text2.trim() === "") {
        alert("Preencha seu email");
        return false;
    }
    else if (text3.trim() === "") {
        alert("Coloque seu comentário");
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form');
    form.addEventListener('submit', function () {
        let nome = document.querySelector('#nome').value;
        sessionStorage.setItem('text1', nome); // Armazena o valor na sessionStorage
        // window.location.href = "contatofinal.html"; // Redireciona para a página de destino
    });
});
