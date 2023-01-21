//CAPTURA DE ELEMENTOS - window.onload = () => {
const randomBtn = document.getElementById('button-random-color');
const color1 = document.getElementById('color-1');
const color2 = document.getElementById('color-2');
const color3 = document.getElementById('color-3');
const color4 = document.getElementById('color-4');

color1.style.backgroundColor = 'black';
color2.style.backgroundColor = 'blue';
color3.style.backgroundColor = 'pink';
color4.style.backgroundColor = 'red';

//CORES ALEATORIAS
randomBtn.addEventListener('click', () => {
    color1.style.backgroundColor = 'black';
    color2.style.backgroundColor = '#' + parseInt((Math.random() * 0xFFFFFF)).toString(16).padStart(6, '0');
    color3.style.backgroundColor = '#' + parseInt((Math.random() * 0xFFFFFF)).toString(16).padStart(6, '0');
    color4.style.backgroundColor = '#' + parseInt((Math.random() * 0xFFFFFF)).toString(16).padStart(6, '0');

//LOCALSTORAGE
    localStorage.setItem('colorPalette', JSON.stringify([color1.style.backgroundColor, 
        color2.style.backgroundColor, color3.style.backgroundColor, color4.style.backgroundColor]))
})

function paletaCores() {
    const savedColors = JSON.parse(localStorage.getItem('colorPalette'));
    const color1 = document.getElementById('color-1');
    const color2 = document.getElementById('color-2');
    const color3 = document.getElementById('color-3');
    const color4 = document.getElementById('color-4');

    if(savedColors !== null) {
        color1.style.backgroundColor = savedColors[0];
        color2.style.backgroundColor = savedColors[1];
        color3.style.backgroundColor = savedColors[2];
        color4.style.backgroundColor = savedColors[3];
    }  
}

paletaCores();

//CRIA PIXELS - 5 colunas de 5 pixels
const createColumn1 = () => {
    const quadro = document.querySelector("#column1");
    for(let index = 0; index < 5; index += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        quadro.appendChild(pixel)
    }
}
createColumn1();

const createColumn2 = () => {
    const quadro = document.querySelector("#column2");
    for(let index = 0; index < 5; index += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        quadro.appendChild(pixel)
    }
}
createColumn2();

const createColumn3 = () => {
    const quadro = document.querySelector("#column3");
    for(let index = 0; index < 5; index += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        quadro.appendChild(pixel)
    }
}
createColumn3();

const createColumn4 = () => {
    const quadro = document.querySelector("#column4");
    for(let index = 0; index < 5; index += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        quadro.appendChild(pixel)
    }
}
createColumn4();

const createColumn5 = () => {
    const quadro = document.querySelector("#column5");
    for(let index = 0; index < 5; index += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        quadro.appendChild(pixel)
    }

}
createColumn5();

//SELECIONA COR E PIXEL
const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');

//seleciona a cor 1, 2, 3 ou 4 - cor clicada recebe a classe selected
for(let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', (event) => {
        console.log(colors[index].style.backgroundColor);
        const selected = document.querySelector('.selected');
        if(selected){
            selected.classList.remove('selected');
        }
        
        event.target.classList.add('selected');
    })
}

//seleciona o pixel - pixel clicado recebe a classe selecionado
for(let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', (event) => {
        console.log(event.target.style.backgroundColor);
        const selected = document.querySelector('.selected');
        if(selected){
            event.target.style.backgroundColor = selected.style.backgroundColor;
        }
    })
}



//BOTAO LIMPA - os pixels (classe: pixel) é pintado de branco

const clearBtn = document.getElementById('clear-board');

const pintaQuadro = () => {
    const unidadePixels = document.getElementsByClassName('pixel');
    for(let index = 0; index < unidadePixels.length; index += 1) {
        console.log(unidadePixels[index].style.backgroundColor);
        unidadePixels[index].style.backgroundColor = 'white';
    }
}

clearBtn.addEventListener('click', pintaQuadro);

// clearBtn.addEventListener('click', pintaQuadro);

//BOTAO VQV E TAMANHO DO QUADRO
// const sizeInp = document.getElementById('board-size');
// const vqvBtn = document.getElementById('generate-board');
// const container = document.getElementById('pixel-board');
// let boardSize = sizeInp.value;

// function populate(boardSize){
//     // container.style.setProperty('--boardSize', boardSize)
//     for(let index = 0; index < boardSize * boardSize; index++) {
//         const div = document.createElement('div');
//         div.classList.add('pixel')
//         container.appendChild(div)
//         // const div = document.createElement('div')
//         // div.classList.add('pixel')
//     }
// }

// populate(20)

// function tamanhoNull (){
//     if(sizeInp === null &&  === true){
//         alert('Board inválido!');
//     }
// }

// const novoQuadro = 