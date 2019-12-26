class Lazy {
  constructor () {
    this.methods = [];
  }

  add (fn) {
    const args = Array.from(arguments);
    args.shift();
    this.methods.push({
      fn,
      args,
    });
    return this;
  }

  evaluate (values) {
    return values.map(value =>
      this.methods.reduce(
        (accumulator, method) =>
          method.fn.apply(null, [...method.args, accumulator]),
        value
      )
    );
  }
}

module.exports = Lazy;
