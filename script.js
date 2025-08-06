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
        titulo: 'Template E-mail "Melhores Da Semana"',
        descricao: 'Este é um template para e-mail marketing que eu desenvolvi usando minhas informações mesmo como produtor. Usei as boas praticas para manter responsivo e compativel com os lançadores de e-mails mais usados em 2025.',
        linkSite: 'https://isaacverde.github.io/email-semanal-dois/',
        linkRepositorio: 'https://github.com/IsaacVerde/email-semanal-dois',
        categoria: 'templatesEmail' 
    },
    {
         imagem: './projetos/emails/email 3/Sem título.jpg', // Lembre-se de trocar o caminho da imagem
        titulo: 'Template E-mail "Live Semanal"',
        descricao: 'Este é um template para e-mail marketing que eu fiz, pensando em entregar alguns conteudos para pessoas especificas da minha lista de email, pessoas que ja produzem. Segui as boas praticas com um codigo limpo para maior compatibilidade e Aceitação nos lançadores de e-mail.',
        linkSite: 'https://isaacverde.github.io/email-semanal-tres/',
        linkRepositorio: 'https://github.com/IsaacVerde/email-semanal-tres',
        categoria: 'templatesEmail' 
    },
    {
         imagem: './projetos/emails/email 4/CAPA EMAIL.png', // Lembre-se de trocar o caminho da imagem
        titulo: 'Template E-mail "Autenticidade e estrategia"',
        descricao: 'Este é um email que eu preparei com algumas informaçoes para meu publico artista e mc, explicando por que ser autentico e exclusivo hoje em dia, é necessario, não apenas uma opção. Eu segui as boas praticas para criar esse email deixando um codigo limpo, otimizado e compativel com os lançadores de email.',
        linkSite: 'https://isaacverde.github.io/email-semanal-quatro/',
        linkRepositorio: 'https://github.com/IsaacVerde/email-semanal-quatro',
        categoria: 'templatesEmail' 
    }, {
         imagem: './projetos/emails/email 5/capa.png', // Lembre-se de trocar o caminho da imagem
        titulo: 'Template E-mail "Oferta Relampago"',
        descricao: 'Este email eu desenvolvi para divulgar uma oferta relampago que fiz em meu catalogo. É um email simples mas que reflete os pontos mais fortes e direto do marketing. Usei as boas praticas para maior para compatibilidade com os lançadores de email.',
        linkSite: 'https://isaacverde.github.io/email-semanal-cinco/',
        linkRepositorio: 'https://github.com/IsaacVerde/email-semanal-cinco',
        categoria: 'templatesEmail' 
    },
    , {
         imagem: './projetos/emails/email 6/capa.png', // Lembre-se de trocar o caminho da imagem
        titulo: 'Template E-mail "Podemos Trabalhar Juntos"',
        descricao: 'Este email se refere a uma oportunidade de serviço aos mcs, artistas e produtores, onde eles poderam usar minhas instrumentais seguindo alguns termos de uso. Usei as boas praticas para maior para compatibilidade com os lançadores de email.',
        linkSite: 'https://isaacverde.github.io/email-semanal-seis/',
        linkRepositorio: 'https://github.com/IsaacVerde/email-semanal-seis',
        categoria: 'templatesEmail' 
    },
    , {
         imagem: './projetos/emails/email 7/capaporit.png', // Lembre-se de trocar o caminho da imagem
        titulo: 'Template E-mail "Free Download"',
        descricao: 'Este projeto consiste em um template de e-mail marketing em HTML, desenvolvido para uma campanha real na plataforma Brevo. O objetivo principal é a captação e nutrição de leads (artistas e produtores do cenário do rap), condicionado a termos de uso específicos.Tecnicamente, o layout foi construído do zero utilizando uma estrutura de <table> com CSS 100% inline, garantindo máxima compatibilidade entre os mais variados clientes de e-mail. O design aposta em uma estética profissional com predominância do branco, contrastando com GIFs animados que criam uma conexão autêntica com o universo da música urbana.',
        linkSite: 'https://isaacverde.github.io/email-semanal-sete/',
        linkRepositorio: 'https://github.com/IsaacVerde/email-semanal-sete',
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
