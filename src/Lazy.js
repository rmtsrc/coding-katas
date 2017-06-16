class Lazy {
  constructor () {
    this.methods = [];
  }

  add (fn, arg) {
    this.methods.push({
      fn,
      arg,
    });
    return this;
  }

  evaluate (values) {
    let accumulator;

    return values.map(value => {
      accumulator = value;
      this.methods.forEach(method => {
        accumulator = method.fn(accumulator, method.arg);
      });
      return accumulator;
    });
  }
}

module.exports = Lazy;
