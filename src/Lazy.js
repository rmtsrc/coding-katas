class Lazy {
  constructor () {
    this.methods = [];
  }

  add (fn) {
    this.methods.push(fn);
    return this;
  }

  evaluate (values) {
    let accumulator;

    return values.map(value => {
      accumulator = value;
      this.methods.forEach(method => {
        accumulator = method(accumulator);
      });
      return accumulator;
    });

  }
}

module.exports = Lazy;
