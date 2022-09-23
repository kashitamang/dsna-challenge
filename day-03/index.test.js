const { BinaryTreeNode, PersonTreeNode } = require('.');

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

  it('should return new person', () => {
    const Jones = new PersonTreeNode({ name: 'Jones' });
    const Brook = new PersonTreeNode({ name: 'Brook' });
    const Smith = new PersonTreeNode({ name: 'Smith' });
    const Nelson = new PersonTreeNode({ name: 'Nelson' });

    Jones.add(Brook);
    Jones.add(Smith);
    Jones.add(Nelson);

    Jones.findPerson('Brook');
    Jones.findPerson('Smith');

    expect(Jones.findPerson('Brook')).toEqual({ name: 'Brook' });

    expect(Jones.left.value).toEqual('Brook');
    expect(Jones.right.value).toEqual('Smith');
    expect(Jones.right.left.value).toEqual('Nelson');
    
  });
});
