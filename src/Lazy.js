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
    return values.map(value =>
      this.methods.reduce((accumulator, method) => {
        method.args[0] = accumulator;
        return method.fn.apply(null, method.args);
      }, value)
    );
  }
}

module.exports = Lazy;
