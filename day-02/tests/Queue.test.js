const { Queue } = require('../Queue.js');

describe('Queue Class', () => {
  
  it('#enqueue should add a new item to the end of an array', () => {
    const queue = new Queue();
    queue.enqueue('🍌');
    queue.enqueue('🥥');
    expect(queue.count).toBe(2);
    expect(queue.list).toEqual(['🍌', '🥥']);
  });

  it('#dequeue should remove the first item in the array', () => {
    const queue = new Queue();
    queue.enqueue('🍌');
    queue.enqueue('🥥');
    queue.dequeue();
    expect(queue.count).toBe(1);
    expect(queue.list).toEqual(['🥥']);
  });

  it('#hasNext should determine if there is anything left in queue', () => {
    const queue = new Queue();
    queue.enqueue('🍌');
    queue.enqueue('🥥');
    queue.dequeue();
    expect(queue.hasNext).toBe(true);
    expect(queue.list).toEqual(['🥥']);
  });
});
