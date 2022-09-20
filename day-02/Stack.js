class Stack {
//stacks are first in last out data structures
//that resemble the order of operations of a stack
//of books
  #list = [];

  constructor(list) {
    if (list) this.#list = list;
  }

  //push
  push(item){
    //adds an item to the "top" of the stack
    this.#list.push(item);
  }

  //pop
  pop(){
    return this.#list.pop();
  }

  //peek 
  peek(){
    return this.#list[this.#list.length - 1];
  }

  get list() {
    return this.#list;
  }
}

module.exports = { Stack };
