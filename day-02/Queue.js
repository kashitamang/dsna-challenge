class Queue {
  #list = [];

  constructor(list) {
    if (list) this.#list = list;
  }

  //methods

  enqueue(item) {
    //should add a new item to the array
    this.#list.push(item);
  }

  dequeue() {
    //should remove the first item from an array 
    this.#list.shift();
    return this.#list;
  }


  get list() {
    return this.#list;
  }

  get count() {
    return this.#list.length;
  }

  get hasNext() {
    return (this.#list[0] ? true : false);
  }

}

module.exports = { Queue };
