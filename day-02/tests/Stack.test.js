const { Stack } = require('../Stack.js');

describe('Stack', () => {
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
});
