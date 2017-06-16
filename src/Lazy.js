class Lazy {
  constructor () {
    this.methods = [];
  }

  add (fn) {
    this.methods.push(fn);
    return this;
  }

  evaluate (values) {
    return values.map(value =>
      this.methods.reduce((acc, method) => method(value), value)
    );
  }
}

module.exports = Lazy;
