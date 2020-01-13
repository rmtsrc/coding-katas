const { Emitter } = require('./Emitter');

describe('Emitter', () => {
  test('subscribing and emitting events fires a callback', () => {
    const emitter = new Emitter();

    const callback = jest.fn();
    emitter.subscribe('event_1', callback);

    emitter.emit('event_1', 'first_emit_first_value', 'second_value');

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('first_emit_first_value', 'second_value');
  });

  test('subscribing, unsubscribing and emitting events fires correct callbacks', () => {
    const emitter = new Emitter();

    const callback = jest.fn();

    // 1. Support subscribing to events.
    const event1Sub1 = emitter.subscribe('event_1', callback);
    const event1Sub2 = emitter.subscribe('event_1', callback);
    const event2Sub1 = emitter.subscribe('event_2', callback);
    const event3Sub1 = emitter.subscribe('event_3', callback);

    event2Sub1.release();
    event3Sub1.release();

    // 2. Support emitting events.
    // This particular example should lead to the `callback` above being invoked with `first_value` and `second_value` as parameters.
    emitter.emit('event_1', 'first_emit_first_value', 'second_value');
    emitter.emit('event_1', 'second_emit_first_value', 'second_value', 'third');

    // 3. Support unsubscribing existing subscriptions by releasing them.
    event1Sub1.release(); // `sub` is the reference returned by `subscribe` above
    event1Sub2.release();

    expect(callback).toHaveBeenCalledTimes(4);
    expect(callback.mock.calls[0]).toEqual(['first_emit_first_value', 'second_value']);
    expect(callback.mock.calls[1]).toEqual(['first_emit_first_value', 'second_value']);
    expect(callback.mock.calls[2]).toEqual(['second_emit_first_value', 'second_value', 'third']);
    expect(callback.mock.calls[3]).toEqual(['second_emit_first_value', 'second_value', 'third']);
  });
});
