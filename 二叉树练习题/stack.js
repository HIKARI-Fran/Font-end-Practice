class Stack {
    constructor() {

        this.stack = [];
    }
    push(e) {
        this.stack.push(e)
    }
    pop(e) {
        return this.stack.pop()
    }
    peek() {
        return this.stack[this.stack.length - 1]
    }
}
let result = '';
let test = 100;
let newStack = new Stack();