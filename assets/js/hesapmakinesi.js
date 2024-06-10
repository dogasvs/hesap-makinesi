// screen, process, process-end sıfırlama, esittir
let result = document.querySelector('.screen h1');
let btns = document.querySelectorAll('.process button');
let sonucBtn = document.querySelector('.process-end .esittir');
let silme = document.querySelector('button.btn.btn-del');
let sifirlama = document.querySelector('.process-end .sifirlama');

function handleBtnClick() {
  result.innerText += this.innerText 
}

for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', handleBtnClick);
}

function handleSonucClick() {
  result.innerText = eval(result.innerText);
}

function handleDelete() {
  result.innerText = ' ';
}


// function handleDeleteSingle() {
//   lastInput = result.innerText.slice(-1);
//   lastInput = ' ';
// }

sifirlama.addEventListener('click', handleDelete);
silme.addEventListener('click', handleDelete);
sonucBtn.addEventListener('click', handleSonucClick);