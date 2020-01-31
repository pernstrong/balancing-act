//find the button
//click button
//remove banner
//
//  function closeFunction() {
//   var closeWindow = document.getElementbyId('close-image');
//   closeWindow.style.display = 'none';
// }
//

var closeWindow = document.querySelector('.close-image');
var closeButton = document.querySelector('.close-button');
// var greetingWindow = document.querySelector('welcome');

closeButton.addEventListener('click', disappear);

 function disappear() {
   console.log('test');
   closeWindow.classList.add('closed');
 }
//
// // closeWindow.addEventListener('click', function() {
// //   greetingWindow.innerHTML = `<p></p>`;
// // });
//
// closeWindow.addEventListener('click', event =>
// {
//   greetingWindow.classList.add('closed');
// });

// closeWindow.addEventListener('click', event => {
//   greetingWindow.innerHTML = ` `;
// });
// var closeWindow = document.querySelector('close-image');
// var greetingWindow = document.querySelector('welcome');
// function byeWindow() {
//   close
// }
console.log('yoooooooo');
