const fs = require('fs/promises');

async function vowelsCounter() {
  const readFile = await fs.readFile('text.txt', 'utf-8');

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const lettersArr = readFile
    .toLocaleLowerCase()
    .split('')
    .filter((char) => vowels.includes(char));

  console.log(lettersArr.length, 'answer');
}
vowelsCounter();

// vowelsCounter
