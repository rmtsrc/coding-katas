export type Categories =
  | 'Bills'
  | 'Eating Out'
  | 'Entertainment'
  | 'General'
  | 'Gifts'
  | 'Groceries'
  | 'Subscriptions'
  | 'Travel';

export type Transaction = { id?: number; amount: string; counterparty: string; category: Categories; currency: string };
