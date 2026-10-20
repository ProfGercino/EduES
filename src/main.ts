import './style.css';

const botao = document.querySelector<HTMLButtonElement>('#botao');
const mensagem = document.querySelector<HTMLParagraphElement>('#mensagem');

if (botao && mensagem) {
  botao.addEventListener('click', () => {
    mensagem.textContent = 'Nosso site está funcionando corretamente!';
  });
}