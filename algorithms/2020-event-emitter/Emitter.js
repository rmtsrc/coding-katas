class Event {
  constructor(name, callback, unsubscribe) {
    this.name = name;
    this.callback = callback;
    this.unsubscribe = unsubscribe;
  }

  release() {
    this.unsubscribe(this.id);
  }
}

class Emitter {
  subscriptions = new Map();

  subscribe(eventName, callback) {
    let events = [];
    if (this.subscriptions.has(eventName)) {
      events = this.subscriptions.get(eventName);
    }

    const unsubscribe = id => {
      const events = this.subscriptions.get(eventName);
      events.splice(id, 1);
    };

    const event = new Event(eventName, callback, unsubscribe);
    event.id = events.push(event);

    this.subscriptions.set(eventName, events);
    return event;
  }

  emit(eventName, ...args) {
    if (this.subscriptions.has(eventName)) {
      this.subscriptions.get(eventName).map(event => event.callback(...args));
    }
  }
}

module.exports.Emitter = Emitter;
