/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
  constructor () {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = this.getRandomPhrase();
  }

  /**
  * Creates an Array of objects
  */
  createPhrases () {
     const phraseArray = [
                            { tag: 'dessert',
                              phrase: 'a piece of cake' 
                            },
                            { tag: 'food',
                              phrase: 'two peas in a pod' 
                            },
                            { tag: 'cooking',
                              phrase: 'easy as pie' 
                            },
                            { tag: 'running',
                               phrase: 'jumping the gun'
                            },
                           { tag: 'golf',
                               phrase: 'par for the course'
                            }
                          ];
      return phraseArray;
  }

  /**
  * Selects a random phrase from phrases property
  */
  getRandomPhrase () {
    const getRandomQuote = Math.floor(Math.random() * this.phrases.length);
    const assignRandomPhrase = this.phrases[getRandomQuote];
    return new Phrase(assignRandomPhrase);  
  }

  handleInteraction (button) {
   const keyPress = game.activePhrase.checkLetter(button.textContent);
   let key = document.querySelectorAll('#qwerty .key');
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

      for (let i = 0; i < key.length; i += 1) {

        if (keyPress && event.target === key[i]) {
          button.classList.add('chosen');
          button.disabled = true;
          game.activePhrase.showMatchedLetter(button.textContent);
          game.gameOver(game.checkForWin());
        }

        if (!keyPress && event.target === key[i]) {
          button.classList.add('wrong');
          button.disabled = true;
          this.removeLife();
          this.missed += 1;
        }
      }
  }


  /**
  * Checks for winning move it returns {boolean}
  */
  checkForWin () {
    const phraseList = document.querySelectorAll('li.letter');
    let bool;
    let total = 0;
  
    for (let i = 0; i < phraseList.length; i += 1) {
      const isShow = phraseList[i].classList.contains('show');

      if ( isShow ) {
        total += 1;
        } 
      };

      if (total === phraseList.length) {
        bool = true;
      } else {
        bool = false;
      }
        return bool;  
  }


  /**
     * Push the heart image element into an array. Do not use if/else statement
     * because when clicking through the second time the first heart do not
     * respond to the statement. Use instead the if statement only.
  */
  removeLife () {
    const overlay = document.getElementById('overlay');
    const gameOverMessage = document.getElementById('game-over-message');
    const removeHeart = document.querySelectorAll('#scoreboard li img');
    const heartArray = []; 
    
    for (let i = 0; i < removeHeart.length; i += 1) {
      heartArray.push(removeHeart[i]);
    } 
    if (this.missed > 4) {
      this.missed = 0;
    } 
    if (this.missed === 0) {
      heartArray[0].setAttribute("src", "images/lostHeart.png");
    } 
    if (this.missed === 1) {
      heartArray[1].setAttribute("src", "images/lostHeart.png");
    } 
    if (this.missed === 2) {
      heartArray[2].setAttribute("src", "images/lostHeart.png");
    } 
    if (this.missed === 3) {
      heartArray[3].setAttribute("src", "images/lostHeart.png");
    } 
    if (this.missed === 4) {
      heartArray[4].setAttribute("src", "images/lostHeart.png");
      overlay.classList.remove('start');
      overlay.classList.add('lose');
      overlay.style.display = 'flex';
      gameOverMessage.textContent = 'Sorry, better luck next time!';
    } 
  }


  /**
  * Displays game over message {boolean} gameWon
  */
  gameOver (gameWon) {
    let overlay = document.getElementById('overlay');
    const youWinMessage = document.getElementById('game-over-message');
    if (gameWon) {
      overlay.classList.remove('start');
      overlay.classList.add('win');
      overlay.style.display = 'flex';
      youWinMessage.textContent = 'Great Job!';
    }
  }


  /**
  * This method starts the game or resets after player has won or lost.
  */
  startGame () {
    let overlay = document.getElementById('overlay');
    let ul = document.querySelector('#phrase ul');
    let li = document.querySelectorAll('#phrase ul li');
    let keyClass = document.querySelectorAll('#qwerty button');
    let image = document.querySelectorAll('img');
    const winClass = overlay.classList.contains('win');
    const loseClass = overlay.classList.contains('lose');
    const banner = document.getElementById('banner');
    const bannerH3 = document.querySelector('#banner h3');

    for (let i = 0; i < image.length; i += 1) { 
      if (winClass || loseClass) {
        image[i].setAttribute('src', 'images/liveHeart.png');
      } 
    } 

    for (let i = 0; i < keyClass.length; i += 1) {
      if (winClass || loseClass) {
        keyClass[i].removeAttribute('disabled');     
      } 
      if (keyClass[i].className.includes('chosen')) {
        keyClass[i].classList.remove('chosen');
      }
      if (keyClass[i].className.includes('wrong')) {
        keyClass[i].classList.remove('wrong');
      } 
    }

    for (let i = 0; i < li.length; i += 1){
       ul.removeChild(li[i]);
    }

    if (banner.lastChild === bannerH3) {
      banner.removeChild(bannerH3);
      overlay.classList.add('start');
      overlay.classList.remove('lose');
      overlay.classList.remove('win');
      location.reload();
    }

   return this.getRandomPhrase().addPhraseToDisplay();
  }


}
 