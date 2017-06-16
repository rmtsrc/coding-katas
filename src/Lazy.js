class Lazy {
  constructor () {
    this.methods = [];
  }

  add (fn) {
    this.methods.push({
      fn,
      args: arguments,
    });
    return this;
  }

  evaluate (values) {
    let accumulator;

    return values.map(value => {
      accumulator = value;
      this.methods.forEach(method => {
        if (method.args.length >= 1) {
          method.args[0] = accumulator;
          accumulator = method.fn.apply(null, method.args);
        } else {
          accumulator = method.fn(accumulator);
        }
      });
      return accumulator;
    });
  }
}

module.exports = Lazy;
