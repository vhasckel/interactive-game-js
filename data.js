const textNodes = [
  {
    id: 1,
    text: "Você acaba de herdar uma pequena fazenda chamada Fazenda Verdejante, situada nos arredores de uma pacata vila chamada Vale Sereno. Com um sonho no coração e vontade de transformar a fazenda em um lugar próspero, você chega à propriedade empoeirada e começa a planejar como revitalizá-la.",
    options: [
      {
        text: "Limpar o terreno e preparar o solo para plantio.",
        setState: { plowTheSoil: true },
        nextText: 2,
      },
      {
        text: "Explorar a vila e conhecer os moradores locais.",
        setState: { meetVillagers: true },
        nextText: 3,
      },
    ],
  },
  {
    id: 2,
    text: "Com o solo preparado, é hora de plantar suas primeiras sementes e começar a cultivar uma variedade de produtos. À medida que as estações mudam, novas safras se tornam disponíveis. As colheitas podem ser vendidas na feira semanal da vila ou usadas para cozinhar deliciosas refeições.",
    options: [
      {
        text: "Plante uma variedade de culturas sazonais.",
        requiredState: (currentState) => currentState.plowTheSoil,
        setState: { plowTheSoil: true, meetVillagers: false },
        nextText: 1,
      },
      {
        text: "Aprenda receitas culinárias e cozinhe pratos para compartilhar com os vizinhos.",
        nextText: 5,
      },
    ],
  },
  {
    id: 3,
    text: "Ao interagir com os moradores locais, você forma laços que podem moldar o futuro da sua fazenda",
    options: [
      {
        text: "Ajude Penny a consertar sua bicicleta quebrada.",
        requiredState: (currentState) => currentState.meetVillagers,
        setState: { plowTheSoil: false, meetVillagers: true },
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: "Penny oferece dicas úteis de cultivo.",
    options: [
      {
        text: "Maravilha!",
        nextText: 1,
      },
    ],
  },
  {
    id: 5,
    text: "Chegou a hora de preparar um prato delicioso, o que você gostaria de comer?",
    options: [
      {
        text: "Cogumelo frito",
        nextText: 6,
      },
      {
        text: "Bolo de chocolate",
        nextText: 7,
      },
      {
        text: "Almoço de fazendeiro",
        nextText: 8,
      },
    ],
  },
  {
    id: 6,
    text: "Você aprendeu a cozinhar cogumelo frito!",
    options: [
      {
        text: "Reiniciar",
        nextText: 1,
      },
      {
        text: "Aprender outra receita",
        nextText: 5,
      },
    ],
    img: "./imgs/Fried_Mushroom.png",
  },
  {
    id: 7,
    text: "Você aprendeu a cozinhar Bolo de chocolate!",
    options: [
      {
        text: "Reiniciar",
        nextText: 1,
      },
      {
        text: "Aprender outra receita",
        nextText: 5,
      },
    ],
    img: "./imgs/Chocolate_Cake.png",
  },
  {
    id: 8,
    text: "Você aprendeu a cozinhar Almoço de fazendeiro",
    options: [
      {
        text: "Reiniciar",
        nextText: 1,
      },
      {
        text: "Aprender outra receita",
        nextText: 5,
      },
    ],
    img: "./imgs/Farmer's_Lunch.png",
  },
];

export default textNodes;
