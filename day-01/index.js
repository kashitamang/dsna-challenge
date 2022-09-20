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

function at(arr, index){
  if (index >= 0){
    return (arr[index]);
  } else if (index < 0) {
    //to find the index 
    return (arr[arr.length + index]);
  } else {
    return 'Invalid Entry';
  }
}

function anagrams(wordOne, wordTwo){
  const lengthOne = wordOne.length;
  const lengthTwo = wordTwo.length;
  if (lengthOne !== lengthTwo){
    return 'Invalid Entry';
  }
  //wordOne = 'pat'
  const arrayOne = wordOne
    .split('')
    //arrayOne= ['p','a','t']
    .sort()
    //arrayOne = ['a', 't', 'p']
    .join('');
    //arrayOne = 'atp'
  const arrayTwo = wordTwo
    .split('')
    .sort()
    .join('');
  
  if (arrayOne === arrayTwo){
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(number) {
  const arr = [];

  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }
  console.log(arr);
  return arr;
}

module.exports = { reverseSentence, titleCase, oddishOrEvenish, at, anagrams, fizzBuzz };
