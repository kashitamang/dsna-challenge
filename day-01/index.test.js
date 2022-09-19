const { reverseSentence, titleCase } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });

  it('should capitalize the first letter of each word in a string', () => {
    expect(titleCase('alchemy rocks gold')).toBe('Alchemy Rocks Gold');
  });
});
