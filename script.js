
  const botoes = document.querySelectorAll('.btn-filtro');
  const projetos = document.querySelectorAll('.projeto');

  botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
      const filtro = botao.getAttribute('data-filter');

      projetos.forEach((projeto) => {
        const categoria = projeto.getAttribute('data-category');

        if (filtro === 'all' || categoria === filtro) {
          projeto.style.display = 'block';
        } else {
          projeto.style.display = 'none';
        }
      });
    });
  });
