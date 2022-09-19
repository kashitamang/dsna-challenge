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
module.exports = { reverseSentence, titleCase };
