import { appEntryPoint } from './app';
import { PairingSchedule } from './PairingSchedule';

jest.mock('./PairingSchedule');

describe('app', () => {
  test('appEntryPoint()', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
    };

    const mockAddEventListener = jest.fn((event, cb) => cb(mockEvent));

    const mockQuerySelector = jest
      .fn()
      .mockReturnValueOnce({ addEventListener: mockAddEventListener })
      .mockReturnValueOnce({ value: 'Bob' })
      .mockReturnValueOnce({ innerText: '' });

    appEntryPoint(mockQuerySelector);

    expect(PairingSchedule).toHaveBeenCalledTimes(1);

    const mockPairingScheduleInstance = PairingSchedule.mock.instances[0];

    expect(mockAddEventListener).toHaveBeenCalledWith('submit', expect.any(Function));

    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(mockQuerySelector).toHaveBeenCalledWith('#add-new-person');
    expect(mockQuerySelector).toHaveBeenCalledWith('#person');

    expect(mockPairingScheduleInstance.addPerson).toHaveBeenCalledWith('Bob');
    expect(mockPairingScheduleInstance.getPairs).toHaveBeenCalledTimes(1);

    expect(mockQuerySelector).toHaveBeenCalledWith('#pairs');
  });
});
