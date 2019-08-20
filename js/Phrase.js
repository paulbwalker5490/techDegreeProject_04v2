/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
 	constructor (phrase) {
		this.phrase = phrase;
 	}

 	/**
 	* Display phrase on game board
 	*/
 	addPhraseToDisplay () {
		const ul = document.querySelector('#phrase ul');
		const textPhrase = game.activePhrase.phrase;
		const banner = document.getElementById('banner');
		const phraseElement = document.createElement('h3');
		const phraseTitle = `Can you guess this ${ textPhrase.tag } phrase?`;

			  banner.appendChild(phraseElement);
			  phraseElement.classList.add('phrase-title');
			  phraseElement.innerHTML += phraseTitle;

		for (let i = 0; i < textPhrase.phrase.length; i += 1) {
			let v = textPhrase.phrase.charAt(i);

			if (v === ' ') {
				let liPhrase = `<li class="space">${v}</li>`
				ul.innerHTML += liPhrase;
			} else {
				let liPhrase = `<li class="hide letter ${v}">${v}</li>`
				ul.innerHTML += liPhrase;
			}	
		}		
 	}

 	/**
 	* Checks if passed letter is in phrase
 	* @param (string) letter - Letter to check
 	*/
 	checkLetter (letter) {
		this.letter = letter;
		const currentPhrase = game.activePhrase.phrase;
		const result = currentPhrase.phrase.indexOf(this.letter) !== -1;
		return result;
 	}

 	/**
 	* If letter matches the phrase letter the matched letter is shown on the screen
 	*/
	showMatchedLetter (key) {
		const list = document.querySelectorAll('li.letter');
		let letter = game.activePhrase.checkLetter(key);

		for (let i = 0; i < list.length; i += 1) {
			if (letter && list[i].textContent === key) {
				list[i].classList.remove('hide');
				list[i].classList.add('show');	
			} 
		}

	}



 }