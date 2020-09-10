const btn = document.querySelector('button');
const body = document.querySelector('body');
let colorName = document.querySelector('h1')

body.style.backgroundColor = 'orange';

const changeColor=()=>{
    console.log('color');
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = randomColor;
    colorName.innerHTML= randomColor;
}

btn.addEventListener('click', changeColor);