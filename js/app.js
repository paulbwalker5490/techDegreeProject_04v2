/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();

  
document.getElementById('btn__reset').addEventListener('click', () => {
  game.startGame();
    let overlay = document.getElementById('overlay'); 
    overlay.style.display = 'none';
});

// const buttonClick = (event) => { 
//  game.handleInteraction(event.target);
// }

document.getElementById('qwerty').addEventListener('click', (event) => {
  game.handleInteraction(event.target);
}, false);


document.addEventListener('keyup', (event) => {
  game.handleInteraction(event.target);
});





