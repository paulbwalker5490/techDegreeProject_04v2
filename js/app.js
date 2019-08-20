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
// 	game.handleInteraction(event.target);
// }

document.getElementById('qwerty').addEventListener('click', (event) => {
	game.handleInteraction(event.target);
}, false);


document.addEventListener('keyup', (event) => {
  	let btnKey = document.querySelectorAll('#qwerty button');
    let s = String.fromCharCode(event.keyCode).toLowerCase();
    let keyBoardPress = game.activePhrase.checkLetter(s);

     for (let i = 0; i < btnKey.length; i += 1) {

      if (s === btnKey[i].textContent && keyBoardPress) {
        btnKey[i].classList.add('chosen');
        btnKey[i].disabled = true;
        game.activePhrase.showMatchedLetter(btnKey[i].textContent);
        game.gameOver(game.checkForWin());
      }

      if (s === btnKey[i].textContent && !keyBoardPress) {
        btnKey[i].classList.add('wrong');
        btnKey[i].disabled = true;
        game.removeLife();
       	game.missed += 1;
      }   
    } 
});





