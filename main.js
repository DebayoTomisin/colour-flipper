const button = document.querySelector('.btn');
let container = document.querySelector('.container');

button.addEventListener('click', changeColor)

function changeColor() {

    let x = Math.round(Math.random() * 256);
    let y = Math.round(Math.random() * 256);
    let z = Math.round(Math.random() * 256);

    let color = `rgb(${x}, ${y}, ${z})`;
    container.style.backgroundColor = color;
}