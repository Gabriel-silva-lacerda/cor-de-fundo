const container = document.querySelector('.container');
const input = document.querySelector('input');
const white = '#fff';
container.style.backgroundColor = `${white}`;

function onchangeBg(){
    container.style.backgroundColor = `${input.value}`;
}

