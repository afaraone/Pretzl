const { bite } = require('pretzl');
const { Bagel } = require('pretzl');
const { batch } = require('pretzl');
const { bag } = require('pretzl');

const { toHaveBeenEatenMatcher } = require('../../bakery/lib/matchers/toHaveBeenCalled')


let a = new Bagel('mock', [['method1', "hello"], ['method2']], [["variable1", "test"], ["variable2"]]);
let b = new Bagel('mock2', [["method1", "woo"]])
let c = new Bagel('mock3', [], [["variable"],["variable2"]])

function TestClass(inject) {
  this.inject = inject
}

let test = new TestClass(a)

batch("Bagel a", () => {
  bag("method 1 has been called", () => {
    bite(a.method1()).toTasteLike("hello")
    a.stub("method1", "goodbye")
    bite(a.method1()).toTasteLike("goodbye")
    bite(test.inject.method1()).toTasteLike("goodbye")
    test.inject.method1()
    bite(a, "method1").toHaveBeenEaten()
  });
});
