const emitter = new Emitter();

// 1. Support subscribing to events.
const sub = emitter.subscribe('event_name', callback);
const sub2 = emitter.subscribe('event_name', callback);

const sub3 = emitter.subscribe('event_3', callback);
const sub4 = emitter.subscribe('event_4', callback);


sub4.release();
sub3.release();



// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `first_value` and `second_value` as parameters.
emitter.emit('event_name', 'first_value', 'second_value');
//callback('first_value', 'second_value');
//callback('first_value', 'second_value');
emitter.emit('event_name', 'first_value', 'second_value', 'third');


// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above


class Event {
  constructor(name, callback) {
    this.name = name;
    this.callback = callback;
    this.isReleased = false;
  }

  function release() {
    this.isReleased = true;
  }
}

class Emitter {
  subscriptions = [];

  function subscribe(eventName, callback) {
    const event = new Event(eventName, callback);
    subscriptions.push(event);
    return event;
  }

  function emit(eventName, ...args) {
    subscriptions.filter(subscription => subscription.name === eventName && !subscription.isReleased)
      .map(event => event.callback(...args));
  }
}
