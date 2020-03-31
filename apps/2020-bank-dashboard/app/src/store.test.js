import BankStore from './store';

describe('store', () => {
  test('loading an empty transaction list', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([]),
    });

    const store = new BankStore();
    await store.getTransactions();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/transactions');
    expect(store.transactions).toEqual([]);
  });

  test('loading transactions, while users and retailers are pending', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValue({
        json: jest.fn().mockResolvedValue({}),
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue([{ userId: 'mockUserId', retailerId: 'mockRetailerId' }]),
      });

    const store = new BankStore();
    await store.getTransactions();

    expect(global.fetch).toHaveBeenCalledTimes(3);

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/transactions');
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/users/mockUserId');
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/retailers/mockRetailerId');

    expect(store.transactions[0]).toEqual({ userId: 'mockUserId', retailerId: 'mockRetailerId' });
    expect(store.users).toEqual({ mockUserId: { name: 'Loading...' } });
    expect(store.retailers).toEqual({ mockRetailerId: { name: 'Loading...', city: '' } });
  });

  test('loading transactions, with resolved users and retailers', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue([{ userId: 'mockUserId', retailerId: 'mockRetailerId' }]),
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue({ name: 'Joe Bloggs' }),
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue({ name: 'Test Company' }),
      });

    const store = new BankStore();
    const promises = await store.getTransactions();
    await Promise.all(promises);

    expect(global.fetch).toHaveBeenCalledTimes(3);

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/transactions');
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/users/mockUserId');
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/retailers/mockRetailerId');

    expect(store.transactions[0]).toEqual({ userId: 'mockUserId', retailerId: 'mockRetailerId' });
    expect(store.users).toEqual({ mockUserId: { name: 'Joe Bloggs' } });
    expect(store.retailers).toEqual({ mockRetailerId: { name: 'Test Company' } });
  });
});
