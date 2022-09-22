const { BinaryTreeNode } = require('.');

describe('node based data structures', () => {
  
  it('should return new binary tree', () => {
    const A = new BinaryTreeNode('A');
    const B = new BinaryTreeNode('B');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');

    B.add(A);
    B.add(D);
    B.add(C);

    expect(B.left.value).toEqual('A');

  });
});
