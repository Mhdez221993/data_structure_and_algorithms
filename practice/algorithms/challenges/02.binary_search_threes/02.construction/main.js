class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value && this.left) {
      this.left.insert(value)
    } else if (value < this.value) {
      this.left = new BST(value)
    }

    if (value >= this.value && this.right) {
      this.right.insert(value)
    } else if (value >= this.value) {
      this.right = new BST(value)
    }

    return this;
  }

  contains(value) {
    if (this.value === value) return true

    if (value < this.value && this.left) {
      return this.left.contains(value)
    } else if (value > this.value && this.right) {
      return this.right.contains(value)
    } else {
      return false
    }
  }

  remove(value, parent = null) {
    if (this.value === value) {
      if (!parent && !this.left && !this.right) return // when there's one node three

      if (!this.left && !this.right) { // when no leaf nodes
        if (parent.right === this) return parent.right = null
        if (parent.left === this) return parent.left = null

      } else if (this.left && this.right) { // when left and right node
        let temp = this.right
        while (temp.left) {
          temp = temp.left  // get the most right left node
        }
        const final = temp.value
        this.right.remove(temp.value, this)
        this.value = final

        return

      } else { // when one leaf node
        if (!parent) {
          if (this.left) {
            this.value = this.left.value
            this.right = this.left.right
            this.left = this.left.left
          } else {
            this.value = this.right.value
            this.right = this.right.right
            this.left = this.right.left
          }
        } else if (parent.left === this) {
          parent.left = this.left || this.right
        } else if (parent.right === this) {
          parent.right = this.right || this.left
        }
        return
      }

    }

    if (value < this.value && this.left) {
      this.left.remove(value, this)
    } else if (value > this.value && this.right) {
      this.right.remove(value, this)
    } else {
      return
    }

    return this;
  }
}

let bst = new BST(1)
// bst.insert(8)
bst.insert(2)
bst.insert(3)
bst.insert(4)
// bst.insert(2)
// bst.insert(13)

// console.log(bst);
// console.log(bst.contains(9));s
bst.remove(1)
console.log(bst);
