/**
 * Debounce Description:
 * Creates and returns a new debounced version of the passed function
 * which will postpone its execution until after wait milliseconds
 * have elapsed since the last time it was invoked.
 **/
​
// Implementation
function debounce (fn, wait) {
  let debounced = false;

  return function () {
    var args = arguments;

    if (debounced) {
      clearTimeout(debounced)
    }

    debounced = setTimeout(function() {
      console.log(args, fn);
      fn.apply(this, args);
      debounced = false;
    }, wait);
  };
}
​
// Example usage
function sayHello (name, age) {
  // console.log(this);
  console.log('hello '  + name + age)
}

var sayHelloDebounced = debounce(sayHello, 500)

// Initial test - expect sayHello to only be called once
sayHelloDebounced('alice', 1)
// debounced = false
sayHelloDebounced('bob', 2)

setTimeout(function() { sayHelloDebounced('charlie', 3) }, 200)
