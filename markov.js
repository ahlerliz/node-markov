"use strict";
/** Textual markov chain generator */



class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    this.words = text.split(/[ \r\n]+/);
    // MORE CODE HERE
    // this.words = this.words.bind(this)
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    
    let chains = new Map();

    for (let i = 0; i < this.words.length; i++) {

      if (!chains.has(this.words[i])) {
        chains.set(this.words[i], []);
      }

      let nextWord = this.words[i + 1] || null;
      let currWord = chains.get(this.words[i]);
      currWord.push(nextWord);
    }
    console.log("chains:", chains);
  }

    /** return random text from chains */

    getText(numWords = 100) {
      return
    }
  }


let markovMachine = new MarkovMachine("the cat in the hat")
markovMachine.makeChains()

