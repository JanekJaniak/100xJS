const btn = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['yellow', 'blue', 'red', 'grey', 'brown',];

body.style.backgroundColor = 'orange';

const changeColor=()=>{
    console.log('color');
    const colorIndex=[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = colors[colorIndex];
}

btn.addEventListener('click', changeColor);