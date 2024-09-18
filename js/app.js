class Calculator {
  constructor() {
    this.num1Element = document.querySelector('#num1')
    this.num2Element = document.querySelector('#num2')
    this.operationElement = document.querySelector('#operation')
    this.calcBtnElement = document.querySelector('#calculateBtn')
    this.resultElement = document.querySelector('#result')

    this.resultNum = 0;

    this.calcBtnElement.addEventListener('click', () => this.compute())
  }

  getNum1Value() {
    return parseFloat(this.num1Element.value)
  }

  getNum2Value() {
    return parseFloat(this.num2Element.value)
  }

  getOperationValue() {
    return this.operationElement.value
  }

  add() {
    this.resultNum = this.getNum1Value() + this.getNum2Value()
  }

  subtract() {
    this.resultNum = this.getNum1Value() - this.getNum2Value()
  }

  multiply() {
    this.resultNum = this.getNum1Value() * this.getNum2Value()
  }

  divide() {
    if (this.getNum2Value() != 0) {
      this.resultNum = this.getNum1Value() / this.getNum2Value()
    }
  }

  compute() {
    console.log('Hi');

    switch (this.getOperationValue()) {
      case 'add':
        this.add()
        break;

      case 'subtract':
        this.subtract()
        break;

      case 'multiply':
        this.multiply()
        break;

      case 'divide':
        this.divide()
        break;

      default:
        break;
    }

    this.resultElement.textContent = this.resultNum
    this.num1Element.value = 0
    this.num2Element.value = 0
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const calculator = new Calculator()
})
