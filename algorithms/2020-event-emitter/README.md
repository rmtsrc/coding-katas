# Event Emitter

Allows events to be defined, subscribed to (via a callback) and existing subscriptions can be released.

Example usage:

```js
const emitter = new Emitter();

// 1. Support subscribing to events.
const sub = emitter.subscribe('event_name', callback);

// 2. Support emitting events.
// This particular example leads to the `callback` above being invoked with
// `first_value` and `second_value` as parameters and any other parameters.
emitter.emit('event_name', 'first_value', 'second_value');

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above
```
