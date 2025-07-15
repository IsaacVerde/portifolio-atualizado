const botoes = document.querySelectorAll(".btn-filtro");
const projetos = document.querySelectorAll(".projeto");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const filtro = botao.getAttribute("data-filter");

    projetos.forEach((projeto) => {
      const categoria = projeto.getAttribute("data-category");

      if (filtro === "all" || categoria === filtro) {
        projeto.style.display = "block";
      } else {
        projeto.style.display = "none";
      }
    });
  });
});
//DADOS DOS PROJETOS DO PORTIFOLIO ================ DADOS DOS PROJETOS DO PORTIFOLIO=============================
//==============================================================================
//DADOS DOS PROJETOS DO PORTIGOLIO===========================================================DADOS DOS PROJETOS DO 

// ===================================================
// 1. FONTE DE DADOS (O "BANCO DE DADOS" DO SEU PORTFÓLIO)
// ===================================================
// Para adicionar, editar ou remover um projeto, você só mexe aqui.
const projetosData = [
    {
        imagem: './projetos/APP De Previsao do Tempo Com HTML e CSS e Java/Captura de tela 2025-03-07 001647.png',
        titulo: 'App de Previsão do Tempo',
        descricao: 'Busca a previsão do tempo através de uma API pública. Utilizando HTML, CSS e JS.',
        linkRepositorio: 'https://github.com/IsaacVerde/previsao-tempo',
        linkSite: 'https://isaacverde.github.io/previsao-tempo/',
        categoria: 'utilidade' // Categoria para o filtro
    },
    {
        imagem: './projetos/Projeto Calculadora Digital/img/Captura de tela 2025-03-03 162007.png', // Lembre-se de trocar o caminho da imagem
        titulo: 'Calculadora Moderna',
        descricao: 'Uma calculadora com design moderno, feita com HTML, CSS e JS.',
        linkSite: 'https://isaacverde.github.io/calculadora/',
        linkRepositorio: 'https://github.com/IsaacVerde/calculadora',
        categoria: 'calculadora' 
    },
    {
         imagem: './projetos/Gerador de senha/imgs/Captura de tela 2025-03-21 041210.png', // Lembre-se de trocar o caminho da imagem
        titulo: 'Gerador de Senha',
        descricao: 'Um Gerador de senhas com design moderno, feito com HTML, CSS e JS.',
        linkSite: 'https://isaacverde.github.io/gerador-de-senha/',
        linkRepositorio: 'https://github.com/IsaacVerde/gerador-de-senha',
        categoria: 'utilidade' 
    },
     {
         imagem: './projetos/Projeto em CARROSSEL de imagens/Catalogo de beats.png', // Lembre-se de trocar o caminho da imagem
        titulo: 'Carrosel de imagens',
        descricao: 'Neste projeto fiz um carrosel de imagens, a ideia principal era ter algo que levasse as pessoas as minhas redes.Com a ajuda do youtube para este projeto, usei HTML, CSS e JS.',
        linkSite: 'https://projeto-catalogo-hh5edf9f9-isaacs-projects-37b8b073.vercel.app/',
        linkRepositorio: 'https://github.com/IsaacVerde/Projeto-Catalogo',
        categoria: 'galeria' 
    }
    ,
     {
         imagem: './projetos/Rel-gio-Digital/relogio em gtml.png', // Lembre-se de trocar o caminho da imagem
        titulo: 'Relogio Digital',
        descricao: 'Neste projeto fiz um relogio digital com a ajuda do youtube usando, HTML, CSS e jS.',
        linkSite: 'https://relogio-l4udwkmdh-isaacs-projects-37b8b073.vercel.app/',
        linkRepositorio: 'https://github.com/IsaacVerde/Rel-gio-Digital',
        categoria: 'utilidade' 
    },
     {
         imagem: './projetos/site-aritmético/capa site.jpg', // Lembre-se de trocar o caminho da imagem
        titulo: 'Calculadoras',
        descricao: 'Neste projeto fiz um site que tras algumas calculadoras que nao enconctramos no nosso dia a dia, meu proposito para criar esse projeto foi tentar me aventurar bastante com java script. Usei HTML, CSS, JS e algumas APIs Publicas para fazer este projeto.',
        linkSite: 'https://isaacverde.github.io/calculadoras/',
        linkRepositorio: 'https://github.com/IsaacVerde/calculadoras',
        categoria: 'calculadora' 
    },
    {
         imagem: './projetos/resolvedor-de-tretas/capa.jpg', // Lembre-se de trocar o caminho da imagem
        titulo: 'Solucionador De Brigas',
        descricao: 'Neste projeto fiz um site que exibe resultados diferentes ao carregar a pagina.Minha motivação para este projeto foi criar algo semelhante o desafio do curso da angela yu porem ela faz o mesmo com dados. Usei HTMl, JS e CSS.',
        linkSite: 'https://isaacverde.github.io/resolvedor-de-tretas/',
        linkRepositorio: 'https://github.com/IsaacVerde/resolvedor-de-tretas',
        categoria: 'utilidade' 
    },
    {
         imagem: './projetos/emails/email 2/imgs/capa email dois.jpg', // Lembre-se de trocar o caminho da imagem
        titulo: 'Template E-mail "Best of the Week"',
        descricao: 'Este é um template para e-mail marketing que eu desenvolvi usando minhas informações mesmo como produtor. Usei as boas praticas para manter responsivo e compativel com os lançadores de e-mails mais usados em 2025.',
        linkSite: 'https://isaacverde.github.io/email-semanal-um/',
        linkRepositorio: 'https://github.com/IsaacVerde/email-semanal-dois',
        categoria: 'templatesEmail' 
    },
    {
         imagem: './projetos/emails/email 3/imgs/capa email 3.jpg', // Lembre-se de trocar o caminho da imagem
        titulo: 'Template E-mail "Live Week"',
        descricao: 'Este é um template para e-mail marketing que eu fiz, pensando em entregar alguns conteudos para pessoas especificas da minha lista de email, pessoas que ja produzem. Segui as boas praticas com um codigo limpo para maior compatibilidade e Aceitação nos lançadores de e-mail.',
        linkSite: 'https://isaacverde.github.io/email-semanal-tres/',
        linkRepositorio: 'https://github.com/IsaacVerde/email-semanal-tres',
        categoria: 'templatesEmail' 
    },
    
];

// ===================================================
// 2. LÓGICA DE CRIAÇÃO E RENDERIZAÇÃO DOS CARDS
// ===================================================
function renderizarProjetos() {
    // MUDANÇA 1: Corrigido o nome do seletor para corresponder ao seu CSS.
    const containerDeProjetos = document.querySelector('.projetos-container');
    containerDeProjetos.innerHTML = '';

    projetosData.forEach(projeto => {
        // MUDANÇA 2: A classe principal do card é 'projeto', como no seu CSS.
        const projetoBox = document.createElement('div');
        projetoBox.className = 'projeto'; 
        projetoBox.dataset.category = projeto.categoria;

        // MUDANÇA 3: A imagem recebe a classe 'projeto-img'.
        const imagemProjeto = document.createElement('img');
        imagemProjeto.className = 'projeto-img';
        imagemProjeto.src = projeto.imagem;
        imagemProjeto.alt = `Imagem do ${projeto.titulo}`;

        const tituloProjeto = document.createElement('h3');
        tituloProjeto.textContent = projeto.titulo;

        const descricaoProjeto = document.createElement('p');
        descricaoProjeto.textContent = projeto.descricao;

        // O container dos links é opcional, mas ajuda a organizar.
        const linksContainer = document.createElement('div'); 
        linksContainer.className = 'links-projetos';
        
        // MUDANÇA 4: Os links (<a>) recebem a classe 'btn-projeto'.
        const linkRepositorio = document.createElement('a');
        linkRepositorio.className = 'btn-projeto'; 
        linkRepositorio.href = projeto.linkRepositorio;
        linkRepositorio.textContent = 'Repositório';
        linkRepositorio.target = '_blank';
        linkRepositorio.rel = 'noopener noreferrer';

        const linkSite = document.createElement('a');
        linkSite.className = 'btn-projeto';
        linkSite.href = projeto.linkSite;
        linkSite.textContent = 'Ver Site';
        linkSite.target = '_blank';
        linkSite.rel = 'noopener noreferrer';

        // Montagem
        linksContainer.append(linkRepositorio, linkSite);
        projetoBox.append(imagemProjeto, tituloProjeto, descricaoProjeto, linksContainer);
        containerDeProjetos.append(projetoBox);
    });
}

// ===================================================
// 3. LÓGICA DE FILTRAGEM
// ===================================================
function inicializarFiltros() {
    const botoes = document.querySelectorAll('.btn-filtro');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const filtro = botao.dataset.filter;
            // MUDANÇA 5: O seletor aqui também deve ser '.projeto'.
            const projetos = document.querySelectorAll('.projeto'); 

            projetos.forEach(projeto => {
                const categoria = projeto.dataset.category;
                const deveMostrar = filtro === 'all' || categoria === filtro;

                if (deveMostrar) {
                    projeto.classList.remove('escondido');
                } else {
                    projeto.classList.add('escondido');
                }
            });
        });
    });
}

// ===================================================
// EXECUÇÃO INICIAL
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
    renderizarProjetos();
    inicializarFiltros();
});
