
var closeWindow = document.querySelector('.close-image');
var closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', disappear);

 function disappear() {
   closeWindow.classList.add('hide');
 };


var clipboard = document.querySelector('.clipboard');
var wallet = document.querySelector('.wallet');
var main = document.querySelector('.main');
var main2 = document.querySelector('.main2');

wallet.addEventListener('click', borderToWallet);

function borderToWallet() {
  clipboard.classList.remove('nav-image-border');
  wallet.classList.add('nav-image-border');
  main.classList.add('hide');
  main2.classList.remove('hide');
}

clipboard.addEventListener('click', borderToClipboard)

function borderToClipboard() {
  wallet.classList.remove('nav-image-border');
  clipboard.classList.add('nav-image-border');
  main.classList.remove('hide');
  main2.classList.add('hide');
}
