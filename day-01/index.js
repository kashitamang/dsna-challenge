function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function titleCase(sentence) {
  // sentence = 'alchemy is gold'
  const words = sentence.split(' ');
  // words = ['alchemy', 'rocks', 'gold']
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  // words = ['Alchemy', 'Rocks', 'Gold']
  return words.join(' ');
  // 'Alchemy Rocks Gold'
}

function oddishOrEvenish(number) {
  //if sum of all digits is even = evenish
  //if sum of all digits is odd = oddish
  const sum = String(number)
  //convert to string
    .split('')
    //return sum of all digits in the number
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
  //take the sum, if its modulo is even, return 'evenish'
  if (sum % 2 == 0) {
    return 'Evenish';
    // if modulo is odd 'return oddish'
  } else if (sum % 2 == 1) {
    return 'Oddish';
    //all other inputs considered invalid
  } else {
    return 'Invalid Entry';
  }
}
module.exports = { reverseSentence, titleCase, oddishOrEvenish };
