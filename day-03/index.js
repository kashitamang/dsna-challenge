class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value === this.value) {
      return null;
    }
    if (node.value < this.value) {
      if (this.left == null) {
        this.left = node;
      } else {
        this.left.add(node);
      }
    } else {
      if (this.right == null) {
        this.right = node;
      } else {
        this.right.add(node);
      }
    }
  }
}

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // implemented as in previous challenge
    if (node.value === this.value) {
      return null;
    }
    if (node.value < this.value) {
      if (this.left == null) {
        this.left = node;
      } else {
        this.left.add(node);
      }
    } else {
      if (this.right == null) {
        this.right = node;
      } else {
        this.right.add(node);
      }
    }
  }

  findPerson(name) {
    //if the name is exactly the input value, return the person.
    if (name === this.value) return this.person;
    //if less, go left and search again
    if (name < this.value) {
      //but if there isn't anything return null
      if (this.left == null) {
        return null;
        //but if there is return the found person
      } else {
        return this.left.findPerson(name);
      }
    } else {
      if (this.right == null) {
        return null;
      } else {
        return this.right.findPerson(name);
      }
    }
  }
}

module.exports = { BinaryTreeNode, PersonTreeNode };
