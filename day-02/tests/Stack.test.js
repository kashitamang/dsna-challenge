const { Stack } = require('../Stack.js');

describe('Stack Class', () => {
  it('#push should add a new item to the top of the stack', () => {
    const stack = new Stack();
    stack.push('🍌');
    expect(stack.peek()).toEqual('🍌');
  });

  it('#pop should remove the last item from the list', () => {
    const stack = new Stack(['🥥', '🍉', '🍌']);
    expect(stack.pop()).toEqual('🍌');
    expect(stack.list).toEqual(['🥥', '🍉']);
  });

  it('#peek should give me the item at the top of the stack', () => {
    const stack = new Stack(['🥥', '🍉', '🍌']);
    expect(stack.peek()).toEqual('🍌');
  });

  describe('reverse', () => {
    it('should reverse an array', () => {
      const stack = new Stack([12, 3, 5, 7]);
      stack.reverseStack();
      expect(stack.list).toEqual([7, 5, 3, 12]);
    });
  });

});
