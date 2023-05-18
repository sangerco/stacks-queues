/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  _get(idx) {
    let current = this.first;
    let count = 0;

    while(current !== null && count !== idx) {
      count++;
      current = current.next
    }

    return current;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    }

    this.last.next = newNode;
    this.last = newNode;

    this.size = this.size + 1;

    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size === 0) {
      throw new Error('Queue is empty!')
    }

    let returnedVal = this.first.val;
    this.first = this.first.next;
    this.size = this.size - 1;
    if(this.size <= 1){
      this.last = this.first;
    }
    return returnedVal;

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size === 0) {
      return true;
    }

    return false
  }
}

module.exports = Queue;
