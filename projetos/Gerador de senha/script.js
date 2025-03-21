let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let tamanhoSenha = document.querySelector("#valor");
let senha = document.querySelector("#senha");

let containerSenha = document.querySelector("#container-senha");


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let senhaGerada = "";

tamanhoSenha.innerHTML = sliderElement.value;

slider.oninput = function() {
    tamanhoSenha.innerHTML = this.value;
}

function gerarSenha() {
    let pass = "";

    for(let i = 0, n = charset.length; i <tamanhoSenha.innerHTML; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    containerSenha.classList.remove("hide")

    senha.innerHTML = pass;
    senhaGerada = pass;
}

function copiarSenha() {
    alert("Senha copiada!");
    navigator.clipboard.writeText(senhaGerada);
}


