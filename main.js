import textNodes from "./data.js";

const textElement = document.getElementById("text");
const imgElement = document.getElementById("img");
const optionButtonsElement = document.getElementById("option-buttons");

//variável responsável por armazenar o estado do jogo.
let state = {};


//iniciamos o jogo redefinindo a variável state para um novo objeto vazio e chamando a função que irá exibir o conteúdo da história.
const startGame = () => {
  state = {};
  showTextNode(1);
};


//a função recebe textNodeIndex como parâmetro que nos indica o índice do nó do texto a ser exibido.
const showTextNode = (textNodeIndex) => {

  //procuramos o nó de texto correto por meio do id com o método .find()
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  //então o conteúdo do elemento textElement é atualizado com o nó do texto encontrado acima.
  textElement.innerText = textNode.text;

  //remove elementos que sejam filhos do elemento imgElement para não retornar uma imagem quebrada quando o nó não possui uma.
  while (imgElement.firstChild) {
    imgElement.removeChild(imgElement.firstChild)
  }

  //se o nó no qual estamos possuir uma imagem associada, ele cria o elemento e insere a imagem.
  if (textNode.img) {
    const image = document.createElement('img')
    image.src = textNode.img;
    imgElement.appendChild(image)
  }

  //novamente remove todos os elementos que optionButtonsElement possuir
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  //vamos iterar os valores por meio do forEach e então executa o bloco de código da condição do if, criando botões com o texto da opção e também um ouvinte de eventos para lidar com a seleção da opção selecionada.
  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
};

//verificamos nessa função se uma opção deve ser exibida com base nas condições definidas.
const showOption = (option) => {
  return option.requiredState == null || option.requiredState(state);
};

//chamamos essa função quando o jogador seleciona uma opção, atualizando o estado do jogo. state é atualizado e showTextNode() é chamado para exibir o próximo nó de texto com base no índice fornecido na propriedade nextText.
const selectOption = (option) => {
  const nextTextNodeId = option.nextText;
  //se a condição for verdadeira, o jogo é reiniciado chamando o função startGame()
  if (nextTextNodeId <= 0) {
    return startGame();
  }

  //Object.assign é usado para copiar os valores de todas as propriedades de um objeto de origem para um objeto de destino. 'state' é meu destino e 'option.setState' são minhas propriedades de origem
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
};

startGame();
