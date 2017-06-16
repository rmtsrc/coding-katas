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
    let newValues = [];

    values.forEach(value => {
      accumulator = value;
      this.methods.forEach(method => {
        accumulator = method(accumulator);
      });
      newValues.push(accumulator);
    });

    return newValues;
  }
}

module.exports = Lazy;
