
var closeWindow = document.querySelector('.close-image');
var closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', disappear);

 function disappear() {
   closeWindow.classList.add('hide');
 };


var clipboard = document.querySelector('.clipboard');
var wallet = document.querySelector('.wallet');
var main = document.querySelector('.main');

wallet.addEventListener('click', borderToWallet)
// wallet.addEventListener('click', addNewView)

function borderToWallet() {
  clipboard.classList.remove('nav-image-border')
  wallet.classList.add('nav-image-border')
  main.classList.add('hide')
}

clipboard.addEventListener('click', borderToClipboard)

function borderToClipboard() {
  wallet.classList.remove('nav-image-border')
  clipboard.classList.add('nav-image-border')
  main.classList.remove('hide')
}

  // main.insertAdjacentHTML('beforeend', '<h2 clas="new-heading">HELLO</h2>')
