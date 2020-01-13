class Event {
  constructor(name, callback) {
    this.name = name;
    this.callback = callback;
    this.isReleased = false;
  }

  release() {
    this.isReleased = true;
  }
}

class Emitter {
  subscriptions = [];

  subscribe(eventName, callback) {
    const event = new Event(eventName, callback);
    this.subscriptions.push(event);
    return event;
  }

  emit(eventName, ...args) {
    this.subscriptions
      .filter(subscription => subscription.name === eventName && !subscription.isReleased)
      .map(event => event.callback(...args));
  }
}

module.exports.Emitter = Emitter;
