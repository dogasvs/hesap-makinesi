let result = document.querySelector('.screen h1');
let btns = document.querySelectorAll('.process button');
let sonucBtn = document.querySelector('.process-end .esittir');
let silme = document.querySelector('button.btn.btn-del');
let sifirlama = document.querySelector('.process-end .sifirlama');

let isResultDisplayed = false;

function handleBtnClick() {
  const lastChar = result.innerText.slice(-1);

  if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(this.innerText)) {
    return; 
  }

  if (isResultDisplayed) {
    result.innerText = ""; 
    isResultDisplayed = false; 
  }
  
  result.innerText += this.innerText;
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', handleBtnClick);
}

function handleSonucClick() {
    result.innerText = eval(result.innerText); 
    isResultDisplayed = true;
}

function handleDelete() {
  result.innerText = "";
}

sifirlama.addEventListener('click', handleDelete);
silme.addEventListener('click', handleDelete);
sonucBtn.addEventListener('click', handleSonucClick);
