
var closeWindow = document.querySelector('.close-image');
var closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', disappear);

 function disappear() {
   closeWindow.classList.add('closed');
 };
