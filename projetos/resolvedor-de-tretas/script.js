// Espera todo o conteúdo da página carregar antes de rodar o código
window.onload = function() {
    
    // Lista de possíveis resultados
    const resultados = ["Eu não", "Você sim"];

    // 1. SORTEAR O RESULTADO
    // Gera um número aleatório: 0 ou 1
    const indiceAleatorio = Math.floor(Math.random() * 2);

    // Pega o resultado para o Jogador 1
    const resultadoP1 = resultados[indiceAleatorio];

    // O resultado do Jogador 2 será o outro item da lista.
    // Se o índice sorteado foi 0, o do P2 será 1. Se foi 1, o do P2 será 0.
    const resultadoP2 = resultados[1 - indiceAleatorio];

    // 2. EXIBIR OS RESULTADOS NA TELA
    // Pega os elementos h2 do HTML pelo ID
    document.getElementById('resultadoPlayer1').innerHTML = resultadoP1;
    document.getElementById('resultadoPlayer2').innerHTML = resultadoP2;

    // 3. DECLARAR O "PERDEDOR"
    // Pega o elemento h1 do título
    const titulo = document.querySelector('h1');

    if (resultadoP1 === "Você sim") {
        titulo.innerHTML = "🏆 Jogador 1 se deu mal!";
    } else {
        titulo.innerHTML = "🏆 Jogador 2 se deu mal!";
    }
};