const container = document.querySelector('.bananas');

function criarBanana() {
  const banana = document.createElement('div');
  banana.classList.add('banana');

  // posição horizontal aleatória
  banana.style.left = Math.random() * 100 + 'vw';

  // tamanho aleatório
  const size = Math.random() * 200 + 20;
  banana.style.width = size + 'px';
  banana.style.height = size + 'px';

  // velocidade aleatória
  const duration = Math.random() * 5 + 5;
  banana.style.animationDuration = duration + 's';

  container.appendChild(banana);

  // remove depois que sair da tela
  setTimeout(() => {
    banana.remove();
  }, duration * 1000);
}

// cria bananas sem parar
setInterval(criarBanana, 100);