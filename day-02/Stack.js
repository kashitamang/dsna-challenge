class Stack {
  //stacks are first in last out data structures
  //that resemble the order of operations of a stack
  //of books
  #list = [];

  constructor(list) {
    if (list) this.#list = list;
  }

  //push
  push(item) {
    //adds an item to the "top" of the stack
    this.#list.push(item);
  }

  //pop
  pop() {
    return this.#list.pop();
  }

  //peek
  peek() {
    return this.#list[this.#list.length - 1];
  }
  
  checkSyntax(string) {
    const bracketMap = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
    // Creating Stack
    const stack = new Stack();
    
    // Looping through each bracket in the string
    for (const bracket of string) {
      
      // If the bracket is an opening bracket push it onto the stack
      if (bracketMap[bracket]) {
        stack.push(bracket);
      } else {
        // If not, then pop a bracket off the stack.
        const poppedBracket = stack.pop();
        
        // Check to see if the popped bracket is the matching bracket
        if (bracketMap[poppedBracket] !== bracket) {
          return false;
        } else {
          return true;
        }
      }
    }
    return stack.list.length === 0;
  }

  get list() {
    return this.#list;
  }
}




module.exports = { Stack };
