const paletaDeCores = document.querySelector('#color-palette');
const buttomRandomColors = document.querySelector('#button-random-color');
const buttons = document.querySelector('#buttons');
const colors = document.querySelectorAll('.color');
const pixels = document.getElementsByClassName('pixel');
const limpar = document.querySelector('#clear-board');
const inputSize = document.querySelector('#board-size');
const buttonVqv = document.querySelector('#generate-board');
const paiPixel = document.querySelector('#pai-pixel-board')


// Botão para gerar cores aleatórias 
const createButtom = () => {
  buttomRandomColors.addEventListener('click', () => {
      for (let index = 1; index < colors.length; index += 1) {
          const red = parseInt(Math.random() * 256);
          const green = parseInt(Math.random() * 256);
          const blue = parseInt(Math.random() * 256);
          const rgb = `rgb(${red}, ${green}, ${blue})`;
          colors[index].style.backgroundColor = rgb;           
       }
    });
  }


// Adicionando um quadro de Pixels 

const generateBoard = (size) => {
  let sizeBoard = size;

  const pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  paiPixel.appendChild(pixelBoard)

  for(let index = 0; index < sizeBoard; index += 1){
  const quadro = document.createElement('div');
  quadro.className = 'linha';
  pixelBoard.appendChild(quadro)

  for(let index2 = 0; index2 < sizeBoard; index2 += 1){
  const quadroPixel = document.createElement('div');
  quadroPixel.className = 'pixel'
  quadro.appendChild(quadroPixel)
    }

   };
  }

// Adicionando a classe selected e criando uma função para a cor selecionada recebe a classe selected 

colors[0].classList.add('selected');

paletaDeCores.addEventListener('click', (event) => {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
});

// Adicionando a função que permite prencher um pixel com a cor selecionada 

for (let index = 0; index < colors.length; index += 1) {
  const red = (Math.random() * 256);
  const green = (Math.random() * 256);
  const blue = (Math.random() * 256);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
if (colors[index] === colors[0]) {
colors[index].style.backgroundColor = 'black';
} else {
colors[index].style.backgroundColor = rgb;
}
}

const quadroPixel = document.querySelector('#pai-pixel-board');
quadroPixel.addEventListener('click', (event) => {

for (let index = 0; index < colors.length; index += 1) {
if (colors[index].classList.contains('selected')) {
event.target.style.backgroundColor = colors[index].style.backgroundColor;
   }
  }
});

// Adicionando botão que limpa o quadro de pixel 

limpar.addEventListener('click', () => {

   for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

// Crie um input que permita à pessoa usuária preencher um novo tamanho para o quadro de pixels

const inputNewBoard = () => {
  let inputNumber = inputSize.value;
  if(inputNumber === ''){
    alert('Board inválido!');
  }else if(inputNumber < 5){
    inputNumber = 5
  }else if(inputNumber > 50){
    inputNumber = 50;
  }

  paiPixel.removeChild(document.getElementById('pixel-board'));
 
  generateBoard(inputNumber);
  }

const newSizeBoard = () => {
  buttonVqv.addEventListener('click', inputNewBoard);
}


newSizeBoard();
generateBoard(5);
createButtom();
