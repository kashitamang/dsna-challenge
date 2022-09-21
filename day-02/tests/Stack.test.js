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

  it('#checkSyntax should check for the correct sequence of brackets and parenthesis', () => {
    const stack = new Stack();
    expect(stack.checkSyntax('if(true) { return; }')).toBe(true);
    expect(stack.checkSyntax('if(true( { return; }')).toBe(false);
    expect(stack.checkSyntax('if(true) { return;')).toBe(false);
    expect(stack.checkSyntax('(if(true) { return; }')).toBe(false);

    // expect(stack.checkSyntax('( true && { name: 'foo' } )`)').toBe(true);
    // expect(stack.checkSyntax('( true && { name: 'foo' ) )')).toBe(false);
    // expect(stack.checkSyntax('( true && ( name: 'foo' } )')).toBe(false);
    expect(stack.checkSyntax('((2 + 3) * (4 + 11 * (2 - 1)))')).toBe(true);

    expect(stack.checkSyntax('((2 + 3) * (4 + 11 * 2 - 1)))')).toBe(false);
    expect(stack.checkSyntax('((2 + 3) * (4 + 11 * (2 - 1))')).toBe(false);
  });

});
