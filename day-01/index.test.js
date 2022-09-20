const { reverseSentence, titleCase, oddishOrEvenish, at } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });

  it('should capitalize the first letter of each word in a string', () => {
    expect(titleCase('alchemy rocks gold')).toBe('Alchemy Rocks Gold');
  });

  it('should determine whether a number is Evenish or Oddish', () => {
    expect(oddishOrEvenish(121)).toBe('Evenish');
    expect(oddishOrEvenish(41)).toBe('Oddish');
    expect(oddishOrEvenish('bing bong')).toBe('Invalid Entry');
  });

  it('should return the corresponding item at the given index', () => {
    const testArray1 = at(['a', 'b', 'c', 'd', 'e'], 1);
    const testArray2 = at(['a', 'b', 'c', 'd', 'e'], - 2);
    const testArray3 = at(['beep', 'boop', 'bop'], 'beep');
    expect(testArray1).toBe('b');
    expect(testArray2).toBe('d');
    expect(testArray3).toBe('Invalid Entry');
  });
});
